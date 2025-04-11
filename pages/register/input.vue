<template>
	<view class="content register_detail_content" @click="capture" @touchmove="capture">
		<content-bg></content-bg>

		<view class="content-nav">
			<image class="content-nav-home" src="@/static/imgs/Home.png" mode="widthFix" @click="homeClick"></image>
		</view>
		<view class="content-c">
			<view class="register_detail_content-breadcrumb">
				<view class="register_detail_content-breadcrumb-item"
					:class="{ 'register_detail_content-breadcrumb-last': path.notCommon }"
					:style="{ opacity: path.hidden ? 0 : 1 }" v-for="(path, i) in registerPaths" :key="path.type"
					@click="breadcrumbItemClick(i)">
					<image v-if="currentPathIndex < i" class="register_detail_content-breadcrumb-item-icon"
						:src="path.icon" mode="widthFix"></image>
					<image v-else class="register_detail_content-breadcrumb-item-icon" :src="path.selectedIcon"
						mode="widthFix"></image>
				</view>
			</view>

			<swiper class="register_detail_content-c" :current="currentPathIndex" :disable-touch="true">
				<swiper-item class="register_detail_content-c-readidcard">
					<!-- <image style="width: 100px; height: 100px" :src="idCardInfo.photoURI"></image> -->
					<image class="register_detail_content-c-readidcard-icon"
						src="@/static/register/detail/SwipeIDCard.png" mode="widthFix"></image>
				</swiper-item>
				<swiper-item class="register_detail_content-c-improveInfo">
					<swiper v-if="ready" class="register_detail_content-c-improveInfo-step0" :current="improveInfoStep"
						:disable-touch="true">
						<swiper-item class="register_detail_content-c-improveInfo-step0">
							<!-- 填写身份信息 -->
							<scroller class="register_detail_content-c-improveInfo-step0">
								<forms-basic ref="basicForms" :idCardInfo="idCardInfo" @change="capture"></forms-basic>
								<view class="register_detail_content-c-improveInfo-step0-next">
									<view></view>
									<button type="primary" class="register_detail_content-c-improveInfo-step0-next-btn"
										@click="improveInfoNext">下一步</button>
								</view>
							</scroller>
						</swiper-item>
						<swiper-item class="register_detail_content-c-improveInfo-step0">
							<scroller class="register_detail_content-c-improveInfo-step0">
								<forms-resume ref="resumeForms" @change="capture"></forms-resume>
								<view class="register_detail_content-c-improveInfo-step0-next">
									<button type="primary" class="register_detail_content-c-improveInfo-step0-next-btn"
										@click="improveInfoLast">上一步</button>
									<button type="primary" class="register_detail_content-c-improveInfo-step0-next-btn"
										@click="improveInfoNext">下一步</button>
								</view>
							</scroller>
						</swiper-item>
						<swiper-item class="register_detail_content-c-improveInfo-step0">
							<scroller class="register_detail_content-c-improveInfo-step0">
								<!-- <forms-relation ref="relationForms"></forms-relation> -->
								<forms-resume ref="relationForms" type="relation" @change="capture"></forms-resume>
								<view class="register_detail_content-c-improveInfo-step0-next">
									<button type="primary" class="register_detail_content-c-improveInfo-step0-next-btn"
										@click="improveInfoLast">上一步</button>
									<button type="primary" class="register_detail_content-c-improveInfo-step0-next-btn"
										@click="submit">提交</button>
								</view>
							</scroller>
						</swiper-item>
					</swiper>
				</swiper-item>
				<swiper-item class="register_detail_content-c-improveInfo">
					<scroller v-if="ready" class="register_detail_content-c-improveInfo-step0">
						<forms-writ ref="writForms" @change="capture"></forms-writ>
						<view class="register_detail_content-c-improveInfo-step0-next">
							<button type="primary" class="register_detail_content-c-improveInfo-step0-next-btn"
								@click="currentPathIndex--">上一步</button>
							<button type="primary" class="register_detail_content-c-improveInfo-step0-next-btn"
								@click="submit">提交</button>
						</view>
						
					</scroller>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import {
		requestApi,
		upload,
		apis,
		DEPT_NAME
	} from '@/utils/http';
	import {
		FormKeyDictionaryMapper,
		marriageOptions
	} from '@/utils/interface';
	import filePicker from '@/utils/filePicker';
	import plugins from '@/utils/plugins';
	import index from '@/utils/index';
	import Offline from '@/utils/offline';
	import {
		createCriminalInfoWithFormData
	} from '@/utils/criminalInfo';
	import moment from 'moment';
	import userInactiveMixin from '@/mixins/userInactiveMixin';
	
	const {
		moduleIdCardAct
	} = plugins

	export default {
		mixins: [ userInactiveMixin ],
		data() {
			return {
				isOfflineMode: false, // 是否离线模式
				isOfflineGather: false, // 只离线生物特征采集
				ready: false,
				// 1、读取身份证：身份证信息
				idCardInfo: {},
				pic_path: '',
				// 当前第几步 0读取身份证 >>> 1完善信息 >>> 2录入文书 >>> 3体征采集
				currentPathIndex: 0,
				// 3、完善信息 step 0:填写信息、1:个人简历、2:家庭关系
				improveInfoStep: 0,
				// 完善信息 - 基本信息
				basicData: null,
				resumeDatas: [], // 完善信息 - 个人简历
				relationDatas: [], // 完善信息 - 家庭关系
				infoCount: 0, // 个人简历和家庭关系录入的条数
				// 录入文书
				writData: null,
				registerPaths: [{
						type: 'readIdCard',
						selectedIcon: '../../static/register/detail/ReadIDCard.png'
					},
					{
						type: 'improveInfo',
						icon: '../../static/register/detail/ImproveInformation1.png',
						selectedIcon: '../../static/register/detail/ImproveInformation.png'
					},
					// {
					// 	type: 'inputDoc',
					// 	icon: '../../static/register/detail/UploadDocuments1.png',
					// 	selectedIcon: '../../static/register/detail/UploadDocuments.png'
					// },
					{
						type: 'recognizeFace',
						icon: '../../static/register/detail/FaceRecognition1.png',
						selectedIcon: '../../static/register/detail/FaceRecognition.png',
						notCommon: true
					},
				]
			}
		},
		watch: {
			currentPath(newV, oldV) {
				this.currentPathChange(newV)
			},
			idCardInfo(newV) {
				// 离线模式不上传身份证
				if (this.isOfflineMode) {
					if (Offline.get().findInfo(newV.number)) {
						uni.showToast({
							title: '您已离线入矫',
							icon: 'none'
						});
						uni.$u.sleep(2000).then(() => {
							uni.navigateBack();
						});
					} else {
						if (this.isOfflineGather) {
							this.stepGather()
						} else {
							this.nextStep();
						}
					}
					return;
				}
				this.nextStep();
				if (newV) {
					const {
						photoURI
					} = newV
					console.log('获取的身份证图像：', photoURI);
					this.upload(photoURI, '', (remote) => {
						this.pic_path = remote
					}, false)
				}
			}
		},
		computed: {
			registerPathsSteps() {
				return this.registerPaths.map(p => p.type)
			},
			currentPath() {
				return this.registerPathsSteps[this.currentPathIndex]
			},
		},
		onLoad(options) {
			this.isOfflineMode = options.mode == 'offline'
			this.isOfflineGather = options.offlineType === 'gather'
		},
		onReady() {
			this.ready = true
			setTimeout(() => {
				this.readIdCardInfo()
			}, 500)
		},
		onUnload() {
			moduleIdCardAct.stop();
		},
		methods: {
			breadcrumbItemClick(i) {
				if (process.env.NODE_ENV === 'development') {
					this.currentPathIndex = i
				}
			},
			currentPathChange(newV) {
				// 读取身份证
				if (newV === 'readIdCard') {
					this.readIdCardInfo()
					return
				}
				if (newV === 'recognizeFace') {
					// 生物特征录入需要使用原生组件，所以重定向到detail.nvue
					let path = '/pages/register/detail?idnum=' + this.idCardInfo.number + '&name=' + this.idCardInfo.name;
					if (this.isOfflineMode) {
						path += '&mode=offline';
					}
					uni.redirectTo({
						url: path
					})
					return
				}
			},
			readIdCardInfo(cb) {
				// uni.showLoading({
				// 	title: '正在读取...'
				// })
				moduleIdCardAct.start(idCardInfo => {
					// uni.showToast({
					// 	title: '身份信息已获取！',
					// 	icon: 'none'
					// })
					if (idCardInfo) {
						// for test
						// idCardInfo.number = '420300198010040018';
						moduleIdCardAct.stop()
						this.idCardInfo = idCardInfo
						cb && cb()
					}
					console.log(idCardInfo);
				})
			},
			upload(path, type, successCallback, toast = true) {
				if (toast) {
					uni.showLoading({
						title: '上传中...'
					})
				}
				upload(path, type).then(remote => {
					uni.hideLoading()
					successCallback(remote)
				}).catch(err => {
					uni.showToast({
						title: err,
						icon: 'none'
					})
				})
			},
			homeClick() {
				if (this.isOfflineMode) {
					uni.navigateBack();
					return;
				}
				uni.reLaunch({
					url: '/pages/home/home',
				})
			},
			nextStep() {
				console.log('next step!');
				this.currentPathIndex++
			},
			stepGather() {
				this.currentPathIndex = 3
			},
			improveInfoLast() {
				this.improveInfoStep--
			},
			async improveInfoNext() {
				console.log(this.$refs.basicForms.getFormData(),777)
				try {
					if (this.improveInfoStep === 0) {
						const basicData = await this.$refs.basicForms.getFormData();
						this.basicData = basicData;
						console.log(basicData);
						if (basicData) {
							this.improveInfoStep++;
						}
					} else if (this.improveInfoStep === 1) {
						const resumeDatas = await this.$refs.resumeForms.getFormDatas();
						this.resumeDatas = resumeDatas || [];
						console.log(JSON.stringify(resumeDatas));
						this.improveInfoStep++
					} else {
						const relationDatas = await this.$refs.relationForms.getFormDatas();
						this.relationDatas = relationDatas || []
						console.log(JSON.stringify(relationDatas));
						this.nextStep()
					}
				} catch (err) {
					uni.showToast({
						title: err[0].errorMessage,
						icon: 'none'
					})
					if (process.env.NODE_ENV === 'development') {
						if (this.improveInfoStep === 2) {
							this.nextStep();
						} else {
							this.improveInfoStep++;
						}
					}
				}
			},
			async submit() {
				const relationDatas = await this.$refs.relationForms.getFormDatas()
				console.log(relationDatas,66666)
				// if (!this.basicData) {
				// 	uni.showToast({
				// 		title: '请先完善基本信息',
				// 		icon: 'none'
				// 	})
				// 	return
				// }
				// if (!this.resumeDatas.length) {
				// 	uni.showToast({
				// 		title: '请先添加个人简历',
				// 		icon: 'none'
				// 	})					
				// 	return
				// }
				// if (!this.relationDatas.length) {
				// 	uni.showToast({
				// 		title: '请先添加家庭关系',
				// 		icon: 'none'
				// 	})					
				// 	return
				// }
				// const writData = await this.$refs.writForms.getFormData().catch(err => {
				// 	uni.showToast({
				// 		title: err[0].errorMessage,
				// 		icon: 'none'
				// 	})
				// })
				// console.log(writData);
				// if (!writData) return;
				const writData = null; // 不需要录入文书
				if (this.isOfflineMode) {
					// this.nextStep();
					Offline.get().addForms(this.basicData, writData, this.idCardInfo.photoURI, this.resumeDatas, this
						.relationDatas);
					this.nextStep();
					return;
				}
				const criminalInfo = createCriminalInfoWithFormData(this.basicData, writData, this.pic_path)
				console.log(criminalInfo);
				uni.showLoading({
					title: '正在入矫...'
				})
				requestApi(apis.addCriminal, criminalInfo, {
					token: this.$store.getters.token
				}).then(result => {
					console.log(result);
					uni.showToast({
						title: '入矫成功！'
					})
					this.infoCount = this.resumeDatas.length + this.relationDatas.length
					if (this.infoCount > 0) {
						// 入矫成功保存个人简历与家庭关系
						uni.showLoading({
							title: '简历和家庭关系上传...'
						})
						// this.saveResume()
						this.saveRelation()
					} else {
						this.nextStep()
					}
				}).catch(err => {
					uni.showToast({
						title: err,
						icon: 'none'
					})
				})
			},
			saveResume() {
				this.resumeDatas.forEach(resume => {
					let start_date = resume.start_date || ''
					let end_date = resume.end_date || ''
					start_date = moment(start_date, 'yyyy-DD-MM').format('yyyy-DD-MM HH:mm:ss')
					end_date = moment(end_date, 'yyyy-DD-MM').format('yyyy-DD-MM HH:mm:ss')
					requestApi(apis.saveResume, {
						...resume,
						id_num: this.idCardInfo.number,
						start_date,
						end_date
					}, {
						token: this.$store.getters.token
					}).then(result => {
						this.infoCount--
						if (this.infoCount <= 0) {
							this.nextStep()
							uni.showToast({
								title: '上传成功!'
							})
						}
					}).catch(err => {
						this.infoCount--
						if (this.infoCount <= 0) {
							this.nextStep()
							uni.showToast({
								title: err,
								icon: 'none'
							})
						}
					})
				})
			},
			saveRelation() {
				this.relationDatas.forEach(relation => {
					requestApi(apis.saveRelation, {
						...relation,
						id_num: this.idCardInfo.number
					}, {
						token: this.$store.getters.token
					}).then(result => {
						this.infoCount--
						if (this.infoCount <= 0) {
							this.nextStep()
							uni.showToast({
								title: '上传成功!'
							})
						}
					}).catch(err => {
						this.infoCount--
						if (this.infoCount <= 0) {
							this.nextStep()
							uni.showToast({
								title: err,
								icon: 'none'
							})
						}
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	view {
		display: flex;
		flex-direction: column;
	}

	swiper-item {
		display: flex;
		flex-direction: column;
	}

	.register_detail_content {
		position: relative;
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;

		.register_detail_content-breadcrumb {
			display: flex;
			flex-direction: row;
			margin-top: 10px;

			.register_detail_content-breadcrumb-item {
				flex: 1;

				.register_detail_content-breadcrumb-item-icon {
					/* #ifndef APP-NVUE */
					width: 100%;
					/* #endif */
				}
			}

			.register_detail_content-breadcrumb-last {
				flex: 0.92;
			}
		}

		.register_detail_content-c {
			flex: 1;
			margin: 10px 0;
			background-color: #fff;
			overflow: hidden;

			.register_detail_content-c-readidcard {
				flex: 1;
				align-items: center;
				justify-content: center;

				.register_detail_content-c-readidcard-icon {
					width: 480px;
				}
			}

			.register_detail_content-c-improveInfo {
				flex: 1;
				display: flex;
				overflow: hidden;
				background-color: #f8f9f9;

				.register_detail_content-c-improveInfo-step0 {
					/* #ifndef APP-NVUE */
					width: 100%;
					height: 100%;
					overflow: scroll;
					/* #endif */

					.register_detail_content-c-improveInfo-step0-next {
						margin-bottom: 15px;
						margin-left: 25px;
						margin-right: 25px;
						flex-direction: row;
						justify-content: space-between;

						.register_detail_content-c-improveInfo-step0-next-btn {
							margin: 0;
							background-color: $theme-dark-color;
							color: #fff;
							width: 100px;
							height: 40px;
							line-height: 40px;
						}
					}
				}
			}
		}
	}
</style>
