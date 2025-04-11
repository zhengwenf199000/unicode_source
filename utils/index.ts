import moment from 'moment'
import test from './test.js'

function sleep(ms: number) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(null)
		}, ms)
	})
}

function prefixZero(n: number | string, m: number) {
	const s = (Array(m).join('0') + n).slice(-m);
	return s;
}

function deepClone(obj) {
	// 对常见的“非”值，直接返回原来值
	if ([null, undefined, NaN, false].includes(obj)) return obj
	if (typeof obj !== 'object' && typeof obj !== 'function') {
		// 原始类型直接返回
		return obj
	}
	const o = test.array(obj) ? [] : {}
	for (const i in obj) {
		if (obj.hasOwnProperty(i)) {
			o[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
		}
	}
	return o
}

function timeFormat(time: number, format: string = 'YYYY-MM-DD HH:mm'): string {
	return moment(time).format(format);
}

function age(date: moment.MomentInput, format: string = 'YYYYMMDD') {
	const ms = moment(date, format).valueOf()
	const age = (moment().valueOf() - ms) / 1000 / 60 / 60 / 24 / 365
	return age
}

function isAdult(date: moment.MomentInput, format: string = 'YYYYMMDD') {
	return age(date, format) >= 18
}

interface UserFuncOptions {
	cb(): void;
	ms: number
}

interface UserFuncTask {
	release(): void
	listener(): void
}

var initTimeUserFunc = (function() {
	var timeoutID;
	function eventFunc(options: UserFuncOptions) {
		return function (e?: Event)  {
			// console.log('重置timeout！事件event:', e);
			const { cb, ms } = options;
			timeoutID && clearTimeout(timeoutID);
			timeoutID = setTimeout(cb, ms);			
		}
	}
	const eventTypes = ['click', 'input'];
	// 添加捕获阶段事件，只支持H5
	function add(listener: (e: Event) => void) {
		// console.log(plus.webview.currentWebview());
		// plus.webview.currentWebview().addEventListener('touchstart', function(e) {
		// 	console.log('touch start:', e);
		// }, false);
		eventTypes.forEach(function(type) {
			// #ifdef APP-PLUS
			// 监听新意图事件
			plus.globalEvent.addEventListener(type, listener, true);
			// #endif
			// #ifdef H5
			document.addEventListener(type, listener, true);
			// #endif
		});
	}
	// 移除，只支持H5
	function remove(listener: (e: Event) => void) {
		eventTypes.forEach(function(type) {
			// #ifdef APP-PLUS
			// 监听新意图事件
			plus.globalEvent.removeEventListener(type, listener, true);
			// #endif
			// #ifdef H5
			document.removeEventListener(type, listener, true);
			// #endif
		});
	}
	return function(options: UserFuncOptions): UserFuncTask {
		var listener = eventFunc(options);
		// add(listener);
		listener();
		return {
			release() {
				// remove(listener);
				timeoutID && clearTimeout(timeoutID);
			},
			listener
		}
	}
})();

export default {
	...test,
	
	sleep,
	prefixZero,
	deepClone,
	
	timeFormat,
	age,
	isAdult,
	initTimeUserFunc
}