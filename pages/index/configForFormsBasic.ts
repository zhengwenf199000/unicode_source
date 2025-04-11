
import { FormsRow, FormsItem } from "../../components/forms-common/formsCommon";
import { DEPT_ID } from '@/utils/http';
import { CriminalInfoNewParams } from '@/utils/criminalInfo';
import test from "../../utils/test";

const hjdRow: FormsItem = {
	label: '户籍地',
	type: 'pca',
	name: 'hjszxq',
	pName: 'hjszs',
	cName: 'hjszds',
	aName: 'hjszxq',
	disabledHandler(_vue) {
		const { formsData } = _vue;
		return formsData.hjszxq.length;
	}
};
const jzdRow: FormsItem = {
	flex: 2,
	label: '居住地：',
	type: 'pca',
	name: 'gdjzdszxq',
	pName: 'gdjzdszs',
	cName: 'gdjzdszds',
	aName: 'gdjzdszxq',
	disabledHandler(_vue) {
		const { formsData } = _vue;
		console.log(formsData);
		return formsData.hjdsfyjzdxt === '1' && formsData.gdjzdszxq.length;
	}
};
export const rows: FormsRow[] = [
	// row 0 name: '', // 姓名 number: '', // 身份证号 birthTime: '', // 出生日期 sex: '', // 性别
	{
		children: [
			{
				label: '姓名',
				name: 'name',
				disabledHandler: true
			},
			{
				label: '身份证号',
				name: 'number',
				disabledHandler: true
			},
			{
				label: '出生日期',
				name: 'birthTime',
				disabledHandler: true
			},
			{
				label: '性别',
				name: 'sex',
				disabledHandler: true
			},
		]
	},
	// row 1 oldName: '', // 曾用名 country: '156', // 国家 account_type: '10', // 国籍(户籍) nation: '', // 民族
	{
		children: [
			{
				label: '曾用名',
				name: 'oldName',
				notRequired: true
			},
			{
				label: '国家',
				name: 'country',
				type: 'select',
				immediate: true
			},
			{
				label: '国籍(户籍)',
				name: 'account_type',
				type: 'select',
				immediate: true
			},
			{
				label: '民族',
				name: 'nation',
				disabledHandler: true
			}
		]
	},
	// row 2 education: '', // 文化程度 marriage: '', // 婚姻状况 zzmm: '', // 政治面貌 politics: '',// 原政治面貌
	{
		children: [
			{
				label: '文化程度',
				name: 'education',
				type: 'select'
			},
			{
				label: '婚姻状况',
				name: 'marriage',
				type: 'select',
			},
			{
				label: '政治面貌',
				name: 'zzmm',
				type: 'select',
				localDataKey: 'politics',
			},
			{
				label: '原政治面貌',
				name: 'politics',
				type: 'select',
			}
		]
	},
	// row 3 outside_type: '', // 矫正类别 zyjwzxrystzk: '', // 暂予监外执行人员身体状况 zhjzyy: '', // 就诊医院
	{
		children: [
			{
				label: '矫正类别',
				name: 'outside_type',
				type: 'select',
				change(val, _vue) {
					let zyjwzxrystzkRequired = true;
					if (val !== '04') {
						zyjwzxrystzkRequired = false
						_vue.formsData.zyjwzxrystzk = '';
					}
					changeRequired('zyjwzxrystzk', zyjwzxrystzkRequired, _vue.rules);
				}
			},
			{
				label: '暂予监外执行人员身体状况',
				name: 'zyjwzxrystzk',
				type: 'select',
				flex: 2,
				notRequired: true,
				change(val, _vue) {
					let zhjzyyRequired = true;
					if (val === '03' || val === '') {
						zhjzyyRequired = false;
						_vue.formsData.zhjzyy = '';
					}
					changeRequired('zhjzyy', zhjzyyRequired, _vue.rules);
				},
				disabledHandler(_vue) {
					return _vue.formsData.outside_type !== '04';
				}
			},
			{
				label: '就诊医院',
				name: 'zhjzyy',
				notRequired: true,
				disabledHandler(_vue) {
					return _vue.formsData.zyjwzxrystzk === '03' || _vue.formsData.zyjwzxrystzk === '';
				}
			},
		]
	},
	// row 4 phone: '', // 个人联系电话 yxjtcyjzyshgx: '', // 有无家庭成员及主要社会关系 sfswry: '', // 是否三无人员
	{
		children: [
			{
				label: '个人联系电话',
				name: 'phone',
				inputType: 'number',
				validateFunction: function(rule, value, data, callback) {
					if (!test.mobile(value)) {
						callback('手机号格式不正确')
					}
					return true
				}
			},
			{
				label: '有无家庭成员及主要社会关系',
				name: 'yxjtcyjzyshgx',
				type: 'select',
				flex: 2,
				localDataKey: 'approveFlag'
			},
			{
				label: '是否三无人员',
				name: 'sfswry',
				type: 'select',
			},
		]
	},
	// row 5 jyjxqk: '', // 就业就学情况 xgzdw: '', // 现工作单位 phone_no: '', // 单位联系电话
	{
		children: [
			{
				label: '就业就学情况',
				name: 'jyjxqk',
				type: 'select',
				change(val, _vue) {
					if (val !== '02') {
						_vue.formsData.xgzdw = '';
						_vue.formsData.phone_no = '';
					}
					const relaRequired = val === '02'
					changeRequired(['xgzdw', 'phone_no'], relaRequired, _vue.rules);
				}
			},
			{
				label: '现工作单位',
				name: 'xgzdw',
				flex: 2,
				notRequired: true,
				disabledHandler(_vue) {
					return _vue.formsData.jyjxqk !== '02'
				}
			},
			{
				label: '单位联系电话',
				name: 'phone_no',
				inputType: 'number',
				notRequired: true,
				validateFunction: function(rule, value, data, callback) {
					if (!test.mobile(value)) {
						callback('手机号格式不正确')
					}
					return true
				},
				disabledHandler(_vue) {
					return _vue.formsData.jyjxqk !== '02'
				}
			},
		]
	},
	// row 6 pqzy: '', // 捕前职业 gjgzrylb: '', // 工作单位类别 grjtzk: '', // 工人具体状况 nmjtzk: '',// 农民具体状况
	{
		children: [
			{
				label: '捕前职业',
				name: 'pqzy',
				type: 'select',
				change(val, _vue) {
					// 01 国家工作人员
					if (val !== '01') {
						_vue.formsData.gjgzrylb = ''
					}
					// 03 工人
					if (val !== '03') {
						_vue.formsData.grjtzk = ''
					}
					// 04 农民
					if (val !== '04') {
						_vue.formsData.nmjtzk = ''
					}
					changeRequired(['gjgzrylb', 'grjtzk', 'nmjtzk'], [val === '01', val === '03', val === '04'], _vue.rules);
				}
			},
			{
				label: '工作单位类别',
				name: 'gjgzrylb',
				type: 'select',
				notRequired: true,
				disabledHandler(_vue) {
					return _vue.formsData.pqzy !== '01';
				}
			},
			{
				label: '工人具体情况',
				name: 'grjtzk',
				type: 'select',
				notRequired: true,
				disabledHandler(_vue) {
					return _vue.formsData.pqzy !== '03';
				}
			},
			{
				label: '农民具体情况',
				name: 'nmjtzk',
				type: 'select',
				notRequired: true,
				disabledHandler(_vue) {
					return _vue.formsData.pqzy !== '04';
				}
			}
		]
	},
	// row 7 health: '', // 健康状况 sfycrbs: '', // 是否有传染病史 jtcrbs: '', // 具体传染病史 sfyjsjb: '', // 是否有精神病
	{
		children: [
			{
				label: '健康状况',
				name: 'health',
				type: 'select'
			},
			{
				label: '是否有传染病史',
				name: 'sfycrbs',
				type: 'select',
				localDataKey: 'approveFlag',
				change(val, _vue) {
					changeRequired('jtcrbs', val === '1', _vue.rules);
				}
			},
			{
				label: '具体传染病史',
				name: 'jtcrbs',
				type: 'select',
				notRequired: true,
				disabledHandler(_vue) {
					return _vue.formsData.sfycrbs !== '1';
				}
			},
			{
				label: '是否有精神病',
				name: 'sfyjsjb',
				type: 'select',
				localDataKey: 'approveFlag',
				change(val, _vue) {
					changeRequired('jdjg', val === '1', _vue.rules);
				}
			}
		]
	},
	// row 8 jdjg: '',// 鉴定机构 hjszs: '', // 户籍地 hjszds: '', hjszxq: '',
	{
		children: [
			{
				label: '鉴定机构',
				name: 'jdjg',
				notRequired: true,
				disabledHandler(_vue) {
					return _vue.formsData.sfyjsjb !== '1';
				}
			},
			hjdRow
		]
	},
	// row 9 address: '', // 详细地址
	{
		children: [
			{
				label: '详细地址',
				name: 'address',
				disabledHandler: true
			}
		]
	},
	// row 10 hjdsfyjzdxt: '', // 居住地是否与户籍地相同 gdjzdszs: '', // 居住地 gdjzdszds: '', gdjzdszxq: '',
	{
		children: [
			{
				label: '居住地是否与户籍地相同',
				type: 'select',
				localDataKey: 'commonIsOrNot',
				name: 'hjdsfyjzdxt',
				change(val, _vue) {
					if (val !== '1') return;
					jzdRow.provinces = hjdRow.provinces;
					jzdRow.citys = hjdRow.citys;
					jzdRow.areas = hjdRow.areas;
					// 获取到可响应式数据
					const { formsData } = _vue;
					formsData.gdjzdszs = formsData.hjszs;
					formsData.gdjzdszds = formsData.hjszds;
					formsData.gdjzdszxq = formsData.hjszxq;
					formsData.abodedetail = formsData.address
				},
			},
			jzdRow,
		]
	},
	// row 11 abodedetail: '',// 详细地址
	{
		children: [
			{
				label: '详细地址',
				name: 'abodedetail',
				disabledHandler(_vue) {
					return _vue.formsData.hjdsfyjzdxt === '1';
				}
			}
		]
	}
];

// 39
export const formsData = {
	// row 0
	name: '', // 姓名
	number: '', // 身份证号
	birthTime: '', // 出生日期
	sex: '', // 性别
	// row 1
	oldName: '', // 曾用名
	country: '156', // 国家
	account_type: '10', // 国籍(户籍)
	nation: '', // 民族
	// row 2
	education: '', // 文化程度
	marriage: '', // 婚姻状况
	zzmm: '', // 政治面貌
	politics: '',// 原政治面貌
	// row 3
	outside_type: '', // 矫正类别
	zyjwzxrystzk: '', // 暂予监外执行人员身体状况
	zhjzyy: '', // 就诊医院
	// row 4
	phone: '', // 个人联系电话
	yxjtcyjzyshgx: '', // 有无家庭成员及主要社会关系
	sfswry: '', // 是否三无人员
	// row 5
	jyjxqk: '', // 就业就学情况
	xgzdw: '', // 现工作单位
	phone_no: '', // 单位联系电话
	// row 6
	pqzy: '', // 捕前职业
	gjgzrylb: '', // 工作单位类别
	grjtzk: '', // 工人具体状况
	nmjtzk: '',// 农民具体状况
	// row 7
	health: '', // 健康状况
	sfycrbs: '', // 是否有传染病史
	jtcrbs: '', // 具体传染病史
	sfyjsjb: '', // 是否有精神病
	// row 8
	jdjg: '',// 鉴定机构
	hjszs: '', // 户籍地
	hjszds: '',
	hjszxq: '',
	// row 9
	address: '', // 详细地址
	// row 10
	hjdsfyjzdxt: '', // 居住地是否与户籍地相同
	gdjzdszs: '', // 居住地
	gdjzdszds: '',
	gdjzdszxq: '',
	// row 11
	abodedetail: '',// 详细地址
	// 以下为默认带入
	dept: DEPT_ID, // 接受部门
	...CriminalInfoNewParams
};

function changeRequired(keys: string | string[], requireds: boolean | boolean[], rules: object) {
	function setRequiredForKey(key: string, required: boolean) {
		rules[key].rules[0].required = required;
	}
	Array.isArray(keys) ? keys.forEach((key, i) => setRequiredForKey(key, requireds[i])) : setRequiredForKey(keys, requireds as boolean);
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
	pca: '请完善'
}
function getErrorMessageLeading(type: string) {
	return errorMessageLeading[type || 'input'];
}

export const rules = initRules(rows);