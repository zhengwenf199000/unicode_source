<template>
	<view class="forms-basic_form">
		<view class="forms-basic_form__header">
			<text class="forms-basic_form__title">{{ title }}</text>
		</view>
		<uni-group class="uni-column" v-for="(formData, i) in formDatas" :key="i">
			<forms-common ref="forms" :rules="rules" :rowItems="rows" :formsData="formData"></forms-common>
			<button v-if="i > 0 && i === formDatas.length - 1" class="forms-basic_form__remove" type="warn"
				@click="removeLast">移除</button>
		</uni-group>
		<button class="forms-basic_form__btn" type="default" @click="addResumeClick">继续添加{{ title }}</button>
	</view>
</template>

<script>
	import config from './config';

	export default {
		name: "forms-resume",
		emits: ['change'],
		props: {
			type: {
				/// resume | relation
				type: String,
				default: 'resume'
			}
		},
		data() {
			return {
				rows: [],
				rules: {},
				formDatas: [],
				title: ''
			};
		},
		watch: {
			type: {
				handler(type) {
					const obj = config[type];
					if (obj) {
						this.rows = obj.rows;
						this.rules = obj.rules;
						this.title = obj.title
					}
				},
				immediate: true
			},
			formDatas: {
				handler(forms) {
					this.$emit('change', forms);
				},
				deep: true
			}
		},
		created() {
			this.addResume()
		},
		methods: {
			async addResumeClick() {
				const count = this.formDatas.length
				if (count <= 0) {
					this.addResume()
				}
				try {
					await this.checkInputRight(count - 1)
					this.addResume()
				} catch (e) {

				}
			},
			addResume() {
				this.formDatas.push(this.creatResumeItem())
			},
			removeLast() {
				this.formDatas.pop()
			},
			creatResumeItem() {
				const item = {};
				this.rows.forEach(function(row) {
					row.children.forEach(function(child) {
						item[child.name] = ''
					})
				});
				return item;
			},
			checkInputRight(index) {
				return this.$refs.forms[index].validate()
			},
			async getFormDatas() {
				const output = [];
				for (let i = 0; i < this.formDatas.length; i++) {
					const formData = this.formDatas[i];
					try {
						await this.checkInputRight(i);
						output.push(formData);
					} catch (e) {
						if (e.length < Object.keys(this.creatResumeItem()).length) {
							throw e;
						} else {
							for (let s of Object.values(formData)) {
								if (s) {
									throw e;
								}
							}
						}
					}
				}
				return output;
			}
		}
	}
</script>

<style lang="scss">
	view {
		display: flex;
	}

	.forms-basic_form {
		/* #ifndef APP-NVUE */
		box-sizing: border-box;
		/* #endif */

		.forms-basic_form__header {
			background-color: #fff;
			padding: 10px;
		}
		
		.forms-basic_form__title {
			margin: auto;
			font-size: 16px;
			font-weight: bold;
		}

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
			width: 10%;
			height: 35px;
			line-height: 35px;
		}

		.forms-basic_form__btn {
			margin: 20px auto;
			background-color: #fff;
			color: #333;
			font-size: 15px;
			width: 30%;
			font-weight: bold;
		}
	}
</style>
