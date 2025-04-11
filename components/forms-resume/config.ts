import { FormsRow, initRules } from "../../components/forms-common/formsCommon";
import test from "../../utils/test";

export const resumeRows: FormsRow[] = [
	{
		children: [
			{
				label: '开始时间',
				name: 'start_date',
				type: 'date'
			},
			{
				label: '结束时间',
				name: 'end_date',
				type: 'date'
			}
		]
	},
	{
		children: [
			
			{
				label: '职务',
				type: 'select',
				name: 'duty'
			},
			{
				label: '证明人',
				name: 'zmr'
			}
		]
	},
	{
		children: [
			{
				label: '所在单位',
				name: 'organization'
			},
			
		]
	}
]

export const relationRows: FormsRow[] = [
	{
		children: [
			{
				label: '姓名',
				name: 'name',
				placeholder: '请输入家庭成员姓名'
			},
			{
				label: '关系',
				name: 'relation',
				placeholder: '请选择与该成员关系',
				type: 'select'
			}
		]
	},
	{
		children: [
			{
				label: '联系电话',
				name: 'phone_no',
				inputType: 'number',
				placeholder: '请输入该成员联系电话',
				validateFunction(rule, val: string) {
					return new Promise(function(resolve, reject) {
						test.mobile(val) ? resolve('') : reject(new Error('手机号码格式不正确'))
					});
				}
			},
			{
				label: '工作单位',
				name: 'organization',
				placeholder: '请输入该成员工作单位'
			}
		]
	},
	{
		children: [
			{
				label: '家庭地址',
				name: 'address',
				placeholder: '请输入该成员家庭地址'
			},
			{
				label: '月收入',
				name: 'month_income',
				placeholder: '请输入该成员月收入'
			}
		]
	}
]

const config = {
	resume: {
		title: '个人简历',
		rows: resumeRows,
		rules: initRules(resumeRows),
	},
	relation: {
		title: '家庭关系',
		rows: relationRows,
		rules: initRules(relationRows),
	}
};
export default config;