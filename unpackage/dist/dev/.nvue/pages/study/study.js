import { _ as __easycom_0 } from "../../content-bg.js";
import { resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, Fragment, renderList, normalizeClass, createCommentVNode, withCtx, createTextVNode } from "vue";
import { r as resolveEasycom } from "../../uni-app.es.js";
import { _ as _imports_0 } from "../../Home.js";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
const _style_0 = { "study_content-title": { ".study_content ": { "color": "#006AEC", "fontSize": 26, "fontWeight": "bold", "marginTop": 20 } }, "study_content-type": { ".study_content ": { "color": "#006AEC", "fontSize": 26, "fontWeight": "bold", "textAlign": "center", "marginTop": 10 } }, "study_content-funcsc": { ".study_content ": { "flex": 1, "justifyContent": "center" } }, "study_content-funcs": { ".study_content ": { "flexDirection": "row", "justifyContent": "center", "height": 160 } }, "study_content-funcs-f": { ".study_content .study_content-funcs ": { "marginLeft": 30 } }, "study_content-funcs-first": { ".study_content .study_content-funcs ": { "marginLeft": 0 } }, "study_content-funcs-p": { ".study_content .study_content-funcs ": { "width": 30 } }, "study_content-logout": { ".study_content ": { "alignSelf": "flex-end", "backgroundColor": "#006AEC", "marginBottom": 15, "color": "#ffffff", "width": 100 } } };
const _sfc_main = {
  data() {
    return {
      funcItems: [
        {
          path: "",
          icon: "../../static/study/VideoLearning.png"
        },
        {
          path: "",
          icon: "../../static/study/OnlineCheck-in.png"
        }
      ]
    };
  },
  onLoad(options) {
    this.idnum = options.idnum;
  },
  methods: {
    homeClick() {
      uni.reLaunch({
        url: "/pages/home/home"
      });
    },
    funcItemClick(func) {
      if (!func.path) {
        uni.showToast({
          title: "系统升级中...",
          icon: "none"
        });
        return;
      }
      if (!this.idnum) {
        uni.showToast({
          title: "未获取到您的身份信息",
          icon: "none"
        });
        return;
      }
      uni.navigateTo({
        url: func.path + "?idnum=" + this.idnum,
        animationType: "none"
      });
    },
    exitClick() {
      uni.navigateBack();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_content_bg = resolveEasycom(resolveDynamicComponent("content-bg"), __easycom_0);
  const _component_button = resolveComponent("button");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "content study_content" }, [
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
        createElementVNode("u-text", { class: "study_content-title" }, "自助学习"),
        createElementVNode("u-text", { class: "study_content-type" }, "请选择业务类型"),
        createElementVNode("view", { class: "study_content-funcsc" }, [
          createElementVNode("view", { class: "study_content-funcs" }, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($data.funcItems, (func, i) => {
                return openBlock(), createElementBlock("u-image", {
                  class: normalizeClass(["study_content-funcs-f", { "study_content-funcs-first": i === 0 }]),
                  src: func.icon,
                  mode: "heightFix",
                  onClick: ($event) => $options.funcItemClick(func)
                }, null, 10, ["src", "onClick"]);
              }),
              256
              /* UNKEYED_FRAGMENT */
            )),
            createCommentVNode(' <image class="study_content-funcs-f" src="@/static/study/PhysicalSignCollection.png" mode="heightFix"></image> ')
          ])
        ]),
        createVNode(_component_button, {
          type: "primary",
          class: "study_content-logout",
          onClick: $options.exitClick
        }, {
          default: withCtx(() => [
            createTextVNode("退出")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"])
      ])
    ])
  ]);
}
const study = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/pages/study/study.nvue"]]);
export {
  study as default
};
