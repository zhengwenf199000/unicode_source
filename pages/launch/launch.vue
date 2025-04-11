<template>
	<view class="launch_content">
		<image class="launch_image" src="@/static/launch/LoginPage.png" mode="heightFix"></image>
		<button class="launch_content-setting-square" @click="settingClick"></button>
		<div class="launch_setting">
			<!-- <image src="@/static/imgs/offline.png" mode="aspectFit" @click="offlineClick"></image> -->
			<image src="@/static/imgs/Setting.png" mode="aspectFit" @click="offlineClick"></image>
		</div>
		<!-- <text class="launch_mac">{{ mac }}</text> -->
		
		<input-popup ref="offlineInputPopup" :accounts="offlineAccounts" @cancel="getToken" @afterVerify="offlineAfterVerify"></input-popup>
		<input-popup ref="popup" :warning="true" title="设置人员登录" placeholder="请输入设置人员" @cancel="getToken" @afterVerify="settingAfterVerify"></input-popup>
		<upgrade-popup v-if="packageInfo" :localPackageInfo="packageInfo"></upgrade-popup>
	</view>
</template>

<script>
	import { requestApi, apis, getMacAddress, updateMacAddress, abortLastRequestTask } from '@/utils/http'
	import plugins from '@/utils/plugins'
	import permision from"@/js_sdk/wa-permission/permission.js"
	
	export default {
		data() {
			return {
				packageInfo: null,
				mac: '',
				offlineAccounts: [
					{ user: 'admin', password: '123456' },
				],
			}
		},
		onLoad() {
			if (process.env.NODE_ENV === 'development' || plugins.forTest) {
				uni.redirectTo({
					url: '/pages/apply/pdf'
				})
			}
			plugins.checkVersion((packageInfo) => {
				console.log(packageInfo);
				this.packageInfo = packageInfo;
			})
			permision.requestAndroidPermission('android.permission.WRITE_EXTERNAL_STORAGE')
			permision.requestAndroidPermission('android.permission.READ_EXTERNAL_STORAGE')
			permision.requestAndroidPermission('android.permission.CAMERA')
		},
		onShow() {
			console.log('on show!');
			this.getToken();
		},
		onHide() {
			uni.hideLoading();
		},
		methods: {
			getToken() {
				// const storageMac = uni.getStorageSync('MacStorageKey')
				// const mac = currentMac
				let mac = getMacAddress()
				if (!mac) {
					mac = this.getMac()
					this.$store.commit('setDeviceMac', mac)
				}
				this.mac = mac
				if (!mac) {
					uni.$u.sleep(500).then(() => {
						uni.showToast({
							title: '请连接网络后再试！',
							icon: "none"
						})					
					})
					return
				}
				console.log(mac);
				uni.showLoading({ title: '系统启动中...' });
				requestApi(apis.token, null, { code: mac }).then(data => {
					uni.hideLoading();
					this.$store.commit('setToken', data)
					uni.redirectTo({
						url: '/pages/home/home',
					})
				}).catch(err => {
					uni.hideLoading();
					err && uni.showToast({
						title: err,
						icon: "none"
					})
					return
				})
			},
			// 获取设备信息
			getMac() {
				// #ifndef APP-PLUS
				return '11:11:11:11:11:11';
				// #endif
				// if (process.env.NODE_ENV === 'development') {
				// 	return '89:5r:68:ff:99:g6';
				// }
				// 随机：F2:31:83:77:A9:07 设备：64:61:40:E2:61:D1\D2:5A:C9:F4:73:35
				const NetworkInterface = plus.android.importClass("java.net.NetworkInterface");
				let networkInterface = NetworkInterface.getByName("eth0");
				if (!networkInterface) {
					networkInterface = NetworkInterface.getByName("wlan0");
				}
				if (!networkInterface) return '11:11:11:11:11:11';
				const mac = networkInterface.getHardwareAddress();
				const address = mac.map(m => uni.$u.prefixZero((m & 0xFF).toString(16), 2).toLowerCase()).join(':')
				return address
			},
			offlineAfterVerify() {
				uni.navigateTo({
					url: '/pages/offline/offline',
					animationType: 'none'
				})
			},
			settingAfterVerify() {
				uni.navigateTo({
					url: '/pages/set/set',
					animationType: 'none'
				})
			},
			offlineClick() {
				abortLastRequestTask();
				this.$refs.offlineInputPopup.open();
			},
			settingClick() {
				abortLastRequestTask();
				// if (process.env.NODE_ENV === 'development') {
				// 	uni.navigateTo({
				// 		// url: '/pages/set/set',
				// 		url: '/pages/home/home',
				// 		animationType: 'none'
				// 	})
				// }
				this.$refs.popup.open()
			}
		}
	}
</script>

<style lang="scss">
	view {
		display: flex;
		flex-direction: column;
	}
	
	.launch_content {
		flex: 1;
		align-items: center;
		overflow: hidden;
		/* #ifndef APP-NVUE */
		width: 100vw;
		height: 100vh;
		/* #endif */

		.launch_image {
			flex: 1;
			/* #ifndef APP-NVUE */
			width: 100%;
			/* #endif */
			background-color: $theme-dark-color;
		}
		
		.launch_content-setting-square {
			position: absolute;
			top: 10vh;
			width: 35vh;
			height: 35vh;
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
		
		.launch_setting {
			position: absolute;
			top: 25px;
			right: 25px;
			
			image {
				width: 32px;
				height: 32px;
				margin: 0 10px;
			}
		}
		
		.launch_mac {
			position: absolute;
			left: 25px;
			top: 25px;
			// width: 30px;
			// height: 32px;
			font-size: 16px;
			color: #fff;
		}
	}
</style>
