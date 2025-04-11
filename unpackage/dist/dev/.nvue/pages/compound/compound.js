import { _ as __easycom_0 } from "../../content-bg.js";
import { resolveComponent, resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, Fragment, renderList, normalizeClass, createCommentVNode, createTextVNode } from "vue";
import { r as resolveEasycom } from "../../uni-app.es.js";
import { u as userInactiveMixin } from "../../userInactiveMixin.js";
import { _ as _imports_0 } from "../../Home.js";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
const _style_0 = { "compound_content-title": { ".compound_content ": { "color": "#006AEC", "fontSize": 26, "fontWeight": "bold", "marginTop": 20 } }, "compound_content-type": { ".compound_content ": { "color": "#006AEC", "fontSize": 26, "fontWeight": "bold", "textAlign": "center", "marginTop": 10 } }, "compound_content-funcsc": { ".compound_content ": { "flex": 1, "justifyContent": "center" } }, "compound_content-funcs": { ".compound_content ": { "flexDirection": "row", "justifyContent": "center", "height": 160 } }, "compound_content-funcs-f": { ".compound_content .compound_content-funcs ": { "marginLeft": 30 } }, "compound_content-funcs-first": { ".compound_content .compound_content-funcs ": { "marginLeft": 0 } }, "compound_content-funcs-p": { ".compound_content .compound_content-funcs ": { "width": 30 } }, "compound_content-logout": { ".compound_content ": { "alignSelf": "flex-end", "backgroundColor": "#006AEC", "marginBottom": 15, "color": "#ffffff", "width": 100 } } };
const _sfc_main = {
  mixins: [userInactiveMixin],
  data() {
    return {
      funcItems: [
        {
          path: "/pages/compound/daily",
          icon: "../../static/compound/DailyCheck-in.png"
        },
        {
          path: "/pages/compound/education?type=0",
          icon: "../../static/compound/IndividualEducation.png"
          // needAuth: true
        },
        {
          path: "/pages/compound/education?type=1",
          icon: "../../static/compound/CollectiveEducation.png"
          // needAuth: true
        },
        {
          path: "/pages/compound/benefit",
          icon: "../../static/compound/PublicBenefitActivities.png"
          // needAuth: true
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
    exitClick() {
      uni.navigateBack();
    },
    funcClick(func) {
      const authInfo = this.$store.getters.compoundAuthInfo;
      if (authInfo || !func.needAuth) {
        uni.navigateTo({
          url: func.path,
          animationType: "none"
        });
      } else {
        uni.showToast({
          title: "请先完成日常报到",
          icon: "none"
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_button = resolveComponent("button");
  const _component_content_bg = resolveEasycom(resolveDynamicComponent("content-bg"), __easycom_0);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", {
      class: "content compound_content",
      onClick: _cache[1] || (_cache[1] = (...args) => _ctx.capture && _ctx.capture(...args))
    }, [
      createVNode(_component_content_bg, null, {
        default: withCtx(() => [
          createElementVNode("view", { class: "content-nav" }, [
            createElementVNode("u-image", {
              class: "content-nav-home",
              src: _imports_0,
              mode: "widthFix",
              onClick: _cache[0] || (_cache[0] = (...args) => $options.homeClick && $options.homeClick(...args))
            })
          ]),
          createElementVNode("view", { class: "content-c" }, [
            createElementVNode("u-text", { class: "compound_content-title" }, "综合报到"),
            createElementVNode("u-text", { class: "compound_content-type" }, "请选择业务类型"),
            createElementVNode("view", { class: "compound_content-funcsc" }, [
              createElementVNode("view", { class: "compound_content-funcs" }, [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($data.funcItems, (func, i) => {
                    return openBlock(), createElementBlock("u-image", {
                      class: normalizeClass(["compound_content-funcs-f", { "compound_content-funcs-first": i === 0 }]),
                      key: i,
                      src: func.icon,
                      mode: "heightFix",
                      onClick: ($event) => $options.funcClick(func)
                    }, null, 10, ["src", "onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )),
                createCommentVNode(' <image class="compound_content-funcs-f" src="@/static/compound/PhysicalSignCollection.png" mode="heightFix"></image> ')
              ])
            ]),
            createVNode(_component_button, {
              type: "primary",
              class: "compound_content-logout",
              onClick: $options.exitClick
            }, {
              default: withCtx(() => [
                createTextVNode("退出")
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onClick"])
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ])
  ]);
}
const compound = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/pages/compound/compound.nvue"]]);
export {
  compound as default
};
