<template>
	<view class="content leave-add_content" @click="capture">
		<content-bg></content-bg>
	
		<view class="content-nav">
			<image class="content-nav-home" src="@/static/imgs/Home.png" mode="widthFix" @click="homeClick"></image>
		</view>
		
		<view class="content-c">
			<breadcrumb title="请销假" actionTitle="申请外出"></breadcrumb>
			
			<scroller class="leave-add_content-form">
				<!-- 基础用法，不包含校验规则 -->
				<view>
					<uni-row>
						<forms-item style="flex: 1" label="目的省份：" required>
							<uni-data-picker v-model="formData.province" :localdata="provinces"
								popup-title="请选择目的省份" placeholder="请选择目的省份">
							</uni-data-picker>
						</forms-item>
						<forms-item style="flex: 1" label="目的城市：" required>
							<uni-data-picker v-model="formData.city" :localdata="citys"
								popup-title="请选择目的城市" placeholder="请选择目的城市">
							</uni-data-picker>
						</forms-item>
					</uni-row>
					<uni-row>
						<forms-item style="flex: 1" label="目的区县：" required>
							<uni-data-picker v-model="formData.area" :localdata="areas"
								popup-title="请选择目的区县" placeholder="请选择目的区县">
							</uni-data-picker>
						</forms-item>
						<forms-item style="flex: 1" label="目的乡镇街道：" required>
							<uni-easyinput v-model="formData.outAddressStreet" placeholder="请输入目的乡镇街道" />
						</forms-item>
					</uni-row>
					<uni-row>
						<forms-item style="flex: 1" label="目的详细地址：" required>
							<uni-easyinput v-model="formData.outAddressDetail" placeholder="请输入目的详细地址" />
						</forms-item>
					</uni-row>
					<uni-row>
						<forms-item style="flex: 1" label="开始时间：" required>
							<uni-datetime-picker v-model="formData.startTime" type="date" placeholder="请选择开始时间"></uni-datetime-picker>
						</forms-item>
						<forms-item style="flex: 1" label="结束事件：" required>
							<uni-datetime-picker v-model="formData.endTime" type="date" placeholder="请选择结束时间"></uni-datetime-picker>
						</forms-item>
					</uni-row>
					<uni-row>
						<forms-item style="flex: 1" label="请假事由：" labelJustify="flex-start" required>
							<uni-easyinput v-model="formData.leaveReason" type="textarea" placeholder="请输入请假事由" />
						</forms-item>
					</uni-row>
				</view>
			</scroller>
			
			<view class="leave-add_content-backbtns">
				<button class="leave-add_content-backbtns-btn" type="primary" @click="commitClick">提交</button>
				<button class="leave-add_content-backbtns-btn" type="primary" @click="backClick">返回</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	import {
		requestApi,
		apis
	} from '@/utils/http'
	import { setProvincesCallback, getCitysWithProvinceCode, getAreasWithCityCode, getDeptsWithAreaCode, getDeptUsersWithDeptId } from '@/utils/country'
	import userInactiveMixin from '@/mixins/userInactiveMixin';
	
	export default {
		mixins: [ userInactiveMixin ],
		data() {
			return {
				idnum: '',
				formData: {
					"province": "",//外出目的地省    （必填，参照接口7）
					"city": "",//外出目的地市         （必填，参照接口5）
					"area": "",//外出目的地区县        （必填，参照接口6）
					"outAddressStreet": "", //外出目的地（乡镇、街道）（必填）
					"outAddressDetail": "", //外出目的地明细    （必填）
					"startTime": "", //开始时间    （必填， yyyy-MM-dd）
					"endTime": "", //结束时间     （必填， yyyy-MM-dd）
					"leaveReason": "" //请假事由       （必填）
				},
				provinces: [],
				citys: [],
				areas: [],
			}
		},
		watch: {
			'formData.province': {
				handler(newV, oldV) {
					console.log(newV, oldV);
					this.citys = []
					this.areas = []
					this.formData.city = ''
					this.formData.area = ''
					if (!newV) {
						return
					}
					getCitysWithProvinceCode(newV).then(infos => {
						console.log('getCitysWithProvinceCode:', infos);
						this.citys = infos
					}).catch(err => {
						this.citys = []
					})
				}
			},
			'formData.city': {
				handler(newV, oldV) {
					console.log(newV, oldV);
					this.areas = []
					this.formData.area = ''
					if (!newV) {
						return
					}
					getAreasWithCityCode(newV).then(infos => {
						this.areas = infos
					}).catch(err => {
						this.areas = []
					})
				}
			},
			'formData.area': {
				handler(newV, oldV) {
					
				}
			},
		},
		onLoad(options) {
			this.idnum = options.idnum
			setProvincesCallback((infos) => {
				this.provinces = infos
			})
		},
		methods: {
			commitClick() {
				if (!this.idnum) {
					uni.showToast({
						title: '请先读取身份信息',
						icon: 'none'
					})
					return
				}
				if (!this.checkFormData()) {
					uni.showToast({
						title: '请完善信息',
						icon: 'none'
					})
					return
				}
				uni.showLoading({
					title: '正在提交...'
				})
				requestApi(apis.addLeave, { ...this.formData, id_num: this.idnum }, { token: this.$store.getters.token }).then(res => {
					uni.hideLoading()
					uni.showToast({
						title: '已提交'
					})
					uni.$u.sleep(1000).then(() => {
						uni.navigateBack()
					})
				}).catch(err => {
					uni.showToast({
						title: err,
						icon:'none'
					})
				})
			},
			checkFormData() {
				for (let key of Object.keys(this.formData)) {
					if (!this.formData[key]) {
						return false
					}
				}
				return true
			},
			homeClick() {
				uni.reLaunch({
					url: '/pages/home/home'
				})
			},
			backClick() {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">
	view {
		display: flex;
		flex-direction: column;
	}
	
	.leave-add_content {
		width: 100vw;
		height: 100vh;
		
		.leave-add_content-form {
			flex: 1;
			overflow: scroll;
		}
		
		.leave-add_content-backbtns {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			
			& .leave-add_content-backbtns-btn {
				width: 100px;
				background-color: $theme-dark-color;
				margin: 10px 0;
			}
		}
	}
</style>
