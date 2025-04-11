import { _ as __easycom_0 } from "../../content-bg.js";
import { resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, Fragment, renderList, normalizeClass, createCommentVNode, withCtx, createTextVNode } from "vue";
import { r as resolveEasycom } from "../../uni-app.es.js";
import { u as userInactiveMixin } from "../../userInactiveMixin.js";
import { _ as _imports_0 } from "../../Home.js";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
const _style_0 = { "register_content-title": { ".register_content ": { "color": "#006AEC", "fontSize": 26, "fontWeight": "bold", "marginTop": 20 } }, "register_content-type": { ".register_content ": { "color": "#006AEC", "fontSize": 26, "fontWeight": "bold", "textAlign": "center", "marginTop": 10 } }, "register_content-funcsc": { ".register_content ": { "flex": 1, "justifyContent": "center" } }, "register_content-funcs": { ".register_content ": { "flexDirection": "row", "justifyContent": "center", "height": 160 } }, "register_content-funcs-f": { ".register_content .register_content-funcs ": { "marginLeft": 30 } }, "register_content-funcs-first": { ".register_content .register_content-funcs ": { "marginLeft": 0 } }, "register_content-funcs-p": { ".register_content .register_content-funcs ": { "width": 30 } }, "register_content-logout": { ".register_content ": { "alignSelf": "flex-end", "backgroundColor": "#006AEC", "marginBottom": 15, "color": "#ffffff", "width": 100 } } };
const _sfc_main = {
  mixins: [userInactiveMixin],
  data() {
    return {
      funcItems: [
        {
          path: "/pages/register/input",
          icon: "../../static/register/EnrollmentRegistration.png"
        },
        {
          path: "/pages/register/gather",
          icon: "../../static/register/PhysicalSignCollection.png"
        }
      ]
    };
  },
  methods: {
    homeClick() {
      uni.reLaunch({
        url: "/pages/home/home"
      });
    },
    funcClick(func) {
      uni.navigateTo({
        url: func.path,
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
      class: "content register_content",
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
        createElementVNode("u-text", { class: "register_content-title" }, "自助登记"),
        createElementVNode("u-text", { class: "register_content-type" }, "请选择业务类型"),
        createElementVNode("view", { class: "register_content-funcsc" }, [
          createElementVNode("view", { class: "register_content-funcs" }, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($data.funcItems, (func, i) => {
                return openBlock(), createElementBlock("u-image", {
                  class: normalizeClass(["register_content-funcs-f", { "register_content-funcs-first": i === 0 }]),
                  key: i,
                  src: func.icon,
                  mode: "heightFix",
                  onClick: ($event) => $options.funcClick(func)
                }, null, 10, ["src", "onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            )),
            createCommentVNode(' <image class="register_content-funcs-f" src="@/static/register/PhysicalSignCollection.png" mode="heightFix"></image> ')
          ])
        ]),
        createVNode(_component_button, {
          type: "primary",
          class: "register_content-logout",
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
const register = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/pages/register/register.nvue"]]);
export {
  register as default
};
