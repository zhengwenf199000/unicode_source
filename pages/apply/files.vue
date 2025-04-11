<template>
	<view class="content" @click="capture" @touchmove="capture">
		<content-bg></content-bg>

		<view class="content-nav">
			<image class="content-nav-home" src="@/static/imgs/Home.png" mode="widthFix" @click="homeClick"></image>
		</view>
		<view class="content-c files_content">
			<breadcrumb title="自助申请自助打印" actionTitle="文书签署"></breadcrumb>
			<action-table v-if="activitys.length > 0" :tableMapper="tableMapper" :tableData="activitys"
				@viewBtnClick="viewBtnClick"></action-table>
			<empty-view v-else text="当前无文书" :action="false" @applyClick="applyClick"></empty-view>
			<view class="files_content-backbtns">
				<button class="files_content-backbtn" type="primary" @click="getActivitys">刷新</button>
				<button class="files_content-backbtn" type="primary" @click="backClick">返回</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		requestApi,
		apis
	} from '@/utils/http'
	import {
		applyFilesTableMapper
	} from '@/utils/tableMappers'
	import userInactiveMixin from '@/mixins/userInactiveMixin';

	export default {
		mixins: [userInactiveMixin],
		data() {
			return {
				tableMapper: applyFilesTableMapper,
				activitys: []
			}
		},
		computed: {
			token() {
				return this.$store.getters.token
			}
		},
		onLoad(options) {
			this.idnum = options.idnum;
			this.getActivitys()
		},
		methods: {
			getActivitys() {
				uni.showLoading()
				requestApi(apis.getFiles, {
					id_num: this.idnum
				}, {
					token: this.token
				}).then(data => {
					uni.hideLoading()
					this.activitys = data
					console.log(data);
				}).catch(err => {
					uni.showToast({
						title: err,
						icon: 'none'
					})
				})
			},
			viewBtnClick(index, title) {
				const act = this.activitys[index]
				console.log(act, title);
				if (title === '查看') {
					this.openDocument(act)
				} else {
					this.signDocument(act)
				}
			},
			getDocument(act) {
				return requestApi(apis.getFile, {
					id_num: this.idnum,
					businessId: act.businessId,
					documentCode: act.documentCode
				}, {
					token: this.token
				})
			},
			async openDocument(act) {
				uni.showLoading()
				try {
					// const data = await this.getDocument(act)
					const data = act.signedFilePath
					uni.hideLoading()
					uni.downloadFile({
						url: this.handlePath(data),
						success(r) {
							console.log(r.tempFilePath);
							uni.openDocument({
								filePath: r.tempFilePath
							})
						}
					})
				} catch (error) {
					uni.showToast({
						title: err,
						icon: 'none'
					})
				}
			},
			async signDocument(act) {
				uni.showLoading()
				try {
					// const data = await this.getDocument(act)
					const data = act.signedFilePath
					uni.hideLoading()
					this.$store.commit('setTargetDocumentPath', this.handlePath(data))
					this.$store.commit('setTargetDocumentInfo', {...act, id_num: this.idnum})
					uni.navigateTo({
						url: '/pages/apply/sign'
					})
				} catch (error) {
					uni.showToast({
						title: err,
						icon: 'none'
					})
				}
			},
			handlePath(path) {
				// #ifdef H5
				// return path.replace('http://59a96b18.r28.cpolar.top', '/api')
				// #endif
				// return path.replace('http://59a96b18.r28.cpolar.top', 'http://6f61c7d6.r28.cpolar.top')
				return path
			},
			applyClick() {
				uni.navigateTo({
					// url: '/pages/apply/do?idnum=' + this.idnum,
					url: '/pages/blank/blank?idnum=' + this.idnum + '&target=/pages/apply/do',
					animationType: 'none'
				})
			},
			homeClick() {
				uni.reLaunch({
					url: '/pages/home/home'
				})
			},
			backClick() {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">
	view {
		display: flex;
		flex-direction: column;
	}
	
	.content {
		width: 100vw;
		height: 100vh;
	}

	.files_content {
		.files_content-backbtns {
			margin: 10px 0;
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			& .files_content-backbtn {
				margin: 0;
				width: 100px;
				background-color: $theme-dark-color;
			}
		}
	}
</style>