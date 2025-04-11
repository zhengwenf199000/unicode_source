<template>
	<view class="breadcrumb">
		<text class="breadcrumb--textnormal">{{ title }}</text>
		<view class="breadcrumb--textseg"></view>
		<text class="breadcrumb--textaction">{{ actionTitle }}</text>
	</view>
</template>

<script>
	export default {
		name:"breadcrumb",
		props: {
			title: {
				type: String,
				default: ''
			},
			actionTitle: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.breadcrumb {
		height: 50px;
		flex-direction: row;
		align-items: center;
	
		& .breadcrumb--textnormal {
			color: #666;
			font-size: 16px;
			font-weight: bold;
		}
	
		& .breadcrumb--textseg {
			margin-left: 10px;
			margin-right: 12px;
			width: 10px;
			height: 10px;
			border-top: #666 2px solid;
			border-right: #666 2px solid;
			transform: rotate(45deg);
		}
	
		& .breadcrumb--textaction {
			color: $theme-dark-color;
			font-size: 16px;
			font-weight: bold;
		}
	}
</style>