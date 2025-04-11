<template>
	<view class="content offline_content" @click="capture" @touchmove="capture">
		<content-bg></content-bg>

		<view class="content-nav"></view>
		<view class="content-c offline_content">
			<view class="offline_content-nav">
				<breadcrumb title="离线入矫" actionTitle="历史记录"></breadcrumb>
				<view class="offline_content-nav__btnv">
					<!-- <button class="" type="primary" size="mini">全部入矫</button> -->
				</view>
			</view>
			<action-table v-if="activitys.length > 0" :tableMapper="tableMapper" :tableData="activitys"
				@viewBtnClick="submit"></action-table>
			<empty-view v-else text="暂无离线入矫数据" actionBtnTitle="新增" :action="false" @applyClick="add"></empty-view>

			<view class="offline_content-backbtns">
				<button class="offline_content-backbtn" type="primary" @click="add">新增入矫</button>
				<button class="offline_content-backbtn offline_content__left" type="primary" @click="addGather">体征采集</button>
				<view class="uni-flex-item"></view>
				<button class="offline_content-backbtn" type="primary" @click="backClick">返回</button>
			</view>
		</view>
	</view>
</template>

<script>
	import Offline from '@/utils/offline';
	import { offlineTableMapper } from '@/utils/tableMappers';
	import index from '@/utils/index';
	import userInactiveMixin from '@/mixins/userInactiveMixin';
	
	export default {
		mixins: [ userInactiveMixin ],
		data() {
			return {
				tableMapper: offlineTableMapper,
				idnum: '',
				name: ''
			}
		},
		computed: {
			offlineHistory() {
				const history = this.$store.state.offline.history;
				return history;
			},
			activitys() {
				return this.offlineHistory.map(h => {
					return {
						name: h.name || h.forms.basicData.name,
						number: h.number,
						time: index.timeFormat(h.createTime),
						forms: h.forms ? '已录入' : '-',
						feature: h.feature ? '已采集' : '-'
					};
				})
			}
		},
		watch: {
			offlineHistory(newV) {
				console.log(newV);
			}
		},
		mounted() {
			Offline.get();
		},
		methods: {
			add() {
				uni.navigateTo({
					url: '/pages/register/input?mode=offline'
					// url: '/pages/register/detail?mode=offline&idnum=420984199909099649'
				})
			},
			addGather() {
				uni.navigateTo({
					url: '/pages/register/input?mode=offline&offlineType=gather'
				})
			},
			submit(index) {
				console.log(index);
				Offline.get().submitInfo(this.offlineHistory[index]);
			},
			backClick() {
				uni.navigateBack();
			}
		}
	}
</script>

<style lang="scss">
	view {
		display: flex;
		flex-direction: column;
	}

	.offline_content {
		width: 100vw;
		height: 100vh;
		box-sizing: border-box;
		&-nav {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			
			&__btnv {
				width: 20%;
			}
		}
		
		&-backbtns {
			flex-direction: row;
		}
		
		&-backbtn {
			width: 100px;
			background-color: $theme-dark-color;
			margin: 10px 0 15px;
		}
		
		&__left {
			margin-left: 15px;
		}
	}
</style>
