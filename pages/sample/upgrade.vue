<template>
	<view>
		<upgrade-popup v-if="packageInfo && !updateClosed" :localPackageInfo="packageInfo" @close="updateClose"></upgrade-popup>
	</view>
</template>

<script>
	import plugins from '@/utils/plugins';
	
	export default {
		data() {
			return {
				packageInfo: null,
				updateClosed: false
			}
		},
		onLoad() {
			
		},
		onShow() {
			plugins.checkVersion((packageInfo) => {
				console.log('获取到的本地包：', packageInfo);
				this.packageInfo = packageInfo
			})
		},
		methods: {
			updateClose() {
				uni.navigateBack();
			}
		}
	}
</script>

<style>

</style>
