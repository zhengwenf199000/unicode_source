import { f as formatAppLog, r as resolveEasycom } from "../../uni-app.es.js";
import { _ as __easycom_0 } from "../../content-bg.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, createCommentVNode, toDisplayString } from "vue";
import { r as requestApi, h as hooks, a as apis } from "../../http.js";
import { _ as _imports_0 } from "../../Home.js";
import { _ as _imports_0$1 } from "../../success.js";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
const _imports_2 = "/static/imgs/failure.png";
const _style_0 = { "daily_content": { "": { "alignItems": "center", "justifyContent": "space-around" } }, "daily_content-icon": { ".daily_content ": { "width": 150, "height": 150 } }, "daily_content-status": { ".daily_content ": { "marginTop": 25, "fontSize": 26, "fontWeight": "bold", "color": "#006AEC" } }, "daily_content-timeout": { ".daily_content ": { "fontSize": 20, "color": "#006AEC" } } };
const _sfc_main = {
  data() {
    return {
      success: false,
      failure: false,
      name: "",
      leftSecond: 3
    };
  },
  watch: {
    leftSecond(newV) {
      if (newV <= 0) {
        uni.navigateBack();
      }
    }
  },
  onLoad(options) {
    const {
      idnum,
      name,
      facepath
    } = options;
    this.idnum = idnum;
    this.facepath = facepath;
    this.name = name;
    formatAppLog("log", "at pages/compound/daily.nvue:51", idnum, facepath);
  },
  onReady() {
    this.signIn();
  },
  onUnload() {
    this.interval && clearInterval(this.interval);
  },
  methods: {
    signIn() {
      uni.showLoading({
        title: "正在签到..."
      });
      const {
        name,
        idnum,
        facepath
      } = this;
      requestApi(apis.signIn, {
        CRIMINAL_NAME: name,
        CRIMINAL_SFZH: idnum,
        FILE_PATH: facepath,
        SIGN_IN_TYPE: 2,
        SIGN_IN_TIME: hooks().format("yyyy-MM-DD HH:mm:ss")
      }).then((data) => {
        uni.hideLoading();
        this.success = true;
        this.$store.commit("setAuthInfoForCompound", { facepath, idnum, name });
        this.startTimeout();
      }).catch((err) => {
        uni.hideLoading();
        this.failure = true;
        this.startTimeout();
      });
    },
    startTimeout() {
      this.leftSecond = 3;
      if (!this.interval) {
        this.interval = setInterval(() => {
          this.leftSecond--;
        }, 1e3);
      }
    },
    homeClick() {
      uni.reLaunch({
        url: "/pages/home/home"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_content_bg = resolveEasycom(resolveDynamicComponent("content-bg"), __easycom_0);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "content" }, [
      createVNode(_component_content_bg),
      createElementVNode("view", { class: "content-nav" }, [
        createElementVNode("u-image", {
          class: "content-nav-home",
          src: _imports_0,
          mode: "widthFix",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.homeClick && $options.homeClick(...args))
        })
      ]),
      createElementVNode("view", { class: "content-c daily_content" }, [
        createElementVNode("view", { class: "daily_content" }, [
          $data.success ? (openBlock(), createElementBlock("u-image", {
            key: 0,
            class: "daily_content-icon",
            src: _imports_0$1
          })) : createCommentVNode("v-if", true),
          $data.failure ? (openBlock(), createElementBlock("u-image", {
            key: 1,
            class: "daily_content-icon",
            src: _imports_2
          })) : createCommentVNode("v-if", true),
          createElementVNode(
            "u-text",
            { class: "daily_content-status" },
            toDisplayString($data.name) + " 您好，" + toDisplayString(!$data.success && !$data.failure ? "正在签到..." : "") + toDisplayString($data.success ? "您已成功签到！" : "") + toDisplayString($data.failure ? "签到失败，请重试！" : ""),
            1
            /* TEXT */
          )
        ]),
        $data.success || $data.failure ? (openBlock(), createElementBlock(
          "u-text",
          {
            key: 0,
            class: "daily_content-timeout"
          },
          toDisplayString($data.leftSecond) + " 秒后自动关闭",
          1
          /* TEXT */
        )) : createCommentVNode("v-if", true)
      ])
    ])
  ]);
}
const daily = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/pages/compound/daily.nvue"]]);
export {
  daily as default
};
