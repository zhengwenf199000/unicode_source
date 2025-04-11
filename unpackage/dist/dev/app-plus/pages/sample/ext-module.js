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

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/uni-app.es.js
  var import_vue = __toESM(require_vue());
  function requireNativePlugin(name) {
    return weex.requireModule(name);
  }
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/pages/sample/ext-module.js
  var import_vue2 = __toESM(require_vue());

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/pages/sample/ext-module.js
  var _style_0 = { "alive_detect": { "": { "marginTop": 20, "width": "750rpx", "height": "375rpx", "backgroundColor": "#ff6600" } } };
  var testModule = requireNativePlugin("TestModule");
  var modal = requireNativePlugin("modal");
  var _sfc_main = {
    data() {
      return {
        detecting: false,
        isAlive: false,
        pitchAngle: 0,
        yawAngle: 0,
        rollAngle: 0
      };
    },
    onLoad() {
      plus.globalEvent.addEventListener("TestEvent", function(e) {
        modal.toast({
          message: "TestEvent\u6536\u5230\uFF1A" + e.msg,
          duration: 1.5
        });
      });
    },
    methods: {
      detectSuccessFunc() {
        uni.showToast({
          title: "\u6B63\u5728\u68C0\u6D4B..."
        });
        formatAppLog("log", "at pages/sample/ext-module.nvue:43", "detectSuccess");
        this.detecting = false;
        this.isAlive = true;
        uni.hideLoading();
      },
      detectFailure(e) {
        formatAppLog("log", "at pages/sample/ext-module.nvue:49", "detectFailure!", e);
        this.detecting = false;
        this.isAlive = false;
        uni.hideLoading();
      },
      detectingFunc() {
        this.detecting = true;
      },
      recognizing() {
        formatAppLog("log", "at pages/sample/ext-module.nvue:58", "\u6B63\u5728\u68C0\u6D4B...");
        uni.showLoading({
          title: "\u6B63\u5728\u68C0\u6D4B..."
        });
      },
      angleChange(e) {
        const {
          pitchAngle,
          yawAngle,
          rollAngle
        } = e.detail;
        this.pitchAngle = pitchAngle;
        this.yawAngle = yawAngle;
        this.rollAngle = rollAngle;
      },
      testAsyncFunc() {
        testModule.testAsyncFunc(
          {
            "name": "unimp",
            "age": 1
          },
          (ret) => {
            modal.toast({
              message: ret,
              duration: 1.5
            });
          }
        );
      },
      testSyncFunc() {
        var ret = testModule.testSyncFunc({
          "name": "unimp",
          "age": 1
        });
        modal.toast({
          message: ret,
          duration: 1.5
        });
      },
      gotoNativePage() {
        testModule.gotoNativePage();
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_alive_detect = (0, import_vue2.resolveComponent)("alive-detect");
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue2.createElementVNode)("view", { style: { "display": "flex", "align-items": "center" } }, [
        $data.detecting ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("u-text", {
          key: 0,
          style: { "color": "#666", "margin": "10px" }
        }, "\u6B63\u5728\u68C0\u6D4B\u4E2D\u3002\u3002\u3002")) : (0, import_vue2.createCommentVNode)("v-if", true),
        $data.isAlive ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("u-text", {
          key: 1,
          style: { "color": "green" }
        }, "\u786E\u8BA4\u662F\u6D3B\u4F53")) : ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("u-text", {
          key: 2,
          style: { "color": "red" }
        }, "\u4E0D\u662F\u6D3B\u4F53\uFF0C\u6301\u7EED\u68C0\u6D4B\u4E2D\u3002\u3002\u3002")),
        (0, import_vue2.createCommentVNode)(' <alive-detect style="width: 250px; height: 250px; margin-top: 20px; background-color: papayawhip;" cameratype="black" @detecting="detecting" @detectFailure="detectFailure" @detectSuccess="detectSuccess" @angleChange="angleChange"></alive-detect> '),
        (0, import_vue2.createVNode)(_component_alive_detect, {
          class: "alive_detect",
          cameratype: "black",
          onRecognizing: $options.recognizing,
          onDetecting: $options.detectingFunc,
          onDetectFailure: $options.detectFailure,
          onDetectSuccess: $options.detectSuccessFunc,
          onAngleChange: $options.angleChange
        }, null, 8, ["onRecognizing", "onDetecting", "onDetectFailure", "onDetectSuccess", "onAngleChange"]),
        (0, import_vue2.createElementVNode)(
          "u-text",
          { style: { "color": "#333", "margin": "20px", "font-weight": "bolder" } },
          "\u89D2\u5EA6\uFF1A\u4EF0\u89D2" + (0, import_vue2.toDisplayString)($data.pitchAngle) + " \u5DE6\u53F3\u89D2\u5EA6" + (0, import_vue2.toDisplayString)($data.yawAngle) + " \u6446\u52A8\u89D2\u5EA6" + (0, import_vue2.toDisplayString)($data.rollAngle),
          1
          /* TEXT */
        ),
        (0, import_vue2.createCommentVNode)(' <button type="primary" @click="testAsyncFunc">testAsyncFunc</button>\n		<button type="primary" @click="testSyncFunc">testSyncFunc</button>\n		<button type="primary" @click="gotoNativePage">\u8DF3\u8F6C\u539F\u751FActivity</button> ')
      ])
    ]);
  }
  var extModule = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/pages/sample/ext-module.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/sample/ext-module";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    extModule.mpType = "page";
    const app = Vue.createPageApp(extModule, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...extModule.styles || []]));
    app.mount("#root");
  }
})();
