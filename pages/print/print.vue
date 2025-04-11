<template>
	<view class="content print_content" @click="capture">
		<content-bg></content-bg>
		
		<view class="content-nav">
			<image class="content-nav-home" src="@/static/imgs/Home.png" mode="widthFix" @click="homeClick"></image>
		</view>
		
		<view class="content-c">
			<text class="print_content-title">自助入矫资料打印</text>
			<text class="print_content-type">请选择业务类型</text>
			<view class="print_content-funcsc">
				<view class="print_content-funcs">
					<image class="print_content-funcs-f" :class="{ 'print_content-funcs-first': i === 0 }" v-for="(func, i) in funcItems" :key="i" :src="func.icon" mode="heightFix" @click="funcClick(func)"></image>
					<!-- <image class="print_content-funcs-f" src="@/static/compound/PhysicalSignCollection.png" mode="heightFix"></image> -->
				</view>				
			</view>
			
			<button type="primary" class="print_content-logout" @click="exitClick">退出</button>
		</view>
	</view>
</template>

<script>
	import userInactiveMixin from '@/mixins/userInactiveMixin';
	export default {
		mixins: [ userInactiveMixin ],
		data() {
			return {
				funcItems: [
					{
						path: '/pages/register/print',
						icon: '../../static/print/BasicInformationPrinting.png'
					},
					{
						path: '/pages/print/talk?type=talk',
						icon: '../../static/print/ConversationRecordPrinting.png',
						// needAuth: true
					},
					{
						path: '/pages/print/talk?type=report',
						icon: '../../static/print/NotificationPrinting.png',
						// needAuth: true
					},
					{
						path: '/pages/print/talk?type=notify',
						icon: '../../static/print/RegistrationNoticePrinting.png',
						// needAuth: true
					}
				]
			}
		},
		methods: {
			homeClick() {
				uni.reLaunch({
					url: '/pages/home/home'
				})
			},
			exitClick() {
				uni.reLaunch({
					url: '/pages/home/home'
				})
			},
			funcClick(func) {
				const authInfo = this.$store.getters.compoundAuthInfo
				if (authInfo || !func.needAuth) {
					uni.navigateTo({
						url: func.path,
						animationType: 'none'
					})					
				} else {
					uni.showToast({
						title: '请先完成日常报到',
						icon: 'none'
					})
				}
			},
		}
	}
</script>

<style lang="scss">
	view {
		display: flex;
		flex-direction: column;
	}
	
	.print_content {
		width: 100vw;
		height: 100vh;
		
		.print_content-title {
			color: $theme-dark-color;
			font-size: 26px;
			font-weight: bold;
			margin-top: 20px;
		}
		
		.print_content-type {
			color: $theme-dark-color;
			font-size: 26px;
			font-weight: bold;
			text-align: center;
			margin-top: 10px;
		}
		
		.print_content-funcsc {
			flex: 1;
			justify-content: center;
			overflow: hidden;
		}
		
		.print_content-funcs {
			flex-direction: row;
			justify-content: center;
			height: 250px;
			
			.print_content-funcs-f {
				/* #ifndef APP-NVUE */
				height: 100%;
				/* #endif */
				margin-left: 30px;
			}
			
			.print_content-funcs-first {
				margin-left: 0;
			}
			
			.print_content-funcs-p {
				width: 30px;
			}
		}
		
		.print_content-logout {
			margin: 0;
			align-self: flex-end;
			background-color: $theme-dark-color;
			margin-bottom: 15px;
			color: #fff;
			width: 100px;
		}
	}
</style>
