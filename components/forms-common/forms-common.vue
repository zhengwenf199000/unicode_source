<template>
	<uni-forms ref="form" class="forms-basic_form" :model="formsData" :rules="rules" labelAlign="right"
		:labelWidth="labelWidth">
		<uni-row v-for="(rowItem, i) in rowItems" :key="i">
			<view v-if="rowItem.leading" :style="{flex: rowItem.leading}"></view>
			<uni-forms-item v-for="(item, j) in rowItem.children" :key=j class="forms-basic_form-item" :style="{flex: item.flex || 1}"
				:label="item.label + '：'" :name="item.name" :errorMessage="item.errorMessage" :required="!item.notRequired">
				<uni-data-select v-if="item.type === 'select'" v-model="formsData[item.name]" :clear="!item.notClear"
					:localdata="getLocalData(item)" :placeholder="getPlaceholder(item)" :disabled="getDisabled(item.disabledHandler)"
					@click="selectClick(item)" @change="change(item, $event)">
				</uni-data-select>
				<view v-else-if="item.type === 'pca'" class="uni-flex uni-flex-item">
					<uni-data-select v-model="formsData[item.pName]" :localdata="item.provinces" placeholder="选择省"
						:disabled="getDisabled(item.disabledHandler)" :clear="false" @click="pcaSelectClick(item, 'p')" @change="pcaChange(item, 'p')">
					</uni-data-select>
					<uni-data-select v-model="formsData[item.cName]" :localdata="item.citys" placeholder="选择市"
						:disabled="getDisabled(item.disabledHandler)" :clear="false" @click="pcaSelectClick(item, 'c')" @change="pcaChange(item, 'c')">
					</uni-data-select>
					<uni-data-select v-model="formsData[item.aName]" :localdata="item.areas" placeholder="选择区"
						:disabled="getDisabled(item.disabledHandler)" :clear="false" @click="pcaSelectClick(item, 'a')" @change="pcaChange(item, 'a')">
					</uni-data-select>
				</view>
				<uni-datetime-picker v-else-if="item.type === 'date' || item.type === 'datetime'" v-model="formsData[item.name]" :placeholder="getPlaceholder(item)" :type="item.type">
				</uni-datetime-picker>
				<uni-easyinput v-else v-model="formsData[item.name]" :placeholder="getPlaceholder(item)" :maxlength="item.maxlength"
					:disabled="getDisabled(item.disabledHandler)" :type="item.inputType" @update:modelValue="change(item, $event)" />
			</uni-forms-item>
			<view v-if="rowItem.trailing" :style="{flex: rowItem.trailing}"></view>
		</uni-row>
	</uni-forms>
</template>

<script>
	import {
		requestApi,
		upload,
		apis,
		DEPT_ID
	} from '@/utils/http'
	import {
		FormKeyDictionaryMapper
	} from '@/utils/interface'
	import {
		getProvincesPromise,
		getCitysWithProvinceCode,
		getAreasWithCityCode
	} from '@/utils/country'

	export default {
		name: "forms-common",
		props: {
			rowItems: {
				type: Array,
				default () {
					return [];
				}
			},
			formsData: {
				type: Object,
				default () {
					return {};
				}
			},
			rules: {
				type: Object,
				default () {
					return {};
				}
			},
			labelWidth: {
				type: String,
				default: '120px'
			}
		},
		data() {
			return {
				localDatas: {}
			};
		},
		computed: {
			getDisabled() {
				return (handler) => {
					const disabled =  handler ? (typeof handler === 'boolean' ? handler : handler(this)) : false;
					return disabled;
				}
			},
			getLocalData() {
				return (item) => {
					return this.localDatas[item.localDataKey || item.name];
				}
			},
			getPlaceholder() {
				const leading = {
					select: '请选择',
					input: '请输入',
					date: '请选择',
					datetime: '请选择'
				}
				return (item) => {
					if (item.placeholder) return item.placeholder;
					return leading[item.type || 'input'] + item.label;
				}
			}
		},
		watch: {
			rowItems: {
				handler(newItems) {
					this.init();
				},
				immediate: true
			},
			formsData: {
				handler(newData, oldData) {

				},
				deep: true
			}
		},
		methods: {
			init() {
				for (let item of this.rowItems) {
					for (let child of item.children) {
						if (child.type === 'select' && child.immediate) {
							// 即可获取选项的
							this.selectClick(child);
						} else if (child.type === 'pca') {
							this.pcaSelectClick(child, 'p');
							this.pcaSelectClick(child, 'c');
							this.pcaSelectClick(child, 'a').then(() => {
								const pcaValid = this.pcaOptionsContainCode(child.areas, this.formsData[child.aName]);
								if (!pcaValid) {
									this.formsData[child.name] = '';
								}
							});
						}
					}
				}
			},
			async pcaSelectClick(item, type) {
				if (type === 'p' && !item.provinces) {
					item.provinces = await getProvincesPromise();
				} else if (type === 'c' && this.formsData[item.pName]) {
					item.citys = await getCitysWithProvinceCode(this.formsData[item.pName]);
				} else if (type === 'a' && this.formsData[item.cName]) {
					item.areas = await getAreasWithCityCode(this.formsData[item.cName]);
				}
			},
			pcaOptionsContainCode(options, code) {
				if (!options) return false;
				for (let s of options) {
					if (s.value === code) {
						return true;
					}
				}
				return false;
			},
			pcaChange(item, type) {
				const { cName, aName } = item;
				if (type === 'p') {
					this.formsData[cName] = '';
					this.formsData[aName] = '';
				} else if (type === 'c') {
					this.formsData[aName] = '';
				}
			},
			selectClick(item) {
				const type = item.localDataKey || item.name;
				const range = this[type]
				if (!range || range.length === 0) {
					this.requestOptions(type)
				}
			},
			change(item, e) {
				if (item.change) {
					item.change(this.formsData[item.name], this, item, this.localDatas);
				}
			},
			requestOptions(type) {
				const dictionaryType = FormKeyDictionaryMapper[type] || type
				requestApi(apis.getCodeBook, {
					codeType: dictionaryType
				}).then(data => {
					uni.hideLoading()
					this.localDatas[type] = Object.keys(data).map(k => ({
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
			getFormData() {
				return this.formsData;
			},
			validate() {
				return this.$refs.form.validate();
			}
		}
	}
</script>

<style lang="scss">
	view {
		display: flex;
	}

	.forms-basic_form {
		position: relative;
		padding-top: 15px;
		padding-right: 20px;
		/* #ifndef APP-NVUE */
		box-sizing: border-box;
		/* #endif */
		
		:deep {
			.uni-row {
				padding-bottom: 10px;
			}
			
			.uni-icons {
				line-height: 1;
			}
		}
		
		.commom-placeholder {
			color: #999;
			font-size: 14px;
		}
		
		.commom-placeholder__disabled {
			color: #d5d5d5;
		}
		
		.commom-label {
			color: #333;
			font-size: 15px;
		}
		
		.commom-content {
			color: #333;
			font-size: 15px;
		}
		
		.commom-content__disabled {
			color: #d5d5d5;
			font-size: 15px;
		}
		
		:deep {
			.uni-input-placeholder {
				@extend .commom-placeholder;
			}
			
			.is-disabled .uni-easyinput__placeholder-class {
				@extend .commom-placeholder__disabled;
			}
			
			.uni-easyinput__content-input {
				@extend .commom-content;
			}
			
			.is-disabled .uni-easyinput__content-input {
				@extend .commom-content__disabled;
			}
			
			.uni-select {
				height: 37px;
				.uni-select__input-text {
					@extend .commom-content;
				}
				
				.uni-select__input-text.uni-select__input-placeholder {
					@extend .commom-placeholder;
				}
			}
			
			.uni-select--disabled {
				background-color: rgb(247, 246, 246);
				
				.uni-select__input-text.uni-select__input-placeholder {
					@extend .commom-placeholder__disabled;
				}
			}
			
			.uni-forms-item__label {
				@extend .commom-label;
				padding: 0;
			}
			
			.uni-forms-item__error {
				padding-top: 5px;
				font-weight: bold;
			}
		}
	}
</style>
