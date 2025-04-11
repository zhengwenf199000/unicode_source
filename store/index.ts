
import { createStore, ActionContext } from 'vuex';
import { CommonStore } from './config';
import compound, { CompoundState } from './modules/compound';
import offline, { OfflineState } from './modules/offline';
import { systemName } from '../utils/http'

interface LoginOptions {
	userName: string,
	password: string,
	fail?: (err: Error) => {},
	success?: () => {}
}

type IndexState = {
	token: string,
	version: string,
	systemName: string,
	deviceMac: string,
	updateClosed: boolean
}

const state: IndexState = {
	token: '120000020101021211070001',
	version: 'V 1.0.0',
	systemName: systemName,
	deviceMac: '',
	updateClosed: false
}

const getters = {
	version: (state: IndexState): string => {
		return state.version
	},
	token: (state: IndexState): string => {
		return state.token
	},
	systemName: (state: IndexState): string => {
		return state.systemName
	},
	deviceMac: (state: IndexState): string => {
		return state.deviceMac
	},
	updateClosed: (state: IndexState): boolean => {
		return state.updateClosed
	}
}

const mutations = {
	setToken: (state: IndexState, token: string) => {
		state.token = token
	},
	setSystemName: (state: IndexState, name: string) => {
		state.systemName = name
	},
	setDeviceMac: (state: IndexState, mac: string) => {
		state.deviceMac = mac
	},
	setUpdateClosed: (state: IndexState, closed: boolean) => {
		state.updateClosed = closed
	}
}

const actions = {
	
}

const index = {
	state,
	getters,
	mutations,
	actions
}

export type RootState = {
	index: IndexState,
	compound: CompoundState,
	offline: OfflineState
}

export const modules = {
	index,
	compound,
	offline
}

const store = createStore<RootState>({
	modules
}) as CommonStore

export default store;