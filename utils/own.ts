
export const needAuthPages = {
	idCard: [
		'/pages/register/gather',
	],
	idCardAndFace: [
		// 以下应该是需要验证人脸的，暂为调试方便只验证身份证
		'/pages/compound/daily',
		'/pages/compound/benefit',
		'/pages/compound/education',
		'/pages/register/print',
		'/pages/print/talk',
		'/pages/query/query',
		'/pages/apply/apply',
		'/pages/leave/leave',
		'/pages/study/study',
		'/pages/activity/activity'
	]
}

function hasIdCardNumber(path: string): boolean {
	const paths = path.split('?')
	
	if (paths.length <= 1) {
		return false
	}
	const params = {}
	paths[1].split('&').forEach(kv => {
		const kvArr = kv.split('=')
		params[kvArr[0]] = kvArr[1]
	})
	console.log(params);
	if (params['idnum']) {
		return true
	}
	return false
}

export function getPageAuthType(page: string): string {
	
	for (let s of needAuthPages.idCardAndFace) {
		if (page.indexOf(s) === 0) {
			// idnum
			return hasIdCardNumber(page) ? '' : 'idCardAndFace'
		}
	}
	for (let s of needAuthPages.idCard) {
		if (page.indexOf(s) === 0) {
			return hasIdCardNumber(page) ? '' : 'idCard'
		}
	}
	return ''
}
