import index from './index';
import { remoteResource } from '@/components/upgrade-popup/upgrade.js';

let moduleIdCardAct = {
	start: (cb) => {
		startPlayIdCardHintVoice();
		setTimeout(() => {
			const ran = Math.ceil(Math.random() * 10000);
			const ranNumber = '42098419990909' + index.prefixZero(ran, 4);
			const ranName = '测试人员' + index.prefixZero(ran, 4);
			cb({
				// number: '372925198010040016',
				number: '420281198712042852',
				name: ranName,
				sex: '男',
				nation: '汉',
				birthTime: '20090909',
				address: '武汉市',
			})
		}, 1000)
	},
	stop: () => {
		stopPlayIdCardHintVoice();
	}
}

let IdCardHintAudioCtx;
const playCount = 1;
let playIndex = 1;
let isStop = false;

function startPlayIdCardHintVoice() {
	if (!IdCardHintAudioCtx) {
		IdCardHintAudioCtx = uni.createInnerAudioContext();
		// IdCardHintAudioCtx.loop = true
		IdCardHintAudioCtx.onPlay(() => {
			console.log('开始播放');
		});
		IdCardHintAudioCtx.onError((err) => {
			console.log('播放错误：', err);
		});
		IdCardHintAudioCtx.onEnded(function(r) {
			console.log('播放结束：', r);
			if (isStop) return;
			if (playIndex < playCount) {
				playIndex++;
				IdCardHintAudioCtx.play();
			} else {
				playIndex = 1;
			}
		})
		IdCardHintAudioCtx.onStop(function(r) {
			console.log('播放停止：', r);
			playIndex = 1;
		})
	}
	isStop = false;
	IdCardHintAudioCtx.src = '../../static/voice/idcard_hint.mp3';
	IdCardHintAudioCtx.play();
}

function stopPlayIdCardHintVoice() {
	isStop = true;
	if (IdCardHintAudioCtx) {
		IdCardHintAudioCtx.stop();
	}
}

// todo: 正式版本需要把forTest改为false
const forTest = false;
// #ifdef APP
if (process.env.NODE_ENV === 'development') {

} else {
	if (!forTest) {
		const moduleIdCardActNative = uni.requireNativePlugin('ModuleIDCardAct')
		moduleIdCardAct = {
			start: (cb) => {
				startPlayIdCardHintVoice();
				console.log('moduleIdCardActNative start!');
				moduleIdCardActNative.start(cb);
			},
			stop: () => {
				stopPlayIdCardHintVoice();
				moduleIdCardActNative.stop();
			}
		}		
	}
}
// #endif

let moduleFaceCompare = {
	compareFeature: (face1, face2, callback) => {
		
	}
};
// #ifdef APP
if (process.env.NODE_ENV === 'development') {
	moduleFaceCompare = uni.requireNativePlugin('ModuleFaceCompare');
} else {
	moduleFaceCompare = uni.requireNativePlugin('ModuleFaceCompare');
}
// #endif

const infoJson = {
	"apkVersion": "1.1",
	"apkPackageName": "app1_0.apk",
	"wgtVersion": "1.1.0",
	"wgtPackageName": "wgt1_1_0.wgt",
	"forceUpdate": false
}
async function checkVersion(updateCallback) {
	const remoteResourcePath = (name) => {
		return remoteResource + name;
		// return 'https://www.xintuoycp.com/h5/update/sf/' + name
		// return 'http://127.0.0.1:5173/static/version/' + name
		// return 'http://192.168.239.108:5173/static/version/' + name
	}
	const currentVersionInfo = await getCurrentVersionInfo().catch((err) => {
		console.log(err);
	})
	console.log('当前版本信息', currentVersionInfo);
	if (!currentVersionInfo) {
		return;
	}
	const {
		appVersion: currentAppVersion,
		wgtVersion: currentWgtVersion
	} = currentVersionInfo

	uni.request({
		url: remoteResourcePath('info.json'),
		success: (res) => {
			const info = res.data
			console.log('获取到的新版本信息：', info);
			if (!info) {
				return;
			}
			const {
				apkVersion,
				apkPackageName,
				wgtVersion,
				wgtPackageName,
				forceUpdate,
				updateInfo
			} = info;
			if (versionCompare(currentAppVersion, apkVersion) < 0) {
				// apk更新
				updateCallback && updateCallback({
					...info,
					version: apkVersion,
					url: remoteResourcePath(apkPackageName),
				}, currentVersionInfo)
				return;
			}
			if (versionCompare(currentWgtVersion, wgtVersion) < 0) {
				// wgt更新
				updateCallback && updateCallback({
					...info,
					version: wgtVersion,
					url: remoteResourcePath(wgtPackageName),
					type: 'wgt',
				}, currentVersionInfo)
				return;
			}
		},
		fail: (err) => {
			console.log('获取失败：', err);
		}
	})
}

function getCurrentVersionInfo() {
	return new Promise((resolve, reject) => {
		// #ifndef APP-PLUS
		reject('只支持APP获取版本信息');
		// #endif
		plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {
			const data = {
				action: 'checkVersion',
				appid: plus.runtime.appid,
				appVersion: plus.runtime.version,
				wgtVersion: widgetInfo.version
			}
			console.log("data: ", data);
			resolve(data);
		})
	})
}

/**
 * 对比版本号，如需要，请自行修改判断规则
 * 支持比对	("3.0.0.0.0.1.0.1", "3.0.0.0.0.1")	("3.0.0.1", "3.0")	("3.1.1", "3.1.1.1") 之类的
 * @param {Object} v1
 * @param {Object} v2
 * v1 > v2 return 1
 * v1 < v2 return -1
 * v1 == v2 return 0
 */
function versionCompare(v1 = '0', v2 = '0') {
	v1 = String(v1).split('.')
	v2 = String(v2).split('.')
	const minVersionLens = Math.min(v1.length, v2.length);

	let result = 0;
	for (let i = 0; i < minVersionLens; i++) {
		const curV1 = Number(v1[i])
		const curV2 = Number(v2[i])

		if (curV1 > curV2) {
			result = 1
			break;
		} else if (curV1 < curV2) {
			result = -1
			break;
		}
	}

	if (result === 0 && (v1.length !== v2.length)) {
		const v1BiggerThenv2 = v1.length > v2.length;
		const maxLensVersion = v1BiggerThenv2 ? v1 : v2;
		for (let i = minVersionLens; i < maxLensVersion.length; i++) {
			const curVersion = Number(maxLensVersion[i])
			if (curVersion > 0) {
				v1BiggerThenv2 ? result = 1 : result = -1
				break;
			}
		}
	}

	return result;
}

function downloadApk(fileName) {
	const path = 'http://192.168.3.1:5173/static/version/' + fileName
	console.log(path);
	// #ifdef APP-PLUS
	plus.runtime.openURL(path);
	// #endif
}

const plugins = {
	moduleIdCardAct,
	moduleFaceCompare,
	checkVersion,
	getCurrentVersionInfo,
	versionCompare,
	forTest
}

export default plugins
