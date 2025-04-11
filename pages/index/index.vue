<template>
	<view class="uni-container">
		<forms-common ref="forms" :rowItems="formsRows" :formsData="formsData" :rules="rules"></forms-common>
		<button @click="submit">点击提交</button>

		<view v-if="false">
			<uni-data-select style="width: 200px;" v-model="value" :localdata="range" :multi="true" @change="change">
			</uni-data-select>
			<view class="uni-hello-text">
				<text class="hello-text">uni原生插件示例</text>
			</view>
			<view class="uni-panel" v-for="(item, index) in list" :key="item.id">
				<view class="uni-panel-h" :class="item.open ? 'uni-panel-h-on' : ''" @click="triggerCollapse(index)">
					<text class="uni-panel-text">{{item.name}}</text>
					<text class="uni-panel-icon uni-icon"
						:class="item.open ? 'uni-panel-icon-on' : ''">{{item.pages ? '&#xe581;' : '&#xe470;'}}</text>
				</view>
				<view class="uni-panel-c" v-if="item.open">
					<view class="uni-navigate-item" v-for="(item2,key) in item.pages" :key="key"
						@click="goDetailPage(item2.url)">
						<text class="uni-navigate-text">{{item2.name ? item2.name : item2}}</text>
						<text class="uni-navigate-icon uni-icon">&#xe470;</text>
					</view>
				</view>
			</view>
			<uni-badge text="1230"></uni-badge>
			<uni-popup ref="popup" type="dialog">
				<uni-popup-dialog content="23123123"></uni-popup-dialog>
			</uni-popup>
		</view>
	</view>
</template>
<script>
	import { rows as formsRows, formsData, rules } from './configForFormsBasic';
	export default {
		data() {
			return {
				formsRows,
				formsData,
				rules,
				range: [{
						value: '0',
						text: "篮球"
					},
					{
						value: '1',
						text: "足球"
					},
					{
						value: '2',
						text: "游泳"
					},
				],
				value: '1',
				list: [{
						id: 'fingerprint-component',
						name: 'fingerprint component',
						open: false,
						url: '/pages/sample/ext-finger-component'
					}, {
						id: 'idcardact-module',
						name: 'id card act module',
						open: false,
						url: '/pages/sample/idcardact-module'
					}, {
						id: 'ext-module',
						name: '活体检测 扩展 module',
						open: false,
						url: '/pages/sample/ext-module'
					},
					{
						id: 'ext-component',
						name: '扩展 component',
						open: false,
						url: '/pages/sample/ext-component'
					},
					{
						id: 'richAlert',
						name: '插件示例RichAlert',
						open: false,
						url: '/pages/sample/richAlert'
					},
					{
						id: 'form-nvue-demo',
						name: 'form-nvue-demo',
						open: false,
						url: '/pages/sample/form-ndemo'
					}
				],
				navigateFlag: false
			}
		},
		watch: {
			value(newV) {
				console.log(newV);
			}
		},
		onReady() {
			this.formsData = formsData
			this.formsRows = formsRows
			this.rules = rules
		},
		methods: {
			change(e) {

			},
			triggerCollapse(e) {
				console.log(this.value);
				if (!this.list[e].pages) {
					this.goDetailPage(this.list[e].url);
					return;
				}
				for (var i = 0; i < this.list.length; ++i) {
					if (e === i) {
						this.list[i].open = !this.list[e].open;
					} else {
						this.list[i].open = false;
					}
				}
			},
			goDetailPage(e) {
				if (this.navigateFlag) {
					return;
				}
				this.navigateFlag = true;
				uni.navigateTo({
					url: e
				});
				setTimeout(() => {
					this.navigateFlag = false;
				}, 200)
				return false;
			},
			submit() {
				console.log(this.formsData);
				this.$refs.forms.validate().then(function() {
					uni.showToast({
						title: '提交成功'
					})

				}).catch(function(err) {
					console.log(err);
					uni.showToast({
						title: err[0] ? err[0].errorMessage : '请完善信息',
						icon: 'error'
					})
				});
			}
		}
	}
</script>

<style>
</style>
