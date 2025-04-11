<template>
	<!-- 基础用法，不包含校验规则 -->
	<view class="forms-basic_form">
		<uni-group class="uni-column" v-for="(formData, i) in formDatas" :key="i">
			<uni-row>
				<forms-item class="forms-basic_form-item" style="flex: 1" label="姓名：" required>
					<uni-easyinput v-model="formData.name" placeholder="请输入家庭成员姓名" :disabled="false" />
				</forms-item>
				<forms-item class="forms-basic_form-item" style="flex: 1" label="关系：" required>
					<uni-data-select v-model="formData.relation" :localdata="relationRange" placeholder="选择与该成员关系"
						@click="selectClick('relation')">
					</uni-data-select>
				</forms-item>
			</uni-row>
			<uni-row>
				<forms-item class="forms-basic_form-item" style="flex: 1" label="联系电话：" required>
					<uni-easyinput v-model="formData.phone_no" placeholder="请输入该成员联系电话" type="number" :disabled="false" />
				</forms-item>
				<forms-item class="forms-basic_form-item" style="flex: 1" label="工作单位：" required>
					<uni-easyinput v-model="formData.organization" placeholder="请输入该成员工作单位" />
				</forms-item>
			</uni-row>
			<uni-row>
				<forms-item class="forms-basic_form-item" style="flex: 1" label="家庭地址：" required>
					<uni-easyinput v-model="formData.address" placeholder="请输入该成员家庭地址" :disabled="false" />
				</forms-item>
			</uni-row>
			
			<button v-if="i > 0 && i === formDatas.length - 1" class="forms-basic_form__remove" type="warn" @click="removeLast">移除</button>
		</uni-group>
		<button class="forms-basic_form__btn" type="default" @click="addRelationClick">继续添加家庭关系</button>
	</view>
</template>

<script>
	import {
		requestApi,
		apis
	} from '@/utils/http'
	import index from '@/utils/index'
	import {
		FormKeyDictionaryMapper
	} from '@/utils/interface'

	export default {
		name: "forms-relation",
		data() {
			return {
				formDatas: [],
				relationRange: [],
				notRequire: []
			};
		},
		created() {
			this.addRelation()
		},
		methods: {
			addRelationClick() {
				const count = this.formDatas.length
				if (count <= 0) {
					this.addRelation()
				}
				const lastData = this.formDatas[count - 1]
				const isRight = this.checkInputRight(lastData)
				if (isRight) {
					this.addRelation()
				}
			},
			addRelation() {
				this.formDatas.push(this.creatRelationItem())
			},
			removeLast() {
				this.formDatas.pop()
			},
			creatRelationItem() {
				return {
					relation: '',
					name: '',
					organization: '',
					address: '',
					phone_no: ''
				}
			},
			checkInputRight(data, toast = true) {
				for (const key in data) {
					const val = data[key]
					if (this.notRequire.indexOf(key) < 0 && !val) {
						toast && uni.showToast({
							title: '请完善信息！',
							icon: 'none'
						})
						return
					} else if (key === 'phone_no' && !index.mobile(val)) {
						toast && uni.showToast({
							title: '请输入正确的手机号',
							icon: 'none'
						})
						return
					}
				}
				return true
			},
			selectClick(type) {
				const rangeKey = type + 'Range'
				const range = this[rangeKey]
				console.log('select click:', rangeKey, range);
				if (!range || range.length === 0) {
					this.requestOptions(type, rangeKey)
				}
			},
			requestOptions(type, key) {
				const dictionaryType = FormKeyDictionaryMapper[type]
				uni.showLoading({
					title: '正在获取选项...'
				})
				requestApi(apis.getCodeBook, {
					codeType: dictionaryType
				}).then(data => {
					uni.hideLoading()
					this[key] = Object.keys(data).map(k => ({
						text: k,
						value: data[k]
					}))
				}).catch(err => {
					uni.showToast({
						title: err,
						icon: 'none'
					})
				})
			},
			getFormDatas() {
				console.log(this.formDatas,12321)
				const outDatas = []
				for (let data of this.formDatas) {
					const isRight = this.checkInputRight(data, false)
					if (isRight) {
						outDatas.push(data)
					}
				}
				return outDatas
			}
		}
	}
</script>

<style lang="scss">
	view {
		display: flex;
	}

	.forms-basic_form {
		padding-top: 15px;
		/* #ifndef APP-NVUE */
		box-sizing: border-box;
		/* #endif */

		.forms-basic_form-item {
			/* #ifdef APP-NVUE */
			height: 60px;
			/* #endif */
			/* #ifndef APP-NVUE */
			height: 45px;
			;
			/* #endif */

			.forms-basic_form-item-btn {
				align-self: center;
				background-color: $theme-dark-color;
				width: 100px;
				height: 35px;
				line-height: 35px;
				margin-left: 10px;
			}
		}

		.forms-basic_form__remove {
			align-self: flex-end;
			width: 10%;
		}

		.forms-basic_form__btn {
			margin: 20px auto;
			background-color: #fff;
			width: 30%;
			font-weight: bold;
		}
	}
</style>
