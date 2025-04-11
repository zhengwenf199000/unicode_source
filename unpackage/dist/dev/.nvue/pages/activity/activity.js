import { _ as __easycom_0 } from "../../content-bg.js";
import { resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, Fragment, renderList, normalizeClass, createCommentVNode, withCtx, createTextVNode } from "vue";
import { r as resolveEasycom } from "../../uni-app.es.js";
import { _ as _imports_0 } from "../../Home.js";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
const _style_0 = { "activity_content-title": { ".activity_content ": { "color": "#006AEC", "fontSize": 26, "fontWeight": "bold", "marginTop": 20 } }, "activity_content-type": { ".activity_content ": { "color": "#006AEC", "fontSize": 26, "fontWeight": "bold", "textAlign": "center", "marginTop": 10 } }, "activity_content-funcsc": { ".activity_content ": { "flex": 1, "justifyContent": "center" } }, "activity_content-funcs": { ".activity_content ": { "flexDirection": "row", "justifyContent": "center", "height": 160 } }, "activity_content-funcs-f": { ".activity_content .activity_content-funcs ": { "marginLeft": 30 } }, "activity_content-funcs-first": { ".activity_content .activity_content-funcs ": { "marginLeft": 0 } }, "activity_content-funcs-p": { ".activity_content .activity_content-funcs ": { "width": 30 } }, "activity_content-logout": { ".activity_content ": { "alignSelf": "flex-end", "backgroundColor": "#006AEC", "marginBottom": 15, "color": "#ffffff", "width": 100 } } };
const _sfc_main = {
  data() {
    return {
      funcItems: [
        {
          path: "",
          icon: "../../static/activity/SignIn.png"
        },
        {
          path: "",
          icon: "../../static/activity/SignOut.png"
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
    createElementVNode("view", { class: "content activity_content" }, [
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
        createElementVNode("u-text", { class: "activity_content-title" }, "帮扶活动"),
        createElementVNode("u-text", { class: "activity_content-type" }, "请选择业务类型"),
        createElementVNode("view", { class: "activity_content-funcsc" }, [
          createElementVNode("view", { class: "activity_content-funcs" }, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($data.funcItems, (func, i) => {
                return openBlock(), createElementBlock("u-image", {
                  class: normalizeClass(["activity_content-funcs-f", { "activity_content-funcs-first": i === 0 }]),
                  src: func.icon,
                  mode: "heightFix",
                  onClick: ($event) => $options.funcItemClick(func)
                }, null, 10, ["src", "onClick"]);
              }),
              256
              /* UNKEYED_FRAGMENT */
            )),
            createCommentVNode(' <image class="activity_content-funcs-f" src="@/static/activity/PhysicalSignCollection.png" mode="heightFix"></image> ')
          ])
        ]),
        createVNode(_component_button, {
          type: "primary",
          class: "activity_content-logout",
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
const activity = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/pages/activity/activity.nvue"]]);
export {
  activity as default
};
