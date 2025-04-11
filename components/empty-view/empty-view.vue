<template>
	<view class="empty-view">
		<image class="empty-view--nodata" src="@/static/imgs/nodata.png" mode="aspectFit"></image>
		<text class="empty-view--text">{{ text }}</text>
		<view v-if="action" class="empty-view--action">
			<text class="empty-view--action---text">{{ actionTitle }}</text>
			<button class="empty-view--action---btn" type="primary" size="mini" @click="applyClick">{{ actionBtnTitle }}</button>
		</view>
	</view>
</template>

<script>
	export default {
		name: "empty-view",
		emits: ['applyClick'],
		props: {
			text: {
				type: String,
				default: '当前无数据'
			},
			action: {
				type: Boolean,
				default: false
			},
			actionTitle: {
				type: String,
				default: '可点击这里进行'
			},
			actionBtnTitle: {
				type: String,
				default: '申请'
			}
		},
		data() {
			return {

			};
		},
		methods: {
			applyClick() {
				this.$emit('applyClick')
			}
		}
	}
</script>

<style lang="scss">
	.empty-view {
		flex: 1;
		background-color: #fff;
		align-items: center;
		justify-content: center;

		.empty-view--nodata {
			width: 200px;
			height: 200px;
		}

		.empty-view--text {
			color: #999;
			font-size: 24px;
		}

		.empty-view--action {
			display: flex;
			flex-direction: row;
			margin-top: 20px;

			.empty-view--action---text {
				color: #999;
				font-size: 18px;
			}

			.empty-view--action---btn {
				margin-left: 10px;
				width: 80px;
				line-height: 35px;
				background-color: $theme-dark-color;
			}
		}
	}
</style>
