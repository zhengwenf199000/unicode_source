"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/content-bg.js
  var import_vue = __toESM(require_vue());

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/content-bg.js
  var _imports_0 = "/static/home/HomePage.png";
  var _imports_1 = "/static/imgs/logo.png";
  var _style_0 = { "content-bg__countdown": { "": { "position": "absolute", "right": 150, "color": "#FFFFFF", "fontSize": 15 } } };
  var _sfc_main = {
    name: "content-bg",
    data() {
      return {};
    },
    computed: {
      systemName() {
        return this.$store.getters.systemName;
      },
      leftTime() {
        return this.userInactivePage.leftTime;
      },
      isCountdown() {
        return this.userInactivePage.isCountdown;
      }
    },
    inject: {
      userInactivePage: {
        from: "userInactivePage",
        default() {
          return {};
        }
      }
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
      class: "content-bg",
      renderWhole: true
    }, [
      (0, import_vue.createElementVNode)("view", { class: "content-bg" }, [
        (0, import_vue.createElementVNode)("u-image", {
          class: "content-bg_image",
          src: _imports_0,
          mode: "widthFix"
        }),
        (0, import_vue.createElementVNode)("view", { class: "content-bg_title" }, [
          (0, import_vue.createElementVNode)("view", { class: "content-bg_title__placeholder" }, [
            (0, import_vue.createElementVNode)("u-image", {
              class: "content-bg_title__placeholder___logo",
              src: _imports_1,
              mode: "widthFix"
            })
          ]),
          (0, import_vue.createElementVNode)(
            "u-text",
            {
              class: "content-bg_title__text",
              style: { "font-size": "60px" }
            },
            (0, import_vue.toDisplayString)($options.systemName) + "\u793E\u533A\u77EB\u6B63\u81EA\u52A9\u7EC8\u7AEF",
            1
            /* TEXT */
          ),
          $options.isCountdown ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
            "u-text",
            {
              key: 0,
              class: "content-bg__countdown"
            },
            (0, import_vue.toDisplayString)($options.leftTime) + "\u79D2\u540E\u5173\u95ED",
            1
            /* TEXT */
          )) : (0, import_vue.createCommentVNode)("v-if", true)
        ]),
        (0, import_vue.createElementVNode)("view", { class: "content-bg_placeholder" })
      ]),
      (0, import_vue.renderSlot)(_ctx.$slots, "default")
    ]);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/components/content-bg/content-bg.vue"]]);

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/pages/study/study.js
  var import_vue3 = __toESM(require_vue());

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/uni-app.es.js
  var import_vue2 = __toESM(require_vue());
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/Home.js
  var _imports_02 = "/static/imgs/Home.png";

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/pages/study/study.js
  var _style_02 = { "study_content-title": { ".study_content ": { "color": "#006AEC", "fontSize": 26, "fontWeight": "bold", "marginTop": 20 } }, "study_content-type": { ".study_content ": { "color": "#006AEC", "fontSize": 26, "fontWeight": "bold", "textAlign": "center", "marginTop": 10 } }, "study_content-funcsc": { ".study_content ": { "flex": 1, "justifyContent": "center" } }, "study_content-funcs": { ".study_content ": { "flexDirection": "row", "justifyContent": "center", "height": 160 } }, "study_content-funcs-f": { ".study_content .study_content-funcs ": { "marginLeft": 30 } }, "study_content-funcs-first": { ".study_content .study_content-funcs ": { "marginLeft": 0 } }, "study_content-funcs-p": { ".study_content .study_content-funcs ": { "width": 30 } }, "study_content-logout": { ".study_content ": { "alignSelf": "flex-end", "backgroundColor": "#006AEC", "marginBottom": 15, "color": "#ffffff", "width": 100 } } };
  var _sfc_main2 = {
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
            title: "\u7CFB\u7EDF\u5347\u7EA7\u4E2D...",
            icon: "none"
          });
          return;
        }
        if (!this.idnum) {
          uni.showToast({
            title: "\u672A\u83B7\u53D6\u5230\u60A8\u7684\u8EAB\u4EFD\u4FE1\u606F",
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
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_content_bg = resolveEasycom((0, import_vue3.resolveDynamicComponent)("content-bg"), __easycom_0);
    const _component_button = (0, import_vue3.resolveComponent)("button");
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue3.createElementVNode)("view", { class: "content study_content" }, [
        (0, import_vue3.createVNode)(_component_content_bg),
        (0, import_vue3.createElementVNode)("view", { class: "content-nav" }, [
          (0, import_vue3.createElementVNode)("u-image", {
            class: "content-nav-home",
            src: _imports_02,
            mode: "widthFix",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.homeClick && $options.homeClick(...args))
          })
        ]),
        (0, import_vue3.createElementVNode)("view", { class: "content-c" }, [
          (0, import_vue3.createElementVNode)("u-text", { class: "study_content-title" }, "\u81EA\u52A9\u5B66\u4E60"),
          (0, import_vue3.createElementVNode)("u-text", { class: "study_content-type" }, "\u8BF7\u9009\u62E9\u4E1A\u52A1\u7C7B\u578B"),
          (0, import_vue3.createElementVNode)("view", { class: "study_content-funcsc" }, [
            (0, import_vue3.createElementVNode)("view", { class: "study_content-funcs" }, [
              ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
                import_vue3.Fragment,
                null,
                (0, import_vue3.renderList)($data.funcItems, (func, i) => {
                  return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("u-image", {
                    class: (0, import_vue3.normalizeClass)(["study_content-funcs-f", { "study_content-funcs-first": i === 0 }]),
                    src: func.icon,
                    mode: "heightFix",
                    onClick: ($event) => $options.funcItemClick(func)
                  }, null, 10, ["src", "onClick"]);
                }),
                256
                /* UNKEYED_FRAGMENT */
              )),
              (0, import_vue3.createCommentVNode)(' <image class="study_content-funcs-f" src="@/static/study/PhysicalSignCollection.png" mode="heightFix"></image> ')
            ])
          ]),
          (0, import_vue3.createVNode)(_component_button, {
            type: "primary",
            class: "study_content-logout",
            onClick: $options.exitClick
          }, {
            default: (0, import_vue3.withCtx)(() => [
              (0, import_vue3.createTextVNode)("\u9000\u51FA")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"])
        ])
      ])
    ]);
  }
  var study = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/pages/study/study.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/study/study";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    study.mpType = "page";
    const app = Vue.createPageApp(study, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...study.styles || []]));
    app.mount("#root");
  }
})();
