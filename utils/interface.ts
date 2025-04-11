export interface IDCardInfo {
	// "20171127"
	effectiveStartDate: string,
	// "20371127",
	effectiveEndDate: string,
	// "sex": "男"
	sex: string,
	type: number,
	photoData: number[],
	name: string
	// "汉",
	nation: string,
	number: string,
	// 19900814
	birthTime: string,
	// "content://media/external/images/media/4308"
	photoURI: string,
	// 所属分局
	issueOffice: string
	// 地址
	address:string
}

export interface AuthInfo {
	// 远程face路径
	facepath: string,
	// 身份证号码
	idnum: string,
	// 姓名
	name: string
}

export const FormKeyDictionaryMapper = {
	education: 'common-edu_bg',
	health: 'sfb_jkzk',
	politics: 'political_status',
	marriage: 'sfb_hyzk',
	
	approveFlag: 'approve-flag',
	commonIsOrNot:'common-is_or_not',
	jtcrbs: 'jtcrbs',
	pqzy: 'pqzy',
	sfswry: 'common-is_or_not',
	country: 'common-country',
	account_type: 'account_type',
	outside_type: 'common-outside_type',
	zyjwzxrystzk: 'zyjwzxrystzk',
	jyjxqk: 'jyjx',
	
	qklx: 'qklx',
	duty: 'resume_duty', // 职务
	relation: 'common-family-relationship',
	wslx: 'wslx',
	yjzfjg: 'yjzfjg',
	sqjzjdjg: 'sqjzjdjg'
}

const marriageMapper = {
	'未婚': '01',
	'已婚': '02',
	'离异': '03',
	'丧偶': '04',
}
export const marriageOptions = Object.keys(marriageMapper).map(key => key)