import moment from 'moment';
import { getDeptId } from '@/utils/http';

const TYPE_MAIN = 0;
const TYPE_HK_MO_TW = 1;
const TYPE_FOREIGN = 2;
// （11 城镇户籍 12 农村户籍 16 香港 14 澳门 15 台湾 02 外国籍 03 无国籍）
const ACCOUNT_TYPE_MAPPER = {
	0: '11',
	1: '16',
	2: '02',
}

const NATION_MAPPER = {
	"汉": "01",
	"蒙古": "02",
	"回": "03",
	"藏": "04",
	"维吾尔": "05",
	"苗": "06",
	"彝": "07",
	"壮": "08",
	"布依": "09",
	"朝鲜": "10",
	"满": "11",
	"侗": "12",
	"瑶": "13",
	"白": "14",
	"土家": "15",
	"哈尼": "16",
	"哈萨克": "17",
	"傣": "18",
	"黎": "19",
	"傈僳": "20",
	"佤": "21",
	"畲": "22",
	"高山": "23",
	"拉祜": "24",
	"水": "25",
	"东乡": "26",
	"纳西": "27",
	"景颇": "28",
	"柯尔克孜": "29",
	"土": "30",
	"达斡尔": "31",
	"仫佬": "32",
	"羌": "33",
	"布朗": "34",
	"撒拉": "35",
	"毛难": "36",
	"仡佬": "37",
	"锡伯": "38",
	"阿昌": "39",
	"普米": "40",
	"塔吉克": "41",
	"怒": "42",
	"乌孜别克": "43",
	"俄罗斯": "44",
	"鄂温克": "45",
	"崩龙": "46",
	"保安": "47",
	"裕固": "48",
	"京": "49",
	"塔塔尔": "50",
	"独龙": "51",
	"鄂伦春": "52",
	"赫哲": "53",
	"门巴": "54",
	"珞巴": "55",
	"基诺": "56",
	"其它": "97",
	"外国血统中国籍人士": "98"
}

export const CriminalInfoNewParams = {
	country: '156',
	account_type: '10',
	sfcn: '',
	wcn: '',
	zzmm: '',
	outside_type: '', // 矫正类别
	zyjwzxrystzk: '', // 暂予监外执行人员身体状况：
	zhjzyy: '', // 暂予监外执行就诊医院
	yxjtcyjzyshgx: '', // 有无家庭成员及主要社会关系：
	jyjxqk: '', // 就业就学情况
	xgzdw: '', // 现工作单位
	phone_no: '', // 工作单位电话
	pqzy: '', // 被捕前职业
	gjgzrylb: '', // 国家工作人员类别	字典：gjgzrylb
	grjtzk: '', // 工人具体状况		字典：grjtzk
	nmjtzk: '', // 农民具体状况		字典：nmjtzk
	org_duty: '', // 原单位及职务
	sfswry: '',
	sfycrbs: '',
	jtcrbs: '',
	sfyjsjb: '',
	jdjg: '', // 鉴定机构
	hjszs: '', // 户籍所在省
	hjszds: '', // 户籍所在市
	hjszxq: '', // 户籍所在区
	hjdsfyjzdxt: '', // 居住地是否与户籍地相同
	gdjzdszs: '', // 居住地所在省
	gdjzdszds: '', // 居住地所在市
	gdjzdszxq: '', // 居住地所在区
	
}

export const createCriminalInfoWithFormData = (formData, writData, pic_path) => {
	const {
		criminalForm
	} = CriminalInfo
	criminalForm.dept_id = getDeptId()
	criminalForm.fill_table_date = moment().format('YYYY-MM-DD')
	criminalForm.pic_path = pic_path || ''
	console.log(criminalForm,11111)
	console.log(formData,2222)
	const {
		sex,
		name,
		nation,
		number,
		birthTime,
		address,
		// 以下为录入
		oldName, // 曾用名
		dept, // 接受部门
		education, // 教育程度
		health, // 健康状况
		politics, // 原政治面貌
		marriage, // 婚姻状况
		phone, // 手机号
		code, // 验证码
		abode, // 居住地
		abodedetail, // 居住地详细地址
		work, // 工作单位（学校
		tele, // 联系电话
		zjyczljg,
		jsbpj
	} = formData
	criminalForm.name = name
	criminalForm.alias = oldName
	criminalForm.id_num = number
	criminalForm.birthday = moment(birthTime, 'YYYYMMDD').format('YYYY-MM-DD')
	criminalForm.sex = sex === '男' ? '1' : '2'
	criminalForm.affiance = marriage
	criminalForm.nation = NATION_MAPPER[nation] || '01'
	criminalForm.edu_bg = education
	criminalForm.political_status = politics
	criminalForm.health = health
	criminalForm.private_phone = phone
	criminalForm.xgzdw = work
	criminalForm.gdjzd = abodedetail
	criminalForm.gdjzdmx = abodedetail
	criminalForm.hjszd = address
	criminalForm.hjszdmx = address
	criminalForm.zjyczljg = zjyczljg
	criminalForm.jsbpj = jsbpj
	// 以下新增参数与所需入参已关联
	Object.keys(CriminalInfoNewParams).forEach(key => {
		criminalForm[key] = formData[key]
	})
	if (writData) {
		Object.keys(writData).forEach(key => {
			criminalForm[key] = writData[key]
		})		
	}
	if(formData.gaotxz_card_no){
		CriminalInfo.gaotxz.card_no = formData.gaotxz_card_no
	}
	if(formData.gaotxz_card_status){
		CriminalInfo.gaotxz.card_status = formData.gaotxz_card_status
	}
	
	if(formData.twtxz_card_no){
		CriminalInfo.twtxz.card_no = formData.twtxz_card_no
	}
	if(formData.twtxz_card_status){
		CriminalInfo.twtxz.card_status = formData.twtxz_card_status
	}
	
	return CriminalInfo
}

export const CriminalInfo = {
	"criminalForm":
	{
		"approveflag": "1",					// 默认传1	（必填）
		"dept_id": getDeptId(),						// 矫正单位（司法局/所）id
		"pic_path": "",						// 头像上传路径，用下方上传接口返回值
		"fill_table_date": '',		// 填表日期:YYYY-MM-DD
		"outside_type": "02",				// 矫正类别（必填）
											// 字典codeType为：common-outside_type   	
											// 						管制			01
											// 缓刑			02
											// 假释			03
											// 暂予监外执行	 04
											// 						其他       	99
		"zyjwzxrystzk": "",					// 暂予监外执行人员身体状况 （矫正类别为暂予监外执行时为必填项）
		// 字典codeType为：zyjwzxrystzk
		"zhjzyy": "",						// 就诊医院
		"sfcn": "1",							// 是否成年（必填） 
		// （0 否 1 是）字典：common-is_or_not
		"wcn": "",							// 未成年 
		// （01 年满16周岁 02 不满16周岁） 字典：wcn
		"name": "",					// 姓名（必填）
		"alias": "",							// 曾用名
		"zjlx": "1",							// 证件类型 （必填）（固定值1）
		"id_num": "",		// 身份证号（必填）
		"birthday": "",			// 出生日期（必填）
		"sex": "1",							// 性别（必填） （1 男 2 女）
		"affiance": "02",					// 婚姻状况（必填）  字典项：sfb_hyzk（01 未婚 02 已婚 03 离异 04 丧偶）
		"account_type": "11",				// 国籍(户籍) （必填） 
		// 字典：account_type 
		// （11 城镇户籍 12 农村户籍 16 香港 14 澳门 15 台湾 02 外国籍 03 无国籍）
		"country": "156",					// 国家（必填）字典：
		// common-country （156 中国  158中国台湾）
		"nation": "03",						// 民族（必填）字典：nation
		"edu_bg": "01",						// 文化程度（必填） 字典：common-edu_bg
		"political_status": "02",			// 原政治面貌（必填）字典：political_status
		"zzmm": "02",						// 政治面貌（必填）字典：political_status
		"health": "1",						// 健康状况       字典：sfb_jkzk
		"jtjkzk": "",						// 具体健康状况
		"sfycrbs": "1",						// 是否有传染病史（必填）字典：approve-flag
		"jtcrbs": "03",						// 具体传染病史			字典：jtcrbs
		"sfyjsjb": "1",						// 是否有精神病（必填）  	字典：approve-flag
		"jdjg": "",					  // 鉴定机构
		"sfdcpg": "1",						// 是否调查评估（必填） 	字典：common-is_or_not
		"dcpgyj": "01",						// 评估意见（必填）		字典：dcpgyj
		"dcyjcxqk": "01",					// 评估意见采信情况（必填） 字典：dcyjcxqk
		"ywgatsfz": "0",						// 有无港澳台身份证（必填） 字典：approve-flag
		"ywhz": "0",							// 有无护照（必填）			字典：approve-flag
		"hzhm": "",							// 护照号码
		"hzbczt": "",						// 护照保存状态（必填）		字典：hzbczt
		"ywgattxz": "0",						// 有无港澳台通行证（必填）		字典：approve-flag
		"ywgajmwlndtxz": "0",				// 有无港澳居民往来内地通行证（必填）字典：approve-flag
		"gajmwlndtxz": "",					// 港澳居民往来内地通行证号码
		"gajmwlndtxzbczt": "",				// 港澳居民往来内地通行证保存状态	字典：gajmwlndtxzbczt
		"ywhxz": "0",						// 有无回乡证（必填）  字典：approve-flag
		"hxzhm": "",							// 回乡证号码
		"ywtbz": "0",						// 有无台胞证（必填） 	字典：approve-flag
		"tbzhm": "",							// 台胞证号码
		"tbzbczt": "",						// 台胞证保存状态 		字典：tbzbczt
		"pqzy": "05",						// 捕前职业（必填）    字典：pqzy
		"gjgzrylb": "",						// 国家工作人员类别	字典：gjgzrylb
		"grjtzk": "",						// 工人具体状况		字典：grjtzk
		"nmjtzk": "",						// 农民具体状况		字典：nmjtzk
		"native_place": "",					// 籍贯
		"jyjxqk": "03",						// 就业就学情况（必填）字典：jyjx
		"private_phone": "",		// 个人联系电话（必填）
		"xgzdw": "",							// 现工作单位
		"phone_no": "",						// 联系电话
		"org_duty": "",						// 原单位及职务
		"yxjtcyjzyshgx": "0",				// 有无家庭成员及主要社会关系 字典：common-is_or_not
		"sfswry": "0",						// 是否三无人员（必填） 字典：common-is_or_not
		"gdjzdszs": "",				// 固定居住地所属行政地区-省 （必填）参看6 ❌
		"gdjzdszds": "",				// 固定居住地所属行政地区-市 （必填）参看4 ❌
		"gdjzdszxq": "",				// 固定居住地所属行政地区-区 （必填）参看5 ❌
		"gdjzd": "",		 // 固定居住地（乡镇、街道）（必填）
		"gdjzdmx": "",			// 固定居住地明细（必填）
		"hjdsfyjzdxt": "0",					// 户籍地是否与居住地相同（必填） '1':'相同','0':'不相同'
		"hjszs": "",					// 户籍所在地所属行政地区-省   //对应接口7，国家字典值 ❌
		"hjszds": "",					// 户籍所在地所属行政地区-市   //对应接口5，字典值 ❌
		"hjszxq": "",					// 户籍所在地所属行政地区-区   //对应接口6，字典值 ❌
		"hjszd": "",		// 户籍所在地（乡镇、街道）（必填）
		"hjszdmx": "",			// 户籍所在地明细（必填）
		"zcjgmc": "",				// 侦查机关名称（必填）❌
		"jlrq": "",							// 拘留日期
		"larq": "",							// 立案日期
		"jdpzdbjg": "",						// 决定/批准逮捕机关
		"dbrq": "",							// 逮捕日期
		"zjrq": "",				// 侦结日期
		"gsjgmc": "",				// 公诉机关名称（自诉人）（必填）❌
		"qssbh": "",			// 起诉书编号（必填）❌
		"tqssrq": "",				// 提起诉讼日期（必填）❌
		"judge_unit": "",			// 判决机关（必填）❌
		"judgment_no": "",		// 判决书号（必填）❌
		"judge_date": "",					// 判决日期
		"zxtzswh": "",				// 执行通知书文号（必填）❌
		"zxtzsrq": "",				// 执行通知书日期（必填）❌
		"yjzfjg": "01",						// 移交罪犯机关  字典：yjzfjg  （矫正类别为暂予监外执行时为必填项）
		"yjzfjgmc": "",						// 移交罪犯机关名称   （矫正类别为暂予监外执行时为必填项）
		"sfyqk": "0",						// 是否有前科（必填）字典：common-is_or_not
		"qklx": "",							// 前科类型          字典：qklx
		"sflf": "0",							// 是否累犯（必填）	字典：common-is_or_not
		"sqjzjdjg": "01",					// 社区矫正决定机关（必填）
		"sqjzjdjgmc": "",			// 社区矫正决定机关名称（必填）❌
		"prison_dept": "",				// 原羁押场所
		"jfzxrq": "",				// 交付执行日期（必填）❌
		"wslx": "2",							// 文书类型（必填） 字典：wslx❌
		"wslxjbh": "~",			// 文书编号（必填）❌
		"wssxrq": "0000-00-00",				// 文书生效日期（必填）❌
		"corpus_delicti": "~",		// 主要犯罪事实（必填）❌
		"xzcfcf": "",				// 行政处罚/处分
		"xscf": "",					// 刑事处罚
		"flFilePath": "",	// 文书上传路径
		"zjyczljg":"", //最近一次治疗机构
		"jsbpj":""//精神病评级
	},

	"gatsfxx":
	{
		"xgsfz": "", 				// 香港身份证类型		值为 01
		"amsfz": "", 				// 澳门身份证类型		值为 02
		"twsfz": "", 				// 台湾身份证类型		值为 03
		"xgsfzhm": "", 				// 香港身份证号码
		"amsfzhm": "", 				// 澳门身份证号码
		"twsfzhm": ""				// 台湾身份证号码		
	},
	"gaotxz":
	{
		"card_type": "", 			// 港澳台通行证类型			值为 01
		"card_no": "", 				// 港澳台通行证号码
		"card_status": ""			// 港澳台通行证保存状态		字典值：gattxzbczt
	},
	"twtxz":
	{
		"card_type": "", 			// 台湾通行证类型				值为 02
		"card_no": "", 				// 台湾通行证号码
		"card_status": ""			// 台湾通行证保存状态			字典值：gattxzbczt
	}
}