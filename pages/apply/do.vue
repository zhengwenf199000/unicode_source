<template>
	<view class="content apply_do-content" @click="capture">
		<content-bg></content-bg>

		<view class="content-nav">
			<image class="content-nav-home" src="@/static/imgs/Home.png" mode="widthFix" @click="homeClick"></image>
		</view>
		<view class="content-c applydo_content">
			<breadcrumb title="自助申请" actionTitle="执行地变更"></breadcrumb>

			<scroller class="applydo_content-form">
				<!-- 基础用法，不包含校验规则 -->
				<view>
					<uni-row>
						<forms-item style="flex: 1" label="迁入省份：" required>
							<uni-data-picker v-model="formData.province" :localdata="provinces"
								popup-title="请选择迁入省份" placeholder="请选择迁入省份">
							</uni-data-picker>
						</forms-item>
						<forms-item style="flex: 1" label="迁入城市：" required>
							<uni-data-picker v-model="formData.city" :localdata="citys"
								popup-title="请选择迁入城市" placeholder="请选择迁入城市">
							</uni-data-picker>
						</forms-item>
					</uni-row>
					<uni-row>
						<forms-item style="flex: 1" label="迁入区县：" required>
							<uni-data-picker v-model="formData.area" :localdata="areas"
								popup-title="请选择迁入区县" placeholder="请选择迁入区县" @change="areaChange">
							</uni-data-picker>
						</forms-item>
						<forms-item style="flex: 1" label="迁入机构：" required>
							<uni-data-picker v-model="formData.newDeptId" :localdata="depts"
								popup-title="请选择迁入机构" placeholder="请选择迁入机构">
							</uni-data-picker>
						</forms-item>
						<!-- <forms-item style="flex: 1" label="迁入乡镇：" required>
							<uni-data-picker v-model="formData.education" :localdata="educationRange"
								popup-title="请选择迁入乡镇" placeholder="请选择迁入乡镇">
							</uni-data-picker>
						</forms-item> -->
					</uni-row>
					<uni-row>
						<forms-item style="flex: 1" label="机构接受人：" required>
							<uni-data-picker v-model="formData.userId" :localdata="deptUsers"
								popup-title="请选择迁入机构接收人" placeholder="请选择迁入机构接收人">
							</uni-data-picker>
						</forms-item>
					</uni-row>
					<uni-row>
						<forms-item style="flex: 1" label="详细地址：" required>
							<uni-easyinput v-model="formData.street" placeholder="请输入详细地址" />
						</forms-item>
					</uni-row>
					<uni-row>
						<forms-item style="flex: 1" label="变更理由：" required>
							<uni-easyinput v-model="formData.reason" type="textarea" placeholder="" />
						</forms-item>
					</uni-row>
				</view>
			</scroller>

			<view class="applydo_content-backbtns">
				<button class="applydo_content-btn" type="primary" @click="commitClick">提交</button>
				<button class="applydo_content-btn" type="primary" @click="backClick">返回</button>
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
	import moment from 'moment';
	import userInactiveMixin from '@/mixins/userInactiveMixin';
	
	export default {
		mixins: [ userInactiveMixin ],
		data() {
			return {
				formData: {
					province: '',
					city: '',
					area: '',
					street: '',
					newDeptId: '',
					userId: '',
					reason: ''
				},
				provinces: [],
				citys: [],
				areas: [],
				depts: [],
				deptUsers: []
			}
		},
		computed: {

		},
		watch: {
			'formData.province': {
				handler(newV, oldV) {
					console.log(newV, oldV);
					this.citys = []
					this.areas = []
					this.depts = []
					this.deptUsers = []
					this.formData.city = ''
					this.formData.area = ''
					this.formData.newDeptId = ''
					this.formData.userId = ''
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
					this.depts = []
					this.deptUsers = []
					this.formData.area = ''
					this.formData.newDeptId = ''
					this.formData.userId = ''
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
					console.log(newV, oldV, this.selectedArea);
					this.depts = []
					this.deptUsers = []
					this.formData.newDeptId = ''
					this.formData.userId = ''
					if (!newV) {
						return
					}
					getDeptsWithAreaCode(this.selectedArea).then(infos => {
						this.depts = infos
					}).catch(err => {
						this.depts = []
					})
				}
			},
			'formData.newDeptId': {
				handler(newV, oldV) {
					console.log(newV, oldV, this.selectedArea);
					this.deptUsers = []
					this.formData.userId = ''
					if (!newV) {
						return
					}
					getDeptUsersWithDeptId(newV, this.$store.getters.token).then(infos => {
						this.deptUsers = infos
					}).catch(err => {
						this.deptUsers = []
					})
				}
			}
		},
		onLoad(options) {
			this.idnum = options.idnum
			setProvincesCallback((infos) => {
				this.provinces = infos
			})
		},
		methods: {
			getActivitys() {
				uni.showLoading()
				requestApi(apis.queryLabor, {
					id_num: this.idnum
				}, {
					token: this.token
				}).then(data => {
					uni.hideLoading()
					this.activitys = data
				}).catch(err => {
					uni.showToast({
						title: err,
						icon: 'none'
					})
				})
			},
			areaChange(e) {
				// console.log(e.detail.value[0].text);
				this.selectedArea = e.detail.value[0].text;
			},
			commitClick() {
				let toast = ''
				const { formData: {
					province,
					city,
					area,
					newDeptId,
					street,
					reason,
					userId
				} } = this
				if (!province) {
					toast = '请选择迁入省份'
				} else if (!city) {
					toast = '请选择迁入城市'
				} else if (!area) {
					toast = '请选择迁入区县'
				} else if (!newDeptId) {
					toast = '请选择迁入机构'
				} else if (!userId) {
					toast = '请选择迁入机构接收人'
				} else if (!street) {
					toast = '请输入详细地址'
				} else if (!reason) {
					toast = '请输入变更理由'
				}
				if (toast) {
					uni.showToast({
						title: toast,
						icon: 'none'
					})
					return
				}
				uni.showLoading({
					title: '正在申请...'
				})
				requestApi(apis.addNewRelocate, {
					"id_num": this.idnum,
					"time": moment().format('yyyy-MM-DD hh:mm:ss'),
					"province": province,
					"city": city,
					"area": area, 
					"type": "",      
					"street": street,
					"newDeptId": newDeptId,
					"reason": reason,
					"userId": userId
				}, { token: this.$store.getters.token }).then(data => {
					uni.showToast({
						title: '申请成功',
						icon: 'success'
					})
					uni.$u.sleep(1000).then(() => {
						uni.navigateBack()
					})
				}).catch(err => {
					uni.showToast({
						title: err,
						icon: 'none'
					})
				})
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
	
	.apply_do-content {
		width: 100vw;
		height: 100vh;
	}
	
	.applydo_content {

		.applydo_content-form {
			flex: 1;
			// background-color: #fff;
			overflow: scroll;
		}

		.applydo_content-backbtns {
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			& .applydo_content-btn {
				width: 100px;
				background-color: $theme-dark-color;
				margin-bottom: 10px;
			}
		}
	}
</style>
