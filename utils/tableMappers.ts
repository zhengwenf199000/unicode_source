// 用于描述表内容
export interface TableMapper {
	name: string,
	valueKey?: string,
	valueHandler?: (value: string) => string,
	fixedValue?: string,
	isView?: boolean,
	viewTitle?: string | string[],
	isImage?: boolean,
	// 在只有一列的情况下高度会是显示长文本域的模式，设为true变为普通单行模式
	normal?: boolean
}

export const benefitTableMapper: TableMapper[] = [
	{
		// 用于header显示
		name: '活动名称',
		// 用于body取值
		valueKey: 'title',
		// 固定的值，如果有固定的值就不通过valueKey取值
		fixedValue: '',
		// 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
		isView: false
	}, {
		// 用于header显示
		name: '活动地点',
		// 用于body取值
		valueKey: 'laborAddress',
		// 固定的值，如果有固定的值就不通过valueKey取值
		fixedValue: '',
		// 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
		isView: false
	}, {
		// 用于header显示
		name: '开始时间',
		// 用于body取值
		valueKey: 'startDate',
		// 固定的值，如果有固定的值就不通过valueKey取值
		fixedValue: '',
		// 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
		isView: false
	}, {
		// 用于header显示
		name: '结束时间',
		// 用于body取值
		valueKey: 'endDate',
		// 固定的值，如果有固定的值就不通过valueKey取值
		fixedValue: '',
		// 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
		isView: false
	}, {
		// 用于header显示
		name: '状态',
		// 用于body取值
		valueKey: '',
		// 固定的值，如果有固定的值就不通过valueKey取值
		fixedValue: '未开始',
		// 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
		isView: false
	}, {
		// 用于header显示
		name: '查看',
		// 用于body取值
		valueKey: '',
		// 固定的值，如果有固定的值就不通过valueKey取值
		fixedValue: '',
		// 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
		isView: true
	}]

export const educationTableMapper: TableMapper[] = [
	{
		// 用于header显示
		name: '活动名称',
		// 用于body取值
		valueKey: 'title',
		// 固定的值，如果有固定的值就不通过valueKey取值
		fixedValue: '',
		// 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
		isView: false
	}, {
		// 用于header显示
		name: '活动地点',
		// 用于body取值
		valueKey: 'studyAddress',
		// 固定的值，如果有固定的值就不通过valueKey取值
		fixedValue: '',
		// 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
		isView: false
	}, {
		// 用于header显示
		name: '开始时间',
		// 用于body取值
		valueKey: 'startDate',
		// 固定的值，如果有固定的值就不通过valueKey取值
		fixedValue: '',
		// 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
		isView: false
	}, {
		// 用于header显示
		name: '结束时间',
		// 用于body取值
		valueKey: 'endDate',
		// 固定的值，如果有固定的值就不通过valueKey取值
		fixedValue: '',
		// 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
		isView: false
	}, {
		// 用于header显示
		name: '状态',
		// 用于body取值
		valueKey: '',
		// 固定的值，如果有固定的值就不通过valueKey取值
		fixedValue: '未开始',
		// 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
		isView: false
	}, {
		// 用于header显示
		name: '查看',
		// 用于body取值
		valueKey: '',
		// 固定的值，如果有固定的值就不通过valueKey取值
		fixedValue: '',
		// 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
		isView: true
	}
]

export const benefitDetailMapper: TableMapper[][] = [
	[
		{ name: '活动名称', valueKey: 'title' },
		{ name: '状态', fixedValue: '未开始' },
	],
	[
		{ name: '活动类型', fixedValue: '公益活动' },
		{ name: '活动日期', fixedValue: '-' },
	],
	[
		{ name: '活动地点', valueKey: 'laborAddress' },
		{ name: '开始时间', valueKey: 'startDate' },
	],
	[
		{ name: '参与人数', fixedValue: '-' },
		{ name: '结束时间', valueKey: 'endDate' },
	],
	[
		{ name: '允许提前签到', fixedValue: '-' },
		{ name: '允许延迟签退', fixedValue: '-' },
	],
	[
		{ name: '活动内容', valueKey: 'laborContent' }
	]
]

export const educationDetailMapper: TableMapper[][] = [
	[
		{ name: '教育名称', valueKey: 'title' },
		{ name: '状态', fixedValue: '未开始' },
	],
	[
		{ name: '教育类型', fixedValue: '教育学习' },
		{ name: '活动日期', fixedValue: '-' },
	],
	[
		{ name: '教育地点', valueKey: 'studyAddress' },
		{ name: '开始时间', valueKey: 'startDate' },
	],
	[
		{ name: '参与人数', fixedValue: '-' },
		{ name: '结束时间', valueKey: 'endDate' },
	],
	[
		{ name: '允许提前签到', fixedValue: '-' },
		{ name: '允许延迟签退', fixedValue: '-' },
	],
	[
		{ name: '教育内容', valueKey: 'studyContent' }
	]
]

export const applyChangeTableMapper: TableMapper[] = [
	{
		// 用于header显示
		name: '矫正对象',
		// 用于body取值
		valueKey: 'criminalName',
		// 固定的值，如果有固定的值就不通过valueKey取值
		fixedValue: '',
		// 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
		isView: false
	}, {
		// 用于header显示
		name: '申请时间',
		// 用于body取值
		valueKey: 'time',
		// 固定的值，如果有固定的值就不通过valueKey取值
		fixedValue: '',
		// 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
		isView: false
	}, {
		// 用于header显示
		name: '迁入地',
		// 用于body取值
		valueKey: 'address',
		// 固定的值，如果有固定的值就不通过valueKey取值
		fixedValue: '',
		// 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
		isView: false
	}, {
		// 用于header显示
		name: '类型',
		// 用于body取值
		valueKey: 'type',
		// 固定的值，如果有固定的值就不通过valueKey取值
		fixedValue: '',
		// 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
		isView: false
	}, {
		// 用于header显示
		name: '状态',
		// 用于body取值
		valueKey: 'lczt',
		// 固定的值，如果有固定的值就不通过valueKey取值
		fixedValue: '',
		// 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
		isView: false
	}, {
		// 用于header显示
		name: '查看',
		// 用于body取值
		valueKey: '',
		// 固定的值，如果有固定的值就不通过valueKey取值
		fixedValue: '',
		// 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
		isView: true
	}
]

export const applyFilesTableMapper: TableMapper[] = [
	{
		// 用于header显示
		name: '文书名称',
		// 用于body取值
		valueKey: 'documentName',
		// 固定的值，如果有固定的值就不通过valueKey取值
		fixedValue: '',
		// 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
		isView: false
	}, {
		// 用于header显示
		name: '矫正对象',
		// 用于body取值
		valueKey: 'criminalName',
		// 固定的值，如果有固定的值就不通过valueKey取值
		fixedValue: '',
		// 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
		isView: false
	}, {
		// 用于header显示
		name: '操作',
		// 用于body取值
		valueKey: '',
		// 固定的值，如果有固定的值就不通过valueKey取值
		fixedValue: '',
		// 是否是查看功能，如果该字段为true就该列所有数值直接展示查看按钮
		isView: true,
		viewTitle: ['查看', '签署']
	}
]

export const applyChangeDetailMapper: TableMapper[][] = [
	[
		{ name: '矫正对象', valueKey: 'criminalName' },
		{ name: '状态', valueKey: 'lczt' },
	],
	[
		{ name: '类型', valueKey: 'type' },
		{ name: '申请时间', valueKey: 'time' },
	],
	[
		{ name: '迁入地', valueKey: 'address' },
		{ name: '编号', valueKey: 'id' },
	],

	[
		{ name: '变动理由', valueKey: 'reason' }
	]
]


// "deptName": "社区矫正平台", //矫正对象所在机构
// "id": 9201,          //事件编号
// "time": "2021-08-10 ~ 2021-09-10", //请假时间
// "status": "请假",   //类别
// "overTime": "",    //销假时间
// "address": "新抚区", //外出目的地
// "applyTime": "2021-08-13",  //申请时间
// "processInfo": "需要司法所管理岗审批"  //流程状态
export const leaveTableMapper: TableMapper[] = [
	{
		name: '外出类型',
		valueKey: 'status',
	},
	{
		name: '目的地',
		valueKey: 'address'
	},
	{
		name: '外出时间',
		valueKey: 'time'
	},
	{
		name: '流程状态',
		valueKey: 'processInfo'
	},
	{
		name: '申请时间',
		valueKey: 'applyTime'
	},
	{
		name: '查看',
		isView: true
	}
]

// "deptName": "社区矫正平台",
// 					"approve": [{
// 							"approveOpinion": "同意ceshi20170315的外出请假审请", //审批意见
// 							"approveDate": "2021-08-13 17:43:51", //审批时间
// 							"approvePerson": "系统管理员", //审批人员
// 							"approveName": "司法所管理岗审批" //审批人员角色
// 						},
// 						{
// 							"approveOpinion": "同意ceshi20170315的外出请假审请",
// 							"approveDate": "2021-08-13 17:44:00",
// 							"approvePerson": "系统管理员",
// 							"approveName": "县市区司法局工作岗审批"
// 						},
// 						{
// 							"approveOpinion": "同意ceshi20170315的外出请假审请",
// 							"approveDate": "2021-08-13 17:44:08",
// 							"approvePerson": "系统管理员",
// 							"approveName": "县市区司法局管理岗审批"
// 						},
// 						{
// 							"approveOpinion": "同意ceshi20170315的外出请假审请",
// 							"approveDate": "2021-08-13 17:44:15",
// 							"approvePerson": "系统管理员",
// 							"approveName": "县市区司法局分管局长审批"
// 						},
// 						{
// 							"approveOpinion": "同意ceshi20170315的外出请假审请",
// 							"approveDate": "2021-08-13 17:44:23",
// 							"approvePerson": "系统管理员",
// 							"approveName": "司法所工作岗办结"
// 						}
// 					],
// 					"starTime": "2021-08-10", //请假开始时间
// 					"area": "新抚区", //外出区
// 					"outAddressDetail": "辽宁", //外出目的地明细
// 					"criminalName": "ceshi20170315", //矫正对象姓名
// 					"reason": "出去看病", //请假原因
// 					"province": "辽宁省", //外出省份
// 					"applyTime": "2021-08-13", //申请时间
// 					"outAddressStreet": "新抚区", //外出目的地（乡镇、街道）
// 					"endTime": "2021-09-10", //请假结束时间
// 					"city": "抚顺市" //外出市
export const leaveDetailMapper: TableMapper[][] = [
	[
		{ name: '申请日期', valueKey: 'applyTime' },
		{ name: '状态', valueKey: 'status' },
	],
	[
		{ name: '目的地', valueKey: 'outAddressDetail', normal: true },
	],
	[
		{ name: '活动区域', valueKey: 'city' },
		{ name: '外出时间', valueKey: 'starTime' },
	],
	[
		{ name: '开始日期', valueKey: 'starTime' },
		{ name: '结束日期', valueKey: 'endTime' }
	],
	[
		{ name: '外出理由', valueKey: 'reason', normal: true },
	],
	// [
	// 	{ name: '外出联系人', fixedValue: '-' },
	// 	{ name: '关系', fixedValue: '-' }
	// ],
	// [
	// 	{ name: '联系方式', fixedValue: '-' },
	// 	{ name: '工作单位', fixedValue: '-' }
	// ],
	// [
	// 	{ name: '家庭住址', fixedValue: '-' },
	// ]
]

// 个人档案详情匹配表
// 						name: '', // 姓名
// 						id_num: '', // 身份证号
// 						phone_no: '', // 手机号码
// 						edu_bg: '', // 教育程度
// 						affiance: '', // 婚姻状况
// 						outside_limit: '', // 矫正期限
// 						health: '', // 健康状况



// 						dept_id: '', // 矫正单位
// 						rybh: '', // 人员编号 x
// 						jgjb: '', // 监管级别 x
// 						outside_start: '', // 矫正开始
// 						outside_end: '', // 矫正结束
// 						update_date: '', // 录入时间
export const fileDetailMapper: TableMapper[][] = [
	[
		{ name: '姓名', valueKey: 'name' },
		{ name: '矫正单位', valueKey: 'dept_id' },
	],
	[
		{ name: '身份证号', valueKey: 'id_num' },
		{ name: '人员编号', valueKey: 'rybh' },
	],
	[
		{ name: '手机号码', valueKey: 'phone_no' },
		// { name: '监管级别', valueKey: 'jgjb' },
		{ name: '人员状态', valueKey: 'status' },
	],
	[
		{ name: '教育程度', valueKey: 'edu_bg' },
		{ name: '矫正开始', valueKey: 'outside_start' }
	],
	[
		{ name: '婚姻状况', valueKey: 'affiance' },
		{ name: '矫正结束', valueKey: 'outside_end' },
	],
	[
		{ name: '矫正期限', valueKey: 'outside_limit' },
		{ name: '录入时间', valueKey: 'insert_date' }
	],
	[
		{ name: '健康状况', valueKey: 'health' },
	]
]

export const offlineTableMapper: TableMapper[] = [
	{
		name: '矫正对象',
		valueKey: 'name'
	}, {
		name: '身份证号',
		valueKey: 'number',
	}, {
		name: '创建时间',
		valueKey: 'time'
	}, {
		name: '是否录入信息',
		valueKey: 'forms'
	}, {
		name: '是否体征采集',
		valueKey: 'feature'
	}, {
		name: '操作',
		isView: true,
		viewTitle: '提交入矫'
	}
]

// todo:待修改；签到记录表结构
// "INSERTDATE": "2022-02",
// "ONLINETIME": 0.02,
// "STUDYMONTH": "2022-02",
// "CRIMINALID": 341332,
// "STUDYTITLE": "微电影 | 《司法所》",
// "CRIMINALNAME": "闫飞",
// "DEPTNAME": "新区司法所",
// "STUDYTIME": "2022-02"
const _signHander = function(mapper: Object) {
	return function(val: string): string {
		return mapper[val];
	}
};
const _signStatusHander = _signHander({ 1: '成功', 2: '失败', 3: '虚拟定位', 4: '未打卡' });
const _signTypeHander = _signHander({ 1: '教育学习', 2: '公益活动', 4: '人机分离', 5: '签到', 6: '在线学习'});
const _signRecTypeHander = _signHander({1: '人证比对', 2: '人脸比对', 3: '终端比对', 4: '依图比对'});
export const signTableMapper: TableMapper[] = [
	{
		name: '考勤状态',
		valueKey: 'TYPE2',
		valueHandler: _signStatusHander
	}, {
		name: '考勤类型',
		valueKey: 'KQFLAG',
		valueHandler: _signTypeHander
	}, {
		name: '签到单位',
		valueKey: 'DEPTNAME'
	}, {
		name: '识别类型',
		valueKey: 'RECTYPE',
		valueHandler: _signRecTypeHander
	}, {
		name: '签到时间',
		valueKey: 'ATTTIME'
	}, {
		name: '操作',
		isView: true
	}
]

export const signDetailMapper: TableMapper[][] = [
	[
		{ name: '签到人', valueKey: 'NAME' },
		{ name: '身份证号', valueKey: 'ID_NUM' },
	],
	[
		{ name: '考勤状态', valueKey: 'TYPE2', valueHandler: _signStatusHander },
		{ name: '考勤类型', valueKey: 'KQFLAG', valueHandler: _signTypeHander },
	],
	[
		{ name: '签到单位', valueKey: 'DEPTNAME' },
		{ name: '识别类型', valueKey: 'RECTYPE', valueHandler: _signRecTypeHander },
	],
	[
		{ name: '签到时间', valueKey: 'ATTTIME', normal: true  },
	],
	[
		{ name: '签到照片', valueKey: 'PICPATH', isImage: true },
	]
]

// 学习记录表结构
export const studyTableMapper: TableMapper[] = [
	{
		name: '学习日期',
		valueKey: 'STUDYMONTH'
	}, {
		name: '学习时间',
		valueKey: 'STUDYTIME',
	}, {
		name: '学习内容',
		valueKey: 'STUDYTITLE'
	}, {
		name: '学习时长（h）',
		valueKey: 'ONLINETIME'
	}, {
		name: '学习地点',
		valueKey: 'DEPTNAME'
	}, {
		name: '操作',
		isView: true
	}
]

export const studyDetailMapper: TableMapper[][] = [
	[
		{ name: '学习对象', valueKey: 'CRIMINALNAME' },
		{ name: '记录日期', valueKey: 'INSERTDATE' },
	],
	[
		{ name: '学习日期', valueKey: 'STUDYMONTH' },
		{ name: '学习时间', valueKey: 'STUDYTIME' },
	],
	[
		{ name: '学习地点', valueKey: 'DEPTNAME' },
		{ name: '学习时长', valueKey: 'ONLINETIME' },
	],
	[
		{ name: '学习内容', valueKey: 'STUDYTITLE' },
	]
]


// 警告记录表结构
const _sexValueHandler = _signHander({1: '男', 2: '女'})
export const warningTableMapper: TableMapper[] = [
	{
		name: '矫正对象',
		valueKey: 'criminalName'
	}, {
		name: '性别',
		valueKey: 'sex',
		valueHandler: _sexValueHandler
	}, {
		name: '警告依据',
		valueKey: 'fact'
	}, {
		name: '流程',
		valueKey: 'orderName'
	}, {
		name: '警告时间',
		valueKey: 'insertDate'
	}, {
		name: '操作',
		isView: true
	}
]

export const warningDetailMapper: TableMapper[][] = [
	[
		{ name: '矫正对象', valueKey: 'criminalName' },
		{ name: '性别', valueKey: 'sex', valueHandler: _sexValueHandler },
	],
	[
		{ name: '警告时间', valueKey: 'insertDate' },
		{ name: '流程节点', valueKey: 'orderName' },
	],
	[
		{ name: '警告依据', valueKey: 'fact' },
	]
]

// 训诫记录
export const adviseTableMapper: TableMapper[] = [
	{
		name: '矫正对象',
		valueKey: 'CRIMINALNAME'
	}, {
		name: '性别',
		valueKey: 'SEX',
		valueHandler: _sexValueHandler
	}, {
		name: '训诫理由',
		valueKey: 'TQLY'
	}, {
		name: '流程节点',
		valueKey: 'ORDERNAME'
	}, {
		name: '训诫时间',
		valueKey: 'INSERTDATE'
	}, {
		name: '操作',
		isView: true
	}
]

export const adviseDetailMapper: TableMapper[][] = [
	[
		{ name: '矫正对象', valueKey: 'CRIMINALNAME' },
		{ name: '性别', valueKey: 'SEX', valueHandler: _sexValueHandler },
	],
	[
		{ name: '训诫时间', valueKey: 'INSERTDATE' },
		{ name: '流程节点', valueKey: 'ORDERNAME' },
	],
	[
		{ name: '训诫理由', valueKey: 'TQLY' },
	]
]


// 心理测评报告
export const evaluatingTableMapper: TableMapper[] = [
	{
		name: '矫正对象',
		valueKey: 'CRIMINALNAME'
	}, {
		name: '所属机构',
		valueKey: 'DEPTNAME'
	}, {
		name: '报告时间',
		valueKey: 'INSERTDATE'
	}, {
		name: '基础心理',
		valueKey: 'EXAMGUNAME'
	}, {
		name: '结果',
		valueKey: 'RISKEXPLAIN'
	}, {
		name: '操作',
		isView: true
	}
]

export const evaluatingDetailMapper: TableMapper[][] = [
	[
		{ name: '矫正对象', valueKey: 'CRIMINALNAME' },
		{ name: '所属机构', valueKey: 'DEPTNAME' }
	],
	[
		{ name: '报告时间', valueKey: 'INSERTDATE' },
		{ name: '基础心理', valueKey: 'EXAMGUNAME' },
	],
	[
		{ name: '结果', valueKey: 'RISKEXPLAIN' },
	]
]

