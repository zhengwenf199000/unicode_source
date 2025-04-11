import { FormsRow, FormsItem, initRules, changeRequired } from "../../components/forms-common/formsCommon";
import test from "../../utils/test";

export function rows() {
	return [
		{
			children: [
				{
					label: '侦查机关名称',
					name: 'zcjgmc'
				}
			]
		},
		{
			children: [
				{
					label: '公诉机关名称',
					name: 'gsjgmc'
				},
				{
					label: '起诉书编号',
					name: 'qssbh'
				},
				{
					label: '提起诉讼日期',
					name: 'tqssrq',
					type: 'date'
				}
			]
		},
		{
			children: [
				{
					label: '判决机关',
					name: 'judge_unit'
				},
				{
					label: '判决书号',
					name: 'judgment_no',
					change(val, _vue) {
						_vue.formsData.zxtzswh = val;
						_vue.formsData.wslxjbh = val;
						_vue.rowItems[3].children[1].errorMessage = '请检查执行通知书文号';
						_vue.rowItems[7].children[1].errorMessage = '请检查文书编号';
					}
				},
				{
					label: '判决日期',
					name: 'judge_date',
					type: 'date'
				}
			]
		},
		{
			children: [
				{
					label: '移交罪犯机关',
					name: 'yjzfjg',
					type: 'select',
					immediate: true
				},
				{
					label: '执行通知书文号',
					name: 'zxtzswh',
					errorMessage: '',
					change(val, _vue) {
						_vue.rowItems[3].children[1].errorMessage = '';
					}
				},
				{
					label: '执行通知书日期',
					name: 'zxtzsrq',
					type: 'date'
				}
			]
		},
		{
			children: [
				{
					label: '移交罪犯机关名称',
					name: 'yjzfjgmc',
					validateFunction(rules, val: string) {
						return new Promise(function(resolve, reject) {
							val.length >= 4 ? resolve('') : reject(new Error('移交犯罪机关名称不能少于4字'));
						})
					}
				},
				{
					label: '是否累犯',
					name: 'sflf',
					type: 'select',
					localDataKey: 'commonIsOrNot',
					change(val, _vue) {
						// 是累犯，就必定有前科，并且默认选中刑事处罚（02）
						if (val === '1') {
							_vue.formsData.sfyqk = '1';
							_vue.formsData.qklx = '02';
						}
					}
				}
			],
			trailing: 1
		},
		{
			children: [
				{
					label: '是否有前科',
					name: 'sfyqk',
					type: 'select',
					immediate: true,
					localDataKey: 'commonIsOrNot',
					notClear: true,
					change(val, _vue) {
						if (val !== '1') {
							_vue.formsData.qklx = '';
						}
						changeRequired('qklx', val === '1', _vue.rules);
					},
					disabledHandler(_vue) {
						return _vue.formsData.sflf === '1';
					}
				},
				{
					label: '前科类型',
					name: 'qklx',
					type: 'select',
					immediate: true,
					notRequired: true,
					disabledHandler(_vue) {
						return _vue.formsData.sfyqk !== '1'
					}
				}
			],
			trailing: 1
		},
		{
			children: [
				{
					label: '社区矫正决定机关',
					name: 'sqjzjdjg',
					type: 'select',
					immediate: true,
					change(val, _vue, item, data) {
						const range = data[item.name];
						if (range) {
							for (let s of range) {
								if (s.value === val) {
									_vue.formsData.sqjzjdjgmc = s.text;
									break;
								}
							}
						}
					}
				},
				{
					label: '原羁押场所',
					name: 'prison_dept',
					notRequired: true,
				},
				{
					label: '交付执行日期',
					name: 'jfzxrq',
					type: 'date'
				}
			]
		},
		{
			children: [
				{
					label: '文书类型',
					name: 'wslx',
					type: 'select'
				},
				{
					label: '文书编号',
					name: 'wslxjbh',
					errorMessage: '',
					change(val, _vue) {
						_vue.rowItems[7].children[1].errorMessage = '';
					}
				},
				{
					label: '文书生效日期',
					name: 'wssxrq',
					type: 'date'
				}
			]
		},
		{
			children: [
				{
					label: '主要犯罪事实',
					name: 'corpus_delicti',
					inputType: 'textarea',
					maxlength: 10000,
					validateFunction(rules, val: string) {
						return new Promise(function(resolve, reject) {
							val.length >= 30 ? resolve('') : reject(new Error('主要犯罪事实不能少于30字'));
						})
					}
				}
			]
		},
		{
			children: [
				{
					label: '刑事处罚',
					name: 'xscf',
				}
			]
		},
		{
			children: [
				{
					label: '行政处罚/处分',
					name: 'xzcfcf',
					notRequired: true,
				}
			]
		}
	];
}

export const rules = function(rows: FormsRow[]) {
	return initRules(rows);
};