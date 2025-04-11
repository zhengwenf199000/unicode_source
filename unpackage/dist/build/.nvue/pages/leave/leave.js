import { _ as __easycom_0 } from "../../content-bg.js";
import { resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, Fragment, renderList, normalizeClass, withCtx, createTextVNode } from "vue";
import { r as resolveEasycom } from "../../uni-app.es.js";
import { u as userInactiveMixin } from "../../userInactiveMixin.js";
import { _ as _imports_0 } from "../../Home.js";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
const _style_0 = { "leave_content-title": { ".leave_content ": { "color": "#006AEC", "fontSize": 26, "fontWeight": "bold", "marginTop": 20 } }, "leave_content-type": { ".leave_content ": { "color": "#006AEC", "fontSize": 26, "fontWeight": "bold", "textAlign": "center", "marginTop": 10 } }, "leave_content-funcsc": { ".leave_content ": { "flex": 1, "justifyContent": "center" } }, "leave_content-funcs": { ".leave_content ": { "flexDirection": "row", "justifyContent": "center", "height": 160 } }, "leave_content-funcs-f": { ".leave_content .leave_content-funcs ": { "marginLeft": 30 } }, "leave_content-funcs-first": { ".leave_content .leave_content-funcs ": { "marginLeft": 0 } }, "leave_content-funcs-p": { ".leave_content .leave_content-funcs ": { "width": 30 } }, "leave_content-logout": { ".leave_content ": { "alignSelf": "flex-end", "backgroundColor": "#006AEC", "marginBottom": 15, "color": "#ffffff", "width": 100 } } };
const _sfc_main = {
  mixins: [userInactiveMixin],
  data() {
    return {
      funcItems: [
        {
          path: "/pages/leave/list",
          icon: "../../static/leave/GoingOut.png"
        },
        {
          path: "/pages/leave/destroy",
          icon: "../../static/leave/ResumptionFromLeave.png"
        }
      ]
    };
  },
  onLoad(options) {
    this.idnum = options.idnum;
  },
  methods: {
    funcClick(func) {
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
    homeClick() {
      uni.reLaunch({
        url: "/pages/home/home"
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
    createElementVNode("view", {
      class: "content leave_content",
      onClick: _cache[1] || (_cache[1] = (...args) => _ctx.capture && _ctx.capture(...args))
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
        createElementVNode("u-text", { class: "leave_content-title" }, "请销假"),
        createElementVNode("u-text", { class: "leave_content-type" }, "请选择业务类型"),
        createElementVNode("view", { class: "leave_content-funcsc" }, [
          createElementVNode("view", { class: "leave_content-funcs" }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($data.funcItems, (func, i) => {
              return openBlock(), createElementBlock("u-image", {
                class: normalizeClass(["leave_content-funcs-f", { "leave_content-funcs-first": i === 0 }]),
                key: i,
                src: func.icon,
                mode: "heightFix",
                onClick: ($event) => $options.funcClick(func)
              }, null, 10, ["src", "onClick"]);
            }), 128))
          ])
        ]),
        createVNode(_component_button, {
          type: "primary",
          class: "leave_content-logout",
          onClick: $options.exitClick
        }, {
          default: withCtx(() => [
            createTextVNode("退出")
          ]),
          _: 1
        }, 8, ["onClick"])
      ])
    ])
  ]);
}
const leave = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  leave as default
};
