import moment from 'moment';
import { upload, requestApi, apis } from './http';
import { createCriminalInfoWithFormData } from '@/utils/criminalInfo';
import store from '@/store';

type OfflineFormModel = {
	basicData: any
	writData: any
	resumeDatas: any
	relationDatas: any
	idCardPhotoLocalPath: string
}

type OfflineFeatureModel = {
	localFacePath: string
	localRecordPath: string
	localFingerPath: string
}

export type OfflineInfo = {
	name: string,
	number: string
	createTime: number
	forms?: OfflineFormModel
	feature?: OfflineFeatureModel
}

/// 离线工具：用于保存管理离线入矫数据
const OfflineDataStorageKey = 'OfflineDataStorageKey';
export default class Offline {
	// private static _instance: Offline
	// data: OfflineInfo[]

	static get(): Offline {
		if (!this._instance) {
			this._instance = new Offline();
			this._instance._init();
		}
		return this._instance;
	}

	private _init() {
		this.data = uni.getStorageSync(OfflineDataStorageKey) || [];
		store.commit('offline/offlineStoreInit', this.data);
	}

	addForms(basicData: any, writData: any, idCardPhotoLocalPath: string, resumeDatas?: any, relationDatas?: any) {
		try {
			const obj = {
				name: basicData.name,
				number: basicData.number,
				createTime: new Date().getTime(),
				forms: {
					basicData,
					writData,
					resumeDatas,
					relationDatas,
					idCardPhotoLocalPath
				}
			};
			const info = this.findInfo(basicData.number);
			// 找到记录信息说明已经离线入矫过
			if (info) {
				Object.assign(info, obj);
			} else {
				this.data.unshift(obj);
			}
			this.syncLocalData();
		} catch (e) {
			console.error(e);
		}
	}

	// 保存生物特征
	addFeature(idcardNo: string, localFacePath: string, localRecordPath: string, localFingerPath: string, name: string = '') {
		const localInfo = this.findInfo(idcardNo)
		const info: OfflineInfo = localInfo || { name, number: idcardNo };
		console.log(info);
		console.log('人脸：', localFacePath);
		console.log('声纹：', localRecordPath);
		console.log('指纹：', localFingerPath);
		if (info) {
			info.createTime = new Date().getTime();
			info.feature = {
				localFacePath,
				localRecordPath,
				localFingerPath
			}
			if (!localInfo) {
				this.data.unshift(info);
			}
			this.syncLocalData();
		}
	}

	syncLocalData() {
		uni.setStorageSync(OfflineDataStorageKey, this.data);
		store.commit('offline/offlineStoreInit', this.data);
	}

	// 通过身份证查找离线入矫用户信息
	findInfo(idcardNo: string) {
		return this.data.find((o) => o.number == idcardNo);
	}

	deleteInfo(idcardNo: string) {
		let i = 0;
		for (let s of this.data) {
			if (s.number == idcardNo) {
				this.data.splice(i, 1);
				// todo: 需要同步删除本地存储的数据
				break;
			}
			i++;
		}
		this.syncLocalData();
	}

	addCriminal(forms: OfflineFormModel, feature: OfflineFeatureModel, remote: string, number: string) {
		const token = store.getters['token'];
		this.deleteLocalPath(forms.idCardPhotoLocalPath);
		const criminalInfo = createCriminalInfoWithFormData(forms.basicData, forms.writData, remote);
		uni.showLoading({
			title: '正在入矫...'
		});
		requestApi(apis.addCriminal, criminalInfo, { token }).then(result => {
			console.log(result);
			uni.showToast({
				title: '入矫成功！'
			});
			// 入矫成功保存个人简历与家庭关系
			uni.showLoading({
				title: '简历和家庭关系上传...'
			});
			let infoCount = forms.resumeDatas.length + forms.relationDatas.length
			const infoUploadCompletion = () => {
				infoCount--;
				if (infoCount <= 0) {
					// 上传生物特征
					this.saveBiosignatures(feature, number, token);
				}
			}
			if (infoCount > 0) {
				this.saveResume(forms.resumeDatas, number, token, infoUploadCompletion);
				this.saveRelation(forms.relationDatas, number, token, infoUploadCompletion);
			} else {
				infoUploadCompletion();
			}
		}).catch(err => {
			uni.showToast({
				title: err,
				icon: 'none'
			})
			// 入矫失败，有可能已入矫，那么就是生物特征还未上传
			this.saveBiosignatures(feature, number, token);
		})
	}

	saveBiosignatures(feature: OfflineFeatureModel, number: string, token: string) {
		uni.showLoading({
			title: '上传生物特征...'
		});
		let doneCount = 0;
		let failCount = 0;
		const featureUploadCompletion = (success: boolean) => {
			success ? doneCount++ : failCount++;
			// 上传三个全部完成（不管成功与否）
			if (doneCount >= 3) {
				uni.showToast({
					title: '上传成功'
				});
				this.deleteInfo(number);
			} else {
				uni.showToast({
					title: '生物特征上传失败',
					icon: 'none'
				})
			}
		};
		upload(feature.localFacePath, 'renlian').then(async (remote: string) => {
			await this.saveBiosignature(number, remote, 1, token);
			featureUploadCompletion(true);
		}).catch(err => {
			featureUploadCompletion();
		});
		upload(feature.localFingerPath, 'zhiwen').then(async (remote: string) => {
			await this.saveBiosignature(number, remote, 2, token);
			featureUploadCompletion(true);
		}).catch(err => {
			featureUploadCompletion();
		});
		upload(feature.localRecordPath, 'shenwen').then(async (remote: string) => {
			await this.saveBiosignature(number, remote, 3, token);
			featureUploadCompletion(true);
		}).catch(err => {
			featureUploadCompletion();
		});
	}

	saveBiosignature(number: string, filePath: string, type: number, token: string): Promise<any> {
		const api = `${apis.saveBiosignature}?id_num=${number}&tzlx=${type}&filePath=${filePath}`;
		return requestApi(api, null, {
			token
		});
	}

	saveResume(resumeDatas: any[], number: string, token: string, completion: Function) {
		resumeDatas.forEach(resume => {
			let start_date = resume.start_date || ''
			let end_date = resume.end_date || ''
			start_date = moment(start_date, 'yyyy-DD-MM').format('yyyy-DD-MM HH:mm:ss')
			end_date = moment(end_date, 'yyyy-DD-MM').format('yyyy-DD-MM HH:mm:ss')
			requestApi(apis.saveResume, { ...resume, id_num: number, start_date, end_date }, { token }).then(result => {
				completion(result);
			}).catch(() => {
				completion();
			});
		});
	}

	saveRelation(relationDatas: any[], number: string, token: string, completion: Function) {
		relationDatas.forEach(relation => {
			requestApi(apis.saveRelation, { ...relation, id_num: number }, { token }).then(result => {
				completion(result);
			}).catch(() => {
				completion();
			});
		});
	}

	async submitInfo(info: OfflineInfo) {
		if (!info) return;
		if (!info.forms && !info.feature) return;
		if (!info.forms) {
			const token = store.getters['token'];
			this.saveBiosignatures(info.feature, info.number, token)
			return;
		}
		const exist = await this.isFileExist(info.forms.idCardPhotoLocalPath).catch(function(err) {
			console.log('文件不存在：', err);
		});
		if (exist) {
			// 首先上传身份证照片，身份证照片不关乎主流程，设置3s超时，不论成功与否均调用入矫
			upload(info.forms.idCardPhotoLocalPath, '', 3).then((remote: string) => {
				this.addCriminal(info.forms, info.feature, remote, info.number);
			}).catch(() => {
				this.addCriminal(info.forms, info.feature, '', info.number);
			})
		} else {
			this.addCriminal(info.forms, info.feature, '', info.number);
		}
	}

	isFileExist(path: string): Promise<boolean> {
		return new Promise(function(resolve, reject) {
			// #ifdef APP-PLUS
			plus.io.resolveLocalFileSystemURL(path, function(r) {
				resolve(true);
			}, function(err) {
				reject(err);
			});
			// #endif
			// #ifndef APP-PLUS
			reject(new Error('不支持'));
			// #endif
		});
	}

	deleteLocalPath(localPath: string) {

	}
}

