<template>
	<view class="content home_content">
		<content-bg>
			<view class="home_content-nav">
				<view class="home_content-nav__left">
					<button class="home_content-nav-square" @click.stop="settingClick"></button>
				</view>
				<view class="home_content-nav__right">
					<text class="home_content-nav-time" @click="testClick">{{ time }}</text>
					<uni-badge :text="offlineHistoryCount" absolute="rightTop" size="small">
						<image class="home_content-nav-setting" src="@/static/imgs/Setting.png" mode="aspectFit" @click="offlineClick"></image>				
					</uni-badge>
					<!-- <button class="exit-button" @click="exitAppDialog">
						<image class="home_content-nav-setting" src="@/static/imgs/Close.png" mode="aspectFit" @click="offlineClick"></image>
					</button> -->
				</view>
			</view>
			<view class="home_content-c">
				<view class="home_content-c-item" v-for="(item, i) in funItems" :key="i">
					<image class="home_content-c-item-image" v-for="(fun, j) in item" :key="j" :src="fun.icon" mode="widthFix" @click="funcItemClick(fun)"></image>
				</view>
			</view>
		</content-bg>
		
		
		<!-- <text class="home_content-version">{{ version }}</text> -->
		
		<input-popup ref="popup" :warning="true" title="设置人员登录" placeholder="请输入设置人员" @afterVerify="toSetting"></input-popup>
		<input-popup ref="offlineInputPopup" warning="非工作人员请取消该操作，谢谢！" otherText="关闭应用" :accounts="offlineAccounts" @afterVerify="toOffline" @afterOther="exitApp"></input-popup>
		<upgrade-popup v-if="packageInfo && !updateClosed" :localPackageInfo="packageInfo" @close="updateClose"></upgrade-popup>
		<uni-popup ref="exitAppPopup">
			<uni-popup-dialog content="您确定要关闭【自助学习终端】吗？非工作人员请取消该操作，谢谢！" @confirm="exitApp"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	import moment from 'moment';
	import plugins from '@/utils/plugins';
	import Offline from '@/utils/offline';
	
	export default {
		data() {
			return {
				// 应用更新相关数据
				packageInfo: null,
				offlineAccounts: [
					{ user: 'admin', password: '123456' },
				],
				funItems: [
					[
						{
							title: '自助登记',
							path: '/pages/register/register',
							icon: '../../static/home/Self-register.png'
						}
					],
					[
						{
							title: '自助入矫、资料打印',
							path: '/pages/print/print',
							icon: '../../static/home/EnrollmentPrint.png'
						},
						{
							title: '自助申请、自助打印',
							path: '/pages/apply/apply',
							icon: '../../static/home/Self-application.png'
						},
					],
					[
						{
							title: '综合报到',
							path: '/pages/compound/compound',
							icon: '../../static/home/ComprehensiveCheck-in.png'
						},
						
						{
							title: '信息查询',
							path: '/pages/query/query',
							icon: '../../static/home/InformationService.png'
						}
					],
					[
						{
							title: '请销假',
							path: '/pages/leave/leave',
							icon: '../../static/home/PleaseReturnFromLeave.png'
						},
						{
							title: '自助学习',
							path: '/pages/study/study',
							icon: '../../static/home/Self-aidLearning.png'
						},
						// {
						// 	title: '帮扶中心',
						// 	path: '/pages/activity/activity',
						// 	icon: '../../static/home/AssistanceActivities.png'
						// }
					]
				],
				time: moment().format('YYYY年MM月DD日 HH:mm:ss')
			}
		},
		computed: {
			offlineHistoryCount() {
				const history = this.$store.state.offline.history || [];
				return history.length > 0 ? history.length + '' : '';
			},
			version() {
				return this.$store.getters.version
			},
			updateClosed() {
				return this.$store.getters.updateClosed
			}
		},
		onLoad() {
			this.timeInterval = setInterval(() => {
				this.time = moment().format('YYYY年MM月DD日 HH:mm:ss')
			}, 1000)
			plugins.checkVersion((packageInfo) => {
				console.log(packageInfo);
				this.packageInfo = packageInfo;
			})
		},
		onShow() {
			uni.hideLoading();
			this.$store.commit('clearAuthInfoForCompound')
		},
		onReady() {
			Offline.get();
		},
		onUnload() {
			this.timeInterval && clearInterval(this.timeInterval)
		},
		methods: {
			funcItemClick(fun) {
				uni.navigateTo({
					url: fun.path,
					animationType: 'none'
				})
			},
			settingClick() {
				// if (process.env.NODE_ENV === 'development') {
				// 	uni.navigateTo({
				// 		url: '/pages/set/set',
				// 		animationType: 'none'
				// 	})
				// }
				this.$refs.popup.open()
			},
			offlineClick() {
				this.$refs.offlineInputPopup.open();
			},
			toSetting() {
				uni.navigateTo({
					url: '/pages/set/set',
					animationType: 'none'
				})
			},
			toOffline() {
				uni.navigateTo({
					url: '/pages/offline/offline',
					animationType: 'none'
				})
			},
			testClick() {
				// uni.navigateTo({
				// 	url: '/pages/sample/echarts-demo',
				// 	animationType: 'none'
				// })
			},
			updateClose() {
				this.$store.commit('setUpdateClosed', true)
			},
			exitAppDialog() {
				this.$refs.exitAppPopup.open();
			},
			exitApp() {
				plus.runtime.quit();
			}
		}
	}
</script>

<style lang="scss">
	view {
		display: flex;
		flex-direction: column;
	}
	
	.home_content {
		flex: 1;
		background-color: $theme-dark-color;
		/* #ifndef APP-NVUE */
		width: 100vw;
		height: 100vh;
		/* #endif */
		
		.home_content-nav {
			z-index: 1;
			flex: 1;
			flex-direction: row;
			align-items: center;
			justify-content: flex-end;
			padding-right: 30px;
			
			.home_content-nav__left {
				flex: 1;
				align-self: stretch;
				
				.home_content-nav-square {
					width: 100px;
					height: 100px;
					margin: auto;
					border: none;
					background-color: transparent;
					
					&::after {
						border: none;
					}
				}
				
				:deep(.button-hover) {
					background-color: #ffffff30;
				}
				
			}
			
			.home_content-nav__right {
				flex: 6;
				flex-direction: row;
				align-items: center;
				justify-content: flex-end;
			}
			
			.home_content-nav-setting {
				width: 30px;
				height: 32px;
			}
			
			.exit-button {
				width: 45px;
				height: 45px;
				padding: 0;
				margin: 0;
				margin-left: 15px;
				background-color: transparent;
				
				&::after {
					border: none;
				}
				
				&.button-hover {
					background-color: #fff2;
				}
				
				image {
					width: 100%;
					height: 100%;
				}
			}
			
			.home_content-nav-time {
				color: #fff;
				font-size: 17px;
				font-weight: bold;
				margin-right: 15px;
			}
		}
		
		.home_content-c {
			flex: 4;
			display: flex;
			flex-direction: row;
			// background-color: antiquewhite;
			padding-left: 35px;
			padding-right: 50px;
			
			.home_content-c-item {
				flex: 1;
				margin-left: 15px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				
				.home_content-c-item-image {
					/* #ifndef APP-NVUE */
					width: 100%;
					/* #endif */
					margin-top: 12px;
				}
			}
		}
		
		.home_content-version {
			position: absolute;
			bottom: 10px;
			left: 0;
			right: 0;
			color: #fff;
			font-weight: bold;
			text-align: center;
		}
	}
</style>
