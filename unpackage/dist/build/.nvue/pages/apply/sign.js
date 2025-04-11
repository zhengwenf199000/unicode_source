import { _ as __easycom_0 } from "../../content-bg.js";
import { resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, createTextVNode, toDisplayString, createCommentVNode } from "vue";
import { r as resolveEasycom } from "../../uni-app.es.js";
import { _ as __easycom_1 } from "../../breadcrumb.js";
import "../../http.js";
import { u as userInactiveMixin } from "../../userInactiveMixin.js";
import { _ as _imports_0 } from "../../Home.js";
import { _ as _imports_1 } from "../../Finger.js";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
const _style_0 = { "actions": { ".sign_content ": { "flex": 1 } }, "action-area": { ".sign_content ": { "flexDirection": "row", "alignItems": "center", "justifyContent": "space-around" } }, "finger-area": { ".sign_content ": { "flexDirection": "row", "alignItems": "center", "justifyContent": "space-around", "marginTop": 20 } }, "sign-pad-area": { ".sign_content ": { "flexDirection": "row", "alignItems": "center", "justifyContent": "space-around" } }, "sign-pad": { ".sign_content .sign-pad-area ": { "width": 800, "height": 150, "backgroundColor": "#F5DEB3" } }, "finger-content": { ".sign_content .finger-area ": { "flexDirection": "row", "width": 800 } }, "finger-icon": { ".sign_content .finger-area .finger-content .finger-icon-tint ": { "width": 150, "height": 180 } }, "finger-tint": { ".sign_content .finger-area .finger-content .finger-icon-tint ": { "marginTop": 5, "fontSize": 18, "textAlign": "center", "color": "#007aff" } }, "finger": { ".sign_content .finger-area .finger-content ": { "flex": 1 } }, "sign_content-backbtns": { ".sign_content ": { "marginTop": 10, "marginRight": 0, "marginBottom": 10, "marginLeft": 0, "display": "flex", "flexDirection": "row", "justifyContent": "space-between" } }, "sign_content-backbtn": { ".sign_content .sign_content-backbtns ": { "width": 100, "backgroundColor": "#006AEC" } } };
const _sfc_main = {
  mixins: [userInactiveMixin],
  data() {
    return {
      gettedFingerpath: null,
      isFinger: false
    };
  },
  computed: {
    token() {
      return this.$store.getters.token;
    }
  },
  onLoad(options) {
    this.idnum = options.idnum;
  },
  onReady() {
    this.$refs.signPad.setColor("#000000");
  },
  onUnload() {
    if (this.isFinger && !this.gettedFingerpath) {
      this.$refs.fingerprint.closeFingerprint();
    }
  },
  onShow() {
  },
  methods: {
    clearSign() {
      this.$refs.signPad.clear();
    },
    startFingerprint() {
      if (this.isFinger) {
        return;
      }
      this.isFinger = true;
      try {
        this.$refs.fingerprint.getFingerprintImage((path) => {
          if (path) {
            this.gettedFingerpath = path;
            this.$refs.fingerprint.closeFingerprint();
          }
        });
      } catch (error) {
        uni.showModal({
          title: 提示,
          content: "指纹采集错误" + error.message,
          showCancel: false
        });
      }
    },
    submitClick() {
      this.$refs.signPad.getSignPicture((res) => {
        if (!res) {
          uni.showToast({
            title: "请完成签名",
            icon: "none"
          });
          return;
        }
        if (!this.gettedFingerpath) {
          uni.showToast({
            title: "请完成按捺",
            icon: "none"
          });
          return;
        }
        this.$store.commit("setTargetDocumentImages", {
          finger: this.gettedFingerpath,
          sign: res
        });
        uni.redirectTo({
          url: "/pages/apply/pdf"
        });
      });
    },
    mockClick() {
    },
    homeClick() {
      uni.reLaunch({
        url: "/pages/home/home"
      });
    },
    backClick() {
      uni.navigateBack();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_content_bg = resolveEasycom(resolveDynamicComponent("content-bg"), __easycom_0);
  const _component_breadcrumb = resolveEasycom(resolveDynamicComponent("breadcrumb"), __easycom_1);
  const _component_sign_pad = resolveComponent("sign-pad");
  const _component_button = resolveComponent("button");
  const _component_finger_print = resolveComponent("finger-print");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", {
      class: "content",
      onClick: _cache[1] || (_cache[1] = (...args) => _ctx.capture && _ctx.capture(...args)),
      onTouchmove: _cache[2] || (_cache[2] = (...args) => _ctx.capture && _ctx.capture(...args))
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
      createElementVNode("view", { class: "content-c sign_content" }, [
        createVNode(_component_breadcrumb, {
          title: "自助申请自助打印",
          actionTitle: "签署"
        }),
        createElementVNode("view", { class: "actions" }, [
          createElementVNode("view", { class: "sign-pad-area" }, [
            createVNode(_component_sign_pad, {
              ref: "signPad",
              class: "sign-pad",
              onGetSignImg: _ctx.getSignImg,
              border: true,
              line: "10",
              color: "#000"
            }, null, 8, ["onGetSignImg"]),
            createVNode(_component_button, {
              class: "sign_content-backbtn",
              type: "primary",
              onClick: $options.clearSign
            }, {
              default: withCtx(() => [
                createTextVNode("重签")
              ]),
              _: 1
            }, 8, ["onClick"])
          ]),
          createElementVNode("view", { class: "finger-area" }, [
            createElementVNode("view", { class: "finger-content" }, [
              !$data.gettedFingerpath ? (openBlock(), createElementBlock("view", {
                key: 0,
                class: "finger-icon-tint"
              }, [
                createElementVNode("u-image", {
                  class: "finger-icon",
                  src: _imports_1
                }),
                createElementVNode("u-text", { class: "finger-tint" }, toDisplayString($data.isFinger ? "请按捺指纹..." : "点击“开始”按捺"), 1)
              ])) : createCommentVNode("", true),
              createVNode(_component_finger_print, {
                ref: "fingerprint",
                class: "finger"
              }, null, 512)
            ]),
            createVNode(_component_button, {
              class: "sign_content-backbtn",
              type: "primary",
              onClick: $options.startFingerprint
            }, {
              default: withCtx(() => [
                createTextVNode("开始")
              ]),
              _: 1
            }, 8, ["onClick"])
          ])
        ]),
        createElementVNode("view", { class: "sign_content-backbtns" }, [
          createVNode(_component_button, {
            class: "sign_content-backbtn",
            type: "primary",
            onClick: $options.submitClick
          }, {
            default: withCtx(() => [
              createTextVNode("提交")
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_button, {
            class: "sign_content-backbtn",
            type: "primary",
            onClick: $options.backClick
          }, {
            default: withCtx(() => [
              createTextVNode("返回")
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ])
    ], 32)
  ]);
}
const sign = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  sign as default
};
