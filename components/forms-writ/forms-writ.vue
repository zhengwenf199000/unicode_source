<template>
	<!-- 基础用法，不包含校验规则 -->
	<view class="forms-basic_form">
		<forms-common ref="forms" labelWidth="150px" :rules="rules" :rowItems="rows" :formsData="inputDoc"></forms-common>
	</view>
</template>

<script>
	import { rows, rules } from './config';
	
	export default {
		name: "forms-writ",
		emits: ['change'],
		data() {
			return {
				rows: [],
				rules: {},
				inputDoc: {
					zcjgmc: '',
					gsjgmc: '',
					qssbh: '',
					tqssrq: '',
					judge_unit: '',
					judgment_no: '',
					judge_date: '',
					yjzfjg: '03',
					yjzfjgmc: '', // 移交罪犯机关名称
					zxtzswh: '',
					zxtzsrq: '',
					sfyqk: '',
					qklx: '',
					sflf: '',
					sqjzjdjg: '01',
					sqjzjdjgmc: '人民法院', // 社区矫正决定机关名称取选中的 sqjzjdjgRange 对应的名称
					prison_dept: '',
					jfzxrq: '',
					wslx: '',
					wslxjbh: '',
					wssxrq: '',
					corpus_delicti: '',
					xscf: '',
					xzcfcf: '',
				},
				qklxRange: [],
				wslxRange: [],
				yjzfjgRange: [],
				sqjzjdjgRange: [],
				// 是否选择
				approveFlagRange: [],
				commonIsOrNotRange: [],
			};
		},
		watch: {
			inputDoc: {
				handler(doc) {
					this.$emit('change', doc);
				},
				deep: true
			}
		},
		created() {
			this.rows = rows();
			this.rules = rules(this.rows);
		},
		methods: {
			getFormData() {
				console.log(this.inputDoc.sqjzjdjgmc, this.inputDoc);
				return new Promise((resolve, reject) => {
					this.$refs.forms.validate().then(res => {
						resolve(this.inputDoc);
					}).catch(err => {
						reject(err);
					});
				})
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
		padding-right: 20px;
		/* #ifndef APP-NVUE */
		box-sizing: border-box;
		/* #endif */
		
		.forms-basic_form-item {
			/* #ifdef APP-NVUE */
			height: 60px;
			/* #endif */
			/* #ifndef APP-NVUE */
			height: 45px;
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
		
		.forms-basic_form-itembig {
			height: 100px;
		}
		
	}
</style>
