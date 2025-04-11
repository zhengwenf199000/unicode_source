import { _ as __easycom_0 } from "../../content-bg.js";
import { resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, Fragment, renderList, normalizeClass, withCtx, createTextVNode } from "vue";
import { r as resolveEasycom } from "../../uni-app.es.js";
import { u as userInactiveMixin } from "../../userInactiveMixin.js";
import { _ as _imports_0 } from "../../Home.js";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
const _style_0 = { "query_content-title": { ".query_content ": { "color": "#006AEC", "fontSize": 26, "fontWeight": "bold", "marginTop": 20 } }, "query_content-type": { ".query_content ": { "color": "#006AEC", "fontSize": 26, "fontWeight": "bold", "textAlign": "center", "marginTop": 10 } }, "query_content-funcs": { ".query_content ": { "flex": 1, "flexDirection": "row", "alignItems": "center" } }, "query_content-funcs-fs": { ".query_content .query_content-funcs ": { "flex": 1 } }, "query_content-funcs-first": { ".query_content .query_content-funcs ": { "flex": 1.06 } }, "query_content-funcs-p": { ".query_content .query_content-funcs ": { "width": 30 } }, "query_content-logout": { ".query_content ": { "alignSelf": "flex-end", "backgroundColor": "#006AEC", "marginBottom": 15, "color": "#ffffff", "width": 100 } } };
const _sfc_main = {
  mixins: [userInactiveMixin],
  data() {
    return {
      funcItems: [
        [{
          path: "/pages/query/file",
          icon: "../../static/query/PersonalFiles.png"
        }],
        [
          {
            path: "/pages/query/common?type=sign",
            icon: "../../static/query/SignInRecord.png"
          },
          {
            path: "/pages/query/common?type=leave",
            icon: "../../static/query/OutOfOfficeRecords.png"
          }
        ],
        [
          {
            path: "/pages/query/common?type=warning",
            icon: "../../static/query/WarningRecord.png"
          },
          {
            path: "/pages/query/common?type=study",
            icon: "../../static/query/LearningRecord.png"
          }
        ],
        [
          {
            path: "/pages/query/common?type=advise",
            icon: "../../static/query/AdmonishmentRecord.png"
          },
          {
            path: "/pages/query/common?type=evaluating",
            icon: "../../static/query/PrintEvaluationReport.png"
          }
        ]
      ]
    };
  },
  onLoad(options) {
    this.idnum = options.idnum;
  },
  onShow() {
  },
  methods: {
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
        url: func.path + (func.path.search(/\?/) > -1 ? "&" : "?") + "idnum=" + this.idnum,
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
      class: "content query_content",
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
        createElementVNode("u-text", { class: "query_content-title" }, "信息查询"),
        createElementVNode("u-text", { class: "query_content-type" }, "请选择业务类型"),
        createElementVNode("view", { class: "query_content-funcs" }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.funcItems, (item, i) => {
            return openBlock(), createElementBlock("view", {
              class: normalizeClass(["query_content-funcs-fs", { "query_content-funcs-first": i === 0 }]),
              key: i
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(item, (fun, j) => {
                return openBlock(), createElementBlock("u-image", {
                  class: "query_content-funcs-f",
                  key: fun.path,
                  src: fun.icon,
                  mode: "widthFix",
                  onClick: ($event) => $options.funcItemClick(fun)
                }, null, 8, ["src", "onClick"]);
              }), 128))
            ], 2);
          }), 128))
        ]),
        createVNode(_component_button, {
          type: "primary",
          class: "query_content-logout",
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
const query = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  query as default
};
