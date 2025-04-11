const UserInactiveMaxSeconds = 120;
export default {
	data() {
		return {
			leftTime: UserInactiveMaxSeconds,
			isCountdown: false,
			reLaunchUrl: '',
			isPageShow: true,
			pagesLength: 1
		}
	},
	provide() {
		return {
			userInactivePage: this
		}
	},
	async onShow() {
		this.isPageShow = true;
		console.log('on show!');
		await uni.$u.sleep(500);
		this.initAutoClose();
	},
	onHide() {
		this.isPageShow = false;
		// console.log('***************** on hide!');
		this.clearAutoClose();
	},
	onUnload() {
		this.isPageShow = false;
		// console.log('***************** on unload!');
		this.clearAutoClose();
	},
	methods: {
		capture(e) {
			if (!this.isPageShow) return;
			// console.log('******** capture: resetAutoClose!', this.isPageShow);
			this.resetAutoClose();
		},
		startCountdown() {
			this.stopCountdown();
			this.isCountdown = true;
			this.leftTime = UserInactiveMaxSeconds;
			this.countdownInterval = setInterval(() => {
				this.leftTime--;
				if (this.leftTime === 0) {
					// 结束停止倒计时
					this.stopCountdown();
					// console.log('re launch url:', this.reLaunchUrl);
					uni.navigateBack({
						delta: this.pagesLength
					})
					// uni.reLaunch({
					// 	// url: '/pages/home/home',
					// 	url: this.reLaunchUrl
					// });
				}
			}, 1000);
		},
		stopCountdown() {
			this.isCountdown = false;
			this.countdownInterval && clearInterval(this.countdownInterval);
		},
		initAutoClose() {
			// console.log(getCurrentPages());
			const pages = getCurrentPages();
			this.pagesLength = pages.length;
			if (this.pagesLength > 1) {
				this.reLaunchUrl = pages[0].$page.path;
				// console.log(this.reLaunchUrl);
				this.resetAutoClose();
			}
		},
		resetAutoClose() {
			this.stopCountdown();
			if (this.userFuncTask) {
				this.userFuncTask.listener();
				return;
			}
			this.userFuncTask = uni.$u.initTimeUserFunc({
				ms: 3000,
				cb: () => {
					// console.log('时间到了，我要倒计时了');
					this.startCountdown();
				}
			})
		},
		clearAutoClose() {
			if (this.userFuncTask) {
				this.userFuncTask.release();
			}
			this.stopCountdown();
		},
	}
}