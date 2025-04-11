
import { requestApi, apis } from './http'
import { DOMParser } from 'xmldom'
const parser = new DOMParser()

// #ifdef MP-WEIXIN
const fileMgr = uni.getFileSystemManager()
fileMgr.readFile({
	filePath: '../static/data/provinces.xml',
	success(res: any) {
		const provinces = res.data
		toProvincesData(provinces)
	},
	fail(err) {
		console.log('获取失败：', err);
	}
})
// #endif

// #ifdef H5
uni.request({
	url: '../static/data/provinces.xml',
	success(res: any) {
		const provinces = res.data
		toProvincesData(provinces)
	},
	fail(err) {
		console.log('获取失败：', err);
	}
})
// #endif

// #ifdef APP-PLUS
plus.io.resolveLocalFileSystemURL('_www/static/data/provinces.xml', (dirEntry: any) => {
	dirEntry.file((file: any) => {
		const reader = new plus.io.FileReader()
		reader.onloadend = (e: any) => {
			toProvincesData(e.target.result)
		}
		reader.readAsText(file)		
	})
}, (err) => {

})
// #endif

interface CountryInfo {
	text: string
	value: string,
}

interface Region {
	code: string,
	value: string,
	children: Region[]
}

type CountryInfoCallback = (infos: CountryInfo[]) => void;
let provinces: CountryInfo[]
let provincesCallback: CountryInfoCallback
import regions from './citys.json';

function getRegions(): Region[] {
	return regions as Region[];
}

function getProvinces(): CountryInfo[] {
	if (provinces) return provinces;
	provinces = getRegions().map(({code, value}) => ({text: value, value: code}));
	return provinces;
}

function toProvincesData(provincesxml: string) {
	return;
	const doc = parser.parseFromString(provincesxml, 'text/xml')
	const provincesDom = doc.documentElement.getElementsByTagName('option')
	provinces = []
	for (let i = 0; i < provincesDom.length; i++) {
		const provinceName = provincesDom[i].firstChild.data
		const provinceNum = provincesDom[i].attributes[0].nodeValue
		provinces.push({
			text: provinceName,
			value: provinceNum
		})
	}
	if (provincesCallback) {
		provincesCallback(provinces)
	}
	console.log(provinces);
}

export function setProvincesCallback(callback: CountryInfoCallback) {
	callback(getProvinces());
	
	// provincesCallback = callback
	// if (provinces && callback) {
	// 	callback(provinces)
	// }
}

export function getProvincesPromise() {
	return new Promise((resolve, reject) => {
		resolve(getProvinces());
	})
}
// 通过省份编码获取该省所有城市
export const provinceCitysMapper = {}
export function getCitysWithProvinceCode(code: string): Promise<CountryInfo[]> {
	return new Promise((resolve, reject) => {
		if (!code) {
			reject('省份为空')
			return
		}
		let citys = provinceCitysMapper[code]
		console.log('citys:', citys, provinceCitysMapper);
		if (!citys) {
			const region = getRegions().find(r => r.code == code);
			if (region) {
				citys = region.children.map(r => ({text: r.value, value: r.code}));
			}
			provinceCitysMapper[code] = citys;
			// requestApi(apis.getCityList + '?mode=ajaxJson&ids=' + code, {}, {}, (r) => {
			// 	const data = r.map(v => ({ text: v.value, value: v.key }))
			// 	provinceCitysMapper[code] = data
			// 	resolve(data)
			// }).catch(err => {
			// 	reject(err)
			// })
		}
		resolve(citys);
	});
}

// 通过市编码获取区、县
export const cityAreasMapper = {}
export function getAreasWithCityCode(code: string): Promise<CountryInfo[]> {
	return new Promise((resolve, reject) => {
		if (!code) {
			reject('市为空')
			return
		}
		let areas = cityAreasMapper[code]
		if (!areas) {
			// 省数据
			const provinceCode = code.substring(0, 2) + '0000';
			const region = getRegions().find(r => r.code == provinceCode);
			const areasRegion = region ? region.children.find(r => r.code == code) : undefined;
			if (areasRegion) {
				areas = areasRegion.children.map(r => ({text: r.value, value: r.code}));
			}
			// requestApi(apis.getAreaList + '?mode=ajaxJson&ids=' + code, {}, {}, (r) => {
			// 	const data = r.map(v => ({ text: v.value, value: v.key }))
			// 	cityAreasMapper[code] = data
			// 	resolve(data)
			// }).catch(err => {
			// 	reject(err)
			// })
		}
		resolve(areas);
	});
}

// 通过区、县编码获取
export const areaDeptsMapper = {}
export function getDeptsWithAreaCode(code: string): Promise<CountryInfo[]> {
	return new Promise((resolve, reject) => {
		if (!code) {
			reject('省份为空')
			return
		}
		const citys = areaDeptsMapper[code]
		if (citys) {
			resolve(citys)
		} else {
			requestApi(apis.getDeptForArea, { deptName: code, deptId: '' }, {}).then(data => {
				const pickerData = data.map(v => ({ text: v.deptName, value: v.deptId }))
				areaDeptsMapper[code] = pickerData
				resolve(pickerData)
			}).catch(err => {
				reject(err)
			})
		}
	});
}

// 通过deptId获取所属机构接收人
export const deptUsersMapper = {}
export function getDeptUsersWithDeptId(deptId: string, token: string): Promise<CountryInfo[]> {
	return new Promise((resolve, reject) => {
		if (!deptId) {
			reject('所属机构为空')
			return
		}
		const users = deptUsersMapper[deptId]
		if (users) {
			resolve(users)
		} else {
			requestApi(apis.getSystemUser, { deptId }, { token }).then(data => {
				const pickerData = data.map(v => ({ text: v.NAME, value: v.ID }))
				deptUsersMapper[deptId] = pickerData
				resolve(pickerData)
			}).catch(err => {
				reject(err)
			})
		}
	});
}


