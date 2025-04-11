import { f as formatAppLog } from "./uni-app.es.js";
const UserInactiveMaxSeconds = 120;
const userInactiveMixin = {
  data() {
    return {
      leftTime: UserInactiveMaxSeconds,
      isCountdown: false,
      reLaunchUrl: "",
      isPageShow: true,
      pagesLength: 1
    };
  },
  provide() {
    return {
      userInactivePage: this
    };
  },
  async onShow() {
    this.isPageShow = true;
    formatAppLog("log", "at mixins/userInactiveMixin.ts:19", "on show!");
    await uni.$u.sleep(500);
    this.initAutoClose();
  },
  onHide() {
    this.isPageShow = false;
    this.clearAutoClose();
  },
  onUnload() {
    this.isPageShow = false;
    this.clearAutoClose();
  },
  methods: {
    capture(e) {
      if (!this.isPageShow)
        return;
      this.resetAutoClose();
    },
    startCountdown() {
      this.stopCountdown();
      this.isCountdown = true;
      this.leftTime = UserInactiveMaxSeconds;
      this.countdownInterval = setInterval(() => {
        this.leftTime--;
        if (this.leftTime === 0) {
          this.stopCountdown();
          uni.navigateBack({
            delta: this.pagesLength
          });
        }
      }, 1e3);
    },
    stopCountdown() {
      this.isCountdown = false;
      this.countdownInterval && clearInterval(this.countdownInterval);
    },
    initAutoClose() {
      const pages = getCurrentPages();
      this.pagesLength = pages.length;
      if (this.pagesLength > 1) {
        this.reLaunchUrl = pages[0].$page.path;
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
        ms: 3e3,
        cb: () => {
          this.startCountdown();
        }
      });
    },
    clearAutoClose() {
      if (this.userFuncTask) {
        this.userFuncTask.release();
      }
      this.stopCountdown();
    }
  }
};
export {
  userInactiveMixin as u
};
