<template>
	<view class="action-table-container">
		<view class="action-table">
			<view class="action-table--row action-table--radius">
				<view class="action-table-th" :class="{ isView: mapper.isView }" v-for="(mapper, i) in tableMapper" :key="i">
					<text class="action-table-th--text">{{ mapper.name }}</text>
				</view>
			</view>
		</view>
		<scroller class="action-scroller">
			<view class="action-table">
				<view class="action-table--row"
					:class="{ 'action-table--rowodd': index % 2 === 1, 'action-table--roweven': index % 2 === 0 }"
					v-for="(item, index) in tableData" :key="index">
					<view class="action-table-td" :class="{ isView: mapper.isView }" v-for="(mapper, i) in tableMapper" :key="i">
						<template v-if="mapper.isView">
							<button v-for="(title, i) in getViewTitles(mapper.viewTitle)" :key="i"
								class="action-table-body--btn" type="primary" size="mini"
								@click="viewBtnClick(index, title)">{{ title }}</button>
						</template>
						<image v-else-if="mapper.isImage" class="action-table-body--image" :src="item[mapper.valueKey]">
						</image>
						<text v-else class="action-table-td--text">{{ tdText(item, mapper) }}</text>
					</view>
				</view>
			</view>
		</scroller>
	</view>
</template>

<script>
	export default {
		name: "action-table",
		emits: ['viewBtnClick'],
		props: {
			// table用于内容展示的数据
			tableData: {
				type: Array,
				default () {
					return []
				}
			},
			// 用于展示表头，以及内容取值的相关匹配
			tableMapper: {
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
		},
		methods: {
			viewBtnClick(index, title) {
				this.$emit('viewBtnClick', index, title)
			},
			getViewTitles(title) {
				if (Array.isArray(title)) return title
				return [title || '查看']
			}
		}
	}
</script>

<style lang="scss" scoped>
	.action-table-container {
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow: scroll;

		.action-table--radius {
			border-radius: 6px;
		}

		.action-table--row {
			display: flex;
			flex-direction: row;
			align-items: center;
			background-color: #fff;
			padding: 10px 0;
		}

		.action-table--rowodd {
			background-color: #fff;
		}

		.action-table--roweven {
			background-color: #f7f8f9;
		}

		.action-table-th {
			display: flex;
			flex-direction: column;
			flex: 1;
			align-items: center;

			&--text {
				color: $theme-dark-color;
				font-weight: bold;
				font-size: 16px;
			}
		}

		.action-table-td {
			display: flex;
			flex-direction: column;
			flex: 1;
			align-items: center;

			&--image {
				width: 50px;
				height: 50px;
			}

			&--text {
				color: #333;
				font-size: 14px;
			}
		}
		
		.isView {
			flex: 0.5;
			flex-direction: row;
			justify-content: center;
			
			.action-table-body--btn {
				margin: 0 20rpx;
			}
		}

		& .action-scroller {
			// flex: 1;
			// flex-direction: row;
			/* #ifndef APP-NVUE */
			overflow: scroll;
			/* #endif */
			margin: 10px 0;
		}
	}
</style>