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

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/pages/sample/ext-finger-component.js
  var import_vue = __toESM(require_vue());

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/pages/sample/ext-finger-component.js
  var _style_0 = { "finger-print-c": { "": { "flex": 1, "alignItems": "center" } }, "finger-print-tip": { "": { "color": "#FF0000", "marginTop": 20 } }, "finger-print": { "": { "marginTop": 20, "backgroundColor": "#FAEBD7" } }, "button": { "": { "marginTop": 20 } } };
  var _sfc_main = {
    data() {
      return {};
    },
    methods: {
      getFingerprint() {
        this.$refs.fingerprint.getFingerprintImage();
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_finger_print = (0, import_vue.resolveComponent)("finger-print");
    const _component_button = (0, import_vue.resolveComponent)("button");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue.createElementVNode)("view", { class: "finger-print-c" }, [
        (0, import_vue.createElementVNode)("u-text", { class: "finger-print-tip" }, "\u8BF7\u6309\u538B\u6307\u7EB9..."),
        (0, import_vue.createVNode)(
          _component_finger_print,
          {
            ref: "fingerprint",
            style: { "width": "100px", "height": "100px" },
            class: "finger-print"
          },
          null,
          512
          /* NEED_PATCH */
        ),
        (0, import_vue.createVNode)(_component_button, {
          class: "button",
          onClick: $options.getFingerprint
        }, {
          default: (0, import_vue.withCtx)(() => [
            (0, import_vue.createTextVNode)("\u83B7\u53D6\u6307\u7EB9")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"])
      ])
    ]);
  }
  var extFingerComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/pages/sample/ext-finger-component.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/sample/ext-finger-component";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    extFingerComponent.mpType = "page";
    const app = Vue.createPageApp(extFingerComponent, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...extFingerComponent.styles || []]));
    app.mount("#root");
  }
})();
