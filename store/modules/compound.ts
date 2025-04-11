import { registerUniformDesc } from 'XrFrame/xrFrameSystem'
import { AuthInfo } from '@/utils/interface'
import { TableMapper } from '@/utils/tableMappers'

export type CompoundDetailData = {
	name: string,
	detailMapper: TableMapper[][],
	data: object
}

export type CompoundState = {
	authInfo: AuthInfo,
	detailData?: CompoundDetailData,
	targetDocumentPath?: string,
	targetDocumentInfo?: any,
	targetDocumentImages?: any
}

const state: CompoundState = {
	authInfo: null,
	targetDocumentInfo: {},
	targetDocumentImages: {}
}

const getters = {
	compoundAuthInfo(state: CompoundState): AuthInfo {
		return state.authInfo
	},
	compoundDetailData(state: CompoundState): CompoundDetailData {
		return state.detailData
	},
	targetDocumentPath(state: CompoundState): string {
		return state.targetDocumentPath
	},
	targetDocumentInfo(state: CompoundState): any {
		return state.targetDocumentInfo
	},
	targetDocumentImages(state: CompoundState): any {
		return state.targetDocumentImages
	}
}

const mutations = {
	setAuthInfoForCompound(state: CompoundState, authInfo: AuthInfo) {
		state.authInfo = authInfo
	},
	clearAuthInfoForCompound() {
		state.authInfo = null
	},
	setDetailData(state: CompoundState, detailData: CompoundDetailData) {
		state.detailData = detailData
	},
	setTargetDocumentPath(state: CompoundState, path: string) {
		state.targetDocumentPath = path
	},
	setTargetDocumentInfo(state: CompoundState, info: string) {
		state.targetDocumentInfo = info
	},
	setTargetDocumentImages(state: CompoundState, imgs: any) {
		state.targetDocumentImages = imgs
	}
}

export default {
	state,
	getters,
	mutations
}