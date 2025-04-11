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
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

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

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/pages/leave/leave.js
  var import_vue3 = __toESM(require_vue());

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/uni-app.es.js
  var import_vue2 = __toESM(require_vue());
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/userInactiveMixin.js
  var UserInactiveMaxSeconds = 120;
  var userInactiveMixin = {
    data() {
      return {
        leftTime: UserInactiveMaxSeconds,
        isCountdown: false,
        reLaunchUrl: "",
        isPageShow: true,
        pagesLength: 1
      };
    },
    provide() {
      return {
        userInactivePage: this
      };
    },
    onShow() {
      return __async(this, null, function* () {
        this.isPageShow = true;
        formatAppLog("log", "at mixins/userInactiveMixin.ts:19", "on show!");
        yield uni.$u.sleep(500);
        this.initAutoClose();
      });
    },
    onHide() {
      this.isPageShow = false;
      this.clearAutoClose();
    },
    onUnload() {
      this.isPageShow = false;
      this.clearAutoClose();
    },
    methods: {
      capture(e) {
        if (!this.isPageShow)
          return;
        this.resetAutoClose();
      },
      startCountdown() {
        this.stopCountdown();
        this.isCountdown = true;
        this.leftTime = UserInactiveMaxSeconds;
        this.countdownInterval = setInterval(() => {
          this.leftTime--;
          if (this.leftTime === 0) {
            this.stopCountdown();
            uni.navigateBack({
              delta: this.pagesLength
            });
          }
        }, 1e3);
      },
      stopCountdown() {
        this.isCountdown = false;
        this.countdownInterval && clearInterval(this.countdownInterval);
      },
      initAutoClose() {
        const pages = getCurrentPages();
        this.pagesLength = pages.length;
        if (this.pagesLength > 1) {
          this.reLaunchUrl = pages[0].$page.path;
          this.resetAutoClose();
        }
      },
      resetAutoClose() {
        this.stopCountdown();
        if (this.userFuncTask) {
          this.userFuncTask.listener();
          return;
        }
        this.userFuncTask = uni.$u.initTimeUserFunc({
          ms: 3e3,
          cb: () => {
            this.startCountdown();
          }
        });
      },
      clearAutoClose() {
        if (this.userFuncTask) {
          this.userFuncTask.release();
        }
        this.stopCountdown();
      }
    }
  };

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/Home.js
  var _imports_02 = "/static/imgs/Home.png";

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/pages/leave/leave.js
  var _style_02 = { "leave_content-title": { ".leave_content ": { "color": "#006AEC", "fontSize": 26, "fontWeight": "bold", "marginTop": 20 } }, "leave_content-type": { ".leave_content ": { "color": "#006AEC", "fontSize": 26, "fontWeight": "bold", "textAlign": "center", "marginTop": 10 } }, "leave_content-funcsc": { ".leave_content ": { "flex": 1, "justifyContent": "center" } }, "leave_content-funcs": { ".leave_content ": { "flexDirection": "row", "justifyContent": "center", "height": 160 } }, "leave_content-funcs-f": { ".leave_content .leave_content-funcs ": { "marginLeft": 30 } }, "leave_content-funcs-first": { ".leave_content .leave_content-funcs ": { "marginLeft": 0 } }, "leave_content-funcs-p": { ".leave_content .leave_content-funcs ": { "width": 30 } }, "leave_content-logout": { ".leave_content ": { "alignSelf": "flex-end", "backgroundColor": "#006AEC", "marginBottom": 15, "color": "#ffffff", "width": 100 } } };
  var _sfc_main2 = {
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
      (0, import_vue3.createElementVNode)("view", {
        class: "content leave_content",
        onClick: _cache[1] || (_cache[1] = (...args) => _ctx.capture && _ctx.capture(...args))
      }, [
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
          (0, import_vue3.createElementVNode)("u-text", { class: "leave_content-title" }, "\u8BF7\u9500\u5047"),
          (0, import_vue3.createElementVNode)("u-text", { class: "leave_content-type" }, "\u8BF7\u9009\u62E9\u4E1A\u52A1\u7C7B\u578B"),
          (0, import_vue3.createElementVNode)("view", { class: "leave_content-funcsc" }, [
            (0, import_vue3.createElementVNode)("view", { class: "leave_content-funcs" }, [
              ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
                import_vue3.Fragment,
                null,
                (0, import_vue3.renderList)($data.funcItems, (func, i) => {
                  return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("u-image", {
                    class: (0, import_vue3.normalizeClass)(["leave_content-funcs-f", { "leave_content-funcs-first": i === 0 }]),
                    key: i,
                    src: func.icon,
                    mode: "heightFix",
                    onClick: ($event) => $options.funcClick(func)
                  }, null, 10, ["src", "onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              )),
              (0, import_vue3.createCommentVNode)(' <image class="leave_content-funcs-f" src="@/static/leave/PhysicalSignCollection.png" mode="heightFix"></image> ')
            ])
          ]),
          (0, import_vue3.createVNode)(_component_button, {
            type: "primary",
            class: "leave_content-logout",
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
  var leave = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/pages/leave/leave.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/leave/leave";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    leave.mpType = "page";
    const app = Vue.createPageApp(leave, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...leave.styles || []]));
    app.mount("#root");
  }
})();
