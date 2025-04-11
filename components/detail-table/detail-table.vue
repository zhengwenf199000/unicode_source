<template>
	<scroller class="detail-table">
		<view class="detail-table--row " v-for="(cols, i) in detailMapper" :key="i">
			<view class="detail-table--col" v-for="(col, j) in cols" :key="col.name">
				<view class="detail-table--col---item detail-table--col---left" :class="{ 'detail-table--heighten': cols.length === 1 && !col.normal }">
					<text class="detail-table--col---text">{{ col.name }}</text>
				</view>
				<view class="detail-table--col---item  detail-table--col---right">
					<image v-if="col.isImage" class="detail-table--col---image" :src="detailData[col.valueKey]"></image>
					<text v-else class="detail-table--col---content">{{ tdText(detailData, col) }}</text>
				</view>
			</view>
		</view>
	</scroller>
</template>

<script>
	export default {
		name: "detail-table",
		props: {
			// table用于内容展示的数据
			detailData: {
				type: Object,
				default () {
					return {}
				}
			},
			// 用于展示表头，以及内容取值的相关匹配
			detailMapper: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data() {
			return {

			};
		},
		computed: {
			tdText() {
				return (item, mapper) => {
					if (mapper.fixedValue) return mapper.fixedValue;
					const value = item[mapper.valueKey];
					if (mapper.valueHandler) return mapper.valueHandler(value);
					return value;
				}
			}
		}
	}
</script>

<style lang="scss">
	.detail-table {
		flex: 1;
		display: flex;
		flex-direction: column;
		background-color: #fff;
		border-right: #ddd 1px solid;
		border-top: #ddd 1px solid;

		.detail-table--row {
			display: flex;
			flex-direction: row;
			border-bottom: #ddd 1px solid;
			;
		}

		.detail-table--heighten {
			min-height: 150px;
			height: 100%;
		}

		.detail-table--col {
			flex: 1;
			flex-direction: row;
			align-items: center;

			.detail-table--col---item {
				justify-content: center;
				padding: 12px 15px;
			}

			.detail-table--col---left {
				width: 150px;
				height: 100%;
				background-color: #f7f8f9;
				border-left: #ddd 1px solid;
				align-items: flex-end;
			}

			.detail-table--col---right {
				flex: 1;
				background-color: #fff;
			}

			.detail-table--col---text {
				font-size: 16px;
				color: #333;
			}

			.detail-table--col---image {
				width: 200px;
				height: 150px;
				background-color: #ddd;
			}
			
			.detail-table--col---content {
				font-size: 16px;
				color: #666;
			}

		}
	}
</style>
