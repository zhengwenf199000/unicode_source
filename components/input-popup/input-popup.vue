<template>
	<uni-popup ref="popup" class="input-popup_content" @click="capture">
		<uni-popup-dialog mode="input" :beforeClose="true" :title="title" :otherText="otherText" @close="cancel()"
			@confirm="auth()" @other="other">
			<template v-slot:default>
				<uni-forms ref="forms" :rules="rules" :model="inputObj" style="width: 450px;" :labelWidth="labelWidth">
					<uni-forms-item v-for="(form, i) in forms" :key="i" class="input-popup_forms-items" :name="i + ''"
						:label="form.label" labelAlign="center">
						<uni-easyinput v-model:modelValue="inputObj[i]" :type="form.type"
							:placeholder="placeholder + form.placeholder"></uni-easyinput>
					</uni-forms-item>
					<uni-tag v-if="warning" size="default" type="error" :text="warningText"></uni-tag>
				</uni-forms>
			</template>
		</uni-popup-dialog>
	</uni-popup>
</template>

<script>
	export default {
		name: "input-popup",
		emits: ['cancel', 'afterVerify', 'afterOther'],
		props: {
			title: {
				type: String,
				default: '管理员后台登录'
			},
			labelWidth: {
				type: [Number, String],
				default: 65
			},
			accounts: {
				type: Array,
				default () {
					return [{
						user: 'test',
						password: '123@abc'
					}];
				}
			},
			forms: {
				type: Array,
				default () {
					return [{
							label: '账号：',
							placeholder: '账号',
							err: '账号或者密码不正确',
							type: 'text',
						},
						{
							label: '密码：',
							placeholder: '密码',
							err: '账号或者密码不正确',
							type: 'password',
						}
					]
				}
			},
			placeholder: {
				type: String,
				default: '请输入管理员'
			},
			warning: {
				type: [Boolean, String],
				default: false
			},
			otherText: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				inputObj: {},
				closed: true
			};
		},
		computed: {
			rules() {
				const rules = {};
				this.forms.forEach((form, i) => {
					rules[i] = {
						rules: [{
								required: true,
								errorMessage: this.placeholder + form.placeholder
							},
							this.formOtherRule(form)
						]
					}
				});
				return rules;
			},
			formOtherRule() {
				const getValidateFunction = (form) => {
					return (rule, val, data, callback) => {
						if (form.verify) {
							return form.verify(val);
						}
						console.log(rule, val, data);
						if (!data[0] || !data[1]) return true;
						const account = this.accounts.find(a => a.user === data[0]);
						if (!account) return false;
						return account.password === data[1];
					}
				}
				return (form) => {
					return {
						errorMessage: form.err || '账号或者密码不正确',
						validateFunction: getValidateFunction(form)
					}
				}
			},
			warningText() {
				if (this.warning) {
					return typeof this.warning === 'string' ? this.warning : '此功能为生产厂家人员进行系统设置所用，非相关人员请取消使用。'
				}
				return ''
			}
		},
		watch: {
			inputObj: {
				handler(newObj, oldObj) {
					if (Object.keys(newObj).length > 0) {
						console.log('inputObj change xxx reset auto close!', newObj == oldObj);
						this.resetAutoClose();
					}
				},
				deep: true
			},
			// forms: {
			// 	handler(newForms) {
			// 		newForms.forEach((form, i) => {
			// 			this.inputObj[i] = '';
			// 		});
			// 		console.log('forms hanlder:', this.inputObj);
			// 	},
			// 	immediate: true
			// }
		},
		methods: {
			open() {
				this.closed = false;
				this.$refs.popup.open()
				this.resetAutoClose();
			},
			close() {
				this.closed = true;
				this.inputObj = {};
				this.$refs.popup.close();
				this.clearAutoClose();
			},
			cancel() {
				this.close();
				this.$emit('cancel');
			},
			capture(e) {
				if (this.closed) return;
				this.resetAutoClose();
			},
			resetAutoClose() {
				if (this.userFuncTask) {
					this.userFuncTask.listener();
					return;
				}
				this.userFuncTask = uni.$u.initTimeUserFunc({
					ms: 10000,
					cb: () => {
						console.log('时间到了，我要关闭了');
						this.cancel();
					}
				})
			},
			clearAutoClose() {
				if (this.userFuncTask) {
					this.userFuncTask.release();
				}
			},
			async auth() {
				try {
					const r = await this.$refs.forms.validate();
					this.$emit('afterVerify', this.inputObj);
					this.close();
				} catch (e) {
					console.log(e);
				}
			},
			async other() {
				try {
					const r = await this.$refs.forms.validate();
					this.$emit('afterOther', this.inputObj);
					this.close();
				} catch (e) {
					console.log(e);
				}
			}
		}
	}
</script>

<style>
	.input-popup_content {
		:deep(.uni-forms-item__label) {
			font-size: 16px;
			color: #333;
		}

		:deep(.uni-easyinput__content-input) {}

		:deep(.uni-easyinput__placeholder-class) {}
	}
</style>
