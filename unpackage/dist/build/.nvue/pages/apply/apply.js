import { _ as __easycom_0 } from "../../content-bg.js";
import { resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, Fragment, renderList, normalizeClass, withCtx, createTextVNode } from "vue";
import { r as resolveEasycom } from "../../uni-app.es.js";
import { u as userInactiveMixin } from "../../userInactiveMixin.js";
import { _ as _imports_0 } from "../../Home.js";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
const _style_0 = { "apply_content-title": { ".apply_content ": { "color": "#006AEC", "fontSize": 26, "fontWeight": "bold", "marginTop": 20 } }, "apply_content-type": { ".apply_content ": { "color": "#006AEC", "fontSize": 26, "fontWeight": "bold", "textAlign": "center", "marginTop": 10 } }, "apply_content-funcsc": { ".apply_content ": { "flex": 1, "justifyContent": "center" } }, "apply_content-funcs": { ".apply_content ": { "flexDirection": "row", "justifyContent": "center", "height": 160 } }, "apply_content-funcs-f": { ".apply_content .apply_content-funcs ": { "marginLeft": 30 } }, "apply_content-funcs-first": { ".apply_content .apply_content-funcs ": { "marginLeft": 0 } }, "apply_content-funcs-p": { ".apply_content .apply_content-funcs ": { "width": 30 } }, "apply_content-logout": { ".apply_content ": { "alignSelf": "flex-end", "backgroundColor": "#006AEC", "marginBottom": 15, "color": "#ffffff", "width": 100 } } };
const _sfc_main = {
  mixins: [userInactiveMixin],
  data() {
    return {
      funcItems: [
        {
          path: "/pages/apply/change",
          icon: "../../static/apply/PlaceOfExecution.png"
        },
        {
          path: "",
          icon: "../../static/apply/DecorrectAtExpiration.png"
        },
        {
          path: "/pages/apply/files",
          icon: "../../static/apply/Sign.jpg"
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
    funcClick(func) {
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
    createElementVNode("view", {
      class: "content apply_content",
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
        createElementVNode("u-text", { class: "apply_content-title" }, "自助申请、自助打印"),
        createElementVNode("u-text", { class: "apply_content-type" }, "请选择业务类型"),
        createElementVNode("view", { class: "apply_content-funcsc" }, [
          createElementVNode("view", { class: "apply_content-funcs" }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($data.funcItems, (func, i) => {
              return openBlock(), createElementBlock("u-image", {
                class: normalizeClass(["apply_content-funcs-f", { "apply_content-funcs-first": i === 0 }]),
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
          class: "apply_content-logout",
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
const apply = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  apply as default
};
