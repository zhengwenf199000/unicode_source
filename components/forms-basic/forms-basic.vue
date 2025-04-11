<template>
	<forms-common ref="forms" :rowItems="rows" :formsData="formData" :rules="rules"></forms-common>
</template>

<script>
	import {
		DEPT_ID
	} from '@/utils/http';
	import {
		CriminalInfoNewParams
	} from '@/utils/criminalInfo';
	import { rules, rows } from './config';
	
	export default {
		name: "forms-basic",
		emits: ['change'],
		props: {
			idCardInfo: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		data() {
			return {
				 rules,
				 rows,
				// 基础表单数据
				formData: {
					number: '',
					name: '',
					sex: '',
					nation: '',
					birthTime: '',
					address: '',
					// 以下为录入
					oldName: '', // 曾用名
					dept: DEPT_ID, // 接受部门
					education: '', // 教育程度
					health: '', // 健康状况
					politics: '', // 原政治面貌
					marriage: '', // 婚姻状况
					phone: '', // 手机号
					code: '0', // 验证码
					abodedetail: '', // 居住地详细地址
					tele: '', // 联系电话
					// 以下为新增
					...CriminalInfoNewParams
				}
			};
		},
		watch: {
			idCardInfo: {
				handler(newV) {
					this.onIdCardInfoChange(newV)
				},
				immediate: true
			},
			formData: {
				handler(form) {
					this.$emit('change', form);
				},
				deep: true
			}
		},
		computed: {

		},
		created() {

		},
		methods: {
			onIdCardInfoChange(newV) {
				if (!newV) return
				const idnum = newV.number
				this.syncHujiCode(idnum)

				const age = uni.$u.age(newV.birthTime)
				this.isAdult = age >= 18
				this.formData.sfcn = this.isAdult ? '1' : '0'
				this.formData.wcn = age >= 16 ? '01' : '02'

				Object.keys(this.formData).forEach(key => {
					const val = newV[key]
					if (val) {
						this.formData[key] = val
					}
				})
			},
			syncHujiCode(idnum) {
				if (!idnum) return

				// 通过身份证号同步户籍省市区编码
				const provinceCodeShort = idnum.substring(0, 2)
				let provinceCode = provinceCodeShort + '0000'
				const cityCodeShort = idnum.substring(0, 4)
				let cityCode = cityCodeShort + '00'
				const areaCode = idnum.substring(0, 6)
				this.formData.hjszs = provinceCode
				this.formData.gdjzdszs = provinceCode
				this.formData.hjszds = cityCode
				this.formData.gdjzdszds = cityCode
				this.formData.hjszxq = areaCode
				this.formData.gdjzdszxq = areaCode
				this.$refs.forms && this.$refs.forms.init();
			},
			getFormData() {
				return new Promise((resolve, reject) => {
					// resolve(this.formData)
					this.$refs.forms.validate().then(res => {
						resolve(this.formData);
					}).catch(err => {
						reject(err);
					});
				})
			}
		}
	}
</script>

<style lang="scss">
	// view {
	// 	display: flex;
	// }
</style>
