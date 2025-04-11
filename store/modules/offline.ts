import Offline, { OfflineInfo } from '@/utils/offline';


export type OfflineState = {
	history: OfflineInfo[]
	instance?: Offline,
}

const state: OfflineState = {
	history: []
}

const mutations = {
	offlineStoreInit(state: OfflineState, data: OfflineInfo[]) {
		state.instance = Offline.get();
		state.history = [...data];
	}
}

export default {
	namespaced: true,
	state,
	mutations
}