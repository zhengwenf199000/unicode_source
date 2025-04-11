<template>
	<view class="content-bg">
		<view class="content-bg">
			<image class="content-bg_image" src="@/static/home/HomePage.png" mode="widthFix"></image>
			<view class="content-bg_title">
				<view class="content-bg_title__placeholder">
					<image class="content-bg_title__placeholder___logo" src="@/static/imgs/logo.png" mode="widthFix"></image>
				</view>
				<text class="content-bg_title__text" style="font-size: 60px;">{{ systemName }}社区矫正自助终端</text>
				<text v-if="isCountdown" class="content-bg__countdown">{{ leftTime }}秒后关闭</text>
			</view>
			<view class="content-bg_placeholder"></view>			
		</view>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: "content-bg",
		data() {
			return {
				
			};
		},
		computed: {
			systemName() {
				return this.$store.getters.systemName
			},
			leftTime() {
				return this.userInactivePage.leftTime;
			},
			isCountdown() {
				return this.userInactivePage.isCountdown;
			},
		},
		inject: {
			userInactivePage: {
				from: 'userInactivePage',
				default() {
					return {}
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.content-bg__countdown {
		position: absolute;
		/* top: 10px; */
		right: 150px;
		color: white;
		font-size: 15px;
	}
</style>