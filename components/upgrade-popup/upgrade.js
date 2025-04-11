
export const remoteResource = 'http://39.101.178.159/JudicialTianJin/';
const remoteResourcePath = (name) => {
	return remoteResource + name
}

async function checkVersion(updateCallback) {
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

const upgradePlugins = {
	checkVersion
}

export default upgradePlugins;
