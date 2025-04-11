
export interface DataSelectItem {
	text: string
	value: string
}

export interface FormsItem {
	label: string
	name: string // 用于关联数据，以及表单校验
	placeholder?: string
	errorMessage?: string // 用户默认错误信息提示
	type?: 'input' | 'select' | 'pca' | 'date' | 'datetime'
	inputType?: 'number' | 'text' | 'textarea'
	labelWidth?: 'number'
	immediate?: boolean // 用于select，是否立刻加载选项，用于选项有默认值的
	notRequired?: boolean // 是否不必须，由于大多数选项为必须
	notClear?: boolean // 选中选项能否被清空
	flex?: number
	localDataKey?: string
	pName?: string // 省、市、区单独处理
	cName?: string
	aName?: string
	disabledHandler?: boolean | ((_vue: any) => boolean)
	change?: (val: string, _vue: any, item?: FormsItem, data?: DataSelectItem[]) => void
	validateFunction?: Function // 除了必填外的校验规整
	provinces?: any[]
	citys?: any[]
	areas?: any[]
}

export interface FormsRow {
	leading?: number
	trailing?: number
	children: FormsItem[]
}

export function changeRequired(keys: string | string[], requireds: boolean | boolean[], rules: object) {
	function setRequiredForKey(key: string, required: boolean) {
		rules[key].rules[0].required = required;
	}
	Array.isArray(keys) ? keys.forEach((key, i) => setRequiredForKey(key, Array.isArray(requireds) ? requireds[i] : requireds)) : setRequiredForKey(keys, requireds as boolean);
}

export function initRules(rowItems: FormsRow[]) {
	const rules = {};
	for (let s of rowItems) {
		s.children.forEach(function(value) {
			const itemRules: any[] = [
				{
					required: !value.notRequired,
					errorMessage: getErrorMessageLeading(value.type) + value.label
				}
			];
			if (value.validateFunction) {
				itemRules.push({
					validateFunction: value.validateFunction
				})
			}
			rules[value.name] = {
				rules: itemRules
			}
		});
	}
	return rules;
}

const errorMessageLeading = {
	select: '请选择',
	input: '请输入',
	pca: '请完善',
	date: '请选择',
	datetime: '请选择'
}

function getErrorMessageLeading(type: string) {
	return errorMessageLeading[type || 'input'] || '请选择';
}
