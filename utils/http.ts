import plugins from './plugins.js';
import dicts from './dicts';

export interface Respone {
	code: string,
	msg: string,
	data: any
}

function updateKeyHandler(storageKey: string, handler: (v: any) => void, canEmpty = false) {
	return (value?: string) => {
		console.log('updateKeyHandler:', storageKey, value);
		if (value || (canEmpty && value !== undefined)) {
			uni.setStorageSync(storageKey, value)
			handler(value)
			return
		}
		const storageVal = uni.getStorageSync(storageKey)
		console.log('updateKeyHandler storageKey:', storageVal);
		if (storageVal) {
			handler(storageVal)
		}
	}
}

type UploadType = '' | 'renlian' | 'shenwen' | 'zhiwen'
export const SIGN_IN_TYPE_MAPPER = { '公益活动': '1', '日常报到': '2', '教育学习': 3, '个别教育': '3', '集体教育': '3' }
// 测试矫正单位（司法局/所）id
export let DEPT_ID = 5073;
const DeptIdStorageKey = 'DeptIdStorageKey'
export function getDeptId() {
	return uni.getStorageSync(DeptIdStorageKey) || DEPT_ID
}
export const updateDeptId = updateKeyHandler(DeptIdStorageKey, (v) => {
	DEPT_ID = parseInt(v)
})
updateDeptId();
// 矫正单位名称
export let DEPT_NAME = '';
const DeptNameStorageKey = 'DeptNameStorageKey'
export const updateDeptName = updateKeyHandler(DeptNameStorageKey, (v) => {
	DEPT_NAME = v
})
export function getDeptBelongs() {
	const deptName = uni.getStorageSync(DeptNameStorageKey) || DEPT_NAME
	const belongs = deptName.replace('司法局', '').replace('司法所', '')
	return belongs;
}
updateDeptName();
// 系统名称
export let systemName = '';
const systemNameStorageKey = 'systemNameStorageKey'
export const updateSystemName = updateKeyHandler(systemNameStorageKey, (v) => {
	systemName = v
}, true)
updateSystemName();
// 系统名称
export let macAddress = '';
const macAddressStorageKey = 'macAddressStorageKey'
export function getMacAddress() {
	return uni.getStorageSync(macAddressStorageKey) || macAddress
}
export const updateMacAddress = updateKeyHandler(macAddressStorageKey, (v) => {
	macAddress = v
})
updateMacAddress();
// export let apiUrl = 'http://59.206.216.141:9090'
export const isDev = process.env.NODE_ENV === 'development'
export let apiUrl = isDev ? '/api' : 'http://59.206.216.141:9090'
// #ifdef APP
isDev && (apiUrl = 'https://jnsj.tjjn-datalake.com:9965/jzj/api')
// #endif
if (plugins.forTest) {
	apiUrl = 'https://jnsj.tjjn-datalake.com:9965/jzj/api';
}
const ApiUrlStorageKey = 'ApiUrlStorageKey'
export function getApiUrl() {
	return uni.getStorageSync(ApiUrlStorageKey) || apiUrl
}
export const updateApiUrl = updateKeyHandler(ApiUrlStorageKey, (v) => {
	apiUrl = v
})
updateApiUrl();
// export const apiUrl = process.env.NODE_ENV === 'development' ? '/testapi' : 'http://10.210.28.16:9090'
export const apis = {
	// 入参 header: { code: '' }
	token: '/module/external/external_getToken.do',
	// 普通文件上传 不带query ， 人脸、声纹、指纹文件上传 saveType值：   renlian:人脸 shenwen:声纹 zhiwen:指纹
	upload: '/ReceivePicServlet',
	// 获取生物特征 id_num token
	findBiosignature: '/module/external/external_findCriminalBiosignature.do',
	// 新增社矫对象
	addCriminal: '/module/external/external_saveCriminal.do',
	// 生物特性录入 id_num， filePath， tzlx:"1"        //特征类型    1：人脸；2：指纹；3：声纹
	saveBiosignature: '/module/external/external_saveBiosignature.do',
	// 保存简历，header需要token，json要加id_num
	saveResume: '/module/external/external_saveResume.do',
	// 保存家庭关系，header需要token，json要加id_num
	saveRelation: '/module/external/external_saveRelationship.do',
	// 获取字典 "codeType":"common-outside_type"
	getCodeBook: '/module/external/external_getCodeBook.do',
	// 获取部门
	getDept: '/module/external/external_getDept.do',
	// 通过部门
	getDeptForArea: '/module/external/external_getDeptForCounty.do',
	// 查询该机构及下属机构的用户，如果不传deptId，默认为设备所在机构及下属单位工作人员
	getSystemUser: '/module/external/external_getSystemUser.do',
	// 获取城市：/area_getCityList.do?mode=ajaxJson&ids=370000，ids为国家字典对应值
	getCityList: '/area_getCityList.do',
	// 获取地区: /area_getAreaList.do?mode=ajaxJson&ids=370100，ids为城市字典对应值
	getAreaList: '/area_getAreaList.do',
	// 获取所有司法所
	getDepts: '/module/external/external_getDept.do',
	// 签到，入参
	// {
	//     "CRIMINAL_NAME":"张*康",							   矫正对象姓名（非必填）
	//     "CRIMINAL_SFZH":"370523199305054613",				 矫正对象身份证号码（必填）
	//     "FILE_PATH":"202104/202104070411411.png",			 报道的图片或者视频路径	调用上方文件上传接口中URL1获取路径
	//     "SIGN_IN_TYPE":"1",									 报到类型，1-公益活动  2、日常报道   3、教育学习（必填） 
	//     "SIGN_IN_TIME": "2021-07-15 10:10:00",               签到时间（必填：yyyy-MM-dd HH:mm:ss）
	//     "EVENT_ID":""                                        报告事件ID，具体ID可通过接口17、接口18获取 （根据情况而定，															  报道类型为公益活动或者教育学习时报告事件ID为必填项） 
	// } 
	signIn: '/module/external/external_criminalSignIn.do',
	// 查询公益活动， header带入token，body带id_num
	queryLabor: '/module/external/external_queryLaborEventSpecial.do',
	// 查询教育学习 参数同上查询公益活动
	queryStudy: '/module/external/external_queryStudyEventSpecial.do',
	// 新增矫正对象执行地变更、迁居
	// {
	//     "id_num":"320923199105106354", //身份证号（必填）
	// 	"time":"2021-08-13 13:13:13", //申请时间（必填， yyyy-MM-dd hh:mm:ss）
	// 	"province":"370000", //省  （必填，参照接口7）
	// 	"city":"371500", //市    （必填，参照接口5）
	// 	"area":"371502", //区      （必填，参照接口6）
	//     "type":"",       //变更类型  （非必填，不填或者为空时为执行地变更， 值为1时为迁居） 
	// 	"street":"东昌府区司法局", //乡镇、街道   （必填）
	//     "newDeptId":"1535", //新的机构，只能为区县级及以上单位，通过接口26获得 （必填）
	// 	"reason":"系统调试", //变更理由    （必填）
	//     "userNum":"371521198704140037"//系统中司法所工作人员身份证，默认角色为司法所工作岗人员  （必填）
	// }
	addNewRelocate: '/module/external/external_addNewRelocate.do',
	// 获取矫正对象执行地变更、迁居：id_num //身份证号 （必填）type变更类型，非必填，不填或者为空时为执行地变更， 值为1时为迁居）；需要带token
	getNewRelocate: '/module/external/external_getNewRelocate.do',
	// 获取矫正对象文书列表：id_num 身份证号；需要带token
	getFiles: '/module/eleDocument/eleDocument_getSignFileList.do',
	// 获取矫正对象文书详情
	getFile: '/module/eleDocument/eleDocument_getSignFile.do',
	// 上传合并后的文书
	uploadFile: '/module/eleDocument/eleDocument_uploadSignFile.do',
	// 获取矫正对象请假记录列表 入参id_num header放token
	getLeaveList: '/module/external/external_getLeaveList.do',
	// 查询请假记录详情 入参leaveId header放token
	getLeaveDetail: '/module/external/external_getLeaveDetail.do',
	// 新增请假 header需要带token
	addLeave: '/module/external/external_leaveRegister.do',
	// 销假 入参leaveId header放token
	leaveBack: '/module/external/external_leaveBack.do',
	// 查询个人档案相关 id_num token
	 personInfo: '/module/external/external_findPersonalInfo.do',
	 // 查询在线学习记录 id_num，可选："page": 28,"limit": 16,"studyMonth": "2022-10"  header放token
	 recordStudy: '/module/external/external_getOnlineInquiry.do',
	 // 查询签到记录 id_num，可选："page": 28,"limit": 16  header放token
	 recordSign: '/module/external/external_getAttendance.do',
	 // 查询心理评测报告  id_num header放token
	 recordEvaluating: '/module/external/external_getAnswer.do',
	 // 查询警告记录   id_num header放token
	 recordWarning: '/module/external/external_getAlarmExamine.do',
	 // 查询训诫记录   id_num header放token
	 recordAdvise: '/module/external/external_getSubmitAdvise.do'
}

export function upload(filepath: string, type: UploadType, timeout: number = 60) {
	return new Promise((resolve, reject) => {
		const api = `${ apis.upload }${ type ? ('?saveType=' + type) : '' }`
		const url = getApiUrl() + api
		console.log('上传的参数：', url, filepath);
		// setTimeout(() => {
		// 	resolve(url)
		// }, 1000)
		uni.uploadFile({
			url,
			filePath: filepath,
			timeout: timeout * 1000,
			complete: (result) => {
				// console.log('complete:', result);
				const {
					statusCode,
					data,
					errMsg
				} = result;
				if (result.statusCode == 200) {
					console.log('请求结果：', data);
					resolve(data);
					// 上传成功后，清空本地数据
					deleteFile(filepath);
				} else {
					reject(errMsg);
				}
			}
		})
	})
	// return requestApi(api, body, {})
}

export function deleteFile(path: string) {
	console.log('delete file:', path);
	plus.io.resolveLocalFileSystemURL(path, (fileEntry) => {
		fileEntry.remove();
	});
}

export function requestApi(api: string, body: any, header: object, respHandler?: (r) => void) {
	// 字典直接取本地数据
	if (api === apis.getCodeBook) return new Promise((resolve) => {
		resolve(dicts[body.codeType])
	});
	return request(getApiUrl() + api, body, header, respHandler)
}
const requestTasks: UniNamespace.RequestTask[] = [];
export function request(url: string, body: any, header: object, respHandler?: (r) => void) {
	console.log(url, body, header);
	return new Promise((resolve, reject) => {
		const requestTask = uni.request({
			url,
			data: body,
			header: {
				...header,
			},
			// dataType: "json",
			method: 'POST',
			timeout: 60000,
			complete: (result) => {
				// console.log('complete:', result);
				requestTasks.pop();
				const {
					statusCode,
					data,
					errMsg,
				} = result;
				console.log(result);
				if (result.statusCode == 200) {
					respHandler && respHandler(data);
					if (data.code == '200' || data.code == '0') {
						if (body && body.codeType) {
							console.log('*******************************' + body.codeType + '*******************************');
							console.log(body.codeType + ':' + JSON.stringify(data.data));
						}
						resolve(data.data);
					} else {
						reject(data.msg ?? data.message);
					}
				} else {
					reject(cnErrMsg(errMsg));
				}
			}
		});
		requestTasks.push(requestTask);
	});
}
 
export function abortLastRequestTask() {
	if (!requestTasks.length) return;
	const task = requestTasks[requestTasks.length - 1];
	if (task) {
		task.abort();
	}
}

function cnErrMsg(errMsg: string) {
	if (!errMsg || !errMsg.indexOf) {
		return '网络错误'
	}
	if (errMsg.indexOf('timeout') > -1) {
		return '请求超时'
	}
	if (errMsg.indexOf('abort') > -1) {
		return ''
	}
	return '网络错误'
}