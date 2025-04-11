import { f as formatAppLog, r as resolveEasycom } from "../../uni-app.es.js";
import { _ as __easycom_0 } from "../../content-bg.js";
import { resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, toDisplayString, withCtx, createBlock, createCommentVNode } from "vue";
import { u as upload, a as apis, r as requestApi } from "../../http.js";
import { u as userInactiveMixin } from "../../userInactiveMixin.js";
import { _ as _imports_0 } from "../../Home.js";
import { _ as _imports_1 } from "../../Finger.js";
import { _ as _imports_2 } from "../../Voice.js";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
const _style_0 = { "gather_content-breadcrumb": { ".gather_content ": { "height": 50, "flexDirection": "row", "alignItems": "center" } }, "gather_content-breadcrumb--textnormal": { ".gather_content .gather_content-breadcrumb ": { "color": "#666666", "fontSize": 16, "fontWeight": "bold" } }, "gather_content-breadcrumb--textseg": { ".gather_content .gather_content-breadcrumb ": { "marginLeft": 10, "marginRight": 12, "width": 10, "height": 10, "borderTopWidth": 2, "borderTopStyle": "solid", "borderTopColor": "#666666", "borderRightWidth": 2, "borderRightStyle": "solid", "borderRightColor": "#666666", "transform": "rotate(45deg)" } }, "gather_content-breadcrumb--textaction": { ".gather_content .gather_content-breadcrumb ": { "color": "#006AEC", "fontSize": 16, "fontWeight": "bold" } }, "gather_content-c": { ".gather_content ": { "flex": 1, "backgroundColor": "#ffffff", "marginBottom": 15 } }, "gather_content-c--fingerprint": { ".gather_content .gather_content-c ": { "flex": 1, "justifyContent": "center", "alignItems": "center" } }, "gather_content-c--fingerprint---status": { ".gather_content .gather_content-c .gather_content-c--fingerprint ": { "fontSize": 20, "fontWeight": "bold", "color": "#006AEC" } }, "gather_content-c--fingerprint---component": { ".gather_content .gather_content-c .gather_content-c--fingerprint ": { "marginTop": 30, "width": 200, "height": 240, "display": "flex" } }, "gather_content-c--fingerprint---component_icon": { ".gather_content .gather_content-c .gather_content-c--fingerprint ": { "position": "absolute", "left": 0, "top": 0, "width": 200, "height": 240 } }, "gather_content-c--fingerprint---component_fp": { ".gather_content .gather_content-c .gather_content-c--fingerprint ": { "flex": 1 } }, "gather_content-c--audio": { ".gather_content .gather_content-c ": { "paddingTop": 20, "paddingRight": 20, "paddingBottom": 20, "paddingLeft": 20, "flex": 1, "alignItems": "center", "justifyContent": "space-around" } }, "gather_content-c--audio---btn": { ".gather_content .gather_content-c .gather_content-c--audio ": { "width": 100, "height": 100 } }, "gather_content-c--audio---status": { ".gather_content .gather_content-c .gather_content-c--audio ": { "paddingTop": 10, "textAlign": "center", "color": "#006AEC" } }, "gather_content-c--audio---tint": { ".gather_content .gather_content-c .gather_content-c--audio ": { "marginTop": 20, "color": "#006AEC", "fontSize": 18, "fontWeight": "bold", "textAlign": "center" } }, "gather_content-c--audio---sample": { ".gather_content .gather_content-c .gather_content-c--audio ": { "alignItems": "flex-start" } }, "gather_content-c--audio---sample----tipb": { ".gather_content .gather_content-c .gather_content-c--audio .gather_content-c--audio---sample ": { "color": "#006AEC", "fontSize": 18, "fontWeight": "bold" } }, "gather_content-c--audio---sample----tip": { ".gather_content .gather_content-c .gather_content-c--audio .gather_content-c--audio---sample ": { "color": "#006AEC", "fontSize": 16, "marginTop": 5 } }, "gather_content-c--recognizeFace": { ".gather_content .gather_content-c ": { "flex": 1, "alignItems": "center", "justifyContent": "center" } }, "gather_content-c--recognizeFace---status": { ".gather_content .gather_content-c .gather_content-c--recognizeFace ": { "fontSize": 24, "fontWeight": "bold", "color": "#006AEC" } }, "gather_content-c--recognizeFace---alive_detect": { ".gather_content .gather_content-c .gather_content-c--recognizeFace ": { "marginTop": 20, "width": 800, "height": 300, "backgroundColor": "#F5DEB3" } } };
const recorderManager = uni.getRecorderManager();
const _sfc_main = {
  mixins: [userInactiveMixin],
  data() {
    return {
      step: 0,
      gettedFingerpath: "",
      fingerpath: "",
      recording: false,
      recordFile: "",
      facePath: ""
    };
  },
  computed: {
    status() {
      if (this.step === 0) {
        return "人脸采集";
      }
      if (this.step === 1) {
        return "指纹采集";
      }
      return "声纹采集";
    }
  },
  watch: {
    step(newV) {
      if (newV === 0)
        ;
      else if (newV === 1) {
        this.startFingerprint();
      } else
        ;
    }
  },
  onLoad(options) {
    const {
      idnum
    } = options;
    this.idnum = idnum;
    this.onRecorderStop();
  },
  onReady() {
    if (this.step === 0) {
      this.startAliveDetecting();
    } else if (this.step === 1) {
      this.startFingerprint();
    }
  },
  methods: {
    homeClick() {
      uni.reLaunch({
        url: "/pages/home/home"
      });
    },
    testClick() {
    },
    trydo(doo) {
      try {
        doo && doo();
      } catch (e) {
        uni.showToast({
          title: e.message,
          icon: "none",
          duration: 3e3
        });
      }
    },
    startAliveDetecting() {
      setTimeout(() => {
        this.trydo(() => {
          this.$refs.alive_detect.startDetecting((path) => {
            formatAppLog("log", "at pages/register/gather.nvue:139", path);
            if (path) {
              this.$refs.alive_detect.stopDetecting();
              this.upload(path, "renlian", (remote) => {
                this.facePath = remote;
                this.saveBiosignature(remote, 1, () => {
                  this.nextStep();
                });
              });
            }
          });
        });
      }, 1500);
    },
    onRecorderStop() {
      recorderManager.onStop((r) => {
        this.recordFile = r.tempFilePath;
        formatAppLog("log", "at pages/register/gather.nvue:164", r.tempFilePath);
        this.upload(r.tempFilePath, "shenwen", (remote) => {
          this.recordFile = remote;
          this.saveBiosignature(remote, 3, () => {
            formatAppLog("log", "at pages/register/gather.nvue:170", "声纹采集完毕！");
            uni.showToast({
              title: "声纹采集完成"
            });
            this.nextStep();
          });
        });
      });
    },
    startFingerprint() {
      uni.$u.sleep(1500).then(() => {
        this.trydo(() => {
          this.$refs.fingerprint.getFingerprintImage((path) => {
            if (path) {
              this.gettedFingerpath = path;
              this.upload(path, "zhiwen", (remote) => {
                this.fingerpath = remote;
                this.saveBiosignature(remote, 2, () => {
                  uni.showToast({
                    title: "指纹采集完成"
                  });
                  this.$refs.fingerprint.closeFingerprint();
                  this.nextStep();
                });
              });
            }
          });
        });
      });
    },
    nextStep() {
      if (this.step >= 2) {
        uni.showToast({
          title: "体征采集已完成",
          icon: "none"
        });
        uni.$u.sleep(1e3).then(() => {
          uni.navigateBack();
        });
        return;
      }
      this.step++;
    },
    upload(path, type, successCallback) {
      uni.showLoading({
        title: "上传中..."
      });
      upload(path, type).then((remote) => {
        uni.hideLoading();
        successCallback(remote);
      }).catch((err) => {
        uni.showToast({
          title: err,
          icon: "none"
        });
      });
    },
    saveBiosignature(filePath, type, successCallback) {
      const api = `${apis.saveBiosignature}?id_num=${this.idnum}&tzlx=${type}&filePath=${filePath}`;
      uni.showLoading({
        title: "正在保存特征..."
      });
      requestApi(api, null, { token: this.$store.getters.token }).then((data) => {
        uni.hideLoading();
        successCallback();
      }).catch((err) => {
        uni.showToast({
          title: err,
          icon: "none"
        });
        uni.$u.sleep(1e3).then(() => {
          uni.navigateBack();
        });
      });
    },
    startOrStopRecording() {
      this.recording ? this.stopRecording() : this.startRecording();
      this.recording = !this.recording;
    },
    startRecording() {
      recorderManager.start({
        duration: 6e5
      });
    },
    stopRecording() {
      recorderManager.stop();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_content_bg = resolveEasycom(resolveDynamicComponent("content-bg"), __easycom_0);
  const _component_alive_detect = resolveComponent("alive-detect");
  const _component_swiper_item = resolveComponent("swiper-item");
  const _component_finger_print = resolveComponent("finger-print");
  const _component_swiper = resolveComponent("swiper");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", {
      class: "content gather_content",
      onClick: _cache[2] || (_cache[2] = (...args) => _ctx.capture && _ctx.capture(...args))
    }, [
      createVNode(_component_content_bg),
      createElementVNode("view", { class: "content-nav" }, [
        createElementVNode("u-image", {
          class: "content-nav-home",
          src: _imports_0,
          mode: "widthFix",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.homeClick && $options.homeClick(...args))
        })
      ]),
      createElementVNode("view", { class: "content-c" }, [
        createElementVNode("view", { class: "gather_content-breadcrumb" }, [
          createElementVNode("u-text", { class: "gather_content-breadcrumb--textnormal" }, "体征采集"),
          createElementVNode("view", { class: "gather_content-breadcrumb--textseg" }),
          createElementVNode(
            "u-text",
            { class: "gather_content-breadcrumb--textaction" },
            toDisplayString($options.status),
            1
            /* TEXT */
          )
        ]),
        createVNode(_component_swiper, {
          class: "gather_content-c",
          current: $data.step,
          "disable-touch": true
        }, {
          default: withCtx(() => [
            createVNode(_component_swiper_item, null, {
              default: withCtx(() => [
                createElementVNode("view", { class: "gather_content-c--recognizeFace" }, [
                  createElementVNode("u-text", { class: "gather_content-c--recognizeFace---status" }, "正在检测人脸..."),
                  $data.step === 0 ? (openBlock(), createBlock(_component_alive_detect, {
                    key: 0,
                    ref: "alive_detect",
                    class: "gather_content-c--recognizeFace---alive_detect",
                    cameratype: "black",
                    onOnDetectFailure: _ctx.detectFailure,
                    onOnDetectSuccess: _ctx.detectSuccess
                  }, null, 8, ["onOnDetectFailure", "onOnDetectSuccess"])) : createCommentVNode("v-if", true),
                  createCommentVNode(' <image style="height: 200; width: 200; background: red" :src="facePath"></image> ')
                ])
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_swiper_item, null, {
              default: withCtx(() => [
                createElementVNode("view", { class: "gather_content-c--fingerprint" }, [
                  createElementVNode("u-text", { class: "gather_content-c--fingerprint---status" }, "请按压指纹..."),
                  createElementVNode("view", { class: "gather_content-c--fingerprint---component" }, [
                    !$data.gettedFingerpath ? (openBlock(), createElementBlock("u-image", {
                      key: 0,
                      class: "gather_content-c--fingerprint---component_icon",
                      src: _imports_1
                    })) : createCommentVNode("v-if", true),
                    $data.step === 1 ? (openBlock(), createBlock(
                      _component_finger_print,
                      {
                        key: 1,
                        ref: "fingerprint",
                        class: "gather_content-c--fingerprint---component_fp"
                      },
                      null,
                      512
                      /* NEED_PATCH */
                    )) : createCommentVNode("v-if", true)
                  ])
                ])
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_swiper_item, null, {
              default: withCtx(() => [
                createElementVNode("view", { class: "gather_content-c--audio" }, [
                  createElementVNode("view", { style: { "align-items": "center" } }, [
                    createElementVNode("u-image", {
                      class: "gather_content-c--audio---btn",
                      src: _imports_2,
                      onClick: _cache[1] || (_cache[1] = (...args) => $options.startOrStopRecording && $options.startOrStopRecording(...args))
                    }),
                    createElementVNode(
                      "u-text",
                      { class: "gather_content-c--audio---btn gather_content-c--audio---status" },
                      toDisplayString($data.recording ? "正在录制..." : ""),
                      1
                      /* TEXT */
                    ),
                    createElementVNode(
                      "u-text",
                      { class: "gather_content-c--audio---tint" },
                      toDisplayString($data.recording ? "请点击录制按钮结束录制" : "请点击录制按钮，贴近麦克风开始录制"),
                      1
                      /* TEXT */
                    )
                  ]),
                  createElementVNode("view", { class: "gather_content-c--audio---sample" }, [
                    createElementVNode("u-text", { class: "gather_content-c--audio---sample----tipb" }, "您可以朗读下面这段文字："),
                    createElementVNode("u-text", { class: "gather_content-c--audio---sample----tip" }, "我是***司法所的矫正对象***，近期我都有认真反思自己所犯的罪行，并充分认识到罪行的严重性，以后绝不再犯，我服从矫正机构的管理，接受司法机关的监督，我会按时参加矫正机构组织的教育学习、社区服务活动，主动签到上报位置，汇报思想、汇报个人活动情况，我服从矫正机构的安排，积极进取，力争早日成为一个合格的公民。汇报人：***")
                  ])
                ])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }, 8, ["current"])
      ])
    ])
  ]);
}
const gather = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/pages/register/gather.nvue"]]);
export {
  gather as default
};
