<template>
	<view class="mask flex-center">
		<view class="upgrade-content botton-radius">
			<view class="content-top">
				<text class="content-top-text">{{title}}</text>
				<image class="content-top" style="top: 0;" mode="widthFix" src="@/static/version/bg_top.png">
				</image>
			</view>
			<view class="content-header"></view>
			<view class="content-body">
				<view class="title">
					<text>{{subTitle}}</text>
					<!-- <text style="padding-left:20rpx;font-size: 0.5em;color: #666;">v.{{version}}</text> -->
				</view>
				<view class="body">
					<scroll-view class="box-des-scroll" scroll-y="true">
						<text class="box-des">
							{{contents}}
						</text>
					</scroll-view>
				</view>
				<view class="footer flex-center">
					<template v-if="isAppStore">
						<button class="content-button" style="border: none;color: #fff;" plain @click="jumpToAppStore">
							{{downLoadBtnTextiOS}}
						</button>
					</template>
					<template v-else>
						<template v-if="!downloadSuccess">
							<view class="progress-box flex-column" v-if="downloading">
								<progress class="progress" border-radius="35" :percent="downLoadPercent"
									activeColor="#3DA7FF" show-info stroke-width="10" />
								<view style="width:100%;font-size: 14px;display: flex; flex-direction: row;justify-content: space-around;">
									<text>{{downLoadingText}}</text>
									<text>({{downloadedSize}}/{{packageFileSize}}M)</text>
								</view>
							</view>

							<button v-else class="content-button" style="border: none;color: #fff;" plain
								@click="updateApp">
								{{downLoadBtnText}}
							</button>
						</template>
						<button v-else-if="downloadSuccess && !installed" class="content-button"
							style="border: none;color: #fff;" plain :loading="installing" :disabled="installing"
							@click="installPackage">
							{{installing ? '正在安装……' : '下载完成，立即安装'}}
						</button>

						<button v-if="installed && isWGT" class="content-button" style="border: none;color: #fff;" plain
							@click="restart">
							安装完毕，点击重启
						</button>
					</template>
				</view>
			</view>

			<image v-if="!is_mandatory" class="close-img" src="@/static/version/app_update_close.png"
				@click.stop="closeUpdate"></image>
		</view>
	</view>
</template>

<script>
	import plugins from '@/utils/plugins';
	const { versionCompare } = plugins;
	const localFilePathKey = 'UNI_ADMIN_UPGRADE_CENTER_LOCAL_FILE_PATH'
	const platform_iOS = 'iOS';
	let downloadTask = null;
	let openSchemePromise

	export default {
		emits: ['close'],
		props: {
			localPackageInfo: {
				type: Object,
			}
		},
		data() {
			return {
				// 从之前下载安装
				installForBeforeFilePath: '',

				// 安装
				installed: false,
				installing: false,

				// 下载
				downloadSuccess: false,
				downloading: false,

				downLoadPercent: 0,
				downloadedSize: 0,
				packageFileSize: 0,

				tempFilePath: '', // 要安装的本地包地址

				// 默认安装包信息
				title: '更新日志',
				contents: '',
				is_mandatory: false,

				// 可自定义属性
				subTitle: '发现新版本',
				downLoadBtnTextiOS: '立即跳转更新',
				downLoadBtnText: '立即下载更新',
				downLoadingText: '安装包下载中，请稍后'
			}
		},
		watch: {
			localPackageInfo(newV) {
				this.watchLocalPackageInfo(newV);
			}
		},
		created() {
			this.watchLocalPackageInfo(this.localPackageInfo);
		},
		onBackPress() {
			// 强制更新不允许返回
			if (this.is_mandatory) {
				return true
			}

			downloadTask && downloadTask.abort()
		},
		onHide() {
			openSchemePromise = null
		},
		computed: {
			isWGT() {
				return this.type === 'wgt'
			},
			isiOS() {
				return false;
			},
			isAppStore() {
				return false;
			}
		},
		methods: {
			watchLocalPackageInfo(newV) {
				const localPackageInfo = newV;
				if (!localPackageInfo) {
					console.error('安装包信息为空，请检查后重试')
					return;
				};
				
				const requiredKey = ['version', 'url', 'type']
				for (let key in localPackageInfo) {
					if (requiredKey.indexOf(key) !== -1 && !localPackageInfo[key]) {
						console.error(`参数 ${key} 必填，请检查后重试`)
						return;
					}
				}
				this.is_mandatory = localPackageInfo.forceUpdate,
				this.contents = localPackageInfo.updateInfo
				Object.assign(this, localPackageInfo)
				this.checkLocalStoragePackage()
			},
			checkLocalStoragePackage() {
				// 如果已经有下载好的包，则直接提示安装
				const localFilePathRecord = uni.getStorageSync(localFilePathKey)
				if (localFilePathRecord) {
					const {
						version,
						savedFilePath,
						installed
					} = localFilePathRecord

					// 比对版本
					if (!installed && versionCompare(version, this.version) === 0) {
						this.downloadSuccess = true;
						this.installForBeforeFilePath = savedFilePath;
						this.tempFilePath = savedFilePath
					} else {
						// 如果保存的包版本小 或 已安装过，则直接删除
						this.deleteSavedFile(savedFilePath)
					}
				}
			},
			async closeUpdate() {
				if (this.downloading) {
					if (this.is_mandatory) {
						return uni.showToast({
							title: '下载中，请稍后……',
							icon: 'none',
							duration: 500
						})
					}
					
					uni.showModal({
						title: '是否取消下载？',
						cancelText: '否',
						confirmText: '是',
						success: res => {
							if (res.confirm) {
								downloadTask && downloadTask.abort()
								this.$emit('close')
							}
						}
					});
					return;
				}

				if (this.downloadSuccess && this.tempFilePath) {
					// 包已经下载完毕，稍后安装，将包保存在本地
					await this.saveFile(this.tempFilePath, this.version)
					this.$emit('close')
					return;
				}

				this.$emit('close')
			},
			updateApp() {
				this.checkStoreScheme().catch(() => {
					this.downloadPackage()
				})
			},
			// 跳转应用商店
			checkStoreScheme() {
				const storeList = (this.store_list || []).filter(item => item.enable)
				if (storeList && storeList.length) {
					storeList
						.sort((cur, next) => next.priority - cur.priority)
						.map(item => item.scheme)
						.reduce((promise, cur, curIndex) => {
							openSchemePromise = (promise || (promise = Promise.reject())).catch(() => {
								return new Promise((resolve, reject) => {
									plus.runtime.openURL(cur, (err) => {
										reject(err)
									})
								})
							})
							return openSchemePromise
						}, openSchemePromise)
					return openSchemePromise
				}

				return Promise.reject()
			},
			downloadPackage() {
				this.downloading = true;

				//下载包
				downloadTask = uni.downloadFile({
					url: this.url,
					success: res => {
						if (res.statusCode == 200) {
							this.downloadSuccess = true;
							this.tempFilePath = res.tempFilePath

							// 强制更新，直接安装
							if (this.is_mandatory) {
								this.installPackage();
							}
						}
					},
					complete: () => {
						this.downloading = false;

						this.downLoadPercent = 0
						this.downloadedSize = 0
						this.packageFileSize = 0

						downloadTask = null;
					}
				});

				downloadTask.onProgressUpdate(res => {
					this.downLoadPercent = res.progress;
					this.downloadedSize = (res.totalBytesWritten / Math.pow(1024, 2)).toFixed(2);
					this.packageFileSize = (res.totalBytesExpectedToWrite / Math.pow(1024, 2)).toFixed(2);
				});
			},
			installPackage() {
				// #ifdef APP-PLUS
				// wgt资源包安装
				if (this.isWGT) {
					this.installing = true;
				}
				plus.runtime.install(this.tempFilePath, {
					force: false
				}, async res => {
					this.installing = false;
					this.installed = true;

					// wgt包，安装后会提示 安装成功，是否重启
					if (this.isWGT) {
						// 强制更新安装完成重启
						if (this.is_mandatory) {
							uni.showLoading({
								icon: 'none',
								title: '安装成功，正在重启……'
							})

							setTimeout(() => {
								uni.hideLoading()
								this.restart();
							}, 1000)
						}
					} else {
						const localFilePathRecord = uni.getStorageSync(localFilePathKey)
						uni.setStorageSync(localFilePathKey, {
							...localFilePathRecord,
							installed: true
						})
					}
				}, async err => {
					// 如果是安装之前的包，安装失败后删除之前的包
					if (this.installForBeforeFilePath) {
						await this.deleteSavedFile(this.installForBeforeFilePath)
						this.installForBeforeFilePath = '';
					}

					// 安装失败需要重新下载安装包
					this.installing = false;
					this.installed = false;

					uni.showModal({
						title: '更新失败，请重新下载',
						content: err.message,
						showCancel: false
					});
				});

				// 非wgt包，安装跳出覆盖安装，此处直接返回上一页
				if (!this.isWGT && !this.is_mandatory) {
					uni.navigateBack()
				}
				// #endif
			},
			restart() {
				this.installed = false;
				// #ifdef APP-PLUS
				//更新完重启app
				plus.runtime.restart();
				// #endif
			},
			saveFile(tempFilePath, version) {
				return new Promise((resolve, reject) => {
					uni.saveFile({
						tempFilePath,
						success({
							savedFilePath
						}) {
							uni.setStorageSync(localFilePathKey, {
								version,
								savedFilePath
							})
						},
						complete() {
							resolve()
						}
					})
				})
			},
			deleteSavedFile(filePath) {
				uni.removeStorageSync(localFilePathKey)
				return uni.removeSavedFile({
					filePath
				})
			},
			jumpToAppStore() {
				plus.runtime.openURL(this.url);
			}
		}
	}
</script>

<style>
	page {
		background: transparent;
	}

	.flex-center {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.mask {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 10;
		background-color: rgba(0, 0, 0, .65);
	}

	.botton-radius {
		border-bottom-left-radius: 30rpx;
		border-bottom-right-radius: 30rpx;
	}

	.upgrade-content {
		position: relative;
		top: 0;
		width: 400px;
		background-color: #fff;
		box-sizing: border-box;
		padding: 0 20px;
		font-family: Source Han Sans CN;
	}

	.text {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		line-height: 200px;
		text-align: center;
		color: #FFFFFF;
	}

	.content-top {
		position: absolute;
		top: -150px;
		left: 0;
		width: 100%;
		/* height: 270rpx; */
	}

	.content-top-text {
		font-size: 20px;
		font-weight: bold;
		color: #F8F8FA;
		position: absolute;
		top: 60px;
		left: 25px;
		z-index: 1;
	}

	.content-header {
		height: 35px;
	}

	.title {
		font-size: 16px;
		font-weight: bold;
		color: #3DA7FF;
		line-height: 38px;
	}

	.footer {
		height: 75px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}

	.box-des-scroll {
		box-sizing: border-box;
		/* padding: 0 20px; */
		height: 100px;
		text-align: left;
	}

	.box-des {
		font-size: 14px;
		color: #000000;
		line-height: 25px;
	}

	.progress-box {
		width: 100%;
	}

	.progress {
		width: 90%;
		height: 20px;
		border-radius: 35px;
	}

	.close-img {
		width: 35px;
		height: 35px;
		z-index: 1000;
		position: absolute;
		bottom: -60px;
		left: calc(50% - 35px / 2);
	}

	.content-button {
		text-align: center;
		flex: 1;
		font-size: 15px;
		font-weight: 400;
		color: #FFFFFF;
		border-radius: 20px;
		margin: 0 10px;

		height: 40px;
		line-height: 40px;

		background: linear-gradient(to right, #1785ff, #3DA7FF);
	}

	.flex-column {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
