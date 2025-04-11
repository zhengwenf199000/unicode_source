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
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod2) => function __require2() {
    return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
  };
  var __copyProps = (to2, from2, except, desc) => {
    if (from2 && typeof from2 === "object" || typeof from2 === "function") {
      for (let key of __getOwnPropNames(from2))
        if (!__hasOwnProp.call(to2, key) && key !== except)
          __defProp(to2, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
    }
    return to2;
  };
  var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
    mod2
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
    "vue-ns:vue"(exports, module2) {
      module2.exports = Vue;
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
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/content-bg.js
  var import_vue2 = __toESM(require_vue());

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
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
      class: "content-bg",
      renderWhole: true
    }, [
      (0, import_vue2.createElementVNode)("view", { class: "content-bg" }, [
        (0, import_vue2.createElementVNode)("u-image", {
          class: "content-bg_image",
          src: _imports_0,
          mode: "widthFix"
        }),
        (0, import_vue2.createElementVNode)("view", { class: "content-bg_title" }, [
          (0, import_vue2.createElementVNode)("view", { class: "content-bg_title__placeholder" }, [
            (0, import_vue2.createElementVNode)("u-image", {
              class: "content-bg_title__placeholder___logo",
              src: _imports_1,
              mode: "widthFix"
            })
          ]),
          (0, import_vue2.createElementVNode)(
            "u-text",
            {
              class: "content-bg_title__text",
              style: { "font-size": "60px" }
            },
            (0, import_vue2.toDisplayString)($options.systemName) + "\u793E\u533A\u77EB\u6B63\u81EA\u52A9\u7EC8\u7AEF",
            1
            /* TEXT */
          ),
          $options.isCountdown ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
            "u-text",
            {
              key: 0,
              class: "content-bg__countdown"
            },
            (0, import_vue2.toDisplayString)($options.leftTime) + "\u79D2\u540E\u5173\u95ED",
            1
            /* TEXT */
          )) : (0, import_vue2.createCommentVNode)("v-if", true)
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "content-bg_placeholder" })
      ]),
      (0, import_vue2.renderSlot)(_ctx.$slots, "default")
    ]);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/components/content-bg/content-bg.vue"]]);

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/pages/auth/auth.js
  var import_vue8 = __toESM(require_vue());

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/uni-icons.js
  var import_vue3 = __toESM(require_vue());
  var icons = {
    "id": "2852637",
    "name": "uniui\u56FE\u6807\u5E93",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  var iconUrl = "/assets/uniicons.89ed7d6d.ttf";
  var _style_02 = { "uni-icons": { "": { "fontFamily": "uniicons", "textDecoration": "none", "textAlign": "center" } } };
  var getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  var domModule = weex.requireModule("dom");
  domModule.addRule("fontFace", {
    "fontFamily": "uniicons",
    "src": "url('" + iconUrl + "')"
  });
  var _sfc_main2 = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code2 = this.icons.find((v) => v.font_class === this.type);
        if (code2) {
          return unescape(`%u${code2.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
      "u-text",
      {
        style: (0, import_vue3.normalizeStyle)({ color: $props.color, "font-size": $options.iconSize }),
        class: "uni-icons",
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      (0, import_vue3.toDisplayString)($options.unicode),
      5
      /* TEXT, STYLE */
    );
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/uni-forms.js
  var import_vue4 = __toESM(require_vue());
  var _style_0$1 = { "uni-easyinput": { "": { "flex": 1, "position": "relative", "textAlign": "left", "color": "#333333", "fontSize": 14 } }, "uni-easyinput__content": { "": { "flex": 1, "flexDirection": "row", "alignItems": "center", "borderColor": "#ffffff", "transitionProperty": "borderColor", "transitionDuration": 300 } }, "uni-easyinput__content-input": { "": { "position": "relative", "overflow": "hidden", "flex": 1, "lineHeight": 1, "fontSize": 14, "height": 35 } }, "uni-easyinput__placeholder-class": { "": { "color": "#999999", "fontSize": 12 }, ".is-input-error-border ": { "color": "#f29e99" }, ".is-disabled ": { "color": "#d5d5d5", "fontSize": 12 } }, "is-textarea": { "": { "alignItems": "flex-start" } }, "is-textarea-icon": { "": { "marginTop": 5 } }, "uni-easyinput__content-textarea": { "": { "position": "relative", "overflow": "hidden", "flex": 1, "lineHeight": 1.5, "fontSize": 14, "marginTop": 6, "marginRight": 6, "marginBottom": 6, "marginLeft": 0, "height": 80, "minHeight": "80px" } }, "input-padding": { "": { "paddingLeft": 10 } }, "content-clear-icon": { "": { "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 5 } }, "label-icon": { "": { "marginRight": 5, "marginTop": -1 } }, "is-input-border": { "": { "flexDirection": "row", "alignItems": "center", "borderWidth": 1, "borderStyle": "solid", "borderColor": "#dcdfe6", "borderRadius": 4 } }, "uni-error-message": { "": { "position": "absolute", "bottom": -17, "left": 0, "lineHeight": 12, "color": "#e43d33", "fontSize": 12, "textAlign": "left" } }, "uni-error-msg--boeder": { "": { "position": "relative", "bottom": 0, "lineHeight": 22 } }, "is-input-error-border": { "": { "borderColor": "#e43d33" } }, "uni-easyinput--border": { "": { "marginBottom": 0, "paddingTop": 10, "paddingRight": 15, "paddingBottom": 10, "paddingLeft": 15, "borderTopWidth": 1, "borderTopStyle": "solid", "borderTopColor": "#eeeeee" } }, "uni-easyinput-error": { "": { "paddingBottom": 0 } }, "is-first-border": { "": { "borderWidth": 0 } }, "is-disabled": { "": { "backgroundColor": "#f7f6f6", "color": "#d5d5d5" } }, "@TRANSITION": { "uni-easyinput__content": { "property": "borderColor", "duration": 300 } } };
  function obj2strClass(obj) {
    let classess = "";
    for (let key in obj) {
      const val = obj[key];
      if (val) {
        classess += `${key} `;
      }
    }
    return classess;
  }
  function obj2strStyle(obj) {
    let style = "";
    for (let key in obj) {
      const val = obj[key];
      style += `${key}:${val};`;
    }
    return style;
  }
  var _sfc_main$1 = {
    name: "uni-easyinput",
    emits: ["click", "iconClick", "update:modelValue", "input", "focus", "blur", "confirm", "clear", "eyes", "change"],
    model: {
      prop: "modelValue",
      event: "update:modelValue"
    },
    options: {
      virtualHost: true
    },
    inject: {
      form: {
        from: "uniForm",
        default: null
      },
      formItem: {
        from: "uniFormItem",
        default: null
      }
    },
    props: {
      name: String,
      value: [Number, String],
      modelValue: [Number, String],
      type: {
        type: String,
        default: "text"
      },
      clearable: {
        type: Boolean,
        default: true
      },
      autoHeight: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: " "
      },
      placeholderStyle: String,
      focus: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: [Number, String],
        default: 140
      },
      confirmType: {
        type: String,
        default: "done"
      },
      clearSize: {
        type: [Number, String],
        default: 24
      },
      inputBorder: {
        type: Boolean,
        default: true
      },
      prefixIcon: {
        type: String,
        default: ""
      },
      suffixIcon: {
        type: String,
        default: ""
      },
      trim: {
        type: [Boolean, String],
        default: true
      },
      passwordIcon: {
        type: Boolean,
        default: true
      },
      primaryColor: {
        type: String,
        default: "#2979ff"
      },
      styles: {
        type: Object,
        default() {
          return {
            color: "#333",
            backgroundColor: "#fff",
            disableColor: "#F7F6F6",
            borderColor: "#e5e5e5"
          };
        }
      },
      errorMessage: {
        type: [String, Boolean],
        default: ""
      }
    },
    data() {
      return {
        focused: false,
        val: "",
        showMsg: "",
        border: false,
        isFirstBorder: false,
        showClearIcon: false,
        showPassword: false,
        focusShow: false,
        localMsg: "",
        isEnter: false
        // 用于判断当前是否是使用回车操作
      };
    },
    computed: {
      // 输入框内是否有值
      isVal() {
        const val = this.val;
        if (val || val === 0) {
          return true;
        }
        return false;
      },
      msg() {
        return this.localMsg || this.errorMessage;
      },
      // 因为uniapp的input组件的maxlength组件必须要数值，这里转为数值，用户可以传入字符串数值
      inputMaxlength() {
        return Number(this.maxlength);
      },
      // 处理外层样式的style
      boxStyle() {
        return `color:${this.inputBorder && this.msg ? "#e43d33" : this.styles.color};`;
      },
      // input 内容的类和样式处理
      inputContentClass() {
        return obj2strClass({
          "is-input-border": this.inputBorder,
          "is-input-error-border": this.inputBorder && this.msg,
          "is-textarea": this.type === "textarea",
          "is-disabled": this.disabled,
          "is-focused": this.focusShow
        });
      },
      inputContentStyle() {
        const focusColor = this.focusShow ? this.primaryColor : this.styles.borderColor;
        const borderColor = this.inputBorder && this.msg ? "#dd524d" : focusColor;
        return obj2strStyle({
          "border-color": borderColor || "#e5e5e5",
          "background-color": this.disabled ? this.styles.disableColor : this.styles.backgroundColor
        });
      },
      // input右侧样式
      inputStyle() {
        const paddingRight = this.type === "password" || this.clearable || this.prefixIcon ? "" : "10px";
        return obj2strStyle({
          "padding-right": paddingRight,
          "padding-left": this.prefixIcon ? "" : "10px"
        });
      }
    },
    watch: {
      value(newVal) {
        this.val = newVal;
      },
      modelValue(newVal) {
        this.val = newVal;
      },
      focus(newVal) {
        this.$nextTick(() => {
          this.focused = this.focus;
          this.focusShow = this.focus;
        });
      }
    },
    created() {
      this.init();
      if (this.form && this.formItem) {
        this.$watch("formItem.errMsg", (newVal) => {
          this.localMsg = newVal;
        });
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.focused = this.focus;
        this.focusShow = this.focus;
      });
    },
    methods: {
      /**
       * 初始化变量值
       */
      init() {
        if (this.value || this.value === 0) {
          this.val = this.value;
        } else if (this.modelValue || this.modelValue === 0) {
          this.val = this.modelValue;
        } else {
          this.val = null;
        }
      },
      /**
       * 点击图标时触发
       * @param {Object} type
       */
      onClickIcon(type) {
        this.$emit("iconClick", type);
      },
      /**
       * 显示隐藏内容，密码框时生效
       */
      onEyes() {
        this.showPassword = !this.showPassword;
        this.$emit("eyes", this.showPassword);
      },
      /**
       * 输入时触发
       * @param {Object} event
       */
      onInput(event) {
        let value = event.detail.value;
        if (this.trim) {
          if (typeof this.trim === "boolean" && this.trim) {
            value = this.trimStr(value);
          }
          if (typeof this.trim === "string") {
            value = this.trimStr(value, this.trim);
          }
        }
        if (this.errMsg)
          this.errMsg = "";
        this.val = value;
        this.$emit("input", value);
        this.$emit("update:modelValue", value);
      },
      /**
       * 外部调用方法
       * 获取焦点时触发
       * @param {Object} event
       */
      onFocus() {
        this.$nextTick(() => {
          this.focused = true;
        });
        this.$emit("focus", null);
      },
      _Focus(event) {
        this.focusShow = true;
        this.$emit("focus", event);
      },
      /**
       * 外部调用方法
       * 失去焦点时触发
       * @param {Object} event
       */
      onBlur() {
        this.focused = false;
        this.$emit("focus", null);
      },
      _Blur(event) {
        event.detail.value;
        this.focusShow = false;
        this.$emit("blur", event);
        if (this.isEnter === false) {
          this.$emit("change", this.val);
        }
        if (this.form && this.formItem) {
          const { validateTrigger } = this.form;
          if (validateTrigger === "blur") {
            this.formItem.onFieldChange();
          }
        }
      },
      /**
       * 按下键盘的发送键
       * @param {Object} e
       */
      onConfirm(e) {
        this.$emit("confirm", this.val);
        this.isEnter = true;
        this.$emit("change", this.val);
        this.$nextTick(() => {
          this.isEnter = false;
        });
      },
      /**
       * 清理内容
       * @param {Object} event
       */
      onClear(event) {
        this.val = "";
        this.$emit("input", "");
        this.$emit("update:modelValue", "");
        this.$emit("clear");
      },
      /**
       * 去除空格
       */
      trimStr(str, pos = "both") {
        if (pos === "both") {
          return str.trim();
        } else if (pos === "left") {
          return str.trimLeft();
        } else if (pos === "right") {
          return str.trimRight();
        } else if (pos === "start") {
          return str.trimStart();
        } else if (pos === "end") {
          return str.trimEnd();
        } else if (pos === "all") {
          return str.replace(/\s+/g, "");
        } else if (pos === "none") {
          return str;
        }
        return str;
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom((0, import_vue4.resolveDynamicComponent)("uni-icons"), __easycom_1);
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
      "view",
      {
        class: (0, import_vue4.normalizeClass)(["uni-easyinput", { "uni-easyinput-error": $options.msg }]),
        style: (0, import_vue4.normalizeStyle)($options.boxStyle),
        renderWhole: true
      },
      [
        (0, import_vue4.createElementVNode)(
          "view",
          {
            class: (0, import_vue4.normalizeClass)(["uni-easyinput__content", $options.inputContentClass]),
            style: (0, import_vue4.normalizeStyle)($options.inputContentStyle)
          },
          [
            $props.prefixIcon ? ((0, import_vue4.openBlock)(), (0, import_vue4.createBlock)(_component_uni_icons, {
              key: 0,
              class: "content-clear-icon",
              type: $props.prefixIcon,
              color: "#c0c4cc",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.onClickIcon("prefix")),
              size: "22"
            }, null, 8, ["type"])) : (0, import_vue4.createCommentVNode)("v-if", true),
            $props.type === "textarea" ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("u-textarea", {
              key: 1,
              class: (0, import_vue4.normalizeClass)(["uni-easyinput__content-textarea", { "input-padding": $props.inputBorder }]),
              name: $props.name,
              value: $data.val,
              placeholder: $props.placeholder,
              placeholderStyle: $props.placeholderStyle,
              disabled: $props.disabled,
              placeholderClass: "uni-easyinput__placeholder-class",
              maxlength: $options.inputMaxlength,
              focus: $data.focused,
              autoHeight: $props.autoHeight,
              onInput: _cache[1] || (_cache[1] = (...args) => $options.onInput && $options.onInput(...args)),
              onBlur: _cache[2] || (_cache[2] = (...args) => $options._Blur && $options._Blur(...args)),
              onFocus: _cache[3] || (_cache[3] = (...args) => $options._Focus && $options._Focus(...args)),
              onConfirm: _cache[4] || (_cache[4] = (...args) => $options.onConfirm && $options.onConfirm(...args))
            }, null, 42, ["name", "value", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "autoHeight"])) : ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("u-input", {
              key: 2,
              type: $props.type === "password" ? "text" : $props.type,
              class: "uni-easyinput__content-input",
              style: (0, import_vue4.normalizeStyle)($options.inputStyle),
              name: $props.name,
              value: $data.val,
              password: !$data.showPassword && $props.type === "password",
              placeholder: $props.placeholder,
              placeholderStyle: $props.placeholderStyle,
              placeholderClass: "uni-easyinput__placeholder-class",
              disabled: $props.disabled,
              maxlength: $options.inputMaxlength,
              focus: $data.focused,
              confirmType: $props.confirmType,
              onFocus: _cache[5] || (_cache[5] = (...args) => $options._Focus && $options._Focus(...args)),
              onBlur: _cache[6] || (_cache[6] = (...args) => $options._Blur && $options._Blur(...args)),
              onInput: _cache[7] || (_cache[7] = (...args) => $options.onInput && $options.onInput(...args)),
              onConfirm: _cache[8] || (_cache[8] = (...args) => $options.onConfirm && $options.onConfirm(...args))
            }, null, 44, ["type", "name", "value", "password", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "confirmType"])),
            $props.type === "password" && $props.passwordIcon ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
              import_vue4.Fragment,
              { key: 3 },
              [
                (0, import_vue4.createCommentVNode)(" \u5F00\u542F\u5BC6\u7801\u65F6\u663E\u793A\u5C0F\u773C\u775B "),
                $options.isVal ? ((0, import_vue4.openBlock)(), (0, import_vue4.createBlock)(_component_uni_icons, {
                  key: 0,
                  class: (0, import_vue4.normalizeClass)(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
                  type: $data.showPassword ? "eye-slash-filled" : "eye-filled",
                  size: 22,
                  color: $data.focusShow ? $props.primaryColor : "#c0c4cc",
                  onClick: $options.onEyes
                }, null, 8, ["class", "type", "color", "onClick"])) : (0, import_vue4.createCommentVNode)("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : $props.suffixIcon ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
              import_vue4.Fragment,
              { key: 4 },
              [
                $props.suffixIcon ? ((0, import_vue4.openBlock)(), (0, import_vue4.createBlock)(_component_uni_icons, {
                  key: 0,
                  class: "content-clear-icon",
                  type: $props.suffixIcon,
                  color: "#c0c4cc",
                  onClick: _cache[9] || (_cache[9] = ($event) => $options.onClickIcon("suffix")),
                  size: "22"
                }, null, 8, ["type"])) : (0, import_vue4.createCommentVNode)("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
              import_vue4.Fragment,
              { key: 5 },
              [
                $props.clearable && $options.isVal && !$props.disabled && $props.type !== "textarea" ? ((0, import_vue4.openBlock)(), (0, import_vue4.createBlock)(_component_uni_icons, {
                  key: 0,
                  class: (0, import_vue4.normalizeClass)(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
                  type: "clear",
                  size: $props.clearSize,
                  color: $options.msg ? "#dd524d" : $data.focusShow ? $props.primaryColor : "#c0c4cc",
                  onClick: $options.onClear
                }, null, 8, ["class", "size", "color", "onClick"])) : (0, import_vue4.createCommentVNode)("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )),
            (0, import_vue4.renderSlot)(_ctx.$slots, "right")
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      6
      /* CLASS, STYLE */
    );
  }
  var __easycom_12 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue"]]);
  var pattern = {
    email: /^\S+?@\S+?\.\S+?$/,
    idcard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
    url: new RegExp(
      "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
      "i"
    )
  };
  var FORMAT_MAPPING = {
    "int": "integer",
    "bool": "boolean",
    "double": "number",
    "long": "number",
    "password": "string"
    // "fileurls": 'array'
  };
  function formatMessage(args, resources = "") {
    var defaultMessage = ["label"];
    defaultMessage.forEach((item) => {
      if (args[item] === void 0) {
        args[item] = "";
      }
    });
    let str = resources;
    for (let key in args) {
      let reg = new RegExp("{" + key + "}");
      str = str.replace(reg, args[key]);
    }
    return str;
  }
  function isEmptyValue(value, type) {
    if (value === void 0 || value === null) {
      return true;
    }
    if (typeof value === "string" && !value) {
      return true;
    }
    if (Array.isArray(value) && !value.length) {
      return true;
    }
    if (type === "object" && !Object.keys(value).length) {
      return true;
    }
    return false;
  }
  var types = {
    integer(value) {
      return types.number(value) && parseInt(value, 10) === value;
    },
    string(value) {
      return typeof value === "string";
    },
    number(value) {
      if (isNaN(value)) {
        return false;
      }
      return typeof value === "number";
    },
    "boolean": function(value) {
      return typeof value === "boolean";
    },
    "float": function(value) {
      return types.number(value) && !types.integer(value);
    },
    array(value) {
      return Array.isArray(value);
    },
    object(value) {
      return typeof value === "object" && !types.array(value);
    },
    date(value) {
      return value instanceof Date;
    },
    timestamp(value) {
      if (!this.integer(value) || Math.abs(value).toString().length > 16) {
        return false;
      }
      return true;
    },
    file(value) {
      return typeof value.url === "string";
    },
    email(value) {
      return typeof value === "string" && !!value.match(pattern.email) && value.length < 255;
    },
    url(value) {
      return typeof value === "string" && !!value.match(pattern.url);
    },
    pattern(reg, value) {
      try {
        return new RegExp(reg).test(value);
      } catch (e) {
        return false;
      }
    },
    method(value) {
      return typeof value === "function";
    },
    idcard(value) {
      return typeof value === "string" && !!value.match(pattern.idcard);
    },
    "url-https"(value) {
      return this.url(value) && value.startsWith("https://");
    },
    "url-scheme"(value) {
      return value.startsWith("://");
    },
    "url-web"(value) {
      return false;
    }
  };
  var RuleValidator = class {
    constructor(message) {
      this._message = message;
    }
    validateRule(fieldKey, fieldValue, value, data, allData) {
      return __async(this, null, function* () {
        var result = null;
        let rules = fieldValue.rules;
        let hasRequired = rules.findIndex((item) => {
          return item.required;
        });
        if (hasRequired < 0) {
          if (value === null || value === void 0) {
            return result;
          }
          if (typeof value === "string" && !value.length) {
            return result;
          }
        }
        var message = this._message;
        if (rules === void 0) {
          return message["default"];
        }
        for (var i = 0; i < rules.length; i++) {
          let rule = rules[i];
          let vt = this._getValidateType(rule);
          Object.assign(rule, {
            label: fieldValue.label || `["${fieldKey}"]`
          });
          if (RuleValidatorHelper[vt]) {
            result = RuleValidatorHelper[vt](rule, value, message);
            if (result != null) {
              break;
            }
          }
          if (rule.validateExpr) {
            let now2 = Date.now();
            let resultExpr = rule.validateExpr(value, allData, now2);
            if (resultExpr === false) {
              result = this._getMessage(rule, rule.errorMessage || this._message["default"]);
              break;
            }
          }
          if (rule.validateFunction) {
            result = yield this.validateFunction(rule, value, data, allData, vt);
            if (result !== null) {
              break;
            }
          }
        }
        if (result !== null) {
          result = message.TAG + result;
        }
        return result;
      });
    }
    validateFunction(rule, value, data, allData, vt) {
      return __async(this, null, function* () {
        let result = null;
        try {
          let callbackMessage = null;
          const res = yield rule.validateFunction(rule, value, allData || data, (message) => {
            callbackMessage = message;
          });
          if (callbackMessage || typeof res === "string" && res || res === false) {
            result = this._getMessage(rule, callbackMessage || res, vt);
          }
        } catch (e) {
          result = this._getMessage(rule, e.message, vt);
        }
        return result;
      });
    }
    _getMessage(rule, message, vt) {
      return formatMessage(rule, message || rule.errorMessage || this._message[vt] || message["default"]);
    }
    _getValidateType(rule) {
      var result = "";
      if (rule.required) {
        result = "required";
      } else if (rule.format) {
        result = "format";
      } else if (rule.arrayType) {
        result = "arrayTypeFormat";
      } else if (rule.range) {
        result = "range";
      } else if (rule.maximum !== void 0 || rule.minimum !== void 0) {
        result = "rangeNumber";
      } else if (rule.maxLength !== void 0 || rule.minLength !== void 0) {
        result = "rangeLength";
      } else if (rule.pattern) {
        result = "pattern";
      } else if (rule.validateFunction) {
        result = "validateFunction";
      }
      return result;
    }
  };
  var RuleValidatorHelper = {
    required(rule, value, message) {
      if (rule.required && isEmptyValue(value, rule.format || typeof value)) {
        return formatMessage(rule, rule.errorMessage || message.required);
      }
      return null;
    },
    range(rule, value, message) {
      const {
        range: range2,
        errorMessage
      } = rule;
      let list = new Array(range2.length);
      for (let i = 0; i < range2.length; i++) {
        const item = range2[i];
        if (types.object(item) && item.value !== void 0) {
          list[i] = item.value;
        } else {
          list[i] = item;
        }
      }
      let result = false;
      if (Array.isArray(value)) {
        result = new Set(value.concat(list)).size === list.length;
      } else {
        if (list.indexOf(value) > -1) {
          result = true;
        }
      }
      if (!result) {
        return formatMessage(rule, errorMessage || message["enum"]);
      }
      return null;
    },
    rangeNumber(rule, value, message) {
      if (!types.number(value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      let {
        minimum,
        maximum,
        exclusiveMinimum,
        exclusiveMaximum
      } = rule;
      let min2 = exclusiveMinimum ? value <= minimum : value < minimum;
      let max2 = exclusiveMaximum ? value >= maximum : value > maximum;
      if (minimum !== void 0 && min2) {
        return formatMessage(rule, rule.errorMessage || message["number"][exclusiveMinimum ? "exclusiveMinimum" : "minimum"]);
      } else if (maximum !== void 0 && max2) {
        return formatMessage(rule, rule.errorMessage || message["number"][exclusiveMaximum ? "exclusiveMaximum" : "maximum"]);
      } else if (minimum !== void 0 && maximum !== void 0 && (min2 || max2)) {
        return formatMessage(rule, rule.errorMessage || message["number"].range);
      }
      return null;
    },
    rangeLength(rule, value, message) {
      if (!types.string(value) && !types.array(value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      let min2 = rule.minLength;
      let max2 = rule.maxLength;
      let val = value.length;
      if (min2 !== void 0 && val < min2) {
        return formatMessage(rule, rule.errorMessage || message["length"].minLength);
      } else if (max2 !== void 0 && val > max2) {
        return formatMessage(rule, rule.errorMessage || message["length"].maxLength);
      } else if (min2 !== void 0 && max2 !== void 0 && (val < min2 || val > max2)) {
        return formatMessage(rule, rule.errorMessage || message["length"].range);
      }
      return null;
    },
    pattern(rule, value, message) {
      if (!types["pattern"](rule.pattern, value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      return null;
    },
    format(rule, value, message) {
      var customTypes = Object.keys(types);
      var format2 = FORMAT_MAPPING[rule.format] ? FORMAT_MAPPING[rule.format] : rule.format || rule.arrayType;
      if (customTypes.indexOf(format2) > -1) {
        if (!types[format2](value)) {
          return formatMessage(rule, rule.errorMessage || message.typeError);
        }
      }
      return null;
    },
    arrayTypeFormat(rule, value, message) {
      if (!Array.isArray(value)) {
        return formatMessage(rule, rule.errorMessage || message.typeError);
      }
      for (let i = 0; i < value.length; i++) {
        const element = value[i];
        let formatResult = this.format(rule, element, message);
        if (formatResult !== null) {
          return formatResult;
        }
      }
      return null;
    }
  };
  var SchemaValidator = class _SchemaValidator extends RuleValidator {
    constructor(schema, options) {
      super(_SchemaValidator.message);
      this._schema = schema;
      this._options = options || null;
    }
    updateSchema(schema) {
      this._schema = schema;
    }
    validate(data, allData) {
      return __async(this, null, function* () {
        let result = this._checkFieldInSchema(data);
        if (!result) {
          result = yield this.invokeValidate(data, false, allData);
        }
        return result.length ? result[0] : null;
      });
    }
    validateAll(data, allData) {
      return __async(this, null, function* () {
        let result = this._checkFieldInSchema(data);
        if (!result) {
          result = yield this.invokeValidate(data, true, allData);
        }
        return result;
      });
    }
    validateUpdate(data, allData) {
      return __async(this, null, function* () {
        let result = this._checkFieldInSchema(data);
        if (!result) {
          result = yield this.invokeValidateUpdate(data, false, allData);
        }
        return result.length ? result[0] : null;
      });
    }
    invokeValidate(data, all, allData) {
      return __async(this, null, function* () {
        let result = [];
        let schema = this._schema;
        for (let key in schema) {
          let value = schema[key];
          let errorMessage = yield this.validateRule(key, value, data[key], data, allData);
          if (errorMessage != null) {
            result.push({
              key,
              errorMessage
            });
            if (!all)
              break;
          }
        }
        return result;
      });
    }
    invokeValidateUpdate(data, all, allData) {
      return __async(this, null, function* () {
        let result = [];
        for (let key in data) {
          let errorMessage = yield this.validateRule(key, this._schema[key], data[key], data, allData);
          if (errorMessage != null) {
            result.push({
              key,
              errorMessage
            });
            if (!all)
              break;
          }
        }
        return result;
      });
    }
    _checkFieldInSchema(data) {
      var keys2 = Object.keys(data);
      var keys22 = Object.keys(this._schema);
      if (new Set(keys2.concat(keys22)).size === keys22.length) {
        return "";
      }
      var noExistFields = keys2.filter((key) => {
        return keys22.indexOf(key) < 0;
      });
      var errorMessage = formatMessage({
        field: JSON.stringify(noExistFields)
      }, _SchemaValidator.message.TAG + _SchemaValidator.message["defaultInvalid"]);
      return [{
        key: "invalid",
        errorMessage
      }];
    }
  };
  function Message() {
    return {
      TAG: "",
      default: "\u9A8C\u8BC1\u9519\u8BEF",
      defaultInvalid: "\u63D0\u4EA4\u7684\u5B57\u6BB5{field}\u5728\u6570\u636E\u5E93\u4E2D\u5E76\u4E0D\u5B58\u5728",
      validateFunction: "\u9A8C\u8BC1\u65E0\u6548",
      required: "{label}\u5FC5\u586B",
      "enum": "{label}\u8D85\u51FA\u8303\u56F4",
      timestamp: "{label}\u683C\u5F0F\u65E0\u6548",
      whitespace: "{label}\u4E0D\u80FD\u4E3A\u7A7A",
      typeError: "{label}\u7C7B\u578B\u65E0\u6548",
      date: {
        format: "{label}\u65E5\u671F{value}\u683C\u5F0F\u65E0\u6548",
        parse: "{label}\u65E5\u671F\u65E0\u6CD5\u89E3\u6790,{value}\u65E0\u6548",
        invalid: "{label}\u65E5\u671F{value}\u65E0\u6548"
      },
      length: {
        minLength: "{label}\u957F\u5EA6\u4E0D\u80FD\u5C11\u4E8E{minLength}",
        maxLength: "{label}\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC7{maxLength}",
        range: "{label}\u5FC5\u987B\u4ECB\u4E8E{minLength}\u548C{maxLength}\u4E4B\u95F4"
      },
      number: {
        minimum: "{label}\u4E0D\u80FD\u5C0F\u4E8E{minimum}",
        maximum: "{label}\u4E0D\u80FD\u5927\u4E8E{maximum}",
        exclusiveMinimum: "{label}\u4E0D\u80FD\u5C0F\u4E8E\u7B49\u4E8E{minimum}",
        exclusiveMaximum: "{label}\u4E0D\u80FD\u5927\u4E8E\u7B49\u4E8E{maximum}",
        range: "{label}\u5FC5\u987B\u4ECB\u4E8E{minimum}and{maximum}\u4E4B\u95F4"
      },
      pattern: {
        mismatch: "{label}\u683C\u5F0F\u4E0D\u5339\u914D"
      }
    };
  }
  SchemaValidator.message = new Message();
  var deepCopy = (val) => {
    return JSON.parse(JSON.stringify(val));
  };
  var typeFilter = (format2) => {
    return format2 === "int" || format2 === "double" || format2 === "number" || format2 === "timestamp";
  };
  var getValue = (key, value, rules) => {
    const isRuleNumType = rules.find((val) => val.format && typeFilter(val.format));
    const isRuleBoolType = rules.find((val) => val.format && val.format === "boolean" || val.format === "bool");
    if (!!isRuleNumType) {
      if (!value && value !== 0) {
        value = null;
      } else {
        value = isNumber(Number(value)) ? Number(value) : value;
      }
    }
    if (!!isRuleBoolType) {
      value = isBoolean(value) ? value : false;
    }
    return value;
  };
  var setDataValue = (field, formdata, value) => {
    formdata[field] = value;
    return value || "";
  };
  var getDataValue = (field, data) => {
    return objGet(data, field);
  };
  var realName = (name, data = {}) => {
    const base_name = _basePath(name);
    if (typeof base_name === "object" && Array.isArray(base_name) && base_name.length > 1) {
      const realname = base_name.reduce((a, b) => a += `#${b}`, "_formdata_");
      return realname;
    }
    return base_name[0] || name;
  };
  var isRealName = (name) => {
    const reg = /^_formdata_#*/;
    return reg.test(name);
  };
  var rawData = (object2 = {}, name) => {
    let newData = JSON.parse(JSON.stringify(object2));
    let formData = {};
    for (let i in newData) {
      let path = name2arr(i);
      objSet(formData, path, newData[i]);
    }
    return formData;
  };
  var name2arr = (name) => {
    let field = name.replace("_formdata_#", "");
    field = field.split("#").map((v) => isNumber(v) ? Number(v) : v);
    return field;
  };
  var objSet = (object2, path, value) => {
    if (typeof object2 !== "object")
      return object2;
    _basePath(path).reduce((o, k, i, _) => {
      if (i === _.length - 1) {
        o[k] = value;
        return null;
      } else if (k in o) {
        return o[k];
      } else {
        o[k] = /^[0-9]{1,}$/.test(_[i + 1]) ? [] : {};
        return o[k];
      }
    }, object2);
    return object2;
  };
  function _basePath(path) {
    if (Array.isArray(path))
      return path;
    return path.replace(/\[/g, ".").replace(/\]/g, "").split(".");
  }
  var objGet = (object2, path, defaultVal = "undefined") => {
    let newPath = _basePath(path);
    let val = newPath.reduce((o, k) => {
      return (o || {})[k];
    }, object2);
    return !val || val !== void 0 ? val : defaultVal;
  };
  var isNumber = (num) => {
    return !isNaN(Number(num));
  };
  var isBoolean = (bool) => {
    return typeof bool === "boolean";
  };
  var isRequiredField = (rules) => {
    let isNoField = false;
    for (let i = 0; i < rules.length; i++) {
      const ruleData = rules[i];
      if (ruleData.required) {
        isNoField = true;
        break;
      }
    }
    return isNoField;
  };
  var isEqual = (a, b) => {
    if (a === b) {
      return a !== 0 || 1 / a === 1 / b;
    }
    if (a == null || b == null) {
      return a === b;
    }
    var classNameA = toString.call(a), classNameB = toString.call(b);
    if (classNameA !== classNameB) {
      return false;
    }
    switch (classNameA) {
      case "[object RegExp]":
      case "[object String]":
        return "" + a === "" + b;
      case "[object Number]":
        if (+a !== +a) {
          return +b !== +b;
        }
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case "[object Date]":
      case "[object Boolean]":
        return +a === +b;
    }
    if (classNameA == "[object Object]") {
      var propsA = Object.getOwnPropertyNames(a), propsB = Object.getOwnPropertyNames(b);
      if (propsA.length != propsB.length) {
        return false;
      }
      for (var i = 0; i < propsA.length; i++) {
        var propName = propsA[i];
        if (a[propName] !== b[propName]) {
          return false;
        }
      }
      return true;
    }
    if (classNameA == "[object Array]") {
      if (a.toString() == b.toString()) {
        return true;
      }
      return false;
    }
  };
  var _style_03 = {};
  var _sfc_main3 = {
    name: "uniForms",
    emits: ["validate", "submit"],
    options: {
      virtualHost: true
    },
    props: {
      // 即将弃用
      value: {
        type: Object,
        default() {
          return null;
        }
      },
      // vue3 替换 value 属性
      modelValue: {
        type: Object,
        default() {
          return null;
        }
      },
      // 1.4.0 开始将不支持 v-model ，且废弃 value 和 modelValue
      model: {
        type: Object,
        default() {
          return null;
        }
      },
      // 表单校验规则
      rules: {
        type: Object,
        default() {
          return {};
        }
      },
      //校验错误信息提示方式 默认 undertext 取值 [undertext|toast|modal]
      errShowType: {
        type: String,
        default: "undertext"
      },
      // 校验触发器方式 默认 bind 取值 [bind|submit]
      validateTrigger: {
        type: String,
        default: "submit"
      },
      // label 位置，默认 left 取值  top/left
      labelPosition: {
        type: String,
        default: "left"
      },
      // label 宽度
      labelWidth: {
        type: [String, Number],
        default: ""
      },
      // label 居中方式，默认 left 取值 left/center/right
      labelAlign: {
        type: String,
        default: "left"
      },
      border: {
        type: Boolean,
        default: false
      }
    },
    provide() {
      return {
        uniForm: this
      };
    },
    data() {
      return {
        // 表单本地值的记录，不应该与传如的值进行关联
        formData: {},
        formRules: {}
      };
    },
    computed: {
      // 计算数据源变化的
      localData() {
        const localVal = this.model || this.modelValue || this.value;
        if (localVal) {
          return deepCopy(localVal);
        }
        return {};
      }
    },
    watch: {
      // 监听数据变化 ,暂时不使用，需要单独赋值
      // localData: {},
      // 监听规则变化
      rules: {
        handler: function(val, oldVal) {
          this.setRules(val);
        },
        deep: true,
        immediate: true
      }
    },
    created() {
      let getbinddata = getApp().$vm.$.appContext.config.globalProperties.binddata;
      if (!getbinddata) {
        getApp().$vm.$.appContext.config.globalProperties.binddata = function(name, value, formName) {
          if (formName) {
            this.$refs[formName].setValue(name, value);
          } else {
            let formVm;
            for (let i in this.$refs) {
              const vm = this.$refs[i];
              if (vm && vm.$options && vm.$options.name === "uniForms") {
                formVm = vm;
                break;
              }
            }
            if (!formVm)
              return formatAppLog("error", "at uni_modules/uni-forms/components/uni-forms/uni-forms.vue:182", "\u5F53\u524D uni-froms \u7EC4\u4EF6\u7F3A\u5C11 ref \u5C5E\u6027");
            formVm.setValue(name, value);
          }
        };
      }
      this.childrens = [];
      this.inputChildrens = [];
      this.setRules(this.rules);
    },
    methods: {
      /**
       * 外部调用方法
       * 设置规则 ，主要用于小程序自定义检验规则
       * @param {Array} rules 规则源数据
       */
      setRules(rules) {
        this.formRules = Object.assign({}, this.formRules, rules);
        this.validator = new SchemaValidator(rules);
      },
      /**
       * 外部调用方法
       * 设置数据，用于设置表单数据，公开给用户使用 ， 不支持在动态表单中使用
       * @param {Object} key
       * @param {Object} value
       */
      setValue(key, value) {
        let example = this.childrens.find((child) => child.name === key);
        if (!example)
          return null;
        this.formData[key] = getValue(key, value, this.formRules[key] && this.formRules[key].rules || []);
        return example.onFieldChange(this.formData[key]);
      },
      /**
       * 外部调用方法
       * 手动提交校验表单
       * 对整个表单进行校验的方法，参数为一个回调函数。
       * @param {Array} keepitem 保留不参与校验的字段
       * @param {type} callback 方法回调
       */
      validate(keepitem, callback) {
        return this.checkAll(this.formData, keepitem, callback);
      },
      /**
       * 外部调用方法
       * 部分表单校验
       * @param {Array|String} props 需要校验的字段
       * @param {Function} 回调函数
       */
      validateField(props = [], callback) {
        props = [].concat(props);
        let invalidFields = {};
        this.childrens.forEach((item) => {
          const name = realName(item.name);
          if (props.indexOf(name) !== -1) {
            invalidFields = Object.assign({}, invalidFields, {
              [name]: this.formData[name]
            });
          }
        });
        return this.checkAll(invalidFields, [], callback);
      },
      /**
       * 外部调用方法
       * 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果
       * @param {Array|String} props 需要移除校验的字段 ，不填为所有
       */
      clearValidate(props = []) {
        props = [].concat(props);
        this.childrens.forEach((item) => {
          if (props.length === 0) {
            item.errMsg = "";
          } else {
            const name = realName(item.name);
            if (props.indexOf(name) !== -1) {
              item.errMsg = "";
            }
          }
        });
      },
      /**
       * 外部调用方法 ，即将废弃
       * 手动提交校验表单
       * 对整个表单进行校验的方法，参数为一个回调函数。
       * @param {Array} keepitem 保留不参与校验的字段
       * @param {type} callback 方法回调
       */
      submit(keepitem, callback, type) {
        for (let i in this.dataValue) {
          const itemData = this.childrens.find((v) => v.name === i);
          if (itemData) {
            if (this.formData[i] === void 0) {
              this.formData[i] = this._getValue(i, this.dataValue[i]);
            }
          }
        }
        if (!type) {
          formatAppLog("warn", "at uni_modules/uni-forms/components/uni-forms/uni-forms.vue:289", "submit \u65B9\u6CD5\u5373\u5C06\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528validate\u65B9\u6CD5\u4EE3\u66FF\uFF01");
        }
        return this.checkAll(this.formData, keepitem, callback, "submit");
      },
      // 校验所有
      checkAll(invalidFields, keepitem, callback, type) {
        return __async(this, null, function* () {
          if (!this.validator)
            return;
          let childrens = [];
          for (let i in invalidFields) {
            const item = this.childrens.find((v) => realName(v.name) === i);
            if (item) {
              childrens.push(item);
            }
          }
          if (!callback && typeof keepitem === "function") {
            callback = keepitem;
          }
          let promise2;
          if (!callback && typeof callback !== "function" && Promise) {
            promise2 = new Promise((resolve, reject) => {
              callback = function(valid, invalidFields2) {
                !valid ? resolve(invalidFields2) : reject(valid);
              };
            });
          }
          let results = [];
          let tempFormData = JSON.parse(JSON.stringify(invalidFields));
          for (let i in childrens) {
            const child = childrens[i];
            let name = realName(child.name);
            const result = yield child.onFieldChange(tempFormData[name]);
            if (result) {
              results.push(result);
              if (this.errShowType === "toast" || this.errShowType === "modal")
                break;
            }
          }
          if (Array.isArray(results)) {
            if (results.length === 0)
              results = null;
          }
          if (Array.isArray(keepitem)) {
            keepitem.forEach((v) => {
              let vName = realName(v);
              let value = getDataValue(v, this.localData);
              if (value !== void 0) {
                tempFormData[vName] = value;
              }
            });
          }
          if (type === "submit") {
            this.$emit("submit", {
              detail: {
                value: tempFormData,
                errors: results
              }
            });
          } else {
            this.$emit("validate", results);
          }
          let resetFormData = {};
          resetFormData = rawData(tempFormData, this.name);
          callback && typeof callback === "function" && callback(results, resetFormData);
          if (promise2 && callback) {
            return promise2;
          } else {
            return null;
          }
        });
      },
      /**
       * 返回validate事件
       * @param {Object} result
       */
      validateCheck(result) {
        this.$emit("validate", result);
      },
      _getValue: getValue,
      _isRequiredField: isRequiredField,
      _setDataValue: setDataValue,
      _getDataValue: getDataValue,
      _realName: realName,
      _isRealName: isRealName,
      _isEqual: isEqual
    }
  };
  function _sfc_render3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_form = (0, import_vue4.resolveComponent)("form");
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("view", {
      class: "uni-forms",
      renderWhole: true
    }, [
      (0, import_vue4.createVNode)(_component_form, null, {
        default: (0, import_vue4.withCtx)(() => [
          (0, import_vue4.renderSlot)(_ctx.$slots, "default")
        ]),
        _: 3
        /* FORWARDED */
      })
    ]);
  }
  var __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main3, [["render", _sfc_render3], ["styles", [_style_03]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/uni_modules/uni-forms/components/uni-forms/uni-forms.vue"]]);

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/uni-forms-item.js
  var import_vue5 = __toESM(require_vue());
  var _style_04 = { "uni-forms-item": { "": { "position": "relative", "display": "flex", "paddingBottom": 22, "flexDirection": "row" }, ".is-direction-left": { "flexDirection": "row" }, ".is-direction-top": { "flexDirection": "column" } }, "uni-forms-item__label": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "textAlign": "left", "fontSize": 14, "color": "#606266", "height": 36, "paddingTop": 0, "paddingRight": 12, "paddingBottom": 0, "paddingLeft": 0 }, ".no-label": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0 }, ".uni-forms-item.is-direction-top ": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 8, "paddingLeft": 0, "lineHeight": 1.5715, "textAlign": "left" } }, "uni-forms-item__content": { "": { "position": "relative", "fontSize": 14, "flex": 1, "flexDirection": "row" } }, "uni-forms-item__nuve-content": { ".uni-forms-item ": { "display": "flex", "flexDirection": "column", "flex": 1 } }, "uni-forms-item__error": { "": { "color": "#f56c6c", "fontSize": 12, "lineHeight": 1, "paddingTop": 4, "position": "absolute", "bottom": 5, "opacity": 0 }, ".msg--active": { "opacity": 1, "transform": "translateY(0%)" }, ".uni-forms-item--border ": { "position": "relative", "top": 0, "left": 0, "paddingTop": 0, "marginTop": 5 } }, "error-text": { ".uni-forms-item__error ": { "color": "#f56c6c", "fontSize": 12 } }, "is-required": { ".uni-forms-item ": { "color": "#dd524d", "fontWeight": "bold" } }, "uni-forms-item--border": { "": { "marginBottom": 0, "paddingTop": 10, "paddingRight": 0, "paddingBottom": 10, "paddingLeft": 0, "borderTopWidth": 1, "borderTopStyle": "solid", "borderTopColor": "#eeeeee", "display": "flex", "flexDirection": "column" } }, "is-first-border": { "": { "borderWidth": 0 } } };
  var _sfc_main4 = {
    name: "uniFormsItem",
    options: {
      virtualHost: true
    },
    provide() {
      return {
        uniFormItem: this
      };
    },
    inject: {
      form: {
        from: "uniForm",
        default: null
      }
    },
    props: {
      // 表单校验规则
      rules: {
        type: Array,
        default() {
          return null;
        }
      },
      // 表单域的属性名，在使用校验规则时必填
      name: {
        type: [String, Array],
        default: ""
      },
      required: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: ""
      },
      // label的宽度 ，默认 80
      labelWidth: {
        type: [String, Number],
        default: ""
      },
      // label 居中方式，默认 left 取值 left/center/right
      labelAlign: {
        type: String,
        default: "right"
      },
      // 强制显示错误信息
      errorMessage: {
        type: [String, Boolean],
        default: ""
      },
      // 1.4.0 弃用，统一使用 form 的校验时机
      // validateTrigger: {
      // 	type: String,
      // 	default: ''
      // },
      // 1.4.0 弃用，统一使用 form 的label 位置
      // labelPosition: {
      // 	type: String,
      // 	default: ''
      // },
      // 1.4.0 以下属性已经废弃，请使用  #label 插槽代替
      leftIcon: String,
      iconColor: {
        type: String,
        default: "#606266"
      }
    },
    data() {
      return {
        errMsg: "",
        isRequired: false,
        userRules: null,
        localLabelAlign: "left",
        localLabelWidth: "65px",
        localLabelPos: "left",
        border: false,
        isFirstBorder: false
      };
    },
    computed: {
      // 处理错误信息
      msg() {
        return this.errorMessage || this.errMsg;
      }
    },
    watch: {
      // 规则发生变化通知子组件更新
      "form.formRules"(val) {
        this.init();
      },
      "form.labelWidth"(val) {
        this.localLabelWidth = this._labelWidthUnit(val);
      },
      "form.labelPosition"(val) {
        this.localLabelPos = this._labelPosition();
      },
      "form.labelAlign"(val) {
      }
    },
    created() {
      this.init(true);
      if (this.name && this.form) {
        this.$watch(
          () => {
            const val = this.form._getDataValue(this.name, this.form.localData);
            return val;
          },
          (value, oldVal) => {
            const isEqual2 = this.form._isEqual(value, oldVal);
            if (!isEqual2) {
              const val = this.itemSetValue(value);
              this.onFieldChange(val, false);
            }
          },
          {
            immediate: false
          }
        );
      }
    },
    unmounted() {
      this.__isUnmounted = true;
      this.unInit();
    },
    methods: {
      /**
       * 外部调用方法
       * 设置规则 ，主要用于小程序自定义检验规则
       * @param {Array} rules 规则源数据
       */
      setRules(rules = null) {
        this.userRules = rules;
        this.init(false);
      },
      // 兼容老版本表单组件
      setValue() {
      },
      /**
       * 外部调用方法
       * 校验数据
       * @param {any} value 需要校验的数据
       * @param {boolean} 是否立即校验
       * @return {Array|null} 校验内容
       */
      onFieldChange(value, formtrigger = true) {
        return __async(this, null, function* () {
          const {
            formData,
            localData,
            errShowType,
            validateCheck,
            validateTrigger,
            _isRequiredField,
            _realName
          } = this.form;
          const name = _realName(this.name);
          if (!value) {
            value = this.form.formData[name];
          }
          const ruleLen = this.itemRules.rules && this.itemRules.rules.length;
          if (!this.validator || !ruleLen || ruleLen === 0)
            return;
          const isRequiredField2 = _isRequiredField(this.itemRules.rules || []);
          let result = null;
          if (validateTrigger === "bind" || formtrigger) {
            result = yield this.validator.validateUpdate(
              {
                [name]: value
              },
              formData
            );
            if (!isRequiredField2 && (value === void 0 || value === "")) {
              result = null;
            }
            if (result && result.errorMessage) {
              if (errShowType === "undertext") {
                this.errMsg = !result ? "" : result.errorMessage;
              }
              if (errShowType === "toast") {
                uni.showToast({
                  title: result.errorMessage || "\u6821\u9A8C\u9519\u8BEF",
                  icon: "none"
                });
              }
              if (errShowType === "modal") {
                uni.showModal({
                  title: "\u63D0\u793A",
                  content: result.errorMessage || "\u6821\u9A8C\u9519\u8BEF"
                });
              }
            } else {
              this.errMsg = "";
            }
            validateCheck(result ? result : null);
          } else {
            this.errMsg = "";
          }
          return result ? result : null;
        });
      },
      /**
       * 初始组件数据
       */
      init(type = false) {
        const {
          validator,
          formRules,
          childrens,
          formData,
          localData,
          _realName,
          labelWidth,
          _getDataValue,
          _setDataValue
        } = this.form || {};
        this.localLabelAlign = this._justifyContent();
        this.localLabelWidth = this._labelWidthUnit(labelWidth);
        this.localLabelPos = this._labelPosition();
        this.isRequired = this.required;
        this.form && type && childrens.push(this);
        if (!validator || !formRules)
          return;
        if (!this.form.isFirstBorder) {
          this.form.isFirstBorder = true;
          this.isFirstBorder = true;
        }
        if (this.group) {
          if (!this.group.isFirstBorder) {
            this.group.isFirstBorder = true;
            this.isFirstBorder = true;
          }
        }
        this.border = this.form.border;
        const name = _realName(this.name);
        const itemRule = this.userRules || this.rules;
        if (typeof formRules === "object" && itemRule) {
          formRules[name] = {
            rules: itemRule
          };
          validator.updateSchema(formRules);
        }
        const itemRules = formRules[name] || {};
        this.itemRules = itemRules;
        this.validator = validator;
        this.itemSetValue(_getDataValue(this.name, localData));
        this.isRequired = this._isRequired();
      },
      unInit() {
        if (this.form) {
          const {
            childrens,
            formData,
            _realName
          } = this.form;
          childrens.forEach((item, index2) => {
            if (item === this) {
              this.form.childrens.splice(index2, 1);
              delete formData[_realName(item.name)];
            }
          });
        }
      },
      // 设置item 的值
      itemSetValue(value) {
        const name = this.form._realName(this.name);
        const rules = this.itemRules.rules || [];
        const val = this.form._getValue(name, value, rules);
        this.form._setDataValue(name, this.form.formData, val);
        return val;
      },
      /**
       * 移除该表单项的校验结果
       */
      clearValidate() {
        this.errMsg = "";
      },
      // 是否显示星号
      _isRequired() {
        return this.required;
      },
      // 处理对齐方式
      _justifyContent() {
        if (this.form) {
          const {
            labelAlign
          } = this.form;
          let labelAli = this.labelAlign ? this.labelAlign : labelAlign;
          if (labelAli === "left")
            return "flex-start";
          if (labelAli === "center")
            return "center";
          if (labelAli === "right")
            return "flex-end";
        }
        return "flex-start";
      },
      // 处理 label宽度单位 ,继承父元素的值
      _labelWidthUnit(labelWidth) {
        return this.num2px(this.labelWidth ? this.labelWidth : labelWidth || (this.label ? 65 : "auto"));
      },
      // 处理 label 位置
      _labelPosition() {
        if (this.form)
          return this.form.labelPosition || "left";
        return "left";
      },
      /**
       * 触发时机
       * @param {Object} rule 当前规则内时机
       * @param {Object} itemRlue 当前组件时机
       * @param {Object} parentRule 父组件时机
       */
      isTrigger(rule, itemRlue, parentRule) {
        if (rule === "submit" || !rule) {
          if (rule === void 0) {
            if (itemRlue !== "bind") {
              if (!itemRlue) {
                return parentRule === "" ? "bind" : "submit";
              }
              return "submit";
            }
            return "bind";
          }
          return "submit";
        }
        return "bind";
      },
      num2px(num) {
        if (typeof num === "number") {
          return `${num}px`;
        }
        return num;
      }
    }
  };
  function _sfc_render4(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
      "view",
      {
        class: (0, import_vue5.normalizeClass)(["uni-forms-item", ["is-direction-" + $data.localLabelPos, $data.border ? "uni-forms-item--border" : "", $data.border && $data.isFirstBorder ? "is-first-border" : ""]]),
        renderWhole: true
      },
      [
        (0, import_vue5.renderSlot)(_ctx.$slots, "label", {}, () => [
          (0, import_vue5.createElementVNode)(
            "view",
            {
              class: (0, import_vue5.normalizeClass)(["uni-forms-item__label", { "no-label": !$props.label && !$data.isRequired }]),
              style: (0, import_vue5.normalizeStyle)({ width: $data.localLabelWidth, justifyContent: $data.localLabelAlign })
            },
            [
              $data.isRequired ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("u-text", {
                key: 0,
                class: "is-required"
              }, "*")) : (0, import_vue5.createCommentVNode)("v-if", true),
              (0, import_vue5.createElementVNode)(
                "u-text",
                null,
                (0, import_vue5.toDisplayString)($props.label),
                1
                /* TEXT */
              )
            ],
            6
            /* CLASS, STYLE */
          )
        ]),
        (0, import_vue5.createElementVNode)("view", { class: "uni-forms-item__nuve-content" }, [
          (0, import_vue5.createElementVNode)("view", { class: "uni-forms-item__content" }, [
            (0, import_vue5.renderSlot)(_ctx.$slots, "default")
          ]),
          (0, import_vue5.createElementVNode)(
            "view",
            {
              class: (0, import_vue5.normalizeClass)(["uni-forms-item__error", { "msg--active": $options.msg }])
            },
            [
              (0, import_vue5.createElementVNode)(
                "u-text",
                { class: "error-text" },
                (0, import_vue5.toDisplayString)($options.msg),
                1
                /* TEXT */
              )
            ],
            2
            /* CLASS */
          )
        ])
      ],
      2
      /* CLASS */
    );
  }
  var __easycom_13 = /* @__PURE__ */ _export_sfc(_sfc_main4, [["render", _sfc_render4], ["styles", [_style_04]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.vue"]]);

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/uni-i18n.es.js
  var isObject = (val) => val !== null && typeof val === "object";
  var defaultDelimiters = ["{", "}"];
  var BaseFormatter = class {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens2 = this._caches[message];
      if (!tokens2) {
        tokens2 = parse(message, delimiters);
        this._caches[message] = tokens2;
      }
      return compile(tokens2, values);
    }
  };
  var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format2, [startDelimiter, endDelimiter]) {
    const tokens2 = [];
    let position = 0;
    let text = "";
    while (position < format2.length) {
      let char = format2[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens2.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format2[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format2[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens2.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens2.push({ type: "text", value: text });
    return tokens2;
  }
  function compile(tokens2, values) {
    const compiled = [];
    let index2 = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index2 < tokens2.length) {
      const token2 = tokens2[index2];
      switch (token2.type) {
        case "text":
          compiled.push(token2.value);
          break;
        case "list":
          compiled.push(values[parseInt(token2.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token2.value]);
          } else {
            {
              console.warn(`Type of token '${token2.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index2++;
    }
    return compiled;
  }
  var LOCALE_ZH_HANS = "zh-Hans";
  var LOCALE_ZH_HANT = "zh-Hant";
  var LOCALE_EN = "en";
  var LOCALE_FR = "fr";
  var LOCALE_ES = "es";
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var hasOwn = (val, key) => hasOwnProperty.call(val, key);
  var defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale2, messages2) {
    if (!locale2) {
      return;
    }
    locale2 = locale2.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale2]) {
      return locale2;
    }
    locale2 = locale2.toLowerCase();
    if (locale2 === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale2.indexOf("zh") === 0) {
      if (locale2.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale2.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale2, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales2 = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages2 && Object.keys(messages2).length > 0) {
      locales2 = Object.keys(messages2);
    }
    const lang2 = startsWith(locale2, locales2);
    if (lang2) {
      return lang2;
    }
  }
  var I18n = class {
    constructor({ locale: locale2, fallbackLocale, messages: messages2, watcher, formater: formater2 }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater2 || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale2 || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale2) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale2, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index2 = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index2, 1);
      };
    }
    add(locale2, message, override = true) {
      const curMessages = this.messages[locale2];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale2] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale2, values) {
      let message = this.message;
      if (typeof locale2 === "string") {
        locale2 = normalizeLocale(locale2, this.messages);
        locale2 && (message = this.messages[locale2]);
      } else {
        values = locale2;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  };
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale2, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale2 !== "string") {
      const options = [
        messages2,
        locale2
      ];
      locale2 = options[0];
      messages2 = options[1];
    }
    if (typeof locale2 !== "string") {
      locale2 = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale: locale2,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale22, message, override = true) {
        return i18n.add(locale22, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/uni-popup.js
  var import_vue6 = __toESM(require_vue());
  var popup = {
    data() {
      return {};
    },
    created() {
      this.popup = this.getParent();
    },
    methods: {
      /**
       * 获取父元素实例
       */
      getParent(name = "uniPopup") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  var en = {
    "uni-popup.cancel": "cancel",
    "uni-popup.ok": "ok",
    "uni-popup.placeholder": "pleace enter",
    "uni-popup.title": "Hint",
    "uni-popup.shareTitle": "Share to"
  };
  var zhHans = {
    "uni-popup.cancel": "\u53D6\u6D88",
    "uni-popup.ok": "\u786E\u5B9A",
    "uni-popup.placeholder": "\u8BF7\u8F93\u5165",
    "uni-popup.title": "\u63D0\u793A",
    "uni-popup.shareTitle": "\u5206\u4EAB\u5230"
  };
  var zhHant = {
    "uni-popup.cancel": "\u53D6\u6D88",
    "uni-popup.ok": "\u78BA\u5B9A",
    "uni-popup.placeholder": "\u8ACB\u8F38\u5165",
    "uni-popup.title": "\u63D0\u793A",
    "uni-popup.shareTitle": "\u5206\u4EAB\u5230"
  };
  var messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  var _style_0$12 = { "uni-popup-dialog": { "": { "width": 500, "borderRadius": 11, "backgroundColor": "#ffffff" } }, "uni-dialog-title": { "": { "flexDirection": "row", "justifyContent": "center", "paddingTop": 25 } }, "uni-dialog-title-text": { "": { "fontSize": 16, "fontWeight": "500" } }, "uni-dialog-content": { "": { "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "paddingTop": 20, "paddingRight": 20, "paddingBottom": 20, "paddingLeft": 20 } }, "uni-dialog-content-text": { "": { "fontSize": 14, "color": "#6C6C6C" } }, "uni-dialog-button-group": { "": { "flexDirection": "row", "borderTopColor": "#f5f5f5", "borderTopStyle": "solid", "borderTopWidth": 1 } }, "uni-dialog-button": { "": { "flex": 1, "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "height": 45 } }, "uni-border-left": { "": { "borderLeftColor": "#f0f0f0", "borderLeftStyle": "solid", "borderLeftWidth": 1 } }, "uni-dialog-button-text": { "": { "fontSize": 16, "color": "#333333" } }, "uni-button-color": { "": { "color": "#007aff" } }, "uni-dialog-input": { "": { "flex": 1, "fontSize": 14, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#eeeeee", "height": 40, "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10, "borderRadius": 5, "color": "#555555" } }, "uni-popup__success": { "": { "color": "#4cd964" } }, "uni-popup__warn": { "": { "color": "#f0ad4e" } }, "uni-popup__error": { "": { "color": "#dd524d" } }, "uni-popup__info": { "": { "color": "#909399" } } };
  var { t } = initVueI18n(messages);
  var _sfc_main$2 = {
    name: "uniPopupDialog",
    mixins: [popup],
    emits: ["confirm", "close", "other"],
    props: {
      value: {
        type: [String, Number],
        default: ""
      },
      placeholder: {
        type: [String, Number],
        default: ""
      },
      type: {
        type: String,
        default: "error"
      },
      mode: {
        type: String,
        default: "base"
      },
      title: {
        type: String,
        default: ""
      },
      content: {
        type: String,
        default: ""
      },
      beforeClose: {
        type: Boolean,
        default: false
      },
      cancelText: {
        type: String,
        default: ""
      },
      confirmText: {
        type: String,
        default: ""
      },
      otherText: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        dialogType: "error",
        focus: false,
        val: ""
      };
    },
    computed: {
      okText() {
        return this.confirmText || t("uni-popup.ok");
      },
      closeText() {
        return this.cancelText || t("uni-popup.cancel");
      },
      placeholderText() {
        return this.placeholder || t("uni-popup.placeholder");
      },
      titleText() {
        return this.title || t("uni-popup.title");
      }
    },
    watch: {
      type(val) {
        this.dialogType = val;
      },
      mode(val) {
        if (val === "input") {
          this.dialogType = "info";
        }
      },
      value(val) {
        this.val = val;
      }
    },
    created() {
      this.popup.disableMask();
      if (this.mode === "input") {
        this.dialogType = "info";
        this.val = this.value;
      } else {
        this.dialogType = this.type;
      }
    },
    mounted() {
      this.focus = true;
    },
    methods: {
      /**
       * 点击确认按钮
       */
      onOk() {
        if (this.mode === "input") {
          this.$emit("confirm", this.val);
        } else {
          this.$emit("confirm");
        }
        if (this.beforeClose)
          return;
        this.popup.close();
      },
      /**
       * 点击取消按钮
       */
      closeDialog() {
        this.$emit("close");
        if (this.beforeClose)
          return;
        this.popup.close();
      },
      onOther() {
        if (this.mode === "input") {
          this.$emit("other", this.val);
        } else {
          this.$emit("other");
        }
        if (this.beforeClose)
          return;
        this.popup.close();
      },
      close() {
        this.popup.close();
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
      class: "uni-popup-dialog",
      renderWhole: true
    }, [
      (0, import_vue6.createElementVNode)("view", { class: "uni-dialog-title" }, [
        (0, import_vue6.createElementVNode)(
          "u-text",
          {
            class: (0, import_vue6.normalizeClass)(["uni-dialog-title-text", ["uni-popup__" + $data.dialogType]])
          },
          (0, import_vue6.toDisplayString)($options.titleText),
          3
          /* TEXT, CLASS */
        )
      ]),
      $props.mode === "base" ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
        key: 0,
        class: "uni-dialog-content"
      }, [
        (0, import_vue6.renderSlot)(_ctx.$slots, "default", {}, () => [
          (0, import_vue6.createElementVNode)(
            "u-text",
            { class: "uni-dialog-content-text" },
            (0, import_vue6.toDisplayString)($props.content),
            1
            /* TEXT */
          )
        ])
      ])) : ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
        key: 1,
        class: "uni-dialog-content"
      }, [
        (0, import_vue6.renderSlot)(_ctx.$slots, "default", {}, () => [
          (0, import_vue6.createElementVNode)("u-input", {
            class: "uni-dialog-input",
            modelValue: $data.val,
            onInput: _cache[0] || (_cache[0] = ($event) => $data.val = $event.detail.value),
            type: "text",
            placeholder: $options.placeholderText,
            focus: $data.focus
          }, null, 40, ["modelValue", "placeholder", "focus"])
        ])
      ])),
      (0, import_vue6.createElementVNode)("view", { class: "uni-dialog-button-group" }, [
        (0, import_vue6.createElementVNode)("view", {
          class: "uni-dialog-button",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.closeDialog && $options.closeDialog(...args))
        }, [
          (0, import_vue6.createElementVNode)(
            "u-text",
            { class: "uni-dialog-button-text" },
            (0, import_vue6.toDisplayString)($options.closeText),
            1
            /* TEXT */
          )
        ]),
        (0, import_vue6.createElementVNode)("view", {
          class: "uni-dialog-button uni-border-left",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.onOk && $options.onOk(...args))
        }, [
          (0, import_vue6.createElementVNode)(
            "u-text",
            { class: "uni-dialog-button-text uni-button-color" },
            (0, import_vue6.toDisplayString)($options.okText),
            1
            /* TEXT */
          )
        ]),
        $props.otherText ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
          key: 0,
          class: "uni-dialog-button uni-border-left",
          onClick: _cache[3] || (_cache[3] = (...args) => $options.onOther && $options.onOther(...args))
        }, [
          (0, import_vue6.createElementVNode)(
            "u-text",
            { class: "uni-dialog-button-text uni-popup__error" },
            (0, import_vue6.toDisplayString)($props.otherText),
            1
            /* TEXT */
          )
        ])) : (0, import_vue6.createCommentVNode)("v-if", true)
      ])
    ]);
  }
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$12]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.vue"]]);
  var nvueAnimation = requireNativePlugin("animation");
  var MPAnimation = class {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation(options);
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config = {}) {
      let ref = this.$.$refs["ani"].ref;
      if (!ref)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref, __spreadValues({
          styles
        }, config), (res) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config
        } = obj;
        this._animateRun(styles, config).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === "function" && fn();
        this.isEnd = true;
      }
    }
    step(config = {}) {
      this.currentStepAnimates[this.next].config = Object.assign({}, this.options, config);
      this.currentStepAnimates[this.next].styles.transformOrigin = this.currentStepAnimates[this.next].config.transformOrigin;
      this.next++;
      return this;
    }
    run(fn) {
      this.isEnd = false;
      let ref = this.$.$refs["ani"] && this.$.$refs["ani"].ref;
      if (!ref)
        return;
      this._nvueNextAnimate(this.currentStepAnimates, 0, fn);
      this.next = 0;
    }
  };
  var animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  var animateTypes2 = ["opacity", "backgroundColor"];
  var animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this._nvuePushAnimates(type, args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  var _sfc_main$12 = {
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: [Array, String],
        default() {
          return "fade";
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      },
      customClass: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      // 生成样式数据
      stylesObject() {
        let styles = __spreadProps(__spreadValues({}, this.styles), {
          "transition-duration": this.duration / 1e3 + "s"
        });
        let transform = "";
        for (let i in styles) {
          let line = this.toLine(i);
          transform += line + ":" + styles[i] + ";";
        }
        return transform;
      },
      // 初始化动画条件
      transformStyles() {
        return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: "ease",
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      /**
       *  ref 触发 初始化动画
       */
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      /**
       * 点击组件触发回调
       */
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      /**
       * ref 触发 动画分组
       * @param {Object} obj
       */
      step(obj, config = {}) {
        if (!this.animation)
          return;
        for (let i in obj) {
          try {
            if (typeof obj[i] === "object") {
              this.animation[i](...obj[i]);
            } else {
              this.animation[i](obj[i]);
            }
          } catch (e) {
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:139", `\u65B9\u6CD5 ${i} \u4E0D\u5B58\u5728`);
          }
        }
        this.animation.step(config);
        return this;
      },
      /**
       *  ref 触发 执行动画
       */
      run(fn) {
        if (!this.animation)
          return;
        this.animation.run(fn);
      },
      // 开始过度动画
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run();
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      // 关闭过度动画
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      // 处理动画开始前的默认样式
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode) => {
          if (mode === "fade") {
            styles.opacity = this.animationType(type2)[mode];
          } else {
            styles.transform += this.animationType(type2)[mode] + " ";
          }
        };
        if (typeof this.modeClass === "string") {
          buildStyle(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildStyle(type, mode);
          });
        }
        return styles;
      },
      // 处理内置组合动画
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.modeClass === "string") {
          buildTranfrom(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 1 : 0,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      // 内置动画类型与实际动画对应字典
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      // 驼峰转中横线
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$12(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.isShow ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
      key: 0,
      ref: "ani",
      animation: $data.animationData,
      class: (0, import_vue6.normalizeClass)($props.customClass),
      style: (0, import_vue6.normalizeStyle)($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args)),
      renderWhole: true
    }, [
      (0, import_vue6.renderSlot)(_ctx.$slots, "default")
    ], 14, ["animation"])) : (0, import_vue6.createCommentVNode)("v-if", true);
  }
  var __easycom_02 = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["render", _sfc_render$12], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
  var _style_05 = { "uni-popup": { "": { "position": "fixed" }, ".top": { "top": 0 }, ".left": { "top": 0 }, ".right": { "top": 0 } }, "uni-popup__wrapper": { ".uni-popup ": { "position": "relative" }, ".uni-popup .left": { "paddingTop": 0, "flex": 1 }, ".uni-popup .right": { "paddingTop": 0, "flex": 1 } }, "fixforpc-top": { "": { "top": 0 } } };
  var _sfc_main5 = {
    name: "uniPopup",
    components: {},
    emits: ["change", "maskClick"],
    props: {
      // 开启动画
      animation: {
        type: Boolean,
        default: true
      },
      // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
      // message: 消息提示 ; dialog : 对话框
      type: {
        type: String,
        default: "center"
      },
      // maskClick
      isMaskClick: {
        type: Boolean,
        default: null
      },
      // TODO 2 个版本后废弃属性 ，使用 isMaskClick
      maskClick: {
        type: Boolean,
        default: null
      },
      backgroundColor: {
        type: String,
        default: "none"
      },
      safeArea: {
        type: Boolean,
        default: true
      },
      maskBackgroundColor: {
        type: String,
        default: "rgba(0, 0, 0, 0.4)"
      }
    },
    watch: {
      /**
       * 监听type类型
       */
      type: {
        handler: function(type) {
          if (!this.config[type])
            return;
          this[this.config[type]](true);
        },
        immediate: true
      },
      isDesktop: {
        handler: function(newVal) {
          if (!this.config[newVal])
            return;
          this[this.config[this.type]](true);
        },
        immediate: true
      },
      /**
       * 监听遮罩是否可点击
       * @param {Object} val
       */
      maskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      isMaskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      // H5 下禁止底部滚动
      showPopup(show) {
      }
    },
    data() {
      return {
        duration: 300,
        ani: [],
        showPopup: false,
        showTrans: false,
        popupWidth: 0,
        popupHeight: 0,
        config: {
          top: "top",
          bottom: "bottom",
          center: "center",
          left: "left",
          right: "right",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        maskClass: {
          position: "fixed",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        },
        transClass: {
          position: "fixed",
          left: 0,
          right: 0
        },
        maskShow: true,
        mkclick: true,
        popupstyle: this.isDesktop ? "fixforpc-top" : "top"
      };
    },
    computed: {
      isDesktop() {
        return this.popupWidth >= 500 && this.popupHeight >= 500;
      },
      bg() {
        if (this.backgroundColor === "" || this.backgroundColor === "none") {
          return "transparent";
        }
        return this.backgroundColor;
      }
    },
    mounted() {
      const fixSize = () => {
        const {
          windowWidth,
          windowHeight,
          windowTop,
          safeArea,
          screenHeight,
          safeAreaInsets
        } = uni.getSystemInfoSync();
        this.popupWidth = windowWidth;
        this.popupHeight = windowHeight + (windowTop || 0);
        if (safeArea && this.safeArea) {
          this.safeAreaInsets = safeAreaInsets.bottom;
        } else {
          this.safeAreaInsets = 0;
        }
      };
      fixSize();
    },
    // TODO vue3
    unmounted() {
      this.setH5Visible();
    },
    created() {
      if (this.isMaskClick === null && this.maskClick === null) {
        this.mkclick = true;
      } else {
        this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;
      }
      if (this.animation) {
        this.duration = 300;
      } else {
        this.duration = 0;
      }
      this.messageChild = null;
      this.clearPropagation = false;
      this.maskClass.backgroundColor = this.maskBackgroundColor;
    },
    methods: {
      setH5Visible() {
      },
      /**
       * 公用方法，不显示遮罩层
       */
      closeMask() {
        this.maskShow = false;
      },
      /**
       * 公用方法，遮罩层禁止点击
       */
      disableMask() {
        this.mkclick = false;
      },
      // TODO nvue 取消冒泡
      clear(e) {
      },
      open(direction) {
        if (this.showPopup) {
          clearTimeout(this.timer);
          this.showPopup = false;
        }
        let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
        if (!(direction && innerType.indexOf(direction) !== -1)) {
          direction = this.type;
        }
        if (!this.config[direction]) {
          formatAppLog("error", "at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:280", "\u7F3A\u5C11\u7C7B\u578B\uFF1A", direction);
          return;
        }
        this[this.config[direction]]();
        this.$emit("change", {
          show: true,
          type: direction
        });
      },
      close(type) {
        this.showTrans = false;
        this.$emit("change", {
          show: false,
          type: this.type
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopup = false;
        }, 300);
      },
      // TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容
      touchstart() {
        this.clearPropagation = false;
      },
      onTap() {
        if (this.clearPropagation) {
          this.clearPropagation = false;
          return;
        }
        this.$emit("maskClick");
        if (!this.mkclick)
          return;
        this.close();
      },
      /**
       * 顶部弹出样式处理
       */
      top(type) {
        this.popupstyle = this.isDesktop ? "fixforpc-top" : "top";
        this.ani = ["slide-top"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
        this.$nextTick(() => {
          if (this.messageChild && this.type === "message") {
            this.messageChild.timerClose();
          }
        });
      },
      /**
       * 底部弹出样式处理
       */
      bottom(type) {
        this.popupstyle = "bottom";
        this.ani = ["slide-bottom"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          paddingBottom: this.safeAreaInsets + "px",
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      /**
       * 中间弹出样式处理
       */
      center(type) {
        this.popupstyle = "center";
        this.ani = ["zoom-out", "fade"];
        this.transClass = {
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      left(type) {
        this.popupstyle = "left";
        this.ani = ["slide-left"];
        this.transClass = {
          position: "fixed",
          left: 0,
          bottom: 0,
          top: 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      right(type) {
        this.popupstyle = "right";
        this.ani = ["slide-right"];
        this.transClass = {
          position: "fixed",
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      }
    }
  };
  function _sfc_render5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom((0, import_vue6.resolveDynamicComponent)("uni-transition"), __easycom_02);
    return $data.showPopup ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
      "view",
      {
        key: 0,
        class: (0, import_vue6.normalizeClass)(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]]),
        renderWhole: true
      },
      [
        (0, import_vue6.createElementVNode)(
          "view",
          {
            onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
          },
          [
            $data.maskShow ? ((0, import_vue6.openBlock)(), (0, import_vue6.createBlock)(_component_uni_transition, {
              key: "1",
              name: "mask",
              "mode-class": "fade",
              styles: $data.maskClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, null, 8, ["styles", "duration", "show", "onClick"])) : (0, import_vue6.createCommentVNode)("v-if", true),
            (0, import_vue6.createVNode)(_component_uni_transition, {
              key: "2",
              "mode-class": $data.ani,
              name: "content",
              styles: $data.transClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, {
              default: (0, import_vue6.withCtx)(() => [
                (0, import_vue6.createElementVNode)(
                  "view",
                  {
                    class: (0, import_vue6.normalizeClass)(["uni-popup__wrapper", [$data.popupstyle]]),
                    style: (0, import_vue6.normalizeStyle)({ backgroundColor: $options.bg }),
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
                  },
                  [
                    (0, import_vue6.renderSlot)(_ctx.$slots, "default")
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["mode-class", "styles", "duration", "show", "onClick"])
          ],
          32
          /* NEED_HYDRATION */
        )
      ],
      2
      /* CLASS */
    )) : (0, import_vue6.createCommentVNode)("v-if", true);
  }
  var __easycom_32 = /* @__PURE__ */ _export_sfc(_sfc_main5, [["render", _sfc_render5], ["styles", [_style_05]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/uni_modules/uni-popup/components/uni-popup/uni-popup.vue"]]);

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/http.js
  var import_vue7 = __toESM(require_vue());
  var hookCallback;
  function hooks() {
    return hookCallback.apply(null, arguments);
  }
  function setHookCallback(callback) {
    hookCallback = callback;
  }
  function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
  }
  function isObject2(input) {
    return input != null && Object.prototype.toString.call(input) === "[object Object]";
  }
  function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
      return Object.getOwnPropertyNames(obj).length === 0;
    } else {
      var k;
      for (k in obj) {
        if (hasOwnProp(obj, k)) {
          return false;
        }
      }
      return true;
    }
  }
  function isUndefined(input) {
    return input === void 0;
  }
  function isNumber2(input) {
    return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
  }
  function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
  }
  function map(arr, fn) {
    var res = [], i, arrLen = arr.length;
    for (i = 0; i < arrLen; ++i) {
      res.push(fn(arr[i], i));
    }
    return res;
  }
  function extend(a, b) {
    for (var i in b) {
      if (hasOwnProp(b, i)) {
        a[i] = b[i];
      }
    }
    if (hasOwnProp(b, "toString")) {
      a.toString = b.toString;
    }
    if (hasOwnProp(b, "valueOf")) {
      a.valueOf = b.valueOf;
    }
    return a;
  }
  function createUTC(input, format2, locale2, strict) {
    return createLocalOrUTC(input, format2, locale2, strict, true).utc();
  }
  function defaultParsingFlags() {
    return {
      empty: false,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: false,
      invalidEra: null,
      invalidMonth: null,
      invalidFormat: false,
      userInvalidated: false,
      iso: false,
      parsedDateParts: [],
      era: null,
      meridiem: null,
      rfc2822: false,
      weekdayMismatch: false
    };
  }
  function getParsingFlags(m) {
    if (m._pf == null) {
      m._pf = defaultParsingFlags();
    }
    return m._pf;
  }
  var some;
  if (Array.prototype.some) {
    some = Array.prototype.some;
  } else {
    some = function(fun) {
      var t2 = Object(this), len = t2.length >>> 0, i;
      for (i = 0; i < len; i++) {
        if (i in t2 && fun.call(this, t2[i], i, t2)) {
          return true;
        }
      }
      return false;
    };
  }
  function isValid(m) {
    var flags = null, parsedParts = false, isNowValid = m._d && !isNaN(m._d.getTime());
    if (isNowValid) {
      flags = getParsingFlags(m);
      parsedParts = some.call(flags.parsedDateParts, function(i) {
        return i != null;
      });
      isNowValid = flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
      if (m._strict) {
        isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
      }
    }
    if (Object.isFrozen == null || !Object.isFrozen(m)) {
      m._isValid = isNowValid;
    } else {
      return isNowValid;
    }
    return m._isValid;
  }
  function createInvalid(flags) {
    var m = createUTC(NaN);
    if (flags != null) {
      extend(getParsingFlags(m), flags);
    } else {
      getParsingFlags(m).userInvalidated = true;
    }
    return m;
  }
  var momentProperties = hooks.momentProperties = [];
  var updateInProgress = false;
  function copyConfig(to2, from2) {
    var i, prop, val, momentPropertiesLen = momentProperties.length;
    if (!isUndefined(from2._isAMomentObject)) {
      to2._isAMomentObject = from2._isAMomentObject;
    }
    if (!isUndefined(from2._i)) {
      to2._i = from2._i;
    }
    if (!isUndefined(from2._f)) {
      to2._f = from2._f;
    }
    if (!isUndefined(from2._l)) {
      to2._l = from2._l;
    }
    if (!isUndefined(from2._strict)) {
      to2._strict = from2._strict;
    }
    if (!isUndefined(from2._tzm)) {
      to2._tzm = from2._tzm;
    }
    if (!isUndefined(from2._isUTC)) {
      to2._isUTC = from2._isUTC;
    }
    if (!isUndefined(from2._offset)) {
      to2._offset = from2._offset;
    }
    if (!isUndefined(from2._pf)) {
      to2._pf = getParsingFlags(from2);
    }
    if (!isUndefined(from2._locale)) {
      to2._locale = from2._locale;
    }
    if (momentPropertiesLen > 0) {
      for (i = 0; i < momentPropertiesLen; i++) {
        prop = momentProperties[i];
        val = from2[prop];
        if (!isUndefined(val)) {
          to2[prop] = val;
        }
      }
    }
    return to2;
  }
  function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
      this._d = /* @__PURE__ */ new Date(NaN);
    }
    if (updateInProgress === false) {
      updateInProgress = true;
      hooks.updateOffset(this);
      updateInProgress = false;
    }
  }
  function isMoment(obj) {
    return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
  }
  function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
      formatAppLog("warn", "at node_modules/moment/dist/moment.js:281", "Deprecation warning: " + msg);
    }
  }
  function deprecate(msg, fn) {
    var firstTime = true;
    return extend(function() {
      if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(null, msg);
      }
      if (firstTime) {
        var args = [], arg, i, key, argLen = arguments.length;
        for (i = 0; i < argLen; i++) {
          arg = "";
          if (typeof arguments[i] === "object") {
            arg += "\n[" + i + "] ";
            for (key in arguments[0]) {
              if (hasOwnProp(arguments[0], key)) {
                arg += key + ": " + arguments[0][key] + ", ";
              }
            }
            arg = arg.slice(0, -2);
          } else {
            arg = arguments[i];
          }
          args.push(arg);
        }
        warn(
          msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack
        );
        firstTime = false;
      }
      return fn.apply(this, arguments);
    }, fn);
  }
  var deprecations = {};
  function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
      hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
      warn(msg);
      deprecations[name] = true;
    }
  }
  hooks.suppressDeprecationWarnings = false;
  hooks.deprecationHandler = null;
  function isFunction(input) {
    return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
  }
  function set(config) {
    var prop, i;
    for (i in config) {
      if (hasOwnProp(config, i)) {
        prop = config[i];
        if (isFunction(prop)) {
          this[i] = prop;
        } else {
          this["_" + i] = prop;
        }
      }
    }
    this._config = config;
    this._dayOfMonthOrdinalParseLenient = new RegExp(
      (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
    );
  }
  function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
      if (hasOwnProp(childConfig, prop)) {
        if (isObject2(parentConfig[prop]) && isObject2(childConfig[prop])) {
          res[prop] = {};
          extend(res[prop], parentConfig[prop]);
          extend(res[prop], childConfig[prop]);
        } else if (childConfig[prop] != null) {
          res[prop] = childConfig[prop];
        } else {
          delete res[prop];
        }
      }
    }
    for (prop in parentConfig) {
      if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject2(parentConfig[prop])) {
        res[prop] = extend({}, res[prop]);
      }
    }
    return res;
  }
  function Locale(config) {
    if (config != null) {
      this.set(config);
    }
  }
  var keys;
  if (Object.keys) {
    keys = Object.keys;
  } else {
    keys = function(obj) {
      var i, res = [];
      for (i in obj) {
        if (hasOwnProp(obj, i)) {
          res.push(i);
        }
      }
      return res;
    };
  }
  var defaultCalendar = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L"
  };
  function calendar(key, mom, now2) {
    var output = this._calendar[key] || this._calendar["sameElse"];
    return isFunction(output) ? output.call(mom, now2) : output;
  }
  function zeroFill(number2, targetLength, forceSign) {
    var absNumber = "" + Math.abs(number2), zerosToFill = targetLength - absNumber.length, sign2 = number2 >= 0;
    return (sign2 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
  }
  var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
  var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
  var formatFunctions = {};
  var formatTokenFunctions = {};
  function addFormatToken(token2, padded, ordinal2, callback) {
    var func2 = callback;
    if (typeof callback === "string") {
      func2 = function() {
        return this[callback]();
      };
    }
    if (token2) {
      formatTokenFunctions[token2] = func2;
    }
    if (padded) {
      formatTokenFunctions[padded[0]] = function() {
        return zeroFill(func2.apply(this, arguments), padded[1], padded[2]);
      };
    }
    if (ordinal2) {
      formatTokenFunctions[ordinal2] = function() {
        return this.localeData().ordinal(
          func2.apply(this, arguments),
          token2
        );
      };
    }
  }
  function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
      return input.replace(/^\[|\]$/g, "");
    }
    return input.replace(/\\/g, "");
  }
  function makeFormatFunction(format2) {
    var array2 = format2.match(formattingTokens), i, length;
    for (i = 0, length = array2.length; i < length; i++) {
      if (formatTokenFunctions[array2[i]]) {
        array2[i] = formatTokenFunctions[array2[i]];
      } else {
        array2[i] = removeFormattingTokens(array2[i]);
      }
    }
    return function(mom) {
      var output = "", i2;
      for (i2 = 0; i2 < length; i2++) {
        output += isFunction(array2[i2]) ? array2[i2].call(mom, format2) : array2[i2];
      }
      return output;
    };
  }
  function formatMoment(m, format2) {
    if (!m.isValid()) {
      return m.localeData().invalidDate();
    }
    format2 = expandFormat(format2, m.localeData());
    formatFunctions[format2] = formatFunctions[format2] || makeFormatFunction(format2);
    return formatFunctions[format2](m);
  }
  function expandFormat(format2, locale2) {
    var i = 5;
    function replaceLongDateFormatTokens(input) {
      return locale2.longDateFormat(input) || input;
    }
    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format2)) {
      format2 = format2.replace(
        localFormattingTokens,
        replaceLongDateFormatTokens
      );
      localFormattingTokens.lastIndex = 0;
      i -= 1;
    }
    return format2;
  }
  var defaultLongDateFormat = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A"
  };
  function longDateFormat(key) {
    var format2 = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
    if (format2 || !formatUpper) {
      return format2;
    }
    this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
      if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
        return tok.slice(1);
      }
      return tok;
    }).join("");
    return this._longDateFormat[key];
  }
  var defaultInvalidDate = "Invalid date";
  function invalidDate() {
    return this._invalidDate;
  }
  var defaultOrdinal = "%d";
  var defaultDayOfMonthOrdinalParse = /\d{1,2}/;
  function ordinal(number2) {
    return this._ordinal.replace("%d", number2);
  }
  var defaultRelativeTime = {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    w: "a week",
    ww: "%d weeks",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
  };
  function relativeTime(number2, withoutSuffix, string2, isFuture) {
    var output = this._relativeTime[string2];
    return isFunction(output) ? output(number2, withoutSuffix, string2, isFuture) : output.replace(/%d/i, number2);
  }
  function pastFuture(diff2, output) {
    var format2 = this._relativeTime[diff2 > 0 ? "future" : "past"];
    return isFunction(format2) ? format2(output) : format2.replace(/%s/i, output);
  }
  var aliases = {
    D: "date",
    dates: "date",
    date: "date",
    d: "day",
    days: "day",
    day: "day",
    e: "weekday",
    weekdays: "weekday",
    weekday: "weekday",
    E: "isoWeekday",
    isoweekdays: "isoWeekday",
    isoweekday: "isoWeekday",
    DDD: "dayOfYear",
    dayofyears: "dayOfYear",
    dayofyear: "dayOfYear",
    h: "hour",
    hours: "hour",
    hour: "hour",
    ms: "millisecond",
    milliseconds: "millisecond",
    millisecond: "millisecond",
    m: "minute",
    minutes: "minute",
    minute: "minute",
    M: "month",
    months: "month",
    month: "month",
    Q: "quarter",
    quarters: "quarter",
    quarter: "quarter",
    s: "second",
    seconds: "second",
    second: "second",
    gg: "weekYear",
    weekyears: "weekYear",
    weekyear: "weekYear",
    GG: "isoWeekYear",
    isoweekyears: "isoWeekYear",
    isoweekyear: "isoWeekYear",
    w: "week",
    weeks: "week",
    week: "week",
    W: "isoWeek",
    isoweeks: "isoWeek",
    isoweek: "isoWeek",
    y: "year",
    years: "year",
    year: "year"
  };
  function normalizeUnits(units) {
    return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : void 0;
  }
  function normalizeObjectUnits(inputObject) {
    var normalizedInput = {}, normalizedProp, prop;
    for (prop in inputObject) {
      if (hasOwnProp(inputObject, prop)) {
        normalizedProp = normalizeUnits(prop);
        if (normalizedProp) {
          normalizedInput[normalizedProp] = inputObject[prop];
        }
      }
    }
    return normalizedInput;
  }
  var priorities = {
    date: 9,
    day: 11,
    weekday: 11,
    isoWeekday: 11,
    dayOfYear: 4,
    hour: 13,
    millisecond: 16,
    minute: 14,
    month: 8,
    quarter: 7,
    second: 15,
    weekYear: 1,
    isoWeekYear: 1,
    week: 5,
    isoWeek: 5,
    year: 1
  };
  function getPrioritizedUnits(unitsObj) {
    var units = [], u;
    for (u in unitsObj) {
      if (hasOwnProp(unitsObj, u)) {
        units.push({ unit: u, priority: priorities[u] });
      }
    }
    units.sort(function(a, b) {
      return a.priority - b.priority;
    });
    return units;
  }
  var match1 = /\d/;
  var match2 = /\d\d/;
  var match3 = /\d{3}/;
  var match4 = /\d{4}/;
  var match6 = /[+-]?\d{6}/;
  var match1to2 = /\d\d?/;
  var match3to4 = /\d\d\d\d?/;
  var match5to6 = /\d\d\d\d\d\d?/;
  var match1to3 = /\d{1,3}/;
  var match1to4 = /\d{1,4}/;
  var match1to6 = /[+-]?\d{1,6}/;
  var matchUnsigned = /\d+/;
  var matchSigned = /[+-]?\d+/;
  var matchOffset = /Z|[+-]\d\d:?\d\d/gi;
  var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi;
  var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/;
  var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
  var match1to2NoLeadingZero = /^[1-9]\d?/;
  var match1to2HasZero = /^([1-9]\d|\d)/;
  var regexes;
  regexes = {};
  function addRegexToken(token2, regex, strictRegex) {
    regexes[token2] = isFunction(regex) ? regex : function(isStrict, localeData2) {
      return isStrict && strictRegex ? strictRegex : regex;
    };
  }
  function getParseRegexForToken(token2, config) {
    if (!hasOwnProp(regexes, token2)) {
      return new RegExp(unescapeFormat(token2));
    }
    return regexes[token2](config._strict, config._locale);
  }
  function unescapeFormat(s) {
    return regexEscape(
      s.replace("\\", "").replace(
        /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
        function(matched, p1, p2, p3, p4) {
          return p1 || p2 || p3 || p4;
        }
      )
    );
  }
  function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  function absFloor(number2) {
    if (number2 < 0) {
      return Math.ceil(number2) || 0;
    } else {
      return Math.floor(number2);
    }
  }
  function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion, value = 0;
    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
      value = absFloor(coercedNumber);
    }
    return value;
  }
  var tokens = {};
  function addParseToken(token2, callback) {
    var i, func2 = callback, tokenLen;
    if (typeof token2 === "string") {
      token2 = [token2];
    }
    if (isNumber2(callback)) {
      func2 = function(input, array2) {
        array2[callback] = toInt(input);
      };
    }
    tokenLen = token2.length;
    for (i = 0; i < tokenLen; i++) {
      tokens[token2[i]] = func2;
    }
  }
  function addWeekParseToken(token2, callback) {
    addParseToken(token2, function(input, array2, config, token3) {
      config._w = config._w || {};
      callback(input, config._w, config, token3);
    });
  }
  function addTimeToArrayFromToken(token2, input, config) {
    if (input != null && hasOwnProp(tokens, token2)) {
      tokens[token2](input, config._a, config, token2);
    }
  }
  function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
  }
  var YEAR = 0;
  var MONTH = 1;
  var DATE = 2;
  var HOUR = 3;
  var MINUTE = 4;
  var SECOND = 5;
  var MILLISECOND = 6;
  var WEEK = 7;
  var WEEKDAY = 8;
  addFormatToken("Y", 0, 0, function() {
    var y = this.year();
    return y <= 9999 ? zeroFill(y, 4) : "+" + y;
  });
  addFormatToken(0, ["YY", 2], 0, function() {
    return this.year() % 100;
  });
  addFormatToken(0, ["YYYY", 4], 0, "year");
  addFormatToken(0, ["YYYYY", 5], 0, "year");
  addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
  addRegexToken("Y", matchSigned);
  addRegexToken("YY", match1to2, match2);
  addRegexToken("YYYY", match1to4, match4);
  addRegexToken("YYYYY", match1to6, match6);
  addRegexToken("YYYYYY", match1to6, match6);
  addParseToken(["YYYYY", "YYYYYY"], YEAR);
  addParseToken("YYYY", function(input, array2) {
    array2[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
  });
  addParseToken("YY", function(input, array2) {
    array2[YEAR] = hooks.parseTwoDigitYear(input);
  });
  addParseToken("Y", function(input, array2) {
    array2[YEAR] = parseInt(input, 10);
  });
  function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
  }
  hooks.parseTwoDigitYear = function(input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
  };
  var getSetYear = makeGetSet("FullYear", true);
  function getIsLeapYear() {
    return isLeapYear(this.year());
  }
  function makeGetSet(unit, keepTime) {
    return function(value) {
      if (value != null) {
        set$1(this, unit, value);
        hooks.updateOffset(this, keepTime);
        return this;
      } else {
        return get(this, unit);
      }
    };
  }
  function get(mom, unit) {
    if (!mom.isValid()) {
      return NaN;
    }
    var d = mom._d, isUTC = mom._isUTC;
    switch (unit) {
      case "Milliseconds":
        return isUTC ? d.getUTCMilliseconds() : d.getMilliseconds();
      case "Seconds":
        return isUTC ? d.getUTCSeconds() : d.getSeconds();
      case "Minutes":
        return isUTC ? d.getUTCMinutes() : d.getMinutes();
      case "Hours":
        return isUTC ? d.getUTCHours() : d.getHours();
      case "Date":
        return isUTC ? d.getUTCDate() : d.getDate();
      case "Day":
        return isUTC ? d.getUTCDay() : d.getDay();
      case "Month":
        return isUTC ? d.getUTCMonth() : d.getMonth();
      case "FullYear":
        return isUTC ? d.getUTCFullYear() : d.getFullYear();
      default:
        return NaN;
    }
  }
  function set$1(mom, unit, value) {
    var d, isUTC, year, month, date2;
    if (!mom.isValid() || isNaN(value)) {
      return;
    }
    d = mom._d;
    isUTC = mom._isUTC;
    switch (unit) {
      case "Milliseconds":
        return void (isUTC ? d.setUTCMilliseconds(value) : d.setMilliseconds(value));
      case "Seconds":
        return void (isUTC ? d.setUTCSeconds(value) : d.setSeconds(value));
      case "Minutes":
        return void (isUTC ? d.setUTCMinutes(value) : d.setMinutes(value));
      case "Hours":
        return void (isUTC ? d.setUTCHours(value) : d.setHours(value));
      case "Date":
        return void (isUTC ? d.setUTCDate(value) : d.setDate(value));
      case "FullYear":
        break;
      default:
        return;
    }
    year = value;
    month = mom.month();
    date2 = mom.date();
    date2 = date2 === 29 && month === 1 && !isLeapYear(year) ? 28 : date2;
    void (isUTC ? d.setUTCFullYear(year, month, date2) : d.setFullYear(year, month, date2));
  }
  function stringGet(units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
      return this[units]();
    }
    return this;
  }
  function stringSet(units, value) {
    if (typeof units === "object") {
      units = normalizeObjectUnits(units);
      var prioritized = getPrioritizedUnits(units), i, prioritizedLen = prioritized.length;
      for (i = 0; i < prioritizedLen; i++) {
        this[prioritized[i].unit](units[prioritized[i].unit]);
      }
    } else {
      units = normalizeUnits(units);
      if (isFunction(this[units])) {
        return this[units](value);
      }
    }
    return this;
  }
  function mod(n, x) {
    return (n % x + x) % x;
  }
  var indexOf;
  if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
  } else {
    indexOf = function(o) {
      var i;
      for (i = 0; i < this.length; ++i) {
        if (this[i] === o) {
          return i;
        }
      }
      return -1;
    };
  }
  function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
      return NaN;
    }
    var modMonth = mod(month, 12);
    year += (month - modMonth) / 12;
    return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
  }
  addFormatToken("M", ["MM", 2], "Mo", function() {
    return this.month() + 1;
  });
  addFormatToken("MMM", 0, 0, function(format2) {
    return this.localeData().monthsShort(this, format2);
  });
  addFormatToken("MMMM", 0, 0, function(format2) {
    return this.localeData().months(this, format2);
  });
  addRegexToken("M", match1to2, match1to2NoLeadingZero);
  addRegexToken("MM", match1to2, match2);
  addRegexToken("MMM", function(isStrict, locale2) {
    return locale2.monthsShortRegex(isStrict);
  });
  addRegexToken("MMMM", function(isStrict, locale2) {
    return locale2.monthsRegex(isStrict);
  });
  addParseToken(["M", "MM"], function(input, array2) {
    array2[MONTH] = toInt(input) - 1;
  });
  addParseToken(["MMM", "MMMM"], function(input, array2, config, token2) {
    var month = config._locale.monthsParse(input, token2, config._strict);
    if (month != null) {
      array2[MONTH] = month;
    } else {
      getParsingFlags(config).invalidMonth = input;
    }
  });
  var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split(
    "_"
  );
  var defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
  var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
  var defaultMonthsShortRegex = matchWord;
  var defaultMonthsRegex = matchWord;
  function localeMonths(m, format2) {
    if (!m) {
      return isArray(this._months) ? this._months : this._months["standalone"];
    }
    return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format2) ? "format" : "standalone"][m.month()];
  }
  function localeMonthsShort(m, format2) {
    if (!m) {
      return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format2) ? "format" : "standalone"][m.month()];
  }
  function handleStrictParse(monthName, format2, strict) {
    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
      for (i = 0; i < 12; ++i) {
        mom = createUTC([2e3, i]);
        this._shortMonthsParse[i] = this.monthsShort(
          mom,
          ""
        ).toLocaleLowerCase();
        this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
      }
    }
    if (strict) {
      if (format2 === "MMM") {
        ii = indexOf.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._longMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format2 === "MMM") {
        ii = indexOf.call(this._shortMonthsParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._longMonthsParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._longMonthsParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
    }
  }
  function localeMonthsParse(monthName, format2, strict) {
    var i, mom, regex;
    if (this._monthsParseExact) {
      return handleStrictParse.call(this, monthName, format2, strict);
    }
    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
    }
    for (i = 0; i < 12; i++) {
      mom = createUTC([2e3, i]);
      if (strict && !this._longMonthsParse[i]) {
        this._longMonthsParse[i] = new RegExp(
          "^" + this.months(mom, "").replace(".", "") + "$",
          "i"
        );
        this._shortMonthsParse[i] = new RegExp(
          "^" + this.monthsShort(mom, "").replace(".", "") + "$",
          "i"
        );
      }
      if (!strict && !this._monthsParse[i]) {
        regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
        this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
      }
      if (strict && format2 === "MMMM" && this._longMonthsParse[i].test(monthName)) {
        return i;
      } else if (strict && format2 === "MMM" && this._shortMonthsParse[i].test(monthName)) {
        return i;
      } else if (!strict && this._monthsParse[i].test(monthName)) {
        return i;
      }
    }
  }
  function setMonth(mom, value) {
    if (!mom.isValid()) {
      return mom;
    }
    if (typeof value === "string") {
      if (/^\d+$/.test(value)) {
        value = toInt(value);
      } else {
        value = mom.localeData().monthsParse(value);
        if (!isNumber2(value)) {
          return mom;
        }
      }
    }
    var month = value, date2 = mom.date();
    date2 = date2 < 29 ? date2 : Math.min(date2, daysInMonth(mom.year(), month));
    void (mom._isUTC ? mom._d.setUTCMonth(month, date2) : mom._d.setMonth(month, date2));
    return mom;
  }
  function getSetMonth(value) {
    if (value != null) {
      setMonth(this, value);
      hooks.updateOffset(this, true);
      return this;
    } else {
      return get(this, "Month");
    }
  }
  function getDaysInMonth() {
    return daysInMonth(this.year(), this.month());
  }
  function monthsShortRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, "_monthsRegex")) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsShortStrictRegex;
      } else {
        return this._monthsShortRegex;
      }
    } else {
      if (!hasOwnProp(this, "_monthsShortRegex")) {
        this._monthsShortRegex = defaultMonthsShortRegex;
      }
      return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
    }
  }
  function monthsRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, "_monthsRegex")) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsStrictRegex;
      } else {
        return this._monthsRegex;
      }
    } else {
      if (!hasOwnProp(this, "_monthsRegex")) {
        this._monthsRegex = defaultMonthsRegex;
      }
      return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
    }
  }
  function computeMonthsParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }
    var shortPieces = [], longPieces = [], mixedPieces = [], i, mom, shortP, longP;
    for (i = 0; i < 12; i++) {
      mom = createUTC([2e3, i]);
      shortP = regexEscape(this.monthsShort(mom, ""));
      longP = regexEscape(this.months(mom, ""));
      shortPieces.push(shortP);
      longPieces.push(longP);
      mixedPieces.push(longP);
      mixedPieces.push(shortP);
    }
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp(
      "^(" + longPieces.join("|") + ")",
      "i"
    );
    this._monthsShortStrictRegex = new RegExp(
      "^(" + shortPieces.join("|") + ")",
      "i"
    );
  }
  function createDate(y, m, d, h, M, s, ms) {
    var date2;
    if (y < 100 && y >= 0) {
      date2 = new Date(y + 400, m, d, h, M, s, ms);
      if (isFinite(date2.getFullYear())) {
        date2.setFullYear(y);
      }
    } else {
      date2 = new Date(y, m, d, h, M, s, ms);
    }
    return date2;
  }
  function createUTCDate(y) {
    var date2, args;
    if (y < 100 && y >= 0) {
      args = Array.prototype.slice.call(arguments);
      args[0] = y + 400;
      date2 = new Date(Date.UTC.apply(null, args));
      if (isFinite(date2.getUTCFullYear())) {
        date2.setUTCFullYear(y);
      }
    } else {
      date2 = new Date(Date.UTC.apply(null, arguments));
    }
    return date2;
  }
  function firstWeekOffset(year, dow, doy) {
    var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
    return -fwdlw + fwd - 1;
  }
  function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
    if (dayOfYear <= 0) {
      resYear = year - 1;
      resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
      resYear = year + 1;
      resDayOfYear = dayOfYear - daysInYear(year);
    } else {
      resYear = year;
      resDayOfYear = dayOfYear;
    }
    return {
      year: resYear,
      dayOfYear: resDayOfYear
    };
  }
  function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
    if (week < 1) {
      resYear = mom.year() - 1;
      resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
      resWeek = week - weeksInYear(mom.year(), dow, doy);
      resYear = mom.year() + 1;
    } else {
      resYear = mom.year();
      resWeek = week;
    }
    return {
      week: resWeek,
      year: resYear
    };
  }
  function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
  }
  addFormatToken("w", ["ww", 2], "wo", "week");
  addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
  addRegexToken("w", match1to2, match1to2NoLeadingZero);
  addRegexToken("ww", match1to2, match2);
  addRegexToken("W", match1to2, match1to2NoLeadingZero);
  addRegexToken("WW", match1to2, match2);
  addWeekParseToken(
    ["w", "ww", "W", "WW"],
    function(input, week, config, token2) {
      week[token2.substr(0, 1)] = toInt(input);
    }
  );
  function localeWeek(mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
  }
  var defaultLocaleWeek = {
    dow: 0,
    // Sunday is the first day of the week.
    doy: 6
    // The week that contains Jan 6th is the first week of the year.
  };
  function localeFirstDayOfWeek() {
    return this._week.dow;
  }
  function localeFirstDayOfYear() {
    return this._week.doy;
  }
  function getSetWeek(input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, "d");
  }
  function getSetISOWeek(input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, "d");
  }
  addFormatToken("d", 0, "do", "day");
  addFormatToken("dd", 0, 0, function(format2) {
    return this.localeData().weekdaysMin(this, format2);
  });
  addFormatToken("ddd", 0, 0, function(format2) {
    return this.localeData().weekdaysShort(this, format2);
  });
  addFormatToken("dddd", 0, 0, function(format2) {
    return this.localeData().weekdays(this, format2);
  });
  addFormatToken("e", 0, 0, "weekday");
  addFormatToken("E", 0, 0, "isoWeekday");
  addRegexToken("d", match1to2);
  addRegexToken("e", match1to2);
  addRegexToken("E", match1to2);
  addRegexToken("dd", function(isStrict, locale2) {
    return locale2.weekdaysMinRegex(isStrict);
  });
  addRegexToken("ddd", function(isStrict, locale2) {
    return locale2.weekdaysShortRegex(isStrict);
  });
  addRegexToken("dddd", function(isStrict, locale2) {
    return locale2.weekdaysRegex(isStrict);
  });
  addWeekParseToken(["dd", "ddd", "dddd"], function(input, week, config, token2) {
    var weekday = config._locale.weekdaysParse(input, token2, config._strict);
    if (weekday != null) {
      week.d = weekday;
    } else {
      getParsingFlags(config).invalidWeekday = input;
    }
  });
  addWeekParseToken(["d", "e", "E"], function(input, week, config, token2) {
    week[token2] = toInt(input);
  });
  function parseWeekday(input, locale2) {
    if (typeof input !== "string") {
      return input;
    }
    if (!isNaN(input)) {
      return parseInt(input, 10);
    }
    input = locale2.weekdaysParse(input);
    if (typeof input === "number") {
      return input;
    }
    return null;
  }
  function parseIsoWeekday(input, locale2) {
    if (typeof input === "string") {
      return locale2.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
  }
  function shiftWeekdays(ws, n) {
    return ws.slice(n, 7).concat(ws.slice(0, n));
  }
  var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
  var defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
  var defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
  var defaultWeekdaysRegex = matchWord;
  var defaultWeekdaysShortRegex = matchWord;
  var defaultWeekdaysMinRegex = matchWord;
  function localeWeekdays(m, format2) {
    var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format2) ? "format" : "standalone"];
    return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
  }
  function localeWeekdaysShort(m) {
    return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
  }
  function localeWeekdaysMin(m) {
    return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
  }
  function handleStrictParse$1(weekdayName, format2, strict) {
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._minWeekdaysParse = [];
      for (i = 0; i < 7; ++i) {
        mom = createUTC([2e3, 1]).day(i);
        this._minWeekdaysParse[i] = this.weekdaysMin(
          mom,
          ""
        ).toLocaleLowerCase();
        this._shortWeekdaysParse[i] = this.weekdaysShort(
          mom,
          ""
        ).toLocaleLowerCase();
        this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase();
      }
    }
    if (strict) {
      if (format2 === "dddd") {
        ii = indexOf.call(this._weekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else if (format2 === "ddd") {
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format2 === "dddd") {
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else if (format2 === "ddd") {
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._minWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
    }
  }
  function localeWeekdaysParse(weekdayName, format2, strict) {
    var i, mom, regex;
    if (this._weekdaysParseExact) {
      return handleStrictParse$1.call(this, weekdayName, format2, strict);
    }
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._minWeekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._fullWeekdaysParse = [];
    }
    for (i = 0; i < 7; i++) {
      mom = createUTC([2e3, 1]).day(i);
      if (strict && !this._fullWeekdaysParse[i]) {
        this._fullWeekdaysParse[i] = new RegExp(
          "^" + this.weekdays(mom, "").replace(".", "\\.?") + "$",
          "i"
        );
        this._shortWeekdaysParse[i] = new RegExp(
          "^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$",
          "i"
        );
        this._minWeekdaysParse[i] = new RegExp(
          "^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$",
          "i"
        );
      }
      if (!this._weekdaysParse[i]) {
        regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
        this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
      }
      if (strict && format2 === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format2 === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format2 === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
        return i;
      }
    }
  }
  function getSetDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    var day = get(this, "Day");
    if (input != null) {
      input = parseWeekday(input, this.localeData());
      return this.add(input - day, "d");
    } else {
      return day;
    }
  }
  function getSetLocaleDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, "d");
  }
  function getSetISODayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    if (input != null) {
      var weekday = parseIsoWeekday(input, this.localeData());
      return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
      return this.day() || 7;
    }
  }
  function weekdaysRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysStrictRegex;
      } else {
        return this._weekdaysRegex;
      }
    } else {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        this._weekdaysRegex = defaultWeekdaysRegex;
      }
      return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
    }
  }
  function weekdaysShortRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysShortStrictRegex;
      } else {
        return this._weekdaysShortRegex;
      }
    } else {
      if (!hasOwnProp(this, "_weekdaysShortRegex")) {
        this._weekdaysShortRegex = defaultWeekdaysShortRegex;
      }
      return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
  }
  function weekdaysMinRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysMinStrictRegex;
      } else {
        return this._weekdaysMinRegex;
      }
    } else {
      if (!hasOwnProp(this, "_weekdaysMinRegex")) {
        this._weekdaysMinRegex = defaultWeekdaysMinRegex;
      }
      return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
  }
  function computeWeekdaysParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }
    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
      mom = createUTC([2e3, 1]).day(i);
      minp = regexEscape(this.weekdaysMin(mom, ""));
      shortp = regexEscape(this.weekdaysShort(mom, ""));
      longp = regexEscape(this.weekdays(mom, ""));
      minPieces.push(minp);
      shortPieces.push(shortp);
      longPieces.push(longp);
      mixedPieces.push(minp);
      mixedPieces.push(shortp);
      mixedPieces.push(longp);
    }
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;
    this._weekdaysStrictRegex = new RegExp(
      "^(" + longPieces.join("|") + ")",
      "i"
    );
    this._weekdaysShortStrictRegex = new RegExp(
      "^(" + shortPieces.join("|") + ")",
      "i"
    );
    this._weekdaysMinStrictRegex = new RegExp(
      "^(" + minPieces.join("|") + ")",
      "i"
    );
  }
  function hFormat() {
    return this.hours() % 12 || 12;
  }
  function kFormat() {
    return this.hours() || 24;
  }
  addFormatToken("H", ["HH", 2], 0, "hour");
  addFormatToken("h", ["hh", 2], 0, hFormat);
  addFormatToken("k", ["kk", 2], 0, kFormat);
  addFormatToken("hmm", 0, 0, function() {
    return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
  });
  addFormatToken("hmmss", 0, 0, function() {
    return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });
  addFormatToken("Hmm", 0, 0, function() {
    return "" + this.hours() + zeroFill(this.minutes(), 2);
  });
  addFormatToken("Hmmss", 0, 0, function() {
    return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });
  function meridiem(token2, lowercase) {
    addFormatToken(token2, 0, 0, function() {
      return this.localeData().meridiem(
        this.hours(),
        this.minutes(),
        lowercase
      );
    });
  }
  meridiem("a", true);
  meridiem("A", false);
  function matchMeridiem(isStrict, locale2) {
    return locale2._meridiemParse;
  }
  addRegexToken("a", matchMeridiem);
  addRegexToken("A", matchMeridiem);
  addRegexToken("H", match1to2, match1to2HasZero);
  addRegexToken("h", match1to2, match1to2NoLeadingZero);
  addRegexToken("k", match1to2, match1to2NoLeadingZero);
  addRegexToken("HH", match1to2, match2);
  addRegexToken("hh", match1to2, match2);
  addRegexToken("kk", match1to2, match2);
  addRegexToken("hmm", match3to4);
  addRegexToken("hmmss", match5to6);
  addRegexToken("Hmm", match3to4);
  addRegexToken("Hmmss", match5to6);
  addParseToken(["H", "HH"], HOUR);
  addParseToken(["k", "kk"], function(input, array2, config) {
    var kInput = toInt(input);
    array2[HOUR] = kInput === 24 ? 0 : kInput;
  });
  addParseToken(["a", "A"], function(input, array2, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
  });
  addParseToken(["h", "hh"], function(input, array2, config) {
    array2[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
  });
  addParseToken("hmm", function(input, array2, config) {
    var pos = input.length - 2;
    array2[HOUR] = toInt(input.substr(0, pos));
    array2[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken("hmmss", function(input, array2, config) {
    var pos1 = input.length - 4, pos2 = input.length - 2;
    array2[HOUR] = toInt(input.substr(0, pos1));
    array2[MINUTE] = toInt(input.substr(pos1, 2));
    array2[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken("Hmm", function(input, array2, config) {
    var pos = input.length - 2;
    array2[HOUR] = toInt(input.substr(0, pos));
    array2[MINUTE] = toInt(input.substr(pos));
  });
  addParseToken("Hmmss", function(input, array2, config) {
    var pos1 = input.length - 4, pos2 = input.length - 2;
    array2[HOUR] = toInt(input.substr(0, pos1));
    array2[MINUTE] = toInt(input.substr(pos1, 2));
    array2[SECOND] = toInt(input.substr(pos2));
  });
  function localeIsPM(input) {
    return (input + "").toLowerCase().charAt(0) === "p";
  }
  var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
  var getSetHour = makeGetSet("Hours", true);
  function localeMeridiem(hours2, minutes2, isLower) {
    if (hours2 > 11) {
      return isLower ? "pm" : "PM";
    } else {
      return isLower ? "am" : "AM";
    }
  }
  var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,
    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,
    week: defaultLocaleWeek,
    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,
    meridiemParse: defaultLocaleMeridiemParse
  };
  var locales = {};
  var localeFamilies = {};
  var globalLocale;
  function commonPrefix(arr1, arr2) {
    var i, minl = Math.min(arr1.length, arr2.length);
    for (i = 0; i < minl; i += 1) {
      if (arr1[i] !== arr2[i]) {
        return i;
      }
    }
    return minl;
  }
  function normalizeLocale2(key) {
    return key ? key.toLowerCase().replace("_", "-") : key;
  }
  function chooseLocale(names) {
    var i = 0, j, next, locale2, split;
    while (i < names.length) {
      split = normalizeLocale2(names[i]).split("-");
      j = split.length;
      next = normalizeLocale2(names[i + 1]);
      next = next ? next.split("-") : null;
      while (j > 0) {
        locale2 = loadLocale(split.slice(0, j).join("-"));
        if (locale2) {
          return locale2;
        }
        if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
          break;
        }
        j--;
      }
      i++;
    }
    return globalLocale;
  }
  function isLocaleNameSane(name) {
    return !!(name && name.match("^[^/\\\\]*$"));
  }
  function loadLocale(name) {
    var oldLocale = null, aliasedRequire;
    if (locales[name] === void 0 && typeof module !== "undefined" && module && module.exports && isLocaleNameSane(name)) {
      try {
        oldLocale = globalLocale._abbr;
        aliasedRequire = __require;
        aliasedRequire("./locale/" + name);
        getSetGlobalLocale(oldLocale);
      } catch (e) {
        locales[name] = null;
      }
    }
    return locales[name];
  }
  function getSetGlobalLocale(key, values) {
    var data;
    if (key) {
      if (isUndefined(values)) {
        data = getLocale(key);
      } else {
        data = defineLocale(key, values);
      }
      if (data) {
        globalLocale = data;
      } else {
        if (typeof console !== "undefined" && console.warn) {
          formatAppLog(
            "warn",
            "at node_modules/moment/dist/moment.js:2188",
            "Locale " + key + " not found. Did you forget to load it?"
          );
        }
      }
    }
    return globalLocale._abbr;
  }
  function defineLocale(name, config) {
    if (config !== null) {
      var locale2, parentConfig = baseConfig;
      config.abbr = name;
      if (locales[name] != null) {
        deprecateSimple(
          "defineLocaleOverride",
          "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
        );
        parentConfig = locales[name]._config;
      } else if (config.parentLocale != null) {
        if (locales[config.parentLocale] != null) {
          parentConfig = locales[config.parentLocale]._config;
        } else {
          locale2 = loadLocale(config.parentLocale);
          if (locale2 != null) {
            parentConfig = locale2._config;
          } else {
            if (!localeFamilies[config.parentLocale]) {
              localeFamilies[config.parentLocale] = [];
            }
            localeFamilies[config.parentLocale].push({
              name,
              config
            });
            return null;
          }
        }
      }
      locales[name] = new Locale(mergeConfigs(parentConfig, config));
      if (localeFamilies[name]) {
        localeFamilies[name].forEach(function(x) {
          defineLocale(x.name, x.config);
        });
      }
      getSetGlobalLocale(name);
      return locales[name];
    } else {
      delete locales[name];
      return null;
    }
  }
  function updateLocale(name, config) {
    if (config != null) {
      var locale2, tmpLocale, parentConfig = baseConfig;
      if (locales[name] != null && locales[name].parentLocale != null) {
        locales[name].set(mergeConfigs(locales[name]._config, config));
      } else {
        tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
          parentConfig = tmpLocale._config;
        }
        config = mergeConfigs(parentConfig, config);
        if (tmpLocale == null) {
          config.abbr = name;
        }
        locale2 = new Locale(config);
        locale2.parentLocale = locales[name];
        locales[name] = locale2;
      }
      getSetGlobalLocale(name);
    } else {
      if (locales[name] != null) {
        if (locales[name].parentLocale != null) {
          locales[name] = locales[name].parentLocale;
          if (name === getSetGlobalLocale()) {
            getSetGlobalLocale(name);
          }
        } else if (locales[name] != null) {
          delete locales[name];
        }
      }
    }
    return locales[name];
  }
  function getLocale(key) {
    var locale2;
    if (key && key._locale && key._locale._abbr) {
      key = key._locale._abbr;
    }
    if (!key) {
      return globalLocale;
    }
    if (!isArray(key)) {
      locale2 = loadLocale(key);
      if (locale2) {
        return locale2;
      }
      key = [key];
    }
    return chooseLocale(key);
  }
  function listLocales() {
    return keys(locales);
  }
  function checkOverflow(m) {
    var overflow, a = m._a;
    if (a && getParsingFlags(m).overflow === -2) {
      overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
      if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
        overflow = DATE;
      }
      if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
        overflow = WEEK;
      }
      if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
        overflow = WEEKDAY;
      }
      getParsingFlags(m).overflow = overflow;
    }
    return m;
  }
  var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
  var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
  var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
  var isoDates = [
    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
    ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
    ["YYYY-DDD", /\d{4}-\d{3}/],
    ["YYYY-MM", /\d{4}-\d\d/, false],
    ["YYYYYYMMDD", /[+-]\d{10}/],
    ["YYYYMMDD", /\d{8}/],
    ["GGGG[W]WWE", /\d{4}W\d{3}/],
    ["GGGG[W]WW", /\d{4}W\d{2}/, false],
    ["YYYYDDD", /\d{7}/],
    ["YYYYMM", /\d{6}/, false],
    ["YYYY", /\d{4}/, false]
  ];
  var isoTimes = [
    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
    ["HH:mm", /\d\d:\d\d/],
    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
    ["HHmmss", /\d\d\d\d\d\d/],
    ["HHmm", /\d\d\d\d/],
    ["HH", /\d\d/]
  ];
  var aspNetJsonRegex = /^\/?Date\((-?\d+)/i;
  var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
  var obsOffsets = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
  };
  function configFromISO(config) {
    var i, l, string2 = config._i, match = extendedIsoRegex.exec(string2) || basicIsoRegex.exec(string2), allowTime, dateFormat, timeFormat2, tzFormat, isoDatesLen = isoDates.length, isoTimesLen = isoTimes.length;
    if (match) {
      getParsingFlags(config).iso = true;
      for (i = 0, l = isoDatesLen; i < l; i++) {
        if (isoDates[i][1].exec(match[1])) {
          dateFormat = isoDates[i][0];
          allowTime = isoDates[i][2] !== false;
          break;
        }
      }
      if (dateFormat == null) {
        config._isValid = false;
        return;
      }
      if (match[3]) {
        for (i = 0, l = isoTimesLen; i < l; i++) {
          if (isoTimes[i][1].exec(match[3])) {
            timeFormat2 = (match[2] || " ") + isoTimes[i][0];
            break;
          }
        }
        if (timeFormat2 == null) {
          config._isValid = false;
          return;
        }
      }
      if (!allowTime && timeFormat2 != null) {
        config._isValid = false;
        return;
      }
      if (match[4]) {
        if (tzRegex.exec(match[4])) {
          tzFormat = "Z";
        } else {
          config._isValid = false;
          return;
        }
      }
      config._f = dateFormat + (timeFormat2 || "") + (tzFormat || "");
      configFromStringAndFormat(config);
    } else {
      config._isValid = false;
    }
  }
  function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    var result = [
      untruncateYear(yearStr),
      defaultLocaleMonthsShort.indexOf(monthStr),
      parseInt(dayStr, 10),
      parseInt(hourStr, 10),
      parseInt(minuteStr, 10)
    ];
    if (secondStr) {
      result.push(parseInt(secondStr, 10));
    }
    return result;
  }
  function untruncateYear(yearStr) {
    var year = parseInt(yearStr, 10);
    if (year <= 49) {
      return 2e3 + year;
    } else if (year <= 999) {
      return 1900 + year;
    }
    return year;
  }
  function preprocessRFC2822(s) {
    return s.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
  }
  function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
      var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(
        parsedInput[0],
        parsedInput[1],
        parsedInput[2]
      ).getDay();
      if (weekdayProvided !== weekdayActual) {
        getParsingFlags(config).weekdayMismatch = true;
        config._isValid = false;
        return false;
      }
    }
    return true;
  }
  function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
      return obsOffsets[obsOffset];
    } else if (militaryOffset) {
      return 0;
    } else {
      var hm = parseInt(numOffset, 10), m = hm % 100, h = (hm - m) / 100;
      return h * 60 + m;
    }
  }
  function configFromRFC2822(config) {
    var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
    if (match) {
      parsedArray = extractFromRFC2822Strings(
        match[4],
        match[3],
        match[2],
        match[5],
        match[6],
        match[7]
      );
      if (!checkWeekday(match[1], parsedArray, config)) {
        return;
      }
      config._a = parsedArray;
      config._tzm = calculateOffset(match[8], match[9], match[10]);
      config._d = createUTCDate.apply(null, config._a);
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
      getParsingFlags(config).rfc2822 = true;
    } else {
      config._isValid = false;
    }
  }
  function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);
    if (matched !== null) {
      config._d = /* @__PURE__ */ new Date(+matched[1]);
      return;
    }
    configFromISO(config);
    if (config._isValid === false) {
      delete config._isValid;
    } else {
      return;
    }
    configFromRFC2822(config);
    if (config._isValid === false) {
      delete config._isValid;
    } else {
      return;
    }
    if (config._strict) {
      config._isValid = false;
    } else {
      hooks.createFromInputFallback(config);
    }
  }
  hooks.createFromInputFallback = deprecate(
    "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
    function(config) {
      config._d = /* @__PURE__ */ new Date(config._i + (config._useUTC ? " UTC" : ""));
    }
  );
  function defaults(a, b, c) {
    if (a != null) {
      return a;
    }
    if (b != null) {
      return b;
    }
    return c;
  }
  function currentDateArray(config) {
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
      return [
        nowValue.getUTCFullYear(),
        nowValue.getUTCMonth(),
        nowValue.getUTCDate()
      ];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
  }
  function configFromArray(config) {
    var i, date2, input = [], currentDate, expectedWeekday, yearToUse;
    if (config._d) {
      return;
    }
    currentDate = currentDateArray(config);
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
      dayOfYearFromWeekInfo(config);
    }
    if (config._dayOfYear != null) {
      yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
      if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
        getParsingFlags(config)._overflowDayOfYear = true;
      }
      date2 = createUTCDate(yearToUse, 0, config._dayOfYear);
      config._a[MONTH] = date2.getUTCMonth();
      config._a[DATE] = date2.getUTCDate();
    }
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
      config._a[i] = input[i] = currentDate[i];
    }
    for (; i < 7; i++) {
      config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
    }
    if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
      config._nextDay = true;
      config._a[HOUR] = 0;
    }
    config._d = (config._useUTC ? createUTCDate : createDate).apply(
      null,
      input
    );
    expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
    if (config._tzm != null) {
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }
    if (config._nextDay) {
      config._a[HOUR] = 24;
    }
    if (config._w && typeof config._w.d !== "undefined" && config._w.d !== expectedWeekday) {
      getParsingFlags(config).weekdayMismatch = true;
    }
  }
  function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
      dow = 1;
      doy = 4;
      weekYear = defaults(
        w.GG,
        config._a[YEAR],
        weekOfYear(createLocal(), 1, 4).year
      );
      week = defaults(w.W, 1);
      weekday = defaults(w.E, 1);
      if (weekday < 1 || weekday > 7) {
        weekdayOverflow = true;
      }
    } else {
      dow = config._locale._week.dow;
      doy = config._locale._week.doy;
      curWeek = weekOfYear(createLocal(), dow, doy);
      weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
      week = defaults(w.w, curWeek.week);
      if (w.d != null) {
        weekday = w.d;
        if (weekday < 0 || weekday > 6) {
          weekdayOverflow = true;
        }
      } else if (w.e != null) {
        weekday = w.e + dow;
        if (w.e < 0 || w.e > 6) {
          weekdayOverflow = true;
        }
      } else {
        weekday = dow;
      }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
      getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
      getParsingFlags(config)._overflowWeekday = true;
    } else {
      temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
      config._a[YEAR] = temp.year;
      config._dayOfYear = temp.dayOfYear;
    }
  }
  hooks.ISO_8601 = function() {
  };
  hooks.RFC_2822 = function() {
  };
  function configFromStringAndFormat(config) {
    if (config._f === hooks.ISO_8601) {
      configFromISO(config);
      return;
    }
    if (config._f === hooks.RFC_2822) {
      configFromRFC2822(config);
      return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;
    var string2 = "" + config._i, i, parsedInput, tokens2, token2, skipped, stringLength = string2.length, totalParsedInputLength = 0, era, tokenLen;
    tokens2 = expandFormat(config._f, config._locale).match(formattingTokens) || [];
    tokenLen = tokens2.length;
    for (i = 0; i < tokenLen; i++) {
      token2 = tokens2[i];
      parsedInput = (string2.match(getParseRegexForToken(token2, config)) || [])[0];
      if (parsedInput) {
        skipped = string2.substr(0, string2.indexOf(parsedInput));
        if (skipped.length > 0) {
          getParsingFlags(config).unusedInput.push(skipped);
        }
        string2 = string2.slice(
          string2.indexOf(parsedInput) + parsedInput.length
        );
        totalParsedInputLength += parsedInput.length;
      }
      if (formatTokenFunctions[token2]) {
        if (parsedInput) {
          getParsingFlags(config).empty = false;
        } else {
          getParsingFlags(config).unusedTokens.push(token2);
        }
        addTimeToArrayFromToken(token2, parsedInput, config);
      } else if (config._strict && !parsedInput) {
        getParsingFlags(config).unusedTokens.push(token2);
      }
    }
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string2.length > 0) {
      getParsingFlags(config).unusedInput.push(string2);
    }
    if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
      getParsingFlags(config).bigHour = void 0;
    }
    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    config._a[HOUR] = meridiemFixWrap(
      config._locale,
      config._a[HOUR],
      config._meridiem
    );
    era = getParsingFlags(config).era;
    if (era !== null) {
      config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
    }
    configFromArray(config);
    checkOverflow(config);
  }
  function meridiemFixWrap(locale2, hour, meridiem2) {
    var isPm;
    if (meridiem2 == null) {
      return hour;
    }
    if (locale2.meridiemHour != null) {
      return locale2.meridiemHour(hour, meridiem2);
    } else if (locale2.isPM != null) {
      isPm = locale2.isPM(meridiem2);
      if (isPm && hour < 12) {
        hour += 12;
      }
      if (!isPm && hour === 12) {
        hour = 0;
      }
      return hour;
    } else {
      return hour;
    }
  }
  function configFromStringAndArray(config) {
    var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false, configfLen = config._f.length;
    if (configfLen === 0) {
      getParsingFlags(config).invalidFormat = true;
      config._d = /* @__PURE__ */ new Date(NaN);
      return;
    }
    for (i = 0; i < configfLen; i++) {
      currentScore = 0;
      validFormatFound = false;
      tempConfig = copyConfig({}, config);
      if (config._useUTC != null) {
        tempConfig._useUTC = config._useUTC;
      }
      tempConfig._f = config._f[i];
      configFromStringAndFormat(tempConfig);
      if (isValid(tempConfig)) {
        validFormatFound = true;
      }
      currentScore += getParsingFlags(tempConfig).charsLeftOver;
      currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
      getParsingFlags(tempConfig).score = currentScore;
      if (!bestFormatIsValid) {
        if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
          scoreToBeat = currentScore;
          bestMoment = tempConfig;
          if (validFormatFound) {
            bestFormatIsValid = true;
          }
        }
      } else {
        if (currentScore < scoreToBeat) {
          scoreToBeat = currentScore;
          bestMoment = tempConfig;
        }
      }
    }
    extend(config, bestMoment || tempConfig);
  }
  function configFromObject(config) {
    if (config._d) {
      return;
    }
    var i = normalizeObjectUnits(config._i), dayOrDate = i.day === void 0 ? i.date : i.day;
    config._a = map(
      [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
      function(obj) {
        return obj && parseInt(obj, 10);
      }
    );
    configFromArray(config);
  }
  function createFromConfig(config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
      res.add(1, "d");
      res._nextDay = void 0;
    }
    return res;
  }
  function prepareConfig(config) {
    var input = config._i, format2 = config._f;
    config._locale = config._locale || getLocale(config._l);
    if (input === null || format2 === void 0 && input === "") {
      return createInvalid({ nullInput: true });
    }
    if (typeof input === "string") {
      config._i = input = config._locale.preparse(input);
    }
    if (isMoment(input)) {
      return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
      config._d = input;
    } else if (isArray(format2)) {
      configFromStringAndArray(config);
    } else if (format2) {
      configFromStringAndFormat(config);
    } else {
      configFromInput(config);
    }
    if (!isValid(config)) {
      config._d = null;
    }
    return config;
  }
  function configFromInput(config) {
    var input = config._i;
    if (isUndefined(input)) {
      config._d = new Date(hooks.now());
    } else if (isDate(input)) {
      config._d = new Date(input.valueOf());
    } else if (typeof input === "string") {
      configFromString(config);
    } else if (isArray(input)) {
      config._a = map(input.slice(0), function(obj) {
        return parseInt(obj, 10);
      });
      configFromArray(config);
    } else if (isObject2(input)) {
      configFromObject(config);
    } else if (isNumber2(input)) {
      config._d = new Date(input);
    } else {
      hooks.createFromInputFallback(config);
    }
  }
  function createLocalOrUTC(input, format2, locale2, strict, isUTC) {
    var c = {};
    if (format2 === true || format2 === false) {
      strict = format2;
      format2 = void 0;
    }
    if (locale2 === true || locale2 === false) {
      strict = locale2;
      locale2 = void 0;
    }
    if (isObject2(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
      input = void 0;
    }
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale2;
    c._i = input;
    c._f = format2;
    c._strict = strict;
    return createFromConfig(c);
  }
  function createLocal(input, format2, locale2, strict) {
    return createLocalOrUTC(input, format2, locale2, strict, false);
  }
  var prototypeMin = deprecate(
    "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
    function() {
      var other = createLocal.apply(null, arguments);
      if (this.isValid() && other.isValid()) {
        return other < this ? this : other;
      } else {
        return createInvalid();
      }
    }
  );
  var prototypeMax = deprecate(
    "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
    function() {
      var other = createLocal.apply(null, arguments);
      if (this.isValid() && other.isValid()) {
        return other > this ? this : other;
      } else {
        return createInvalid();
      }
    }
  );
  function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
      moments = moments[0];
    }
    if (!moments.length) {
      return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
      if (!moments[i].isValid() || moments[i][fn](res)) {
        res = moments[i];
      }
    }
    return res;
  }
  function min() {
    var args = [].slice.call(arguments, 0);
    return pickBy("isBefore", args);
  }
  function max() {
    var args = [].slice.call(arguments, 0);
    return pickBy("isAfter", args);
  }
  var now = function() {
    return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
  };
  var ordering = [
    "year",
    "quarter",
    "month",
    "week",
    "day",
    "hour",
    "minute",
    "second",
    "millisecond"
  ];
  function isDurationValid(m) {
    var key, unitHasDecimal = false, i, orderLen = ordering.length;
    for (key in m) {
      if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
        return false;
      }
    }
    for (i = 0; i < orderLen; ++i) {
      if (m[ordering[i]]) {
        if (unitHasDecimal) {
          return false;
        }
        if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
          unitHasDecimal = true;
        }
      }
    }
    return true;
  }
  function isValid$1() {
    return this._isValid;
  }
  function createInvalid$1() {
    return createDuration(NaN);
  }
  function Duration(duration) {
    var normalizedInput = normalizeObjectUnits(duration), years2 = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months2 = normalizedInput.month || 0, weeks2 = normalizedInput.week || normalizedInput.isoWeek || 0, days2 = normalizedInput.day || 0, hours2 = normalizedInput.hour || 0, minutes2 = normalizedInput.minute || 0, seconds2 = normalizedInput.second || 0, milliseconds2 = normalizedInput.millisecond || 0;
    this._isValid = isDurationValid(normalizedInput);
    this._milliseconds = +milliseconds2 + seconds2 * 1e3 + // 1000
    minutes2 * 6e4 + // 1000 * 60
    hours2 * 1e3 * 60 * 60;
    this._days = +days2 + weeks2 * 7;
    this._months = +months2 + quarters * 3 + years2 * 12;
    this._data = {};
    this._locale = getLocale();
    this._bubble();
  }
  function isDuration(obj) {
    return obj instanceof Duration;
  }
  function absRound(number2) {
    if (number2 < 0) {
      return Math.round(-1 * number2) * -1;
    } else {
      return Math.round(number2);
    }
  }
  function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
    for (i = 0; i < len; i++) {
      if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
        diffs++;
      }
    }
    return diffs + lengthDiff;
  }
  function offset(token2, separator) {
    addFormatToken(token2, 0, 0, function() {
      var offset2 = this.utcOffset(), sign2 = "+";
      if (offset2 < 0) {
        offset2 = -offset2;
        sign2 = "-";
      }
      return sign2 + zeroFill(~~(offset2 / 60), 2) + separator + zeroFill(~~offset2 % 60, 2);
    });
  }
  offset("Z", ":");
  offset("ZZ", "");
  addRegexToken("Z", matchShortOffset);
  addRegexToken("ZZ", matchShortOffset);
  addParseToken(["Z", "ZZ"], function(input, array2, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
  });
  var chunkOffset = /([\+\-]|\d\d)/gi;
  function offsetFromString(matcher, string2) {
    var matches = (string2 || "").match(matcher), chunk, parts, minutes2;
    if (matches === null) {
      return null;
    }
    chunk = matches[matches.length - 1] || [];
    parts = (chunk + "").match(chunkOffset) || ["-", 0, 0];
    minutes2 = +(parts[1] * 60) + toInt(parts[2]);
    return minutes2 === 0 ? 0 : parts[0] === "+" ? minutes2 : -minutes2;
  }
  function cloneWithOffset(input, model) {
    var res, diff2;
    if (model._isUTC) {
      res = model.clone();
      diff2 = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
      res._d.setTime(res._d.valueOf() + diff2);
      hooks.updateOffset(res, false);
      return res;
    } else {
      return createLocal(input).local();
    }
  }
  function getDateOffset(m) {
    return -Math.round(m._d.getTimezoneOffset());
  }
  hooks.updateOffset = function() {
  };
  function getSetOffset(input, keepLocalTime, keepMinutes) {
    var offset2 = this._offset || 0, localAdjust;
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    if (input != null) {
      if (typeof input === "string") {
        input = offsetFromString(matchShortOffset, input);
        if (input === null) {
          return this;
        }
      } else if (Math.abs(input) < 16 && !keepMinutes) {
        input = input * 60;
      }
      if (!this._isUTC && keepLocalTime) {
        localAdjust = getDateOffset(this);
      }
      this._offset = input;
      this._isUTC = true;
      if (localAdjust != null) {
        this.add(localAdjust, "m");
      }
      if (offset2 !== input) {
        if (!keepLocalTime || this._changeInProgress) {
          addSubtract(
            this,
            createDuration(input - offset2, "m"),
            1,
            false
          );
        } else if (!this._changeInProgress) {
          this._changeInProgress = true;
          hooks.updateOffset(this, true);
          this._changeInProgress = null;
        }
      }
      return this;
    } else {
      return this._isUTC ? offset2 : getDateOffset(this);
    }
  }
  function getSetZone(input, keepLocalTime) {
    if (input != null) {
      if (typeof input !== "string") {
        input = -input;
      }
      this.utcOffset(input, keepLocalTime);
      return this;
    } else {
      return -this.utcOffset();
    }
  }
  function setOffsetToUTC(keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
  }
  function setOffsetToLocal(keepLocalTime) {
    if (this._isUTC) {
      this.utcOffset(0, keepLocalTime);
      this._isUTC = false;
      if (keepLocalTime) {
        this.subtract(getDateOffset(this), "m");
      }
    }
    return this;
  }
  function setOffsetToParsedOffset() {
    if (this._tzm != null) {
      this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === "string") {
      var tZone = offsetFromString(matchOffset, this._i);
      if (tZone != null) {
        this.utcOffset(tZone);
      } else {
        this.utcOffset(0, true);
      }
    }
    return this;
  }
  function hasAlignedHourOffset(input) {
    if (!this.isValid()) {
      return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;
    return (this.utcOffset() - input) % 60 === 0;
  }
  function isDaylightSavingTime() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }
  function isDaylightSavingTimeShifted() {
    if (!isUndefined(this._isDSTShifted)) {
      return this._isDSTShifted;
    }
    var c = {}, other;
    copyConfig(c, this);
    c = prepareConfig(c);
    if (c._a) {
      other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
      this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
    } else {
      this._isDSTShifted = false;
    }
    return this._isDSTShifted;
  }
  function isLocal() {
    return this.isValid() ? !this._isUTC : false;
  }
  function isUtcOffset() {
    return this.isValid() ? this._isUTC : false;
  }
  function isUtc() {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
  }
  var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/;
  var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  function createDuration(input, key) {
    var duration = input, match = null, sign2, ret, diffRes;
    if (isDuration(input)) {
      duration = {
        ms: input._milliseconds,
        d: input._days,
        M: input._months
      };
    } else if (isNumber2(input) || !isNaN(+input)) {
      duration = {};
      if (key) {
        duration[key] = +input;
      } else {
        duration.milliseconds = +input;
      }
    } else if (match = aspNetRegex.exec(input)) {
      sign2 = match[1] === "-" ? -1 : 1;
      duration = {
        y: 0,
        d: toInt(match[DATE]) * sign2,
        h: toInt(match[HOUR]) * sign2,
        m: toInt(match[MINUTE]) * sign2,
        s: toInt(match[SECOND]) * sign2,
        ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign2
        // the millisecond decimal point is included in the match
      };
    } else if (match = isoRegex.exec(input)) {
      sign2 = match[1] === "-" ? -1 : 1;
      duration = {
        y: parseIso(match[2], sign2),
        M: parseIso(match[3], sign2),
        w: parseIso(match[4], sign2),
        d: parseIso(match[5], sign2),
        h: parseIso(match[6], sign2),
        m: parseIso(match[7], sign2),
        s: parseIso(match[8], sign2)
      };
    } else if (duration == null) {
      duration = {};
    } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
      diffRes = momentsDifference(
        createLocal(duration.from),
        createLocal(duration.to)
      );
      duration = {};
      duration.ms = diffRes.milliseconds;
      duration.M = diffRes.months;
    }
    ret = new Duration(duration);
    if (isDuration(input) && hasOwnProp(input, "_locale")) {
      ret._locale = input._locale;
    }
    if (isDuration(input) && hasOwnProp(input, "_isValid")) {
      ret._isValid = input._isValid;
    }
    return ret;
  }
  createDuration.fn = Duration.prototype;
  createDuration.invalid = createInvalid$1;
  function parseIso(inp, sign2) {
    var res = inp && parseFloat(inp.replace(",", "."));
    return (isNaN(res) ? 0 : res) * sign2;
  }
  function positiveMomentsDifference(base, other) {
    var res = {};
    res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, "M").isAfter(other)) {
      --res.months;
    }
    res.milliseconds = +other - +base.clone().add(res.months, "M");
    return res;
  }
  function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
      return { milliseconds: 0, months: 0 };
    }
    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
      res = positiveMomentsDifference(base, other);
    } else {
      res = positiveMomentsDifference(other, base);
      res.milliseconds = -res.milliseconds;
      res.months = -res.months;
    }
    return res;
  }
  function createAdder(direction, name) {
    return function(val, period) {
      var dur, tmp;
      if (period !== null && !isNaN(+period)) {
        deprecateSimple(
          name,
          "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
        );
        tmp = val;
        val = period;
        period = tmp;
      }
      dur = createDuration(val, period);
      addSubtract(this, dur, direction);
      return this;
    };
  }
  function addSubtract(mom, duration, isAdding, updateOffset) {
    var milliseconds2 = duration._milliseconds, days2 = absRound(duration._days), months2 = absRound(duration._months);
    if (!mom.isValid()) {
      return;
    }
    updateOffset = updateOffset == null ? true : updateOffset;
    if (months2) {
      setMonth(mom, get(mom, "Month") + months2 * isAdding);
    }
    if (days2) {
      set$1(mom, "Date", get(mom, "Date") + days2 * isAdding);
    }
    if (milliseconds2) {
      mom._d.setTime(mom._d.valueOf() + milliseconds2 * isAdding);
    }
    if (updateOffset) {
      hooks.updateOffset(mom, days2 || months2);
    }
  }
  var add = createAdder(1, "add");
  var subtract = createAdder(-1, "subtract");
  function isString(input) {
    return typeof input === "string" || input instanceof String;
  }
  function isMomentInput(input) {
    return isMoment(input) || isDate(input) || isString(input) || isNumber2(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === void 0;
  }
  function isMomentInputObject(input) {
    var objectTest = isObject2(input) && !isObjectEmpty(input), propertyTest = false, properties = [
      "years",
      "year",
      "y",
      "months",
      "month",
      "M",
      "days",
      "day",
      "d",
      "dates",
      "date",
      "D",
      "hours",
      "hour",
      "h",
      "minutes",
      "minute",
      "m",
      "seconds",
      "second",
      "s",
      "milliseconds",
      "millisecond",
      "ms"
    ], i, property, propertyLen = properties.length;
    for (i = 0; i < propertyLen; i += 1) {
      property = properties[i];
      propertyTest = propertyTest || hasOwnProp(input, property);
    }
    return objectTest && propertyTest;
  }
  function isNumberOrStringArray(input) {
    var arrayTest = isArray(input), dataTypeTest = false;
    if (arrayTest) {
      dataTypeTest = input.filter(function(item) {
        return !isNumber2(item) && isString(input);
      }).length === 0;
    }
    return arrayTest && dataTypeTest;
  }
  function isCalendarSpec(input) {
    var objectTest = isObject2(input) && !isObjectEmpty(input), propertyTest = false, properties = [
      "sameDay",
      "nextDay",
      "lastDay",
      "nextWeek",
      "lastWeek",
      "sameElse"
    ], i, property;
    for (i = 0; i < properties.length; i += 1) {
      property = properties[i];
      propertyTest = propertyTest || hasOwnProp(input, property);
    }
    return objectTest && propertyTest;
  }
  function getCalendarFormat(myMoment, now2) {
    var diff2 = myMoment.diff(now2, "days", true);
    return diff2 < -6 ? "sameElse" : diff2 < -1 ? "lastWeek" : diff2 < 0 ? "lastDay" : diff2 < 1 ? "sameDay" : diff2 < 2 ? "nextDay" : diff2 < 7 ? "nextWeek" : "sameElse";
  }
  function calendar$1(time, formats) {
    if (arguments.length === 1) {
      if (!arguments[0]) {
        time = void 0;
        formats = void 0;
      } else if (isMomentInput(arguments[0])) {
        time = arguments[0];
        formats = void 0;
      } else if (isCalendarSpec(arguments[0])) {
        formats = arguments[0];
        time = void 0;
      }
    }
    var now2 = time || createLocal(), sod = cloneWithOffset(now2, this).startOf("day"), format2 = hooks.calendarFormat(this, sod) || "sameElse", output = formats && (isFunction(formats[format2]) ? formats[format2].call(this, now2) : formats[format2]);
    return this.format(
      output || this.localeData().calendar(format2, this, createLocal(now2))
    );
  }
  function clone() {
    return new Moment(this);
  }
  function isAfter(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || "millisecond";
    if (units === "millisecond") {
      return this.valueOf() > localInput.valueOf();
    } else {
      return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
  }
  function isBefore(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || "millisecond";
    if (units === "millisecond") {
      return this.valueOf() < localInput.valueOf();
    } else {
      return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
  }
  function isBetween(from2, to2, units, inclusivity) {
    var localFrom = isMoment(from2) ? from2 : createLocal(from2), localTo = isMoment(to2) ? to2 : createLocal(to2);
    if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
      return false;
    }
    inclusivity = inclusivity || "()";
    return (inclusivity[0] === "(" ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
  }
  function isSame(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input), inputMs;
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || "millisecond";
    if (units === "millisecond") {
      return this.valueOf() === localInput.valueOf();
    } else {
      inputMs = localInput.valueOf();
      return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
  }
  function isSameOrAfter(input, units) {
    return this.isSame(input, units) || this.isAfter(input, units);
  }
  function isSameOrBefore(input, units) {
    return this.isSame(input, units) || this.isBefore(input, units);
  }
  function diff(input, units, asFloat) {
    var that, zoneDelta, output;
    if (!this.isValid()) {
      return NaN;
    }
    that = cloneWithOffset(input, this);
    if (!that.isValid()) {
      return NaN;
    }
    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
    units = normalizeUnits(units);
    switch (units) {
      case "year":
        output = monthDiff(this, that) / 12;
        break;
      case "month":
        output = monthDiff(this, that);
        break;
      case "quarter":
        output = monthDiff(this, that) / 3;
        break;
      case "second":
        output = (this - that) / 1e3;
        break;
      case "minute":
        output = (this - that) / 6e4;
        break;
      case "hour":
        output = (this - that) / 36e5;
        break;
      case "day":
        output = (this - that - zoneDelta) / 864e5;
        break;
      case "week":
        output = (this - that - zoneDelta) / 6048e5;
        break;
      default:
        output = this - that;
    }
    return asFloat ? output : absFloor(output);
  }
  function monthDiff(a, b) {
    if (a.date() < b.date()) {
      return -monthDiff(b, a);
    }
    var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()), anchor = a.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
    if (b - anchor < 0) {
      anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
      adjust = (b - anchor) / (anchor - anchor2);
    } else {
      anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
      adjust = (b - anchor) / (anchor2 - anchor);
    }
    return -(wholeMonthDiff + adjust) || 0;
  }
  hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
  hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
  function toString2() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }
  function toISOString(keepOffset) {
    if (!this.isValid()) {
      return null;
    }
    var utc = keepOffset !== true, m = utc ? this.clone().utc() : this;
    if (m.year() < 0 || m.year() > 9999) {
      return formatMoment(
        m,
        utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
      );
    }
    if (isFunction(Date.prototype.toISOString)) {
      if (utc) {
        return this.toDate().toISOString();
      } else {
        return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m, "Z"));
      }
    }
    return formatMoment(
      m,
      utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
    );
  }
  function inspect() {
    if (!this.isValid()) {
      return "moment.invalid(/* " + this._i + " */)";
    }
    var func2 = "moment", zone = "", prefix, year, datetime, suffix;
    if (!this.isLocal()) {
      func2 = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
      zone = "Z";
    }
    prefix = "[" + func2 + '("]';
    year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
    datetime = "-MM-DD[T]HH:mm:ss.SSS";
    suffix = zone + '[")]';
    return this.format(prefix + year + datetime + suffix);
  }
  function format(inputString) {
    if (!inputString) {
      inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
  }
  function from(time, withoutSuffix) {
    if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
      return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }
  function fromNow(withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
  }
  function to(time, withoutSuffix) {
    if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
      return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }
  function toNow(withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
  }
  function locale(key) {
    var newLocaleData;
    if (key === void 0) {
      return this._locale._abbr;
    } else {
      newLocaleData = getLocale(key);
      if (newLocaleData != null) {
        this._locale = newLocaleData;
      }
      return this;
    }
  }
  var lang = deprecate(
    "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
    function(key) {
      if (key === void 0) {
        return this.localeData();
      } else {
        return this.locale(key);
      }
    }
  );
  function localeData() {
    return this._locale;
  }
  var MS_PER_SECOND = 1e3;
  var MS_PER_MINUTE = 60 * MS_PER_SECOND;
  var MS_PER_HOUR = 60 * MS_PER_MINUTE;
  var MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
  function mod$1(dividend, divisor) {
    return (dividend % divisor + divisor) % divisor;
  }
  function localStartOfDate(y, m, d) {
    if (y < 100 && y >= 0) {
      return new Date(y + 400, m, d) - MS_PER_400_YEARS;
    } else {
      return new Date(y, m, d).valueOf();
    }
  }
  function utcStartOfDate(y, m, d) {
    if (y < 100 && y >= 0) {
      return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
    } else {
      return Date.UTC(y, m, d);
    }
  }
  function startOf(units) {
    var time, startOfDate;
    units = normalizeUnits(units);
    if (units === void 0 || units === "millisecond" || !this.isValid()) {
      return this;
    }
    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
    switch (units) {
      case "year":
        time = startOfDate(this.year(), 0, 1);
        break;
      case "quarter":
        time = startOfDate(
          this.year(),
          this.month() - this.month() % 3,
          1
        );
        break;
      case "month":
        time = startOfDate(this.year(), this.month(), 1);
        break;
      case "week":
        time = startOfDate(
          this.year(),
          this.month(),
          this.date() - this.weekday()
        );
        break;
      case "isoWeek":
        time = startOfDate(
          this.year(),
          this.month(),
          this.date() - (this.isoWeekday() - 1)
        );
        break;
      case "day":
      case "date":
        time = startOfDate(this.year(), this.month(), this.date());
        break;
      case "hour":
        time = this._d.valueOf();
        time -= mod$1(
          time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
          MS_PER_HOUR
        );
        break;
      case "minute":
        time = this._d.valueOf();
        time -= mod$1(time, MS_PER_MINUTE);
        break;
      case "second":
        time = this._d.valueOf();
        time -= mod$1(time, MS_PER_SECOND);
        break;
    }
    this._d.setTime(time);
    hooks.updateOffset(this, true);
    return this;
  }
  function endOf(units) {
    var time, startOfDate;
    units = normalizeUnits(units);
    if (units === void 0 || units === "millisecond" || !this.isValid()) {
      return this;
    }
    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
    switch (units) {
      case "year":
        time = startOfDate(this.year() + 1, 0, 1) - 1;
        break;
      case "quarter":
        time = startOfDate(
          this.year(),
          this.month() - this.month() % 3 + 3,
          1
        ) - 1;
        break;
      case "month":
        time = startOfDate(this.year(), this.month() + 1, 1) - 1;
        break;
      case "week":
        time = startOfDate(
          this.year(),
          this.month(),
          this.date() - this.weekday() + 7
        ) - 1;
        break;
      case "isoWeek":
        time = startOfDate(
          this.year(),
          this.month(),
          this.date() - (this.isoWeekday() - 1) + 7
        ) - 1;
        break;
      case "day":
      case "date":
        time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
        break;
      case "hour":
        time = this._d.valueOf();
        time += MS_PER_HOUR - mod$1(
          time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
          MS_PER_HOUR
        ) - 1;
        break;
      case "minute":
        time = this._d.valueOf();
        time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
        break;
      case "second":
        time = this._d.valueOf();
        time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
        break;
    }
    this._d.setTime(time);
    hooks.updateOffset(this, true);
    return this;
  }
  function valueOf() {
    return this._d.valueOf() - (this._offset || 0) * 6e4;
  }
  function unix() {
    return Math.floor(this.valueOf() / 1e3);
  }
  function toDate() {
    return new Date(this.valueOf());
  }
  function toArray() {
    var m = this;
    return [
      m.year(),
      m.month(),
      m.date(),
      m.hour(),
      m.minute(),
      m.second(),
      m.millisecond()
    ];
  }
  function toObject() {
    var m = this;
    return {
      years: m.year(),
      months: m.month(),
      date: m.date(),
      hours: m.hours(),
      minutes: m.minutes(),
      seconds: m.seconds(),
      milliseconds: m.milliseconds()
    };
  }
  function toJSON() {
    return this.isValid() ? this.toISOString() : null;
  }
  function isValid$2() {
    return isValid(this);
  }
  function parsingFlags() {
    return extend({}, getParsingFlags(this));
  }
  function invalidAt() {
    return getParsingFlags(this).overflow;
  }
  function creationData() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    };
  }
  addFormatToken("N", 0, 0, "eraAbbr");
  addFormatToken("NN", 0, 0, "eraAbbr");
  addFormatToken("NNN", 0, 0, "eraAbbr");
  addFormatToken("NNNN", 0, 0, "eraName");
  addFormatToken("NNNNN", 0, 0, "eraNarrow");
  addFormatToken("y", ["y", 1], "yo", "eraYear");
  addFormatToken("y", ["yy", 2], 0, "eraYear");
  addFormatToken("y", ["yyy", 3], 0, "eraYear");
  addFormatToken("y", ["yyyy", 4], 0, "eraYear");
  addRegexToken("N", matchEraAbbr);
  addRegexToken("NN", matchEraAbbr);
  addRegexToken("NNN", matchEraAbbr);
  addRegexToken("NNNN", matchEraName);
  addRegexToken("NNNNN", matchEraNarrow);
  addParseToken(
    ["N", "NN", "NNN", "NNNN", "NNNNN"],
    function(input, array2, config, token2) {
      var era = config._locale.erasParse(input, token2, config._strict);
      if (era) {
        getParsingFlags(config).era = era;
      } else {
        getParsingFlags(config).invalidEra = input;
      }
    }
  );
  addRegexToken("y", matchUnsigned);
  addRegexToken("yy", matchUnsigned);
  addRegexToken("yyy", matchUnsigned);
  addRegexToken("yyyy", matchUnsigned);
  addRegexToken("yo", matchEraYearOrdinal);
  addParseToken(["y", "yy", "yyy", "yyyy"], YEAR);
  addParseToken(["yo"], function(input, array2, config, token2) {
    var match;
    if (config._locale._eraYearOrdinalRegex) {
      match = input.match(config._locale._eraYearOrdinalRegex);
    }
    if (config._locale.eraYearOrdinalParse) {
      array2[YEAR] = config._locale.eraYearOrdinalParse(input, match);
    } else {
      array2[YEAR] = parseInt(input, 10);
    }
  });
  function localeEras(m, format2) {
    var i, l, date2, eras = this._eras || getLocale("en")._eras;
    for (i = 0, l = eras.length; i < l; ++i) {
      switch (typeof eras[i].since) {
        case "string":
          date2 = hooks(eras[i].since).startOf("day");
          eras[i].since = date2.valueOf();
          break;
      }
      switch (typeof eras[i].until) {
        case "undefined":
          eras[i].until = Infinity;
          break;
        case "string":
          date2 = hooks(eras[i].until).startOf("day").valueOf();
          eras[i].until = date2.valueOf();
          break;
      }
    }
    return eras;
  }
  function localeErasParse(eraName, format2, strict) {
    var i, l, eras = this.eras(), name, abbr, narrow;
    eraName = eraName.toUpperCase();
    for (i = 0, l = eras.length; i < l; ++i) {
      name = eras[i].name.toUpperCase();
      abbr = eras[i].abbr.toUpperCase();
      narrow = eras[i].narrow.toUpperCase();
      if (strict) {
        switch (format2) {
          case "N":
          case "NN":
          case "NNN":
            if (abbr === eraName) {
              return eras[i];
            }
            break;
          case "NNNN":
            if (name === eraName) {
              return eras[i];
            }
            break;
          case "NNNNN":
            if (narrow === eraName) {
              return eras[i];
            }
            break;
        }
      } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
        return eras[i];
      }
    }
  }
  function localeErasConvertYear(era, year) {
    var dir = era.since <= era.until ? 1 : -1;
    if (year === void 0) {
      return hooks(era.since).year();
    } else {
      return hooks(era.since).year() + (year - era.offset) * dir;
    }
  }
  function getEraName() {
    var i, l, val, eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      val = this.clone().startOf("day").valueOf();
      if (eras[i].since <= val && val <= eras[i].until) {
        return eras[i].name;
      }
      if (eras[i].until <= val && val <= eras[i].since) {
        return eras[i].name;
      }
    }
    return "";
  }
  function getEraNarrow() {
    var i, l, val, eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      val = this.clone().startOf("day").valueOf();
      if (eras[i].since <= val && val <= eras[i].until) {
        return eras[i].narrow;
      }
      if (eras[i].until <= val && val <= eras[i].since) {
        return eras[i].narrow;
      }
    }
    return "";
  }
  function getEraAbbr() {
    var i, l, val, eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      val = this.clone().startOf("day").valueOf();
      if (eras[i].since <= val && val <= eras[i].until) {
        return eras[i].abbr;
      }
      if (eras[i].until <= val && val <= eras[i].since) {
        return eras[i].abbr;
      }
    }
    return "";
  }
  function getEraYear() {
    var i, l, dir, val, eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      dir = eras[i].since <= eras[i].until ? 1 : -1;
      val = this.clone().startOf("day").valueOf();
      if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
        return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
      }
    }
    return this.year();
  }
  function erasNameRegex(isStrict) {
    if (!hasOwnProp(this, "_erasNameRegex")) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasNameRegex : this._erasRegex;
  }
  function erasAbbrRegex(isStrict) {
    if (!hasOwnProp(this, "_erasAbbrRegex")) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasAbbrRegex : this._erasRegex;
  }
  function erasNarrowRegex(isStrict) {
    if (!hasOwnProp(this, "_erasNarrowRegex")) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasNarrowRegex : this._erasRegex;
  }
  function matchEraAbbr(isStrict, locale2) {
    return locale2.erasAbbrRegex(isStrict);
  }
  function matchEraName(isStrict, locale2) {
    return locale2.erasNameRegex(isStrict);
  }
  function matchEraNarrow(isStrict, locale2) {
    return locale2.erasNarrowRegex(isStrict);
  }
  function matchEraYearOrdinal(isStrict, locale2) {
    return locale2._eraYearOrdinalRegex || matchUnsigned;
  }
  function computeErasParse() {
    var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l, erasName, erasAbbr, erasNarrow, eras = this.eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      erasName = regexEscape(eras[i].name);
      erasAbbr = regexEscape(eras[i].abbr);
      erasNarrow = regexEscape(eras[i].narrow);
      namePieces.push(erasName);
      abbrPieces.push(erasAbbr);
      narrowPieces.push(erasNarrow);
      mixedPieces.push(erasName);
      mixedPieces.push(erasAbbr);
      mixedPieces.push(erasNarrow);
    }
    this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
    this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
    this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
    this._erasNarrowRegex = new RegExp(
      "^(" + narrowPieces.join("|") + ")",
      "i"
    );
  }
  addFormatToken(0, ["gg", 2], 0, function() {
    return this.weekYear() % 100;
  });
  addFormatToken(0, ["GG", 2], 0, function() {
    return this.isoWeekYear() % 100;
  });
  function addWeekYearFormatToken(token2, getter) {
    addFormatToken(0, [token2, token2.length], 0, getter);
  }
  addWeekYearFormatToken("gggg", "weekYear");
  addWeekYearFormatToken("ggggg", "weekYear");
  addWeekYearFormatToken("GGGG", "isoWeekYear");
  addWeekYearFormatToken("GGGGG", "isoWeekYear");
  addRegexToken("G", matchSigned);
  addRegexToken("g", matchSigned);
  addRegexToken("GG", match1to2, match2);
  addRegexToken("gg", match1to2, match2);
  addRegexToken("GGGG", match1to4, match4);
  addRegexToken("gggg", match1to4, match4);
  addRegexToken("GGGGG", match1to6, match6);
  addRegexToken("ggggg", match1to6, match6);
  addWeekParseToken(
    ["gggg", "ggggg", "GGGG", "GGGGG"],
    function(input, week, config, token2) {
      week[token2.substr(0, 2)] = toInt(input);
    }
  );
  addWeekParseToken(["gg", "GG"], function(input, week, config, token2) {
    week[token2] = hooks.parseTwoDigitYear(input);
  });
  function getSetWeekYear(input) {
    return getSetWeekYearHelper.call(
      this,
      input,
      this.week(),
      this.weekday() + this.localeData()._week.dow,
      this.localeData()._week.dow,
      this.localeData()._week.doy
    );
  }
  function getSetISOWeekYear(input) {
    return getSetWeekYearHelper.call(
      this,
      input,
      this.isoWeek(),
      this.isoWeekday(),
      1,
      4
    );
  }
  function getISOWeeksInYear() {
    return weeksInYear(this.year(), 1, 4);
  }
  function getISOWeeksInISOWeekYear() {
    return weeksInYear(this.isoWeekYear(), 1, 4);
  }
  function getWeeksInYear() {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
  }
  function getWeeksInWeekYear() {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
  }
  function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
      return weekOfYear(this, dow, doy).year;
    } else {
      weeksTarget = weeksInYear(input, dow, doy);
      if (week > weeksTarget) {
        week = weeksTarget;
      }
      return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
  }
  function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date2 = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
    this.year(date2.getUTCFullYear());
    this.month(date2.getUTCMonth());
    this.date(date2.getUTCDate());
    return this;
  }
  addFormatToken("Q", 0, "Qo", "quarter");
  addRegexToken("Q", match1);
  addParseToken("Q", function(input, array2) {
    array2[MONTH] = (toInt(input) - 1) * 3;
  });
  function getSetQuarter(input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
  }
  addFormatToken("D", ["DD", 2], "Do", "date");
  addRegexToken("D", match1to2, match1to2NoLeadingZero);
  addRegexToken("DD", match1to2, match2);
  addRegexToken("Do", function(isStrict, locale2) {
    return isStrict ? locale2._dayOfMonthOrdinalParse || locale2._ordinalParse : locale2._dayOfMonthOrdinalParseLenient;
  });
  addParseToken(["D", "DD"], DATE);
  addParseToken("Do", function(input, array2) {
    array2[DATE] = toInt(input.match(match1to2)[0]);
  });
  var getSetDayOfMonth = makeGetSet("Date", true);
  addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
  addRegexToken("DDD", match1to3);
  addRegexToken("DDDD", match3);
  addParseToken(["DDD", "DDDD"], function(input, array2, config) {
    config._dayOfYear = toInt(input);
  });
  function getSetDayOfYear(input) {
    var dayOfYear = Math.round(
      (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
    ) + 1;
    return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
  }
  addFormatToken("m", ["mm", 2], 0, "minute");
  addRegexToken("m", match1to2, match1to2HasZero);
  addRegexToken("mm", match1to2, match2);
  addParseToken(["m", "mm"], MINUTE);
  var getSetMinute = makeGetSet("Minutes", false);
  addFormatToken("s", ["ss", 2], 0, "second");
  addRegexToken("s", match1to2, match1to2HasZero);
  addRegexToken("ss", match1to2, match2);
  addParseToken(["s", "ss"], SECOND);
  var getSetSecond = makeGetSet("Seconds", false);
  addFormatToken("S", 0, 0, function() {
    return ~~(this.millisecond() / 100);
  });
  addFormatToken(0, ["SS", 2], 0, function() {
    return ~~(this.millisecond() / 10);
  });
  addFormatToken(0, ["SSS", 3], 0, "millisecond");
  addFormatToken(0, ["SSSS", 4], 0, function() {
    return this.millisecond() * 10;
  });
  addFormatToken(0, ["SSSSS", 5], 0, function() {
    return this.millisecond() * 100;
  });
  addFormatToken(0, ["SSSSSS", 6], 0, function() {
    return this.millisecond() * 1e3;
  });
  addFormatToken(0, ["SSSSSSS", 7], 0, function() {
    return this.millisecond() * 1e4;
  });
  addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
    return this.millisecond() * 1e5;
  });
  addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
    return this.millisecond() * 1e6;
  });
  addRegexToken("S", match1to3, match1);
  addRegexToken("SS", match1to3, match2);
  addRegexToken("SSS", match1to3, match3);
  var token;
  var getSetMillisecond;
  for (token = "SSSS"; token.length <= 9; token += "S") {
    addRegexToken(token, matchUnsigned);
  }
  function parseMs(input, array2) {
    array2[MILLISECOND] = toInt(("0." + input) * 1e3);
  }
  for (token = "S"; token.length <= 9; token += "S") {
    addParseToken(token, parseMs);
  }
  getSetMillisecond = makeGetSet("Milliseconds", false);
  addFormatToken("z", 0, 0, "zoneAbbr");
  addFormatToken("zz", 0, 0, "zoneName");
  function getZoneAbbr() {
    return this._isUTC ? "UTC" : "";
  }
  function getZoneName() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }
  var proto = Moment.prototype;
  proto.add = add;
  proto.calendar = calendar$1;
  proto.clone = clone;
  proto.diff = diff;
  proto.endOf = endOf;
  proto.format = format;
  proto.from = from;
  proto.fromNow = fromNow;
  proto.to = to;
  proto.toNow = toNow;
  proto.get = stringGet;
  proto.invalidAt = invalidAt;
  proto.isAfter = isAfter;
  proto.isBefore = isBefore;
  proto.isBetween = isBetween;
  proto.isSame = isSame;
  proto.isSameOrAfter = isSameOrAfter;
  proto.isSameOrBefore = isSameOrBefore;
  proto.isValid = isValid$2;
  proto.lang = lang;
  proto.locale = locale;
  proto.localeData = localeData;
  proto.max = prototypeMax;
  proto.min = prototypeMin;
  proto.parsingFlags = parsingFlags;
  proto.set = stringSet;
  proto.startOf = startOf;
  proto.subtract = subtract;
  proto.toArray = toArray;
  proto.toObject = toObject;
  proto.toDate = toDate;
  proto.toISOString = toISOString;
  proto.inspect = inspect;
  if (typeof Symbol !== "undefined" && Symbol.for != null) {
    proto[Symbol.for("nodejs.util.inspect.custom")] = function() {
      return "Moment<" + this.format() + ">";
    };
  }
  proto.toJSON = toJSON;
  proto.toString = toString2;
  proto.unix = unix;
  proto.valueOf = valueOf;
  proto.creationData = creationData;
  proto.eraName = getEraName;
  proto.eraNarrow = getEraNarrow;
  proto.eraAbbr = getEraAbbr;
  proto.eraYear = getEraYear;
  proto.year = getSetYear;
  proto.isLeapYear = getIsLeapYear;
  proto.weekYear = getSetWeekYear;
  proto.isoWeekYear = getSetISOWeekYear;
  proto.quarter = proto.quarters = getSetQuarter;
  proto.month = getSetMonth;
  proto.daysInMonth = getDaysInMonth;
  proto.week = proto.weeks = getSetWeek;
  proto.isoWeek = proto.isoWeeks = getSetISOWeek;
  proto.weeksInYear = getWeeksInYear;
  proto.weeksInWeekYear = getWeeksInWeekYear;
  proto.isoWeeksInYear = getISOWeeksInYear;
  proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
  proto.date = getSetDayOfMonth;
  proto.day = proto.days = getSetDayOfWeek;
  proto.weekday = getSetLocaleDayOfWeek;
  proto.isoWeekday = getSetISODayOfWeek;
  proto.dayOfYear = getSetDayOfYear;
  proto.hour = proto.hours = getSetHour;
  proto.minute = proto.minutes = getSetMinute;
  proto.second = proto.seconds = getSetSecond;
  proto.millisecond = proto.milliseconds = getSetMillisecond;
  proto.utcOffset = getSetOffset;
  proto.utc = setOffsetToUTC;
  proto.local = setOffsetToLocal;
  proto.parseZone = setOffsetToParsedOffset;
  proto.hasAlignedHourOffset = hasAlignedHourOffset;
  proto.isDST = isDaylightSavingTime;
  proto.isLocal = isLocal;
  proto.isUtcOffset = isUtcOffset;
  proto.isUtc = isUtc;
  proto.isUTC = isUtc;
  proto.zoneAbbr = getZoneAbbr;
  proto.zoneName = getZoneName;
  proto.dates = deprecate(
    "dates accessor is deprecated. Use date instead.",
    getSetDayOfMonth
  );
  proto.months = deprecate(
    "months accessor is deprecated. Use month instead",
    getSetMonth
  );
  proto.years = deprecate(
    "years accessor is deprecated. Use year instead",
    getSetYear
  );
  proto.zone = deprecate(
    "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
    getSetZone
  );
  proto.isDSTShifted = deprecate(
    "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
    isDaylightSavingTimeShifted
  );
  function createUnix(input) {
    return createLocal(input * 1e3);
  }
  function createInZone() {
    return createLocal.apply(null, arguments).parseZone();
  }
  function preParsePostFormat(string2) {
    return string2;
  }
  var proto$1 = Locale.prototype;
  proto$1.calendar = calendar;
  proto$1.longDateFormat = longDateFormat;
  proto$1.invalidDate = invalidDate;
  proto$1.ordinal = ordinal;
  proto$1.preparse = preParsePostFormat;
  proto$1.postformat = preParsePostFormat;
  proto$1.relativeTime = relativeTime;
  proto$1.pastFuture = pastFuture;
  proto$1.set = set;
  proto$1.eras = localeEras;
  proto$1.erasParse = localeErasParse;
  proto$1.erasConvertYear = localeErasConvertYear;
  proto$1.erasAbbrRegex = erasAbbrRegex;
  proto$1.erasNameRegex = erasNameRegex;
  proto$1.erasNarrowRegex = erasNarrowRegex;
  proto$1.months = localeMonths;
  proto$1.monthsShort = localeMonthsShort;
  proto$1.monthsParse = localeMonthsParse;
  proto$1.monthsRegex = monthsRegex;
  proto$1.monthsShortRegex = monthsShortRegex;
  proto$1.week = localeWeek;
  proto$1.firstDayOfYear = localeFirstDayOfYear;
  proto$1.firstDayOfWeek = localeFirstDayOfWeek;
  proto$1.weekdays = localeWeekdays;
  proto$1.weekdaysMin = localeWeekdaysMin;
  proto$1.weekdaysShort = localeWeekdaysShort;
  proto$1.weekdaysParse = localeWeekdaysParse;
  proto$1.weekdaysRegex = weekdaysRegex;
  proto$1.weekdaysShortRegex = weekdaysShortRegex;
  proto$1.weekdaysMinRegex = weekdaysMinRegex;
  proto$1.isPM = localeIsPM;
  proto$1.meridiem = localeMeridiem;
  function get$1(format2, index2, field, setter) {
    var locale2 = getLocale(), utc = createUTC().set(setter, index2);
    return locale2[field](utc, format2);
  }
  function listMonthsImpl(format2, index2, field) {
    if (isNumber2(format2)) {
      index2 = format2;
      format2 = void 0;
    }
    format2 = format2 || "";
    if (index2 != null) {
      return get$1(format2, index2, field, "month");
    }
    var i, out = [];
    for (i = 0; i < 12; i++) {
      out[i] = get$1(format2, i, field, "month");
    }
    return out;
  }
  function listWeekdaysImpl(localeSorted, format2, index2, field) {
    if (typeof localeSorted === "boolean") {
      if (isNumber2(format2)) {
        index2 = format2;
        format2 = void 0;
      }
      format2 = format2 || "";
    } else {
      format2 = localeSorted;
      index2 = format2;
      localeSorted = false;
      if (isNumber2(format2)) {
        index2 = format2;
        format2 = void 0;
      }
      format2 = format2 || "";
    }
    var locale2 = getLocale(), shift = localeSorted ? locale2._week.dow : 0, i, out = [];
    if (index2 != null) {
      return get$1(format2, (index2 + shift) % 7, field, "day");
    }
    for (i = 0; i < 7; i++) {
      out[i] = get$1(format2, (i + shift) % 7, field, "day");
    }
    return out;
  }
  function listMonths(format2, index2) {
    return listMonthsImpl(format2, index2, "months");
  }
  function listMonthsShort(format2, index2) {
    return listMonthsImpl(format2, index2, "monthsShort");
  }
  function listWeekdays(localeSorted, format2, index2) {
    return listWeekdaysImpl(localeSorted, format2, index2, "weekdays");
  }
  function listWeekdaysShort(localeSorted, format2, index2) {
    return listWeekdaysImpl(localeSorted, format2, index2, "weekdaysShort");
  }
  function listWeekdaysMin(localeSorted, format2, index2) {
    return listWeekdaysImpl(localeSorted, format2, index2, "weekdaysMin");
  }
  getSetGlobalLocale("en", {
    eras: [
      {
        since: "0001-01-01",
        until: Infinity,
        offset: 1,
        name: "Anno Domini",
        narrow: "AD",
        abbr: "AD"
      },
      {
        since: "0000-12-31",
        until: -Infinity,
        offset: 1,
        name: "Before Christ",
        narrow: "BC",
        abbr: "BC"
      }
    ],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function(number2) {
      var b = number2 % 10, output = toInt(number2 % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
      return number2 + output;
    }
  });
  hooks.lang = deprecate(
    "moment.lang is deprecated. Use moment.locale instead.",
    getSetGlobalLocale
  );
  hooks.langData = deprecate(
    "moment.langData is deprecated. Use moment.localeData instead.",
    getLocale
  );
  var mathAbs = Math.abs;
  function abs() {
    var data = this._data;
    this._milliseconds = mathAbs(this._milliseconds);
    this._days = mathAbs(this._days);
    this._months = mathAbs(this._months);
    data.milliseconds = mathAbs(data.milliseconds);
    data.seconds = mathAbs(data.seconds);
    data.minutes = mathAbs(data.minutes);
    data.hours = mathAbs(data.hours);
    data.months = mathAbs(data.months);
    data.years = mathAbs(data.years);
    return this;
  }
  function addSubtract$1(duration, input, value, direction) {
    var other = createDuration(input, value);
    duration._milliseconds += direction * other._milliseconds;
    duration._days += direction * other._days;
    duration._months += direction * other._months;
    return duration._bubble();
  }
  function add$1(input, value) {
    return addSubtract$1(this, input, value, 1);
  }
  function subtract$1(input, value) {
    return addSubtract$1(this, input, value, -1);
  }
  function absCeil(number2) {
    if (number2 < 0) {
      return Math.floor(number2);
    } else {
      return Math.ceil(number2);
    }
  }
  function bubble() {
    var milliseconds2 = this._milliseconds, days2 = this._days, months2 = this._months, data = this._data, seconds2, minutes2, hours2, years2, monthsFromDays;
    if (!(milliseconds2 >= 0 && days2 >= 0 && months2 >= 0 || milliseconds2 <= 0 && days2 <= 0 && months2 <= 0)) {
      milliseconds2 += absCeil(monthsToDays(months2) + days2) * 864e5;
      days2 = 0;
      months2 = 0;
    }
    data.milliseconds = milliseconds2 % 1e3;
    seconds2 = absFloor(milliseconds2 / 1e3);
    data.seconds = seconds2 % 60;
    minutes2 = absFloor(seconds2 / 60);
    data.minutes = minutes2 % 60;
    hours2 = absFloor(minutes2 / 60);
    data.hours = hours2 % 24;
    days2 += absFloor(hours2 / 24);
    monthsFromDays = absFloor(daysToMonths(days2));
    months2 += monthsFromDays;
    days2 -= absCeil(monthsToDays(monthsFromDays));
    years2 = absFloor(months2 / 12);
    months2 %= 12;
    data.days = days2;
    data.months = months2;
    data.years = years2;
    return this;
  }
  function daysToMonths(days2) {
    return days2 * 4800 / 146097;
  }
  function monthsToDays(months2) {
    return months2 * 146097 / 4800;
  }
  function as(units) {
    if (!this.isValid()) {
      return NaN;
    }
    var days2, months2, milliseconds2 = this._milliseconds;
    units = normalizeUnits(units);
    if (units === "month" || units === "quarter" || units === "year") {
      days2 = this._days + milliseconds2 / 864e5;
      months2 = this._months + daysToMonths(days2);
      switch (units) {
        case "month":
          return months2;
        case "quarter":
          return months2 / 3;
        case "year":
          return months2 / 12;
      }
    } else {
      days2 = this._days + Math.round(monthsToDays(this._months));
      switch (units) {
        case "week":
          return days2 / 7 + milliseconds2 / 6048e5;
        case "day":
          return days2 + milliseconds2 / 864e5;
        case "hour":
          return days2 * 24 + milliseconds2 / 36e5;
        case "minute":
          return days2 * 1440 + milliseconds2 / 6e4;
        case "second":
          return days2 * 86400 + milliseconds2 / 1e3;
        case "millisecond":
          return Math.floor(days2 * 864e5) + milliseconds2;
        default:
          throw new Error("Unknown unit " + units);
      }
    }
  }
  function makeAs(alias) {
    return function() {
      return this.as(alias);
    };
  }
  var asMilliseconds = makeAs("ms");
  var asSeconds = makeAs("s");
  var asMinutes = makeAs("m");
  var asHours = makeAs("h");
  var asDays = makeAs("d");
  var asWeeks = makeAs("w");
  var asMonths = makeAs("M");
  var asQuarters = makeAs("Q");
  var asYears = makeAs("y");
  var valueOf$1 = asMilliseconds;
  function clone$1() {
    return createDuration(this);
  }
  function get$2(units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + "s"]() : NaN;
  }
  function makeGetter(name) {
    return function() {
      return this.isValid() ? this._data[name] : NaN;
    };
  }
  var milliseconds = makeGetter("milliseconds");
  var seconds = makeGetter("seconds");
  var minutes = makeGetter("minutes");
  var hours = makeGetter("hours");
  var days = makeGetter("days");
  var months = makeGetter("months");
  var years = makeGetter("years");
  function weeks() {
    return absFloor(this.days() / 7);
  }
  var round = Math.round;
  var thresholds = {
    ss: 44,
    // a few seconds to seconds
    s: 45,
    // seconds to minute
    m: 45,
    // minutes to hour
    h: 22,
    // hours to day
    d: 26,
    // days to month/week
    w: null,
    // weeks to month
    M: 11
    // months to year
  };
  function substituteTimeAgo(string2, number2, withoutSuffix, isFuture, locale2) {
    return locale2.relativeTime(number2 || 1, !!withoutSuffix, string2, isFuture);
  }
  function relativeTime$1(posNegDuration, withoutSuffix, thresholds2, locale2) {
    var duration = createDuration(posNegDuration).abs(), seconds2 = round(duration.as("s")), minutes2 = round(duration.as("m")), hours2 = round(duration.as("h")), days2 = round(duration.as("d")), months2 = round(duration.as("M")), weeks2 = round(duration.as("w")), years2 = round(duration.as("y")), a = seconds2 <= thresholds2.ss && ["s", seconds2] || seconds2 < thresholds2.s && ["ss", seconds2] || minutes2 <= 1 && ["m"] || minutes2 < thresholds2.m && ["mm", minutes2] || hours2 <= 1 && ["h"] || hours2 < thresholds2.h && ["hh", hours2] || days2 <= 1 && ["d"] || days2 < thresholds2.d && ["dd", days2];
    if (thresholds2.w != null) {
      a = a || weeks2 <= 1 && ["w"] || weeks2 < thresholds2.w && ["ww", weeks2];
    }
    a = a || months2 <= 1 && ["M"] || months2 < thresholds2.M && ["MM", months2] || years2 <= 1 && ["y"] || ["yy", years2];
    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale2;
    return substituteTimeAgo.apply(null, a);
  }
  function getSetRelativeTimeRounding(roundingFunction) {
    if (roundingFunction === void 0) {
      return round;
    }
    if (typeof roundingFunction === "function") {
      round = roundingFunction;
      return true;
    }
    return false;
  }
  function getSetRelativeTimeThreshold(threshold, limit) {
    if (thresholds[threshold] === void 0) {
      return false;
    }
    if (limit === void 0) {
      return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === "s") {
      thresholds.ss = limit - 1;
    }
    return true;
  }
  function humanize(argWithSuffix, argThresholds) {
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }
    var withSuffix = false, th = thresholds, locale2, output;
    if (typeof argWithSuffix === "object") {
      argThresholds = argWithSuffix;
      argWithSuffix = false;
    }
    if (typeof argWithSuffix === "boolean") {
      withSuffix = argWithSuffix;
    }
    if (typeof argThresholds === "object") {
      th = Object.assign({}, thresholds, argThresholds);
      if (argThresholds.s != null && argThresholds.ss == null) {
        th.ss = argThresholds.s - 1;
      }
    }
    locale2 = this.localeData();
    output = relativeTime$1(this, !withSuffix, th, locale2);
    if (withSuffix) {
      output = locale2.pastFuture(+this, output);
    }
    return locale2.postformat(output);
  }
  var abs$1 = Math.abs;
  function sign(x) {
    return (x > 0) - (x < 0) || +x;
  }
  function toISOString$1() {
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }
    var seconds2 = abs$1(this._milliseconds) / 1e3, days2 = abs$1(this._days), months2 = abs$1(this._months), minutes2, hours2, years2, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
    if (!total) {
      return "P0D";
    }
    minutes2 = absFloor(seconds2 / 60);
    hours2 = absFloor(minutes2 / 60);
    seconds2 %= 60;
    minutes2 %= 60;
    years2 = absFloor(months2 / 12);
    months2 %= 12;
    s = seconds2 ? seconds2.toFixed(3).replace(/\.?0+$/, "") : "";
    totalSign = total < 0 ? "-" : "";
    ymSign = sign(this._months) !== sign(total) ? "-" : "";
    daysSign = sign(this._days) !== sign(total) ? "-" : "";
    hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
    return totalSign + "P" + (years2 ? ymSign + years2 + "Y" : "") + (months2 ? ymSign + months2 + "M" : "") + (days2 ? daysSign + days2 + "D" : "") + (hours2 || minutes2 || seconds2 ? "T" : "") + (hours2 ? hmsSign + hours2 + "H" : "") + (minutes2 ? hmsSign + minutes2 + "M" : "") + (seconds2 ? hmsSign + s + "S" : "");
  }
  var proto$2 = Duration.prototype;
  proto$2.isValid = isValid$1;
  proto$2.abs = abs;
  proto$2.add = add$1;
  proto$2.subtract = subtract$1;
  proto$2.as = as;
  proto$2.asMilliseconds = asMilliseconds;
  proto$2.asSeconds = asSeconds;
  proto$2.asMinutes = asMinutes;
  proto$2.asHours = asHours;
  proto$2.asDays = asDays;
  proto$2.asWeeks = asWeeks;
  proto$2.asMonths = asMonths;
  proto$2.asQuarters = asQuarters;
  proto$2.asYears = asYears;
  proto$2.valueOf = valueOf$1;
  proto$2._bubble = bubble;
  proto$2.clone = clone$1;
  proto$2.get = get$2;
  proto$2.milliseconds = milliseconds;
  proto$2.seconds = seconds;
  proto$2.minutes = minutes;
  proto$2.hours = hours;
  proto$2.days = days;
  proto$2.weeks = weeks;
  proto$2.months = months;
  proto$2.years = years;
  proto$2.humanize = humanize;
  proto$2.toISOString = toISOString$1;
  proto$2.toString = toISOString$1;
  proto$2.toJSON = toISOString$1;
  proto$2.locale = locale;
  proto$2.localeData = localeData;
  proto$2.toIsoString = deprecate(
    "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
    toISOString$1
  );
  proto$2.lang = lang;
  addFormatToken("X", 0, 0, "unix");
  addFormatToken("x", 0, 0, "valueOf");
  addRegexToken("x", matchSigned);
  addRegexToken("X", matchTimestamp);
  addParseToken("X", function(input, array2, config) {
    config._d = new Date(parseFloat(input) * 1e3);
  });
  addParseToken("x", function(input, array2, config) {
    config._d = new Date(toInt(input));
  });
  hooks.version = "2.30.1";
  setHookCallback(createLocal);
  hooks.fn = proto;
  hooks.min = min;
  hooks.max = max;
  hooks.now = now;
  hooks.utc = createUTC;
  hooks.unix = createUnix;
  hooks.months = listMonths;
  hooks.isDate = isDate;
  hooks.locale = getSetGlobalLocale;
  hooks.invalid = createInvalid;
  hooks.duration = createDuration;
  hooks.isMoment = isMoment;
  hooks.weekdays = listWeekdays;
  hooks.parseZone = createInZone;
  hooks.localeData = getLocale;
  hooks.isDuration = isDuration;
  hooks.monthsShort = listMonthsShort;
  hooks.weekdaysMin = listWeekdaysMin;
  hooks.defineLocale = defineLocale;
  hooks.updateLocale = updateLocale;
  hooks.locales = listLocales;
  hooks.weekdaysShort = listWeekdaysShort;
  hooks.normalizeUnits = normalizeUnits;
  hooks.relativeTimeRounding = getSetRelativeTimeRounding;
  hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
  hooks.calendarFormat = getCalendarFormat;
  hooks.prototype = proto;
  hooks.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    // <input type="datetime-local" />
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    // <input type="datetime-local" step="1" />
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    // <input type="datetime-local" step="0.001" />
    DATE: "YYYY-MM-DD",
    // <input type="date" />
    TIME: "HH:mm",
    // <input type="time" />
    TIME_SECONDS: "HH:mm:ss",
    // <input type="time" step="1" />
    TIME_MS: "HH:mm:ss.SSS",
    // <input type="time" step="0.001" />
    WEEK: "GGGG-[W]WW",
    // <input type="week" />
    MONTH: "YYYY-MM"
    // <input type="month" />
  };
  function email(value) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
  }
  function mobile(value) {
    return /^1[23456789]\d{9}$/.test(value);
  }
  function url(value) {
    return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(value);
  }
  function date(value) {
    if (!value)
      return false;
    if (number(value))
      value = +value;
    return !/Invalid|NaN/.test(new Date(value).toString());
  }
  function dateISO(value) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
  }
  function number(value) {
    return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value);
  }
  function string(value) {
    return typeof value === "string";
  }
  function digits(value) {
    return /^\d+$/.test(value);
  }
  function idCard(value) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/.test(
      value
    );
  }
  function carNo(value) {
    const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
    const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    if (value.length === 7) {
      return creg.test(value);
    }
    if (value.length === 8) {
      return xreg.test(value);
    }
    return false;
  }
  function amount(value) {
    return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
  }
  function chinese(value) {
    const reg = /^[\u4e00-\u9fa5]+$/gi;
    return reg.test(value);
  }
  function letter(value) {
    return /^[a-zA-Z]*$/.test(value);
  }
  function enOrNum(value) {
    const reg = /^[0-9a-zA-Z]*$/g;
    return reg.test(value);
  }
  function contains(value, param) {
    return value.indexOf(param) >= 0;
  }
  function range(value, param) {
    return value >= param[0] && value <= param[1];
  }
  function rangeLength(value, param) {
    return value.length >= param[0] && value.length <= param[1];
  }
  function landline(value) {
    const reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
    return reg.test(value);
  }
  function empty(value) {
    switch (typeof value) {
      case "undefined":
        return true;
      case "string":
        if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length == 0)
          return true;
        break;
      case "boolean":
        if (!value)
          return true;
        break;
      case "number":
        if (value === 0 || isNaN(value))
          return true;
        break;
      case "object":
        if (value === null || value.length === 0)
          return true;
        for (const i in value) {
          return false;
        }
        return true;
    }
    return false;
  }
  function jsonString(value) {
    if (typeof value === "string") {
      try {
        const obj = JSON.parse(value);
        if (typeof obj === "object" && obj) {
          return true;
        }
        return false;
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  function array(value) {
    if (typeof Array.isArray === "function") {
      return Array.isArray(value);
    }
    return Object.prototype.toString.call(value) === "[object Array]";
  }
  function object(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
  }
  function code(value, len = 6) {
    return new RegExp(`^\\d{${len}}$`).test(value);
  }
  function func(value) {
    return typeof value === "function";
  }
  function promise(value) {
    return object(value) && func(value.then) && func(value.catch);
  }
  function image(value) {
    const newValue = value.split("?")[0];
    const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
    return IMAGE_REGEXP.test(newValue);
  }
  function video(value) {
    const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
    return VIDEO_REGEXP.test(value);
  }
  function regExp(o) {
    return o && Object.prototype.toString.call(o) === "[object RegExp]";
  }
  var test = {
    email,
    mobile,
    url,
    date,
    dateISO,
    number,
    digits,
    idCard,
    carNo,
    amount,
    chinese,
    letter,
    enOrNum,
    contains,
    range,
    rangeLength,
    empty,
    isEmpty: empty,
    jsonString,
    landline,
    object,
    array,
    code,
    func,
    promise,
    video,
    image,
    regExp,
    string
  };
  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(null);
      }, ms);
    });
  }
  function prefixZero(n, m) {
    const s = (Array(m).join("0") + n).slice(-m);
    return s;
  }
  function deepClone(obj) {
    if ([null, void 0, NaN, false].includes(obj))
      return obj;
    if (typeof obj !== "object" && typeof obj !== "function") {
      return obj;
    }
    const o = test.array(obj) ? [] : {};
    for (const i in obj) {
      if (obj.hasOwnProperty(i)) {
        o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
      }
    }
    return o;
  }
  function timeFormat(time, format2 = "YYYY-MM-DD HH:mm") {
    return hooks(time).format(format2);
  }
  function age(date2, format2 = "YYYYMMDD") {
    const ms = hooks(date2, format2).valueOf();
    const age2 = (hooks().valueOf() - ms) / 1e3 / 60 / 60 / 24 / 365;
    return age2;
  }
  function isAdult(date2, format2 = "YYYYMMDD") {
    return age(date2, format2) >= 18;
  }
  var initTimeUserFunc = /* @__PURE__ */ function() {
    var timeoutID;
    function eventFunc(options) {
      return function(e) {
        const { cb, ms } = options;
        timeoutID && clearTimeout(timeoutID);
        timeoutID = setTimeout(cb, ms);
      };
    }
    return function(options) {
      var listener = eventFunc(options);
      listener();
      return {
        release() {
          timeoutID && clearTimeout(timeoutID);
        },
        listener
      };
    };
  }();
  var index = __spreadProps(__spreadValues({}, test), {
    sleep,
    prefixZero,
    deepClone,
    timeFormat,
    age,
    isAdult,
    initTimeUserFunc
  });
  var remoteResource = "http://39.101.178.159/JudicialTianJin/";
  var moduleIdCardAct = {
    start: (cb) => {
      startPlayIdCardHintVoice();
      setTimeout(() => {
        const ran = Math.ceil(Math.random() * 1e4);
        "42098419990909" + index.prefixZero(ran, 4);
        const ranName = "\u6D4B\u8BD5\u4EBA\u5458" + index.prefixZero(ran, 4);
        cb({
          // number: '372925198010040016',
          number: "420281198712042852",
          name: ranName,
          sex: "\u7537",
          nation: "\u6C49",
          birthTime: "20090909",
          address: "\u6B66\u6C49\u5E02"
        });
      }, 1e3);
    },
    stop: () => {
      stopPlayIdCardHintVoice();
    }
  };
  var IdCardHintAudioCtx;
  var playCount = 1;
  var playIndex = 1;
  var isStop = false;
  function startPlayIdCardHintVoice() {
    if (!IdCardHintAudioCtx) {
      IdCardHintAudioCtx = uni.createInnerAudioContext();
      IdCardHintAudioCtx.onPlay(() => {
        formatAppLog("log", "at utils/plugins.js:37", "\u5F00\u59CB\u64AD\u653E");
      });
      IdCardHintAudioCtx.onError((err) => {
        formatAppLog("log", "at utils/plugins.js:40", "\u64AD\u653E\u9519\u8BEF\uFF1A", err);
      });
      IdCardHintAudioCtx.onEnded(function(r) {
        formatAppLog("log", "at utils/plugins.js:43", "\u64AD\u653E\u7ED3\u675F\uFF1A", r);
        if (isStop)
          return;
        if (playIndex < playCount) {
          playIndex++;
          IdCardHintAudioCtx.play();
        } else {
          playIndex = 1;
        }
      });
      IdCardHintAudioCtx.onStop(function(r) {
        formatAppLog("log", "at utils/plugins.js:53", "\u64AD\u653E\u505C\u6B62\uFF1A", r);
        playIndex = 1;
      });
    }
    isStop = false;
    IdCardHintAudioCtx.src = "../../static/voice/idcard_hint.mp3";
    IdCardHintAudioCtx.play();
  }
  function stopPlayIdCardHintVoice() {
    isStop = true;
    if (IdCardHintAudioCtx) {
      IdCardHintAudioCtx.stop();
    }
  }
  var forTest = false;
  var moduleFaceCompare = {
    compareFeature: (face1, face2, callback) => {
    }
  };
  {
    moduleFaceCompare = requireNativePlugin("ModuleFaceCompare");
  }
  function checkVersion(updateCallback) {
    return __async(this, null, function* () {
      const remoteResourcePath = (name) => {
        return remoteResource + name;
      };
      const currentVersionInfo = yield getCurrentVersionInfo().catch((err) => {
        formatAppLog("log", "at utils/plugins.js:120", err);
      });
      formatAppLog("log", "at utils/plugins.js:122", "\u5F53\u524D\u7248\u672C\u4FE1\u606F", currentVersionInfo);
      if (!currentVersionInfo) {
        return;
      }
      const {
        appVersion: currentAppVersion,
        wgtVersion: currentWgtVersion
      } = currentVersionInfo;
      uni.request({
        url: remoteResourcePath("info.json"),
        success: (res) => {
          const info = res.data;
          formatAppLog("log", "at utils/plugins.js:135", "\u83B7\u53D6\u5230\u7684\u65B0\u7248\u672C\u4FE1\u606F\uFF1A", info);
          if (!info) {
            return;
          }
          const {
            apkVersion,
            apkPackageName,
            wgtVersion,
            wgtPackageName,
            forceUpdate,
            updateInfo
          } = info;
          if (versionCompare(currentAppVersion, apkVersion) < 0) {
            updateCallback && updateCallback(__spreadProps(__spreadValues({}, info), {
              version: apkVersion,
              url: remoteResourcePath(apkPackageName)
            }), currentVersionInfo);
            return;
          }
          if (versionCompare(currentWgtVersion, wgtVersion) < 0) {
            updateCallback && updateCallback(__spreadProps(__spreadValues({}, info), {
              version: wgtVersion,
              url: remoteResourcePath(wgtPackageName),
              type: "wgt"
            }), currentVersionInfo);
            return;
          }
        },
        fail: (err) => {
          formatAppLog("log", "at utils/plugins.js:168", "\u83B7\u53D6\u5931\u8D25\uFF1A", err);
        }
      });
    });
  }
  function getCurrentVersionInfo() {
    return new Promise((resolve, reject) => {
      plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {
        const data = {
          action: "checkVersion",
          appid: plus.runtime.appid,
          appVersion: plus.runtime.version,
          wgtVersion: widgetInfo.version
        };
        formatAppLog("log", "at utils/plugins.js:185", "data: ", data);
        resolve(data);
      });
    });
  }
  function versionCompare(v1 = "0", v2 = "0") {
    v1 = String(v1).split(".");
    v2 = String(v2).split(".");
    const minVersionLens = Math.min(v1.length, v2.length);
    let result = 0;
    for (let i = 0; i < minVersionLens; i++) {
      const curV1 = Number(v1[i]);
      const curV2 = Number(v2[i]);
      if (curV1 > curV2) {
        result = 1;
        break;
      } else if (curV1 < curV2) {
        result = -1;
        break;
      }
    }
    if (result === 0 && v1.length !== v2.length) {
      const v1BiggerThenv2 = v1.length > v2.length;
      const maxLensVersion = v1BiggerThenv2 ? v1 : v2;
      for (let i = minVersionLens; i < maxLensVersion.length; i++) {
        const curVersion = Number(maxLensVersion[i]);
        if (curVersion > 0) {
          v1BiggerThenv2 ? result = 1 : result = -1;
          break;
        }
      }
    }
    return result;
  }
  var plugins = {
    moduleIdCardAct,
    moduleFaceCompare,
    checkVersion,
    getCurrentVersionInfo,
    versionCompare,
    forTest
  };
  var dicts = {
    // 国籍（户籍）
    account_type: { "\u57CE\u9547\u6237\u7C4D": "11", "\u519C\u6751\u6237\u7C4D": "12", "\u9999\u6E2F": "16", "\u6FB3\u95E8": "14", "\u53F0\u6E7E": "15", "\u5916\u56FD\u7C4D": "02", "\u65E0\u56FD\u7C4D": "03", "\u5176\u4ED6": "13", "\u4E2D\u56FD\u7C4D": "01", "\u5927\u9646": "10" },
    // 国家
    "common-country": { "\u65E0": "0", "\u5357\u6781\u6D32": "10", "\u4FDD\u52A0\u5229\u4E9A": "100", "\u7F05\u7538": "104", "\u5E03\u9686\u8FEA": "108", "\u767D\u4FC4\u7F57\u65AF": "112", "\u67EC\u57D4\u5BE8": "116", "\u963F\u5C14\u53CA\u5229\u4E9A": "12", "\u5580\u9EA6\u9686": "120", "\u52A0\u62FF\u5927": "124", "\u4F5B\u5F97\u89D2": "132", "\u5F00\u66FC\u7FA4\u5C9B": "136", "\u4E2D\u975E": "140", "\u65AF\u91CC\u5170\u5361": "144", "\u4E4D\u5F97": "148", "\u667A\u5229": "152", "\u4E2D\u56FD": "156", "\u4E2D\u56FD\uFF08\u53F0\u6E7E\u5C45\u6C11\uFF09": "158", "\u7F8E\u5C5E\u8428\u6469\u4E9A": "16", "\u5723\u8BDE\u5C9B": "162", "\u79D1\u79D1\u65AF(\u57FA\u6797)\u7FA4\u5C9B": "166", "\u54E5\u4F26\u6BD4\u4E9A": "170", "\u79D1\u6469\u7F57": "174", "\u9A6C\u7EA6\u7279": "175", "\u521A\u679C": "178", "\u624E\u4F0A\u5C14": "180", "\u5E93\u514B\u7FA4\u5C9B": "184", "\u54E5\u65AF\u8FBE\u9ECE\u52A0": "188", "\u514B\u7F57\u5730\u4E9A": "191", "\u53E4\u5DF4": "192", "\u585E\u6D66\u8DEF\u65AF": "196", "\u5B89\u9053\u5C14": "20", "\u6377\u514B": "203", "\u8D1D\u5B81": "204", "\u4E39\u9EA6": "208", "\u591A\u7C73\u5C3C\u514B": "212", "\u591A\u7C73\u5C3C\u52A0\u5171\u548C\u56FD": "214", "\u5384\u74DC\u591A\u5C14": "218", "\u8428\u5C14\u74E6\u591A": "222", "\u8D64\u9053\u51E0\u5185\u4E9A": "226", "\u57C3\u585E\u4FC4\u6BD4\u4E9A": "231", "\u5384\u7ACB\u7279\u91CC\u4E9A": "232", "\u7231\u6C99\u5C3C\u4E9A": "233", "\u6CD5\u7F57\u7FA4\u5C9B": "234", "\u9A6C\u5C14\u7EF4\u7EB3\u65AF\u7FA4\u5C9B(\u798F\u514B\u5170\u7FA4\u5C9B)": "238", "\u5357\u4E54\u6CBB\u4E9A\u5C9B\u548C\u5357\u6851\u5FB7\u97E6\u5947\u5C9B": "239", "\u5B89\u54E5\u62C9": "24", "\u6590\u6D4E": "242", "\u82AC\u5170": "246", "\u6CD5\u56FD": "250", "\u6CD5\u5C5E\u572D\u4E9A\u90A3": "254", "\u6CD5\u5C5E\u6CE2\u5229\u5C3C\u897F\u4E9A": "258", "\u6CD5\u5C5E\u5357\u90E8\u9886\u571F": "260", "\u5409\u5E03\u63D0": "262", "\u52A0\u84EC": "266", "\u683C\u9C81\u5409\u4E9A": "268", "\u5188\u6BD4\u4E9A": "270", "\u5FB7\u56FD": "276", "\u5B89\u63D0\u74DC\u548C\u5DF4\u5E03\u8FBE": "28", "\u52A0\u7EB3": "288", "\u76F4\u5E03\u7F57\u9640": "292", "\u57FA\u91CC\u5DF4\u65AF": "296", "\u5E0C\u814A": "300", "\u683C\u9675\u5170": "304", "\u683C\u6797\u7EB3\u8FBE": "308", "\u963F\u585E\u62DC\u7586": "31", "\u74DC\u5FB7\u7F57\u666E": "312", "\u5173\u5C9B": "316", "\u963F\u6839\u5EF7": "32", "\u5371\u5730\u9A6C\u62C9": "320", "\u51E0\u5185\u4E9A": "324", "\u572D\u4E9A\u90A3": "328", "\u6D77\u5730 Haiti": "332", "\u8D6B\u5FB7\u5C9B\u548C\u9EA6\u514B\u5510\u7EB3\u5C9B": "334", "\u68B5\u8482\u5188": "336", "\u6D2A\u90FD\u62C9\u65AF": "340", "\u9999\u6E2F": "344", "\u5308\u7259\u5229": "348", "\u51B0\u5C9B": "352", "\u5370\u5EA6": "356", "\u6FB3\u5927\u5229\u4E9A": "36", "\u5370\u5EA6\u5C3C\u897F\u4E9A": "360", "\u4F0A\u6717": "364", "\u4F0A\u62C9\u514B": "368", "\u5DF4\u52D2\u65AF\u5766": "374", "\u4EE5\u8272\u5217": "376", "\u610F\u5927\u5229": "380", "\u79D1\u7279\u8FEA\u74E6": "384", "\u7259\u4E70\u52A0": "388", "\u65E5\u672C": "392", "\u54C8\u8428\u514B\u65AF\u5766": "398", "\u963F\u5BCC\u6C57": "4", "\u5965\u5730\u5229": "40", "\u80AF\u5C3C\u4E9A": "404", "\u671D\u9C9C": "408", "\u97E9\u56FD": "410", "\u79D1\u5A01\u7279": "414", "\u5409\u5C14\u5409\u65AF\u65AF\u5766": "417", "\u8001\u631D": "418", "\u9ECE\u5DF4\u5AE9": "422", "\u83B1\u7D22\u6258": "426", "\u62C9\u8131\u7EF4\u4E9A": "428", "\u5229\u6BD4\u91CC\u4E9A": "430", "\u5229\u6BD4\u4E9A": "434", "\u5217\u652F\u6566\u58EB\u767B": "438", "\u5DF4\u54C8\u9A6C": "44", "\u7ACB\u9676\u5B9B": "440", "\u5362\u68EE\u5821": "442", "\u6FB3\u95E8": "446", "\u9A6C\u8FBE\u52A0\u65AF\u52A0": "450", "\u9A6C\u62C9\u7EF4": "454", "\u9A6C\u6765\u897F\u4E9A": "458", "\u9A6C\u5C14\u4EE3\u592B": "462", "\u9A6C\u91CC": "466", "\u9A6C\u8033\u4ED6": "470", "\u9A6C\u63D0\u5C3C\u514B": "474", "\u6BDB\u91CC\u5854\u5C3C\u4E9A": "478", "\u5DF4\u6797": "48", "\u6BDB\u91CC\u6C42\u65AF": "480", "\u58A8\u897F\u54E5": "484", "\u6469\u7EB3\u54E5": "492", "\u8499\u53E4": "496", "\u6469\u5C14\u591A\u74E6": "498", "\u5B5F\u52A0\u62C9\u56FD": "50", "\u8499\u7279\u585E\u62C9\u7279": "500", "\u6469\u6D1B\u54E5": "504", "\u83AB\u6851\u6BD4\u514B": "508", "\u4E9A\u7F8E\u5C3C\u4E9A": "51", "\u963F\u66FC": "512", "\u7EB3\u7C73\u6BD4\u4E9A": "516", "\u5DF4\u5DF4\u591A\u65AF": "52", "\u7459\u9C81": "520", "\u5C3C\u6CCA\u5C14": "524", "\u8377\u5170": "528", "\u8377\u5C5E\u5B89\u7684\u5217\u65AF": "530", "\u963F\u9C81\u5DF4": "533", "\u65B0\u5580\u91CC\u591A\u5C3C\u4E9A": "540", "\u74E6\u52AA\u963F\u56FE": "548", "\u65B0\u897F\u5170": "554", "\u5C3C\u52A0\u62C9\u74DC": "558", "\u5C3C\u65E5\u5C14": "562", "\u5C3C\u65E5\u5229\u4E9A": "566", "\u7EBD\u57C3": "570", "\u8BFA\u798F\u514B\u5C9B": "574", "\u632A\u5A01": "578", "\u5317\u9A6C\u91CC\u4E9A\u7EB3": "580", "\u7F8E\u5C5E\u592A\u5E73\u6D0B\u5404\u7FA4\u5C9B": "581", "\u5BC6\u514B\u7F57\u5C3C\u897F\u4E9A": "583", "\u9A6C\u7ECD\u5C14\u7FA4\u5C9B": "584", "\u5E15\u52B3": "585", "\u5DF4\u57FA\u65AF\u5766": "586", "\u5DF4\u62FF\u9A6C": "591", "\u5DF4\u5E03\u4E9A\u65B0\u51E0\u5185\u4E9A": "598", "\u767E\u6155\u5927": "60", "\u5DF4\u62C9\u572D": "600", "\u79D8\u9C81": "604", "\u83F2\u5F8B\u5BBE": "608", "\u76AE\u7279\u51EF\u6069\u7FA4\u5C9B": "612", "\u6CE2\u5170": "616", "\u8461\u8404\u7259": "620", "\u51E0\u5185\u4E9A\u6BD4\u7ECD": "624", "\u4E1C\u5E1D\u6C76": "626", "\u6CE2\u591A\u9ECE\u5404": "630", "\u5361\u5854\u5C14": "634", "\u7559\u5C3C\u6C6A": "638", "\u4E0D\u4E39": "64", "\u7F57\u9A6C\u5C3C\u4E9A": "642", "\u4FC4\u7F57\u65AF": "643", "\u5362\u65FA\u8FBE": "646", "\u5723\u8D6B\u52D2\u62FF": "654", "\u5723\u57FA\u8328\u548C\u5C3C\u7EF4\u65AF": "659", "\u5B89\u572D\u62C9": "660", "\u5723\u5362\u897F\u4E9A": "662", "\u5723\u76AE\u57C3\u5C14\u548C\u5BC6\u514B\u9686": "666", "\u5723\u6587\u68EE\u7279\u548C\u683C\u6797\u7EB3\u4E01\u65AF": "670", "\u5723\u9A6C\u529B\u8BFA": "674", "\u5723\u591A\u7F8E\u548C\u666E\u6797\u897F\u6BD4": "678", "\u73BB\u5229\u7EF4\u4E9A": "68", "\u6C99\u7279\u963F\u62C9\u4F2F": "682", "\u585E\u5185\u52A0\u5C14": "686", "\u585E\u820C\u5C14": "690", "\u585E\u62C9\u5229\u6602": "694", "\u6CE2\u65AF\u5C3C\u4E9A\u548C\u9ED1\u585E\u54E5\u7EF4\u90A3": "70", "\u65B0\u52A0\u5761": "702", "\u65AF\u6D1B\u4F10\u514B": "703", "\u8D8A\u5357": "704", "\u65AF\u6D1B\u6587\u5C3C\u4E9A": "705", "\u7D22\u9A6C\u91CC": "706", "\u5357\u975E": "710", "\u6D25\u5DF4\u5E03\u97E6": "716", "\u535A\u8328\u74E6\u7EB3": "72", "\u897F\u6492\u54C8\u62C9": "732", "\u82CF\u4E39": "736", "\u5E03\u7EF4\u5C9B": "74", "\u82CF\u91CC\u5357": "740", "\u65AF\u74E6\u5C14\u5DF4\u7FA4\u5C9B": "744", "\u65AF\u5A01\u58EB\u5170": "748", "\u745E\u5178": "752", "\u745E\u58EB": "756", "\u53D9\u5229\u4E9A": "760", "\u5854\u5409\u514B\u65AF\u5766": "762", "\u6CF0\u56FD": "764", "\u591A\u54E5": "768", "\u6258\u514B\u52B3": "772", "\u6C64\u52A0": "776", "\u7279\u7ACB\u5C3C\u8FBE\u548C\u591A\u5DF4\u54E5": "780", "\u963F\u8054\u914B": "784", "\u7A81\u5C3C\u65AF": "788", "\u571F\u8033\u5176": "792", "\u571F\u5E93\u66FC\u65AF\u5766": "795", "\u7279\u514B\u65AF\u79D1\u65AF\u7FA4\u5C9B": "796", "\u56FE\u74E6\u5362": "798", "\u963F\u5C14\u5DF4\u5C3C\u4E9A": "8", "\u4E4C\u5E72\u8FBE": "800", "\u4E4C\u514B\u5170": "804", "\u9A6C\u65AF\u987F": "807", "\u57C3\u53CA": "818", "\u82F1\u56FD": "826", "\u5766\u6851\u5C3C\u4E9A": "834", "\u4F2F\u5229\u5179": "84", "\u7F8E\u56FD": "840", "\u7F8E\u5C5E\u7EF4\u5C14\u4EAC\u7FA4\u5C9B": "850", "\u5E03\u57FA\u7EB3\u6CD5\u7D22": "854", "\u4E4C\u62C9\u572D": "858", "\u82F1\u5C5E\u5370\u5EA6\u6D0B\u9886\u571F": "86", "\u4E4C\u5179\u522B\u514B\u65AF\u5766": "860", "\u59D4\u5185\u745E\u62C9": "862", "\u74E6\u5229\u65AF\u548C\u5BCC\u56FE\u7EB3": "876", "\u8428\u6469\u4E9A": "882", "\u4E5F\u95E8": "887", "\u5357\u65AF\u62C9\u592B": "891", "\u8D5E\u6BD4\u4E9A": "894", "\u5DF4\u897F": "895", "\u7EA6\u65E6": "896", "\u6BD4\u5229\u65F6": "897", "\u897F\u73ED\u7259": "898", "\u6240\u7F57\u95E8\u7FA4\u5C9B": "90", "\u82F1\u5C5E\u7EF4\u5C14\u4EAC\u7FA4\u5C9B": "92", "\u6587\u83B1": "96", "\u9ED1\u5C71": "997", "\u7231\u5C14\u5170": "372" },
    // 移交罪犯机关
    sqjzjdjg: { "\u4EBA\u6C11\u6CD5\u9662": "01", "\u516C\u5B89\u673A\u5173": "02", "\u76D1\u72F1\u7BA1\u7406\u673A\u5173": "03" },
    // 社区矫正对象决定机关
    yjzfjg: { "\u76D1\u72F1": "01", "\u770B\u5B88\u6240": "02", "\u516C\u5B89\u5C40": "03", "\u5176\u5B83": "04" },
    // 文化程度
    "common-edu_bg": { "\u6587\u76F2": "01", "\u5C0F\u5B66": "02", "\u521D\u4E2D": "03", "\u9AD8\u4E2D": "04", "\u4E2D\u4E13\u548C\u4E2D\u6280": "09", "\u5927\u4E13": "05", "\u672C\u79D1": "06", "\u7855\u58EB": "07", "\u535A\u58EB\u53CA\u4EE5\u4E0A\uFF08\u5305\u542B\u535A\u58EB\uFF09": "08", "\u5176\u4ED6": "99" },
    // 婚姻状况
    sfb_hyzk: { "\u672A\u5A5A": "01", "\u5DF2\u5A5A": "02", "\u79BB\u5F02": "03", "\u4E27\u5076": "04" },
    // 政治面貌
    political_status: { "\u4E2D\u5171\u515A\u5458": "01", "\u4E2D\u5171\u9884\u5907\u515A\u5458": "02", "\u5171\u9752\u56E2\u5458": "03", "\u6C11\u9769\u515A\u5458": "04", "\u6C11\u76DF\u76DF\u5458": "05", "\u6C11\u5EFA\u4F1A\u5458": "06", "\u6C11\u8FDB\u4F1A\u5458": "07", "\u519C\u5DE5\u515A\u515A\u5458": "08", "\u81F4\u516C\u515A\u515A\u5458": "09", "\u4E5D\u4E09\u5B66\u793E\u793E\u5458": "10", "\u53F0\u76DF\u76DF\u5458": "11", "\u7FA4\u4F17": "13", "\u65E0\u515A\u6D3E\u6C11\u4E3B\u4EBA\u58EB": "12", "\u56FD\u6C11\u515A": "14", "\u5916\u56FD\u60C5\u62A5\u4EBA\u5458": "103", "\u53CD\u52A8\u4F1A\u9053\u95E8\u6210\u5458": "104", "\u654C\u7279\u7EC4\u7EC7\u6210\u5458": "105", "\u5176\u4ED6": "99" },
    // 矫正类型
    "common-outside_type": { "\u7BA1\u5236": "01", "\u7F13\u5211": "02", "\u5047\u91CA": "03", "\u6682\u4E88\u76D1\u5916\u6267\u884C": "04", "\u5176\u4ED6": "99" },
    // 身体状况
    zyjwzxrystzk: { "\u4E25\u91CD\u75BE\u75C5": "01", "\u6000\u5B55\u6216\u54FA\u4E73": "02", "\u751F\u6D3B\u4E0D\u80FD\u81EA\u7406": "03" },
    // 有无
    "approve-flag": { "\u65E0": "0", "\u6709": "1" },
    // 是否
    "common-is_or_not": { "\u5426": "0", "\u662F": "1" },
    // 健康状况
    sfb_jkzk: { "\u826F\u597D": "1", "\u4E00\u822C": "2", "\u8F83\u5DEE": "3" },
    // 就业就学情况
    jyjx: { "\u5C31\u4E1A": "02", "\u5C31\u5B66": "01", "\u52A1\u519C": "03", "\u65E0\u4E1A": "04" },
    // 被捕前职业
    pqzy: { "\u56FD\u5BB6\u5DE5\u4F5C\u4EBA\u5458": "01", "\u73B0\u5F79\u519B\u4EBA": "02", "\u5DE5\u4EBA": "03", "\u519C\u6C11": "04", "\u804C\u5458": "05", "\u79C1\u4F01\u4E1A\u4E3B\u3001\u4E2A\u4F53\u52B3\u52A8\u8005": "06", "\u5B66\u751F": "07", "\u79BB\u9000\u4F11\u4EBA\u5458": "08", "\u65E0\u4E1A\u4EBA\u5458": "09", "\u5176\u4ED6": "10" },
    // 国家工作人员类别
    gjgzrylb: { "\u56FD\u5BB6\u673A\u5173": "01", "\u56FD\u6709\u516C\u53F8\u6216\u4F01\u4E1A": "02", "\u91D1\u878D\u673A\u6784": "03", "\u4E8B\u4E1A\u5355\u4F4D": "04", "\u4EBA\u6C11\u56E2\u4F53": "05", "\u5176\u4ED6": "06" },
    // 工人具体状况
    grjtzk: { "\u5728\u4E1A": "01", "\u4E0B\u5C97": "02" },
    // 农民具体状况
    nmjtzk: { "\u6C11\u5DE5": "01", "\u5176\u4ED6": "02" },
    // 具体传染病史
    jtcrbs: { "\u827E\u6ECB\u75C5": "01", "\u80BA\u7ED3\u6838": "02", "\u75C5\u6BD2\u6027\u809D\u708E": "03", "\u4F20\u67D3\u6027\u975E\u5178\u578B\u80BA\u708E": "04", "\u6D41\u884C\u6027\u4E59\u578B\u8111\u708E": "05", "\u79BD\u6D41\u611F": "06", "\u9EBB\u75B9": "07", "\u767B\u9769\u70ED": "08", "\u72C2\u72AC\u75C5": "09", "\u6DCB\u75C5\u3001\u6885\u6BD2": "10", "\u5176\u5B83\u4F20\u67D3\u75C5": "11" },
    // 前科类型
    qklx: { "\u884C\u653F\u5904\u7F5A": "01", "\u5211\u4E8B\u5904\u7F5A": "02" },
    // 文书类型
    wslx: { "\u5176\u4ED6": "0", "\u5211\u4E8B\u5224\u51B3\u4E66": "1", "\u5211\u4E8B\u88C1\u5B9A\u4E66": "2", "\u6682\u4E88\u76D1\u5916\u6267\u884C\u51B3\u5B9A\u4E66(\u901A\u77E5\u4E66)": "3" },
    resume_duty: { "\u4E2D\u56FD\u5171\u4EA7\u515A\u673A\u5173\u8D1F\u8D23\u4EBA": "10100", "\u56FD\u5BB6\u673A\u5173\u8D1F\u8D23\u4EBA": "10200", "\u6C11\u4E3B\u515A\u6D3E\u548C\u5DE5\u5546\u8054\u8D1F\u8D23\u4EBA": "10300", "\u4EBA\u6C11\u56E2\u4F53\u548C\u7FA4\u4F17\u56E2\u4F53\u3001\u793E\u4F1A\u7EC4\u7EC7\u53CA\u5176\u4ED6\u6210\u5458\u7EC4\u7EC7\u8D1F\u8D23\u4EBA": "10400", "\u57FA\u5C42\u7FA4\u4F17\u81EA\u6CBB\u7EC4\u7EC7\u8D1F\u8D23\u4EBA": "10500", "\u4F01\u4E8B\u4E1A\u5355\u4F4D\u8D1F\u8D23\u4EBA": "10600", "\u54F2\u5B66\u7814\u7A76\u4EBA\u5458": "20100", "\u5DE5\u7A0B\u6280\u672F\u4EBA\u5458": "20200", "\u519C\u4E1A\u6280\u672F\u4EBA\u5458": "20300", "\u98DE\u673A\u548C\u8239\u8236\u6280\u672F\u4EBA\u5458": "20400", "\u536B\u751F\u4E13\u4E1A\u6280\u672F\u4EBA\u5458": "20500", "\u7ECF\u6D4E\u548C\u91D1\u878D\u4E13\u4E1A\u4EBA\u5458": "20600", "\u6CD5\u5F8B\u3001\u793E\u4F1A\u548C\u5B97\u6559\u4E13\u4E1A\u4EBA\u5458": "20700", "\u6559\u5B66\u4EBA\u5458": "20800", "\u6587\u5B66\u827A\u672F\u3001\u4F53\u80B2\u4E13\u4E1A\u4EBA\u5458": "20900", "\u65B0\u95FB\u51FA\u7248\u3001\u6587\u5316\u4E13\u4E1A\u4EBA\u5458": "21000", "\u5176\u4ED6\u4E13\u4E1A\u6280\u672F\u4EBA\u5458": "29900", "\u529E\u4E8B\u4EBA\u5458": "30100", "\u5B89\u5168\u548C\u6D88\u9632\u4EBA\u5458": "30200", "\u5176\u4ED6\u529E\u4E8B\u4EBA\u5458\u548C\u6709\u5173\u4EBA\u5458": "39900", "\u6279\u53D1\u4E0E\u96F6\u552E\u670D\u52A1\u4EBA\u5458": "40100", "\u4EA4\u901A\u8FD0\u8F93\u3001\u4ED3\u50A8\u548C\u90AE\u653F\u4E1A\u670D\u52A1\u4EBA\u5458": "40200", "\u4F4F\u5BBF\u548C\u9910\u996E\u670D\u52A1\u4EBA\u5458": "40300", "\u4FE1\u606F\u4F20\u8F93\u3001\u8F6F\u4EF6\u548C\u4FE1\u606F\u6280\u672F\u670D\u52A1\u4EBA\u5458": "40400", "\u91D1\u878D\u670D\u52A1\u4EBA\u5458": "40500", "\u623F\u5730\u4EA7\u670D\u52A1\u4EBA\u5458": "40600", "\u79DF\u8D41\u548C\u5546\u52A1\u670D\u52A1\u4EBA\u5458": "40700", "\u6280\u672F\u8F85\u52A9\u670D\u52A1\u4EBA\u5458": "40800", "\u6C34\u5229\u3001\u73AF\u5883\u548C\u516C\u5171\u8BBE\u65BD\u7BA1\u7406\u670D\u52A1\u4EBA\u5458": "40900", "\u5C45\u6C11\u670D\u52A1\u4EBA\u5458": "41000", "\u7535\u529B\u3001\u71C3\u6C14\u53CA\u6C34\u4F9B\u5E94\u670D\u52A1\u4EBA\u5458": "41100", "\u4FEE\u7406\u53CA\u5236\u4F5C\u670D\u52A1\u4EBA\u5458": "41200", "\u6587\u5316\u3001\u4F53\u80B2\u53CA\u5A31\u4E50\u670D\u52A1\u4EBA\u5458": "41300", "\u5065\u5EB7\u670D\u52A1\u4EBA\u5458": "41400", "\u519C\u3001\u6797\u3001\u7267\u3001\u6E14\u4E1A\u751F\u4EA7\u53CA\u8F85\u52A9\u4EBA\u5458": "50000", "\u519C\u4E1A\u751F\u4EA7\u4EBA\u5458": "50100", "\u6797\u4E1A\u751F\u4EA7\u4EBA\u5458": "50200", "\u755C\u7267\u4E1A\u751F\u4EA7\u4EBA\u5458": "50300", "\u6E14\u4E1A\u751F\u4EA7\u4EBA\u5458": "50400", "\u519C\u6797\u7267\u6E14\u751F\u4EA7\u8F85\u52A9\u4EBA\u5458": "50500", "\u5176\u4ED6\u519C\u3001\u6797\u3001\u7267\u3001\u6E14\u3001\u6C34\u5229\u4E1A\u751F\u4EA7\u4EBA\u5458": "59900", "\u519C\u526F\u4EA7\u54C1\u52A0\u5DE5\u4EBA\u5458": "60100", "\u98DF\u54C1\u3001\u996E\u6599\u751F\u4EA7\u52A0\u5DE5\u4EBA\u5458": "60200", "\u70DF\u8349\u53CA\u5176\u5236\u54C1\u52A0\u5DE5\u4EBA\u5458": "60300", "\u7EBA\u7EC7\u3001\u9488\u7EC7\u3001\u5370\u67D3\u4EBA\u5458": "60400", "\u7EBA\u7EC7\u54C1\u3001\u670D\u88C5\u548C\u76AE\u9769\u3001\u76AE\u6BDB\u5236\u54C1\u52A0\u5DE5\u5236\u4F5C\u4EBA\u5458": "60500", "\u6728\u6750\u52A0\u5DE5\u3001\u519C\u5177\u4E0E\u6728\u5236\u54C1\u5236\u4F5C\u4EBA\u5458": "60600", "\u7EB8\u53CA\u7EB8\u5236\u54C1\u751F\u4EA7\u52A0\u5DE5\u4EBA\u5458\u4EBA\u5458": "60700", "\u5370\u5237\u548C\u8BB0\u5F55\u5A92\u4ECB\u590D\u5236\u4EBA\u5458": "60800", "\u6587\u6559\u3001\u5DE5\u7F8E\u4F53\u80B2\u548C\u5A31\u4E50\u7528\u54C1\u5236\u4F5C\u4EBA\u5458": "60900", "\u77F3\u6CB9\u52A0\u5DE5\u548C\u70BC\u7126\u3001\u7164\u5316\u5DE5\u5236\u4F5C\u4EBA\u5458": "61000", "\u5316\u5B66\u539F\u6599\u548C\u5316\u5B66\u5236\u54C1\u5236\u9020\u4EBA\u5458": "61100", "\u533B\u836F\u5236\u9020\u4EBA\u5458": "61200", "\u5316\u5B66\u7EA4\u7EF4\u5236\u9020\u4EBA\u5458": "61300", "\u6A61\u80F6\u548C\u5851\u6599\u5236\u54C1\u5236\u9020\u4EBA\u5458": "61400", "\u975E\u91D1\u5C5E\u77FF\u7269\u5236\u54C1\u5236\u9020\u4EBA\u5458": "61500", "\u91C7\u77FF\u4EBA\u5458": "61600", "\u91D1\u5C5E\u51B6\u70BC\u548C\u538B\u5EF6\u52A0\u5DE5\u4EBA\u5458": "61700", "\u673A\u68B0\u5236\u9020\u57FA\u7840\u52A0\u5DE5\u4EBA\u5458": "61800", "\u91D1\u5C5E\u5236\u54C1\u5236\u9020\u4EBA\u5458": "61900", "\u901A\u7528\u8BBE\u5907\u5236\u9020\u4EBA\u5458": "62000", "\u4E13\u7528\u8BBE\u5907\u5236\u9020\u4EBA\u5458": "62100", "\u6C7D\u8F66\u5236\u9020\u4EBA\u5458": "62200", "\u94C1\u8DEF\u3001\u8239\u8236\u3001\u822A\u7A7A\u8BBE\u5907\u5236\u9020\u4EBA\u5458": "62300", "\u7535\u6C14\u673A\u68B0\u548C\u5668\u6750\u5236\u9020\u4EBA\u5458": "62400", "\u8BA1\u7B97\u673A\u3001\u901A\u4FE1\u3001\u548C\u5176\u4ED6\u7535\u5B50\u8BBE\u5907\u5236\u9020\u4EBA\u5458": "62500", "\u4EEA\u5668\u4EEA\u8868\u5236\u9020\u4EBA\u5458": "62600", "\u5E9F\u5F03\u8D44\u6E90\u7EFC\u5408\u5229\u7528\u4EBA\u5458": "62700", "\u7535\u529B\u3001\u70ED\u529B\u3001\u6C14\u4F53\u3001\u6C34\u751F\u4EA7\u548C\u8F93\u914D\u4EBA\u5458": "62800", "\u5EFA\u7B51\u65BD\u5DE5\u4EBA\u5458": "62900", "\u8FD0\u8F93\u8BBE\u5907\u548C\u901A\u7528\u5DE5\u7A0B\u673A\u68B0\u64CD\u4F5C\u4EBA\u5458\u53CA\u6709\u5173\u4EBA\u5458": "63000", "\u751F\u4EA7\u8F85\u52A9\u4EBA\u5458": "63100", "\u5176\u4ED6\u751F\u4EA7\u5236\u9020\u53CA\u6709\u5173\u4EBA\u5458": "69900", "\u519B\u4EBA": "70000", "\u4E0D\u4FBF\u5206\u7C7B\u7684\u5176\u4ED6\u4ECE\u4E1A\u4EBA\u5458": "80000", "\u5B66\u751F": "90000", "\u65E0\u4E1A": "91000" },
    "common-family-relationship": { "\u672C\u4EBA\u6216\u6237\u4E3B": "01", "\u914D\u5076": "02", "\u5B50": "03", "\u5973": "04", "\u5B59\u5B50\u5B59\u5973\u6216\u5916\u5B59\u5B50\u5916\u5B59\u5973": "05", "\u7236\u6BCD": "06", "\u7956\u7236\u6BCD\u6216\u5916\u7956\u7236\u6BCD": "07", "\u5144\u3001\u5F1F\u3001\u59D0\u3001\u59B9": "08", "\u5176\u4ED6": "99" },
    yys: { "\u7535\u4FE1": "1", "\u8054\u901A": "2", "\u79FB\u52A8": "3" },
    dzdwfs: { "\u57FA\u7AD9": "01", "\u8155\u8868": "02" },
    hzbczt: { "\u793E\u533A\u77EB\u6B63\u673A\u6784\u4FDD\u7BA1": "01", "\u5931\u6548": "02", "\u9057\u5931": "03", "\u6CE8\u9500": "04", "\u88AB\u5176\u4ED6\u673A\u5173\u6263\u62BC": "05", "\u81EA\u884C\u4FDD\u5B58": "06" }
  };
  function updateKeyHandler(storageKey, handler, canEmpty = false) {
    return (value) => {
      formatAppLog("log", "at utils/http.ts:12", "updateKeyHandler:", storageKey, value);
      if (value || canEmpty && value !== void 0) {
        uni.setStorageSync(storageKey, value);
        handler(value);
        return;
      }
      const storageVal = uni.getStorageSync(storageKey);
      formatAppLog("log", "at utils/http.ts:19", "updateKeyHandler storageKey:", storageVal);
      if (storageVal) {
        handler(storageVal);
      }
    };
  }
  var DEPT_ID = 5073;
  var DeptIdStorageKey = "DeptIdStorageKey";
  var updateDeptId = updateKeyHandler(DeptIdStorageKey, (v) => {
    DEPT_ID = parseInt(v);
  });
  updateDeptId();
  var DEPT_NAME = "";
  var DeptNameStorageKey = "DeptNameStorageKey";
  var updateDeptName = updateKeyHandler(DeptNameStorageKey, (v) => {
    DEPT_NAME = v;
  });
  updateDeptName();
  var systemName = "";
  var systemNameStorageKey = "systemNameStorageKey";
  var updateSystemName = updateKeyHandler(systemNameStorageKey, (v) => {
    systemName = v;
  }, true);
  updateSystemName();
  var macAddress = "";
  var macAddressStorageKey = "macAddressStorageKey";
  var updateMacAddress = updateKeyHandler(macAddressStorageKey, (v) => {
    macAddress = v;
  });
  updateMacAddress();
  var isDev = true;
  var apiUrl = isDev ? "/api" : "http://59.206.216.141:9090";
  apiUrl = "https://jnsj.tjjn-datalake.com:9965/jzj/api";
  var ApiUrlStorageKey = "ApiUrlStorageKey";
  function getApiUrl() {
    return uni.getStorageSync(ApiUrlStorageKey) || apiUrl;
  }
  var updateApiUrl = updateKeyHandler(ApiUrlStorageKey, (v) => {
    apiUrl = v;
  });
  updateApiUrl();
  var apis = {
    // 入参 header: { code: '' }
    token: "/module/external/external_getToken.do",
    // 普通文件上传 不带query ， 人脸、声纹、指纹文件上传 saveType值：   renlian:人脸 shenwen:声纹 zhiwen:指纹
    upload: "/ReceivePicServlet",
    // 获取生物特征 id_num token
    findBiosignature: "/module/external/external_findCriminalBiosignature.do",
    // 新增社矫对象
    addCriminal: "/module/external/external_saveCriminal.do",
    // 生物特性录入 id_num， filePath， tzlx:"1"        //特征类型    1：人脸；2：指纹；3：声纹
    saveBiosignature: "/module/external/external_saveBiosignature.do",
    // 保存简历，header需要token，json要加id_num
    saveResume: "/module/external/external_saveResume.do",
    // 保存家庭关系，header需要token，json要加id_num
    saveRelation: "/module/external/external_saveRelationship.do",
    // 获取字典 "codeType":"common-outside_type"
    getCodeBook: "/module/external/external_getCodeBook.do",
    // 获取部门
    getDept: "/module/external/external_getDept.do",
    // 通过部门
    getDeptForArea: "/module/external/external_getDeptForCounty.do",
    // 查询该机构及下属机构的用户，如果不传deptId，默认为设备所在机构及下属单位工作人员
    getSystemUser: "/module/external/external_getSystemUser.do",
    // 获取城市：/area_getCityList.do?mode=ajaxJson&ids=370000，ids为国家字典对应值
    getCityList: "/area_getCityList.do",
    // 获取地区: /area_getAreaList.do?mode=ajaxJson&ids=370100，ids为城市字典对应值
    getAreaList: "/area_getAreaList.do",
    // 获取所有司法所
    getDepts: "/module/external/external_getDept.do",
    // 签到，入参
    // {
    //     "CRIMINAL_NAME":"张*康",							   矫正对象姓名（非必填）
    //     "CRIMINAL_SFZH":"370523199305054613",				 矫正对象身份证号码（必填）
    //     "FILE_PATH":"202104/202104070411411.png",			 报道的图片或者视频路径	调用上方文件上传接口中URL1获取路径
    //     "SIGN_IN_TYPE":"1",									 报到类型，1-公益活动  2、日常报道   3、教育学习（必填） 
    //     "SIGN_IN_TIME": "2021-07-15 10:10:00",               签到时间（必填：yyyy-MM-dd HH:mm:ss）
    //     "EVENT_ID":""                                        报告事件ID，具体ID可通过接口17、接口18获取 （根据情况而定，															  报道类型为公益活动或者教育学习时报告事件ID为必填项） 
    // } 
    signIn: "/module/external/external_criminalSignIn.do",
    // 查询公益活动， header带入token，body带id_num
    queryLabor: "/module/external/external_queryLaborEventSpecial.do",
    // 查询教育学习 参数同上查询公益活动
    queryStudy: "/module/external/external_queryStudyEventSpecial.do",
    // 新增矫正对象执行地变更、迁居
    // {
    //     "id_num":"320923199105106354", //身份证号（必填）
    // 	"time":"2021-08-13 13:13:13", //申请时间（必填， yyyy-MM-dd hh:mm:ss）
    // 	"province":"370000", //省  （必填，参照接口7）
    // 	"city":"371500", //市    （必填，参照接口5）
    // 	"area":"371502", //区      （必填，参照接口6）
    //     "type":"",       //变更类型  （非必填，不填或者为空时为执行地变更， 值为1时为迁居） 
    // 	"street":"东昌府区司法局", //乡镇、街道   （必填）
    //     "newDeptId":"1535", //新的机构，只能为区县级及以上单位，通过接口26获得 （必填）
    // 	"reason":"系统调试", //变更理由    （必填）
    //     "userNum":"371521198704140037"//系统中司法所工作人员身份证，默认角色为司法所工作岗人员  （必填）
    // }
    addNewRelocate: "/module/external/external_addNewRelocate.do",
    // 获取矫正对象执行地变更、迁居：id_num //身份证号 （必填）type变更类型，非必填，不填或者为空时为执行地变更， 值为1时为迁居）；需要带token
    getNewRelocate: "/module/external/external_getNewRelocate.do",
    // 获取矫正对象文书列表：id_num 身份证号；需要带token
    getFiles: "/module/eleDocument/eleDocument_getSignFileList.do",
    // 获取矫正对象文书详情
    getFile: "/module/eleDocument/eleDocument_getSignFile.do",
    // 上传合并后的文书
    uploadFile: "/module/eleDocument/eleDocument_uploadSignFile.do",
    // 获取矫正对象请假记录列表 入参id_num header放token
    getLeaveList: "/module/external/external_getLeaveList.do",
    // 查询请假记录详情 入参leaveId header放token
    getLeaveDetail: "/module/external/external_getLeaveDetail.do",
    // 新增请假 header需要带token
    addLeave: "/module/external/external_leaveRegister.do",
    // 销假 入参leaveId header放token
    leaveBack: "/module/external/external_leaveBack.do",
    // 查询个人档案相关 id_num token
    personInfo: "/module/external/external_findPersonalInfo.do",
    // 查询在线学习记录 id_num，可选："page": 28,"limit": 16,"studyMonth": "2022-10"  header放token
    recordStudy: "/module/external/external_getOnlineInquiry.do",
    // 查询签到记录 id_num，可选："page": 28,"limit": 16  header放token
    recordSign: "/module/external/external_getAttendance.do",
    // 查询心理评测报告  id_num header放token
    recordEvaluating: "/module/external/external_getAnswer.do",
    // 查询警告记录   id_num header放token
    recordWarning: "/module/external/external_getAlarmExamine.do",
    // 查询训诫记录   id_num header放token
    recordAdvise: "/module/external/external_getSubmitAdvise.do"
  };
  function upload(filepath, type, timeout = 60) {
    return new Promise((resolve, reject) => {
      const api = `${apis.upload}${type ? "?saveType=" + type : ""}`;
      const url2 = getApiUrl() + api;
      formatAppLog("log", "at utils/http.ts:176", "\u4E0A\u4F20\u7684\u53C2\u6570\uFF1A", url2, filepath);
      uni.uploadFile({
        url: url2,
        filePath: filepath,
        timeout: timeout * 1e3,
        complete: (result) => {
          const {
            statusCode,
            data,
            errMsg
          } = result;
          if (result.statusCode == 200) {
            formatAppLog("log", "at utils/http.ts:192", "\u8BF7\u6C42\u7ED3\u679C\uFF1A", data);
            resolve(data);
            deleteFile(filepath);
          } else {
            reject(errMsg);
          }
        }
      });
    });
  }
  function deleteFile(path) {
    formatAppLog("log", "at utils/http.ts:206", "delete file:", path);
    plus.io.resolveLocalFileSystemURL(path, (fileEntry) => {
      fileEntry.remove();
    });
  }
  function requestApi(api, body, header, respHandler) {
    if (api === apis.getCodeBook)
      return new Promise((resolve) => {
        resolve(dicts[body.codeType]);
      });
    return request(getApiUrl() + api, body, header, respHandler);
  }
  function request(url2, body, header, respHandler) {
    formatAppLog("log", "at utils/http.ts:221", url2, body, header);
    return new Promise((resolve, reject) => {
      uni.request({
        url: url2,
        data: body,
        header: __spreadValues({}, header),
        // dataType: "json",
        method: "POST",
        timeout: 6e4,
        complete: (result) => {
          var _a;
          const {
            statusCode,
            data,
            errMsg
          } = result;
          formatAppLog("log", "at utils/http.ts:240", result);
          if (result.statusCode == 200) {
            respHandler && respHandler(data);
            if (data.code == "200" || data.code == "0") {
              if (body && body.codeType) {
                formatAppLog("log", "at utils/http.ts:245", "*******************************" + body.codeType + "*******************************");
                formatAppLog("log", "at utils/http.ts:246", body.codeType + ":" + JSON.stringify(data.data));
              }
              resolve(data.data);
            } else {
              reject((_a = data.msg) != null ? _a : data.message);
            }
          } else {
            reject(cnErrMsg(errMsg));
          }
        }
      });
    });
  }
  function cnErrMsg(errMsg) {
    if (!errMsg || !errMsg.indexOf) {
      return "\u7F51\u7EDC\u9519\u8BEF";
    }
    if (errMsg.indexOf("timeout") > -1) {
      return "\u8BF7\u6C42\u8D85\u65F6";
    }
    if (errMsg.indexOf("abort") > -1) {
      return "";
    }
    return "\u7F51\u7EDC\u9519\u8BEF";
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

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/pages/auth/auth.js
  var _style_0$2 = { "uni-tag": { "": { "lineHeight": 14, "fontSize": 12, "fontWeight": "200", "paddingTop": 4, "paddingRight": 7, "paddingBottom": 4, "paddingLeft": 7, "color": "#ffffff", "borderRadius": 3, "backgroundColor": "#8f939c", "borderWidth": "1rpx", "borderStyle": "solid", "borderColor": "#8f939c" } }, "uni-tag--default": { "": { "fontSize": 13 } }, "uni-tag--default--inverted": { "": { "color": "#8f939c", "borderColor": "#8f939c" } }, "uni-tag--small": { "": { "paddingTop": 2, "paddingRight": 5, "paddingBottom": 2, "paddingLeft": 5, "fontSize": 12, "borderRadius": 2 } }, "uni-tag--mini": { "": { "paddingTop": 1, "paddingRight": 3, "paddingBottom": 1, "paddingLeft": 3, "fontSize": 12, "borderRadius": 2 } }, "uni-tag--primary": { "": { "backgroundColor": "#2979ff", "borderColor": "#2979ff", "color": "#ffffff" } }, "uni-tag--success": { "": { "color": "#ffffff", "backgroundColor": "#18bc37", "borderColor": "#18bc37" } }, "uni-tag--warning": { "": { "color": "#ffffff", "backgroundColor": "#f3a73f", "borderColor": "#f3a73f" } }, "uni-tag--error": { "": { "color": "#ffffff", "backgroundColor": "#e43d33", "borderColor": "#e43d33" } }, "uni-tag--primary--inverted": { "": { "color": "#2979ff", "borderColor": "#2979ff" } }, "uni-tag--success--inverted": { "": { "color": "#18bc37", "borderColor": "#18bc37" } }, "uni-tag--warning--inverted": { "": { "color": "#f3a73f", "borderColor": "#f3a73f" } }, "uni-tag--error--inverted": { "": { "color": "#e43d33", "borderColor": "#e43d33" } }, "uni-tag--inverted": { "": { "backgroundColor": "#ffffff" } }, "uni-tag--circle": { "": { "!borderRadius": 15 } }, "uni-tag--mark": { "": { "!borderTopLeftRadius": 0, "!borderBottomLeftRadius": 0, "!borderTopRightRadius": 15, "!borderBottomRightRadius": 15 } }, "uni-tag--disabled": { "": { "opacity": 0.5 } }, "uni-tag-text": { "": { "color": "#ffffff", "fontSize": 14 } }, "uni-tag-text--primary": { "": { "color": "#2979ff" } }, "uni-tag-text--success": { "": { "color": "#18bc37" } }, "uni-tag-text--warning": { "": { "color": "#f3a73f" } }, "uni-tag-text--error": { "": { "color": "#e43d33" } }, "uni-tag-text--small": { "": { "fontSize": 12 } } };
  var _sfc_main$22 = {
    name: "UniTag",
    emits: ["click"],
    props: {
      type: {
        // 标签类型default、primary、success、warning、error、royal
        type: String,
        default: "default"
      },
      size: {
        // 标签大小 normal, small
        type: String,
        default: "normal"
      },
      // 标签内容
      text: {
        type: String,
        default: ""
      },
      disabled: {
        // 是否为禁用状态
        type: [Boolean, String],
        default: false
      },
      inverted: {
        // 是否为空心
        type: [Boolean, String],
        default: false
      },
      circle: {
        // 是否为圆角样式
        type: [Boolean, String],
        default: false
      },
      mark: {
        // 是否为标记样式
        type: [Boolean, String],
        default: false
      },
      customStyle: {
        type: String,
        default: ""
      }
    },
    computed: {
      classes() {
        const {
          type,
          disabled,
          inverted,
          circle,
          mark,
          size,
          isTrue
        } = this;
        const classArr = [
          "uni-tag--" + type,
          "uni-tag--" + size,
          isTrue(disabled) ? "uni-tag--disabled" : "",
          isTrue(inverted) ? "uni-tag--" + type + "--inverted" : "",
          isTrue(circle) ? "uni-tag--circle" : "",
          isTrue(mark) ? "uni-tag--mark" : "",
          // type === 'default' ? 'uni-tag--default' : 'uni-tag-text',
          isTrue(inverted) ? "uni-tag--inverted uni-tag-text--" + type : "",
          size === "small" ? "uni-tag-text--small" : ""
        ];
        return classArr.join(" ");
      }
    },
    methods: {
      isTrue(value) {
        return value === true || value === "true";
      },
      onClick() {
        if (this.isTrue(this.disabled))
          return;
        this.$emit("click");
      }
    }
  };
  function _sfc_render$22(_ctx, _cache, $props, $setup, $data, $options) {
    return $props.text ? ((0, import_vue8.openBlock)(), (0, import_vue8.createElementBlock)(
      "u-text",
      {
        key: 0,
        class: (0, import_vue8.normalizeClass)(["uni-tag", $options.classes]),
        style: (0, import_vue8.normalizeStyle)($props.customStyle),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
      },
      (0, import_vue8.toDisplayString)($props.text),
      7
      /* TEXT, CLASS, STYLE */
    )) : (0, import_vue8.createCommentVNode)("v-if", true);
  }
  var __easycom_22 = /* @__PURE__ */ _export_sfc(_sfc_main$22, [["render", _sfc_render$22], ["styles", [_style_0$2]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/uni_modules/uni-tag/components/uni-tag/uni-tag.vue"]]);
  var _style_0$13 = { "input-popup_content": { "": { "uni-forms-item__label": { "": { "fontSize": 16, "color": "#333333" } } } } };
  var _sfc_main$13 = {
    name: "input-popup",
    emits: ["cancel", "afterVerify", "afterOther"],
    props: {
      title: {
        type: String,
        default: "\u7BA1\u7406\u5458\u540E\u53F0\u767B\u5F55"
      },
      labelWidth: {
        type: [Number, String],
        default: 65
      },
      accounts: {
        type: Array,
        default() {
          return [{
            user: "test",
            password: "123@abc"
          }];
        }
      },
      forms: {
        type: Array,
        default() {
          return [
            {
              label: "\u8D26\u53F7\uFF1A",
              placeholder: "\u8D26\u53F7",
              err: "\u8D26\u53F7\u6216\u8005\u5BC6\u7801\u4E0D\u6B63\u786E",
              type: "text"
            },
            {
              label: "\u5BC6\u7801\uFF1A",
              placeholder: "\u5BC6\u7801",
              err: "\u8D26\u53F7\u6216\u8005\u5BC6\u7801\u4E0D\u6B63\u786E",
              type: "password"
            }
          ];
        }
      },
      placeholder: {
        type: String,
        default: "\u8BF7\u8F93\u5165\u7BA1\u7406\u5458"
      },
      warning: {
        type: [Boolean, String],
        default: false
      },
      otherText: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        inputObj: {},
        closed: true
      };
    },
    computed: {
      rules() {
        const rules = {};
        this.forms.forEach((form, i) => {
          rules[i] = {
            rules: [
              {
                required: true,
                errorMessage: this.placeholder + form.placeholder
              },
              this.formOtherRule(form)
            ]
          };
        });
        return rules;
      },
      formOtherRule() {
        const getValidateFunction = (form) => {
          return (rule, val, data, callback) => {
            if (form.verify) {
              return form.verify(val);
            }
            formatAppLog("log", "at components/input-popup/input-popup.vue:99", rule, val, data);
            if (!data[0] || !data[1])
              return true;
            const account = this.accounts.find((a) => a.user === data[0]);
            if (!account)
              return false;
            return account.password === data[1];
          };
        };
        return (form) => {
          return {
            errorMessage: form.err || "\u8D26\u53F7\u6216\u8005\u5BC6\u7801\u4E0D\u6B63\u786E",
            validateFunction: getValidateFunction(form)
          };
        };
      },
      warningText() {
        if (this.warning) {
          return typeof this.warning === "string" ? this.warning : "\u6B64\u529F\u80FD\u4E3A\u751F\u4EA7\u5382\u5BB6\u4EBA\u5458\u8FDB\u884C\u7CFB\u7EDF\u8BBE\u7F6E\u6240\u7528\uFF0C\u975E\u76F8\u5173\u4EBA\u5458\u8BF7\u53D6\u6D88\u4F7F\u7528\u3002";
        }
        return "";
      }
    },
    watch: {
      inputObj: {
        handler(newObj, oldObj) {
          if (Object.keys(newObj).length > 0) {
            formatAppLog("log", "at components/input-popup/input-popup.vue:124", "inputObj change xxx reset auto close!", newObj == oldObj);
            this.resetAutoClose();
          }
        },
        deep: true
      }
      // forms: {
      // 	handler(newForms) {
      // 		newForms.forEach((form, i) => {
      // 			this.inputObj[i] = '';
      // 		});
      // 		__f__('log','at components/input-popup/input-popup.vue:135','forms hanlder:', this.inputObj);
      // 	},
      // 	immediate: true
      // }
    },
    methods: {
      open() {
        this.closed = false;
        this.$refs.popup.open();
        this.resetAutoClose();
      },
      close() {
        this.closed = true;
        this.inputObj = {};
        this.$refs.popup.close();
        this.clearAutoClose();
      },
      cancel() {
        this.close();
        this.$emit("cancel");
      },
      capture(e) {
        if (this.closed)
          return;
        this.resetAutoClose();
      },
      resetAutoClose() {
        if (this.userFuncTask) {
          this.userFuncTask.listener();
          return;
        }
        this.userFuncTask = uni.$u.initTimeUserFunc({
          ms: 1e4,
          cb: () => {
            formatAppLog("log", "at components/input-popup/input-popup.vue:168", "\u65F6\u95F4\u5230\u4E86\uFF0C\u6211\u8981\u5173\u95ED\u4E86");
            this.cancel();
          }
        });
      },
      clearAutoClose() {
        if (this.userFuncTask) {
          this.userFuncTask.release();
        }
      },
      auth() {
        return __async(this, null, function* () {
          try {
            const r = yield this.$refs.forms.validate();
            this.$emit("afterVerify", this.inputObj);
            this.close();
          } catch (e) {
            formatAppLog("log", "at components/input-popup/input-popup.vue:184", e);
          }
        });
      },
      other() {
        return __async(this, null, function* () {
          try {
            const r = yield this.$refs.forms.validate();
            this.$emit("afterOther", this.inputObj);
            this.close();
          } catch (e) {
            formatAppLog("log", "at components/input-popup/input-popup.vue:193", e);
          }
        });
      }
    }
  };
  function _sfc_render$13(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_easyinput = resolveEasycom((0, import_vue8.resolveDynamicComponent)("uni-easyinput"), __easycom_12);
    const _component_uni_forms_item = resolveEasycom((0, import_vue8.resolveDynamicComponent)("uni-forms-item"), __easycom_13);
    const _component_uni_tag = resolveEasycom((0, import_vue8.resolveDynamicComponent)("uni-tag"), __easycom_22);
    const _component_uni_forms = resolveEasycom((0, import_vue8.resolveDynamicComponent)("uni-forms"), __easycom_3);
    const _component_uni_popup_dialog = resolveEasycom((0, import_vue8.resolveDynamicComponent)("uni-popup-dialog"), __easycom_2);
    const _component_uni_popup = resolveEasycom((0, import_vue8.resolveDynamicComponent)("uni-popup"), __easycom_32);
    return (0, import_vue8.openBlock)(), (0, import_vue8.createBlock)(_component_uni_popup, {
      ref: "popup",
      class: "input-popup_content",
      onClick: $options.capture
    }, {
      default: (0, import_vue8.withCtx)(() => [
        (0, import_vue8.createVNode)(_component_uni_popup_dialog, {
          mode: "input",
          beforeClose: true,
          title: $props.title,
          otherText: $props.otherText,
          onClose: _cache[0] || (_cache[0] = ($event) => $options.cancel()),
          onConfirm: _cache[1] || (_cache[1] = ($event) => $options.auth()),
          onOther: $options.other
        }, {
          default: (0, import_vue8.withCtx)(() => [
            (0, import_vue8.createVNode)(_component_uni_forms, {
              ref: "forms",
              rules: $options.rules,
              model: $data.inputObj,
              style: { "width": "450px" },
              labelWidth: $props.labelWidth
            }, {
              default: (0, import_vue8.withCtx)(() => [
                ((0, import_vue8.openBlock)(true), (0, import_vue8.createElementBlock)(
                  import_vue8.Fragment,
                  null,
                  (0, import_vue8.renderList)($props.forms, (form, i) => {
                    return (0, import_vue8.openBlock)(), (0, import_vue8.createBlock)(_component_uni_forms_item, {
                      key: i,
                      class: "input-popup_forms-items",
                      name: i + "",
                      label: form.label,
                      labelAlign: "center"
                    }, {
                      default: (0, import_vue8.withCtx)(() => [
                        (0, import_vue8.createVNode)(_component_uni_easyinput, {
                          modelValue: $data.inputObj[i],
                          "onUpdate:modelValue": ($event) => $data.inputObj[i] = $event,
                          type: form.type,
                          placeholder: $props.placeholder + form.placeholder
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "placeholder"])
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["name", "label"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )),
                $props.warning ? ((0, import_vue8.openBlock)(), (0, import_vue8.createBlock)(_component_uni_tag, {
                  key: 0,
                  size: "default",
                  type: "error",
                  text: $options.warningText
                }, null, 8, ["text"])) : (0, import_vue8.createCommentVNode)("v-if", true)
              ]),
              _: 1
              /* STABLE */
            }, 8, ["rules", "model", "labelWidth"])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["title", "otherText", "onOther"])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["onClick"]);
  }
  var __easycom_14 = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["render", _sfc_render$13], ["styles", [_style_0$13]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/components/input-popup/input-popup.vue"]]);
  var _imports_12 = "/static/register/detail/SwipeIDCard.png";
  var _style_06 = { "auth_content": { "": { "flex": 1 } }, "auth_content-swiper": { ".auth_content ": { "flex": 1 } }, "auth_content-idcardauth": { ".auth_content ": { "flex": 1, "justifyContent": "center", "alignItems": "center" } }, "auth_content-idcardauth--status": { ".auth_content .auth_content-idcardauth ": { "color": "#006AEC", "fontSize": 20, "fontWeight": "bold", "marginBottom": 20 } }, "auth_content-idcardauth--btn": { ".auth_content .auth_content-idcardauth ": { "marginTop": 20, "borderWidth": 0, "borderColor": "#000000" } }, "auth_content-faceauth": { ".auth_content ": { "flex": 1, "alignItems": "center", "justifyContent": "center" } }, "auth_content-faceauth--status": { ".auth_content .auth_content-faceauth ": { "fontSize": 24, "fontWeight": "bold", "color": "#006AEC" } }, "auth_content-faceauth--alive_detect": { ".auth_content .auth_content-faceauth ": { "marginTop": 40, "width": 800, "height": 300, "backgroundColor": "#F5DEB3" } } };
  var {
    moduleIdCardAct: moduleIdCardAct2,
    moduleFaceCompare: moduleFaceCompare2
  } = plugins;
  var _sfc_main6 = {
    mixins: [userInactiveMixin],
    data() {
      return {
        idcardInputForm: [{
          label: "\u8EAB\u4EFD\u8BC1\u53F7\uFF1A",
          err: "\u8EAB\u4EFD\u8BC1\u53F7\u7801\u683C\u5F0F\u4E0D\u6B63\u786E",
          placeholder: "\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7\u7801",
          type: "text",
          verify(val) {
            return uni.$u.idCard(val);
          }
        }],
        step: 0,
        detectingFacePath: "",
        lastFacepath: "",
        facepath: "",
        number: "",
        name: ""
      };
    },
    computed: {
      token() {
        return this.$store.getters.token;
      },
      showManual() {
        return true;
      }
    },
    watch: {
      step(newV) {
        if (newV === 1) {
          this.startDetecting();
        }
      },
      number() {
        this.capture();
      },
      detectingFacePath() {
        this.capture();
      }
    },
    onLoad(options) {
      this.target = options.target;
      this.type = options.type;
      formatAppLog("log", "at pages/auth/auth.nvue:97", this.target);
      this.startIdCardAct();
    },
    onUnload() {
      moduleIdCardAct2.stop();
    },
    methods: {
      homeClick() {
        uni.navigateBack({ delta: getCurrentPages().length });
      },
      manualInput() {
        moduleIdCardAct2.stop();
        this.$refs.popup.open();
      },
      idcardAfterVerify(val) {
        this.findBiosignature(val[0]);
      },
      cancelManualInput() {
        this.startIdCardAct();
      },
      compareFaces(face1, face2, resultCallback) {
        moduleFaceCompare2.compareFeature(face1, face2, resultCallback);
      },
      startIdCardAct() {
        moduleIdCardAct2.start((idCardInfo) => {
          uni.showToast({
            title: "\u8EAB\u4EFD\u4FE1\u606F\u5DF2\u83B7\u53D6\uFF01",
            icon: "none"
          });
          if (idCardInfo) {
            this.idCardInfo = idCardInfo;
            this.number = idCardInfo.number;
            this.name = idCardInfo.name;
            moduleIdCardAct2.stop();
            {
              this.redirectToTarget();
            }
          }
          formatAppLog("log", "at pages/auth/auth.nvue:153", idCardInfo);
        });
      },
      // 通过身份证号码查找已录入的生物特性
      findBiosignature(number2) {
        this.number = number2;
        uni.showLoading({
          title: "\u8BFB\u53D6\u8D44\u6599..."
        });
        requestApi(apis.findBiosignature, {
          id_num: number2
        }, {
          token: this.token
        }).then((data) => {
          uni.hideLoading();
          if (this.type === "idCard") {
            this.redirectToTarget();
            return;
          }
          if (!data.facePath) {
            uni.showToast({
              title: "\u6682\u65E0\u60A8\u7684\u4F53\u5F81\u4FE1\u606F\uFF0C\u8BF7\u5148\u4F53\u5F81\u91C7\u96C6",
              icon: "none"
            });
            uni.$u.sleep(2e3).then(() => {
              uni.navigateBack();
            });
          } else {
            this.lastFacepath = data.facePath.replace("http://59.206.216.219:9090", apiUrl);
            this.step = 1;
          }
        }).catch((err) => {
          uni.showToast({
            title: err || "\u60A8\u8FD8\u672A\u5165\u77EB",
            icon: "none"
          });
          uni.$u.sleep(1e3).then(() => {
            uni.navigateBack();
          });
        });
      },
      // 开始人脸检测
      startDetecting() {
        return __async(this, null, function* () {
          yield uni.$u.sleep(500);
          this.$refs.alive_detect.startDetecting((path) => {
            formatAppLog("log", "at pages/auth/auth.nvue:205", path);
            if (path) {
              this.$refs.alive_detect.stopDetecting();
              this.detectingFacePath = path;
              uni.showLoading({
                title: "\u6B63\u5728\u9A8C\u8BC1..."
              });
              this.compareFaces(this.lastFacepath, path, (r) => {
                if (r) {
                  uni.showLoading({
                    title: "\u6B63\u5728\u66F4\u65B0..."
                  });
                  upload(path, "renlian").then((data) => {
                    uni.hideLoading();
                    this.facepath = data;
                    this.redirectToTarget();
                  }).catch((err) => {
                    uni.showToast({
                      title: "\u4E0A\u4F20\u5931\u8D25:" + err,
                      icon: "none"
                    });
                  });
                } else {
                  uni.showToast({
                    title: "\u4EBA\u8138\u9A8C\u8BC1\u4E0D\u5339\u914D\uFF0C\u8BF7\u91CD\u8BD5\uFF01",
                    icon: "none"
                  });
                  uni.$u.sleep(2e3).then(() => {
                    uni.navigateBack();
                  });
                }
              });
            }
          });
        });
      },
      redirectToTarget() {
        let url2 = `${this.target}${this.target.indexOf("?") >= 0 ? "&" : "?"}idnum=${this.number}&name=${this.name}`;
        formatAppLog("log", "at pages/auth/auth.nvue:247", "redirectToTarget:", this.target, url2);
        if (this.type !== "idCard") {
          url2 += `&facepath=${this.facepath}`;
        }
        if (this.target.indexOf("print") > -1) {
          let _a;
          uni.navigateBack({
            animationType: "none",
            success() {
              return __async(this, null, function* () {
                yield uni.$u.sleep(5);
                uni.navigateTo({
                  url: url2,
                  animationType: "none"
                });
              });
            }
          });
          return;
        }
        uni.redirectTo({
          url: url2
        });
      }
    }
  };
  function _sfc_render6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_content_bg = resolveEasycom((0, import_vue8.resolveDynamicComponent)("content-bg"), __easycom_0);
    const _component_button = (0, import_vue8.resolveComponent)("button");
    const _component_swiper_item = (0, import_vue8.resolveComponent)("swiper-item");
    const _component_alive_detect = (0, import_vue8.resolveComponent)("alive-detect");
    const _component_swiper = (0, import_vue8.resolveComponent)("swiper");
    const _component_input_popup = resolveEasycom((0, import_vue8.resolveDynamicComponent)("input-popup"), __easycom_14);
    return (0, import_vue8.openBlock)(), (0, import_vue8.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue8.createElementVNode)("view", {
        class: "content auth_content",
        onClick: _cache[1] || (_cache[1] = (...args) => _ctx.capture && _ctx.capture(...args))
      }, [
        (0, import_vue8.createVNode)(_component_content_bg),
        (0, import_vue8.createElementVNode)("view", { class: "content-nav" }, [
          (0, import_vue8.createElementVNode)("u-image", {
            class: "content-nav-home",
            src: _imports_02,
            mode: "widthFix",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.homeClick && $options.homeClick(...args))
          })
        ]),
        (0, import_vue8.createElementVNode)("view", { class: "content-c" }, [
          (0, import_vue8.createVNode)(_component_swiper, {
            class: "auth_content-swiper",
            current: $data.step,
            "disable-touch": true
          }, {
            default: (0, import_vue8.withCtx)(() => [
              (0, import_vue8.createVNode)(_component_swiper_item, null, {
                default: (0, import_vue8.withCtx)(() => [
                  (0, import_vue8.createElementVNode)("view", { class: "auth_content-idcardauth" }, [
                    (0, import_vue8.createElementVNode)("u-text", { class: "auth_content-idcardauth--status" }, "\u8EAB\u4EFD\u4FE1\u606F\u9A8C\u8BC1\u4E2D..."),
                    (0, import_vue8.createElementVNode)("u-image", {
                      class: "auth_content-idcardauth--icon",
                      src: _imports_12,
                      mode: "heightFix"
                    }),
                    $options.showManual ? ((0, import_vue8.openBlock)(), (0, import_vue8.createBlock)(_component_button, {
                      key: 0,
                      class: "auth_content-idcardauth--btn",
                      type: "primary",
                      onClick: $options.manualInput
                    }, {
                      default: (0, import_vue8.withCtx)(() => [
                        (0, import_vue8.createTextVNode)("\u672A\u643A\u5E26\u8EAB\u4EFD\u8BC1\uFF0C\u624B\u52A8\u5F55\u5165")
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["onClick"])) : (0, import_vue8.createCommentVNode)("v-if", true)
                  ])
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue8.createVNode)(_component_swiper_item, null, {
                default: (0, import_vue8.withCtx)(() => [
                  (0, import_vue8.createElementVNode)("view", { class: "auth_content-faceauth" }, [
                    (0, import_vue8.createElementVNode)("u-text", { class: "auth_content-faceauth--status" }, "\u68C0\u6D4B\u4EBA\u8138..."),
                    $data.step === 1 ? ((0, import_vue8.openBlock)(), (0, import_vue8.createBlock)(_component_alive_detect, {
                      key: 0,
                      ref: "alive_detect",
                      class: "auth_content-faceauth--alive_detect",
                      cameratype: "black",
                      onOnDetectFailure: _ctx.detectFailure,
                      onOnDetectSuccess: _ctx.detectSuccess
                    }, null, 8, ["onOnDetectFailure", "onOnDetectSuccess"])) : (0, import_vue8.createCommentVNode)("v-if", true)
                  ])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["current"])
        ]),
        (0, import_vue8.createVNode)(_component_input_popup, {
          ref: "popup",
          title: "\u624B\u52A8\u5F55\u5165\u8EAB\u4EFD\u8BC1\u4FE1\u606F",
          placeholder: "",
          labelWidth: 100,
          forms: $data.idcardInputForm,
          onAfterVerify: $options.idcardAfterVerify,
          onCancel: $options.cancelManualInput
        }, null, 8, ["forms", "onAfterVerify", "onCancel"])
      ])
    ]);
  }
  var auth = /* @__PURE__ */ _export_sfc(_sfc_main6, [["render", _sfc_render6], ["styles", [_style_06]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/pages/auth/auth.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/auth/auth";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    auth.mpType = "page";
    const app = Vue.createPageApp(auth, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...auth.styles || []]));
    app.mount("#root");
  }
})();
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
