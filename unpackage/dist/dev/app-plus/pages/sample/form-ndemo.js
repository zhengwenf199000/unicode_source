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
  var __spreadValues = (a2, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b2)) {
        if (__propIsEnum.call(b2, prop))
          __defNormalProp(a2, prop, b2[prop]);
      }
    return a2;
  };
  var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
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
        } catch (e2) {
          reject(e2);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e2) {
          reject(e2);
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

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/uni-app.es.js
  var import_vue = __toESM(require_vue());
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

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/uni-data-select.js
  var import_vue3 = __toESM(require_vue());

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/uni-icons.js
  var import_vue2 = __toESM(require_vue());

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/uni-icons.js
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
  var _style_0 = { "uni-icons": { "": { "fontFamily": "uniicons", "textDecoration": "none", "textAlign": "center" } } };
  var getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  var domModule = weex.requireModule("dom");
  domModule.addRule("fontFace", {
    "fontFamily": "uniicons",
    "src": "url('" + iconUrl + "')"
  });
  var _sfc_main = {
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
        let code = this.icons.find((v2) => v2.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
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
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "u-text",
      {
        style: (0, import_vue2.normalizeStyle)({ color: $props.color, "font-size": $options.iconSize }),
        class: "uni-icons",
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      (0, import_vue2.toDisplayString)($options.unicode),
      5
      /* TEXT, STYLE */
    );
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/uni-data-select.js
  var pages = [
    {
      path: "pages/launch/launch",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/home/home",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/index/index",
      style: {
        navigationBarTitleText: "uni-app"
      }
    },
    {
      path: "pages/compound/benefit",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/register/detail",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/register/gather",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/sample/ext-module",
      style: {
        navigationStyle: "default",
        navigationBarTitleText: "\u6269\u5C55 module"
      }
    },
    {
      path: "pages/sample/ext-component",
      style: {
        navigationStyle: "default",
        navigationBarTitleText: "\u6269\u5C55 component"
      }
    },
    {
      path: "pages/sample/richAlert",
      style: {
        navigationStyle: "default",
        navigationBarTitleText: "RichAlert"
      }
    },
    {
      path: "pages/sample/idcardact-module",
      style: {
        navigationStyle: "default",
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/sample/ext-finger-component",
      style: {
        navigationStyle: "default",
        navigationBarTitleText: "ext-finger-component",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/register/register",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/compound/compound",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/apply/apply",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/leave/leave",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/study/study",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/activity/activity",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/query/query",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/sample/form-demo",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/sample/form-ndemo",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/auth/auth",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/compound/daily",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/compound/detail",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/apply/change",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/leave/list",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/leave/destroy",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/leave/detail",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/query/file",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/set/set",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/index/test",
      style: {
        navigationStyle: "default",
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/register/input",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/register/print",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/print/print",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/compound/education",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/leave/add",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/print/talk",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/blank/blank",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/apply/do",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/sample/upgrade",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/sample/echarts-demo",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/offline/offline",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/query/common",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/apply/files",
      style: {
        navigationBarTitleText: ""
      }
    },
    {
      path: "pages/apply/sign",
      style: {
        navigationBarTitleText: ""
      }
    },
    {
      path: "pages/apply/pdf",
      style: {
        navigationBarTitleText: ""
      }
    }
  ];
  var globalStyle = {
    navigationStyle: "custom",
    navigationBarTextStyle: "white",
    navigationBarTitleText: "",
    navigationBarBackgroundColor: "#006AEC",
    backgroundColor: "#F8F8F8",
    "app-plus": {
      bounce: "none",
      background: "#006AEC",
      animationType: "none"
    }
  };
  var condition = {
    current: 0,
    list: [
      {
        name: "launch",
        path: "pages/launch/launch"
      },
      {
        name: "home",
        path: "pages/home/home"
      },
      {
        name: "test",
        path: "pages/index/index"
      },
      {
        name: "input",
        path: "pages/register/input"
      }
    ]
  };
  var e = {
    pages,
    globalStyle,
    condition
  };
  var define_process_env_UNI_SECURE_NETWORK_CONFIG_default = [];
  function t(e2) {
    return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
  }
  function n(e2, t22, n2) {
    return e2(n2 = { path: t22, exports: {}, require: function(e3, t3) {
      return function() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t3 && n2.path);
    } }, n2.exports), n2.exports;
  }
  var s = n(function(e2, t22) {
    var n2;
    e2.exports = (n2 = n2 || function(e3, t3) {
      var n3 = Object.create || /* @__PURE__ */ function() {
        function e4() {
        }
        return function(t4) {
          var n4;
          return e4.prototype = t4, n4 = new e4(), e4.prototype = null, n4;
        };
      }(), s2 = {}, r2 = s2.lib = {}, i2 = r2.Base = { extend: function(e4) {
        var t4 = n3(this);
        return e4 && t4.mixIn(e4), t4.hasOwnProperty("init") && this.init !== t4.init || (t4.init = function() {
          t4.$super.init.apply(this, arguments);
        }), t4.init.prototype = t4, t4.$super = this, t4;
      }, create: function() {
        var e4 = this.extend();
        return e4.init.apply(e4, arguments), e4;
      }, init: function() {
      }, mixIn: function(e4) {
        for (var t4 in e4)
          e4.hasOwnProperty(t4) && (this[t4] = e4[t4]);
        e4.hasOwnProperty("toString") && (this.toString = e4.toString);
      }, clone: function() {
        return this.init.prototype.extend(this);
      } }, o2 = r2.WordArray = i2.extend({ init: function(e4, n4) {
        e4 = this.words = e4 || [], this.sigBytes = n4 != t3 ? n4 : 4 * e4.length;
      }, toString: function(e4) {
        return (e4 || c2).stringify(this);
      }, concat: function(e4) {
        var t4 = this.words, n4 = e4.words, s3 = this.sigBytes, r3 = e4.sigBytes;
        if (this.clamp(), s3 % 4)
          for (var i3 = 0; i3 < r3; i3++) {
            var o3 = n4[i3 >>> 2] >>> 24 - i3 % 4 * 8 & 255;
            t4[s3 + i3 >>> 2] |= o3 << 24 - (s3 + i3) % 4 * 8;
          }
        else
          for (i3 = 0; i3 < r3; i3 += 4)
            t4[s3 + i3 >>> 2] = n4[i3 >>> 2];
        return this.sigBytes += r3, this;
      }, clamp: function() {
        var t4 = this.words, n4 = this.sigBytes;
        t4[n4 >>> 2] &= 4294967295 << 32 - n4 % 4 * 8, t4.length = e3.ceil(n4 / 4);
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4.words = this.words.slice(0), e4;
      }, random: function(t4) {
        for (var n4, s3 = [], r3 = function(t5) {
          t5 = t5;
          var n5 = 987654321, s4 = 4294967295;
          return function() {
            var r4 = ((n5 = 36969 * (65535 & n5) + (n5 >> 16) & s4) << 16) + (t5 = 18e3 * (65535 & t5) + (t5 >> 16) & s4) & s4;
            return r4 /= 4294967296, (r4 += 0.5) * (e3.random() > 0.5 ? 1 : -1);
          };
        }, i3 = 0; i3 < t4; i3 += 4) {
          var a3 = r3(4294967296 * (n4 || e3.random()));
          n4 = 987654071 * a3(), s3.push(4294967296 * a3() | 0);
        }
        return new o2.init(s3, t4);
      } }), a2 = s2.enc = {}, c2 = a2.Hex = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push((i3 >>> 4).toString(16)), s3.push((15 & i3).toString(16));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3 += 2)
          n4[s3 >>> 3] |= parseInt(e4.substr(s3, 2), 16) << 24 - s3 % 8 * 4;
        return new o2.init(n4, t4 / 2);
      } }, u2 = a2.Latin1 = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push(String.fromCharCode(i3));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3++)
          n4[s3 >>> 2] |= (255 & e4.charCodeAt(s3)) << 24 - s3 % 4 * 8;
        return new o2.init(n4, t4);
      } }, h2 = a2.Utf8 = { stringify: function(e4) {
        try {
          return decodeURIComponent(escape(u2.stringify(e4)));
        } catch (e5) {
          throw new Error("Malformed UTF-8 data");
        }
      }, parse: function(e4) {
        return u2.parse(unescape(encodeURIComponent(e4)));
      } }, l2 = r2.BufferedBlockAlgorithm = i2.extend({ reset: function() {
        this._data = new o2.init(), this._nDataBytes = 0;
      }, _append: function(e4) {
        "string" == typeof e4 && (e4 = h2.parse(e4)), this._data.concat(e4), this._nDataBytes += e4.sigBytes;
      }, _process: function(t4) {
        var n4 = this._data, s3 = n4.words, r3 = n4.sigBytes, i3 = this.blockSize, a3 = r3 / (4 * i3), c3 = (a3 = t4 ? e3.ceil(a3) : e3.max((0 | a3) - this._minBufferSize, 0)) * i3, u3 = e3.min(4 * c3, r3);
        if (c3) {
          for (var h3 = 0; h3 < c3; h3 += i3)
            this._doProcessBlock(s3, h3);
          var l3 = s3.splice(0, c3);
          n4.sigBytes -= u3;
        }
        return new o2.init(l3, u3);
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._data = this._data.clone(), e4;
      }, _minBufferSize: 0 });
      r2.Hasher = l2.extend({ cfg: i2.extend(), init: function(e4) {
        this.cfg = this.cfg.extend(e4), this.reset();
      }, reset: function() {
        l2.reset.call(this), this._doReset();
      }, update: function(e4) {
        return this._append(e4), this._process(), this;
      }, finalize: function(e4) {
        return e4 && this._append(e4), this._doFinalize();
      }, blockSize: 16, _createHelper: function(e4) {
        return function(t4, n4) {
          return new e4.init(n4).finalize(t4);
        };
      }, _createHmacHelper: function(e4) {
        return function(t4, n4) {
          return new d2.HMAC.init(e4, n4).finalize(t4);
        };
      } });
      var d2 = s2.algo = {};
      return s2;
    }(Math), n2);
  });
  var r = s;
  var i = (n(function(e2, t22) {
    var n2;
    e2.exports = (n2 = r, function(e3) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [];
      !function() {
        for (var t4 = 0; t4 < 64; t4++)
          a2[t4] = 4294967296 * e3.abs(e3.sin(t4 + 1)) | 0;
      }();
      var c2 = o2.MD5 = i2.extend({ _doReset: function() {
        this._hash = new r2.init([1732584193, 4023233417, 2562383102, 271733878]);
      }, _doProcessBlock: function(e4, t4) {
        for (var n3 = 0; n3 < 16; n3++) {
          var s3 = t4 + n3, r3 = e4[s3];
          e4[s3] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8);
        }
        var i3 = this._hash.words, o3 = e4[t4 + 0], c3 = e4[t4 + 1], p2 = e4[t4 + 2], f2 = e4[t4 + 3], g2 = e4[t4 + 4], m2 = e4[t4 + 5], y2 = e4[t4 + 6], _2 = e4[t4 + 7], w2 = e4[t4 + 8], v2 = e4[t4 + 9], I2 = e4[t4 + 10], S2 = e4[t4 + 11], b2 = e4[t4 + 12], k2 = e4[t4 + 13], T2 = e4[t4 + 14], A2 = e4[t4 + 15], P2 = i3[0], C2 = i3[1], x2 = i3[2], O2 = i3[3];
        P2 = u2(P2, C2, x2, O2, o3, 7, a2[0]), O2 = u2(O2, P2, C2, x2, c3, 12, a2[1]), x2 = u2(x2, O2, P2, C2, p2, 17, a2[2]), C2 = u2(C2, x2, O2, P2, f2, 22, a2[3]), P2 = u2(P2, C2, x2, O2, g2, 7, a2[4]), O2 = u2(O2, P2, C2, x2, m2, 12, a2[5]), x2 = u2(x2, O2, P2, C2, y2, 17, a2[6]), C2 = u2(C2, x2, O2, P2, _2, 22, a2[7]), P2 = u2(P2, C2, x2, O2, w2, 7, a2[8]), O2 = u2(O2, P2, C2, x2, v2, 12, a2[9]), x2 = u2(x2, O2, P2, C2, I2, 17, a2[10]), C2 = u2(C2, x2, O2, P2, S2, 22, a2[11]), P2 = u2(P2, C2, x2, O2, b2, 7, a2[12]), O2 = u2(O2, P2, C2, x2, k2, 12, a2[13]), x2 = u2(x2, O2, P2, C2, T2, 17, a2[14]), P2 = h2(P2, C2 = u2(C2, x2, O2, P2, A2, 22, a2[15]), x2, O2, c3, 5, a2[16]), O2 = h2(O2, P2, C2, x2, y2, 9, a2[17]), x2 = h2(x2, O2, P2, C2, S2, 14, a2[18]), C2 = h2(C2, x2, O2, P2, o3, 20, a2[19]), P2 = h2(P2, C2, x2, O2, m2, 5, a2[20]), O2 = h2(O2, P2, C2, x2, I2, 9, a2[21]), x2 = h2(x2, O2, P2, C2, A2, 14, a2[22]), C2 = h2(C2, x2, O2, P2, g2, 20, a2[23]), P2 = h2(P2, C2, x2, O2, v2, 5, a2[24]), O2 = h2(O2, P2, C2, x2, T2, 9, a2[25]), x2 = h2(x2, O2, P2, C2, f2, 14, a2[26]), C2 = h2(C2, x2, O2, P2, w2, 20, a2[27]), P2 = h2(P2, C2, x2, O2, k2, 5, a2[28]), O2 = h2(O2, P2, C2, x2, p2, 9, a2[29]), x2 = h2(x2, O2, P2, C2, _2, 14, a2[30]), P2 = l2(P2, C2 = h2(C2, x2, O2, P2, b2, 20, a2[31]), x2, O2, m2, 4, a2[32]), O2 = l2(O2, P2, C2, x2, w2, 11, a2[33]), x2 = l2(x2, O2, P2, C2, S2, 16, a2[34]), C2 = l2(C2, x2, O2, P2, T2, 23, a2[35]), P2 = l2(P2, C2, x2, O2, c3, 4, a2[36]), O2 = l2(O2, P2, C2, x2, g2, 11, a2[37]), x2 = l2(x2, O2, P2, C2, _2, 16, a2[38]), C2 = l2(C2, x2, O2, P2, I2, 23, a2[39]), P2 = l2(P2, C2, x2, O2, k2, 4, a2[40]), O2 = l2(O2, P2, C2, x2, o3, 11, a2[41]), x2 = l2(x2, O2, P2, C2, f2, 16, a2[42]), C2 = l2(C2, x2, O2, P2, y2, 23, a2[43]), P2 = l2(P2, C2, x2, O2, v2, 4, a2[44]), O2 = l2(O2, P2, C2, x2, b2, 11, a2[45]), x2 = l2(x2, O2, P2, C2, A2, 16, a2[46]), P2 = d2(P2, C2 = l2(C2, x2, O2, P2, p2, 23, a2[47]), x2, O2, o3, 6, a2[48]), O2 = d2(O2, P2, C2, x2, _2, 10, a2[49]), x2 = d2(x2, O2, P2, C2, T2, 15, a2[50]), C2 = d2(C2, x2, O2, P2, m2, 21, a2[51]), P2 = d2(P2, C2, x2, O2, b2, 6, a2[52]), O2 = d2(O2, P2, C2, x2, f2, 10, a2[53]), x2 = d2(x2, O2, P2, C2, I2, 15, a2[54]), C2 = d2(C2, x2, O2, P2, c3, 21, a2[55]), P2 = d2(P2, C2, x2, O2, w2, 6, a2[56]), O2 = d2(O2, P2, C2, x2, A2, 10, a2[57]), x2 = d2(x2, O2, P2, C2, y2, 15, a2[58]), C2 = d2(C2, x2, O2, P2, k2, 21, a2[59]), P2 = d2(P2, C2, x2, O2, g2, 6, a2[60]), O2 = d2(O2, P2, C2, x2, S2, 10, a2[61]), x2 = d2(x2, O2, P2, C2, p2, 15, a2[62]), C2 = d2(C2, x2, O2, P2, v2, 21, a2[63]), i3[0] = i3[0] + P2 | 0, i3[1] = i3[1] + C2 | 0, i3[2] = i3[2] + x2 | 0, i3[3] = i3[3] + O2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        n3[r3 >>> 5] |= 128 << 24 - r3 % 32;
        var i3 = e3.floor(s3 / 4294967296), o3 = s3;
        n3[15 + (r3 + 64 >>> 9 << 4)] = 16711935 & (i3 << 8 | i3 >>> 24) | 4278255360 & (i3 << 24 | i3 >>> 8), n3[14 + (r3 + 64 >>> 9 << 4)] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8), t4.sigBytes = 4 * (n3.length + 1), this._process();
        for (var a3 = this._hash, c3 = a3.words, u3 = 0; u3 < 4; u3++) {
          var h3 = c3[u3];
          c3[u3] = 16711935 & (h3 << 8 | h3 >>> 24) | 4278255360 & (h3 << 24 | h3 >>> 8);
        }
        return a3;
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._hash = this._hash.clone(), e4;
      } });
      function u2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 & n3 | ~t4 & s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function h2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 & s3 | n3 & ~s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function l2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 ^ n3 ^ s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function d2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (n3 ^ (t4 | ~s3)) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      t3.MD5 = i2._createHelper(c2), t3.HmacMD5 = i2._createHmacHelper(c2);
    }(Math), n2.MD5);
  }), n(function(e2, t22) {
    var n2;
    e2.exports = (n2 = r, void function() {
      var e3 = n2, t3 = e3.lib.Base, s2 = e3.enc.Utf8;
      e3.algo.HMAC = t3.extend({ init: function(e4, t4) {
        e4 = this._hasher = new e4.init(), "string" == typeof t4 && (t4 = s2.parse(t4));
        var n3 = e4.blockSize, r2 = 4 * n3;
        t4.sigBytes > r2 && (t4 = e4.finalize(t4)), t4.clamp();
        for (var i2 = this._oKey = t4.clone(), o2 = this._iKey = t4.clone(), a2 = i2.words, c2 = o2.words, u2 = 0; u2 < n3; u2++)
          a2[u2] ^= 1549556828, c2[u2] ^= 909522486;
        i2.sigBytes = o2.sigBytes = r2, this.reset();
      }, reset: function() {
        var e4 = this._hasher;
        e4.reset(), e4.update(this._iKey);
      }, update: function(e4) {
        return this._hasher.update(e4), this;
      }, finalize: function(e4) {
        var t4 = this._hasher, n3 = t4.finalize(e4);
        return t4.reset(), t4.finalize(this._oKey.clone().concat(n3));
      } });
    }());
  }), n(function(e2, t22) {
    e2.exports = r.HmacMD5;
  }));
  var o = n(function(e2, t22) {
    e2.exports = r.enc.Utf8;
  });
  var a = n(function(e2, t22) {
    var n2;
    e2.exports = (n2 = r, function() {
      var e3 = n2, t3 = e3.lib.WordArray;
      function s2(e4, n3, s3) {
        for (var r2 = [], i2 = 0, o2 = 0; o2 < n3; o2++)
          if (o2 % 4) {
            var a2 = s3[e4.charCodeAt(o2 - 1)] << o2 % 4 * 2, c2 = s3[e4.charCodeAt(o2)] >>> 6 - o2 % 4 * 2;
            r2[i2 >>> 2] |= (a2 | c2) << 24 - i2 % 4 * 8, i2++;
          }
        return t3.create(r2, i2);
      }
      e3.enc.Base64 = { stringify: function(e4) {
        var t4 = e4.words, n3 = e4.sigBytes, s3 = this._map;
        e4.clamp();
        for (var r2 = [], i2 = 0; i2 < n3; i2 += 3)
          for (var o2 = (t4[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255) << 16 | (t4[i2 + 1 >>> 2] >>> 24 - (i2 + 1) % 4 * 8 & 255) << 8 | t4[i2 + 2 >>> 2] >>> 24 - (i2 + 2) % 4 * 8 & 255, a2 = 0; a2 < 4 && i2 + 0.75 * a2 < n3; a2++)
            r2.push(s3.charAt(o2 >>> 6 * (3 - a2) & 63));
        var c2 = s3.charAt(64);
        if (c2)
          for (; r2.length % 4; )
            r2.push(c2);
        return r2.join("");
      }, parse: function(e4) {
        var t4 = e4.length, n3 = this._map, r2 = this._reverseMap;
        if (!r2) {
          r2 = this._reverseMap = [];
          for (var i2 = 0; i2 < n3.length; i2++)
            r2[n3.charCodeAt(i2)] = i2;
        }
        var o2 = n3.charAt(64);
        if (o2) {
          var a2 = e4.indexOf(o2);
          -1 !== a2 && (t4 = a2);
        }
        return s2(e4, t4, r2);
      }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
    }(), n2.enc.Base64);
  });
  var c = "FUNCTION";
  var u = "OBJECT";
  var h = "CLIENT_DB";
  var l = "pending";
  var d = "fulfilled";
  var p = "rejected";
  function f(e2) {
    return Object.prototype.toString.call(e2).slice(8, -1).toLowerCase();
  }
  function g(e2) {
    return "object" === f(e2);
  }
  function m(e2) {
    return "function" == typeof e2;
  }
  function y(e2) {
    return function() {
      try {
        return e2.apply(e2, arguments);
      } catch (e3) {
        console.error(e3);
      }
    };
  }
  var _ = "REJECTED";
  var w = "NOT_PENDING";
  var v = class {
    constructor({ createPromise: e2, retryRule: t22 = _ } = {}) {
      this.createPromise = e2, this.status = null, this.promise = null, this.retryRule = t22;
    }
    get needRetry() {
      if (!this.status)
        return true;
      switch (this.retryRule) {
        case _:
          return this.status === p;
        case w:
          return this.status !== l;
      }
    }
    exec() {
      return this.needRetry ? (this.status = l, this.promise = this.createPromise().then((e2) => (this.status = d, Promise.resolve(e2)), (e2) => (this.status = p, Promise.reject(e2))), this.promise) : this.promise;
    }
  };
  function I(e2) {
    return e2 && "string" == typeof e2 ? JSON.parse(e2) : e2;
  }
  var S = true;
  var b = "app";
  var T = I(define_process_env_UNI_SECURE_NETWORK_CONFIG_default);
  var A = b;
  var P = I("");
  var C = I("[]") || [];
  var O = "";
  try {
    O = "__UNI__EF8BC18";
  } catch (e2) {
  }
  var E;
  var L = {};
  function R(e2, t22 = {}) {
    var n2, s2;
    return n2 = L, s2 = e2, Object.prototype.hasOwnProperty.call(n2, s2) || (L[e2] = t22), L[e2];
  }
  function U() {
    return E || (E = function() {
      if ("undefined" != typeof globalThis)
        return globalThis;
      if ("undefined" != typeof self)
        return self;
      if ("undefined" != typeof window)
        return window;
      function e2() {
        return this;
      }
      return void 0 !== e2() ? e2() : new Function("return this")();
    }(), E);
  }
  L = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {};
  var N = ["invoke", "success", "fail", "complete"];
  var D = R("_globalUniCloudInterceptor");
  function M(e2, t22) {
    D[e2] || (D[e2] = {}), g(t22) && Object.keys(t22).forEach((n2) => {
      N.indexOf(n2) > -1 && function(e3, t3, n3) {
        let s2 = D[e3][t3];
        s2 || (s2 = D[e3][t3] = []), -1 === s2.indexOf(n3) && m(n3) && s2.push(n3);
      }(e2, n2, t22[n2]);
    });
  }
  function q(e2, t22) {
    D[e2] || (D[e2] = {}), g(t22) ? Object.keys(t22).forEach((n2) => {
      N.indexOf(n2) > -1 && function(e3, t3, n3) {
        const s2 = D[e3][t3];
        if (!s2)
          return;
        const r2 = s2.indexOf(n3);
        r2 > -1 && s2.splice(r2, 1);
      }(e2, n2, t22[n2]);
    }) : delete D[e2];
  }
  function K(e2, t22) {
    return e2 && 0 !== e2.length ? e2.reduce((e3, n2) => e3.then(() => n2(t22)), Promise.resolve()) : Promise.resolve();
  }
  function F(e2, t22) {
    return D[e2] && D[e2][t22] || [];
  }
  function j(e2) {
    M("callObject", e2);
  }
  var $ = R("_globalUniCloudListener");
  var B = "response";
  var W = "needLogin";
  var H = "refreshToken";
  var J = "clientdb";
  var z = "cloudfunction";
  var V = "cloudobject";
  function G(e2) {
    return $[e2] || ($[e2] = []), $[e2];
  }
  function Y(e2, t22) {
    const n2 = G(e2);
    n2.includes(t22) || n2.push(t22);
  }
  function Q(e2, t22) {
    const n2 = G(e2), s2 = n2.indexOf(t22);
    -1 !== s2 && n2.splice(s2, 1);
  }
  function X(e2, t22) {
    const n2 = G(e2);
    for (let e3 = 0; e3 < n2.length; e3++) {
      (0, n2[e3])(t22);
    }
  }
  var Z;
  var ee = false;
  function te() {
    return Z || (Z = new Promise((e2) => {
      ee && e2(), function t22() {
        if ("function" == typeof getCurrentPages) {
          const t3 = getCurrentPages();
          t3 && t3[0] && (ee = true, e2());
        }
        ee || setTimeout(() => {
          t22();
        }, 30);
      }();
    }), Z);
  }
  function ne(e2) {
    const t22 = {};
    for (const n2 in e2) {
      const s2 = e2[n2];
      m(s2) && (t22[n2] = y(s2));
    }
    return t22;
  }
  var se = class extends Error {
    constructor(e2) {
      super(e2.message), this.errMsg = e2.message || e2.errMsg || "unknown system error", this.code = this.errCode = e2.code || e2.errCode || "SYSTEM_ERROR", this.errSubject = this.subject = e2.subject || e2.errSubject, this.cause = e2.cause, this.requestId = e2.requestId;
    }
    toJson(e2 = 0) {
      if (!(e2 >= 10))
        return e2++, { errCode: this.errCode, errMsg: this.errMsg, errSubject: this.errSubject, cause: this.cause && this.cause.toJson ? this.cause.toJson(e2) : this.cause };
    }
  };
  var re = { request: (e2) => uni.request(e2), uploadFile: (e2) => uni.uploadFile(e2), setStorageSync: (e2, t22) => uni.setStorageSync(e2, t22), getStorageSync: (e2) => uni.getStorageSync(e2), removeStorageSync: (e2) => uni.removeStorageSync(e2), clearStorageSync: () => uni.clearStorageSync(), connectSocket: (e2) => uni.connectSocket(e2) };
  function ie(e2) {
    return e2 && ie(e2.__v_raw) || e2;
  }
  function oe() {
    return { token: re.getStorageSync("uni_id_token") || re.getStorageSync("uniIdToken"), tokenExpired: re.getStorageSync("uni_id_token_expired") };
  }
  function ae({ token: e2, tokenExpired: t22 } = {}) {
    e2 && re.setStorageSync("uni_id_token", e2), t22 && re.setStorageSync("uni_id_token_expired", t22);
  }
  var ce;
  var ue;
  function he() {
    return ce || (ce = uni.getSystemInfoSync()), ce;
  }
  function le() {
    let e2, t22;
    try {
      if (uni.getLaunchOptionsSync) {
        if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1)
          return;
        const { scene: n2, channel: s2 } = uni.getLaunchOptionsSync();
        e2 = s2, t22 = n2;
      }
    } catch (e3) {
    }
    return { channel: e2, scene: t22 };
  }
  var de = {};
  function pe() {
    const e2 = uni.getLocale && uni.getLocale() || "en";
    if (ue)
      return __spreadProps(__spreadValues(__spreadValues({}, de), ue), { locale: e2, LOCALE: e2 });
    const t22 = he(), { deviceId: n2, osName: s2, uniPlatform: r2, appId: i2 } = t22, o2 = ["appId", "appLanguage", "appName", "appVersion", "appVersionCode", "appWgtVersion", "browserName", "browserVersion", "deviceBrand", "deviceId", "deviceModel", "deviceType", "osName", "osVersion", "romName", "romVersion", "ua", "hostName", "hostVersion", "uniPlatform", "uniRuntimeVersion", "uniRuntimeVersionCode", "uniCompilerVersion", "uniCompilerVersionCode"];
    for (const e3 in t22)
      Object.hasOwnProperty.call(t22, e3) && -1 === o2.indexOf(e3) && delete t22[e3];
    return ue = __spreadValues(__spreadValues({ PLATFORM: r2, OS: s2, APPID: i2, DEVICEID: n2 }, le()), t22), __spreadProps(__spreadValues(__spreadValues({}, de), ue), { locale: e2, LOCALE: e2 });
  }
  var fe = { sign: function(e2, t22) {
    let n2 = "";
    return Object.keys(e2).sort().forEach(function(t3) {
      e2[t3] && (n2 = n2 + "&" + t3 + "=" + e2[t3]);
    }), n2 = n2.slice(1), i(n2, t22).toString();
  }, wrappedRequest: function(e2, t22) {
    return new Promise((n2, s2) => {
      t22(Object.assign(e2, { complete(e3) {
        e3 || (e3 = {});
        const t3 = e3.data && e3.data.header && e3.data.header["x-serverless-request-id"] || e3.header && e3.header["request-id"];
        if (!e3.statusCode || e3.statusCode >= 400) {
          const n3 = e3.data && e3.data.error && e3.data.error.code || "SYS_ERR", r3 = e3.data && e3.data.error && e3.data.error.message || e3.errMsg || "request:fail";
          return s2(new se({ code: n3, message: r3, requestId: t3 }));
        }
        const r2 = e3.data;
        if (r2.error)
          return s2(new se({ code: r2.error.code, message: r2.error.message, requestId: t3 }));
        r2.result = r2.data, r2.requestId = t3, delete r2.data, n2(r2);
      } }));
    });
  }, toBase64: function(e2) {
    return a.stringify(o.parse(e2));
  } };
  var ge = class {
    constructor(e2) {
      ["spaceId", "clientSecret"].forEach((t22) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t22))
          throw new Error(`${t22} required`);
      }), this.config = Object.assign({}, { endpoint: 0 === e2.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com" }, e2), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = re, this._getAccessTokenPromiseHub = new v({ createPromise: () => this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then((e3) => {
        if (!e3.result || !e3.result.accessToken)
          throw new se({ code: "AUTH_FAILED", message: "\u83B7\u53D6accessToken\u5931\u8D25" });
        this.setAccessToken(e3.result.accessToken);
      }), retryRule: w });
    }
    get hasAccessToken() {
      return !!this.accessToken;
    }
    setAccessToken(e2) {
      this.accessToken = e2;
    }
    requestWrapped(e2) {
      return fe.wrappedRequest(e2, this.adapter.request);
    }
    requestAuth(e2) {
      return this.requestWrapped(e2);
    }
    request(e2, t22) {
      return Promise.resolve().then(() => this.hasAccessToken ? t22 ? this.requestWrapped(e2) : this.requestWrapped(e2).catch((t3) => new Promise((e3, n2) => {
        !t3 || "GATEWAY_INVALID_TOKEN" !== t3.code && "InvalidParameter.InvalidToken" !== t3.code ? n2(t3) : e3();
      }).then(() => this.getAccessToken()).then(() => {
        const t4 = this.rebuildRequest(e2);
        return this.request(t4, true);
      })) : this.getAccessToken().then(() => {
        const t3 = this.rebuildRequest(e2);
        return this.request(t3, true);
      }));
    }
    rebuildRequest(e2) {
      const t22 = Object.assign({}, e2);
      return t22.data.token = this.accessToken, t22.header["x-basement-token"] = this.accessToken, t22.header["x-serverless-sign"] = fe.sign(t22.data, this.config.clientSecret), t22;
    }
    setupRequest(e2, t22) {
      const n2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      return "auth" !== t22 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = fe.sign(n2, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: s2 };
    }
    getAccessToken() {
      return this._getAccessTokenPromiseHub.exec();
    }
    authorize() {
      return __async(this, null, function* () {
        yield this.getAccessToken();
      });
    }
    callFunction(e2) {
      const t22 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e2.name, functionArgs: e2.data || {} }) };
      return this.request(__spreadProps(__spreadValues({}, this.setupRequest(t22)), { timeout: e2.timeout }));
    }
    getOSSUploadOptionsFromPath(e2) {
      const t22 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t22));
    }
    uploadFileToOSS({ url: e2, formData: t22, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e2, formData: t22, name: n2, filePath: s2, fileType: r2, header: { "X-OSS-server-side-encrpytion": "AES256" }, success(e3) {
          e3 && e3.statusCode < 400 ? o2(e3) : a2(new se({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        }, fail(e3) {
          a2(new se({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
          i2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    reportOSSUpload(e2) {
      const t22 = { method: "serverless.file.resource.report", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t22));
    }
    uploadFile(_0) {
      return __async(this, arguments, function* ({ filePath: e2, cloudPath: t22, fileType: n2 = "image", cloudPathAsRealPath: s2 = false, onUploadProgress: r2, config: i2 }) {
        if ("string" !== f(t22))
          throw new se({ code: "INVALID_PARAM", message: "cloudPath\u5FC5\u987B\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B" });
        if (!(t22 = t22.trim()))
          throw new se({ code: "INVALID_PARAM", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
        if (/:\/\//.test(t22))
          throw new se({ code: "INVALID_PARAM", message: "cloudPath\u4E0D\u5408\u6CD5" });
        const o2 = i2 && i2.envType || this.config.envType;
        if (s2 && ("/" !== t22[0] && (t22 = "/" + t22), t22.indexOf("\\") > -1))
          throw new se({ code: "INVALID_PARAM", message: "\u4F7F\u7528cloudPath\u4F5C\u4E3A\u8DEF\u5F84\u65F6\uFF0CcloudPath\u4E0D\u53EF\u5305\u542B\u201C\\\u201D" });
        const a2 = (yield this.getOSSUploadOptionsFromPath({ env: o2, filename: s2 ? t22.split("/").pop() : t22, fileId: s2 ? t22 : void 0 })).result, c2 = "https://" + a2.cdnDomain + "/" + a2.ossPath, { securityToken: u2, accessKeyId: h2, signature: l2, host: d2, ossPath: p2, id: g2, policy: m2, ossCallbackUrl: y2 } = a2, _2 = { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: h2, Signature: l2, host: d2, id: g2, key: p2, policy: m2, success_action_status: 200 };
        if (u2 && (_2["x-oss-security-token"] = u2), y2) {
          const e3 = JSON.stringify({ callbackUrl: y2, callbackBody: JSON.stringify({ fileId: g2, spaceId: this.config.spaceId }), callbackBodyType: "application/json" });
          _2.callback = fe.toBase64(e3);
        }
        const w2 = { url: "https://" + a2.host, formData: _2, fileName: "file", name: "file", filePath: e2, fileType: n2 };
        if (yield this.uploadFileToOSS(Object.assign({}, w2, { onUploadProgress: r2 })), y2)
          return { success: true, filePath: e2, fileID: c2 };
        if ((yield this.reportOSSUpload({ id: g2 })).success)
          return { success: true, filePath: e2, fileID: c2 };
        throw new se({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" });
      });
    }
    getTempFileURL({ fileList: e2 } = {}) {
      return new Promise((t22, n2) => {
        Array.isArray(e2) && 0 !== e2.length || n2(new se({ code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" })), t22({ fileList: e2.map((e3) => ({ fileID: e3, tempFileURL: e3 })) });
      });
    }
    getFileInfo() {
      return __async(this, arguments, function* ({ fileList: e2 } = {}) {
        if (!Array.isArray(e2) || 0 === e2.length)
          throw new se({ code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" });
        const t22 = { method: "serverless.file.resource.info", params: JSON.stringify({ id: e2.map((e3) => e3.split("?")[0]).join(",") }) };
        return { fileList: (yield this.request(this.setupRequest(t22))).result };
      });
    }
  };
  var me = { init(e2) {
    const t22 = new ge(e2), n2 = { signInAnonymously: function() {
      return t22.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t22.auth = function() {
      return n2;
    }, t22.customAuth = t22.auth, t22;
  } };
  var ye = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
  var _e;
  !function(e2) {
    e2.local = "local", e2.none = "none", e2.session = "session";
  }(_e || (_e = {}));
  var we = function() {
  };
  var ve = n(function(e2, t22) {
    var n2;
    e2.exports = (n2 = r, function(e3) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [], c2 = [];
      !function() {
        function t4(t5) {
          for (var n4 = e3.sqrt(t5), s4 = 2; s4 <= n4; s4++)
            if (!(t5 % s4))
              return false;
          return true;
        }
        function n3(e4) {
          return 4294967296 * (e4 - (0 | e4)) | 0;
        }
        for (var s3 = 2, r3 = 0; r3 < 64; )
          t4(s3) && (r3 < 8 && (a2[r3] = n3(e3.pow(s3, 0.5))), c2[r3] = n3(e3.pow(s3, 1 / 3)), r3++), s3++;
      }();
      var u2 = [], h2 = o2.SHA256 = i2.extend({ _doReset: function() {
        this._hash = new r2.init(a2.slice(0));
      }, _doProcessBlock: function(e4, t4) {
        for (var n3 = this._hash.words, s3 = n3[0], r3 = n3[1], i3 = n3[2], o3 = n3[3], a3 = n3[4], h3 = n3[5], l2 = n3[6], d2 = n3[7], p2 = 0; p2 < 64; p2++) {
          if (p2 < 16)
            u2[p2] = 0 | e4[t4 + p2];
          else {
            var f2 = u2[p2 - 15], g2 = (f2 << 25 | f2 >>> 7) ^ (f2 << 14 | f2 >>> 18) ^ f2 >>> 3, m2 = u2[p2 - 2], y2 = (m2 << 15 | m2 >>> 17) ^ (m2 << 13 | m2 >>> 19) ^ m2 >>> 10;
            u2[p2] = g2 + u2[p2 - 7] + y2 + u2[p2 - 16];
          }
          var _2 = s3 & r3 ^ s3 & i3 ^ r3 & i3, w2 = (s3 << 30 | s3 >>> 2) ^ (s3 << 19 | s3 >>> 13) ^ (s3 << 10 | s3 >>> 22), v2 = d2 + ((a3 << 26 | a3 >>> 6) ^ (a3 << 21 | a3 >>> 11) ^ (a3 << 7 | a3 >>> 25)) + (a3 & h3 ^ ~a3 & l2) + c2[p2] + u2[p2];
          d2 = l2, l2 = h3, h3 = a3, a3 = o3 + v2 | 0, o3 = i3, i3 = r3, r3 = s3, s3 = v2 + (w2 + _2) | 0;
        }
        n3[0] = n3[0] + s3 | 0, n3[1] = n3[1] + r3 | 0, n3[2] = n3[2] + i3 | 0, n3[3] = n3[3] + o3 | 0, n3[4] = n3[4] + a3 | 0, n3[5] = n3[5] + h3 | 0, n3[6] = n3[6] + l2 | 0, n3[7] = n3[7] + d2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        return n3[r3 >>> 5] |= 128 << 24 - r3 % 32, n3[14 + (r3 + 64 >>> 9 << 4)] = e3.floor(s3 / 4294967296), n3[15 + (r3 + 64 >>> 9 << 4)] = s3, t4.sigBytes = 4 * n3.length, this._process(), this._hash;
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._hash = this._hash.clone(), e4;
      } });
      t3.SHA256 = i2._createHelper(h2), t3.HmacSHA256 = i2._createHmacHelper(h2);
    }(Math), n2.SHA256);
  });
  var Ie = ve;
  var Se = n(function(e2, t22) {
    e2.exports = r.HmacSHA256;
  });
  var be = () => {
    let e2;
    if (!Promise) {
      e2 = () => {
      }, e2.promise = {};
      const t3 = () => {
        throw new se({ message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.' });
      };
      return Object.defineProperty(e2.promise, "then", { get: t3 }), Object.defineProperty(e2.promise, "catch", { get: t3 }), e2;
    }
    const t22 = new Promise((t3, n2) => {
      e2 = (e3, s2) => e3 ? n2(e3) : t3(s2);
    });
    return e2.promise = t22, e2;
  };
  function ke(e2) {
    return void 0 === e2;
  }
  function Te(e2) {
    return "[object Null]" === Object.prototype.toString.call(e2);
  }
  function Ae(e2 = "") {
    return e2.replace(/([\s\S]+)\s+(请前往云开发AI小助手查看问题：.*)/, "$1");
  }
  function Pe(e2 = 32) {
    const t22 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n2 = t22.length;
    let s2 = "";
    for (let r2 = 0; r2 < e2; r2++)
      s2 += t22.charAt(Math.floor(Math.random() * n2));
    return s2;
  }
  var Ce;
  function xe(e2) {
    const t22 = (n2 = e2, "[object Array]" === Object.prototype.toString.call(n2) ? e2 : [e2]);
    var n2;
    for (const e3 of t22) {
      const { isMatch: t3, genAdapter: n3, runtime: s2 } = e3;
      if (t3())
        return { adapter: n3(), runtime: s2 };
    }
  }
  !function(e2) {
    e2.WEB = "web", e2.WX_MP = "wx_mp";
  }(Ce || (Ce = {}));
  var Oe = { adapter: null, runtime: void 0 };
  var Ee = ["anonymousUuidKey"];
  var Le = class extends we {
    constructor() {
      super(), Oe.adapter.root.tcbObject || (Oe.adapter.root.tcbObject = {});
    }
    setItem(e2, t22) {
      Oe.adapter.root.tcbObject[e2] = t22;
    }
    getItem(e2) {
      return Oe.adapter.root.tcbObject[e2];
    }
    removeItem(e2) {
      delete Oe.adapter.root.tcbObject[e2];
    }
    clear() {
      delete Oe.adapter.root.tcbObject;
    }
  };
  function Re(e2, t22) {
    switch (e2) {
      case "local":
        return t22.localStorage || new Le();
      case "none":
        return new Le();
      default:
        return t22.sessionStorage || new Le();
    }
  }
  var Ue = class {
    constructor(e2) {
      if (!this._storage) {
        this._persistence = Oe.adapter.primaryStorage || e2.persistence, this._storage = Re(this._persistence, Oe.adapter);
        const t22 = `access_token_${e2.env}`, n2 = `access_token_expire_${e2.env}`, s2 = `refresh_token_${e2.env}`, r2 = `anonymous_uuid_${e2.env}`, i2 = `login_type_${e2.env}`, o2 = "device_id", a2 = `token_type_${e2.env}`, c2 = `user_info_${e2.env}`;
        this.keys = { accessTokenKey: t22, accessTokenExpireKey: n2, refreshTokenKey: s2, anonymousUuidKey: r2, loginTypeKey: i2, userInfoKey: c2, deviceIdKey: o2, tokenTypeKey: a2 };
      }
    }
    updatePersistence(e2) {
      if (e2 === this._persistence)
        return;
      const t22 = "local" === this._persistence;
      this._persistence = e2;
      const n2 = Re(e2, Oe.adapter);
      for (const e3 in this.keys) {
        const s2 = this.keys[e3];
        if (t22 && Ee.includes(e3))
          continue;
        const r2 = this._storage.getItem(s2);
        ke(r2) || Te(r2) || (n2.setItem(s2, r2), this._storage.removeItem(s2));
      }
      this._storage = n2;
    }
    setStore(e2, t22, n2) {
      if (!this._storage)
        return;
      const s2 = { version: n2 || "localCachev1", content: t22 }, r2 = JSON.stringify(s2);
      try {
        this._storage.setItem(e2, r2);
      } catch (e3) {
        throw e3;
      }
    }
    getStore(e2, t22) {
      try {
        if (!this._storage)
          return;
      } catch (e3) {
        return "";
      }
      t22 = t22 || "localCachev1";
      const n2 = this._storage.getItem(e2);
      if (!n2)
        return "";
      if (n2.indexOf(t22) >= 0) {
        return JSON.parse(n2).content;
      }
      return "";
    }
    removeStore(e2) {
      this._storage.removeItem(e2);
    }
  };
  var Ne = {};
  var De = {};
  function Me(e2) {
    return Ne[e2];
  }
  var qe = class {
    constructor(e2, t22) {
      this.data = t22 || null, this.name = e2;
    }
  };
  var Ke = class extends qe {
    constructor(e2, t22) {
      super("error", { error: e2, data: t22 }), this.error = e2;
    }
  };
  var Fe = new class {
    constructor() {
      this._listeners = {};
    }
    on(e2, t22) {
      return function(e3, t3, n2) {
        n2[e3] = n2[e3] || [], n2[e3].push(t3);
      }(e2, t22, this._listeners), this;
    }
    off(e2, t22) {
      return function(e3, t3, n2) {
        if (n2 && n2[e3]) {
          const s2 = n2[e3].indexOf(t3);
          -1 !== s2 && n2[e3].splice(s2, 1);
        }
      }(e2, t22, this._listeners), this;
    }
    fire(e2, t22) {
      if (e2 instanceof Ke)
        return console.error(e2.error), this;
      const n2 = "string" == typeof e2 ? new qe(e2, t22 || {}) : e2;
      const s2 = n2.name;
      if (this._listens(s2)) {
        n2.target = this;
        const e3 = this._listeners[s2] ? [...this._listeners[s2]] : [];
        for (const t3 of e3)
          t3.call(this, n2);
      }
      return this;
    }
    _listens(e2) {
      return this._listeners[e2] && this._listeners[e2].length > 0;
    }
  }();
  function je(e2, t22) {
    Fe.on(e2, t22);
  }
  function $e(e2, t22 = {}) {
    Fe.fire(e2, t22);
  }
  function Be(e2, t22) {
    Fe.off(e2, t22);
  }
  var We = "loginStateChanged";
  var He = "loginStateExpire";
  var Je = "loginTypeChanged";
  var ze = "anonymousConverted";
  var Ve = "refreshAccessToken";
  var Ge;
  !function(e2) {
    e2.ANONYMOUS = "ANONYMOUS", e2.WECHAT = "WECHAT", e2.WECHAT_PUBLIC = "WECHAT-PUBLIC", e2.WECHAT_OPEN = "WECHAT-OPEN", e2.CUSTOM = "CUSTOM", e2.EMAIL = "EMAIL", e2.USERNAME = "USERNAME", e2.NULL = "NULL";
  }(Ge || (Ge = {}));
  var Ye = class {
    constructor() {
      this._fnPromiseMap = /* @__PURE__ */ new Map();
    }
    run(e2, t22) {
      return __async(this, null, function* () {
        let n2 = this._fnPromiseMap.get(e2);
        return n2 || (n2 = new Promise((n3, s2) => __async(this, null, function* () {
          try {
            yield this._runIdlePromise();
            const s3 = t22();
            n3(yield s3);
          } catch (e3) {
            s2(e3);
          } finally {
            this._fnPromiseMap.delete(e2);
          }
        })), this._fnPromiseMap.set(e2, n2)), n2;
      });
    }
    _runIdlePromise() {
      return Promise.resolve();
    }
  };
  var Qe = class {
    constructor(e2) {
      this._singlePromise = new Ye(), this._cache = Me(e2.env), this._baseURL = `https://${e2.env}.ap-shanghai.tcb-api.tencentcloudapi.com`, this._reqClass = new Oe.adapter.reqClass({ timeout: e2.timeout, timeoutMsg: `\u8BF7\u6C42\u5728${e2.timeout / 1e3}s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD`, restrictedMethods: ["post"] });
    }
    _getDeviceId() {
      if (this._deviceID)
        return this._deviceID;
      const { deviceIdKey: e2 } = this._cache.keys;
      let t22 = this._cache.getStore(e2);
      return "string" == typeof t22 && t22.length >= 16 && t22.length <= 48 || (t22 = Pe(), this._cache.setStore(e2, t22)), this._deviceID = t22, t22;
    }
    _request(_0, _1) {
      return __async(this, arguments, function* (e2, t22, n2 = {}) {
        const s2 = { "x-request-id": Pe(), "x-device-id": this._getDeviceId() };
        if (n2.withAccessToken) {
          const { tokenTypeKey: e3 } = this._cache.keys, t3 = yield this.getAccessToken(), n3 = this._cache.getStore(e3);
          s2.authorization = `${n3} ${t3}`;
        }
        return this._reqClass["get" === n2.method ? "get" : "post"]({ url: `${this._baseURL}${e2}`, data: t22, headers: s2 });
      });
    }
    _fetchAccessToken() {
      return __async(this, null, function* () {
        const { loginTypeKey: e2, accessTokenKey: t22, accessTokenExpireKey: n2, tokenTypeKey: s2 } = this._cache.keys, r2 = this._cache.getStore(e2);
        if (r2 && r2 !== Ge.ANONYMOUS)
          throw new se({ code: "INVALID_OPERATION", message: "\u975E\u533F\u540D\u767B\u5F55\u4E0D\u652F\u6301\u5237\u65B0 access token" });
        const i2 = yield this._singlePromise.run("fetchAccessToken", () => __async(this, null, function* () {
          return (yield this._request("/auth/v1/signin/anonymously", {}, { method: "post" })).data;
        })), { access_token: o2, expires_in: a2, token_type: c2 } = i2;
        return this._cache.setStore(s2, c2), this._cache.setStore(t22, o2), this._cache.setStore(n2, Date.now() + 1e3 * a2), o2;
      });
    }
    isAccessTokenExpired(e2, t22) {
      let n2 = true;
      return e2 && t22 && (n2 = t22 < Date.now()), n2;
    }
    getAccessToken() {
      return __async(this, null, function* () {
        const { accessTokenKey: e2, accessTokenExpireKey: t22 } = this._cache.keys, n2 = this._cache.getStore(e2), s2 = this._cache.getStore(t22);
        return this.isAccessTokenExpired(n2, s2) ? this._fetchAccessToken() : n2;
      });
    }
    refreshAccessToken() {
      return __async(this, null, function* () {
        const { accessTokenKey: e2, accessTokenExpireKey: t22, loginTypeKey: n2 } = this._cache.keys;
        return this._cache.removeStore(e2), this._cache.removeStore(t22), this._cache.setStore(n2, Ge.ANONYMOUS), this.getAccessToken();
      });
    }
    getUserInfo() {
      return __async(this, null, function* () {
        return this._singlePromise.run("getUserInfo", () => __async(this, null, function* () {
          return (yield this._request("/auth/v1/user/me", {}, { withAccessToken: true, method: "get" })).data;
        }));
      });
    }
  };
  var Xe = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"];
  var Ze = { "X-SDK-Version": "1.3.5" };
  function et(e2, t22, n2) {
    const s2 = e2[t22];
    e2[t22] = function(t3) {
      const r2 = {}, i2 = {};
      n2.forEach((n3) => {
        const { data: s3, headers: o3 } = n3.call(e2, t3);
        Object.assign(r2, s3), Object.assign(i2, o3);
      });
      const o2 = t3.data;
      return o2 && (() => {
        var e3;
        if (e3 = o2, "[object FormData]" !== Object.prototype.toString.call(e3))
          t3.data = __spreadValues(__spreadValues({}, o2), r2);
        else
          for (const e4 in r2)
            o2.append(e4, r2[e4]);
      })(), t3.headers = __spreadValues(__spreadValues({}, t3.headers || {}), i2), s2.call(e2, t3);
    };
  }
  function tt() {
    const e2 = Math.random().toString(16).slice(2);
    return { data: { seqId: e2 }, headers: __spreadProps(__spreadValues({}, Ze), { "x-seqid": e2 }) };
  }
  var nt = class {
    constructor(e2 = {}) {
      var t22;
      this.config = e2, this._reqClass = new Oe.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: `\u8BF7\u6C42\u5728${this.config.timeout / 1e3}s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD`, restrictedMethods: ["post"] }), this._cache = Me(this.config.env), this._localCache = (t22 = this.config.env, De[t22]), this.oauth = new Qe(this.config), et(this._reqClass, "post", [tt]), et(this._reqClass, "upload", [tt]), et(this._reqClass, "download", [tt]);
    }
    post(e2) {
      return __async(this, null, function* () {
        return yield this._reqClass.post(e2);
      });
    }
    upload(e2) {
      return __async(this, null, function* () {
        return yield this._reqClass.upload(e2);
      });
    }
    download(e2) {
      return __async(this, null, function* () {
        return yield this._reqClass.download(e2);
      });
    }
    refreshAccessToken() {
      return __async(this, null, function* () {
        let e2, t22;
        this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
        try {
          e2 = yield this._refreshAccessTokenPromise;
        } catch (e3) {
          t22 = e3;
        }
        if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t22)
          throw t22;
        return e2;
      });
    }
    _refreshAccessToken() {
      return __async(this, null, function* () {
        const { accessTokenKey: e2, accessTokenExpireKey: t22, refreshTokenKey: n2, loginTypeKey: s2, anonymousUuidKey: r2 } = this._cache.keys;
        this._cache.removeStore(e2), this._cache.removeStore(t22);
        let i2 = this._cache.getStore(n2);
        if (!i2)
          throw new se({ message: "\u672A\u767B\u5F55CloudBase" });
        const o2 = { refresh_token: i2 }, a2 = yield this.request("auth.fetchAccessTokenWithRefreshToken", o2);
        if (a2.data.code) {
          const { code: e3 } = a2.data;
          if ("SIGN_PARAM_INVALID" === e3 || "REFRESH_TOKEN_EXPIRED" === e3 || "INVALID_REFRESH_TOKEN" === e3) {
            if (this._cache.getStore(s2) === Ge.ANONYMOUS && "INVALID_REFRESH_TOKEN" === e3) {
              const e4 = this._cache.getStore(r2), t3 = this._cache.getStore(n2), s3 = yield this.send("auth.signInAnonymously", { anonymous_uuid: e4, refresh_token: t3 });
              return this.setRefreshToken(s3.refresh_token), this._refreshAccessToken();
            }
            $e(He), this._cache.removeStore(n2);
          }
          throw new se({ code: a2.data.code, message: `\u5237\u65B0access token\u5931\u8D25\uFF1A${a2.data.code}` });
        }
        if (a2.data.access_token)
          return $e(Ve), this._cache.setStore(e2, a2.data.access_token), this._cache.setStore(t22, a2.data.access_token_expire + Date.now()), { accessToken: a2.data.access_token, accessTokenExpire: a2.data.access_token_expire };
        a2.data.refresh_token && (this._cache.removeStore(n2), this._cache.setStore(n2, a2.data.refresh_token), this._refreshAccessToken());
      });
    }
    getAccessToken() {
      return __async(this, null, function* () {
        const { accessTokenKey: e2, accessTokenExpireKey: t22, refreshTokenKey: n2 } = this._cache.keys;
        if (!this._cache.getStore(n2))
          throw new se({ message: "refresh token\u4E0D\u5B58\u5728\uFF0C\u767B\u5F55\u72B6\u6001\u5F02\u5E38" });
        let s2 = this._cache.getStore(e2), r2 = this._cache.getStore(t22), i2 = true;
        return this._shouldRefreshAccessTokenHook && !(yield this._shouldRefreshAccessTokenHook(s2, r2)) && (i2 = false), (!s2 || !r2 || r2 < Date.now()) && i2 ? this.refreshAccessToken() : { accessToken: s2, accessTokenExpire: r2 };
      });
    }
    request(e2, t22, n2) {
      return __async(this, null, function* () {
        const s2 = `x-tcb-trace_${this.config.env}`;
        let r2 = "application/x-www-form-urlencoded";
        const i2 = __spreadValues({ action: e2, env: this.config.env, dataVersion: "2019-08-16" }, t22);
        let o2;
        if (-1 === Xe.indexOf(e2) && (this._cache.keys, i2.access_token = yield this.oauth.getAccessToken()), "storage.uploadFile" === e2) {
          o2 = new FormData();
          for (let e3 in o2)
            o2.hasOwnProperty(e3) && void 0 !== o2[e3] && o2.append(e3, i2[e3]);
          r2 = "multipart/form-data";
        } else {
          r2 = "application/json", o2 = {};
          for (let e3 in i2)
            void 0 !== i2[e3] && (o2[e3] = i2[e3]);
        }
        let a2 = { headers: { "content-type": r2 } };
        n2 && n2.timeout && (a2.timeout = n2.timeout), n2 && n2.onUploadProgress && (a2.onUploadProgress = n2.onUploadProgress);
        const c2 = this._localCache.getStore(s2);
        c2 && (a2.headers["X-TCB-Trace"] = c2);
        const { parse: u2, inQuery: h2, search: l2 } = t22;
        let d2 = { env: this.config.env };
        u2 && (d2.parse = true), h2 && (d2 = __spreadValues(__spreadValues({}, h2), d2));
        let p2 = function(e3, t3, n3 = {}) {
          const s3 = /\?/.test(t3);
          let r3 = "";
          for (let e4 in n3)
            "" === r3 ? !s3 && (t3 += "?") : r3 += "&", r3 += `${e4}=${encodeURIComponent(n3[e4])}`;
          return /^http(s)?\:\/\//.test(t3 += r3) ? t3 : `${e3}${t3}`;
        }(ye, "//tcb-api.tencentcloudapi.com/web", d2);
        l2 && (p2 += l2);
        const f2 = yield this.post(__spreadValues({ url: p2, data: o2 }, a2)), g2 = f2.header && f2.header["x-tcb-trace"];
        if (g2 && this._localCache.setStore(s2, g2), 200 !== Number(f2.status) && 200 !== Number(f2.statusCode) || !f2.data)
          throw new se({ code: "NETWORK_ERROR", message: "network request error" });
        return f2;
      });
    }
    send(_0) {
      return __async(this, arguments, function* (e2, t22 = {}, n2 = {}) {
        const s2 = yield this.request(e2, t22, __spreadProps(__spreadValues({}, n2), { onUploadProgress: t22.onUploadProgress }));
        if (("ACCESS_TOKEN_DISABLED" === s2.data.code || "ACCESS_TOKEN_EXPIRED" === s2.data.code) && -1 === Xe.indexOf(e2)) {
          yield this.oauth.refreshAccessToken();
          const s3 = yield this.request(e2, t22, __spreadProps(__spreadValues({}, n2), { onUploadProgress: t22.onUploadProgress }));
          if (s3.data.code)
            throw new se({ code: s3.data.code, message: Ae(s3.data.message) });
          return s3.data;
        }
        if (s2.data.code)
          throw new se({ code: s2.data.code, message: Ae(s2.data.message) });
        return s2.data;
      });
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t22, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t22), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
  };
  var st = {};
  function rt(e2) {
    return st[e2];
  }
  var it = class {
    constructor(e2) {
      this.config = e2, this._cache = Me(e2.env), this._request = rt(e2.env);
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t22, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t22), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
    setAccessToken(e2, t22) {
      const { accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys;
      this._cache.setStore(n2, e2), this._cache.setStore(s2, t22);
    }
    refreshUserInfo() {
      return __async(this, null, function* () {
        const { data: e2 } = yield this._request.send("auth.getUserInfo", {});
        return this.setLocalUserInfo(e2), e2;
      });
    }
    setLocalUserInfo(e2) {
      const { userInfoKey: t22 } = this._cache.keys;
      this._cache.setStore(t22, e2);
    }
  };
  var ot = class {
    constructor(e2) {
      if (!e2)
        throw new se({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._envId = e2, this._cache = Me(this._envId), this._request = rt(this._envId), this.setUserInfo();
    }
    linkWithTicket(e2) {
      if ("string" != typeof e2)
        throw new se({ code: "PARAM_ERROR", message: "ticket must be string" });
      return this._request.send("auth.linkWithTicket", { ticket: e2 });
    }
    linkWithRedirect(e2) {
      e2.signInWithRedirect();
    }
    updatePassword(e2, t22) {
      return this._request.send("auth.updatePassword", { oldPassword: t22, newPassword: e2 });
    }
    updateEmail(e2) {
      return this._request.send("auth.updateEmail", { newEmail: e2 });
    }
    updateUsername(e2) {
      if ("string" != typeof e2)
        throw new se({ code: "PARAM_ERROR", message: "username must be a string" });
      return this._request.send("auth.updateUsername", { username: e2 });
    }
    getLinkedUidList() {
      return __async(this, null, function* () {
        const { data: e2 } = yield this._request.send("auth.getLinkedUidList", {});
        let t22 = false;
        const { users: n2 } = e2;
        return n2.forEach((e3) => {
          e3.wxOpenId && e3.wxPublicId && (t22 = true);
        }), { users: n2, hasPrimaryUid: t22 };
      });
    }
    setPrimaryUid(e2) {
      return this._request.send("auth.setPrimaryUid", { uid: e2 });
    }
    unlink(e2) {
      return this._request.send("auth.unlink", { platform: e2 });
    }
    update(e2) {
      return __async(this, null, function* () {
        const { nickName: t22, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 } = e2, { data: a2 } = yield this._request.send("auth.updateUserInfo", { nickName: t22, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 });
        this.setLocalUserInfo(a2);
      });
    }
    refresh() {
      return __async(this, null, function* () {
        const e2 = yield this._request.oauth.getUserInfo();
        return this.setLocalUserInfo(e2), e2;
      });
    }
    setUserInfo() {
      const { userInfoKey: e2 } = this._cache.keys, t22 = this._cache.getStore(e2);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((e3) => {
        this[e3] = t22[e3];
      }), this.location = { country: t22.country, province: t22.province, city: t22.city };
    }
    setLocalUserInfo(e2) {
      const { userInfoKey: t22 } = this._cache.keys;
      this._cache.setStore(t22, e2), this.setUserInfo();
    }
  };
  var at = class {
    constructor(e2) {
      if (!e2)
        throw new se({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._cache = Me(e2);
      const { refreshTokenKey: t22, accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys, r2 = this._cache.getStore(t22), i2 = this._cache.getStore(n2), o2 = this._cache.getStore(s2);
      this.credential = { refreshToken: r2, accessToken: i2, accessTokenExpire: o2 }, this.user = new ot(e2);
    }
    get isAnonymousAuth() {
      return this.loginType === Ge.ANONYMOUS;
    }
    get isCustomAuth() {
      return this.loginType === Ge.CUSTOM;
    }
    get isWeixinAuth() {
      return this.loginType === Ge.WECHAT || this.loginType === Ge.WECHAT_OPEN || this.loginType === Ge.WECHAT_PUBLIC;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  };
  var ct = class extends it {
    signIn() {
      return __async(this, null, function* () {
        this._cache.updatePersistence("local"), yield this._request.oauth.getAccessToken(), $e(We), $e(Je, { env: this.config.env, loginType: Ge.ANONYMOUS, persistence: "local" });
        const e2 = new at(this.config.env);
        return yield e2.user.refresh(), e2;
      });
    }
    linkAndRetrieveDataWithTicket(e2) {
      return __async(this, null, function* () {
        const { anonymousUuidKey: t22, refreshTokenKey: n2 } = this._cache.keys, s2 = this._cache.getStore(t22), r2 = this._cache.getStore(n2), i2 = yield this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s2, refresh_token: r2, ticket: e2 });
        if (i2.refresh_token)
          return this._clearAnonymousUUID(), this.setRefreshToken(i2.refresh_token), yield this._request.refreshAccessToken(), $e(ze, { env: this.config.env }), $e(Je, { loginType: Ge.CUSTOM, persistence: "local" }), { credential: { refreshToken: i2.refresh_token } };
        throw new se({ message: "\u533F\u540D\u8F6C\u5316\u5931\u8D25" });
      });
    }
    _setAnonymousUUID(e2) {
      const { anonymousUuidKey: t22, loginTypeKey: n2 } = this._cache.keys;
      this._cache.removeStore(t22), this._cache.setStore(t22, e2), this._cache.setStore(n2, Ge.ANONYMOUS);
    }
    _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  };
  var ut = class extends it {
    signIn(e2) {
      return __async(this, null, function* () {
        if ("string" != typeof e2)
          throw new se({ code: "PARAM_ERROR", message: "ticket must be a string" });
        const { refreshTokenKey: t22 } = this._cache.keys, n2 = yield this._request.send("auth.signInWithTicket", { ticket: e2, refresh_token: this._cache.getStore(t22) || "" });
        if (n2.refresh_token)
          return this.setRefreshToken(n2.refresh_token), yield this._request.refreshAccessToken(), $e(We), $e(Je, { env: this.config.env, loginType: Ge.CUSTOM, persistence: this.config.persistence }), yield this.refreshUserInfo(), new at(this.config.env);
        throw new se({ message: "\u81EA\u5B9A\u4E49\u767B\u5F55\u5931\u8D25" });
      });
    }
  };
  var ht = class extends it {
    signIn(e2, t22) {
      return __async(this, null, function* () {
        if ("string" != typeof e2)
          throw new se({ code: "PARAM_ERROR", message: "email must be a string" });
        const { refreshTokenKey: n2 } = this._cache.keys, s2 = yield this._request.send("auth.signIn", { loginType: "EMAIL", email: e2, password: t22, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token: i2, access_token_expire: o2 } = s2;
        if (r2)
          return this.setRefreshToken(r2), i2 && o2 ? this.setAccessToken(i2, o2) : yield this._request.refreshAccessToken(), yield this.refreshUserInfo(), $e(We), $e(Je, { env: this.config.env, loginType: Ge.EMAIL, persistence: this.config.persistence }), new at(this.config.env);
        throw s2.code ? new se({ code: s2.code, message: `\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: ${s2.message}` }) : new se({ message: "\u90AE\u7BB1\u767B\u5F55\u5931\u8D25" });
      });
    }
    activate(e2) {
      return __async(this, null, function* () {
        return this._request.send("auth.activateEndUserMail", { token: e2 });
      });
    }
    resetPasswordWithToken(e2, t22) {
      return __async(this, null, function* () {
        return this._request.send("auth.resetPasswordWithToken", { token: e2, newPassword: t22 });
      });
    }
  };
  var lt = class extends it {
    signIn(e2, t22) {
      return __async(this, null, function* () {
        if ("string" != typeof e2)
          throw new se({ code: "PARAM_ERROR", message: "username must be a string" });
        "string" != typeof t22 && (t22 = "", console.warn("password is empty"));
        const { refreshTokenKey: n2 } = this._cache.keys, s2 = yield this._request.send("auth.signIn", { loginType: Ge.USERNAME, username: e2, password: t22, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token_expire: i2, access_token: o2 } = s2;
        if (r2)
          return this.setRefreshToken(r2), o2 && i2 ? this.setAccessToken(o2, i2) : yield this._request.refreshAccessToken(), yield this.refreshUserInfo(), $e(We), $e(Je, { env: this.config.env, loginType: Ge.USERNAME, persistence: this.config.persistence }), new at(this.config.env);
        throw s2.code ? new se({ code: s2.code, message: `\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: ${s2.message}` }) : new se({ message: "\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25" });
      });
    }
  };
  var dt = class {
    constructor(e2) {
      this.config = e2, this._cache = Me(e2.env), this._request = rt(e2.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), je(Je, this._onLoginTypeChanged);
    }
    get currentUser() {
      const e2 = this.hasLoginState();
      return e2 && e2.user || null;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
    anonymousAuthProvider() {
      return new ct(this.config);
    }
    customAuthProvider() {
      return new ut(this.config);
    }
    emailAuthProvider() {
      return new ht(this.config);
    }
    usernameAuthProvider() {
      return new lt(this.config);
    }
    signInAnonymously() {
      return __async(this, null, function* () {
        return new ct(this.config).signIn();
      });
    }
    signInWithEmailAndPassword(e2, t22) {
      return __async(this, null, function* () {
        return new ht(this.config).signIn(e2, t22);
      });
    }
    signInWithUsernameAndPassword(e2, t22) {
      return new lt(this.config).signIn(e2, t22);
    }
    linkAndRetrieveDataWithTicket(e2) {
      return __async(this, null, function* () {
        this._anonymousAuthProvider || (this._anonymousAuthProvider = new ct(this.config)), je(ze, this._onAnonymousConverted);
        return yield this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e2);
      });
    }
    signOut() {
      return __async(this, null, function* () {
        if (this.loginType === Ge.ANONYMOUS)
          throw new se({ message: "\u533F\u540D\u7528\u6237\u4E0D\u652F\u6301\u767B\u51FA\u64CD\u4F5C" });
        const { refreshTokenKey: e2, accessTokenKey: t22, accessTokenExpireKey: n2 } = this._cache.keys, s2 = this._cache.getStore(e2);
        if (!s2)
          return;
        const r2 = yield this._request.send("auth.logout", { refresh_token: s2 });
        return this._cache.removeStore(e2), this._cache.removeStore(t22), this._cache.removeStore(n2), $e(We), $e(Je, { env: this.config.env, loginType: Ge.NULL, persistence: this.config.persistence }), r2;
      });
    }
    signUpWithEmailAndPassword(e2, t22) {
      return __async(this, null, function* () {
        return this._request.send("auth.signUpWithEmailAndPassword", { email: e2, password: t22 });
      });
    }
    sendPasswordResetEmail(e2) {
      return __async(this, null, function* () {
        return this._request.send("auth.sendPasswordResetEmail", { email: e2 });
      });
    }
    onLoginStateChanged(e2) {
      je(We, () => {
        const t3 = this.hasLoginState();
        e2.call(this, t3);
      });
      const t22 = this.hasLoginState();
      e2.call(this, t22);
    }
    onLoginStateExpired(e2) {
      je(He, e2.bind(this));
    }
    onAccessTokenRefreshed(e2) {
      je(Ve, e2.bind(this));
    }
    onAnonymousConverted(e2) {
      je(ze, e2.bind(this));
    }
    onLoginTypeChanged(e2) {
      je(Je, () => {
        const t22 = this.hasLoginState();
        e2.call(this, t22);
      });
    }
    getAccessToken() {
      return __async(this, null, function* () {
        return { accessToken: (yield this._request.getAccessToken()).accessToken, env: this.config.env };
      });
    }
    hasLoginState() {
      const { accessTokenKey: e2, accessTokenExpireKey: t22 } = this._cache.keys, n2 = this._cache.getStore(e2), s2 = this._cache.getStore(t22);
      return this._request.oauth.isAccessTokenExpired(n2, s2) ? null : new at(this.config.env);
    }
    isUsernameRegistered(e2) {
      return __async(this, null, function* () {
        if ("string" != typeof e2)
          throw new se({ code: "PARAM_ERROR", message: "username must be a string" });
        const { data: t22 } = yield this._request.send("auth.isUsernameRegistered", { username: e2 });
        return t22 && t22.isRegistered;
      });
    }
    getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
    signInWithTicket(e2) {
      return __async(this, null, function* () {
        return new ut(this.config).signIn(e2);
      });
    }
    shouldRefreshAccessToken(e2) {
      this._request._shouldRefreshAccessTokenHook = e2.bind(this);
    }
    getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then((e2) => e2.code ? e2 : __spreadProps(__spreadValues({}, e2.data), { requestId: e2.seqId }));
    }
    getAuthHeader() {
      const { refreshTokenKey: e2, accessTokenKey: t22 } = this._cache.keys, n2 = this._cache.getStore(e2);
      return { "x-cloudbase-credentials": this._cache.getStore(t22) + "/@@/" + n2 };
    }
    _onAnonymousConverted(e2) {
      const { env: t22 } = e2.data;
      t22 === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
    _onLoginTypeChanged(e2) {
      const { loginType: t22, persistence: n2, env: s2 } = e2.data;
      s2 === this.config.env && (this._cache.updatePersistence(n2), this._cache.setStore(this._cache.keys.loginTypeKey, t22));
    }
  };
  var pt = function(e2, t22) {
    t22 = t22 || be();
    const n2 = rt(this.config.env), { cloudPath: s2, filePath: r2, onUploadProgress: i2, fileType: o2 = "image" } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      const { data: { url: a2, authorization: c2, token: u2, fileId: h2, cosFileId: l2 }, requestId: d2 } = e3, p2 = { key: s2, signature: c2, "x-cos-meta-fileid": l2, success_action_status: "201", "x-cos-security-token": u2 };
      n2.upload({ url: a2, data: p2, file: r2, name: s2, fileType: o2, onUploadProgress: i2 }).then((e4) => {
        201 === e4.statusCode ? t22(null, { fileID: h2, requestId: d2 }) : t22(new se({ code: "STORAGE_REQUEST_FAIL", message: `STORAGE_REQUEST_FAIL: ${e4.data}` }));
      }).catch((e4) => {
        t22(e4);
      });
    }).catch((e3) => {
      t22(e3);
    }), t22.promise;
  };
  var ft = function(e2, t22) {
    t22 = t22 || be();
    const n2 = rt(this.config.env), { cloudPath: s2 } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      t22(null, e3);
    }).catch((e3) => {
      t22(e3);
    }), t22.promise;
  };
  var gt = function({ fileList: e2 }, t22) {
    if (t22 = t22 || be(), !e2 || !Array.isArray(e2))
      return { code: "INVALID_PARAM", message: "fileList\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u6570\u7EC4" };
    for (let t3 of e2)
      if (!t3 || "string" != typeof t3)
        return { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" };
    const n2 = { fileid_list: e2 };
    return rt(this.config.env).send("storage.batchDeleteFile", n2).then((e3) => {
      e3.code ? t22(null, e3) : t22(null, { fileList: e3.data.delete_list, requestId: e3.requestId });
    }).catch((e3) => {
      t22(e3);
    }), t22.promise;
  };
  var mt = function({ fileList: e2 }, t22) {
    t22 = t22 || be(), e2 && Array.isArray(e2) || t22(null, { code: "INVALID_PARAM", message: "fileList\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u6570\u7EC4" });
    let n2 = [];
    for (let s3 of e2)
      "object" == typeof s3 ? (s3.hasOwnProperty("fileID") && s3.hasOwnProperty("maxAge") || t22(null, { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u5305\u542BfileID\u548CmaxAge\u7684\u5BF9\u8C61" }), n2.push({ fileid: s3.fileID, max_age: s3.maxAge })) : "string" == typeof s3 ? n2.push({ fileid: s3 }) : t22(null, { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u5B57\u7B26\u4E32" });
    const s2 = { file_list: n2 };
    return rt(this.config.env).send("storage.batchGetDownloadUrl", s2).then((e3) => {
      e3.code ? t22(null, e3) : t22(null, { fileList: e3.data.download_list, requestId: e3.requestId });
    }).catch((e3) => {
      t22(e3);
    }), t22.promise;
  };
  var yt = function(_0, _1) {
    return __async(this, arguments, function* ({ fileID: e2 }, t22) {
      const n2 = (yield mt.call(this, { fileList: [{ fileID: e2, maxAge: 600 }] })).fileList[0];
      if ("SUCCESS" !== n2.code)
        return t22 ? t22(n2) : new Promise((e3) => {
          e3(n2);
        });
      const s2 = rt(this.config.env);
      let r2 = n2.download_url;
      if (r2 = encodeURI(r2), !t22)
        return s2.download({ url: r2 });
      t22(yield s2.download({ url: r2 }));
    });
  };
  var _t = function({ name: e2, data: t22, query: n2, parse: s2, search: r2, timeout: i2 }, o2) {
    const a2 = o2 || be();
    let c2;
    try {
      c2 = t22 ? JSON.stringify(t22) : "";
    } catch (e3) {
      return Promise.reject(e3);
    }
    if (!e2)
      return Promise.reject(new se({ code: "PARAM_ERROR", message: "\u51FD\u6570\u540D\u4E0D\u80FD\u4E3A\u7A7A" }));
    const u2 = { inQuery: n2, parse: s2, search: r2, function_name: e2, request_data: c2 };
    return rt(this.config.env).send("functions.invokeFunction", u2, { timeout: i2 }).then((e3) => {
      if (e3.code)
        a2(null, e3);
      else {
        let t3 = e3.data.response_data;
        if (s2)
          a2(null, { result: t3, requestId: e3.requestId });
        else
          try {
            t3 = JSON.parse(e3.data.response_data), a2(null, { result: t3, requestId: e3.requestId });
          } catch (e4) {
            a2(new se({ message: "response data must be json" }));
          }
      }
      return a2.promise;
    }).catch((e3) => {
      a2(e3);
    }), a2.promise;
  };
  var wt = { timeout: 15e3, persistence: "session" };
  var vt = {};
  var It = class _It {
    constructor(e2) {
      this.config = e2 || this.config, this.authObj = void 0;
    }
    init(e2) {
      switch (Oe.adapter || (this.requestClient = new Oe.adapter.reqClass({ timeout: e2.timeout || 5e3, timeoutMsg: `\u8BF7\u6C42\u5728${(e2.timeout || 5e3) / 1e3}s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD` })), this.config = __spreadValues(__spreadValues({}, wt), e2), true) {
        case this.config.timeout > 6e5:
          console.warn("timeout\u5927\u4E8E\u53EF\u914D\u7F6E\u4E0A\u9650[10\u5206\u949F]\uFF0C\u5DF2\u91CD\u7F6E\u4E3A\u4E0A\u9650\u6570\u503C"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout\u5C0F\u4E8E\u53EF\u914D\u7F6E\u4E0B\u9650[100ms]\uFF0C\u5DF2\u91CD\u7F6E\u4E3A\u4E0B\u9650\u6570\u503C"), this.config.timeout = 100;
      }
      return new _It(this.config);
    }
    auth({ persistence: e2 } = {}) {
      if (this.authObj)
        return this.authObj;
      const t22 = e2 || Oe.adapter.primaryStorage || wt.persistence;
      var n2;
      return t22 !== this.config.persistence && (this.config.persistence = t22), function(e3) {
        const { env: t3 } = e3;
        Ne[t3] = new Ue(e3), De[t3] = new Ue(__spreadProps(__spreadValues({}, e3), { persistence: "local" }));
      }(this.config), n2 = this.config, st[n2.env] = new nt(n2), this.authObj = new dt(this.config), this.authObj;
    }
    on(e2, t22) {
      return je.apply(this, [e2, t22]);
    }
    off(e2, t22) {
      return Be.apply(this, [e2, t22]);
    }
    callFunction(e2, t22) {
      return _t.apply(this, [e2, t22]);
    }
    deleteFile(e2, t22) {
      return gt.apply(this, [e2, t22]);
    }
    getTempFileURL(e2, t22) {
      return mt.apply(this, [e2, t22]);
    }
    downloadFile(e2, t22) {
      return yt.apply(this, [e2, t22]);
    }
    uploadFile(e2, t22) {
      return pt.apply(this, [e2, t22]);
    }
    getUploadMetadata(e2, t22) {
      return ft.apply(this, [e2, t22]);
    }
    registerExtension(e2) {
      vt[e2.name] = e2;
    }
    invokeExtension(e2, t22) {
      return __async(this, null, function* () {
        const n2 = vt[e2];
        if (!n2)
          throw new se({ message: `\u6269\u5C55${e2} \u5FC5\u987B\u5148\u6CE8\u518C` });
        return yield n2.invoke(t22, this);
      });
    }
    useAdapters(e2) {
      const { adapter: t22, runtime: n2 } = xe(e2) || {};
      t22 && (Oe.adapter = t22), n2 && (Oe.runtime = n2);
    }
  };
  var St = new It();
  function bt(e2, t22, n2) {
    void 0 === n2 && (n2 = {});
    var s2 = /\?/.test(t22), r2 = "";
    for (var i2 in n2)
      "" === r2 ? !s2 && (t22 += "?") : r2 += "&", r2 += i2 + "=" + encodeURIComponent(n2[i2]);
    return /^http(s)?:\/\//.test(t22 += r2) ? t22 : "" + e2 + t22;
  }
  var kt = class {
    get(e2) {
      const { url: t22, data: n2, headers: s2, timeout: r2 } = e2;
      return new Promise((e3, i2) => {
        re.request({ url: bt("https:", t22), data: n2, method: "GET", header: s2, timeout: r2, success(t3) {
          e3(t3);
        }, fail(e4) {
          i2(e4);
        } });
      });
    }
    post(e2) {
      const { url: t22, data: n2, headers: s2, timeout: r2 } = e2;
      return new Promise((e3, i2) => {
        re.request({ url: bt("https:", t22), data: n2, method: "POST", header: s2, timeout: r2, success(t3) {
          e3(t3);
        }, fail(e4) {
          i2(e4);
        } });
      });
    }
    upload(e2) {
      return new Promise((t22, n2) => {
        const { url: s2, file: r2, data: i2, headers: o2, fileType: a2 } = e2, c2 = re.uploadFile({ url: bt("https:", s2), name: "file", formData: Object.assign({}, i2), filePath: r2, fileType: a2, header: o2, success(e3) {
          const n3 = { statusCode: e3.statusCode, data: e3.data || {} };
          200 === e3.statusCode && i2.success_action_status && (n3.statusCode = parseInt(i2.success_action_status, 10)), t22(n3);
        }, fail(e3) {
          n2(new Error(e3.errMsg || "uploadFile:fail"));
        } });
        "function" == typeof e2.onUploadProgress && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((t3) => {
          e2.onUploadProgress({ loaded: t3.totalBytesSent, total: t3.totalBytesExpectedToSend });
        });
      });
    }
  };
  var Tt = { setItem(e2, t22) {
    re.setStorageSync(e2, t22);
  }, getItem: (e2) => re.getStorageSync(e2), removeItem(e2) {
    re.removeStorageSync(e2);
  }, clear() {
    re.clearStorageSync();
  } };
  var At = { genAdapter: function() {
    return { root: {}, reqClass: kt, localStorage: Tt, primaryStorage: "local" };
  }, isMatch: function() {
    return true;
  }, runtime: "uni_app" };
  St.useAdapters(At);
  var Pt = St;
  var Ct = Pt.init;
  Pt.init = function(e2) {
    e2.env = e2.spaceId;
    const t22 = Ct.call(this, e2);
    t22.config.provider = "tencent", t22.config.spaceId = e2.spaceId;
    const n2 = t22.auth;
    return t22.auth = function(e3) {
      const t3 = n2.call(this, e3);
      return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((e4) => {
        var n3;
        t3[e4] = (n3 = t3[e4], function(e5) {
          e5 = e5 || {};
          const { success: t4, fail: s2, complete: r2 } = ne(e5);
          if (!(t4 || s2 || r2))
            return n3.call(this, e5);
          n3.call(this, e5).then((e6) => {
            t4 && t4(e6), r2 && r2(e6);
          }, (e6) => {
            s2 && s2(e6), r2 && r2(e6);
          });
        }).bind(t3);
      }), t3;
    }, t22.customAuth = t22.auth, t22;
  };
  var xt = Pt;
  function Ot(e2, t22) {
    return __async(this, null, function* () {
      const n2 = `http://${e2}:${t22}/system/ping`;
      try {
        const e3 = yield (s2 = { url: n2, timeout: 500 }, new Promise((e4, t3) => {
          re.request(__spreadProps(__spreadValues({}, s2), { success(t4) {
            e4(t4);
          }, fail(e5) {
            t3(e5);
          } }));
        }));
        return !(!e3.data || 0 !== e3.data.code);
      } catch (e3) {
        return false;
      }
      var s2;
    });
  }
  function Et(e2, t22) {
    return __async(this, null, function* () {
      let n2;
      for (let s2 = 0; s2 < e2.length; s2++) {
        const r2 = e2[s2];
        if (yield Ot(r2, t22)) {
          n2 = r2;
          break;
        }
      }
      return { address: n2, port: t22 };
    });
  }
  var Lt = { "serverless.file.resource.generateProximalSign": "storage/generate-proximal-sign", "serverless.file.resource.report": "storage/report", "serverless.file.resource.delete": "storage/delete", "serverless.file.resource.getTempFileURL": "storage/get-temp-file-url" };
  var Rt = class {
    constructor(e2) {
      if (["spaceId", "clientSecret"].forEach((t22) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t22))
          throw new Error(`${t22} required`);
      }), !e2.endpoint)
        throw new Error("\u96C6\u7FA4\u7A7A\u95F4\u672A\u914D\u7F6EApiEndpoint\uFF0C\u914D\u7F6E\u540E\u9700\u8981\u91CD\u65B0\u5173\u8054\u670D\u52A1\u7A7A\u95F4\u540E\u751F\u6548");
      this.config = Object.assign({}, e2), this.config.provider = "dcloud", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.adapter = re;
    }
    request(e2, t22 = true) {
      return __async(this, null, function* () {
        const n2 = t22;
        return e2 = n2 ? yield this.setupLocalRequest(e2) : this.setupRequest(e2), Promise.resolve().then(() => n2 ? this.requestLocal(e2) : fe.wrappedRequest(e2, this.adapter.request));
      });
    }
    requestLocal(e2) {
      return new Promise((t22, n2) => {
        this.adapter.request(Object.assign(e2, { complete(e3) {
          if (e3 || (e3 = {}), !e3.statusCode || e3.statusCode >= 400) {
            const t3 = e3.data && e3.data.code || "SYS_ERR", s2 = e3.data && e3.data.message || "request:fail";
            return n2(new se({ code: t3, message: s2 }));
          }
          t22({ success: true, result: e3.data });
        } }));
      });
    }
    setupRequest(e2) {
      const t22 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), n2 = { "Content-Type": "application/json" };
      n2["x-serverless-sign"] = fe.sign(t22, this.config.clientSecret);
      const s2 = pe();
      n2["x-client-info"] = encodeURIComponent(JSON.stringify(s2));
      const { token: r2 } = oe();
      return n2["x-client-token"] = r2, { url: this.config.requestUrl, method: "POST", data: t22, dataType: "json", header: JSON.parse(JSON.stringify(n2)) };
    }
    setupLocalRequest(e2) {
      return __async(this, null, function* () {
        const t22 = pe(), { token: n2 } = oe(), s2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now(), clientInfo: t22, token: n2 }), { address: r2, servePort: i2 } = this.__dev__ && this.__dev__.debugInfo || {}, { address: o2 } = yield Et(r2, i2);
        return { url: `http://${o2}:${i2}/${Lt[e2.method]}`, method: "POST", data: s2, dataType: "json", header: JSON.parse(JSON.stringify({ "Content-Type": "application/json" })) };
      });
    }
    callFunction(e2) {
      const t22 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e2.name, functionArgs: e2.data || {} }) };
      return this.request(t22, false);
    }
    getUploadFileOptions(e2) {
      const t22 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e2) };
      return this.request(t22);
    }
    reportUploadFile(e2) {
      const t22 = { method: "serverless.file.resource.report", params: JSON.stringify(e2) };
      return this.request(t22);
    }
    uploadFile({ filePath: e2, cloudPath: t22, fileType: n2 = "image", onUploadProgress: s2 }) {
      if (!t22)
        throw new se({ code: "CLOUDPATH_REQUIRED", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
      let r2;
      return this.getUploadFileOptions({ cloudPath: t22 }).then((t3) => {
        const { url: i2, formData: o2, name: a2 } = t3.result;
        return r2 = t3.result.fileUrl, new Promise((t4, r3) => {
          const c2 = this.adapter.uploadFile({ url: i2, formData: o2, name: a2, filePath: e2, fileType: n2, success(e3) {
            e3 && e3.statusCode < 400 ? t4(e3) : r3(new se({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
          }, fail(e3) {
            r3(new se({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
          } });
          "function" == typeof s2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
            s2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
          });
        });
      }).then(() => this.reportUploadFile({ cloudPath: t22 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e2, fileID: r2 }) : s3(new se({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
      }));
    }
    deleteFile({ fileList: e2 }) {
      const t22 = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e2 }) };
      return this.request(t22).then((e3) => {
        if (e3.success)
          return e3.result;
        throw new se({ code: "DELETE_FILE_FAILED", message: "\u5220\u9664\u6587\u4EF6\u5931\u8D25" });
      });
    }
    getTempFileURL({ fileList: e2, maxAge: t22 } = {}) {
      if (!Array.isArray(e2) || 0 === e2.length)
        throw new se({ code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" });
      const n2 = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e2, maxAge: t22 }) };
      return this.request(n2).then((e3) => {
        if (e3.success)
          return { fileList: e3.result.fileList.map((e4) => ({ fileID: e4.fileID, tempFileURL: e4.tempFileURL })) };
        throw new se({ code: "GET_TEMP_FILE_URL_FAILED", message: "\u83B7\u53D6\u4E34\u65F6\u6587\u4EF6\u94FE\u63A5\u5931\u8D25" });
      });
    }
  };
  var Ut = { init(e2) {
    const t22 = new Rt(e2), n2 = { signInAnonymously: function() {
      return Promise.resolve();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t22.auth = function() {
      return n2;
    }, t22.customAuth = t22.auth, t22;
  } };
  var Nt = n(function(e2, t22) {
    e2.exports = r.enc.Hex;
  });
  function Dt() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e2) {
      var t22 = 16 * Math.random() | 0;
      return ("x" === e2 ? t22 : 3 & t22 | 8).toString(16);
    });
  }
  function Mt(e2 = "", t22 = {}) {
    const { data: n2, functionName: s2, method: r2, headers: i2, signHeaderKeys: o2 = [], config: a2 } = t22, c2 = String(Date.now()), u2 = Dt(), h2 = Object.assign({}, i2, { "x-from-app-id": a2.spaceAppId, "x-from-env-id": a2.spaceId, "x-to-env-id": a2.spaceId, "x-from-instance-id": c2, "x-from-function-name": s2, "x-client-timestamp": c2, "x-alipay-source": "client", "x-request-id": u2, "x-alipay-callid": u2, "x-trace-id": u2 }), l2 = ["x-from-app-id", "x-from-env-id", "x-to-env-id", "x-from-instance-id", "x-from-function-name", "x-client-timestamp"].concat(o2), [d2 = "", p2 = ""] = e2.split("?") || [], f2 = function(e3) {
      const t3 = e3.signedHeaders.join(";"), n3 = e3.signedHeaders.map((t4) => `${t4.toLowerCase()}:${e3.headers[t4]}
`).join(""), s3 = Ie(e3.body).toString(Nt), r3 = `${e3.method.toUpperCase()}
${e3.path}
${e3.query}
${n3}
${t3}
${s3}
`, i3 = Ie(r3).toString(Nt), o3 = `HMAC-SHA256
${e3.timestamp}
${i3}
`, a3 = Se(o3, e3.secretKey).toString(Nt);
      return `HMAC-SHA256 Credential=${e3.secretId}, SignedHeaders=${t3}, Signature=${a3}`;
    }({ path: d2, query: p2, method: r2, headers: h2, timestamp: c2, body: JSON.stringify(n2), secretId: a2.accessKey, secretKey: a2.secretKey, signedHeaders: l2.sort() });
    return { url: `${a2.endpoint}${e2}`, headers: Object.assign({}, h2, { Authorization: f2 }) };
  }
  function qt({ url: e2, data: t22, method: n2 = "POST", headers: s2 = {}, timeout: r2 }) {
    return new Promise((i2, o2) => {
      re.request({ url: e2, method: n2, data: "object" == typeof t22 ? JSON.stringify(t22) : t22, header: s2, dataType: "json", timeout: r2, complete: (e3 = {}) => {
        const t3 = s2["x-trace-id"] || "";
        if (!e3.statusCode || e3.statusCode >= 400) {
          const { message: n3, errMsg: s3, trace_id: r3 } = e3.data || {};
          return o2(new se({ code: "SYS_ERR", message: n3 || s3 || "request:fail", requestId: r3 || t3 }));
        }
        i2({ status: e3.statusCode, data: e3.data, headers: e3.header, requestId: t3 });
      } });
    });
  }
  function Kt(e2, t22) {
    const { path: n2, data: s2, method: r2 = "GET" } = e2, { url: i2, headers: o2 } = Mt(n2, { functionName: "", data: s2, method: r2, headers: { "x-alipay-cloud-mode": "oss", "x-data-api-type": "oss", "x-expire-timestamp": Date.now() + 6e4 }, signHeaderKeys: ["x-data-api-type", "x-expire-timestamp"], config: t22 });
    return qt({ url: i2, data: s2, method: r2, headers: o2 }).then((e3) => {
      const t3 = e3.data || {};
      if (!t3.success)
        throw new se({ code: e3.errCode, message: e3.errMsg, requestId: e3.requestId });
      return t3.data || {};
    }).catch((e3) => {
      throw new se({ code: e3.errCode, message: e3.errMsg, requestId: e3.requestId });
    });
  }
  function Ft(e2 = "") {
    const t22 = e2.trim().replace(/^cloud:\/\//, ""), n2 = t22.indexOf("/");
    if (n2 <= 0)
      throw new se({ code: "INVALID_PARAM", message: "fileID\u4E0D\u5408\u6CD5" });
    const s2 = t22.substring(0, n2), r2 = t22.substring(n2 + 1);
    return s2 !== this.config.spaceId && console.warn("file ".concat(e2, " does not belong to env ").concat(this.config.spaceId)), r2;
  }
  function jt(e2 = "") {
    return "cloud://".concat(this.config.spaceId, "/").concat(e2.replace(/^\/+/, ""));
  }
  var $t = class {
    constructor(e2) {
      this.config = e2;
    }
    signedURL(e2, t22 = {}) {
      const n2 = `/ws/function/${e2}`, s2 = this.config.wsEndpoint.replace(/^ws(s)?:\/\//, ""), r2 = Object.assign({}, t22, { accessKeyId: this.config.accessKey, signatureNonce: Dt(), timestamp: "" + Date.now() }), i2 = [n2, ["accessKeyId", "authorization", "signatureNonce", "timestamp"].sort().map(function(e3) {
        return r2[e3] ? "".concat(e3, "=").concat(r2[e3]) : null;
      }).filter(Boolean).join("&"), `host:${s2}`].join("\n"), o2 = ["HMAC-SHA256", Ie(i2).toString(Nt)].join("\n"), a2 = Se(o2, this.config.secretKey).toString(Nt), c2 = Object.keys(r2).map((e3) => `${e3}=${encodeURIComponent(r2[e3])}`).join("&");
      return `${this.config.wsEndpoint}${n2}?${c2}&signature=${a2}`;
    }
  };
  var Bt = class {
    constructor(e2) {
      if (["spaceId", "spaceAppId", "accessKey", "secretKey"].forEach((t22) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t22))
          throw new Error(`${t22} required`);
      }), e2.endpoint) {
        if ("string" != typeof e2.endpoint)
          throw new Error("endpoint must be string");
        if (!/^https:\/\//.test(e2.endpoint))
          throw new Error("endpoint must start with https://");
        e2.endpoint = e2.endpoint.replace(/\/$/, "");
      }
      this.config = Object.assign({}, e2, { endpoint: e2.endpoint || `https://${e2.spaceId}.api-hz.cloudbasefunction.cn`, wsEndpoint: e2.wsEndpoint || `wss://${e2.spaceId}.api-hz.cloudbasefunction.cn` }), this._websocket = new $t(this.config);
    }
    callFunction(e2) {
      return function(e3, t22) {
        const { name: n2, data: s2, async: r2 = false, timeout: i2 } = e3, o2 = "POST", a2 = { "x-to-function-name": n2 };
        r2 && (a2["x-function-invoke-type"] = "async");
        const { url: c2, headers: u2 } = Mt("/functions/invokeFunction", { functionName: n2, data: s2, method: o2, headers: a2, signHeaderKeys: ["x-to-function-name"], config: t22 });
        return qt({ url: c2, data: s2, method: o2, headers: u2, timeout: i2 }).then((e4) => {
          let t3 = 0;
          if (r2) {
            const n3 = e4.data || {};
            t3 = "200" === n3.errCode ? 0 : n3.errCode, e4.data = n3.data || {}, e4.errMsg = n3.errMsg;
          }
          if (0 !== t3)
            throw new se({ code: t3, message: e4.errMsg, requestId: e4.requestId });
          return { errCode: t3, success: 0 === t3, requestId: e4.requestId, result: e4.data };
        }).catch((e4) => {
          throw new se({ code: e4.errCode, message: e4.errMsg, requestId: e4.requestId });
        });
      }(e2, this.config);
    }
    uploadFileToOSS({ url: e2, filePath: t22, fileType: n2, formData: s2, onUploadProgress: r2 }) {
      return new Promise((i2, o2) => {
        const a2 = re.uploadFile({ url: e2, filePath: t22, fileType: n2, formData: s2, name: "file", success(e3) {
          e3 && e3.statusCode < 400 ? i2(e3) : o2(new se({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        }, fail(e3) {
          o2(new se({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        } });
        "function" == typeof r2 && a2 && "function" == typeof a2.onProgressUpdate && a2.onProgressUpdate((e3) => {
          r2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    uploadFile(_0) {
      return __async(this, arguments, function* ({ filePath: e2, cloudPath: t22 = "", fileType: n2 = "image", onUploadProgress: s2 }) {
        if ("string" !== f(t22))
          throw new se({ code: "INVALID_PARAM", message: "cloudPath\u5FC5\u987B\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B" });
        if (!(t22 = t22.trim()))
          throw new se({ code: "INVALID_PARAM", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
        if (/:\/\//.test(t22))
          throw new se({ code: "INVALID_PARAM", message: "cloudPath\u4E0D\u5408\u6CD5" });
        const r2 = yield Kt({ path: "/".concat(t22.replace(/^\//, ""), "?post_url") }, this.config), { file_id: i2, upload_url: o2, form_data: a2 } = r2, c2 = a2 && a2.reduce((e3, t3) => (e3[t3.key] = t3.value, e3), {});
        return this.uploadFileToOSS({ url: o2, filePath: e2, fileType: n2, formData: c2, onUploadProgress: s2 }).then(() => ({ fileID: i2 }));
      });
    }
    getTempFileURL(_0) {
      return __async(this, arguments, function* ({ fileList: e2 }) {
        return new Promise((t22, n2) => {
          (!e2 || e2.length < 0) && t22({ code: "INVALID_PARAM", message: "fileList\u4E0D\u80FD\u4E3A\u7A7A\u6570\u7EC4" }), e2.length > 50 && t22({ code: "INVALID_PARAM", message: "fileList\u6570\u7EC4\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC750" });
          const s2 = [];
          for (const n3 of e2) {
            let e3;
            "string" !== f(n3) && t22({ code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" });
            try {
              e3 = Ft.call(this, n3);
            } catch (t3) {
              console.warn(t3.errCode, t3.errMsg), e3 = n3;
            }
            s2.push({ file_id: e3, expire: 600 });
          }
          Kt({ path: "/?download_url", data: { file_list: s2 }, method: "POST" }, this.config).then((e3) => {
            const { file_list: n3 = [] } = e3;
            t22({ fileList: n3.map((e4) => ({ fileID: jt.call(this, e4.file_id), tempFileURL: e4.download_url })) });
          }).catch((e3) => n2(e3));
        });
      });
    }
    connectWebSocket(e2) {
      return __async(this, null, function* () {
        const { name: t22, query: n2 } = e2;
        return re.connectSocket({ url: this._websocket.signedURL(t22, n2), complete: () => {
        } });
      });
    }
  };
  var Wt = { init: (e2) => {
    e2.provider = "alipay";
    const t22 = new Bt(e2);
    return t22.auth = function() {
      return { signInAnonymously: function() {
        return Promise.resolve();
      }, getLoginState: function() {
        return Promise.resolve(true);
      } };
    }, t22;
  } };
  function Ht({ data: e2 }) {
    let t22;
    t22 = pe();
    const n2 = JSON.parse(JSON.stringify(e2 || {}));
    if (Object.assign(n2, { clientInfo: t22 }), !n2.uniIdToken) {
      const { token: e3 } = oe();
      e3 && (n2.uniIdToken = e3);
    }
    return n2;
  }
  function Jt() {
    return __async(this, arguments, function* (e2 = {}) {
      yield this.__dev__.initLocalNetwork();
      const { localAddress: t22, localPort: n2 } = this.__dev__, s2 = { aliyun: "aliyun", tencent: "tcb", alipay: "alipay", dcloud: "dcloud" }[this.config.provider], r2 = this.config.spaceId, i2 = `http://${t22}:${n2}/system/check-function`, o2 = `http://${t22}:${n2}/cloudfunctions/${e2.name}`;
      return new Promise((t3, n3) => {
        re.request({ method: "POST", url: i2, data: { name: e2.name, platform: A, provider: s2, spaceId: r2 }, timeout: 3e3, success(e3) {
          t3(e3);
        }, fail() {
          t3({ data: { code: "NETWORK_ERROR", message: "\u8FDE\u63A5\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5BA2\u6237\u7AEF\u662F\u5426\u548C\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570\u3002" } });
        } });
      }).then(({ data: e3 } = {}) => {
        const { code: t3, message: n3 } = e3 || {};
        return { code: 0 === t3 ? 0 : t3 || "SYS_ERR", message: n3 || "SYS_ERR" };
      }).then(({ code: t3, message: n3 }) => {
        if (0 !== t3) {
          switch (t3) {
            case "MODULE_ENCRYPTED":
              console.error(`\u6B64\u4E91\u51FD\u6570\uFF08${e2.name}\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570`);
              break;
            case "FUNCTION_ENCRYPTED":
              console.error(`\u6B64\u4E91\u51FD\u6570\uFF08${e2.name}\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570`);
              break;
            case "ACTION_ENCRYPTED":
              console.error(n3 || "\u9700\u8981\u8BBF\u95EE\u52A0\u5BC6\u7684uni-clientDB-action\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u73AF\u5883");
              break;
            case "NETWORK_ERROR":
              console.error(n3 || "\u8FDE\u63A5\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5BA2\u6237\u7AEF\u662F\u5426\u548C\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B");
              break;
            case "SWITCH_TO_CLOUD":
              break;
            default: {
              const e3 = `\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A${n3}\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5`;
              throw console.error(e3), new Error(e3);
            }
          }
          return this._callCloudFunction(e2);
        }
        return new Promise((t4, n4) => {
          const r3 = Ht.call(this, { data: e2.data });
          re.request({ method: "POST", url: o2, data: { provider: s2, platform: A, param: r3 }, timeout: e2.timeout, success: ({ statusCode: e3, data: s3 } = {}) => !e3 || e3 >= 400 ? n4(new se({ code: s3.code || "SYS_ERR", message: s3.message || "request:fail" })) : t4({ result: s3 }), fail(e3) {
            n4(new se({ code: e3.code || e3.errCode || "SYS_ERR", message: e3.message || e3.errMsg || "request:fail" }));
          } });
        });
      });
    });
  }
  var zt = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "\uFF0C\u4E91\u51FD\u6570[{functionName}]\u5728\u4E91\u7AEF\u4E0D\u5B58\u5728\uFF0C\u8BF7\u68C0\u67E5\u6B64\u4E91\u51FD\u6570\u540D\u79F0\u662F\u5426\u6B63\u786E\u4EE5\u53CA\u8BE5\u4E91\u51FD\u6570\u662F\u5426\u5DF2\u4E0A\u4F20\u5230\u670D\u52A1\u7A7A\u95F4", mode: "append" }];
  var Vt = /[\\^$.*+?()[\]{}|]/g;
  var Gt = RegExp(Vt.source);
  function Yt(e2, t22, n2) {
    return e2.replace(new RegExp((s2 = t22) && Gt.test(s2) ? s2.replace(Vt, "\\$&") : s2, "g"), n2);
    var s2;
  }
  var Xt = "request";
  var Zt = "response";
  var en = "both";
  var Mn = { code: 2e4, message: "System error" };
  var qn = { code: 20101, message: "Invalid client" };
  function jn(e2) {
    const { errSubject: t22, subject: n2, errCode: s2, errMsg: r2, code: i2, message: o2, cause: a2 } = e2 || {};
    return new se({ subject: t22 || n2 || "uni-secure-network", code: s2 || i2 || Mn.code, message: r2 || o2, cause: a2 });
  }
  var Bn;
  function Vn({ secretType: e2 } = {}) {
    return e2 === Xt || e2 === Zt || e2 === en;
  }
  function Gn({ name: e2, data: t22 = {} } = {}) {
    return "DCloud-clientDB" === e2 && "encryption" === t22.redirectTo && "getAppClientKey" === t22.action;
  }
  function Yn({ provider: e2, spaceId: t22, functionName: n2 } = {}) {
    const { appId: s2, uniPlatform: r2, osName: i2 } = he();
    let o2 = r2;
    "app" === r2 && (o2 = i2);
    const a2 = function({ provider: e3, spaceId: t3 } = {}) {
      const n3 = T;
      if (!n3)
        return {};
      e3 = /* @__PURE__ */ function(e4) {
        return "tencent" === e4 ? "tcb" : e4;
      }(e3);
      const s3 = n3.find((n4) => n4.provider === e3 && n4.spaceId === t3);
      return s3 && s3.config;
    }({ provider: e2, spaceId: t22 });
    if (!a2 || !a2.accessControl || !a2.accessControl.enable)
      return false;
    const c2 = a2.accessControl.function || {}, u2 = Object.keys(c2);
    if (0 === u2.length)
      return true;
    const h2 = function(e3, t3) {
      let n3, s3, r3;
      for (let i3 = 0; i3 < e3.length; i3++) {
        const o3 = e3[i3];
        o3 !== t3 ? "*" !== o3 ? o3.split(",").map((e4) => e4.trim()).indexOf(t3) > -1 && (s3 = o3) : r3 = o3 : n3 = o3;
      }
      return n3 || s3 || r3;
    }(u2, n2);
    if (!h2)
      return false;
    if ((c2[h2] || []).find((e3 = {}) => e3.appId === s2 && (e3.platform || "").toLowerCase() === o2.toLowerCase()))
      return true;
    throw console.error(`\u6B64\u5E94\u7528[appId: ${s2}, platform: ${o2}]\u4E0D\u5728\u4E91\u7AEF\u914D\u7F6E\u7684\u5141\u8BB8\u8BBF\u95EE\u7684\u5E94\u7528\u5217\u8868\u5185\uFF0C\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client`), jn(qn);
  }
  function Qn({ functionName: e2, result: t22, logPvd: n2 }) {
    if (this.__dev__.debugLog && t22 && t22.requestId) {
      const s2 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e2, requestId: t22.requestId });
      console.log(`[${n2}-request]${s2}[/${n2}-request]`);
    }
  }
  function Xn(e2) {
    const t22 = e2.callFunction, n2 = function(n3) {
      const s2 = n3.name;
      n3.data = Ht.call(e2, { data: n3.data });
      const r2 = { aliyun: "aliyun", tencent: "tcb", tcb: "tcb", alipay: "alipay", dcloud: "dcloud" }[this.config.provider], i2 = Vn(n3), o2 = Gn(n3), a2 = i2 || o2;
      return t22.call(this, n3).then((e3) => (e3.errCode = 0, !a2 && Qn.call(this, { functionName: s2, result: e3, logPvd: r2 }), Promise.resolve(e3)), (e3) => (!a2 && Qn.call(this, { functionName: s2, result: e3, logPvd: r2 }), e3 && e3.message && (e3.message = function({ message: e4 = "", extraInfo: t3 = {}, formatter: n4 = [] } = {}) {
        for (let s3 = 0; s3 < n4.length; s3++) {
          const { rule: r3, content: i3, mode: o3 } = n4[s3], a3 = e4.match(r3);
          if (!a3)
            continue;
          let c2 = i3;
          for (let e5 = 1; e5 < a3.length; e5++)
            c2 = Yt(c2, `{$${e5}}`, a3[e5]);
          for (const e5 in t3)
            c2 = Yt(c2, `{${e5}}`, t3[e5]);
          return "replace" === o3 ? c2 : e4 + c2;
        }
        return e4;
      }({ message: `[${n3.name}]: ${e3.message}`, formatter: zt, extraInfo: { functionName: s2 } })), Promise.reject(e3)));
    };
    e2.callFunction = function(t3) {
      const { provider: s2, spaceId: r2 } = e2.config, i2 = t3.name;
      let o2, a2;
      if (t3.data = t3.data || {}, e2.__dev__.debugInfo && !e2.__dev__.debugInfo.forceRemote && C ? (e2._callCloudFunction || (e2._callCloudFunction = n2, e2._callLocalFunction = Jt), o2 = Jt) : o2 = n2, o2 = o2.bind(e2), Gn(t3))
        a2 = n2.call(e2, t3);
      else if (Vn(t3)) {
        a2 = new Bn({ secretType: t3.secretType, uniCloudIns: e2 }).wrapEncryptDataCallFunction(n2.bind(e2))(t3);
      } else if (Yn({ provider: s2, spaceId: r2, functionName: i2 })) {
        a2 = new Bn({ secretType: t3.secretType, uniCloudIns: e2 }).wrapVerifyClientCallFunction(n2.bind(e2))(t3);
      } else
        a2 = o2(t3);
      return Object.defineProperty(a2, "result", { get: () => (console.warn("\u5F53\u524D\u8FD4\u56DE\u7ED3\u679C\u4E3APromise\u7C7B\u578B\uFF0C\u4E0D\u53EF\u76F4\u63A5\u8BBF\u95EE\u5176result\u5C5E\u6027\uFF0C\u8BE6\u60C5\u8BF7\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}) }), a2.then((e3) => ("undefined" != typeof UTSJSONObject && "undefined" != typeof UTS && (e3.result = UTS.JSON.parse(JSON.stringify(e3.result))), e3));
    };
  }
  Bn = class {
    constructor() {
      throw jn({ message: `Platform ${A} is not enabled, please check whether secure network module is enabled in your manifest.json` });
    }
  };
  var Zn = Symbol("CLIENT_DB_INTERNAL");
  function es(e2, t22) {
    return e2.then = "DoNotReturnProxyWithAFunctionNamedThen", e2._internalType = Zn, e2.inspect = null, e2.__v_raw = void 0, new Proxy(e2, { get(e3, n2, s2) {
      if ("_uniClient" === n2)
        return null;
      if ("symbol" == typeof n2)
        return e3[n2];
      if (n2 in e3 || "string" != typeof n2) {
        const t3 = e3[n2];
        return "function" == typeof t3 ? t3.bind(e3) : t3;
      }
      return t22.get(e3, n2, s2);
    } });
  }
  function ts(e2) {
    return { on: (t22, n2) => {
      e2[t22] = e2[t22] || [], e2[t22].indexOf(n2) > -1 || e2[t22].push(n2);
    }, off: (t22, n2) => {
      e2[t22] = e2[t22] || [];
      const s2 = e2[t22].indexOf(n2);
      -1 !== s2 && e2[t22].splice(s2, 1);
    } };
  }
  var ns = ["db.Geo", "db.command", "command.aggregate"];
  function ss(e2, t22) {
    return ns.indexOf(`${e2}.${t22}`) > -1;
  }
  function rs(e2) {
    switch (f(e2 = ie(e2))) {
      case "array":
        return e2.map((e3) => rs(e3));
      case "object":
        return e2._internalType === Zn || Object.keys(e2).forEach((t22) => {
          e2[t22] = rs(e2[t22]);
        }), e2;
      case "regexp":
        return { $regexp: { source: e2.source, flags: e2.flags } };
      case "date":
        return { $date: e2.toISOString() };
      default:
        return e2;
    }
  }
  function is(e2) {
    return e2 && e2.content && e2.content.$method;
  }
  var os = class {
    constructor(e2, t22, n2) {
      this.content = e2, this.prevStage = t22 || null, this.udb = null, this._database = n2;
    }
    toJSON() {
      let e2 = this;
      const t22 = [e2.content];
      for (; e2.prevStage; )
        e2 = e2.prevStage, t22.push(e2.content);
      return { $db: t22.reverse().map((e3) => ({ $method: e3.$method, $param: rs(e3.$param) })) };
    }
    toString() {
      return JSON.stringify(this.toJSON());
    }
    getAction() {
      const e2 = this.toJSON().$db.find((e3) => "action" === e3.$method);
      return e2 && e2.$param && e2.$param[0];
    }
    getCommand() {
      return { $db: this.toJSON().$db.filter((e2) => "action" !== e2.$method) };
    }
    get isAggregate() {
      let e2 = this;
      for (; e2; ) {
        const t22 = is(e2), n2 = is(e2.prevStage);
        if ("aggregate" === t22 && "collection" === n2 || "pipeline" === t22)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isCommand() {
      let e2 = this;
      for (; e2; ) {
        if ("command" === is(e2))
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isAggregateCommand() {
      let e2 = this;
      for (; e2; ) {
        const t22 = is(e2), n2 = is(e2.prevStage);
        if ("aggregate" === t22 && "command" === n2)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    getNextStageFn(e2) {
      const t22 = this;
      return function() {
        return as({ $method: e2, $param: rs(Array.from(arguments)) }, t22, t22._database);
      };
    }
    get count() {
      return this.isAggregate ? this.getNextStageFn("count") : function() {
        return this._send("count", Array.from(arguments));
      };
    }
    get remove() {
      return this.isCommand ? this.getNextStageFn("remove") : function() {
        return this._send("remove", Array.from(arguments));
      };
    }
    get() {
      return this._send("get", Array.from(arguments));
    }
    get add() {
      return this.isCommand ? this.getNextStageFn("add") : function() {
        return this._send("add", Array.from(arguments));
      };
    }
    update() {
      return this._send("update", Array.from(arguments));
    }
    end() {
      return this._send("end", Array.from(arguments));
    }
    get set() {
      return this.isCommand ? this.getNextStageFn("set") : function() {
        throw new Error("JQL\u7981\u6B62\u4F7F\u7528set\u65B9\u6CD5");
      };
    }
    _send(e2, t22) {
      const n2 = this.getAction(), s2 = this.getCommand();
      if (s2.$db.push({ $method: e2, $param: rs(t22) }), S) {
        const e3 = s2.$db.find((e4) => "collection" === e4.$method), t3 = e3 && e3.$param;
        t3 && 1 === t3.length && "string" == typeof e3.$param[0] && e3.$param[0].indexOf(",") > -1 && console.warn("\u68C0\u6D4B\u5230\u4F7F\u7528JQL\u8BED\u6CD5\u8054\u8868\u67E5\u8BE2\u65F6\uFF0C\u672A\u4F7F\u7528getTemp\u5148\u8FC7\u6EE4\u4E3B\u8868\u6570\u636E\uFF0C\u5728\u4E3B\u8868\u6570\u636E\u91CF\u5927\u7684\u60C5\u51B5\u4E0B\u53EF\u80FD\u4F1A\u67E5\u8BE2\u7F13\u6162\u3002\n- \u5982\u4F55\u4F18\u5316\u8BF7\u53C2\u8003\u6B64\u6587\u6863\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- \u5982\u679C\u4E3B\u8868\u6570\u636E\u91CF\u5F88\u5C0F\u8BF7\u5FFD\u7565\u6B64\u4FE1\u606F\uFF0C\u9879\u76EE\u53D1\u884C\u65F6\u4E0D\u4F1A\u51FA\u73B0\u6B64\u63D0\u793A\u3002");
      }
      return this._database._callCloudFunction({ action: n2, command: s2 });
    }
  };
  function as(e2, t22, n2) {
    return es(new os(e2, t22, n2), { get(e3, t3) {
      let s2 = "db";
      return e3 && e3.content && (s2 = e3.content.$method), ss(s2, t3) ? as({ $method: t3 }, e3, n2) : function() {
        return as({ $method: t3, $param: rs(Array.from(arguments)) }, e3, n2);
      };
    } });
  }
  function cs({ path: e2, method: t22 }) {
    return class {
      constructor() {
        this.param = Array.from(arguments);
      }
      toJSON() {
        return { $newDb: [...e2.map((e3) => ({ $method: e3 })), { $method: t22, $param: this.param }] };
      }
      toString() {
        return JSON.stringify(this.toJSON());
      }
    };
  }
  function us(e2, t22 = {}) {
    return es(new e2(t22), { get: (e3, t3) => ss("db", t3) ? as({ $method: t3 }, null, e3) : function() {
      return as({ $method: t3, $param: rs(Array.from(arguments)) }, null, e3);
    } });
  }
  var hs = class extends class {
    constructor({ uniClient: e2 = {}, isJQL: t22 = false } = {}) {
      this._uniClient = e2, this._authCallBacks = {}, this._dbCallBacks = {}, e2._isDefault && (this._dbCallBacks = R("_globalUniCloudDatabaseCallback")), t22 || (this.auth = ts(this._authCallBacks)), this._isJQL = t22, Object.assign(this, ts(this._dbCallBacks)), this.env = es({}, { get: (e3, t3) => ({ $env: t3 }) }), this.Geo = es({}, { get: (e3, t3) => cs({ path: ["Geo"], method: t3 }) }), this.serverDate = cs({ path: [], method: "serverDate" }), this.RegExp = cs({ path: [], method: "RegExp" });
    }
    getCloudEnv(e2) {
      if ("string" != typeof e2 || !e2.trim())
        throw new Error("getCloudEnv\u53C2\u6570\u9519\u8BEF");
      return { $env: e2.replace("$cloudEnv_", "") };
    }
    _callback(e2, t22) {
      const n2 = this._dbCallBacks;
      n2[e2] && n2[e2].forEach((e3) => {
        e3(...t22);
      });
    }
    _callbackAuth(e2, t22) {
      const n2 = this._authCallBacks;
      n2[e2] && n2[e2].forEach((e3) => {
        e3(...t22);
      });
    }
    multiSend() {
      const e2 = Array.from(arguments), t22 = e2.map((e3) => {
        const t3 = e3.getAction(), n2 = e3.getCommand();
        if ("getTemp" !== n2.$db[n2.$db.length - 1].$method)
          throw new Error("multiSend\u53EA\u652F\u6301\u5B50\u547D\u4EE4\u5185\u4F7F\u7528getTemp");
        return { action: t3, command: n2 };
      });
      return this._callCloudFunction({ multiCommand: t22, queryList: e2 });
    }
  } {
    _parseResult(e2) {
      return this._isJQL ? e2.result : e2;
    }
    _callCloudFunction({ action: e2, command: t22, multiCommand: n2, queryList: s2 }) {
      function r2(e3, t3) {
        if (n2 && s2)
          for (let n3 = 0; n3 < s2.length; n3++) {
            const r3 = s2[n3];
            r3.udb && "function" == typeof r3.udb.setResult && (t3 ? r3.udb.setResult(t3) : r3.udb.setResult(e3.result.dataList[n3]));
          }
      }
      const i2 = this, o2 = this._isJQL ? "databaseForJQL" : "database";
      function a2(e3) {
        return i2._callback("error", [e3]), K(F(o2, "fail"), e3).then(() => K(F(o2, "complete"), e3)).then(() => (r2(null, e3), X(B, { type: J, content: e3 }), Promise.reject(e3)));
      }
      const c2 = K(F(o2, "invoke")), u2 = this._uniClient;
      return c2.then(() => u2.callFunction({ name: "DCloud-clientDB", type: h, data: { action: e2, command: t22, multiCommand: n2 } })).then((e3) => {
        const { code: t3, message: n3, token: s3, tokenExpired: c3, systemInfo: u3 = [] } = e3.result;
        if (u3)
          for (let e4 = 0; e4 < u3.length; e4++) {
            const { level: t4, message: n4, detail: s4 } = u3[e4], r3 = console["warn" === t4 ? "error" : t4] || console.log;
            let i3 = "[System Info]" + n4;
            s4 && (i3 = `${i3}
\u8BE6\u7EC6\u4FE1\u606F\uFF1A${s4}`), r3(i3);
          }
        if (t3) {
          return a2(new se({ code: t3, message: n3, requestId: e3.requestId }));
        }
        e3.result.errCode = e3.result.errCode || e3.result.code, e3.result.errMsg = e3.result.errMsg || e3.result.message, s3 && c3 && (ae({ token: s3, tokenExpired: c3 }), this._callbackAuth("refreshToken", [{ token: s3, tokenExpired: c3 }]), this._callback("refreshToken", [{ token: s3, tokenExpired: c3 }]), X(H, { token: s3, tokenExpired: c3 }));
        const h2 = [{ prop: "affectedDocs", tips: "affectedDocs\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528inserted/deleted/updated/data.length\u66FF\u4EE3" }, { prop: "code", tips: "code\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528errCode\u66FF\u4EE3" }, { prop: "message", tips: "message\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528errMsg\u66FF\u4EE3" }];
        for (let t4 = 0; t4 < h2.length; t4++) {
          const { prop: n4, tips: s4 } = h2[t4];
          if (n4 in e3.result) {
            const t5 = e3.result[n4];
            Object.defineProperty(e3.result, n4, { get: () => (console.warn(s4), t5) });
          }
        }
        return function(e4) {
          return K(F(o2, "success"), e4).then(() => K(F(o2, "complete"), e4)).then(() => {
            r2(e4, null);
            const t4 = i2._parseResult(e4);
            return X(B, { type: J, content: t4 }), Promise.resolve(t4);
          });
        }(e3);
      }, (e3) => {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e3.message) && console.warn("clientDB\u672A\u521D\u59CB\u5316\uFF0C\u8BF7\u5728web\u63A7\u5236\u53F0\u4FDD\u5B58\u4E00\u6B21schema\u4EE5\u5F00\u542FclientDB");
        return a2(new se({ code: e3.code || "SYSTEM_ERROR", message: e3.message, requestId: e3.requestId }));
      });
    }
  };
  var ls = "token\u65E0\u6548\uFF0C\u8DF3\u8F6C\u767B\u5F55\u9875\u9762";
  var ds = "token\u8FC7\u671F\uFF0C\u8DF3\u8F6C\u767B\u5F55\u9875\u9762";
  var ps = { TOKEN_INVALID_TOKEN_EXPIRED: ds, TOKEN_INVALID_INVALID_CLIENTID: ls, TOKEN_INVALID: ls, TOKEN_INVALID_WRONG_TOKEN: ls, TOKEN_INVALID_ANONYMOUS_USER: ls };
  var fs = { "uni-id-token-expired": ds, "uni-id-check-token-failed": ls, "uni-id-token-not-exist": ls, "uni-id-check-device-feature-failed": ls };
  function gs(e2, t22) {
    let n2 = "";
    return n2 = e2 ? `${e2}/${t22}` : t22, n2.replace(/^\//, "");
  }
  function ms(e2 = [], t22 = "") {
    const n2 = [], s2 = [];
    return e2.forEach((e3) => {
      true === e3.needLogin ? n2.push(gs(t22, e3.path)) : false === e3.needLogin && s2.push(gs(t22, e3.path));
    }), { needLoginPage: n2, notNeedLoginPage: s2 };
  }
  function ys(e2) {
    return e2.split("?")[0].replace(/^\//, "");
  }
  function _s() {
    return function(e2) {
      let t22 = e2 && e2.$page && e2.$page.fullPath || "";
      return t22 ? ("/" !== t22.charAt(0) && (t22 = "/" + t22), t22) : t22;
    }(function() {
      const e2 = getCurrentPages();
      return e2[e2.length - 1];
    }());
  }
  function ws() {
    return ys(_s());
  }
  function vs(e2 = "", t22 = {}) {
    if (!e2)
      return false;
    if (!(t22 && t22.list && t22.list.length))
      return false;
    const n2 = t22.list, s2 = ys(e2);
    return n2.some((e3) => e3.pagePath === s2);
  }
  var Is = !!e.uniIdRouter;
  var { loginPage: Ss, routerNeedLogin: bs, resToLogin: ks, needLoginPage: Ts, notNeedLoginPage: As, loginPageInTabBar: Ps } = function({ pages: t22 = [], subPackages: n2 = [], uniIdRouter: s2 = {}, tabBar: r2 = {} } = e) {
    const { loginPage: i2, needLogin: o2 = [], resToLogin: a2 = true } = s2, { needLoginPage: c2, notNeedLoginPage: u2 } = ms(t22), { needLoginPage: h2, notNeedLoginPage: l2 } = function(e2 = []) {
      const t3 = [], n3 = [];
      return e2.forEach((e3) => {
        const { root: s3, pages: r3 = [] } = e3, { needLoginPage: i3, notNeedLoginPage: o3 } = ms(r3, s3);
        t3.push(...i3), n3.push(...o3);
      }), { needLoginPage: t3, notNeedLoginPage: n3 };
    }(n2);
    return { loginPage: i2, routerNeedLogin: o2, resToLogin: a2, needLoginPage: [...c2, ...h2], notNeedLoginPage: [...u2, ...l2], loginPageInTabBar: vs(i2, r2) };
  }();
  if (Ts.indexOf(Ss) > -1)
    throw new Error(`Login page [${Ss}] should not be "needLogin", please check your pages.json`);
  function Cs(e2) {
    const t22 = ws();
    if ("/" === e2.charAt(0))
      return e2;
    const [n2, s2] = e2.split("?"), r2 = n2.replace(/^\//, "").split("/"), i2 = t22.split("/");
    i2.pop();
    for (let e3 = 0; e3 < r2.length; e3++) {
      const t3 = r2[e3];
      ".." === t3 ? i2.pop() : "." !== t3 && i2.push(t3);
    }
    return "" === i2[0] && i2.shift(), "/" + i2.join("/") + (s2 ? "?" + s2 : "");
  }
  function xs(e2) {
    const t22 = ys(Cs(e2));
    return !(As.indexOf(t22) > -1) && (Ts.indexOf(t22) > -1 || bs.some((t3) => function(e3, t4) {
      return new RegExp(t4).test(e3);
    }(e2, t3)));
  }
  function Os({ redirect: e2 }) {
    const t22 = ys(e2), n2 = ys(Ss);
    return ws() !== n2 && t22 !== n2;
  }
  function Es({ api: e2, redirect: t22 } = {}) {
    if (!t22 || !Os({ redirect: t22 }))
      return;
    const n2 = function(e3, t3) {
      return "/" !== e3.charAt(0) && (e3 = "/" + e3), t3 ? e3.indexOf("?") > -1 ? e3 + `&uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3 + `?uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3;
    }(Ss, t22);
    Ps ? "navigateTo" !== e2 && "redirectTo" !== e2 || (e2 = "switchTab") : "switchTab" === e2 && (e2 = "navigateTo");
    const s2 = { navigateTo: uni.navigateTo, redirectTo: uni.redirectTo, switchTab: uni.switchTab, reLaunch: uni.reLaunch };
    setTimeout(() => {
      s2[e2]({ url: n2 });
    }, 0);
  }
  function Ls({ url: e2 } = {}) {
    const t22 = { abortLoginPageJump: false, autoToLoginPage: false }, n2 = function() {
      const { token: e3, tokenExpired: t3 } = oe();
      let n3;
      if (e3) {
        if (t3 < Date.now()) {
          const e4 = "uni-id-token-expired";
          n3 = { errCode: e4, errMsg: fs[e4] };
        }
      } else {
        const e4 = "uni-id-check-token-failed";
        n3 = { errCode: e4, errMsg: fs[e4] };
      }
      return n3;
    }();
    if (xs(e2) && n2) {
      n2.uniIdRedirectUrl = e2;
      if (G(W).length > 0)
        return setTimeout(() => {
          X(W, n2);
        }, 0), t22.abortLoginPageJump = true, t22;
      t22.autoToLoginPage = true;
    }
    return t22;
  }
  function Rs() {
    !function() {
      const e3 = _s(), { abortLoginPageJump: t22, autoToLoginPage: n2 } = Ls({ url: e3 });
      t22 || n2 && Es({ api: "redirectTo", redirect: e3 });
    }();
    const e2 = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
    for (let t22 = 0; t22 < e2.length; t22++) {
      const n2 = e2[t22];
      uni.addInterceptor(n2, { invoke(e3) {
        const { abortLoginPageJump: t3, autoToLoginPage: s2 } = Ls({ url: e3.url });
        return t3 ? e3 : s2 ? (Es({ api: n2, redirect: Cs(e3.url) }), false) : e3;
      } });
    }
  }
  function Us() {
    this.onResponse((e2) => {
      const { type: t22, content: n2 } = e2;
      let s2 = false;
      switch (t22) {
        case "cloudobject":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in fs;
          }(n2);
          break;
        case "clientdb":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in ps;
          }(n2);
      }
      s2 && function(e3 = {}) {
        const t3 = G(W);
        te().then(() => {
          const n3 = _s();
          if (n3 && Os({ redirect: n3 }))
            return t3.length > 0 ? X(W, Object.assign({ uniIdRedirectUrl: n3 }, e3)) : void (Ss && Es({ api: "navigateTo", redirect: n3 }));
        });
      }(n2);
    });
  }
  function Ns(e2) {
    !function(e3) {
      e3.onResponse = function(e4) {
        Y(B, e4);
      }, e3.offResponse = function(e4) {
        Q(B, e4);
      };
    }(e2), function(e3) {
      e3.onNeedLogin = function(e4) {
        Y(W, e4);
      }, e3.offNeedLogin = function(e4) {
        Q(W, e4);
      }, Is && (R("_globalUniCloudStatus").needLoginInit || (R("_globalUniCloudStatus").needLoginInit = true, te().then(() => {
        Rs.call(e3);
      }), ks && Us.call(e3)));
    }(e2), function(e3) {
      e3.onRefreshToken = function(e4) {
        Y(H, e4);
      }, e3.offRefreshToken = function(e4) {
        Q(H, e4);
      };
    }(e2);
  }
  var Ds;
  var Ms = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var qs = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
  function Ks() {
    const e2 = oe().token || "", t22 = e2.split(".");
    if (!e2 || 3 !== t22.length)
      return { uid: null, role: [], permission: [], tokenExpired: 0 };
    let n2;
    try {
      n2 = JSON.parse((s2 = t22[1], decodeURIComponent(Ds(s2).split("").map(function(e3) {
        return "%" + ("00" + e3.charCodeAt(0).toString(16)).slice(-2);
      }).join(""))));
    } catch (e3) {
      throw new Error("\u83B7\u53D6\u5F53\u524D\u7528\u6237\u4FE1\u606F\u51FA\u9519\uFF0C\u8BE6\u7EC6\u9519\u8BEF\u4FE1\u606F\u4E3A\uFF1A" + e3.message);
    }
    var s2;
    return n2.tokenExpired = 1e3 * n2.exp, delete n2.exp, delete n2.iat, n2;
  }
  Ds = "function" != typeof atob ? function(e2) {
    if (e2 = String(e2).replace(/[\t\n\f\r ]+/g, ""), !qs.test(e2))
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t22;
    e2 += "==".slice(2 - (3 & e2.length));
    for (var n2, s2, r2 = "", i2 = 0; i2 < e2.length; )
      t22 = Ms.indexOf(e2.charAt(i2++)) << 18 | Ms.indexOf(e2.charAt(i2++)) << 12 | (n2 = Ms.indexOf(e2.charAt(i2++))) << 6 | (s2 = Ms.indexOf(e2.charAt(i2++))), r2 += 64 === n2 ? String.fromCharCode(t22 >> 16 & 255) : 64 === s2 ? String.fromCharCode(t22 >> 16 & 255, t22 >> 8 & 255) : String.fromCharCode(t22 >> 16 & 255, t22 >> 8 & 255, 255 & t22);
    return r2;
  } : atob;
  var Fs = n(function(e2, t22) {
    Object.defineProperty(t22, "__esModule", { value: true });
    const n2 = "chooseAndUploadFile:ok", s2 = "chooseAndUploadFile:fail";
    function r2(e3, t3) {
      return e3.tempFiles.forEach((e4, n3) => {
        e4.name || (e4.name = e4.path.substring(e4.path.lastIndexOf("/") + 1)), t3 && (e4.fileType = t3), e4.cloudPath = Date.now() + "_" + n3 + e4.name.substring(e4.name.lastIndexOf("."));
      }), e3.tempFilePaths || (e3.tempFilePaths = e3.tempFiles.map((e4) => e4.path)), e3;
    }
    function i2(e3, t3, { onChooseFile: s3, onUploadProgress: r3 }) {
      return t3.then((e4) => {
        if (s3) {
          const t4 = s3(e4);
          if (void 0 !== t4)
            return Promise.resolve(t4).then((t5) => void 0 === t5 ? e4 : t5);
        }
        return e4;
      }).then((t4) => false === t4 ? { errMsg: n2, tempFilePaths: [], tempFiles: [] } : function(e4, t5, s4 = 5, r4) {
        (t5 = Object.assign({}, t5)).errMsg = n2;
        const i3 = t5.tempFiles, o2 = i3.length;
        let a2 = 0;
        return new Promise((n3) => {
          for (; a2 < s4; )
            c2();
          function c2() {
            const s5 = a2++;
            if (s5 >= o2)
              return void (!i3.find((e5) => !e5.url && !e5.errMsg) && n3(t5));
            const u2 = i3[s5];
            e4.uploadFile({ provider: u2.provider, filePath: u2.path, cloudPath: u2.cloudPath, fileType: u2.fileType, cloudPathAsRealPath: u2.cloudPathAsRealPath, onUploadProgress(e5) {
              e5.index = s5, e5.tempFile = u2, e5.tempFilePath = u2.path, r4 && r4(e5);
            } }).then((e5) => {
              u2.url = e5.fileID, s5 < o2 && c2();
            }).catch((e5) => {
              u2.errMsg = e5.errMsg || e5.message, s5 < o2 && c2();
            });
          }
        });
      }(e3, t4, 5, r3));
    }
    t22.initChooseAndUploadFile = function(e3) {
      return function(t3 = { type: "all" }) {
        return "image" === t3.type ? i2(e3, function(e4) {
          const { count: t4, sizeType: n3, sourceType: i3 = ["album", "camera"], extension: o2 } = e4;
          return new Promise((e5, a2) => {
            uni.chooseImage({ count: t4, sizeType: n3, sourceType: i3, extension: o2, success(t5) {
              e5(r2(t5, "image"));
            }, fail(e6) {
              a2({ errMsg: e6.errMsg.replace("chooseImage:fail", s2) });
            } });
          });
        }(t3), t3) : "video" === t3.type ? i2(e3, function(e4) {
          const { camera: t4, compressed: n3, maxDuration: i3, sourceType: o2 = ["album", "camera"], extension: a2 } = e4;
          return new Promise((e5, c2) => {
            uni.chooseVideo({ camera: t4, compressed: n3, maxDuration: i3, sourceType: o2, extension: a2, success(t5) {
              const { tempFilePath: n4, duration: s3, size: i4, height: o3, width: a3 } = t5;
              e5(r2({ errMsg: "chooseVideo:ok", tempFilePaths: [n4], tempFiles: [{ name: t5.tempFile && t5.tempFile.name || "", path: n4, size: i4, type: t5.tempFile && t5.tempFile.type || "", width: a3, height: o3, duration: s3, fileType: "video", cloudPath: "" }] }, "video"));
            }, fail(e6) {
              c2({ errMsg: e6.errMsg.replace("chooseVideo:fail", s2) });
            } });
          });
        }(t3), t3) : i2(e3, function(e4) {
          const { count: t4, extension: n3 } = e4;
          return new Promise((e5, i3) => {
            let o2 = uni.chooseFile;
            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o2 = wx.chooseMessageFile), "function" != typeof o2)
              return i3({ errMsg: s2 + " \u8BF7\u6307\u5B9A type \u7C7B\u578B\uFF0C\u8BE5\u5E73\u53F0\u4EC5\u652F\u6301\u9009\u62E9 image \u6216 video\u3002" });
            o2({ type: "all", count: t4, extension: n3, success(t5) {
              e5(r2(t5));
            }, fail(e6) {
              i3({ errMsg: e6.errMsg.replace("chooseFile:fail", s2) });
            } });
          });
        }(t3), t3);
      };
    };
  });
  var js = t(Fs);
  var $s = "manual";
  function Bs(e2) {
    return { props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: false }, gettree: { type: [Boolean, String], default: false }, gettreepath: { type: [Boolean, String], default: false }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: false }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: false } }, data: () => ({ mixinDatacomLoading: false, mixinDatacomHasMore: false, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {}, mixinDatacomError: null }), created() {
      this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => {
        var e3 = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((t22) => {
          e3.push(this[t22]);
        }), e3;
      }, (e3, t22) => {
        if (this.loadtime === $s)
          return;
        let n2 = false;
        const s2 = [];
        for (let r2 = 2; r2 < e3.length; r2++)
          e3[r2] !== t22[r2] && (s2.push(e3[r2]), n2 = true);
        e3[0] !== t22[0] && (this.mixinDatacomPage.current = this.pageCurrent), this.mixinDatacomPage.size = this.pageSize, this.onMixinDatacomPropsChange(n2, s2);
      });
    }, methods: { onMixinDatacomPropsChange(e3, t22) {
    }, mixinDatacomEasyGet({ getone: e3 = false, success: t22, fail: n2 } = {}) {
      this.mixinDatacomLoading || (this.mixinDatacomLoading = true, this.mixinDatacomErrorMessage = "", this.mixinDatacomError = null, this.mixinDatacomGet().then((n3) => {
        this.mixinDatacomLoading = false;
        const { data: s2, count: r2 } = n3.result;
        this.getcount && (this.mixinDatacomPage.count = r2), this.mixinDatacomHasMore = s2.length < this.pageSize;
        const i2 = e3 ? s2.length ? s2[0] : void 0 : s2;
        this.mixinDatacomResData = i2, t22 && t22(i2);
      }).catch((e4) => {
        this.mixinDatacomLoading = false, this.mixinDatacomErrorMessage = e4, this.mixinDatacomError = e4, n2 && n2(e4);
      }));
    }, mixinDatacomGet(t22 = {}) {
      let n2;
      t22 = t22 || {}, n2 = "undefined" != typeof __uniX && __uniX ? e2.databaseForJQL(this.spaceInfo) : e2.database(this.spaceInfo);
      const s2 = t22.action || this.action;
      s2 && (n2 = n2.action(s2));
      const r2 = t22.collection || this.collection;
      n2 = Array.isArray(r2) ? n2.collection(...r2) : n2.collection(r2);
      const i2 = t22.where || this.where;
      i2 && Object.keys(i2).length && (n2 = n2.where(i2));
      const o2 = t22.field || this.field;
      o2 && (n2 = n2.field(o2));
      const a2 = t22.foreignKey || this.foreignKey;
      a2 && (n2 = n2.foreignKey(a2));
      const c2 = t22.groupby || this.groupby;
      c2 && (n2 = n2.groupBy(c2));
      const u2 = t22.groupField || this.groupField;
      u2 && (n2 = n2.groupField(u2));
      true === (void 0 !== t22.distinct ? t22.distinct : this.distinct) && (n2 = n2.distinct());
      const h2 = t22.orderby || this.orderby;
      h2 && (n2 = n2.orderBy(h2));
      const l2 = void 0 !== t22.pageCurrent ? t22.pageCurrent : this.mixinDatacomPage.current, d2 = void 0 !== t22.pageSize ? t22.pageSize : this.mixinDatacomPage.size, p2 = void 0 !== t22.getcount ? t22.getcount : this.getcount, f2 = void 0 !== t22.gettree ? t22.gettree : this.gettree, g2 = void 0 !== t22.gettreepath ? t22.gettreepath : this.gettreepath, m2 = { getCount: p2 }, y2 = { limitLevel: void 0 !== t22.limitlevel ? t22.limitlevel : this.limitlevel, startWith: void 0 !== t22.startwith ? t22.startwith : this.startwith };
      return f2 && (m2.getTree = y2), g2 && (m2.getTreePath = y2), n2 = n2.skip(d2 * (l2 - 1)).limit(d2).get(m2), n2;
    } } };
  }
  function Ws(e2) {
    return function(t22, n2 = {}) {
      n2 = function(e3, t3 = {}) {
        return e3.customUI = t3.customUI || e3.customUI, e3.parseSystemError = t3.parseSystemError || e3.parseSystemError, Object.assign(e3.loadingOptions, t3.loadingOptions), Object.assign(e3.errorOptions, t3.errorOptions), "object" == typeof t3.secretMethods && (e3.secretMethods = t3.secretMethods), e3;
      }({ customUI: false, loadingOptions: { title: "\u52A0\u8F7D\u4E2D...", mask: true }, errorOptions: { type: "modal", retry: false } }, n2);
      const { customUI: s2, loadingOptions: r2, errorOptions: i2, parseSystemError: o2 } = n2, a2 = !s2;
      return new Proxy({}, { get(s3, c2) {
        switch (c2) {
          case "toString":
            return "[object UniCloudObject]";
          case "toJSON":
            return {};
        }
        return function({ fn: e3, interceptorName: t3, getCallbackArgs: n3 } = {}) {
          return function(...s4) {
            return __async(this, null, function* () {
              const r3 = n3 ? n3({ params: s4 }) : {};
              let i3, o3;
              try {
                return yield K(F(t3, "invoke"), __spreadValues({}, r3)), i3 = yield e3(...s4), yield K(F(t3, "success"), __spreadProps(__spreadValues({}, r3), { result: i3 })), i3;
              } catch (e4) {
                throw o3 = e4, yield K(F(t3, "fail"), __spreadProps(__spreadValues({}, r3), { error: o3 })), o3;
              } finally {
                yield K(F(t3, "complete"), o3 ? __spreadProps(__spreadValues({}, r3), { error: o3 }) : __spreadProps(__spreadValues({}, r3), { result: i3 }));
              }
            });
          };
        }({ fn: function s4(...h2) {
          return __async(this, null, function* () {
            let l2;
            a2 && uni.showLoading({ title: r2.title, mask: r2.mask });
            const d2 = { name: t22, type: u, data: { method: c2, params: h2 } };
            "object" == typeof n2.secretMethods && function(e3, t3) {
              const n3 = t3.data.method, s5 = e3.secretMethods || {}, r3 = s5[n3] || s5["*"];
              r3 && (t3.secretType = r3);
            }(n2, d2);
            let p2 = false;
            try {
              l2 = yield e2.callFunction(d2);
            } catch (e3) {
              p2 = true, l2 = { result: new se(e3) };
            }
            const { errSubject: f2, errCode: g2, errMsg: m2, newToken: y2 } = l2.result || {};
            if (a2 && uni.hideLoading(), y2 && y2.token && y2.tokenExpired && (ae(y2), X(H, __spreadValues({}, y2))), g2) {
              let e3 = m2;
              if (p2 && o2) {
                e3 = (yield o2({ objectName: t22, methodName: c2, params: h2, errSubject: f2, errCode: g2, errMsg: m2 })).errMsg || m2;
              }
              if (a2)
                if ("toast" === i2.type)
                  uni.showToast({ title: e3, icon: "none" });
                else {
                  if ("modal" !== i2.type)
                    throw new Error(`Invalid errorOptions.type: ${i2.type}`);
                  {
                    const { confirm: t3 } = yield function() {
                      return __async(this, arguments, function* ({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3 } = {}) {
                        return new Promise((i3, o3) => {
                          uni.showModal({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3, success(e5) {
                            i3(e5);
                          }, fail() {
                            i3({ confirm: false, cancel: true });
                          } });
                        });
                      });
                    }({ title: "\u63D0\u793A", content: e3, showCancel: i2.retry, cancelText: "\u53D6\u6D88", confirmText: i2.retry ? "\u91CD\u8BD5" : "\u786E\u5B9A" });
                    if (i2.retry && t3)
                      return s4(...h2);
                  }
                }
              const n3 = new se({ subject: f2, code: g2, message: m2, requestId: l2.requestId });
              throw n3.detail = l2.result, X(B, { type: V, content: n3 }), n3;
            }
            return X(B, { type: V, content: l2.result }), l2.result;
          });
        }, interceptorName: "callObject", getCallbackArgs: function({ params: e3 } = {}) {
          return { objectName: t22, methodName: c2, params: e3 };
        } });
      } });
    };
  }
  function Hs(e2) {
    return R("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e2.config.spaceId));
  }
  function Js() {
    return __async(this, arguments, function* ({ openid: e2, callLoginByWeixin: t22 = false } = {}) {
      Hs(this);
      throw new Error(`[SecureNetwork] API \`initSecureNetworkByWeixin\` is not supported on platform \`${A}\``);
    });
  }
  function zs(e2) {
    return __async(this, null, function* () {
      const t22 = Hs(this);
      return t22.initPromise || (t22.initPromise = Js.call(this, e2).then((e3) => e3).catch((e3) => {
        throw delete t22.initPromise, e3;
      })), t22.initPromise;
    });
  }
  function Vs(e2) {
    return function({ openid: t22, callLoginByWeixin: n2 = false } = {}) {
      return zs.call(e2, { openid: t22, callLoginByWeixin: n2 });
    };
  }
  function Gs(e2) {
    !function(e3) {
      de = e3;
    }(e2);
  }
  function Ys(e2) {
    const t22 = { getSystemInfo: uni.getSystemInfo, getPushClientId: uni.getPushClientId };
    return function(n2) {
      return new Promise((s2, r2) => {
        t22[e2](__spreadProps(__spreadValues({}, n2), { success(e3) {
          s2(e3);
        }, fail(e3) {
          r2(e3);
        } }));
      });
    };
  }
  var Qs = class extends class {
    constructor() {
      this._callback = {};
    }
    addListener(e2, t22) {
      this._callback[e2] || (this._callback[e2] = []), this._callback[e2].push(t22);
    }
    on(e2, t22) {
      return this.addListener(e2, t22);
    }
    removeListener(e2, t22) {
      if (!t22)
        throw new Error('The "listener" argument must be of type function. Received undefined');
      const n2 = this._callback[e2];
      if (!n2)
        return;
      const s2 = function(e3, t3) {
        for (let n3 = e3.length - 1; n3 >= 0; n3--)
          if (e3[n3] === t3)
            return n3;
        return -1;
      }(n2, t22);
      n2.splice(s2, 1);
    }
    off(e2, t22) {
      return this.removeListener(e2, t22);
    }
    removeAllListener(e2) {
      delete this._callback[e2];
    }
    emit(e2, ...t22) {
      const n2 = this._callback[e2];
      if (n2)
        for (let e3 = 0; e3 < n2.length; e3++)
          n2[e3](...t22);
    }
  } {
    constructor() {
      super(), this._uniPushMessageCallback = this._receivePushMessage.bind(this), this._currentMessageId = -1, this._payloadQueue = [];
    }
    init() {
      return Promise.all([Ys("getSystemInfo")(), Ys("getPushClientId")()]).then(([{ appId: e2 } = {}, { cid: t22 } = {}] = []) => {
        if (!e2)
          throw new Error("Invalid appId, please check the manifest.json file");
        if (!t22)
          throw new Error("Invalid push client id");
        this._appId = e2, this._pushClientId = t22, this._seqId = Date.now() + "-" + Math.floor(9e5 * Math.random() + 1e5), this.emit("open"), this._initMessageListener();
      }, (e2) => {
        throw this.emit("error", e2), this.close(), e2;
      });
    }
    open() {
      return __async(this, null, function* () {
        return this.init();
      });
    }
    _isUniCloudSSE(e2) {
      if ("receive" !== e2.type)
        return false;
      const t22 = e2 && e2.data && e2.data.payload;
      return !(!t22 || "UNI_CLOUD_SSE" !== t22.channel || t22.seqId !== this._seqId);
    }
    _receivePushMessage(e2) {
      if (!this._isUniCloudSSE(e2))
        return;
      const t22 = e2 && e2.data && e2.data.payload, { action: n2, messageId: s2, message: r2 } = t22;
      this._payloadQueue.push({ action: n2, messageId: s2, message: r2 }), this._consumMessage();
    }
    _consumMessage() {
      for (; ; ) {
        const e2 = this._payloadQueue.find((e3) => e3.messageId === this._currentMessageId + 1);
        if (!e2)
          break;
        this._currentMessageId++, this._parseMessagePayload(e2);
      }
    }
    _parseMessagePayload(e2) {
      const { action: t22, messageId: n2, message: s2 } = e2;
      "end" === t22 ? this._end({ messageId: n2, message: s2 }) : "message" === t22 && this._appendMessage({ messageId: n2, message: s2 });
    }
    _appendMessage({ messageId: e2, message: t22 } = {}) {
      this.emit("message", t22);
    }
    _end({ messageId: e2, message: t22 } = {}) {
      this.emit("end", t22), this.close();
    }
    _initMessageListener() {
      uni.onPushMessage(this._uniPushMessageCallback);
    }
    _destroy() {
      uni.offPushMessage(this._uniPushMessageCallback);
    }
    toJSON() {
      return { appId: this._appId, pushClientId: this._pushClientId, seqId: this._seqId };
    }
    close() {
      this._destroy(), this.emit("close");
    }
  };
  function Xs(e2) {
    return __async(this, null, function* () {
      {
        const { osName: e3, osVersion: t3 } = he();
        "ios" === e3 && function(e4) {
          if (!e4 || "string" != typeof e4)
            return 0;
          const t4 = e4.match(/^(\d+)./);
          return t4 && t4[1] ? parseInt(t4[1]) : 0;
        }(t3) >= 14 && console.warn("iOS 14\u53CA\u4EE5\u4E0A\u7248\u672C\u8FDE\u63A5uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u9700\u8981\u5141\u8BB8\u5BA2\u6237\u7AEF\u67E5\u627E\u5E76\u8FDE\u63A5\u5230\u672C\u5730\u7F51\u7EDC\u4E0A\u7684\u8BBE\u5907\uFF08\u4EC5\u5F00\u53D1\u671F\u95F4\u9700\u8981\uFF0C\u53D1\u884C\u540E\u4E0D\u9700\u8981\uFF09");
      }
      const t22 = e2.__dev__;
      if (!t22.debugInfo)
        return;
      const { address: n2, servePort: s2 } = t22.debugInfo, { address: r2 } = yield Et(n2, s2);
      if (r2)
        return t22.localAddress = r2, void (t22.localPort = s2);
      const i2 = console["error"];
      let o2 = "";
      if ("remote" === t22.debugInfo.initialLaunchType ? (t22.debugInfo.forceRemote = true, o2 = "\u5F53\u524D\u5BA2\u6237\u7AEF\u548CHBuilderX\u4E0D\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\uFF08\u6216\u5176\u4ED6\u7F51\u7EDC\u539F\u56E0\u65E0\u6CD5\u8FDE\u63A5HBuilderX\uFF09\uFF0CuniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u4E0D\u5BF9\u5F53\u524D\u5BA2\u6237\u7AEF\u751F\u6548\u3002\n- \u5982\u679C\u4E0D\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u76F4\u63A5\u5FFD\u7565\u6B64\u4FE1\u606F\u3002\n- \u5982\u9700\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u5C06\u5BA2\u6237\u7AEF\u4E0E\u4E3B\u673A\u8FDE\u63A5\u5230\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u5E76\u91CD\u65B0\u8FD0\u884C\u5230\u5BA2\u6237\u7AEF\u3002") : o2 = "\u65E0\u6CD5\u8FDE\u63A5uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u68C0\u67E5\u5F53\u524D\u5BA2\u6237\u7AEF\u662F\u5426\u4E0E\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u3002\n- \u5982\u9700\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u5C06\u5BA2\u6237\u7AEF\u4E0E\u4E3B\u673A\u8FDE\u63A5\u5230\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u5E76\u91CD\u65B0\u8FD0\u884C\u5230\u5BA2\u6237\u7AEF\u3002", o2 += "\n- \u5982\u679C\u5728HBuilderX\u5F00\u542F\u7684\u72B6\u6001\u4E0B\u5207\u6362\u8FC7\u7F51\u7EDC\u73AF\u5883\uFF0C\u8BF7\u91CD\u542FHBuilderX\u540E\u518D\u8BD5\n- \u68C0\u67E5\u7CFB\u7EDF\u9632\u706B\u5899\u662F\u5426\u62E6\u622A\u4E86HBuilderX\u81EA\u5E26\u7684nodejs\n- \u68C0\u67E5\u662F\u5426\u9519\u8BEF\u7684\u4F7F\u7528\u62E6\u622A\u5668\u4FEE\u6539uni.request\u65B9\u6CD5\u7684\u53C2\u6570", 0 === A.indexOf("mp-") && (o2 += "\n- \u5C0F\u7A0B\u5E8F\u4E2D\u5982\u4F55\u4F7F\u7528uniCloud\uFF0C\u8BF7\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), !t22.debugInfo.forceRemote)
        throw new Error(o2);
      i2(o2);
    });
  }
  function Zs(e2) {
    e2._initPromiseHub || (e2._initPromiseHub = new v({ createPromise: function() {
      let t22 = Promise.resolve();
      var n2;
      n2 = 1, t22 = new Promise((e3) => {
        setTimeout(() => {
          e3();
        }, n2);
      });
      const s2 = e2.auth();
      return t22.then(() => s2.getLoginState()).then((e3) => e3 ? Promise.resolve() : s2.signInAnonymously());
    } }));
  }
  var er = { tcb: xt, tencent: xt, aliyun: me, private: Ut, dcloud: Ut, alipay: Wt };
  var tr = new class {
    init(e2) {
      let t22 = {};
      const n2 = er[e2.provider];
      if (!n2)
        throw new Error("\u672A\u63D0\u4F9B\u6B63\u786E\u7684provider\u53C2\u6570");
      t22 = n2.init(e2), function(e3) {
        const t3 = {};
        e3.__dev__ = t3, t3.debugLog = "app" === A;
        const n3 = P;
        n3 && !n3.code && (t3.debugInfo = n3);
        const s2 = new v({ createPromise: function() {
          return Xs(e3);
        } });
        t3.initLocalNetwork = function() {
          return s2.exec();
        };
      }(t22), Zs(t22), Xn(t22), function(e3) {
        const t3 = e3.uploadFile;
        e3.uploadFile = function(e4) {
          return t3.call(this, e4);
        };
      }(t22), function(e3) {
        e3.database = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).database();
          if (this._database)
            return this._database;
          const n3 = us(hs, { uniClient: e3 });
          return this._database = n3, n3;
        }, e3.databaseForJQL = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).databaseForJQL();
          if (this._databaseForJQL)
            return this._databaseForJQL;
          const n3 = us(hs, { uniClient: e3, isJQL: true });
          return this._databaseForJQL = n3, n3;
        };
      }(t22), function(e3) {
        e3.getCurrentUserInfo = Ks, e3.chooseAndUploadFile = js.initChooseAndUploadFile(e3), Object.assign(e3, { get mixinDatacom() {
          return Bs(e3);
        } }), e3.SSEChannel = Qs, e3.initSecureNetworkByWeixin = Vs(e3), e3.setCustomClientInfo = Gs, e3.importObject = Ws(e3);
      }(t22);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((e3) => {
        if (!t22[e3])
          return;
        const n3 = t22[e3];
        t22[e3] = function() {
          return n3.apply(t22, Array.from(arguments));
        }, t22[e3] = (/* @__PURE__ */ function(e4, t3) {
          return function(n4) {
            let s2 = false;
            if ("callFunction" === t3) {
              const e5 = n4 && n4.type || c;
              s2 = e5 !== c;
            }
            const r2 = "callFunction" === t3 && !s2, i2 = this._initPromiseHub.exec();
            n4 = n4 || {};
            const { success: o2, fail: a2, complete: u2 } = ne(n4), h2 = i2.then(() => s2 ? Promise.resolve() : K(F(t3, "invoke"), n4)).then(() => e4.call(this, n4)).then((e5) => s2 ? Promise.resolve(e5) : K(F(t3, "success"), e5).then(() => K(F(t3, "complete"), e5)).then(() => (r2 && X(B, { type: z, content: e5 }), Promise.resolve(e5))), (e5) => s2 ? Promise.reject(e5) : K(F(t3, "fail"), e5).then(() => K(F(t3, "complete"), e5)).then(() => (X(B, { type: z, content: e5 }), Promise.reject(e5))));
            if (!(o2 || a2 || u2))
              return h2;
            h2.then((e5) => {
              o2 && o2(e5), u2 && u2(e5), r2 && X(B, { type: z, content: e5 });
            }, (e5) => {
              a2 && a2(e5), u2 && u2(e5), r2 && X(B, { type: z, content: e5 });
            });
          };
        }(t22[e3], e3)).bind(t22);
      }), t22.init = this.init, t22;
    }
  }();
  (() => {
    const e2 = C;
    let t22 = {};
    if (e2 && 1 === e2.length)
      t22 = e2[0], tr = tr.init(t22), tr._isDefault = true;
    else {
      const t3 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
      let n2;
      n2 = e2 && e2.length > 0 ? "\u5E94\u7528\u6709\u591A\u4E2A\u670D\u52A1\u7A7A\u95F4\uFF0C\u8BF7\u901A\u8FC7uniCloud.init\u65B9\u6CD5\u6307\u5B9A\u8981\u4F7F\u7528\u7684\u670D\u52A1\u7A7A\u95F4" : "\u5E94\u7528\u672A\u5173\u8054\u670D\u52A1\u7A7A\u95F4\uFF0C\u8BF7\u5728uniCloud\u76EE\u5F55\u53F3\u952E\u5173\u8054\u670D\u52A1\u7A7A\u95F4", t3.forEach((e3) => {
        tr[e3] = function() {
          return console.error(n2), Promise.reject(new se({ code: "SYS_ERR", message: n2 }));
        };
      });
    }
    if (Object.assign(tr, { get mixinDatacom() {
      return Bs(tr);
    } }), Ns(tr), tr.addInterceptor = M, tr.removeInterceptor = q, tr.interceptObject = j, uni.__uniCloud = tr, "app" === A) {
      const e3 = U();
      e3.uniCloud = tr, e3.UniCloudError = se;
    }
  })();
  var nr = tr;
  var _style_02 = { "uni-stat__select": { "": { "display": "flex", "alignItems": "center", "cursor": "pointer", "width": 100, "flex": 1, "boxSizing": "border-box", "backgroundColor": "#FFFFFF" } }, "uni-stat-box": { "": { "width": 100, "flex": 1 } }, "uni-stat__actived": { "": { "width": 100, "flex": 1 } }, "uni-label-text": { "": { "fontSize": 14, "fontWeight": "bold", "color": "#6a6a6a", "marginRight": 5, "marginLeft": 0 } }, "uni-select": { "": { "fontSize": 14, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#e5e5e5", "boxSizing": "border-box", "borderRadius": 4, "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 10, "position": "relative", "flexDirection": "row", "alignItems": "center", "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#e5e5e5", "width": 100, "flex": 1, "height": 35 } }, "uni-select--disabled": { "": { "backgroundColor": "#f5f7fa", "cursor": "not-allowed" } }, "uni-select__label": { "": { "fontSize": 16, "height": 35, "paddingRight": 10, "color": "#909399" } }, "uni-select__input-box": { "": { "height": 35, "position": "relative", "flex": 1, "flexDirection": "row", "alignItems": "center" } }, "uni-select__input": { "": { "flex": 1, "fontSize": 14, "height": 22, "lineHeight": 22 } }, "uni-select__input-plac": { "": { "fontSize": 14, "color": "#909399" } }, "uni-select__selector": { "": { "position": "absolute", "left": 0, "width": 100, "backgroundColor": "#FFFFFF", "borderWidth": 1, "borderStyle": "solid", "borderColor": "#EBEEF5", "borderRadius": 6, "boxShadow": "0 2px 12px 0 rgba(0, 0, 0, 0.8)", "zIndex": 3, "paddingTop": 4, "paddingRight": 0, "paddingBottom": 4, "paddingLeft": 0 } }, "uni-select__selector-button": { "": { "marginTop": 5, "marginBottom": 5, "width": 100 } }, "uni-select__selector-empty": { "": { "position": "relative", "lineHeight": 35, "fontSize": 14, "textAlign": "center", "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10 } }, "uni-select__selector-item": { "": { "position": "relative", "lineHeight": 35, "fontSize": 14, "textAlign": "center", "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10, "backgroundColor:hover": "#f9f9f9" } }, "uni-select__selector-checked": { "": { "content::after": '""', "position::after": "absolute", "top::after": 30, "right::after": 15, "width::after": 4, "height::after": 8, "transform::after": "rotate(45deg)", "borderBottomWidth::after": 2, "borderBottomStyle::after": "solid", "borderBottomColor::after": "#006AEC", "borderRightWidth::after": 2, "borderRightStyle::after": "solid", "borderRightColor::after": "#006AEC" } }, "uni-select__selector__disabled": { "": { "opacity": 0.4, "cursor": "default" } }, "uni-popper__arrow": { "": { "position::after": "absolute", "width::after": 0, "height::after": 0, "borderColor::after": "rgba(0,0,0,0)", "borderStyle::after": "solid", "borderWidth::after": 6, "filter": "drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03))", "top": -6, "left": 10, "marginRight": 3, "borderTopWidth": 0, "borderBottomColor": "#EBEEF5", "content::after": '" "', "top::after": 1, "marginLeft::after": -6, "borderTopWidth::after": 0, "borderBottomColor::after": "#ffffff" } }, "uni-select__input-text": { "": { "width": 100, "color": "#333333", "whiteSpace": "nowrap", "textOverflow": "ellipsis", "OTextOverflow": "ellipsis", "overflow": "hidden" } }, "uni-select__input-placeholder": { "": { "color": "#6a6a6a", "fontSize": 12 } }, "uni-select--mask": { "": { "position": "fixed", "top": 0, "bottom": 0, "right": 0, "left": 0, "zIndex": 1 } } };
  var _sfc_main2 = {
    name: "uni-stat-select",
    mixins: [nr.mixinDatacom || {}],
    data() {
      return {
        showSelector: false,
        current: "",
        mixinDatacomResData: [],
        apps: [],
        channels: []
      };
    },
    props: {
      localdata: {
        type: Array,
        default() {
          return [];
        }
      },
      value: {
        type: [String, Number],
        default: ""
      },
      modelValue: {
        type: [String, Number],
        default: ""
      },
      label: {
        type: String,
        default: ""
      },
      placeholder: {
        type: String,
        default: "\u8BF7\u9009\u62E9"
      },
      emptyTips: {
        type: String,
        default: "\u65E0\u9009\u9879"
      },
      clear: {
        type: Boolean,
        default: true
      },
      defItem: {
        type: Number,
        default: 0
      },
      multi: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    created() {
      this.last = `${this.collection}_last_selected_option_value`;
      if (this.collection && !this.localdata.length) {
        this.mixinDatacomEasyGet();
      }
    },
    computed: {
      typePlaceholder() {
        const text = {
          "opendb-stat-app-versions": "\u7248\u672C",
          "opendb-app-channels": "\u6E20\u9053",
          "opendb-app-list": "\u5E94\u7528"
        };
        const common = this.placeholder;
        const placeholder = text[this.collection];
        return placeholder ? common + placeholder : common;
      },
      values() {
        const val = this.modelValue.toString();
        if (val) {
          return val.toString().split(",");
        }
        return [];
      },
      multiCurrent() {
        let multiCurrent = "";
        for (let s2 of this.localdata) {
          if (this.values.indexOf(s2.value) > -1) {
            multiCurrent += `${multiCurrent ? "," + s2.text : s2.text}`;
          }
        }
        return multiCurrent;
      }
    },
    watch: {
      localdata: {
        immediate: true,
        handler(val, old) {
          if (Array.isArray(val) && old !== val) {
            this.mixinDatacomResData = val;
          }
        }
      },
      modelValue() {
        this.initDefVal();
      },
      mixinDatacomResData: {
        immediate: true,
        handler(val) {
          if (val.length) {
            this.initDefVal();
          }
        }
      }
    },
    methods: {
      initDefVal() {
        let defValue = "";
        if ((this.value || this.value === 0) && !this.isDisabled(this.value)) {
          defValue = this.value;
        } else if ((this.modelValue || this.modelValue === 0) && !this.isDisabled(this.modelValue)) {
          defValue = this.modelValue;
        } else {
          let strogeValue;
          if (this.collection) {
            strogeValue = uni.getStorageSync(this.last);
          }
          if (strogeValue || strogeValue === 0) {
            defValue = strogeValue;
          } else {
            let defItem = "";
            if (this.defItem > 0 && this.defItem < this.mixinDatacomResData.length) {
              defItem = this.mixinDatacomResData[this.defItem - 1].value;
            }
            defValue = defItem;
          }
          this.emit(defValue);
        }
        const def = this.mixinDatacomResData.find((item) => item.value === defValue);
        this.current = def ? this.formatItemName(def) : "";
      },
      /**
       * @param {[String, Number]} value
       * 判断用户给的 value 是否同时为禁用状态
       */
      isDisabled(value) {
        let isDisabled = false;
        this.mixinDatacomResData.forEach((item) => {
          if (item.value === value) {
            isDisabled = item.disable;
          }
        });
        return isDisabled;
      },
      clearVal() {
        this.emit("");
        if (this.collection) {
          uni.removeStorageSync(this.last);
        }
      },
      change(item) {
        if (!item.disable) {
          if (!this.multi) {
            this.showSelector = false;
            this.current = this.formatItemName(item);
            this.emit(item.value);
          } else {
            const has = this.containsItem(item);
            let emitVal;
            if (has) {
              this.values.splice(this.values.indexOf(item.value), 1);
            } else {
              this.values.push(item.value);
            }
            emitVal = this.values.join(",");
            this.emit(emitVal);
          }
        }
      },
      containsItem(item) {
        return this.values.indexOf(item.value) > -1;
      },
      emit(val) {
        this.$emit("input", val);
        this.$emit("update:modelValue", val);
        this.$emit("change", val);
        if (this.collection) {
          uni.setStorageSync(this.last, val);
        }
      },
      toggleSelector() {
        if (this.disabled) {
          return;
        }
        this.showSelector = !this.showSelector;
      },
      formatItemName(item) {
        let {
          text,
          value,
          channel_code
        } = item;
        channel_code = channel_code ? `(${channel_code})` : "";
        return this.collection.indexOf("app-list") > 0 ? `${text}(${value})` : text ? text : `\u672A\u547D\u540D${channel_code}`;
      }
    }
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom((0, import_vue3.resolveDynamicComponent)("uni-icons"), __easycom_1);
    const _component_button = (0, import_vue3.resolveComponent)("button");
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
      class: "uni-stat__select",
      renderWhole: true
    }, [
      $props.label ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("span", {
        key: 0,
        class: "uni-label-text hide-on-phone"
      }, [
        (0, import_vue3.createElementVNode)(
          "u-text",
          null,
          (0, import_vue3.toDisplayString)($props.label + "\uFF1A"),
          1
          /* TEXT */
        )
      ])) : (0, import_vue3.createCommentVNode)("v-if", true),
      (0, import_vue3.createElementVNode)(
        "view",
        {
          class: (0, import_vue3.normalizeClass)(["uni-stat-box", { "uni-stat__actived": $data.current }])
        },
        [
          (0, import_vue3.createElementVNode)(
            "view",
            {
              class: (0, import_vue3.normalizeClass)(["uni-select", { "uni-select--disabled": $props.disabled }])
            },
            [
              (0, import_vue3.createElementVNode)("view", {
                class: "uni-select__input-box",
                onClick: _cache[0] || (_cache[0] = (...args) => $options.toggleSelector && $options.toggleSelector(...args))
              }, [
                $options.multiCurrent ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
                  key: 0,
                  class: "uni-select__input-text"
                }, [
                  (0, import_vue3.createElementVNode)(
                    "u-text",
                    null,
                    (0, import_vue3.toDisplayString)($options.multiCurrent),
                    1
                    /* TEXT */
                  )
                ])) : ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
                  key: 1,
                  class: "uni-select__input-text uni-select__input-placeholder"
                }, [
                  (0, import_vue3.createElementVNode)(
                    "u-text",
                    null,
                    (0, import_vue3.toDisplayString)($options.typePlaceholder),
                    1
                    /* TEXT */
                  )
                ])),
                $options.multiCurrent && $props.clear ? ((0, import_vue3.openBlock)(), (0, import_vue3.createBlock)(_component_uni_icons, {
                  key: 2,
                  type: "clear",
                  color: "#c0c4cc",
                  size: "24",
                  onClick: $options.clearVal
                }, null, 8, ["onClick"])) : ((0, import_vue3.openBlock)(), (0, import_vue3.createBlock)(_component_uni_icons, {
                  key: 3,
                  type: $data.showSelector ? "top" : "bottom",
                  size: "14",
                  color: "#999"
                }, null, 8, ["type"]))
              ]),
              $data.showSelector ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
                key: 0,
                class: "uni-select--mask",
                onClick: _cache[1] || (_cache[1] = (...args) => $options.toggleSelector && $options.toggleSelector(...args))
              })) : (0, import_vue3.createCommentVNode)("v-if", true),
              $data.showSelector ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
                key: 1,
                class: "uni-select__selector"
              }, [
                (0, import_vue3.createElementVNode)("view", { class: "uni-popper__arrow" }),
                (0, import_vue3.createElementVNode)("scroll-view", {
                  scrollY: "true",
                  class: "uni-select__selector-scroll"
                }, [
                  $data.mixinDatacomResData.length === 0 ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
                    key: 0,
                    class: "uni-select__selector-empty"
                  }, [
                    (0, import_vue3.createElementVNode)(
                      "u-text",
                      null,
                      (0, import_vue3.toDisplayString)($props.emptyTips),
                      1
                      /* TEXT */
                    )
                  ])) : ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
                    import_vue3.Fragment,
                    { key: 1 },
                    (0, import_vue3.renderList)($data.mixinDatacomResData, (item, index) => {
                      return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
                        class: (0, import_vue3.normalizeClass)(["uni-select__selector-item", { "uni-select__selector-checked": $options.containsItem(item) }]),
                        key: index,
                        onClick: ($event) => $options.change(item)
                      }, [
                        (0, import_vue3.createElementVNode)(
                          "u-text",
                          {
                            class: (0, import_vue3.normalizeClass)({ "uni-select__selector__disabled": item.disable })
                          },
                          (0, import_vue3.toDisplayString)($options.formatItemName(item)),
                          3
                          /* TEXT, CLASS */
                        )
                      ], 10, ["onClick"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                $props.multi ? ((0, import_vue3.openBlock)(), (0, import_vue3.createBlock)(_component_button, {
                  key: 0,
                  class: "uni-select__selector-button",
                  size: "mini",
                  type: "primary",
                  onClick: $options.toggleSelector
                }, {
                  default: (0, import_vue3.withCtx)(() => [
                    (0, import_vue3.createTextVNode)("\u786E\u5B9A")
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["onClick"])) : (0, import_vue3.createCommentVNode)("v-if", true)
              ])) : (0, import_vue3.createCommentVNode)("v-if", true)
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      )
    ]);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/uni_modules/uni-data-select/components/uni-data-select/uni-data-select.vue"]]);

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/pages/sample/form-ndemo.js
  var import_vue6 = __toESM(require_vue());

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
      onConfirm(e2) {
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
      } catch (e2) {
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
        for (var i2 = 0; i2 < rules.length; i2++) {
          let rule = rules[i2];
          let vt2 = this._getValidateType(rule);
          Object.assign(rule, {
            label: fieldValue.label || `["${fieldKey}"]`
          });
          if (RuleValidatorHelper[vt2]) {
            result = RuleValidatorHelper[vt2](rule, value, message);
            if (result != null) {
              break;
            }
          }
          if (rule.validateExpr) {
            let now = Date.now();
            let resultExpr = rule.validateExpr(value, allData, now);
            if (resultExpr === false) {
              result = this._getMessage(rule, rule.errorMessage || this._message["default"]);
              break;
            }
          }
          if (rule.validateFunction) {
            result = yield this.validateFunction(rule, value, data, allData, vt2);
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
    validateFunction(rule, value, data, allData, vt2) {
      return __async(this, null, function* () {
        let result = null;
        try {
          let callbackMessage = null;
          const res = yield rule.validateFunction(rule, value, allData || data, (message) => {
            callbackMessage = message;
          });
          if (callbackMessage || typeof res === "string" && res || res === false) {
            result = this._getMessage(rule, callbackMessage || res, vt2);
          }
        } catch (e2) {
          result = this._getMessage(rule, e2.message, vt2);
        }
        return result;
      });
    }
    _getMessage(rule, message, vt2) {
      return formatMessage(rule, message || rule.errorMessage || this._message[vt2] || message["default"]);
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
        range,
        errorMessage
      } = rule;
      let list = new Array(range.length);
      for (let i2 = 0; i2 < range.length; i2++) {
        const item = range[i2];
        if (types.object(item) && item.value !== void 0) {
          list[i2] = item.value;
        } else {
          list[i2] = item;
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
      let min = exclusiveMinimum ? value <= minimum : value < minimum;
      let max = exclusiveMaximum ? value >= maximum : value > maximum;
      if (minimum !== void 0 && min) {
        return formatMessage(rule, rule.errorMessage || message["number"][exclusiveMinimum ? "exclusiveMinimum" : "minimum"]);
      } else if (maximum !== void 0 && max) {
        return formatMessage(rule, rule.errorMessage || message["number"][exclusiveMaximum ? "exclusiveMaximum" : "maximum"]);
      } else if (minimum !== void 0 && maximum !== void 0 && (min || max)) {
        return formatMessage(rule, rule.errorMessage || message["number"].range);
      }
      return null;
    },
    rangeLength(rule, value, message) {
      if (!types.string(value) && !types.array(value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      let min = rule.minLength;
      let max = rule.maxLength;
      let val = value.length;
      if (min !== void 0 && val < min) {
        return formatMessage(rule, rule.errorMessage || message["length"].minLength);
      } else if (max !== void 0 && val > max) {
        return formatMessage(rule, rule.errorMessage || message["length"].maxLength);
      } else if (min !== void 0 && max !== void 0 && (val < min || val > max)) {
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
      var format = FORMAT_MAPPING[rule.format] ? FORMAT_MAPPING[rule.format] : rule.format || rule.arrayType;
      if (customTypes.indexOf(format) > -1) {
        if (!types[format](value)) {
          return formatMessage(rule, rule.errorMessage || message.typeError);
        }
      }
      return null;
    },
    arrayTypeFormat(rule, value, message) {
      if (!Array.isArray(value)) {
        return formatMessage(rule, rule.errorMessage || message.typeError);
      }
      for (let i2 = 0; i2 < value.length; i2++) {
        const element = value[i2];
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
      var keys = Object.keys(data);
      var keys2 = Object.keys(this._schema);
      if (new Set(keys.concat(keys2)).size === keys2.length) {
        return "";
      }
      var noExistFields = keys.filter((key) => {
        return keys2.indexOf(key) < 0;
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
  var typeFilter = (format) => {
    return format === "int" || format === "double" || format === "number" || format === "timestamp";
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
      const realname = base_name.reduce((a2, b2) => a2 += `#${b2}`, "_formdata_");
      return realname;
    }
    return base_name[0] || name;
  };
  var isRealName = (name) => {
    const reg = /^_formdata_#*/;
    return reg.test(name);
  };
  var rawData = (object = {}, name) => {
    let newData = JSON.parse(JSON.stringify(object));
    let formData = {};
    for (let i2 in newData) {
      let path = name2arr(i2);
      objSet(formData, path, newData[i2]);
    }
    return formData;
  };
  var name2arr = (name) => {
    let field = name.replace("_formdata_#", "");
    field = field.split("#").map((v2) => isNumber(v2) ? Number(v2) : v2);
    return field;
  };
  var objSet = (object, path, value) => {
    if (typeof object !== "object")
      return object;
    _basePath(path).reduce((o2, k, i2, _2) => {
      if (i2 === _2.length - 1) {
        o2[k] = value;
        return null;
      } else if (k in o2) {
        return o2[k];
      } else {
        o2[k] = /^[0-9]{1,}$/.test(_2[i2 + 1]) ? [] : {};
        return o2[k];
      }
    }, object);
    return object;
  };
  function _basePath(path) {
    if (Array.isArray(path))
      return path;
    return path.replace(/\[/g, ".").replace(/\]/g, "").split(".");
  }
  var objGet = (object, path, defaultVal = "undefined") => {
    let newPath = _basePath(path);
    let val = newPath.reduce((o2, k) => {
      return (o2 || {})[k];
    }, object);
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
    for (let i2 = 0; i2 < rules.length; i2++) {
      const ruleData = rules[i2];
      if (ruleData.required) {
        isNoField = true;
        break;
      }
    }
    return isNoField;
  };
  var isEqual = (a2, b2) => {
    if (a2 === b2) {
      return a2 !== 0 || 1 / a2 === 1 / b2;
    }
    if (a2 == null || b2 == null) {
      return a2 === b2;
    }
    var classNameA = toString.call(a2), classNameB = toString.call(b2);
    if (classNameA !== classNameB) {
      return false;
    }
    switch (classNameA) {
      case "[object RegExp]":
      case "[object String]":
        return "" + a2 === "" + b2;
      case "[object Number]":
        if (+a2 !== +a2) {
          return +b2 !== +b2;
        }
        return +a2 === 0 ? 1 / +a2 === 1 / b2 : +a2 === +b2;
      case "[object Date]":
      case "[object Boolean]":
        return +a2 === +b2;
    }
    if (classNameA == "[object Object]") {
      var propsA = Object.getOwnPropertyNames(a2), propsB = Object.getOwnPropertyNames(b2);
      if (propsA.length != propsB.length) {
        return false;
      }
      for (var i2 = 0; i2 < propsA.length; i2++) {
        var propName = propsA[i2];
        if (a2[propName] !== b2[propName]) {
          return false;
        }
      }
      return true;
    }
    if (classNameA == "[object Array]") {
      if (a2.toString() == b2.toString()) {
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
            for (let i2 in this.$refs) {
              const vm = this.$refs[i2];
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
        for (let i2 in this.dataValue) {
          const itemData = this.childrens.find((v2) => v2.name === i2);
          if (itemData) {
            if (this.formData[i2] === void 0) {
              this.formData[i2] = this._getValue(i2, this.dataValue[i2]);
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
          for (let i2 in invalidFields) {
            const item = this.childrens.find((v2) => realName(v2.name) === i2);
            if (item) {
              childrens.push(item);
            }
          }
          if (!callback && typeof keepitem === "function") {
            callback = keepitem;
          }
          let promise;
          if (!callback && typeof callback !== "function" && Promise) {
            promise = new Promise((resolve, reject) => {
              callback = function(valid, invalidFields2) {
                !valid ? resolve(invalidFields2) : reject(valid);
              };
            });
          }
          let results = [];
          let tempFormData = JSON.parse(JSON.stringify(invalidFields));
          for (let i2 in childrens) {
            const child = childrens[i2];
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
            keepitem.forEach((v2) => {
              let vName = realName(v2);
              let value = getDataValue(v2, this.localData);
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
          if (promise && callback) {
            return promise;
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
          childrens.forEach((item, index) => {
            if (item === this) {
              this.form.childrens.splice(index, 1);
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
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  };
  var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
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
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages2 && Object.keys(messages2).length > 0) {
      locales = Object.keys(messages2);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  var I18n = class {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater: formater2 }) {
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
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
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
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
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
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
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
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      const options = [
        messages2,
        locale
      ];
      locale = options[0];
      messages2 = options[1];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t3 = (key, values) => {
      if (typeof getApp !== "function") {
        t3 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t3 = function(key2, values2) {
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
      return t3(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t3(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
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

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/pages/sample/form-ndemo.js
  var _style_0$b = { "uni-card": { "": { "marginTop": 10, "marginRight": 10, "marginBottom": 10, "marginLeft": 10, "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "borderRadius": 4, "overflow": "hidden", "fontFamily": "Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif", "backgroundColor": "#ffffff", "flex": 1 } }, "uni-card__cover": { ".uni-card ": { "position": "relative", "marginTop": 10, "flexDirection": "row", "overflow": "hidden", "borderRadius": 4 } }, "uni-card__cover-image": { ".uni-card .uni-card__cover ": { "flex": 1 } }, "uni-card__header": { ".uni-card ": { "display": "flex", "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#EBEEF5", "flexDirection": "row", "alignItems": "center", "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "overflow": "hidden" } }, "uni-card__header-box": { ".uni-card .uni-card__header ": { "flex": 1, "flexDirection": "row", "alignItems": "center", "overflow": "hidden" } }, "uni-card__header-avatar": { ".uni-card .uni-card__header ": { "width": 40, "height": 40, "overflow": "hidden", "borderRadius": 5, "marginRight": 10 } }, "uni-card__header-avatar-image": { ".uni-card .uni-card__header .uni-card__header-avatar ": { "flex": 1, "width": 40, "height": 40 } }, "uni-card__header-content": { ".uni-card .uni-card__header ": { "flexDirection": "column", "justifyContent": "center", "flex": 1, "overflow": "hidden" } }, "uni-card__header-content-title": { ".uni-card .uni-card__header .uni-card__header-content ": { "fontSize": 15, "color": "#3a3a3a" } }, "uni-card__header-content-subtitle": { ".uni-card .uni-card__header .uni-card__header-content ": { "fontSize": 12, "marginTop": 5, "color": "#909399" } }, "uni-card__header-extra": { ".uni-card .uni-card__header ": { "lineHeight": 12 } }, "uni-card__header-extra-text": { ".uni-card .uni-card__header .uni-card__header-extra ": { "fontSize": 12, "color": "#909399" } }, "uni-card__content": { ".uni-card ": { "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "fontSize": 14, "color": "#6a6a6a", "lineHeight": 22 } }, "uni-card__actions": { ".uni-card ": { "fontSize": 12 } }, "uni-card--border": { "": { "borderWidth": 1, "borderStyle": "solid", "borderColor": "#EBEEF5" } }, "uni-card--shadow": { "": { "position": "relative" } }, "uni-card--full": { "": { "marginTop": 0, "marginRight": 0, "marginBottom": 0, "marginLeft": 0, "borderLeftWidth": 0, "borderRadius": 0 } }, "uni-ellipsis": { "": { "lines": 1 } } };
  var _sfc_main$b = {
    name: "UniCard",
    emits: ["click"],
    props: {
      title: {
        type: String,
        default: ""
      },
      subTitle: {
        type: String,
        default: ""
      },
      padding: {
        type: String,
        default: "10px"
      },
      margin: {
        type: String,
        default: "15px"
      },
      spacing: {
        type: String,
        default: "0 10px"
      },
      extra: {
        type: String,
        default: ""
      },
      cover: {
        type: String,
        default: ""
      },
      thumbnail: {
        type: String,
        default: ""
      },
      isFull: {
        // 内容区域是否通栏
        type: Boolean,
        default: false
      },
      isShadow: {
        // 是否开启阴影
        type: Boolean,
        default: true
      },
      shadow: {
        type: String,
        default: "0px 0px 3px 1px rgba(0, 0, 0, 0.08)"
      },
      border: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      onClick(type) {
        this.$emit("click", type);
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
      "view",
      {
        class: (0, import_vue6.normalizeClass)(["uni-card", { "uni-card--full": $props.isFull, "uni-card--shadow": $props.isShadow, "uni-card--border": $props.border }]),
        style: (0, import_vue6.normalizeStyle)({ "margin": $props.isFull ? 0 : $props.margin, "padding": $props.spacing, "box-shadow": $props.isShadow ? $props.shadow : "" }),
        renderWhole: true
      },
      [
        (0, import_vue6.createCommentVNode)(" \u5C01\u9762 "),
        (0, import_vue6.renderSlot)(_ctx.$slots, "cover", {}, () => [
          $props.cover ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
            key: 0,
            class: "uni-card__cover"
          }, [
            (0, import_vue6.createElementVNode)("u-image", {
              class: "uni-card__cover-image",
              mode: "widthFix",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick("cover")),
              src: $props.cover
            }, null, 8, ["src"])
          ])) : (0, import_vue6.createCommentVNode)("v-if", true)
        ]),
        (0, import_vue6.renderSlot)(_ctx.$slots, "title", {}, () => [
          $props.title || $props.extra ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
            key: 0,
            class: "uni-card__header"
          }, [
            (0, import_vue6.createCommentVNode)(" \u5361\u7247\u6807\u9898 "),
            (0, import_vue6.createElementVNode)("view", {
              class: "uni-card__header-box",
              onClick: _cache[1] || (_cache[1] = ($event) => $options.onClick("title"))
            }, [
              $props.thumbnail ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                key: 0,
                class: "uni-card__header-avatar"
              }, [
                (0, import_vue6.createElementVNode)("u-image", {
                  class: "uni-card__header-avatar-image",
                  src: $props.thumbnail,
                  mode: "aspectFit"
                }, null, 8, ["src"])
              ])) : (0, import_vue6.createCommentVNode)("v-if", true),
              (0, import_vue6.createElementVNode)("view", { class: "uni-card__header-content" }, [
                (0, import_vue6.createElementVNode)(
                  "u-text",
                  { class: "uni-card__header-content-title uni-ellipsis" },
                  (0, import_vue6.toDisplayString)($props.title),
                  1
                  /* TEXT */
                ),
                $props.title && $props.subTitle ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
                  "u-text",
                  {
                    key: 0,
                    class: "uni-card__header-content-subtitle uni-ellipsis"
                  },
                  (0, import_vue6.toDisplayString)($props.subTitle),
                  1
                  /* TEXT */
                )) : (0, import_vue6.createCommentVNode)("v-if", true)
              ])
            ]),
            (0, import_vue6.createElementVNode)("view", {
              class: "uni-card__header-extra",
              onClick: _cache[2] || (_cache[2] = ($event) => $options.onClick("extra"))
            }, [
              (0, import_vue6.createElementVNode)(
                "u-text",
                { class: "uni-card__header-extra-text" },
                (0, import_vue6.toDisplayString)($props.extra),
                1
                /* TEXT */
              )
            ])
          ])) : (0, import_vue6.createCommentVNode)("v-if", true)
        ]),
        (0, import_vue6.createCommentVNode)(" \u5361\u7247\u5185\u5BB9 "),
        (0, import_vue6.createElementVNode)(
          "view",
          {
            class: "uni-card__content",
            style: (0, import_vue6.normalizeStyle)({ padding: $props.padding }),
            onClick: _cache[3] || (_cache[3] = ($event) => $options.onClick("content"))
          },
          [
            (0, import_vue6.renderSlot)(_ctx.$slots, "default")
          ],
          4
          /* STYLE */
        ),
        (0, import_vue6.createElementVNode)("view", {
          class: "uni-card__actions",
          onClick: _cache[4] || (_cache[4] = ($event) => $options.onClick("actions"))
        }, [
          (0, import_vue6.renderSlot)(_ctx.$slots, "actions")
        ])
      ],
      6
      /* CLASS, STYLE */
    );
  }
  var __easycom_14 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b], ["styles", [_style_0$b]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/uni_modules/uni-card/components/uni-card/uni-card.vue"]]);
  var en$1 = {
    "uni-load-more.contentdown": "Pull up to show more",
    "uni-load-more.contentrefresh": "loading...",
    "uni-load-more.contentnomore": "No more data"
  };
  var zhHans$1 = {
    "uni-load-more.contentdown": "\u4E0A\u62C9\u663E\u793A\u66F4\u591A",
    "uni-load-more.contentrefresh": "\u6B63\u5728\u52A0\u8F7D...",
    "uni-load-more.contentnomore": "\u6CA1\u6709\u66F4\u591A\u6570\u636E\u4E86"
  };
  var zhHant$1 = {
    "uni-load-more.contentdown": "\u4E0A\u62C9\u986F\u793A\u66F4\u591A",
    "uni-load-more.contentrefresh": "\u6B63\u5728\u52A0\u8F09...",
    "uni-load-more.contentnomore": "\u6C92\u6709\u66F4\u591A\u6578\u64DA\u4E86"
  };
  var messages$1 = {
    en: en$1,
    "zh-Hans": zhHans$1,
    "zh-Hant": zhHant$1
  };
  var _style_0$a = { "uni-load-more": { "": { "flexDirection": "row", "height": 40, "alignItems": "center", "justifyContent": "center" } }, "uni-load-more__text": { "": { "fontSize": 14, "marginLeft": 8 } }, "uni-load-more__img": { "": { "width": 24, "height": 24 } }, "uni-load-more__img--nvue": { "": { "color": "#666666" } }, "uni-load-more__img--android": { "": { "width": 24, "height": 24, "transform": "rotate(0deg)" } }, "uni-load-more__img--ios": { "": { "width": 24, "height": 24, "transform": "rotate(0deg)" } } };
  var platform;
  setTimeout(() => {
    platform = uni.getSystemInfoSync().platform;
  }, 16);
  var {
    t: t$3
  } = initVueI18n(messages$1);
  var _sfc_main$a = {
    name: "UniLoadMore",
    emits: ["clickLoadMore"],
    props: {
      status: {
        // 上拉的状态：more-loading前；loading-loading中；noMore-没有更多了
        type: String,
        default: "more"
      },
      showIcon: {
        type: Boolean,
        default: true
      },
      iconType: {
        type: String,
        default: "auto"
      },
      iconSize: {
        type: Number,
        default: 24
      },
      color: {
        type: String,
        default: "#777777"
      },
      contentText: {
        type: Object,
        default() {
          return {
            contentdown: "",
            contentrefresh: "",
            contentnomore: ""
          };
        }
      },
      showText: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        webviewHide: false,
        platform,
        imgBase64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlBMzU3OTlEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlBMzU3OUFEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOUEzNTc5N0Q5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOUEzNTc5OEQ5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt+ALSwAAA6CSURBVHja1FsLkFZVHb98LM+F5bHL8khA1iSeiyQBCRM+YGqKUnnJTDLGI0BGZlKDIU2MMglUiDApEZvSsZnQtBRJtKwQNKQMFYeRDR10WOLd8ljYXdh+v8v5fR3Od+797t1dnOnO/Ofce77z+J//+b/P+ZqtXbs2sJ9MJhNUV1cHJ06cCJo3bx7EPc2aNcvpy7pWrVoF+/fvDyoqKoI2bdoE9fX1F7TjN8a+EXBn/fkfvw942Tf+wYMHg9mzZwfjxo0LDhw4EPa1x2MbFw/fOGfPng1qa2tzcCkILsLDydq2bRsunpOTMM7TD/W/tZDZhPdeKD+yGxHhdu3aBV27dg3OnDlzMVANMheLAO3btw8KCwuDmpoaX5OxbgUIMEq7K8IcPnw4KCsrC/r37x8cP378/4cAXAB3vqSkJMuiDhTkw+XcuXNhOWbMmKBly5YhUT8xArhyFvP0BfwRsAuwxJZJsm/nzp2DTp06he/OU+cZ64K6o0ePBkOHDg2GDx8e6gEbJ5Q/NHNuAJQ1hgBeHUDlR7nVTkY8rQAvAi4z34vR/mPs1FoRsaCgIJThI0eOBC1atEiFGGV+5MiRoS45efJkqFjJFXV1dQuA012m2WcwTw98fy6CqBdsaiIO4CScrGPHjvk4odhavPquRtFWXEC25VgkREKOCh/qDSq+vn37htzD/mZTOmOc5U7zKzBPEedygWshcDyWvs30igAbU+6oyMgJBCFhwQE0fccxN60Ay9iebbjoDh06hMowjQxT4fXq1SskArmHZpkArvixp/kWzHdMeArExSJEaiXIjjRjRJ4DaAGWpibLzXN3Fm1vA5teBgh3j1Rv3bp1YgKwPdmf2p9zcyNYYgPKMfY0T5f5nNYdw158nJ8QawW4CLKwiOBSEgO/hok2eBydR+3dYH+PLxA5J8Vv0KBBwenTp0P2JWAx6+yFEBfs8lMY+y0SWMBNI9E4ThKi58VKTg3FQZS1RQF1cz27eC0QHMu+3E0SkUowjhVt5VdaWhp07949ZHv2Qd1EjDXM2cla1M0nl3GxAs3J9yREzyTdFVKVFOaE9qRA8GM0WebRuo9JGZKA7Mv2SeS/Z8+eoQ9BArMfFrLGo6jvxbhHbJZnKX2Rzz1O7QhJJ9Cs2ZMaWIyq/zhdeqPNfIoHd58clIQD+JSXl4dKlyIAuBdVXZwFVWKspSSoxE++h8x4k3uCnEhE4I5KwRiFWGOU0QWKiCYLbdoRMRKAu2kQ9vkfLU6dOhX06NEjlH+yMRZSinnuyWnYosVcji8CEA/6Cg2JF+IIUBqnGKUTCNwtwBN4f89RiK1R96DEgO2o0NDmtEdvVFdVVYV+P3UAPUEs6GFwV3PHmXkD4vh74iDFJysVI/MlaQhwKeBNTLYX5VuA8T4/gZxA4MRGFxDB6R7OmYPfyykGRJbyie+XnGYnQIC/coH9+vULiYrxrkL9ZA9+0ykaHIfEpM7ge8TiJ2CsHYwyMfafAF1yCGBHYIbCVDjDjKt7BeB51D+LgQa6OkG7IDYEEtvQ7lnXLKLtLdLuJBpE4gPUXcW2+PkZwOex+4cGDhwYDBkyRL7/HFcEwUGPo/8uWRUpYnfxGHco8HkewLHLyYmAawAPuIFZxhOpDfJQ8gbUv41yORAptMWBNr6oqMhWird5+u+iHmBb2nhjDV7HWBNQTgK8y11l5NetWzc5ULscAtSj7nbNI0skhWeUZCc0W4nyH/jO4Vz0u1IeYhbk4AiwM6tjxIWByHsoZ9qcIBPJd/y+DwPfBESOmCa/QF3WiZHucLlEDpNxcNhmheEOPgdQNx6/VZFQzFZ5TN08AHXQt2Ii3EdyFuUsPtTcGPhW5iMiCNELvz+Gdn9huG4HUJaW/w3g0wxV0XaG7arG2WeKiUWYM4Y7GO5ezshTARbbWGw/DvXkpp/ivVvE0JVoMxN4rpGzJMhE5Pl+xlATsDIqikP9F9D2z3h9nOksEUFhK+qO4rcPkoalMQ/HqJLIyb3F3JdjrCcw1yZ8joyJLR5gCo54etlag7qIoeNh1N1BRYj3DTFJ0elotxPlVzkGuYAmL0VSJVGAJA41c4Z6A3BzTLfn0HYwYKEI6CUAMzZEWvLsIcQOo1AmmyyM72nHJCfYsogflGV6jEk9vyQZXSuq6w4c16NsGcGZbwOPr+H1RkOk2LEzjNepxQkihHSCQ4ynAYNRx2zMKV92CQMWqj8J0BRE8EShxRFN6YrfCRhC0x3r/Zm4IbQCcmJoV0kMamllccR6FjHqUC5F2R/wS2dcymOlfAKOS4KmzQb5cpNC2MC7JhVn5wjXoJ44rYhLh8n0eXOCorJxa7POjbSlCGVczr34/RsAmrcvo9s+wGp3tzVhntxiXiJ4nvEYb4FJkf0O8HocAePmLvCxnL0AORraVekJk6TYjDabRVXfRE2lCN1h6ZQRN1+InUbsCpKwoBZHh0dODN9JBCUffItXxEavTQkUtnfTVAplCWL3JISz29h4NjotnuSsQKJCk8dF+kJR6RARjrqFVmfPnj3ZbK8cIJ0msd6jgHPGtfVTQ8VLmlvh4mct9sobRmPic0DyDQQnx/NlfYUgyz59+oScsH379pAwXABD32nTpoUHIToESeI5mnbE/UqDdyLcafEBf2MCqgC7NwxIbMREJQ0g4D4sfJwnD+AmRrII05cfMWJE+L1169bQr+fip06dGp4oJ83lmYd5wj/EmMa4TaHivo4EeCguYZBnkB5g2aWA69OIEnUHOaGysjIYMGBAMGnSpODYsWPZwCpFmm4lNq+4gSLQA7jcX8DwtjEyRC8wjabnXEx9kfWnTJkSJkAo90xpJVV+FmcVNeYAF5zWngS4C4O91MBxmAv8blLEpbjI5sz9MTdAhcgkCT1RO8mZkAjfiYpTEvStAS53Uw1vAiUGgZ3GpuQEYvoiBqlIan7kSDHnTwJQFNiPu0+5VxCVYhcZIjNrdXUDdp+Eq5AZ3Gkg8QAyVZRZIk4Tl4QAbF9cXJxNYZMAtAokgs4BrNxEpCtteXg7DDTMDKYNSuQdKsnJBek7HxewvxaosWxLYXtw+cJp18217wql4aKCfBNoEu0O5VU+PhctJ0YeXD4C6JQpyrlpSLTojpGGGN5YwNziChdIZLk4lvLcFJ9jMX3QdiImY9bmGQU+TRUL5CHITTRlgF8D9ouD1MfmLoEPl5xokIumZ2cfgMpHt47IW9N64Hsh7wQYYjyIugWuF5fCqYncXRd5vPMWyizzvhi/32+nvG0dZc9vR6fZOu0md5e+uC408FvKSIOZwXlGvxPv95izA2Vtvg1xKFWARI+vMX66HUhpQQb643uW1bSjuTWyw2SBvDrBvjFic1eGGlz5esq3ko9uSIlBRqPuFcCv8F4WIcN12nVaBd0SaYwI6PDDImR11JkqgHcPmQssjxIn6bUshygDFJUTxPMpHk+jfjPgupgdnYV2R/g7xSjtpah8RJBewhwf0gGK6XI92u4wXFEU40afJ4DN4h5LcAd+40HI3JgJecuT0c062W0i2hQJUTcxan3/CMW1PF2K6bbA+Daz4xRs1D3Br1Cm0OihKCqizW78/nXAF/G5TXrEcVzaNMH6CyMswqsAHqDyDLEyou8lwOXnKF8DjI6KjV3KzMBiXkDH8ij/H214J5A596ekrZ3F0zXlWeL7+P5eUrNo3/QwC15uxthuzidy7DzKRwEDaAViiDgKbTbz7CJnzo0bN7pIfIiid8SuPwn25o3QCmpnyjlZkyxPP8EomCJzrGb7GJMx7tNsq4MT2xMUYaiErZOluTzKsnz3gwCeCZyVRZJfYplNEokEjwrPtxlxjeYAk+F1F74VAzPxQRNYYdtpOUvWs8J1sGhBJMNsb7igN8plJs1eSmLIhLKE4rvaCX27gOhLpLOsIzJ7qn/i+wZzcvSOZ23/du8TZjwV8zHIXoP4R3ifBxiFz1dcVpa3aPntPE+c6TmIWE9EtcMmAcPdWAhYhAXxcLOQi9L1WhD1Sc8p1d2oL7XGiRKp8F4A2i8K/nfI+y/gsTDJ/YC/8+AD5Uh04KHiGl+cIFPnBDDrPMjwRGkLXyxO4VGbfQWnDH2v0bVWE3C9QOXlepbgjEfIJQI6XDG3z5ahD9cw2pS78ipB85wyScNTvsVzlzzhL8/jRrnmVjfFJK/m3m4nj9vbgQTguT8XZTjsm672R5uJKEaQmBI/c58gyus8ZDagLpEVSJBIyHp4jn++xqPV71OgQgJYEWOtZ/haxRtKmWOBu8xdBLftWltsY84zE6WIEy/eIOWL+BaayMx+KHtL7EAkqdNDLiEXmEMUHniedtJqg9HmZtfvt26vNi0BdG3Ft3g8ZOf7PAu59TxtzivLNIekyi+wD1i8CuUiD9FXAa8C+/xS3JPmZnomyc7H+fb4/Se0bk41Fel621r4cgVxbq91V4jVqwB7HTe2M7jgB+QWHavZkDRPmZcASoZEmBx6i75bGjPcMdL4/VKGFAGWZkGzPG0XAbdL9A81G5LOmUnC9hHKJeO7dcUMjblSl12867ElFTtaGl20xvvLGPdVz/8TVuU7y0x1PG7vtNg24oz9Uo/Z412++VFWI7Fcog9tu9Lm6gvRmIPv9x1xmQAu6RDkXtbOtlGEmpgD5Nvnyc0dcv0EE6cfdi1HmhMf9wDF3k3gtRvEedhxjpgfqPb9PU9iEJHnyOUA7bQUXh6kq/D7l2iTjWv7XOD530BDr8jIrus+srXjt4MzumJMHuTsBa63YKE1+RR5lBjEikCCnWKWiHdzOgKO+nRIBAF88za/IFmJ3eMZov4CYxGBabcpGL8EYx+SeMXJeRwHNsV/h+vdxeuhEpN3ZyNY78Gm2fknJxVGhyjixPiQvVkNzT1elD9Py/aTAL64Hb9vcYmC9zfdXdT/C1LeGbg4rnBaAihDFJH12W5ulfNCNe/xTsP3bp8ikzJs5BF+5PNfAQYAPaseTdsEcaYAAAAASUVORK5CYII="
      };
    },
    computed: {
      iconSnowWidth() {
        return (Math.floor(this.iconSize / 24) || 1) * 2;
      },
      contentdownText() {
        return this.contentText.contentdown || t$3("uni-load-more.contentdown");
      },
      contentrefreshText() {
        return this.contentText.contentrefresh || t$3("uni-load-more.contentrefresh");
      },
      contentnomoreText() {
        return this.contentText.contentnomore || t$3("uni-load-more.contentnomore");
      }
    },
    mounted() {
      var pages2 = getCurrentPages();
      var page = pages2[pages2.length - 1];
      var currentWebview = page.$getAppWebview();
      currentWebview.addEventListener("hide", () => {
        this.webviewHide = true;
      });
      currentWebview.addEventListener("show", () => {
        this.webviewHide = false;
      });
    },
    methods: {
      onClick() {
        this.$emit("clickLoadMore", {
          detail: {
            status: this.status
          }
        });
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
      class: "uni-load-more",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args)),
      renderWhole: true
    }, [
      !$data.webviewHide && $props.status === "loading" && $props.showIcon ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
        "loading-indicator",
        {
          key: 0,
          style: (0, import_vue6.normalizeStyle)({ color: $props.color, width: $props.iconSize + "px", height: $props.iconSize + "px" }),
          animating: true,
          class: "uni-load-more__img uni-load-more__img--nvue"
        },
        null,
        4
        /* STYLE */
      )) : (0, import_vue6.createCommentVNode)("v-if", true),
      $props.showText ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
        "u-text",
        {
          key: 1,
          class: "uni-load-more__text",
          style: (0, import_vue6.normalizeStyle)({ color: $props.color })
        },
        (0, import_vue6.toDisplayString)($props.status === "more" ? $options.contentdownText : $props.status === "loading" ? $options.contentrefreshText : $options.contentnomoreText),
        5
        /* TEXT, STYLE */
      )) : (0, import_vue6.createCommentVNode)("v-if", true)
    ]);
  }
  var __easycom_02 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["styles", [_style_0$a]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/uni_modules/uni-load-more/components/uni-load-more/uni-load-more.vue"]]);
  var _style_0$9 = { "uni-data-loading": { "": { "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "height": 36, "paddingLeft": 10, "color": "#999999" } }, "uni-data-checklist": { "": { "position": "relative", "zIndex": 0, "flex": 1 } }, "checklist-group": { ".uni-data-checklist ": { "flexDirection": "row", "flexWrap": "wrap" }, ".uni-data-checklist .is-list": { "flexDirection": "column" } }, "checklist-box": { ".uni-data-checklist .checklist-group ": { "flexDirection": "row", "alignItems": "center", "position": "relative", "marginTop": 5, "marginRight": 25, "marginBottom": 5, "marginLeft": 0 }, ".uni-data-checklist .checklist-group .is--button": { "marginRight": 10, "paddingTop": 5, "paddingRight": 10, "paddingBottom": 5, "paddingLeft": 10, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#DCDFE6", "borderRadius": 3, "transitionProperty": "borderColor", "transitionDuration": 200 }, ".uni-data-checklist .checklist-group .is--button.is-disable": { "borderWidth": 1, "borderStyle": "solid", "borderColor": "#eeeeee", "opacity": 0.4 }, ".uni-data-checklist .checklist-group .is--button.is-checked": { "borderColor": "#2979ff" }, ".uni-data-checklist .checklist-group .is--button.is-checked.is-disable": { "opacity": 0.4 }, ".uni-data-checklist .checklist-group .is--tag": { "marginRight": 10, "paddingTop": 5, "paddingRight": 10, "paddingBottom": 5, "paddingLeft": 10, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#DCDFE6", "borderRadius": 3, "backgroundColor": "#f5f5f5" }, ".uni-data-checklist .checklist-group .is--tag.is-disable": { "opacity": 0.4 }, ".uni-data-checklist .checklist-group .is--tag.is-checked": { "backgroundColor": "#2979ff", "borderColor": "#2979ff" }, ".uni-data-checklist .checklist-group .is--list": { "paddingTop": 10, "paddingRight": 15, "paddingBottom": 10, "paddingLeft": 0, "marginTop": 0, "marginRight": 0, "marginBottom": 0, "marginLeft": 0 }, ".uni-data-checklist .checklist-group .is--list.is-list-border": { "borderTopWidth": 1, "borderTopStyle": "solid", "borderTopColor": "#eeeeee" } }, "hidden": { ".uni-data-checklist .checklist-group .checklist-box ": { "position": "absolute", "opacity": 0 } }, "checklist-content": { ".uni-data-checklist .checklist-group .checklist-box ": { "flex": 1, "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between" } }, "checklist-text": { ".uni-data-checklist .checklist-group .checklist-box .checklist-content ": { "fontSize": 14, "color": "#666666", "marginLeft": 5, "lineHeight": 14 }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-disable ": { "color": "#999999" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked ": { "color": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked.is-disable ": { "opacity": 0.4 }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-disable ": { "color": "#999999" }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-checked ": { "color": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--tag ": { "marginTop": 0, "marginRight": 0, "marginBottom": 0, "marginLeft": 0, "color": "#666666" }, ".uni-data-checklist .checklist-group .checklist-box.is--tag.is-checked ": { "color": "#ffffff" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-disable ": { "color": "#999999" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked ": { "color": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked.is-disable ": { "opacity": 0.4 } }, "checkobx__list": { ".uni-data-checklist .checklist-group .checklist-box .checklist-content ": { "borderRightWidth": 1, "borderRightColor": "#007aff", "borderRightStyle": "solid", "borderBottomWidth": 1, "borderBottomColor": "#007aff", "borderBottomStyle": "solid", "height": 12, "width": 6, "left": -5, "transformOrigin": "center", "transform": "rotate(45deg)", "opacity": 0 }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked .checklist-content ": { "opacity": 1, "borderColor": "#2979ff" } }, "checkbox__inner": { ".uni-data-checklist .checklist-group .checklist-box ": { "position": "relative", "width": 16, "height": 16, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#DCDFE6", "borderRadius": 4, "backgroundColor": "#ffffff", "zIndex": 1 }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-disable ": { "backgroundColor": "#F2F6FC", "borderColor": "#DCDFE6" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked ": { "borderColor": "#2979ff", "backgroundColor": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked.is-disable ": { "opacity": 0.4 }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-disable ": { "backgroundColor": "#F2F6FC", "borderColor": "#DCDFE6" }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-checked ": { "borderColor": "#2979ff", "backgroundColor": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-disable ": { "backgroundColor": "#F2F6FC", "borderColor": "#DCDFE6" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked ": { "borderColor": "#2979ff", "backgroundColor": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked.is-disable ": { "opacity": 0.4 } }, "checkbox__inner-icon": { ".uni-data-checklist .checklist-group .checklist-box .checkbox__inner ": { "position": "absolute", "top": 2, "left": 5, "height": 8, "width": 4, "borderRightWidth": 1, "borderRightColor": "#ffffff", "borderRightStyle": "solid", "borderBottomWidth": 1, "borderBottomColor": "#ffffff", "borderBottomStyle": "solid", "opacity": 0, "transformOrigin": "center", "transform": "rotate(40deg)" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked .checkbox__inner ": { "opacity": 1, "transform": "rotate(45deg)" }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-checked .checkbox__inner ": { "opacity": 1, "transform": "rotate(45deg)" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked .checkbox__inner ": { "opacity": 1, "transform": "rotate(45deg)" } }, "radio__inner": { ".uni-data-checklist .checklist-group .checklist-box ": { "justifyContent": "center", "alignItems": "center", "position": "relative", "width": 16, "height": 16, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#DCDFE6", "borderRadius": 16, "backgroundColor": "#ffffff", "zIndex": 1 }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-disable ": { "backgroundColor": "#F2F6FC", "borderColor": "#DCDFE6" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked ": { "borderColor": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked.is-disable ": { "opacity": 0.4 }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-disable ": { "backgroundColor": "#F2F6FC", "borderColor": "#DCDFE6" }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-checked ": { "borderColor": "#2979ff" } }, "radio__inner-icon": { ".uni-data-checklist .checklist-group .checklist-box .radio__inner ": { "width": 8, "height": 8, "borderRadius": 10, "opacity": 0 }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked .radio__inner ": { "opacity": 1, "backgroundColor": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-checked .radio__inner ": { "opacity": 1, "backgroundColor": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked .radio__inner ": { "opacity": 1 } }, "@TRANSITION": { "checklist-box": { "property": "borderColor", "duration": 200 } } };
  var _sfc_main$9 = {
    name: "uniDataChecklist",
    mixins: [nr.mixinDatacom || {}],
    emits: ["input", "update:modelValue", "change"],
    props: {
      mode: {
        type: String,
        default: "default"
      },
      multiple: {
        type: Boolean,
        default: false
      },
      value: {
        type: [Array, String, Number],
        default() {
          return "";
        }
      },
      // TODO vue3
      modelValue: {
        type: [Array, String, Number],
        default() {
          return "";
        }
      },
      localdata: {
        type: Array,
        default() {
          return [];
        }
      },
      min: {
        type: [Number, String],
        default: ""
      },
      max: {
        type: [Number, String],
        default: ""
      },
      wrap: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: "left"
      },
      selectedColor: {
        type: String,
        default: ""
      },
      selectedTextColor: {
        type: String,
        default: ""
      },
      emptyText: {
        type: String,
        default: "\u6682\u65E0\u6570\u636E"
      },
      disabled: {
        type: Boolean,
        default: false
      },
      map: {
        type: Object,
        default() {
          return {
            text: "text",
            value: "value"
          };
        }
      }
    },
    watch: {
      localdata: {
        handler(newVal) {
          this.range = newVal;
          this.dataList = this.getDataList(this.getSelectedValue(newVal));
        },
        deep: true
      },
      mixinDatacomResData(newVal) {
        this.range = newVal;
        this.dataList = this.getDataList(this.getSelectedValue(newVal));
      },
      value(newVal) {
        this.dataList = this.getDataList(newVal);
      },
      modelValue(newVal) {
        this.dataList = this.getDataList(newVal);
      }
    },
    data() {
      return {
        dataList: [],
        range: [],
        contentText: {
          contentdown: "\u67E5\u770B\u66F4\u591A",
          contentrefresh: "\u52A0\u8F7D\u4E2D",
          contentnomore: "\u6CA1\u6709\u66F4\u591A"
        },
        isLocal: true,
        styles: {
          selectedColor: "#2979ff",
          selectedTextColor: "#666"
        },
        isTop: 0
      };
    },
    computed: {
      dataValue() {
        if (this.value === "")
          return this.modelValue;
        if (this.modelValue === "")
          return this.value;
        return this.value;
      }
    },
    created() {
      if (this.localdata && this.localdata.length !== 0) {
        this.isLocal = true;
        this.range = this.localdata;
        this.dataList = this.getDataList(this.getSelectedValue(this.range));
      } else {
        if (this.collection) {
          this.isLocal = false;
          this.loadData();
        }
      }
    },
    methods: {
      loadData() {
        this.mixinDatacomGet().then((res) => {
          this.mixinDatacomResData = res.result.data;
          if (this.mixinDatacomResData.length === 0) {
            this.isLocal = false;
            this.mixinDatacomErrorMessage = this.emptyText;
          } else {
            this.isLocal = true;
          }
        }).catch((err) => {
          this.mixinDatacomErrorMessage = err.message;
        });
      },
      /**
       * 获取父元素实例
       */
      getForm(name = "uniForms") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      chagne(e2) {
        const values = e2.detail.value;
        let detail = {
          value: [],
          data: []
        };
        if (this.multiple) {
          this.range.forEach((item) => {
            if (values.includes(item[this.map.value] + "")) {
              detail.value.push(item[this.map.value]);
              detail.data.push(item);
            }
          });
        } else {
          const range = this.range.find((item) => item[this.map.value] + "" === values);
          if (range) {
            detail = {
              value: range[this.map.value],
              data: range
            };
          }
        }
        this.$emit("input", detail.value);
        this.$emit("update:modelValue", detail.value);
        this.$emit("change", {
          detail
        });
        if (this.multiple) {
          this.dataList = this.getDataList(detail.value, true);
        } else {
          this.dataList = this.getDataList(detail.value);
        }
      },
      /**
       * 获取渲染的新数组
       * @param {Object} value 选中内容
       */
      getDataList(value) {
        let dataList = JSON.parse(JSON.stringify(this.range));
        let list = [];
        if (this.multiple) {
          if (!Array.isArray(value)) {
            value = [];
          }
        }
        dataList.forEach((item, index) => {
          item.disabled = item.disable || item.disabled || false;
          if (this.multiple) {
            if (value.length > 0) {
              let have = value.find((val) => val === item[this.map.value]);
              item.selected = have !== void 0;
            } else {
              item.selected = false;
            }
          } else {
            item.selected = value === item[this.map.value];
          }
          list.push(item);
        });
        return this.setRange(list);
      },
      /**
       * 处理最大最小值
       * @param {Object} list
       */
      setRange(list) {
        let selectList = list.filter((item) => item.selected);
        let min = Number(this.min) || 0;
        let max = Number(this.max) || "";
        list.forEach((item, index) => {
          if (this.multiple) {
            if (selectList.length <= min) {
              let have = selectList.find((val) => val[this.map.value] === item[this.map.value]);
              if (have !== void 0) {
                item.disabled = true;
              }
            }
            if (selectList.length >= max && max !== "") {
              let have = selectList.find((val) => val[this.map.value] === item[this.map.value]);
              if (have === void 0) {
                item.disabled = true;
              }
            }
          }
          this.setStyles(item, index);
          list[index] = item;
        });
        return list;
      },
      /**
       * 设置 class
       * @param {Object} item
       * @param {Object} index
       */
      setStyles(item, index) {
        item.styleBackgroud = this.setStyleBackgroud(item);
        item.styleIcon = this.setStyleIcon(item);
        item.styleIconText = this.setStyleIconText(item);
        item.styleRightIcon = this.setStyleRightIcon(item);
      },
      /**
       * 获取选中值
       * @param {Object} range
       */
      getSelectedValue(range) {
        if (!this.multiple)
          return this.dataValue;
        let selectedArr = [];
        range.forEach((item) => {
          if (item.selected) {
            selectedArr.push(item[this.map.value]);
          }
        });
        return this.dataValue.length > 0 ? this.dataValue : selectedArr;
      },
      /**
       * 设置背景样式
       */
      setStyleBackgroud(item) {
        let styles = {};
        let selectedColor = this.selectedColor ? this.selectedColor : "#2979ff";
        if (this.selectedColor) {
          if (this.mode !== "list") {
            styles["border-color"] = item.selected ? selectedColor : "#DCDFE6";
          }
          if (this.mode === "tag") {
            styles["background-color"] = item.selected ? selectedColor : "#f5f5f5";
          }
        }
        let classles = "";
        for (let i2 in styles) {
          classles += `${i2}:${styles[i2]};`;
        }
        return classles;
      },
      setStyleIcon(item) {
        let styles = {};
        let classles = "";
        if (this.selectedColor) {
          let selectedColor = this.selectedColor ? this.selectedColor : "#2979ff";
          styles["background-color"] = item.selected ? selectedColor : "#fff";
          styles["border-color"] = item.selected ? selectedColor : "#DCDFE6";
          if (!item.selected && item.disabled) {
            styles["background-color"] = "#F2F6FC";
            styles["border-color"] = item.selected ? selectedColor : "#DCDFE6";
          }
        }
        for (let i2 in styles) {
          classles += `${i2}:${styles[i2]};`;
        }
        return classles;
      },
      setStyleIconText(item) {
        let styles = {};
        let classles = "";
        if (this.selectedColor) {
          let selectedColor = this.selectedColor ? this.selectedColor : "#2979ff";
          if (this.mode === "tag") {
            styles.color = item.selected ? this.selectedTextColor ? this.selectedTextColor : "#fff" : "#666";
          } else {
            styles.color = item.selected ? this.selectedTextColor ? this.selectedTextColor : selectedColor : "#666";
          }
          if (!item.selected && item.disabled) {
            styles.color = "#999";
          }
        }
        for (let i2 in styles) {
          classles += `${i2}:${styles[i2]};`;
        }
        return classles;
      },
      setStyleRightIcon(item) {
        let styles = {};
        let classles = "";
        if (this.mode === "list") {
          styles["border-color"] = item.selected ? this.styles.selectedColor : "#DCDFE6";
        }
        for (let i2 in styles) {
          classles += `${i2}:${styles[i2]};`;
        }
        return classles;
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_load_more = resolveEasycom((0, import_vue6.resolveDynamicComponent)("uni-load-more"), __easycom_02);
    const _component_checkbox = (0, import_vue6.resolveComponent)("checkbox");
    const _component_label = (0, import_vue6.resolveComponent)("label");
    const _component_checkbox_group = (0, import_vue6.resolveComponent)("checkbox-group");
    const _component_radio = (0, import_vue6.resolveComponent)("radio");
    const _component_radio_group = (0, import_vue6.resolveComponent)("radio-group");
    return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
      "view",
      {
        class: "uni-data-checklist",
        style: (0, import_vue6.normalizeStyle)({ "margin-top": $data.isTop + "px" }),
        renderWhole: true
      },
      [
        !$data.isLocal ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
          key: 0,
          class: "uni-data-loading"
        }, [
          !_ctx.mixinDatacomErrorMessage ? ((0, import_vue6.openBlock)(), (0, import_vue6.createBlock)(_component_uni_load_more, {
            key: 0,
            status: "loading",
            iconType: "snow",
            iconSize: 18,
            "content-text": $data.contentText
          }, null, 8, ["content-text"])) : ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
            "u-text",
            { key: 1 },
            (0, import_vue6.toDisplayString)(_ctx.mixinDatacomErrorMessage),
            1
            /* TEXT */
          ))
        ])) : ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
          import_vue6.Fragment,
          { key: 1 },
          [
            $props.multiple ? ((0, import_vue6.openBlock)(), (0, import_vue6.createBlock)(_component_checkbox_group, {
              key: 0,
              class: (0, import_vue6.normalizeClass)(["checklist-group", { "is-list": $props.mode === "list" || $props.wrap }]),
              onChange: $options.chagne
            }, {
              default: (0, import_vue6.withCtx)(() => [
                ((0, import_vue6.openBlock)(true), (0, import_vue6.createElementBlock)(
                  import_vue6.Fragment,
                  null,
                  (0, import_vue6.renderList)($data.dataList, (item, index) => {
                    return (0, import_vue6.openBlock)(), (0, import_vue6.createBlock)(_component_label, {
                      class: (0, import_vue6.normalizeClass)(["checklist-box", ["is--" + $props.mode, item.selected ? "is-checked" : "", $props.disabled || !!item.disabled ? "is-disable" : "", index !== 0 && $props.mode === "list" ? "is-list-border" : ""]]),
                      style: (0, import_vue6.normalizeStyle)(item.styleBackgroud),
                      key: index
                    }, {
                      default: (0, import_vue6.withCtx)(() => [
                        (0, import_vue6.createVNode)(_component_checkbox, {
                          class: "hidden",
                          hidden: "",
                          disabled: $props.disabled || !!item.disabled,
                          value: item[$props.map.value] + "",
                          checked: item.selected
                        }, null, 8, ["disabled", "value", "checked"]),
                        $props.mode !== "tag" && $props.mode !== "list" || $props.mode === "list" && $props.icon === "left" ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
                          "view",
                          {
                            key: 0,
                            class: "checkbox__inner",
                            style: (0, import_vue6.normalizeStyle)(item.styleIcon)
                          },
                          [
                            (0, import_vue6.createElementVNode)("view", { class: "checkbox__inner-icon" })
                          ],
                          4
                          /* STYLE */
                        )) : (0, import_vue6.createCommentVNode)("v-if", true),
                        (0, import_vue6.createElementVNode)(
                          "view",
                          {
                            class: (0, import_vue6.normalizeClass)(["checklist-content", { "list-content": $props.mode === "list" && $props.icon === "left" }])
                          },
                          [
                            (0, import_vue6.createElementVNode)(
                              "u-text",
                              {
                                class: "checklist-text",
                                style: (0, import_vue6.normalizeStyle)(item.styleIconText)
                              },
                              (0, import_vue6.toDisplayString)(item[$props.map.text]),
                              5
                              /* TEXT, STYLE */
                            ),
                            $props.mode === "list" && $props.icon === "right" ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
                              "view",
                              {
                                key: 0,
                                class: "checkobx__list",
                                style: (0, import_vue6.normalizeStyle)(item.styleBackgroud)
                              },
                              null,
                              4
                              /* STYLE */
                            )) : (0, import_vue6.createCommentVNode)("v-if", true)
                          ],
                          2
                          /* CLASS */
                        )
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["class", "style"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["class", "onChange"])) : ((0, import_vue6.openBlock)(), (0, import_vue6.createBlock)(_component_radio_group, {
              key: 1,
              class: (0, import_vue6.normalizeClass)(["checklist-group", { "is-list": $props.mode === "list", "is-wrap": $props.wrap }]),
              onChange: $options.chagne
            }, {
              default: (0, import_vue6.withCtx)(() => [
                (0, import_vue6.createCommentVNode)(" "),
                ((0, import_vue6.openBlock)(true), (0, import_vue6.createElementBlock)(
                  import_vue6.Fragment,
                  null,
                  (0, import_vue6.renderList)($data.dataList, (item, index) => {
                    return (0, import_vue6.openBlock)(), (0, import_vue6.createBlock)(_component_label, {
                      class: (0, import_vue6.normalizeClass)(["checklist-box", ["is--" + $props.mode, item.selected ? "is-checked" : "", $props.disabled || !!item.disabled ? "is-disable" : "", index !== 0 && $props.mode === "list" ? "is-list-border" : ""]]),
                      style: (0, import_vue6.normalizeStyle)(item.styleBackgroud),
                      key: index
                    }, {
                      default: (0, import_vue6.withCtx)(() => [
                        (0, import_vue6.createVNode)(_component_radio, {
                          class: "hidden",
                          hidden: "",
                          disabled: $props.disabled || item.disabled,
                          value: item[$props.map.value] + "",
                          checked: item.selected
                        }, null, 8, ["disabled", "value", "checked"]),
                        $props.mode !== "tag" && $props.mode !== "list" || $props.mode === "list" && $props.icon === "left" ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
                          "view",
                          {
                            key: 0,
                            class: "radio__inner",
                            style: (0, import_vue6.normalizeStyle)(item.styleBackgroud)
                          },
                          [
                            (0, import_vue6.createElementVNode)(
                              "view",
                              {
                                class: "radio__inner-icon",
                                style: (0, import_vue6.normalizeStyle)(item.styleIcon)
                              },
                              null,
                              4
                              /* STYLE */
                            )
                          ],
                          4
                          /* STYLE */
                        )) : (0, import_vue6.createCommentVNode)("v-if", true),
                        (0, import_vue6.createElementVNode)(
                          "view",
                          {
                            class: (0, import_vue6.normalizeClass)(["checklist-content", { "list-content": $props.mode === "list" && $props.icon === "left" }])
                          },
                          [
                            (0, import_vue6.createElementVNode)(
                              "u-text",
                              {
                                class: "checklist-text",
                                style: (0, import_vue6.normalizeStyle)(item.styleIconText)
                              },
                              (0, import_vue6.toDisplayString)(item[$props.map.text]),
                              5
                              /* TEXT, STYLE */
                            ),
                            $props.mode === "list" && $props.icon === "right" ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
                              "view",
                              {
                                key: 0,
                                style: (0, import_vue6.normalizeStyle)(item.styleRightIcon),
                                class: "checkobx__list"
                              },
                              null,
                              4
                              /* STYLE */
                            )) : (0, import_vue6.createCommentVNode)("v-if", true)
                          ],
                          2
                          /* CLASS */
                        )
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["class", "style"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["class", "onChange"]))
          ],
          64
          /* STABLE_FRAGMENT */
        ))
      ],
      4
      /* STYLE */
    );
  }
  var __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["styles", [_style_0$9]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.vue"]]);
  var Calendar = class {
    constructor({
      date,
      selected,
      startDate,
      endDate,
      range
      // multipleStatus
    } = {}) {
      this.date = this.getDate(/* @__PURE__ */ new Date());
      this.selected = selected || [];
      this.startDate = startDate;
      this.endDate = endDate;
      this.range = range;
      this.cleanMultipleStatus();
      this.weeks = {};
      this.lastHover = false;
    }
    /**
     * 设置日期
     * @param {Object} date
     */
    setDate(date) {
      this.selectDate = this.getDate(date);
      this._getWeek(this.selectDate.fullDate);
    }
    /**
     * 清理多选状态
     */
    cleanMultipleStatus() {
      this.multipleStatus = {
        before: "",
        after: "",
        data: []
      };
    }
    /**
     * 重置开始日期
     */
    resetSatrtDate(startDate) {
      this.startDate = startDate;
    }
    /**
     * 重置结束日期
     */
    resetEndDate(endDate) {
      this.endDate = endDate;
    }
    /**
     * 获取任意时间
     */
    getDate(date, AddDayCount = 0, str = "day") {
      if (!date) {
        date = /* @__PURE__ */ new Date();
      }
      if (typeof date !== "object") {
        date = date.replace(/-/g, "/");
      }
      const dd = new Date(date);
      switch (str) {
        case "day":
          dd.setDate(dd.getDate() + AddDayCount);
          break;
        case "month":
          if (dd.getDate() === 31) {
            dd.setDate(dd.getDate() + AddDayCount);
          } else {
            dd.setMonth(dd.getMonth() + AddDayCount);
          }
          break;
        case "year":
          dd.setFullYear(dd.getFullYear() + AddDayCount);
          break;
      }
      const y2 = dd.getFullYear();
      const m2 = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
      const d2 = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
      return {
        fullDate: y2 + "-" + m2 + "-" + d2,
        year: y2,
        month: m2,
        date: d2,
        day: dd.getDay()
      };
    }
    /**
     * 获取上月剩余天数
     */
    _getLastMonthDays(firstDay, full) {
      let dateArr = [];
      for (let i2 = firstDay; i2 > 0; i2--) {
        const beforeDate = new Date(full.year, full.month - 1, -i2 + 1).getDate();
        dateArr.push({
          date: beforeDate,
          month: full.month - 1,
          disable: true
        });
      }
      return dateArr;
    }
    /**
     * 获取本月天数
     */
    _currentMonthDys(dateData, full) {
      let dateArr = [];
      let fullDate = this.date.fullDate;
      for (let i2 = 1; i2 <= dateData; i2++) {
        let nowDate = full.year + "-" + (full.month < 10 ? full.month : full.month) + "-" + (i2 < 10 ? "0" + i2 : i2);
        let isDay = fullDate === nowDate;
        let info = this.selected && this.selected.find((item) => {
          if (this.dateEqual(nowDate, item.date)) {
            return item;
          }
        });
        let disableBefore = true;
        let disableAfter = true;
        if (this.startDate) {
          disableBefore = this.dateCompare(this.startDate, nowDate);
        }
        if (this.endDate) {
          disableAfter = this.dateCompare(nowDate, this.endDate);
        }
        let multiples = this.multipleStatus.data;
        let checked = false;
        let multiplesStatus = -1;
        if (this.range) {
          if (multiples) {
            multiplesStatus = multiples.findIndex((item) => {
              return this.dateEqual(item, nowDate);
            });
          }
          if (multiplesStatus !== -1) {
            checked = true;
          }
        }
        let data = {
          fullDate: nowDate,
          year: full.year,
          date: i2,
          multiple: this.range ? checked : false,
          beforeMultiple: this.isLogicBefore(nowDate, this.multipleStatus.before, this.multipleStatus.after),
          afterMultiple: this.isLogicAfter(nowDate, this.multipleStatus.before, this.multipleStatus.after),
          month: full.month,
          disable: !(disableBefore && disableAfter),
          isDay,
          userChecked: false
        };
        if (info) {
          data.extraInfo = info;
        }
        dateArr.push(data);
      }
      return dateArr;
    }
    /**
     * 获取下月天数
     */
    _getNextMonthDays(surplus, full) {
      let dateArr = [];
      for (let i2 = 1; i2 < surplus + 1; i2++) {
        dateArr.push({
          date: i2,
          month: Number(full.month) + 1,
          disable: true
        });
      }
      return dateArr;
    }
    /**
     * 获取当前日期详情
     * @param {Object} date
     */
    getInfo(date) {
      if (!date) {
        date = /* @__PURE__ */ new Date();
      }
      const dateInfo = this.canlender.find((item) => item.fullDate === this.getDate(date).fullDate);
      return dateInfo;
    }
    /**
     * 比较时间大小
     */
    dateCompare(startDate, endDate) {
      startDate = new Date(startDate.replace("-", "/").replace("-", "/"));
      endDate = new Date(endDate.replace("-", "/").replace("-", "/"));
      if (startDate <= endDate) {
        return true;
      } else {
        return false;
      }
    }
    /**
     * 比较时间是否相等
     */
    dateEqual(before, after) {
      before = new Date(before.replace("-", "/").replace("-", "/"));
      after = new Date(after.replace("-", "/").replace("-", "/"));
      if (before.getTime() - after.getTime() === 0) {
        return true;
      } else {
        return false;
      }
    }
    /**
     *  比较真实起始日期
     */
    isLogicBefore(currentDay, before, after) {
      let logicBefore = before;
      if (before && after) {
        logicBefore = this.dateCompare(before, after) ? before : after;
      }
      return this.dateEqual(logicBefore, currentDay);
    }
    isLogicAfter(currentDay, before, after) {
      let logicAfter = after;
      if (before && after) {
        logicAfter = this.dateCompare(before, after) ? after : before;
      }
      return this.dateEqual(logicAfter, currentDay);
    }
    /**
     * 获取日期范围内所有日期
     * @param {Object} begin
     * @param {Object} end
     */
    geDateAll(begin, end) {
      var arr = [];
      var ab = begin.split("-");
      var ae2 = end.split("-");
      var db = /* @__PURE__ */ new Date();
      db.setFullYear(ab[0], ab[1] - 1, ab[2]);
      var de2 = /* @__PURE__ */ new Date();
      de2.setFullYear(ae2[0], ae2[1] - 1, ae2[2]);
      var unixDb = db.getTime() - 24 * 60 * 60 * 1e3;
      var unixDe = de2.getTime() - 24 * 60 * 60 * 1e3;
      for (var k = unixDb; k <= unixDe; ) {
        k = k + 24 * 60 * 60 * 1e3;
        arr.push(this.getDate(new Date(parseInt(k))).fullDate);
      }
      return arr;
    }
    /**
     *  获取多选状态
     */
    setMultiple(fullDate) {
      let {
        before,
        after
      } = this.multipleStatus;
      if (!this.range)
        return;
      if (before && after) {
        if (!this.lastHover) {
          this.lastHover = true;
          return;
        }
        this.multipleStatus.before = fullDate;
        this.multipleStatus.after = "";
        this.multipleStatus.data = [];
        this.multipleStatus.fulldate = "";
        this.lastHover = false;
      } else {
        if (!before) {
          this.multipleStatus.before = fullDate;
          this.lastHover = false;
        } else {
          this.multipleStatus.after = fullDate;
          if (this.dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
          } else {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
          }
          this.lastHover = true;
        }
      }
      this._getWeek(fullDate);
    }
    /**
     *  鼠标 hover 更新多选状态
     */
    setHoverMultiple(fullDate) {
      let {
        before,
        after
      } = this.multipleStatus;
      if (!this.range)
        return;
      if (this.lastHover)
        return;
      if (!before) {
        this.multipleStatus.before = fullDate;
      } else {
        this.multipleStatus.after = fullDate;
        if (this.dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
          this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
        } else {
          this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
        }
      }
      this._getWeek(fullDate);
    }
    /**
     * 更新默认值多选状态
     */
    setDefaultMultiple(before, after) {
      this.multipleStatus.before = before;
      this.multipleStatus.after = after;
      if (before && after) {
        if (this.dateCompare(before, after)) {
          this.multipleStatus.data = this.geDateAll(before, after);
          this._getWeek(after);
        } else {
          this.multipleStatus.data = this.geDateAll(after, before);
          this._getWeek(before);
        }
      }
    }
    /**
     * 获取每周数据
     * @param {Object} dateData
     */
    _getWeek(dateData) {
      const {
        fullDate,
        year,
        month,
        date,
        day
      } = this.getDate(dateData);
      let firstDay = new Date(year, month - 1, 1).getDay();
      let currentDay = new Date(year, month, 0).getDate();
      let dates = {
        lastMonthDays: this._getLastMonthDays(firstDay, this.getDate(dateData)),
        // 上个月末尾几天
        currentMonthDys: this._currentMonthDys(currentDay, this.getDate(dateData)),
        // 本月天数
        nextMonthDays: [],
        // 下个月开始几天
        weeks: []
      };
      let canlender = [];
      const surplus = 42 - (dates.lastMonthDays.length + dates.currentMonthDys.length);
      dates.nextMonthDays = this._getNextMonthDays(surplus, this.getDate(dateData));
      canlender = canlender.concat(dates.lastMonthDays, dates.currentMonthDys, dates.nextMonthDays);
      let weeks = {};
      for (let i2 = 0; i2 < canlender.length; i2++) {
        if (i2 % 7 === 0) {
          weeks[parseInt(i2 / 7)] = new Array(7);
        }
        weeks[parseInt(i2 / 7)][i2 % 7] = canlender[i2];
      }
      this.canlender = canlender;
      this.weeks = weeks;
    }
    //静态方法
    // static init(date) {
    // 	if (!this.instance) {
    // 		this.instance = new Calendar(date);
    // 	}
    // 	return this.instance;
    // }
  };
  var _style_0$8 = { "uni-calendar-item__weeks-box": { "": { "flex": 1, "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "marginTop": 1, "marginRight": 0, "marginBottom": 1, "marginLeft": 0, "position": "relative" } }, "uni-calendar-item__weeks-box-text": { "": { "fontSize": 14, "fontWeight": "bold", "color": "#001833" } }, "uni-calendar-item__weeks-lunar-text": { "": { "fontSize": 12, "color": "#333333" } }, "uni-calendar-item__weeks-box-item": { "": { "position": "relative", "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "width": 40, "height": 40 } }, "uni-calendar-item__weeks-box-circle": { "": { "position": "absolute", "top": 5, "right": 5, "width": 8, "height": 8, "borderRadius": 8, "backgroundColor": "#dd524d" } }, "uni-calendar-item--disable": { ".uni-calendar-item__weeks-box ": { "cursor": "default" } }, "uni-calendar-item__weeks-box-text-disable": { ".uni-calendar-item--disable ": { "color": "#D1D1D1" } }, "uni-calendar-item--isDay": { "": { "position": "absolute", "top": 10, "right": 17, "backgroundColor": "#dd524d", "width": 6, "height": 6, "borderRadius": 50 } }, "uni-calendar-item--extra": { "": { "color": "#dd524d", "opacity": 0.8 } }, "uni-calendar-item--checked": { ".uni-calendar-item__weeks-box ": { "backgroundColor": "#007aff", "borderRadius": 50, "boxSizing": "border-box", "borderWidth": 3, "borderStyle": "solid", "borderColor": "#ffffff" } }, "uni-calendar-item--checked-text": { ".uni-calendar-item--checked ": { "color": "#ffffff" }, ".uni-calendar-item--before-checked ": { "color": "#ffffff" }, ".uni-calendar-item--after-checked ": { "color": "#ffffff" } }, "uni-calendar-item--checked-range-text": { ".uni-calendar-item--multiple ": { "color": "#333333" } }, "uni-calendar-item--multiple": { "": { "backgroundColor": "#F6F7FC" } }, "uni-calendar-item--before-checked": { ".uni-calendar-item--multiple ": { "backgroundColor": "#007aff", "borderRadius": 50, "boxSizing": "border-box", "borderWidth": 3, "borderStyle": "solid", "borderColor": "#F6F7FC" } }, "uni-calendar-item--after-checked": { ".uni-calendar-item--multiple ": { "backgroundColor": "#007aff", "borderRadius": 50, "boxSizing": "border-box", "borderWidth": 3, "borderStyle": "solid", "borderColor": "#F6F7FC" } }, "uni-calendar-item--before-checked-x": { "": { "borderTopLeftRadius": 50, "borderBottomLeftRadius": 50, "boxSizing": "border-box", "backgroundColor": "#F6F7FC" } }, "uni-calendar-item--after-checked-x": { "": { "borderTopRightRadius": 50, "borderBottomRightRadius": 50, "backgroundColor": "#F6F7FC" } } };
  var _sfc_main$8 = {
    props: {
      weeks: {
        type: Object,
        default() {
          return {};
        }
      },
      calendar: {
        type: Object,
        default: () => {
          return {};
        }
      },
      selected: {
        type: Array,
        default: () => {
          return [];
        }
      },
      lunar: {
        type: Boolean,
        default: false
      },
      checkHover: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      choiceDate(weeks) {
        this.$emit("change", weeks);
      },
      handleMousemove(weeks) {
        this.$emit("handleMouse", weeks);
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
      "view",
      {
        class: (0, import_vue6.normalizeClass)(["uni-calendar-item__weeks-box", {
          "uni-calendar-item--disable": $props.weeks.disable,
          "uni-calendar-item--before-checked-x": $props.weeks.beforeMultiple,
          "uni-calendar-item--multiple": $props.weeks.multiple,
          "uni-calendar-item--after-checked-x": $props.weeks.afterMultiple
        }]),
        onClick: _cache[0] || (_cache[0] = ($event) => $options.choiceDate($props.weeks)),
        onMouseenter: _cache[1] || (_cache[1] = ($event) => $options.handleMousemove($props.weeks)),
        renderWhole: true
      },
      [
        (0, import_vue6.createElementVNode)(
          "view",
          {
            class: (0, import_vue6.normalizeClass)(["uni-calendar-item__weeks-box-item", {
              "uni-calendar-item--checked": $props.calendar.fullDate === $props.weeks.fullDate && ($props.calendar.userChecked || !$props.checkHover),
              "uni-calendar-item--checked-range-text": $props.checkHover,
              "uni-calendar-item--before-checked": $props.weeks.beforeMultiple,
              "uni-calendar-item--multiple": $props.weeks.multiple,
              "uni-calendar-item--after-checked": $props.weeks.afterMultiple,
              "uni-calendar-item--disable": $props.weeks.disable
            }])
          },
          [
            $props.selected && $props.weeks.extraInfo ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("u-text", {
              key: 0,
              class: "uni-calendar-item__weeks-box-circle"
            })) : (0, import_vue6.createCommentVNode)("v-if", true),
            (0, import_vue6.createElementVNode)(
              "u-text",
              { class: "uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text" },
              (0, import_vue6.toDisplayString)($props.weeks.date),
              1
              /* TEXT */
            )
          ],
          2
          /* CLASS */
        ),
        (0, import_vue6.createElementVNode)(
          "view",
          {
            class: (0, import_vue6.normalizeClass)({ "uni-calendar-item--isDay": $props.weeks.isDay })
          },
          null,
          2
          /* CLASS */
        )
      ],
      34
      /* CLASS, NEED_HYDRATION */
    );
  }
  var calendarItem = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["styles", [_style_0$8]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/uni_modules/uni-datetime-picker/components/uni-datetime-picker/calendar-item.vue"]]);
  var en2 = {
    "uni-datetime-picker.selectDate": "select date",
    "uni-datetime-picker.selectTime": "select time",
    "uni-datetime-picker.selectDateTime": "select datetime",
    "uni-datetime-picker.startDate": "start date",
    "uni-datetime-picker.endDate": "end date",
    "uni-datetime-picker.startTime": "start time",
    "uni-datetime-picker.endTime": "end time",
    "uni-datetime-picker.ok": "ok",
    "uni-datetime-picker.clear": "clear",
    "uni-datetime-picker.cancel": "cancel",
    "uni-datetime-picker.year": "-",
    "uni-datetime-picker.month": "",
    "uni-calender.MON": "MON",
    "uni-calender.TUE": "TUE",
    "uni-calender.WED": "WED",
    "uni-calender.THU": "THU",
    "uni-calender.FRI": "FRI",
    "uni-calender.SAT": "SAT",
    "uni-calender.SUN": "SUN",
    "uni-calender.confirm": "confirm"
  };
  var zhHans = {
    "uni-datetime-picker.selectDate": "\u9009\u62E9\u65E5\u671F",
    "uni-datetime-picker.selectTime": "\u9009\u62E9\u65F6\u95F4",
    "uni-datetime-picker.selectDateTime": "\u9009\u62E9\u65E5\u671F\u65F6\u95F4",
    "uni-datetime-picker.startDate": "\u5F00\u59CB\u65E5\u671F",
    "uni-datetime-picker.endDate": "\u7ED3\u675F\u65E5\u671F",
    "uni-datetime-picker.startTime": "\u5F00\u59CB\u65F6\u95F4",
    "uni-datetime-picker.endTime": "\u7ED3\u675F\u65F6\u95F4",
    "uni-datetime-picker.ok": "\u786E\u5B9A",
    "uni-datetime-picker.clear": "\u6E05\u9664",
    "uni-datetime-picker.cancel": "\u53D6\u6D88",
    "uni-datetime-picker.year": "\u5E74",
    "uni-datetime-picker.month": "\u6708",
    "uni-calender.SUN": "\u65E5",
    "uni-calender.MON": "\u4E00",
    "uni-calender.TUE": "\u4E8C",
    "uni-calender.WED": "\u4E09",
    "uni-calender.THU": "\u56DB",
    "uni-calender.FRI": "\u4E94",
    "uni-calender.SAT": "\u516D",
    "uni-calender.confirm": "\u786E\u8BA4"
  };
  var zhHant = {
    "uni-datetime-picker.selectDate": "\u9078\u64C7\u65E5\u671F",
    "uni-datetime-picker.selectTime": "\u9078\u64C7\u6642\u9593",
    "uni-datetime-picker.selectDateTime": "\u9078\u64C7\u65E5\u671F\u6642\u9593",
    "uni-datetime-picker.startDate": "\u958B\u59CB\u65E5\u671F",
    "uni-datetime-picker.endDate": "\u7D50\u675F\u65E5\u671F",
    "uni-datetime-picker.startTime": "\u958B\u59CB\u65F6\u95F4",
    "uni-datetime-picker.endTime": "\u7D50\u675F\u65F6\u95F4",
    "uni-datetime-picker.ok": "\u78BA\u5B9A",
    "uni-datetime-picker.clear": "\u6E05\u9664",
    "uni-datetime-picker.cancel": "\u53D6\u6D88",
    "uni-datetime-picker.year": "\u5E74",
    "uni-datetime-picker.month": "\u6708",
    "uni-calender.SUN": "\u65E5",
    "uni-calender.MON": "\u4E00",
    "uni-calender.TUE": "\u4E8C",
    "uni-calender.WED": "\u4E09",
    "uni-calender.THU": "\u56DB",
    "uni-calender.FRI": "\u4E94",
    "uni-calender.SAT": "\u516D",
    "uni-calender.confirm": "\u78BA\u8A8D"
  };
  var messages = {
    en: en2,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  var _style_0$7 = { "uni-datetime-picker-view": { "": { "height": 130, "width": 270 } }, "uni-datetime-picker-item": { "": { "height": 50, "lineHeight": 50, "textAlign": "center", "fontSize": 14 } }, "uni-datetime-picker-btn": { "": { "marginTop": 60, "flexDirection": "row", "justifyContent": "space-between" } }, "uni-datetime-picker-btn-text": { "": { "fontSize": 14, "color": "#007aff" } }, "uni-datetime-picker-btn-group": { "": { "flexDirection": "row" } }, "uni-datetime-picker-cancel": { "": { "marginRight": 30 } }, "uni-datetime-picker-mask": { "": { "position": "fixed", "bottom": 0, "top": 0, "left": 0, "right": 0, "backgroundColor": "rgba(0,0,0,0.4)", "transitionDuration": 300, "zIndex": 998 } }, "uni-datetime-picker-popup": { "": { "borderRadius": 8, "paddingTop": 30, "paddingRight": 30, "paddingBottom": 30, "paddingLeft": 30, "width": 330, "height": 500, "backgroundColor": "#ffffff", "position": "fixed", "top": 50, "left": 50, "transform": "translate(-50%, -50%)", "transitionDuration": 300, "zIndex": 999 } }, "fix-nvue-height": { "": { "height": 330 } }, "uni-datetime-picker-time": { "": { "color": "#808080" } }, "uni-datetime-picker-column": { "": { "height": 50 } }, "uni-datetime-picker-timebox": { "": { "borderWidth": 1, "borderStyle": "solid", "borderColor": "#E5E5E5", "borderRadius": 5, "paddingTop": 7, "paddingRight": 10, "paddingBottom": 7, "paddingLeft": 10 } }, "uni-datetime-picker-disabled": { "": { "opacity": 0.4 } }, "uni-datetime-picker-text": { "": { "fontSize": 14, "lineHeight": 50 } }, "uni-datetime-picker-sign": { "": { "position": "absolute", "top": 53, "color": "#999999", "fontSize": 16 } }, "sign-left": { "": { "left": 86 } }, "sign-right": { "": { "right": 86 } }, "sign-center": { "": { "left": 135 } }, "uni-datetime-picker__container-box": { "": { "position": "relative", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginTop": 40 } }, "time-hide-second": { "": { "width": 180 } }, "@TRANSITION": { "uni-datetime-picker-mask": { "duration": 300 }, "uni-datetime-picker-popup": { "duration": 300 } } };
  var { t: t$2 } = initVueI18n(messages);
  var _sfc_main$7 = {
    name: "UniDatetimePicker",
    components: {},
    data() {
      return {
        indicatorStyle: `height: 50px;`,
        visible: false,
        fixNvueBug: {},
        dateShow: true,
        timeShow: true,
        title: "\u65E5\u671F\u548C\u65F6\u95F4",
        // 输入框当前时间
        time: "",
        // 当前的年月日时分秒
        year: 1920,
        month: 0,
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
        // 起始时间
        startYear: 1920,
        startMonth: 1,
        startDay: 1,
        startHour: 0,
        startMinute: 0,
        startSecond: 0,
        // 结束时间
        endYear: 2120,
        endMonth: 12,
        endDay: 31,
        endHour: 23,
        endMinute: 59,
        endSecond: 59
      };
    },
    props: {
      type: {
        type: String,
        default: "datetime"
      },
      value: {
        type: [String, Number],
        default: ""
      },
      modelValue: {
        type: [String, Number],
        default: ""
      },
      start: {
        type: [Number, String],
        default: ""
      },
      end: {
        type: [Number, String],
        default: ""
      },
      returnType: {
        type: String,
        default: "string"
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: [Boolean, String],
        default: true
      },
      hideSecond: {
        type: [Boolean, String],
        default: false
      }
    },
    watch: {
      value: {
        handler(newVal, oldVal) {
          if (newVal) {
            this.parseValue(this.fixIosDateFormat(newVal));
            this.initTime(false);
          } else {
            this.time = "";
            this.parseValue(Date.now());
          }
        },
        immediate: true
      },
      type: {
        handler(newValue) {
          if (newValue === "date") {
            this.dateShow = true;
            this.timeShow = false;
            this.title = "\u65E5\u671F";
          } else if (newValue === "time") {
            this.dateShow = false;
            this.timeShow = true;
            this.title = "\u65F6\u95F4";
          } else {
            this.dateShow = true;
            this.timeShow = true;
            this.title = "\u65E5\u671F\u548C\u65F6\u95F4";
          }
        },
        immediate: true
      },
      start: {
        handler(newVal) {
          this.parseDatetimeRange(this.fixIosDateFormat(newVal), "start");
        },
        immediate: true
      },
      end: {
        handler(newVal) {
          this.parseDatetimeRange(this.fixIosDateFormat(newVal), "end");
        },
        immediate: true
      },
      // 月、日、时、分、秒可选范围变化后，检查当前值是否在范围内，不在则当前值重置为可选范围第一项
      months(newVal) {
        this.checkValue("month", this.month, newVal);
      },
      days(newVal) {
        this.checkValue("day", this.day, newVal);
      },
      hours(newVal) {
        this.checkValue("hour", this.hour, newVal);
      },
      minutes(newVal) {
        this.checkValue("minute", this.minute, newVal);
      },
      seconds(newVal) {
        this.checkValue("second", this.second, newVal);
      }
    },
    computed: {
      // 当前年、月、日、时、分、秒选择范围
      years() {
        return this.getCurrentRange("year");
      },
      months() {
        return this.getCurrentRange("month");
      },
      days() {
        return this.getCurrentRange("day");
      },
      hours() {
        return this.getCurrentRange("hour");
      },
      minutes() {
        return this.getCurrentRange("minute");
      },
      seconds() {
        return this.getCurrentRange("second");
      },
      // picker 当前值数组
      ymd() {
        return [this.year - this.minYear, this.month - this.minMonth, this.day - this.minDay];
      },
      hms() {
        return [this.hour - this.minHour, this.minute - this.minMinute, this.second - this.minSecond];
      },
      // 当前 date 是 start
      currentDateIsStart() {
        return this.year === this.startYear && this.month === this.startMonth && this.day === this.startDay;
      },
      // 当前 date 是 end
      currentDateIsEnd() {
        return this.year === this.endYear && this.month === this.endMonth && this.day === this.endDay;
      },
      // 当前年、月、日、时、分、秒的最小值和最大值
      minYear() {
        return this.startYear;
      },
      maxYear() {
        return this.endYear;
      },
      minMonth() {
        if (this.year === this.startYear) {
          return this.startMonth;
        } else {
          return 1;
        }
      },
      maxMonth() {
        if (this.year === this.endYear) {
          return this.endMonth;
        } else {
          return 12;
        }
      },
      minDay() {
        if (this.year === this.startYear && this.month === this.startMonth) {
          return this.startDay;
        } else {
          return 1;
        }
      },
      maxDay() {
        if (this.year === this.endYear && this.month === this.endMonth) {
          return this.endDay;
        } else {
          return this.daysInMonth(this.year, this.month);
        }
      },
      minHour() {
        if (this.type === "datetime") {
          if (this.currentDateIsStart) {
            return this.startHour;
          } else {
            return 0;
          }
        }
        if (this.type === "time") {
          return this.startHour;
        }
      },
      maxHour() {
        if (this.type === "datetime") {
          if (this.currentDateIsEnd) {
            return this.endHour;
          } else {
            return 23;
          }
        }
        if (this.type === "time") {
          return this.endHour;
        }
      },
      minMinute() {
        if (this.type === "datetime") {
          if (this.currentDateIsStart && this.hour === this.startHour) {
            return this.startMinute;
          } else {
            return 0;
          }
        }
        if (this.type === "time") {
          if (this.hour === this.startHour) {
            return this.startMinute;
          } else {
            return 0;
          }
        }
      },
      maxMinute() {
        if (this.type === "datetime") {
          if (this.currentDateIsEnd && this.hour === this.endHour) {
            return this.endMinute;
          } else {
            return 59;
          }
        }
        if (this.type === "time") {
          if (this.hour === this.endHour) {
            return this.endMinute;
          } else {
            return 59;
          }
        }
      },
      minSecond() {
        if (this.type === "datetime") {
          if (this.currentDateIsStart && this.hour === this.startHour && this.minute === this.startMinute) {
            return this.startSecond;
          } else {
            return 0;
          }
        }
        if (this.type === "time") {
          if (this.hour === this.startHour && this.minute === this.startMinute) {
            return this.startSecond;
          } else {
            return 0;
          }
        }
      },
      maxSecond() {
        if (this.type === "datetime") {
          if (this.currentDateIsEnd && this.hour === this.endHour && this.minute === this.endMinute) {
            return this.endSecond;
          } else {
            return 59;
          }
        }
        if (this.type === "time") {
          if (this.hour === this.endHour && this.minute === this.endMinute) {
            return this.endSecond;
          } else {
            return 59;
          }
        }
      },
      /**
       * for i18n
       */
      selectTimeText() {
        return t$2("uni-datetime-picker.selectTime");
      },
      okText() {
        return t$2("uni-datetime-picker.ok");
      },
      clearText() {
        return t$2("uni-datetime-picker.clear");
      },
      cancelText() {
        return t$2("uni-datetime-picker.cancel");
      }
    },
    mounted() {
      const res = uni.getSystemInfoSync();
      this.fixNvueBug = {
        top: res.windowHeight / 2,
        left: res.windowWidth / 2
      };
    },
    methods: {
      /**
       * @param {Object} item
       * 小于 10 在前面加个 0
       */
      lessThanTen(item) {
        return item < 10 ? "0" + item : item;
      },
      /**
       * 解析时分秒字符串，例如：00:00:00
       * @param {String} timeString
       */
      parseTimeType(timeString) {
        if (timeString) {
          let timeArr = timeString.split(":");
          this.hour = Number(timeArr[0]);
          this.minute = Number(timeArr[1]);
          this.second = Number(timeArr[2]);
        }
      },
      /**
       * 解析选择器初始值，类型可以是字符串、时间戳，例如：2000-10-02、'08:30:00'、 1610695109000
       * @param {String | Number} datetime
       */
      initPickerValue(datetime) {
        let defaultValue = null;
        if (datetime) {
          defaultValue = this.compareValueWithStartAndEnd(datetime, this.start, this.end);
        } else {
          defaultValue = Date.now();
          defaultValue = this.compareValueWithStartAndEnd(defaultValue, this.start, this.end);
        }
        this.parseValue(defaultValue);
      },
      /**
       * 初始值规则：
       * - 用户设置初始值 value
       * 	- 设置了起始时间 start、终止时间 end，并 start < value < end，初始值为 value， 否则初始值为 start
       * 	- 只设置了起始时间 start，并 start < value，初始值为 value，否则初始值为 start
       * 	- 只设置了终止时间 end，并 value < end，初始值为 value，否则初始值为 end
       * 	- 无起始终止时间，则初始值为 value
       * - 无初始值 value，则初始值为当前本地时间 Date.now()
       * @param {Object} value
       * @param {Object} dateBase
       */
      compareValueWithStartAndEnd(value, start, end) {
        let winner = null;
        value = this.superTimeStamp(value);
        start = this.superTimeStamp(start);
        end = this.superTimeStamp(end);
        if (start && end) {
          if (value < start) {
            winner = new Date(start);
          } else if (value > end) {
            winner = new Date(end);
          } else {
            winner = new Date(value);
          }
        } else if (start && !end) {
          winner = start <= value ? new Date(value) : new Date(start);
        } else if (!start && end) {
          winner = value <= end ? new Date(value) : new Date(end);
        } else {
          winner = new Date(value);
        }
        return winner;
      },
      /**
       * 转换为可比较的时间戳，接受日期、时分秒、时间戳
       * @param {Object} value
       */
      superTimeStamp(value) {
        let dateBase = "";
        if (this.type === "time" && value && typeof value === "string") {
          const now = /* @__PURE__ */ new Date();
          const year = now.getFullYear();
          const month = now.getMonth() + 1;
          const day = now.getDate();
          dateBase = year + "/" + month + "/" + day + " ";
        }
        if (Number(value) && !isNaN(value)) {
          value = parseInt(value);
          dateBase = 0;
        }
        return this.createTimeStamp(dateBase + value);
      },
      /**
       * 解析默认值 value，字符串、时间戳
       * @param {Object} defaultTime
       */
      parseValue(value) {
        if (!value) {
          return;
        }
        if (this.type === "time" && typeof value === "string") {
          this.parseTimeType(value);
        } else {
          let defaultDate = null;
          defaultDate = new Date(value);
          if (this.type !== "time") {
            this.year = defaultDate.getFullYear();
            this.month = defaultDate.getMonth() + 1;
            this.day = defaultDate.getDate();
          }
          if (this.type !== "date") {
            this.hour = defaultDate.getHours();
            this.minute = defaultDate.getMinutes();
            this.second = defaultDate.getSeconds();
          }
        }
        if (this.hideSecond) {
          this.second = 0;
        }
      },
      /**
       * 解析可选择时间范围 start、end，年月日字符串、时间戳
       * @param {Object} defaultTime
       */
      parseDatetimeRange(point, pointType) {
        if (!point) {
          if (pointType === "start") {
            this.startYear = 1920;
            this.startMonth = 1;
            this.startDay = 1;
            this.startHour = 0;
            this.startMinute = 0;
            this.startSecond = 0;
          }
          if (pointType === "end") {
            this.endYear = 2120;
            this.endMonth = 12;
            this.endDay = 31;
            this.endHour = 23;
            this.endMinute = 59;
            this.endSecond = 59;
          }
          return;
        }
        if (this.type === "time") {
          const pointArr = point.split(":");
          this[pointType + "Hour"] = Number(pointArr[0]);
          this[pointType + "Minute"] = Number(pointArr[1]);
          this[pointType + "Second"] = Number(pointArr[2]);
        } else {
          if (!point) {
            pointType === "start" ? this.startYear = this.year - 60 : this.endYear = this.year + 60;
            return;
          }
          if (Number(point) && !isNaN(point)) {
            point = parseInt(point);
          }
          const hasTime = /[0-9]:[0-9]/;
          if (this.type === "datetime" && pointType === "end" && typeof point === "string" && !hasTime.test(
            point
          )) {
            point = point + " 23:59:59";
          }
          const pointDate = new Date(point);
          this[pointType + "Year"] = pointDate.getFullYear();
          this[pointType + "Month"] = pointDate.getMonth() + 1;
          this[pointType + "Day"] = pointDate.getDate();
          if (this.type === "datetime") {
            this[pointType + "Hour"] = pointDate.getHours();
            this[pointType + "Minute"] = pointDate.getMinutes();
            this[pointType + "Second"] = pointDate.getSeconds();
          }
        }
      },
      // 获取 年、月、日、时、分、秒 当前可选范围
      getCurrentRange(value) {
        const range = [];
        for (let i2 = this["min" + this.capitalize(value)]; i2 <= this["max" + this.capitalize(value)]; i2++) {
          range.push(i2);
        }
        return range;
      },
      // 字符串首字母大写
      capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      },
      // 检查当前值是否在范围内，不在则当前值重置为可选范围第一项
      checkValue(name, value, values) {
        if (values.indexOf(value) === -1) {
          this[name] = values[0];
        }
      },
      // 每个月的实际天数
      daysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
      },
      //兼容 iOS、safari 日期格式
      fixIosDateFormat(value) {
        if (typeof value === "string") {
          value = value.replace(/-/g, "/");
        }
        return value;
      },
      /**
       * 生成时间戳
       * @param {Object} time
       */
      createTimeStamp(time) {
        if (!time)
          return;
        if (typeof time === "number") {
          return time;
        } else {
          time = time.replace(/-/g, "/");
          if (this.type === "date") {
            time = time + " 00:00:00";
          }
          return Date.parse(time);
        }
      },
      /**
       * 生成日期或时间的字符串
       */
      createDomSting() {
        const yymmdd = this.year + "-" + this.lessThanTen(this.month) + "-" + this.lessThanTen(this.day);
        let hhmmss = this.lessThanTen(this.hour) + ":" + this.lessThanTen(this.minute);
        if (!this.hideSecond) {
          hhmmss = hhmmss + ":" + this.lessThanTen(this.second);
        }
        if (this.type === "date") {
          return yymmdd;
        } else if (this.type === "time") {
          return hhmmss;
        } else {
          return yymmdd + " " + hhmmss;
        }
      },
      /**
       * 初始化返回值，并抛出 change 事件
       */
      initTime(emit = true) {
        this.time = this.createDomSting();
        if (!emit)
          return;
        if (this.returnType === "timestamp" && this.type !== "time") {
          this.$emit("change", this.createTimeStamp(this.time));
          this.$emit("input", this.createTimeStamp(this.time));
          this.$emit("update:modelValue", this.createTimeStamp(this.time));
        } else {
          this.$emit("change", this.time);
          this.$emit("input", this.time);
          this.$emit("update:modelValue", this.time);
        }
      },
      /**
       * 用户选择日期或时间更新 data
       * @param {Object} e
       */
      bindDateChange(e2) {
        const val = e2.detail.value;
        this.year = this.years[val[0]];
        this.month = this.months[val[1]];
        this.day = this.days[val[2]];
      },
      bindTimeChange(e2) {
        const val = e2.detail.value;
        this.hour = this.hours[val[0]];
        this.minute = this.minutes[val[1]];
        this.second = this.seconds[val[2]];
      },
      /**
       * 初始化弹出层
       */
      initTimePicker() {
        if (this.disabled)
          return;
        const value = this.fixIosDateFormat(this.value);
        this.initPickerValue(value);
        this.visible = !this.visible;
      },
      /**
       * 触发或关闭弹框
       */
      tiggerTimePicker(e2) {
        this.visible = !this.visible;
      },
      /**
       * 用户点击“清空”按钮，清空当前值
       */
      clearTime() {
        this.time = "";
        this.$emit("change", this.time);
        this.$emit("input", this.time);
        this.$emit("update:modelValue", this.time);
        this.tiggerTimePicker();
      },
      /**
       * 用户点击“确定”按钮
       */
      setTime() {
        this.initTime();
        this.tiggerTimePicker();
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_picker_view_column = (0, import_vue6.resolveComponent)("picker-view-column");
    const _component_picker_view = (0, import_vue6.resolveComponent)("picker-view");
    return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
      class: "uni-datetime-picker",
      renderWhole: true
    }, [
      (0, import_vue6.createElementVNode)("view", {
        onClick: _cache[0] || (_cache[0] = (...args) => $options.initTimePicker && $options.initTimePicker(...args))
      }, [
        (0, import_vue6.renderSlot)(_ctx.$slots, "default", {}, () => [
          (0, import_vue6.createElementVNode)(
            "view",
            {
              class: (0, import_vue6.normalizeClass)(["uni-datetime-picker-timebox-pointer", { "uni-datetime-picker-disabled": $props.disabled, "uni-datetime-picker-timebox": $props.border }])
            },
            [
              (0, import_vue6.createElementVNode)(
                "u-text",
                { class: "uni-datetime-picker-text" },
                (0, import_vue6.toDisplayString)($data.time),
                1
                /* TEXT */
              ),
              !$data.time ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                key: 0,
                class: "uni-datetime-picker-time"
              }, [
                (0, import_vue6.createElementVNode)(
                  "u-text",
                  { class: "uni-datetime-picker-text" },
                  (0, import_vue6.toDisplayString)($options.selectTimeText),
                  1
                  /* TEXT */
                )
              ])) : (0, import_vue6.createCommentVNode)("v-if", true)
            ],
            2
            /* CLASS */
          )
        ])
      ]),
      $data.visible ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
        key: 0,
        id: "mask",
        class: "uni-datetime-picker-mask",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.tiggerTimePicker && $options.tiggerTimePicker(...args))
      })) : (0, import_vue6.createCommentVNode)("v-if", true),
      $data.visible ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
        "view",
        {
          key: 1,
          class: (0, import_vue6.normalizeClass)(["uni-datetime-picker-popup", [$data.dateShow && $data.timeShow ? "" : "fix-nvue-height"]]),
          style: (0, import_vue6.normalizeStyle)($data.fixNvueBug)
        },
        [
          (0, import_vue6.createElementVNode)("view", { class: "uni-title" }, [
            (0, import_vue6.createElementVNode)(
              "u-text",
              { class: "uni-datetime-picker-text" },
              (0, import_vue6.toDisplayString)($options.selectTimeText),
              1
              /* TEXT */
            )
          ]),
          $data.dateShow ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
            key: 0,
            class: "uni-datetime-picker__container-box"
          }, [
            (0, import_vue6.createVNode)(_component_picker_view, {
              class: "uni-datetime-picker-view",
              "indicator-style": $data.indicatorStyle,
              value: $options.ymd,
              onChange: $options.bindDateChange
            }, {
              default: (0, import_vue6.withCtx)(() => [
                (0, import_vue6.createVNode)(_component_picker_view_column, null, {
                  default: (0, import_vue6.withCtx)(() => [
                    ((0, import_vue6.openBlock)(true), (0, import_vue6.createElementBlock)(
                      import_vue6.Fragment,
                      null,
                      (0, import_vue6.renderList)($options.years, (item, index) => {
                        return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                          class: "uni-datetime-picker-item",
                          key: index
                        }, [
                          (0, import_vue6.createElementVNode)(
                            "u-text",
                            { class: "uni-datetime-picker-item" },
                            (0, import_vue6.toDisplayString)($options.lessThanTen(item)),
                            1
                            /* TEXT */
                          )
                        ]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]),
                  _: 1
                  /* STABLE */
                }),
                (0, import_vue6.createVNode)(_component_picker_view_column, null, {
                  default: (0, import_vue6.withCtx)(() => [
                    ((0, import_vue6.openBlock)(true), (0, import_vue6.createElementBlock)(
                      import_vue6.Fragment,
                      null,
                      (0, import_vue6.renderList)($options.months, (item, index) => {
                        return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                          class: "uni-datetime-picker-item",
                          key: index
                        }, [
                          (0, import_vue6.createElementVNode)(
                            "u-text",
                            { class: "uni-datetime-picker-item" },
                            (0, import_vue6.toDisplayString)($options.lessThanTen(item)),
                            1
                            /* TEXT */
                          )
                        ]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]),
                  _: 1
                  /* STABLE */
                }),
                (0, import_vue6.createVNode)(_component_picker_view_column, null, {
                  default: (0, import_vue6.withCtx)(() => [
                    ((0, import_vue6.openBlock)(true), (0, import_vue6.createElementBlock)(
                      import_vue6.Fragment,
                      null,
                      (0, import_vue6.renderList)($options.days, (item, index) => {
                        return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                          class: "uni-datetime-picker-item",
                          key: index
                        }, [
                          (0, import_vue6.createElementVNode)(
                            "u-text",
                            { class: "uni-datetime-picker-item" },
                            (0, import_vue6.toDisplayString)($options.lessThanTen(item)),
                            1
                            /* TEXT */
                          )
                        ]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["indicator-style", "value", "onChange"]),
            (0, import_vue6.createCommentVNode)(" \u517C\u5BB9 nvue \u4E0D\u652F\u6301\u4F2A\u7C7B "),
            (0, import_vue6.createElementVNode)("u-text", { class: "uni-datetime-picker-sign sign-left" }, "-"),
            (0, import_vue6.createElementVNode)("u-text", { class: "uni-datetime-picker-sign sign-right" }, "-")
          ])) : (0, import_vue6.createCommentVNode)("v-if", true),
          $data.timeShow ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
            key: 1,
            class: "uni-datetime-picker__container-box"
          }, [
            (0, import_vue6.createVNode)(_component_picker_view, {
              class: (0, import_vue6.normalizeClass)(["uni-datetime-picker-view", [$props.hideSecond ? "time-hide-second" : ""]]),
              "indicator-style": $data.indicatorStyle,
              value: $options.hms,
              onChange: $options.bindTimeChange
            }, {
              default: (0, import_vue6.withCtx)(() => [
                (0, import_vue6.createVNode)(_component_picker_view_column, null, {
                  default: (0, import_vue6.withCtx)(() => [
                    ((0, import_vue6.openBlock)(true), (0, import_vue6.createElementBlock)(
                      import_vue6.Fragment,
                      null,
                      (0, import_vue6.renderList)($options.hours, (item, index) => {
                        return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                          class: "uni-datetime-picker-item",
                          key: index
                        }, [
                          (0, import_vue6.createElementVNode)(
                            "u-text",
                            { class: "uni-datetime-picker-item" },
                            (0, import_vue6.toDisplayString)($options.lessThanTen(item)),
                            1
                            /* TEXT */
                          )
                        ]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]),
                  _: 1
                  /* STABLE */
                }),
                (0, import_vue6.createVNode)(_component_picker_view_column, null, {
                  default: (0, import_vue6.withCtx)(() => [
                    ((0, import_vue6.openBlock)(true), (0, import_vue6.createElementBlock)(
                      import_vue6.Fragment,
                      null,
                      (0, import_vue6.renderList)($options.minutes, (item, index) => {
                        return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                          class: "uni-datetime-picker-item",
                          key: index
                        }, [
                          (0, import_vue6.createElementVNode)(
                            "u-text",
                            { class: "uni-datetime-picker-item" },
                            (0, import_vue6.toDisplayString)($options.lessThanTen(item)),
                            1
                            /* TEXT */
                          )
                        ]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]),
                  _: 1
                  /* STABLE */
                }),
                !$props.hideSecond ? ((0, import_vue6.openBlock)(), (0, import_vue6.createBlock)(_component_picker_view_column, { key: 0 }, {
                  default: (0, import_vue6.withCtx)(() => [
                    ((0, import_vue6.openBlock)(true), (0, import_vue6.createElementBlock)(
                      import_vue6.Fragment,
                      null,
                      (0, import_vue6.renderList)($options.seconds, (item, index) => {
                        return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                          class: "uni-datetime-picker-item",
                          key: index
                        }, [
                          (0, import_vue6.createElementVNode)(
                            "u-text",
                            { class: "uni-datetime-picker-item" },
                            (0, import_vue6.toDisplayString)($options.lessThanTen(item)),
                            1
                            /* TEXT */
                          )
                        ]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]),
                  _: 1
                  /* STABLE */
                })) : (0, import_vue6.createCommentVNode)("v-if", true)
              ]),
              _: 1
              /* STABLE */
            }, 8, ["class", "indicator-style", "value", "onChange"]),
            (0, import_vue6.createCommentVNode)(" \u517C\u5BB9 nvue \u4E0D\u652F\u6301\u4F2A\u7C7B "),
            (0, import_vue6.createElementVNode)(
              "u-text",
              {
                class: (0, import_vue6.normalizeClass)(["uni-datetime-picker-sign", [$props.hideSecond ? "sign-center" : "sign-left"]])
              },
              ":",
              2
              /* CLASS */
            ),
            !$props.hideSecond ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("u-text", {
              key: 0,
              class: "uni-datetime-picker-sign sign-right"
            }, ":")) : (0, import_vue6.createCommentVNode)("v-if", true)
          ])) : (0, import_vue6.createCommentVNode)("v-if", true),
          (0, import_vue6.createElementVNode)("view", { class: "uni-datetime-picker-btn" }, [
            (0, import_vue6.createElementVNode)("view", {
              onClick: _cache[2] || (_cache[2] = (...args) => $options.clearTime && $options.clearTime(...args))
            }, [
              (0, import_vue6.createElementVNode)(
                "u-text",
                { class: "uni-datetime-picker-btn-text" },
                (0, import_vue6.toDisplayString)($options.clearText),
                1
                /* TEXT */
              )
            ]),
            (0, import_vue6.createElementVNode)("view", { class: "uni-datetime-picker-btn-group" }, [
              (0, import_vue6.createElementVNode)("view", {
                class: "uni-datetime-picker-cancel",
                onClick: _cache[3] || (_cache[3] = (...args) => $options.tiggerTimePicker && $options.tiggerTimePicker(...args))
              }, [
                (0, import_vue6.createElementVNode)(
                  "u-text",
                  { class: "uni-datetime-picker-btn-text" },
                  (0, import_vue6.toDisplayString)($options.cancelText),
                  1
                  /* TEXT */
                )
              ]),
              (0, import_vue6.createElementVNode)("view", {
                onClick: _cache[4] || (_cache[4] = (...args) => $options.setTime && $options.setTime(...args))
              }, [
                (0, import_vue6.createElementVNode)(
                  "u-text",
                  { class: "uni-datetime-picker-btn-text" },
                  (0, import_vue6.toDisplayString)($options.okText),
                  1
                  /* TEXT */
                )
              ])
            ])
          ])
        ],
        6
        /* CLASS, STYLE */
      )) : (0, import_vue6.createCommentVNode)("v-if", true)
    ]);
  }
  var timePicker = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["styles", [_style_0$7]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/uni_modules/uni-datetime-picker/components/uni-datetime-picker/time-picker.vue"]]);
  var _style_0$6 = { "uni-calendar": { "": { "flexDirection": "column" } }, "uni-calendar__mask": { "": { "position": "fixed", "bottom": 0, "top": 0, "left": 0, "right": 0, "backgroundColor": "rgba(0,0,0,0.4)", "transitionProperty": "opacity", "transitionDuration": 300, "opacity": 0 } }, "uni-calendar--mask-show": { "": { "opacity": 1 } }, "uni-calendar--fixed": { "": { "position": "fixed", "left": 0, "right": 0, "transitionProperty": "transform", "transitionDuration": 300, "transform": "translateY(460px)" } }, "uni-calendar--ani-show": { "": { "transform": "translateY(0)" } }, "uni-calendar__content": { "": { "backgroundColor": "#ffffff" } }, "uni-calendar__content-mobile": { "": { "borderTopLeftRadius": 10, "borderTopRightRadius": 10, "boxShadow": "0px 0px 5px 3px rgba(0, 0, 0, 0.1)" } }, "uni-calendar__header": { "": { "position": "relative", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "height": 50 } }, "uni-calendar__header-mobile": { "": { "paddingTop": 10, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10 } }, "uni-calendar--fixed-top": { "": { "flexDirection": "row", "justifyContent": "space-between", "borderTopColor": "rgba(0,0,0,0.4)", "borderTopStyle": "solid", "borderTopWidth": 1 } }, "uni-calendar--fixed-width": { "": { "width": 50 } }, "uni-calendar__backtoday": { "": { "position": "absolute", "right": 0, "top": "25rpx", "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 10, "height": 25, "lineHeight": 25, "fontSize": 12, "borderTopLeftRadius": 25, "borderBottomLeftRadius": 25, "color": "#ffffff", "backgroundColor": "#f1f1f1" } }, "uni-calendar__header-text": { "": { "textAlign": "center", "width": 100, "fontSize": 15, "color": "#666666" } }, "uni-calendar__button-text": { "": { "textAlign": "center", "width": 100, "fontSize": 14, "color": "#007aff" } }, "uni-calendar__header-btn-box": { "": { "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "width": 50, "height": 50 } }, "uni-calendar__header-btn": { "": { "width": 9, "height": 9, "borderLeftColor": "#808080", "borderLeftStyle": "solid", "borderLeftWidth": 1, "borderTopColor": "#555555", "borderTopStyle": "solid", "borderTopWidth": 1 } }, "uni-calendar--left": { "": { "transform": "rotate(-45deg)" } }, "uni-calendar--right": { "": { "transform": "rotate(135deg)" } }, "uni-calendar__weeks": { "": { "position": "relative", "flexDirection": "row" } }, "uni-calendar__weeks-item": { "": { "flex": 1 } }, "uni-calendar__weeks-day": { "": { "flex": 1, "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "height": 40, "borderBottomColor": "#F5F5F5", "borderBottomStyle": "solid", "borderBottomWidth": 1 } }, "uni-calendar__weeks-day-text": { "": { "fontSize": 12, "color": "#B2B2B2" } }, "uni-calendar__box": { "": { "position": "relative", "paddingBottom": 7 } }, "uni-calendar__box-bg": { "": { "justifyContent": "center", "alignItems": "center", "position": "absolute", "top": 0, "left": 0, "right": 0, "bottom": 0 } }, "uni-calendar__box-bg-text": { "": { "fontSize": 200, "fontWeight": "bold", "color": "#999999", "opacity": 0.1, "textAlign": "center" } }, "uni-date-changed": { "": { "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10, "textAlign": "center", "color": "#333333", "borderTopColor": "#DCDCDC", "borderTopStyle": "solid", "borderTopWidth": 1, "flex": 1 } }, "uni-date-btn--ok": { "": { "paddingTop": 20, "paddingRight": 15, "paddingBottom": 20, "paddingLeft": 15 } }, "uni-date-changed--time-start": { "": { "alignItems": "center" } }, "uni-date-changed--time-end": { "": { "alignItems": "center" } }, "uni-date-changed--time-date": { "": { "color": "#999999", "lineHeight": 50, "marginRight": 5 } }, "time-picker-style": { "": { "justifyContent": "center", "alignItems": "center" } }, "mr-10": { "": { "marginRight": 10 } }, "dialog-close": { "": { "position": "absolute", "top": 0, "right": 0, "bottom": 0, "flexDirection": "row", "alignItems": "center", "paddingTop": 0, "paddingRight": 25, "paddingBottom": 0, "paddingLeft": 25, "marginTop": 10 } }, "dialog-close-plus": { "": { "width": 16, "height": 2, "backgroundColor": "#737987", "borderRadius": 2, "transform": "rotate(45deg)" } }, "dialog-close-rotate": { "": { "position": "absolute", "transform": "rotate(-45deg)" } }, "uni-datetime-picker--btn": { "": { "borderRadius": 100, "height": 40, "lineHeight": 40, "backgroundColor": "#007aff", "color": "#ffffff", "fontSize": 16, "letterSpacing": "2px" } }, "@TRANSITION": { "uni-calendar__mask": { "property": "opacity", "duration": 300 }, "uni-calendar--fixed": { "property": "transform", "duration": 300 } } };
  var {
    t: t$1
  } = initVueI18n(messages);
  var _sfc_main$6 = {
    components: {
      calendarItem,
      timePicker
    },
    props: {
      date: {
        type: String,
        default: ""
      },
      defTime: {
        type: [String, Object],
        default: ""
      },
      selectableTimes: {
        type: [Object],
        default() {
          return {};
        }
      },
      selected: {
        type: Array,
        default() {
          return [];
        }
      },
      lunar: {
        type: Boolean,
        default: false
      },
      startDate: {
        type: String,
        default: ""
      },
      endDate: {
        type: String,
        default: ""
      },
      range: {
        type: Boolean,
        default: false
      },
      typeHasTime: {
        type: Boolean,
        default: false
      },
      insert: {
        type: Boolean,
        default: true
      },
      showMonth: {
        type: Boolean,
        default: true
      },
      clearDate: {
        type: Boolean,
        default: true
      },
      left: {
        type: Boolean,
        default: true
      },
      right: {
        type: Boolean,
        default: true
      },
      checkHover: {
        type: Boolean,
        default: true
      },
      hideSecond: {
        type: [Boolean],
        default: false
      },
      pleStatus: {
        type: Object,
        default() {
          return {
            before: "",
            after: "",
            data: [],
            fulldate: ""
          };
        }
      }
    },
    data() {
      return {
        show: false,
        weeks: [],
        calendar: {},
        nowDate: "",
        aniMaskShow: false,
        firstEnter: true,
        time: "",
        timeRange: {
          startTime: "",
          endTime: ""
        },
        tempSingleDate: "",
        tempRange: {
          before: "",
          after: ""
        }
      };
    },
    watch: {
      date: {
        immediate: true,
        handler(newVal, oldVal) {
          if (!this.range) {
            this.tempSingleDate = newVal;
            setTimeout(() => {
              this.init(newVal);
            }, 100);
          }
        }
      },
      defTime: {
        immediate: true,
        handler(newVal, oldVal) {
          if (!this.range) {
            this.time = newVal;
          } else {
            this.timeRange.startTime = newVal.start;
            this.timeRange.endTime = newVal.end;
          }
        }
      },
      startDate(val) {
        this.cale.resetSatrtDate(val);
        this.cale.setDate(this.nowDate.fullDate);
        this.weeks = this.cale.weeks;
      },
      endDate(val) {
        this.cale.resetEndDate(val);
        this.cale.setDate(this.nowDate.fullDate);
        this.weeks = this.cale.weeks;
      },
      selected(newVal) {
        this.cale.setSelectInfo(this.nowDate.fullDate, newVal);
        this.weeks = this.cale.weeks;
      },
      pleStatus: {
        immediate: true,
        handler(newVal, oldVal) {
          const {
            before,
            after,
            fulldate,
            which
          } = newVal;
          this.tempRange.before = before;
          this.tempRange.after = after;
          setTimeout(() => {
            if (fulldate) {
              this.cale.setHoverMultiple(fulldate);
              if (before && after) {
                this.cale.lastHover = true;
                if (this.rangeWithinMonth(after, before))
                  return;
                this.setDate(before);
              } else {
                this.cale.setMultiple(fulldate);
                this.setDate(this.nowDate.fullDate);
                this.calendar.fullDate = "";
                this.cale.lastHover = false;
              }
            } else {
              this.cale.setDefaultMultiple(before, after);
              if (which === "left") {
                this.setDate(before);
                this.weeks = this.cale.weeks;
              } else {
                this.setDate(after);
                this.weeks = this.cale.weeks;
              }
              this.cale.lastHover = true;
            }
          }, 16);
        }
      }
    },
    computed: {
      reactStartTime() {
        const activeDate = this.range ? this.tempRange.before : this.calendar.fullDate;
        const res = activeDate === this.startDate ? this.selectableTimes.start : "";
        return res;
      },
      reactEndTime() {
        const activeDate = this.range ? this.tempRange.after : this.calendar.fullDate;
        const res = activeDate === this.endDate ? this.selectableTimes.end : "";
        return res;
      },
      /**
       * for i18n
       */
      selectDateText() {
        return t$1("uni-datetime-picker.selectDate");
      },
      startDateText() {
        return this.startPlaceholder || t$1("uni-datetime-picker.startDate");
      },
      endDateText() {
        return this.endPlaceholder || t$1("uni-datetime-picker.endDate");
      },
      okText() {
        return t$1("uni-datetime-picker.ok");
      },
      yearText() {
        return t$1("uni-datetime-picker.year");
      },
      monthText() {
        return t$1("uni-datetime-picker.month");
      },
      MONText() {
        return t$1("uni-calender.MON");
      },
      TUEText() {
        return t$1("uni-calender.TUE");
      },
      WEDText() {
        return t$1("uni-calender.WED");
      },
      THUText() {
        return t$1("uni-calender.THU");
      },
      FRIText() {
        return t$1("uni-calender.FRI");
      },
      SATText() {
        return t$1("uni-calender.SAT");
      },
      SUNText() {
        return t$1("uni-calender.SUN");
      },
      confirmText() {
        return t$1("uni-calender.confirm");
      }
    },
    created() {
      this.cale = new Calendar({
        // date: new Date(),
        selected: this.selected,
        startDate: this.startDate,
        endDate: this.endDate,
        range: this.range
        // multipleStatus: this.pleStatus
      });
      this.init(this.date);
    },
    methods: {
      leaveCale() {
        this.firstEnter = true;
      },
      handleMouse(weeks) {
        if (weeks.disable)
          return;
        if (this.cale.lastHover)
          return;
        let {
          before,
          after
        } = this.cale.multipleStatus;
        if (!before)
          return;
        this.calendar = weeks;
        this.cale.setHoverMultiple(this.calendar.fullDate);
        this.weeks = this.cale.weeks;
        if (this.firstEnter) {
          this.$emit("firstEnterCale", this.cale.multipleStatus);
          this.firstEnter = false;
        }
      },
      rangeWithinMonth(A2, B2) {
        const [yearA, monthA] = A2.split("-");
        const [yearB, monthB] = B2.split("-");
        return yearA === yearB && monthA === monthB;
      },
      // 取消穿透
      clean() {
        this.close();
      },
      // 蒙版点击事件
      maskClick() {
        this.$emit("maskClose");
      },
      clearCalender() {
        if (this.range) {
          this.timeRange.startTime = "";
          this.timeRange.endTime = "";
          this.tempRange.before = "";
          this.tempRange.after = "";
          this.cale.multipleStatus.before = "";
          this.cale.multipleStatus.after = "";
          this.cale.multipleStatus.data = [];
          this.cale.lastHover = false;
        } else {
          this.time = "";
          this.tempSingleDate = "";
        }
        this.calendar.fullDate = "";
        this.setDate();
      },
      bindDateChange(e2) {
        const value = e2.detail.value + "-1";
        this.init(value);
      },
      /**
       * 初始化日期显示
       * @param {Object} date
       */
      init(date) {
        this.cale.setDate(date);
        this.weeks = this.cale.weeks;
        this.nowDate = this.calendar = this.cale.getInfo(date);
      },
      // choiceDate(weeks) {
      // 	if (weeks.disable) return
      // 	this.calendar = weeks
      // 	// 设置多选
      // 	this.cale.setMultiple(this.calendar.fullDate, true)
      // 	this.weeks = this.cale.weeks
      // 	this.tempSingleDate = this.calendar.fullDate
      // 	this.tempRange.before = this.cale.multipleStatus.before
      // 	this.tempRange.after = this.cale.multipleStatus.after
      // 	this.change()
      // },
      /**
       * 打开日历弹窗
       */
      open() {
        if (this.clearDate && !this.insert) {
          this.cale.cleanMultipleStatus();
          this.init(this.date);
        }
        this.show = true;
        this.$nextTick(() => {
          setTimeout(() => {
            this.aniMaskShow = true;
          }, 50);
        });
      },
      /**
       * 关闭日历弹窗
       */
      close() {
        this.aniMaskShow = false;
        this.$nextTick(() => {
          setTimeout(() => {
            this.show = false;
            this.$emit("close");
          }, 300);
        });
      },
      /**
       * 确认按钮
       */
      confirm() {
        this.setEmit("confirm");
        this.close();
      },
      /**
       * 变化触发
       */
      change() {
        if (!this.insert)
          return;
        this.setEmit("change");
      },
      /**
       * 选择月份触发
       */
      monthSwitch() {
        let {
          year,
          month
        } = this.nowDate;
        this.$emit("monthSwitch", {
          year,
          month: Number(month)
        });
      },
      /**
       * 派发事件
       * @param {Object} name
       */
      setEmit(name) {
        let {
          year,
          month,
          date,
          fullDate,
          lunar,
          extraInfo
        } = this.calendar;
        this.$emit(name, {
          range: this.cale.multipleStatus,
          year,
          month,
          date,
          time: this.time,
          timeRange: this.timeRange,
          fulldate: fullDate,
          lunar,
          extraInfo: extraInfo || {}
        });
      },
      /**
       * 选择天触发
       * @param {Object} weeks
       */
      choiceDate(weeks) {
        if (weeks.disable)
          return;
        this.calendar = weeks;
        this.calendar.userChecked = true;
        this.cale.setMultiple(this.calendar.fullDate, true);
        this.weeks = this.cale.weeks;
        this.tempSingleDate = this.calendar.fullDate;
        this.cale.multipleStatus.before;
        const beforeDate = new Date(this.cale.multipleStatus.before).getTime();
        const afterDate = new Date(this.cale.multipleStatus.after).getTime();
        if (beforeDate > afterDate && afterDate) {
          this.tempRange.before = this.cale.multipleStatus.after;
          this.tempRange.after = this.cale.multipleStatus.before;
        } else {
          this.tempRange.before = this.cale.multipleStatus.before;
          this.tempRange.after = this.cale.multipleStatus.after;
        }
        this.change();
      },
      /**
       * 回到今天
       */
      backtoday() {
        let date = this.cale.getDate(/* @__PURE__ */ new Date()).fullDate;
        this.init(date);
        this.change();
      },
      /**
       * 比较时间大小
       */
      dateCompare(startDate, endDate) {
        startDate = new Date(startDate.replace("-", "/").replace("-", "/"));
        endDate = new Date(endDate.replace("-", "/").replace("-", "/"));
        if (startDate <= endDate) {
          return true;
        } else {
          return false;
        }
      },
      /**
       * 上个月
       */
      pre() {
        const preDate = this.cale.getDate(this.nowDate.fullDate, -1, "month").fullDate;
        this.setDate(preDate);
        this.monthSwitch();
      },
      /**
       * 下个月
       */
      next() {
        const nextDate = this.cale.getDate(this.nowDate.fullDate, 1, "month").fullDate;
        this.setDate(nextDate);
        this.monthSwitch();
      },
      /**
       * 设置日期
       * @param {Object} date
       */
      setDate(date) {
        this.cale.setDate(date);
        this.weeks = this.cale.weeks;
        this.nowDate = this.cale.getInfo(date);
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_picker = (0, import_vue6.resolveComponent)("picker");
    const _component_calendar_item = (0, import_vue6.resolveComponent)("calendar-item");
    const _component_time_picker = (0, import_vue6.resolveComponent)("time-picker");
    const _component_uni_icons = resolveEasycom((0, import_vue6.resolveDynamicComponent)("uni-icons"), __easycom_1);
    return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
      "view",
      {
        class: "uni-calendar",
        onMouseleave: _cache[8] || (_cache[8] = (...args) => $options.leaveCale && $options.leaveCale(...args)),
        renderWhole: true
      },
      [
        !$props.insert && $data.show ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
          "view",
          {
            key: 0,
            class: (0, import_vue6.normalizeClass)(["uni-calendar__mask", { "uni-calendar--mask-show": $data.aniMaskShow }]),
            onClick: _cache[0] || (_cache[0] = ($event) => {
              $options.clean();
              $options.maskClick();
            })
          },
          null,
          2
          /* CLASS */
        )) : (0, import_vue6.createCommentVNode)("v-if", true),
        $props.insert || $data.show ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
          "view",
          {
            key: 1,
            class: (0, import_vue6.normalizeClass)(["uni-calendar__content", { "uni-calendar--fixed": !$props.insert, "uni-calendar--ani-show": $data.aniMaskShow, "uni-calendar__content-mobile": $data.aniMaskShow }])
          },
          [
            (0, import_vue6.createElementVNode)(
              "view",
              {
                class: (0, import_vue6.normalizeClass)(["uni-calendar__header", { "uni-calendar__header-mobile": !$props.insert }])
              },
              [
                $props.left ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                  key: 0,
                  class: "uni-calendar__header-btn-box",
                  onClick: _cache[1] || (_cache[1] = (0, import_vue6.withModifiers)((...args) => $options.pre && $options.pre(...args), ["stop"]))
                }, [
                  (0, import_vue6.createElementVNode)("view", { class: "uni-calendar__header-btn uni-calendar--left" })
                ])) : (0, import_vue6.createCommentVNode)("v-if", true),
                (0, import_vue6.createVNode)(_component_picker, {
                  mode: "date",
                  value: $props.date,
                  fields: "month",
                  onChange: $options.bindDateChange
                }, {
                  default: (0, import_vue6.withCtx)(() => [
                    (0, import_vue6.createElementVNode)(
                      "u-text",
                      { class: "uni-calendar__header-text" },
                      (0, import_vue6.toDisplayString)(($data.nowDate.year || "") + $options.yearText + ($data.nowDate.month || "") + $options.monthText),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["value", "onChange"]),
                $props.right ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                  key: 1,
                  class: "uni-calendar__header-btn-box",
                  onClick: _cache[2] || (_cache[2] = (0, import_vue6.withModifiers)((...args) => $options.next && $options.next(...args), ["stop"]))
                }, [
                  (0, import_vue6.createElementVNode)("view", { class: "uni-calendar__header-btn uni-calendar--right" })
                ])) : (0, import_vue6.createCommentVNode)("v-if", true),
                !$props.insert ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                  key: 2,
                  class: "dialog-close",
                  onClick: _cache[3] || (_cache[3] = (...args) => $options.clean && $options.clean(...args))
                }, [
                  (0, import_vue6.createElementVNode)("view", {
                    class: "dialog-close-plus",
                    "data-id": "close"
                  }),
                  (0, import_vue6.createElementVNode)("view", {
                    class: "dialog-close-plus dialog-close-rotate",
                    "data-id": "close"
                  })
                ])) : (0, import_vue6.createCommentVNode)("v-if", true),
                (0, import_vue6.createCommentVNode)(' <text class="uni-calendar__backtoday" @click="backtoday">\u56DE\u5230\u4ECA\u5929</text> ')
              ],
              2
              /* CLASS */
            ),
            (0, import_vue6.createElementVNode)("view", { class: "uni-calendar__box" }, [
              $props.showMonth ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                key: 0,
                class: "uni-calendar__box-bg"
              }, [
                (0, import_vue6.createElementVNode)(
                  "u-text",
                  { class: "uni-calendar__box-bg-text" },
                  (0, import_vue6.toDisplayString)($data.nowDate.month),
                  1
                  /* TEXT */
                )
              ])) : (0, import_vue6.createCommentVNode)("v-if", true),
              (0, import_vue6.createElementVNode)("view", {
                class: "uni-calendar__weeks",
                style: { "padding-bottom": "7px" }
              }, [
                (0, import_vue6.createElementVNode)("view", { class: "uni-calendar__weeks-day" }, [
                  (0, import_vue6.createElementVNode)(
                    "u-text",
                    { class: "uni-calendar__weeks-day-text" },
                    (0, import_vue6.toDisplayString)($options.SUNText),
                    1
                    /* TEXT */
                  )
                ]),
                (0, import_vue6.createElementVNode)("view", { class: "uni-calendar__weeks-day" }, [
                  (0, import_vue6.createElementVNode)(
                    "u-text",
                    { class: "uni-calendar__weeks-day-text" },
                    (0, import_vue6.toDisplayString)($options.MONText),
                    1
                    /* TEXT */
                  )
                ]),
                (0, import_vue6.createElementVNode)("view", { class: "uni-calendar__weeks-day" }, [
                  (0, import_vue6.createElementVNode)(
                    "u-text",
                    { class: "uni-calendar__weeks-day-text" },
                    (0, import_vue6.toDisplayString)($options.TUEText),
                    1
                    /* TEXT */
                  )
                ]),
                (0, import_vue6.createElementVNode)("view", { class: "uni-calendar__weeks-day" }, [
                  (0, import_vue6.createElementVNode)(
                    "u-text",
                    { class: "uni-calendar__weeks-day-text" },
                    (0, import_vue6.toDisplayString)($options.WEDText),
                    1
                    /* TEXT */
                  )
                ]),
                (0, import_vue6.createElementVNode)("view", { class: "uni-calendar__weeks-day" }, [
                  (0, import_vue6.createElementVNode)(
                    "u-text",
                    { class: "uni-calendar__weeks-day-text" },
                    (0, import_vue6.toDisplayString)($options.THUText),
                    1
                    /* TEXT */
                  )
                ]),
                (0, import_vue6.createElementVNode)("view", { class: "uni-calendar__weeks-day" }, [
                  (0, import_vue6.createElementVNode)(
                    "u-text",
                    { class: "uni-calendar__weeks-day-text" },
                    (0, import_vue6.toDisplayString)($options.FRIText),
                    1
                    /* TEXT */
                  )
                ]),
                (0, import_vue6.createElementVNode)("view", { class: "uni-calendar__weeks-day" }, [
                  (0, import_vue6.createElementVNode)(
                    "u-text",
                    { class: "uni-calendar__weeks-day-text" },
                    (0, import_vue6.toDisplayString)($options.SATText),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              ((0, import_vue6.openBlock)(true), (0, import_vue6.createElementBlock)(
                import_vue6.Fragment,
                null,
                (0, import_vue6.renderList)($data.weeks, (item, weekIndex) => {
                  return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                    class: "uni-calendar__weeks",
                    key: weekIndex
                  }, [
                    ((0, import_vue6.openBlock)(true), (0, import_vue6.createElementBlock)(
                      import_vue6.Fragment,
                      null,
                      (0, import_vue6.renderList)(item, (weeks, weeksIndex) => {
                        return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                          class: "uni-calendar__weeks-item",
                          key: weeksIndex
                        }, [
                          (0, import_vue6.createVNode)(_component_calendar_item, {
                            class: "uni-calendar-item--hook",
                            weeks,
                            calendar: $data.calendar,
                            selected: $props.selected,
                            lunar: $props.lunar,
                            checkHover: $props.range,
                            onChange: $options.choiceDate,
                            onHandleMouse: $options.handleMouse
                          }, null, 8, ["weeks", "calendar", "selected", "lunar", "checkHover", "onChange", "onHandleMouse"])
                        ]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            !$props.insert && !$props.range && $props.typeHasTime ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
              key: 0,
              class: "uni-date-changed uni-calendar--fixed-top",
              style: { "padding": "0 80px" }
            }, [
              (0, import_vue6.createElementVNode)("view", { class: "uni-date-changed--time-date" }, [
                (0, import_vue6.createElementVNode)(
                  "u-text",
                  null,
                  (0, import_vue6.toDisplayString)($data.tempSingleDate ? $data.tempSingleDate : $options.selectDateText),
                  1
                  /* TEXT */
                )
              ]),
              (0, import_vue6.createVNode)(_component_time_picker, {
                type: "time",
                start: $options.reactStartTime,
                end: $options.reactEndTime,
                modelValue: $data.time,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.time = $event),
                disabled: !$data.tempSingleDate,
                border: false,
                "hide-second": $props.hideSecond,
                class: "time-picker-style"
              }, null, 8, ["start", "end", "modelValue", "disabled", "hide-second"])
            ])) : (0, import_vue6.createCommentVNode)("v-if", true),
            !$props.insert && $props.range && $props.typeHasTime ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
              key: 1,
              class: "uni-date-changed uni-calendar--fixed-top"
            }, [
              (0, import_vue6.createElementVNode)("view", { class: "uni-date-changed--time-start" }, [
                (0, import_vue6.createElementVNode)("view", { class: "uni-date-changed--time-date" }, [
                  (0, import_vue6.createElementVNode)(
                    "u-text",
                    null,
                    (0, import_vue6.toDisplayString)($data.tempRange.before ? $data.tempRange.before : $options.startDateText),
                    1
                    /* TEXT */
                  )
                ]),
                (0, import_vue6.createVNode)(_component_time_picker, {
                  type: "time",
                  start: $options.reactStartTime,
                  modelValue: $data.timeRange.startTime,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.timeRange.startTime = $event),
                  border: false,
                  "hide-second": $props.hideSecond,
                  disabled: !$data.tempRange.before,
                  class: "time-picker-style"
                }, null, 8, ["start", "modelValue", "hide-second", "disabled"])
              ]),
              (0, import_vue6.createElementVNode)("view", { style: { "line-height": "50px" } }, [
                (0, import_vue6.createVNode)(_component_uni_icons, {
                  type: "arrowthinright",
                  color: "#999"
                })
              ]),
              (0, import_vue6.createElementVNode)("view", { class: "uni-date-changed--time-end" }, [
                (0, import_vue6.createElementVNode)("view", { class: "uni-date-changed--time-date" }, [
                  (0, import_vue6.createElementVNode)(
                    "u-text",
                    null,
                    (0, import_vue6.toDisplayString)($data.tempRange.after ? $data.tempRange.after : $options.endDateText),
                    1
                    /* TEXT */
                  )
                ]),
                (0, import_vue6.createVNode)(_component_time_picker, {
                  type: "time",
                  end: $options.reactEndTime,
                  modelValue: $data.timeRange.endTime,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.timeRange.endTime = $event),
                  border: false,
                  "hide-second": $props.hideSecond,
                  disabled: !$data.tempRange.after,
                  class: "time-picker-style"
                }, null, 8, ["end", "modelValue", "hide-second", "disabled"])
              ])
            ])) : (0, import_vue6.createCommentVNode)("v-if", true),
            !$props.insert ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
              key: 2,
              class: "uni-date-changed uni-date-btn--ok"
            }, [
              (0, import_vue6.createCommentVNode)(' <view class="uni-calendar__header-btn-box">\n					<text class="uni-calendar__button-text uni-calendar--fixed-width">{{okText}}</text>\n				</view> '),
              (0, import_vue6.createElementVNode)("view", {
                class: "uni-datetime-picker--btn",
                onClick: _cache[7] || (_cache[7] = (...args) => $options.confirm && $options.confirm(...args))
              }, [
                (0, import_vue6.createElementVNode)(
                  "u-text",
                  null,
                  (0, import_vue6.toDisplayString)($options.confirmText),
                  1
                  /* TEXT */
                )
              ])
            ])) : (0, import_vue6.createCommentVNode)("v-if", true)
          ],
          2
          /* CLASS */
        )) : (0, import_vue6.createCommentVNode)("v-if", true)
      ],
      32
      /* NEED_HYDRATION */
    );
  }
  var calendar = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["styles", [_style_0$6]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/uni_modules/uni-datetime-picker/components/uni-datetime-picker/calendar.vue"]]);
  var _style_0$5 = { "uni-date": { "": { "flex": 1 } }, "uni-date-editor": { "": { "width": 100 } }, "uni-date-x": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10, "borderRadius": 4, "backgroundColor": "#ffffff", "color": "#666666", "fontSize": 14, "flex": 1 } }, "uni-date-x--border": { "": { "boxSizing": "border-box", "borderRadius": 4, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#e5e5e5" } }, "uni-date-editor--x": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "position": "relative" } }, "uni-date__icon-clear": { ".uni-date-editor--x ": { "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 5, "display": "flex", "alignItems": "center" } }, "uni-date__x-input": { "": { "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "position": "relative", "overflow": "hidden", "flex": 1, "lineHeight": 1, "fontSize": 14, "height": 35 } }, "t-c": { "": { "textAlign": "center" } }, "uni-date__input": { "": { "height": 40, "width": 100, "lineHeight": 40, "fontSize": 14 } }, "uni-date-range__input": { "": { "textAlign": "center", "maxWidth": "142px" } }, "uni-date-picker__container": { "": { "position": "relative" } }, "uni-date-mask": { "": { "position": "fixed", "bottom": 0, "top": 0, "left": 0, "right": 0, "backgroundColor": "rgba(0,0,0,0)", "transitionDuration": 300, "zIndex": 996 } }, "uni-date-single--x": { "": { "backgroundColor": "#ffffff", "position": "absolute", "top": 0, "right": 0, "zIndex": 999, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#EBEEF5", "boxShadow": "0 2px 12px 0 rgba(0, 0, 0, 0.1)", "borderRadius": 4 } }, "uni-date-range--x": { "": { "backgroundColor": "#ffffff", "position": "absolute", "top": 0, "zIndex": 999, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#EBEEF5", "boxShadow": "0 2px 12px 0 rgba(0, 0, 0, 0.1)", "borderRadius": 4 } }, "uni-date-editor--x__disabled": { "": { "opacity": 0.4, "cursor": "default" } }, "uni-date-editor--logo": { "": { "width": 16, "height": 16, "verticalAlign": "middle" } }, "popup-x-header": { "": { "flexDirection": "row" } }, "popup-x-header--datetime": { "": { "flexDirection": "row", "flex": 1 } }, "popup-x-body": { "": { "display": "flex" } }, "popup-x-footer": { "": { "paddingTop": 0, "paddingRight": 15, "paddingBottom": 0, "paddingLeft": 15, "borderTopColor": "#F1F1F1", "borderTopStyle": "solid", "borderTopWidth": 1, "lineHeight": 40, "textAlign": "right", "color": "#666666" } }, "confirm": { ".popup-x-footer ": { "marginLeft": 20, "color": "#007aff" } }, "uni-date-changed": { "": { "textAlign": "center", "color": "#333333", "borderBottomColor": "#F1F1F1", "borderBottomStyle": "solid", "borderBottomWidth": 1 } }, "uni-date-changed--time": { ".uni-date-changed ": { "flex": 1 } }, "uni-date-changed--time-date": { "": { "color": "#333333", "opacity": 0.6 } }, "mr-50": { "": { "marginRight": 50 } }, "uni-popper__arrow": { "": { "position::after": "absolute", "width::after": 0, "height::after": 0, "borderColor::after": "rgba(0,0,0,0)", "borderStyle::after": "solid", "borderWidth::after": 6, "filter": "drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03))", "top": -6, "right": 10, "marginRight": 3, "borderTopWidth": 0, "borderBottomColor": "#EBEEF5", "content::after": '" "', "top::after": 1, "marginLeft::after": -6, "borderTopWidth::after": 0, "borderBottomColor::after": "#ffffff" } }, "@TRANSITION": { "uni-date-mask": { "duration": 300 } } };
  var {
    t: t2
  } = initVueI18n(messages);
  var _sfc_main$5 = {
    name: "UniDatetimePicker",
    options: {
      virtualHost: true
    },
    components: {
      calendar,
      timePicker
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
    data() {
      return {
        isRange: false,
        hasTime: false,
        mobileRange: false,
        // 单选
        singleVal: "",
        tempSingleDate: "",
        defSingleDate: "",
        time: "",
        // 范围选
        caleRange: {
          startDate: "",
          startTime: "",
          endDate: "",
          endTime: ""
        },
        range: {
          startDate: "",
          // startTime: '',
          endDate: ""
          // endTime: ''
        },
        tempRange: {
          startDate: "",
          startTime: "",
          endDate: "",
          endTime: ""
        },
        // 左右日历同步数据
        startMultipleStatus: {
          before: "",
          after: "",
          data: [],
          fulldate: ""
        },
        endMultipleStatus: {
          before: "",
          after: "",
          data: [],
          fulldate: ""
        },
        visible: false,
        popup: false,
        popover: null,
        isEmitValue: false,
        isPhone: false,
        isFirstShow: true
      };
    },
    props: {
      type: {
        type: String,
        default: "datetime"
      },
      value: {
        type: [String, Number, Array, Date],
        default: ""
      },
      modelValue: {
        type: [String, Number, Array, Date],
        default: ""
      },
      start: {
        type: [Number, String],
        default: ""
      },
      end: {
        type: [Number, String],
        default: ""
      },
      returnType: {
        type: String,
        default: "string"
      },
      placeholder: {
        type: String,
        default: ""
      },
      startPlaceholder: {
        type: String,
        default: ""
      },
      endPlaceholder: {
        type: String,
        default: ""
      },
      rangeSeparator: {
        type: String,
        default: "-"
      },
      border: {
        type: [Boolean],
        default: true
      },
      disabled: {
        type: [Boolean],
        default: false
      },
      clearIcon: {
        type: [Boolean],
        default: true
      },
      hideSecond: {
        type: [Boolean],
        default: false
      }
    },
    watch: {
      type: {
        immediate: true,
        handler(newVal, oldVal) {
          if (newVal.indexOf("time") !== -1) {
            this.hasTime = true;
          } else {
            this.hasTime = false;
          }
          if (newVal.indexOf("range") !== -1) {
            this.isRange = true;
          } else {
            this.isRange = false;
          }
        }
      },
      modelValue: {
        immediate: true,
        handler(newVal, oldVal) {
          if (this.isEmitValue) {
            this.isEmitValue = false;
            return;
          }
          this.initPicker(newVal);
        }
      },
      start: {
        immediate: true,
        handler(newVal, oldVal) {
          if (!newVal)
            return;
          const {
            defDate,
            defTime
          } = this.parseDate(newVal);
          this.caleRange.startDate = defDate;
          if (this.hasTime) {
            this.caleRange.startTime = defTime;
          }
        }
      },
      end: {
        immediate: true,
        handler(newVal, oldVal) {
          if (!newVal)
            return;
          const {
            defDate,
            defTime
          } = this.parseDate(newVal);
          this.caleRange.endDate = defDate;
          if (this.hasTime) {
            this.caleRange.endTime = defTime;
          }
        }
      }
    },
    computed: {
      reactStartTime() {
        const activeDate = this.isRange ? this.tempRange.startDate : this.tempSingleDate;
        const res = activeDate === this.caleRange.startDate ? this.caleRange.startTime : "";
        return res;
      },
      reactEndTime() {
        const activeDate = this.isRange ? this.tempRange.endDate : this.tempSingleDate;
        const res = activeDate === this.caleRange.endDate ? this.caleRange.endTime : "";
        return res;
      },
      reactMobDefTime() {
        const times = {
          start: this.tempRange.startTime,
          end: this.tempRange.endTime
        };
        return this.isRange ? times : this.time;
      },
      mobSelectableTime() {
        return {
          start: this.caleRange.startTime,
          end: this.caleRange.endTime
        };
      },
      datePopupWidth() {
        return this.isRange ? 653 : 301;
      },
      /**
       * for i18n
       */
      singlePlaceholderText() {
        return this.placeholder || (this.type === "date" ? this.selectDateText : t2(
          "uni-datetime-picker.selectDateTime"
        ));
      },
      startPlaceholderText() {
        return this.startPlaceholder || this.startDateText;
      },
      endPlaceholderText() {
        return this.endPlaceholder || this.endDateText;
      },
      selectDateText() {
        return t2("uni-datetime-picker.selectDate");
      },
      selectTimeText() {
        return t2("uni-datetime-picker.selectTime");
      },
      startDateText() {
        return this.startPlaceholder || t2("uni-datetime-picker.startDate");
      },
      startTimeText() {
        return t2("uni-datetime-picker.startTime");
      },
      endDateText() {
        return this.endPlaceholder || t2("uni-datetime-picker.endDate");
      },
      endTimeText() {
        return t2("uni-datetime-picker.endTime");
      },
      okText() {
        return t2("uni-datetime-picker.ok");
      },
      clearText() {
        return t2("uni-datetime-picker.clear");
      },
      showClearIcon() {
        const {
          clearIcon,
          disabled,
          singleVal,
          range
        } = this;
        const bool = clearIcon && !disabled && (singleVal || range.startDate && range.endDate);
        return bool;
      }
    },
    created() {
    },
    mounted() {
      this.platform();
    },
    methods: {
      initPicker(newVal) {
        if (!newVal || Array.isArray(newVal) && !newVal.length) {
          this.$nextTick(() => {
            this.clear(false);
          });
          return;
        }
        if (!Array.isArray(newVal) && !this.isRange) {
          const {
            defDate,
            defTime
          } = this.parseDate(newVal);
          this.singleVal = defDate;
          this.tempSingleDate = defDate;
          this.defSingleDate = defDate;
          if (this.hasTime) {
            this.singleVal = defDate + " " + defTime;
            this.time = defTime;
          }
        } else {
          const [before, after] = newVal;
          if (!before && !after)
            return;
          const defBefore = this.parseDate(before);
          const defAfter = this.parseDate(after);
          const startDate = defBefore.defDate;
          const endDate = defAfter.defDate;
          this.range.startDate = this.tempRange.startDate = startDate;
          this.range.endDate = this.tempRange.endDate = endDate;
          if (this.hasTime) {
            this.range.startDate = defBefore.defDate + " " + defBefore.defTime;
            this.range.endDate = defAfter.defDate + " " + defAfter.defTime;
            this.tempRange.startTime = defBefore.defTime;
            this.tempRange.endTime = defAfter.defTime;
          }
          const defaultRange = {
            before: defBefore.defDate,
            after: defAfter.defDate
          };
          this.startMultipleStatus = Object.assign({}, this.startMultipleStatus, defaultRange, {
            which: "right"
          });
          this.endMultipleStatus = Object.assign({}, this.endMultipleStatus, defaultRange, {
            which: "left"
          });
        }
      },
      updateLeftCale(e2) {
        const left = this.$refs.left;
        left.cale.setHoverMultiple(e2.after);
        left.setDate(this.$refs.left.nowDate.fullDate);
      },
      updateRightCale(e2) {
        const right = this.$refs.right;
        right.cale.setHoverMultiple(e2.after);
        right.setDate(this.$refs.right.nowDate.fullDate);
      },
      platform() {
        const systemInfo = uni.getSystemInfoSync();
        this.isPhone = systemInfo.windowWidth <= 500;
        this.windowWidth = systemInfo.windowWidth;
      },
      show(event) {
        if (this.disabled) {
          return;
        }
        this.platform();
        if (this.isPhone) {
          this.$refs.mobile.open();
          return;
        }
        this.popover = {
          top: "10px"
        };
        const dateEditor = uni.createSelectorQuery().in(this).select(".uni-date-editor");
        dateEditor.boundingClientRect((rect) => {
          if (this.windowWidth - rect.left < this.datePopupWidth) {
            this.popover.right = 0;
          }
        }).exec();
        setTimeout(() => {
          this.popup = !this.popup;
          if (!this.isPhone && this.isRange && this.isFirstShow) {
            this.isFirstShow = false;
            const {
              startDate,
              endDate
            } = this.range;
            if (startDate && endDate) {
              if (this.diffDate(startDate, endDate) < 30) {
                this.$refs.right.next();
              }
            } else {
              this.$refs.right.next();
              this.$refs.right.cale.lastHover = false;
            }
          }
        }, 50);
      },
      close() {
        setTimeout(() => {
          this.popup = false;
          this.$emit("maskClick", this.value);
          this.$refs.mobile.close();
        }, 20);
      },
      setEmit(value) {
        if (this.returnType === "timestamp" || this.returnType === "date") {
          if (!Array.isArray(value)) {
            if (!this.hasTime) {
              value = value + " 00:00:00";
            }
            value = this.createTimestamp(value);
            if (this.returnType === "date") {
              value = new Date(value);
            }
          } else {
            if (!this.hasTime) {
              value[0] = value[0] + " 00:00:00";
              value[1] = value[1] + " 00:00:00";
            }
            value[0] = this.createTimestamp(value[0]);
            value[1] = this.createTimestamp(value[1]);
            if (this.returnType === "date") {
              value[0] = new Date(value[0]);
              value[1] = new Date(value[1]);
            }
          }
        }
        this.$emit("change", value);
        this.$emit("input", value);
        this.$emit("update:modelValue", value);
        this.isEmitValue = true;
      },
      createTimestamp(date) {
        date = this.fixIosDateFormat(date);
        return Date.parse(new Date(date));
      },
      singleChange(e2) {
        this.tempSingleDate = e2.fulldate;
        if (this.hasTime)
          return;
        this.confirmSingleChange();
      },
      confirmSingleChange() {
        if (!this.tempSingleDate) {
          this.popup = false;
          return;
        }
        if (this.hasTime) {
          this.singleVal = this.tempSingleDate + " " + (this.time ? this.time : "00:00:00");
        } else {
          this.singleVal = this.tempSingleDate;
        }
        this.setEmit(this.singleVal);
        this.popup = false;
      },
      leftChange(e2) {
        const {
          before,
          after
        } = e2.range;
        this.rangeChange(before, after);
        const obj = {
          before: e2.range.before,
          after: e2.range.after,
          data: e2.range.data,
          fulldate: e2.fulldate
        };
        this.startMultipleStatus = Object.assign({}, this.startMultipleStatus, obj);
      },
      rightChange(e2) {
        const {
          before,
          after
        } = e2.range;
        this.rangeChange(before, after);
        const obj = {
          before: e2.range.before,
          after: e2.range.after,
          data: e2.range.data,
          fulldate: e2.fulldate
        };
        this.endMultipleStatus = Object.assign({}, this.endMultipleStatus, obj);
      },
      mobileChange(e2) {
        if (this.isRange) {
          const {
            before,
            after
          } = e2.range;
          this.handleStartAndEnd(before, after, true);
          if (this.hasTime) {
            const {
              startTime,
              endTime
            } = e2.timeRange;
            this.tempRange.startTime = startTime;
            this.tempRange.endTime = endTime;
          }
          this.confirmRangeChange();
        } else {
          if (this.hasTime) {
            this.singleVal = e2.fulldate + " " + e2.time;
          } else {
            this.singleVal = e2.fulldate;
          }
          this.setEmit(this.singleVal);
        }
        this.$refs.mobile.close();
      },
      rangeChange(before, after) {
        if (!(before && after))
          return;
        this.handleStartAndEnd(before, after, true);
        if (this.hasTime)
          return;
        this.confirmRangeChange();
      },
      confirmRangeChange() {
        if (!this.tempRange.startDate && !this.tempRange.endDate) {
          this.popup = false;
          return;
        }
        let start, end;
        if (!this.hasTime) {
          start = this.range.startDate = this.tempRange.startDate;
          end = this.range.endDate = this.tempRange.endDate;
        } else {
          start = this.range.startDate = this.tempRange.startDate + " " + (this.tempRange.startTime ? this.tempRange.startTime : "00:00:00");
          end = this.range.endDate = this.tempRange.endDate + " " + (this.tempRange.endTime ? this.tempRange.endTime : "00:00:00");
        }
        const displayRange = [start, end];
        this.setEmit(displayRange);
        this.popup = false;
      },
      handleStartAndEnd(before, after, temp = false) {
        if (!(before && after))
          return;
        const type = temp ? "tempRange" : "range";
        if (this.dateCompare(before, after)) {
          this[type].startDate = before;
          this[type].endDate = after;
        } else {
          this[type].startDate = after;
          this[type].endDate = before;
        }
      },
      /**
       * 比较时间大小
       */
      dateCompare(startDate, endDate) {
        startDate = new Date(startDate.replace("-", "/").replace("-", "/"));
        endDate = new Date(endDate.replace("-", "/").replace("-", "/"));
        if (startDate <= endDate) {
          return true;
        } else {
          return false;
        }
      },
      /**
       * 比较时间差
       */
      diffDate(startDate, endDate) {
        startDate = new Date(startDate.replace("-", "/").replace("-", "/"));
        endDate = new Date(endDate.replace("-", "/").replace("-", "/"));
        const diff = (endDate - startDate) / (24 * 60 * 60 * 1e3);
        return Math.abs(diff);
      },
      clear(needEmit = true) {
        if (!this.isRange) {
          this.singleVal = "";
          this.tempSingleDate = "";
          this.time = "";
          if (this.isPhone) {
            this.$refs.mobile && this.$refs.mobile.clearCalender();
          } else {
            this.$refs.pcSingle && this.$refs.pcSingle.clearCalender();
          }
          if (needEmit) {
            this.$emit("change", "");
            this.$emit("input", "");
            this.$emit("update:modelValue", "");
          }
        } else {
          this.range.startDate = "";
          this.range.endDate = "";
          this.tempRange.startDate = "";
          this.tempRange.startTime = "";
          this.tempRange.endDate = "";
          this.tempRange.endTime = "";
          if (this.isPhone) {
            this.$refs.mobile && this.$refs.mobile.clearCalender();
          } else {
            this.$refs.left && this.$refs.left.clearCalender();
            this.$refs.right && this.$refs.right.clearCalender();
            this.$refs.right && this.$refs.right.next();
          }
          if (needEmit) {
            this.$emit("change", []);
            this.$emit("input", []);
            this.$emit("update:modelValue", []);
          }
        }
      },
      parseDate(date) {
        date = this.fixIosDateFormat(date);
        const defVal = new Date(date);
        const year = defVal.getFullYear();
        const month = defVal.getMonth() + 1;
        const day = defVal.getDate();
        const hour = defVal.getHours();
        const minute = defVal.getMinutes();
        const second = defVal.getSeconds();
        const defDate = year + "-" + this.lessTen(month) + "-" + this.lessTen(day);
        const defTime = this.lessTen(hour) + ":" + this.lessTen(minute) + (this.hideSecond ? "" : ":" + this.lessTen(second));
        return {
          defDate,
          defTime
        };
      },
      lessTen(item) {
        return item < 10 ? "0" + item : item;
      },
      //兼容 iOS、safari 日期格式
      fixIosDateFormat(value) {
        if (typeof value === "string") {
          value = value.replace(/-/g, "/");
        }
        return value;
      },
      leftMonthSwitch(e2) {
      },
      rightMonthSwitch(e2) {
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom((0, import_vue6.resolveDynamicComponent)("uni-icons"), __easycom_1);
    const _component_time_picker = (0, import_vue6.resolveComponent)("time-picker");
    const _component_calendar = (0, import_vue6.resolveComponent)("calendar");
    return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
      class: "uni-date",
      renderWhole: true
    }, [
      (0, import_vue6.createElementVNode)("view", {
        class: "uni-date-editor",
        onClick: _cache[4] || (_cache[4] = (...args) => $options.show && $options.show(...args))
      }, [
        (0, import_vue6.renderSlot)(_ctx.$slots, "default", {}, () => [
          (0, import_vue6.createElementVNode)(
            "view",
            {
              class: (0, import_vue6.normalizeClass)(["uni-date-editor--x", {
                "uni-date-editor--x__disabled": $props.disabled,
                "uni-date-x--border": $props.border
              }])
            },
            [
              !$data.isRange ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                key: 0,
                class: "uni-date-x uni-date-single"
              }, [
                (0, import_vue6.createVNode)(_component_uni_icons, {
                  type: "calendar",
                  color: "#c0c4cc",
                  size: "22"
                }),
                (0, import_vue6.createElementVNode)("u-input", {
                  class: "uni-date__x-input",
                  type: "text",
                  modelValue: $data.singleVal,
                  onInput: _cache[0] || (_cache[0] = ($event) => $data.singleVal = $event.detail.value),
                  placeholder: $options.singlePlaceholderText,
                  disabled: true
                }, null, 40, ["modelValue", "placeholder"])
              ])) : ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                key: 1,
                class: "uni-date-x uni-date-range"
              }, [
                (0, import_vue6.createVNode)(_component_uni_icons, {
                  type: "calendar",
                  color: "#c0c4cc",
                  size: "22"
                }),
                (0, import_vue6.createElementVNode)("u-input", {
                  class: "uni-date__x-input t-c",
                  type: "text",
                  modelValue: $data.range.startDate,
                  onInput: _cache[1] || (_cache[1] = ($event) => $data.range.startDate = $event.detail.value),
                  placeholder: $options.startPlaceholderText,
                  disabled: true
                }, null, 40, ["modelValue", "placeholder"]),
                (0, import_vue6.renderSlot)(_ctx.$slots, "default", {}, () => [
                  (0, import_vue6.createElementVNode)("view", { class: "" }, [
                    (0, import_vue6.createElementVNode)(
                      "u-text",
                      null,
                      (0, import_vue6.toDisplayString)($props.rangeSeparator),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                (0, import_vue6.createElementVNode)("u-input", {
                  class: "uni-date__x-input t-c",
                  type: "text",
                  modelValue: $data.range.endDate,
                  onInput: _cache[2] || (_cache[2] = ($event) => $data.range.endDate = $event.detail.value),
                  placeholder: $options.endPlaceholderText,
                  disabled: true
                }, null, 40, ["modelValue", "placeholder"])
              ])),
              $options.showClearIcon ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                key: 2,
                class: "uni-date__icon-clear",
                onClick: _cache[3] || (_cache[3] = (0, import_vue6.withModifiers)((...args) => $options.clear && $options.clear(...args), ["stop"]))
              }, [
                (0, import_vue6.createVNode)(_component_uni_icons, {
                  type: "clear",
                  color: "#c0c4cc",
                  size: "24"
                })
              ])) : (0, import_vue6.createCommentVNode)("v-if", true)
            ],
            2
            /* CLASS */
          )
        ])
      ]),
      $data.popup ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
        key: 0,
        class: "uni-date-mask",
        onClick: _cache[5] || (_cache[5] = (...args) => $options.close && $options.close(...args))
      })) : (0, import_vue6.createCommentVNode)("v-if", true),
      !$data.isPhone && $data.popup ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
        "view",
        {
          key: 1,
          ref: "datePicker",
          class: "uni-date-picker__container"
        },
        [
          !$data.isRange ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
            "view",
            {
              key: 0,
              class: "uni-date-single--x",
              style: (0, import_vue6.normalizeStyle)($data.popover)
            },
            [
              (0, import_vue6.createElementVNode)("view", { class: "uni-popper__arrow" }),
              $data.hasTime ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                key: 0,
                class: "uni-date-changed popup-x-header"
              }, [
                (0, import_vue6.createElementVNode)("u-input", {
                  class: "uni-date__input t-c",
                  type: "text",
                  modelValue: $data.tempSingleDate,
                  onInput: _cache[6] || (_cache[6] = ($event) => $data.tempSingleDate = $event.detail.value),
                  placeholder: $options.selectDateText
                }, null, 40, ["modelValue", "placeholder"]),
                (0, import_vue6.createVNode)(_component_time_picker, {
                  type: "time",
                  modelValue: $data.time,
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.time = $event),
                  border: false,
                  disabled: !$data.tempSingleDate,
                  start: $options.reactStartTime,
                  end: $options.reactEndTime,
                  hideSecond: $props.hideSecond,
                  style: { "width": "100%" }
                }, {
                  default: (0, import_vue6.withCtx)(() => [
                    (0, import_vue6.createElementVNode)("u-input", {
                      class: "uni-date__input t-c",
                      type: "text",
                      modelValue: $data.time,
                      onInput: _cache[7] || (_cache[7] = ($event) => $data.time = $event.detail.value),
                      placeholder: $options.selectTimeText,
                      disabled: !$data.tempSingleDate
                    }, null, 40, ["modelValue", "placeholder", "disabled"])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue", "disabled", "start", "end", "hideSecond"])
              ])) : (0, import_vue6.createCommentVNode)("v-if", true),
              (0, import_vue6.createVNode)(_component_calendar, {
                ref: "pcSingle",
                showMonth: false,
                "start-date": $data.caleRange.startDate,
                "end-date": $data.caleRange.endDate,
                date: $data.defSingleDate,
                onChange: $options.singleChange,
                style: { "padding": "0 8px" }
              }, null, 8, ["start-date", "end-date", "date", "onChange"]),
              $data.hasTime ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                key: 1,
                class: "popup-x-footer"
              }, [
                (0, import_vue6.createCommentVNode)(' <text class="">\u6B64\u523B</text> '),
                (0, import_vue6.createElementVNode)(
                  "u-text",
                  {
                    class: "confirm",
                    onClick: _cache[9] || (_cache[9] = (...args) => $options.confirmSingleChange && $options.confirmSingleChange(...args))
                  },
                  (0, import_vue6.toDisplayString)($options.okText),
                  1
                  /* TEXT */
                )
              ])) : (0, import_vue6.createCommentVNode)("v-if", true),
              (0, import_vue6.createElementVNode)("view", { class: "uni-date-popper__arrow" })
            ],
            4
            /* STYLE */
          )) : ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
            "view",
            {
              key: 1,
              class: "uni-date-range--x",
              style: (0, import_vue6.normalizeStyle)($data.popover)
            },
            [
              (0, import_vue6.createElementVNode)("view", { class: "uni-popper__arrow" }),
              $data.hasTime ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                key: 0,
                class: "popup-x-header uni-date-changed"
              }, [
                (0, import_vue6.createElementVNode)("view", { class: "popup-x-header--datetime" }, [
                  (0, import_vue6.createElementVNode)("u-input", {
                    class: "uni-date__input uni-date-range__input",
                    type: "text",
                    modelValue: $data.tempRange.startDate,
                    onInput: _cache[10] || (_cache[10] = ($event) => $data.tempRange.startDate = $event.detail.value),
                    placeholder: $options.startDateText
                  }, null, 40, ["modelValue", "placeholder"]),
                  (0, import_vue6.createVNode)(_component_time_picker, {
                    type: "time",
                    modelValue: $data.tempRange.startTime,
                    "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $data.tempRange.startTime = $event),
                    start: $options.reactStartTime,
                    border: false,
                    disabled: !$data.tempRange.startDate,
                    hideSecond: $props.hideSecond
                  }, {
                    default: (0, import_vue6.withCtx)(() => [
                      (0, import_vue6.createElementVNode)("u-input", {
                        class: "uni-date__input uni-date-range__input",
                        type: "text",
                        modelValue: $data.tempRange.startTime,
                        onInput: _cache[11] || (_cache[11] = ($event) => $data.tempRange.startTime = $event.detail.value),
                        placeholder: $options.startTimeText,
                        disabled: !$data.tempRange.startDate
                      }, null, 40, ["modelValue", "placeholder", "disabled"])
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue", "start", "disabled", "hideSecond"])
                ]),
                (0, import_vue6.createVNode)(_component_uni_icons, {
                  type: "arrowthinright",
                  color: "#999",
                  style: { "line-height": "40px" }
                }),
                (0, import_vue6.createElementVNode)("view", { class: "popup-x-header--datetime" }, [
                  (0, import_vue6.createElementVNode)("u-input", {
                    class: "uni-date__input uni-date-range__input",
                    type: "text",
                    modelValue: $data.tempRange.endDate,
                    onInput: _cache[13] || (_cache[13] = ($event) => $data.tempRange.endDate = $event.detail.value),
                    placeholder: $options.endDateText
                  }, null, 40, ["modelValue", "placeholder"]),
                  (0, import_vue6.createVNode)(_component_time_picker, {
                    type: "time",
                    modelValue: $data.tempRange.endTime,
                    "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $data.tempRange.endTime = $event),
                    end: $options.reactEndTime,
                    border: false,
                    disabled: !$data.tempRange.endDate,
                    hideSecond: $props.hideSecond
                  }, {
                    default: (0, import_vue6.withCtx)(() => [
                      (0, import_vue6.createElementVNode)("u-input", {
                        class: "uni-date__input uni-date-range__input",
                        type: "text",
                        modelValue: $data.tempRange.endTime,
                        onInput: _cache[14] || (_cache[14] = ($event) => $data.tempRange.endTime = $event.detail.value),
                        placeholder: $options.endTimeText,
                        disabled: !$data.tempRange.endDate
                      }, null, 40, ["modelValue", "placeholder", "disabled"])
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue", "end", "disabled", "hideSecond"])
                ])
              ])) : (0, import_vue6.createCommentVNode)("v-if", true),
              (0, import_vue6.createElementVNode)("view", { class: "popup-x-body" }, [
                (0, import_vue6.createVNode)(_component_calendar, {
                  ref: "left",
                  showMonth: false,
                  "start-date": $data.caleRange.startDate,
                  "end-date": $data.caleRange.endDate,
                  range: true,
                  onChange: $options.leftChange,
                  pleStatus: $data.endMultipleStatus,
                  onFirstEnterCale: $options.updateRightCale,
                  onMonthSwitch: $options.leftMonthSwitch,
                  style: { "padding": "0 8px" }
                }, null, 8, ["start-date", "end-date", "onChange", "pleStatus", "onFirstEnterCale", "onMonthSwitch"]),
                (0, import_vue6.createVNode)(_component_calendar, {
                  ref: "right",
                  showMonth: false,
                  "start-date": $data.caleRange.startDate,
                  "end-date": $data.caleRange.endDate,
                  range: true,
                  onChange: $options.rightChange,
                  pleStatus: $data.startMultipleStatus,
                  onFirstEnterCale: $options.updateLeftCale,
                  onMonthSwitch: $options.rightMonthSwitch,
                  style: { "padding": "0 8px", "border-left": "1px solid #F1F1F1" }
                }, null, 8, ["start-date", "end-date", "onChange", "pleStatus", "onFirstEnterCale", "onMonthSwitch"])
              ]),
              $data.hasTime ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                key: 1,
                class: "popup-x-footer"
              }, [
                (0, import_vue6.createElementVNode)(
                  "u-text",
                  {
                    class: "",
                    onClick: _cache[16] || (_cache[16] = (...args) => $options.clear && $options.clear(...args))
                  },
                  (0, import_vue6.toDisplayString)($options.clearText),
                  1
                  /* TEXT */
                ),
                (0, import_vue6.createElementVNode)(
                  "u-text",
                  {
                    class: "confirm",
                    onClick: _cache[17] || (_cache[17] = (...args) => $options.confirmRangeChange && $options.confirmRangeChange(...args))
                  },
                  (0, import_vue6.toDisplayString)($options.okText),
                  1
                  /* TEXT */
                )
              ])) : (0, import_vue6.createCommentVNode)("v-if", true)
            ],
            4
            /* STYLE */
          ))
        ],
        512
        /* NEED_PATCH */
      )) : (0, import_vue6.createCommentVNode)("v-if", true),
      $data.isPhone ? ((0, import_vue6.openBlock)(), (0, import_vue6.createBlock)(_component_calendar, {
        key: 2,
        ref: "mobile",
        clearDate: false,
        date: $data.defSingleDate,
        defTime: $options.reactMobDefTime,
        "start-date": $data.caleRange.startDate,
        "end-date": $data.caleRange.endDate,
        selectableTimes: $options.mobSelectableTime,
        pleStatus: $data.endMultipleStatus,
        showMonth: false,
        range: $data.isRange,
        typeHasTime: $data.hasTime,
        insert: false,
        hideSecond: $props.hideSecond,
        onConfirm: $options.mobileChange,
        onMaskClose: $options.close
      }, null, 8, ["date", "defTime", "start-date", "end-date", "selectableTimes", "pleStatus", "range", "typeHasTime", "hideSecond", "onConfirm", "onMaskClose"])) : (0, import_vue6.createCommentVNode)("v-if", true)
    ]);
  }
  var __easycom_5 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["styles", [_style_0$5]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.vue"]]);
  var dataPicker = {
    props: {
      localdata: {
        type: [Array, Object],
        default() {
          return [];
        }
      },
      spaceInfo: {
        type: Object,
        default() {
          return {};
        }
      },
      collection: {
        type: String,
        default: ""
      },
      action: {
        type: String,
        default: ""
      },
      field: {
        type: String,
        default: ""
      },
      orderby: {
        type: String,
        default: ""
      },
      where: {
        type: [String, Object],
        default: ""
      },
      pageData: {
        type: String,
        default: "add"
      },
      pageCurrent: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 20
      },
      getcount: {
        type: [Boolean, String],
        default: false
      },
      getone: {
        type: [Boolean, String],
        default: false
      },
      gettree: {
        type: [Boolean, String],
        default: false
      },
      manual: {
        type: Boolean,
        default: false
      },
      value: {
        type: [Array, String, Number],
        default() {
          return [];
        }
      },
      modelValue: {
        type: [Array, String, Number],
        default() {
          return [];
        }
      },
      preload: {
        type: Boolean,
        default: false
      },
      stepSearh: {
        type: Boolean,
        default: true
      },
      selfField: {
        type: String,
        default: ""
      },
      parentField: {
        type: String,
        default: ""
      },
      multiple: {
        type: Boolean,
        default: false
      },
      map: {
        type: Object,
        default() {
          return {
            text: "text",
            value: "value"
          };
        }
      }
    },
    data() {
      return {
        loading: false,
        errorMessage: "",
        loadMore: {
          contentdown: "",
          contentrefresh: "",
          contentnomore: ""
        },
        dataList: [],
        selected: [],
        selectedIndex: 0,
        page: {
          current: this.pageCurrent,
          size: this.pageSize,
          count: 0
        }
      };
    },
    computed: {
      isLocaldata() {
        return !this.collection.length;
      },
      postField() {
        let fields = [this.field];
        if (this.parentField) {
          fields.push(`${this.parentField} as parent_value`);
        }
        return fields.join(",");
      },
      dataValue() {
        let isModelValue = Array.isArray(this.modelValue) ? this.modelValue.length > 0 : this.modelValue !== null || this.modelValue !== void 0;
        return isModelValue ? this.modelValue : this.value;
      },
      hasValue() {
        if (typeof this.dataValue === "number") {
          return true;
        }
        return this.dataValue != null && this.dataValue.length > 0;
      }
    },
    created() {
      this.$watch(() => {
        var al = [];
        [
          "pageCurrent",
          "pageSize",
          "spaceInfo",
          "value",
          "modelValue",
          "localdata",
          "collection",
          "action",
          "field",
          "orderby",
          "where",
          "getont",
          "getcount",
          "gettree"
        ].forEach((key) => {
          al.push(this[key]);
        });
        return al;
      }, (newValue, oldValue) => {
        for (let i2 = 2; i2 < newValue.length; i2++) {
          if (newValue[i2] != oldValue[i2]) {
            break;
          }
        }
        if (newValue[0] != oldValue[0]) {
          this.page.current = this.pageCurrent;
        }
        this.page.size = this.pageSize;
        this.onPropsChange();
      });
      this._treeData = [];
    },
    methods: {
      onPropsChange() {
        this._treeData = [];
      },
      getCommand(options = {}) {
        let db = nr.database(this.spaceInfo);
        const action = options.action || this.action;
        if (action) {
          db = db.action(action);
        }
        const collection = options.collection || this.collection;
        db = db.collection(collection);
        const where = options.where || this.where;
        if (!(!where || !Object.keys(where).length)) {
          db = db.where(where);
        }
        const field = options.field || this.field;
        if (field) {
          db = db.field(field);
        }
        const orderby = options.orderby || this.orderby;
        if (orderby) {
          db = db.orderBy(orderby);
        }
        const current = options.pageCurrent !== void 0 ? options.pageCurrent : this.page.current;
        const size = options.pageSize !== void 0 ? options.pageSize : this.page.size;
        const getCount = options.getcount !== void 0 ? options.getcount : this.getcount;
        const getTree = options.gettree !== void 0 ? options.gettree : this.gettree;
        const getOptions = {
          getCount,
          getTree
        };
        if (options.getTreePath) {
          getOptions.getTreePath = options.getTreePath;
        }
        db = db.skip(size * (current - 1)).limit(size).get(getOptions);
        return db;
      },
      getNodeData(callback) {
        if (this.loading) {
          return;
        }
        this.loading = true;
        this.getCommand({
          field: this.postField,
          where: this._pathWhere()
        }).then((res) => {
          this.loading = false;
          this.selected = res.result.data;
          callback && callback();
        }).catch((err) => {
          this.loading = false;
          this.errorMessage = err;
        });
      },
      getTreePath(callback) {
        if (this.loading) {
          return;
        }
        this.loading = true;
        this.getCommand({
          field: this.postField,
          getTreePath: {
            startWith: `${this.selfField}=='${this.dataValue}'`
          }
        }).then((res) => {
          this.loading = false;
          let treePath = [];
          this._extractTreePath(res.result.data, treePath);
          this.selected = treePath;
          callback && callback();
        }).catch((err) => {
          this.loading = false;
          this.errorMessage = err;
        });
      },
      loadData() {
        if (this.isLocaldata) {
          this._processLocalData();
          return;
        }
        if (this.dataValue != null) {
          this._loadNodeData((data) => {
            this._treeData = data;
            this._updateBindData();
            this._updateSelected();
          });
          return;
        }
        if (this.stepSearh) {
          this._loadNodeData((data) => {
            this._treeData = data;
            this._updateBindData();
          });
        } else {
          this._loadAllData((data) => {
            this._treeData = [];
            this._extractTree(data, this._treeData, null);
            this._updateBindData();
          });
        }
      },
      _loadAllData(callback) {
        if (this.loading) {
          return;
        }
        this.loading = true;
        this.getCommand({
          field: this.postField,
          gettree: true,
          startwith: `${this.selfField}=='${this.dataValue}'`
        }).then((res) => {
          this.loading = false;
          callback(res.result.data);
          this.onDataChange();
        }).catch((err) => {
          this.loading = false;
          this.errorMessage = err;
        });
      },
      _loadNodeData(callback, pw) {
        if (this.loading) {
          return;
        }
        this.loading = true;
        this.getCommand({
          field: this.postField,
          where: pw || this._postWhere(),
          pageSize: 500
        }).then((res) => {
          this.loading = false;
          callback(res.result.data);
          this.onDataChange();
        }).catch((err) => {
          this.loading = false;
          this.errorMessage = err;
        });
      },
      _pathWhere() {
        let result = [];
        let where_field = this._getParentNameByField();
        if (where_field) {
          result.push(`${where_field} == '${this.dataValue}'`);
        }
        if (this.where) {
          return `(${this.where}) && (${result.join(" || ")})`;
        }
        return result.join(" || ");
      },
      _postWhere() {
        let result = [];
        let selected = this.selected;
        let parentField = this.parentField;
        if (parentField) {
          result.push(`${parentField} == null || ${parentField} == ""`);
        }
        if (selected.length) {
          for (var i2 = 0; i2 < selected.length - 1; i2++) {
            result.push(`${parentField} == '${selected[i2].value}'`);
          }
        }
        let where = [];
        if (this.where) {
          where.push(`(${this.where})`);
        }
        if (result.length) {
          where.push(`(${result.join(" || ")})`);
        }
        return where.join(" && ");
      },
      _nodeWhere() {
        let result = [];
        let selected = this.selected;
        if (selected.length) {
          result.push(`${this.parentField} == '${selected[selected.length - 1].value}'`);
        }
        if (this.where) {
          return `(${this.where}) && (${result.join(" || ")})`;
        }
        return result.join(" || ");
      },
      _getParentNameByField() {
        const fields = this.field.split(",");
        let where_field = null;
        for (let i2 = 0; i2 < fields.length; i2++) {
          const items = fields[i2].split("as");
          if (items.length < 2) {
            continue;
          }
          if (items[1].trim() === "value") {
            where_field = items[0].trim();
            break;
          }
        }
        return where_field;
      },
      _isTreeView() {
        return this.parentField && this.selfField;
      },
      _updateSelected() {
        var dl = this.dataList;
        var sl = this.selected;
        let textField = this.map.text;
        let valueField = this.map.value;
        for (var i2 = 0; i2 < sl.length; i2++) {
          var value = sl[i2].value;
          var dl2 = dl[i2];
          for (var j2 = 0; j2 < dl2.length; j2++) {
            var item2 = dl2[j2];
            if (item2[valueField] === value) {
              sl[i2].text = item2[textField];
              break;
            }
          }
        }
      },
      _updateBindData(node) {
        const {
          dataList,
          hasNodes
        } = this._filterData(this._treeData, this.selected);
        let isleaf = this._stepSearh === false && !hasNodes;
        if (node) {
          node.isleaf = isleaf;
        }
        this.dataList = dataList;
        this.selectedIndex = dataList.length - 1;
        if (!isleaf && this.selected.length < dataList.length) {
          this.selected.push({
            value: null,
            text: "\u8BF7\u9009\u62E9"
          });
        }
        return {
          isleaf,
          hasNodes
        };
      },
      _filterData(data, paths) {
        let dataList = [];
        let hasNodes = true;
        dataList.push(data.filter((item) => {
          return item.parent_value === null || item.parent_value === void 0 || item.parent_value === "";
        }));
        for (let i2 = 0; i2 < paths.length; i2++) {
          var value = paths[i2].value;
          var nodes = data.filter((item) => {
            return item.parent_value === value;
          });
          if (nodes.length) {
            dataList.push(nodes);
          } else {
            hasNodes = false;
          }
        }
        return {
          dataList,
          hasNodes
        };
      },
      _extractTree(nodes, result, parent_value) {
        let valueField = this.map.value;
        for (let i2 = 0; i2 < nodes.length; i2++) {
          let node = nodes[i2];
          let child = {};
          for (let key in node) {
            if (key !== "children") {
              child[key] = node[key];
            }
          }
          if (parent_value !== null && parent_value !== void 0 && parent_value !== "") {
            child.parent_value = parent_value;
          }
          result.push(child);
          let children = node.children;
          if (children) {
            this._extractTree(children, result, node[valueField]);
          }
        }
      },
      _extractTreePath(nodes, result) {
        for (let i2 = 0; i2 < nodes.length; i2++) {
          let node = nodes[i2];
          let child = {};
          for (let key in node) {
            if (key !== "children") {
              child[key] = node[key];
            }
          }
          result.push(child);
          let children = node.children;
          if (children) {
            this._extractTreePath(children, result);
          }
        }
      },
      _findNodePath(key, nodes, path = []) {
        let textField = this.map.text;
        let valueField = this.map.value;
        for (let i2 = 0; i2 < nodes.length; i2++) {
          let node = nodes[i2];
          let children = node.children;
          let text = node[textField];
          let value = node[valueField];
          path.push({
            value,
            text
          });
          if (value === key) {
            return path;
          }
          if (children) {
            const p2 = this._findNodePath(key, children, path);
            if (p2.length) {
              return p2;
            }
          }
          path.pop();
        }
        return [];
      },
      _processLocalData() {
        this._treeData = [];
        this._extractTree(this.localdata, this._treeData);
        var inputValue = this.dataValue;
        if (inputValue === void 0) {
          return;
        }
        if (Array.isArray(inputValue)) {
          inputValue = inputValue[inputValue.length - 1];
          if (typeof inputValue === "object" && inputValue[this.map.value]) {
            inputValue = inputValue[this.map.value];
          }
        }
        this.selected = this._findNodePath(inputValue, this.localdata);
      }
    }
  };
  var _style_0$4 = { "uni-data-pickerview": { "": { "flex": 1, "flexDirection": "column", "overflow": "hidden", "height": 100 } }, "error-text": { "": { "color": "#DD524D" } }, "loading-cover": { "": { "position": "absolute", "left": 0, "top": 0, "right": 0, "bottom": 0, "backgroundColor": "rgba(255,255,255,0.5)", "flexDirection": "column", "alignItems": "center", "zIndex": 1001 } }, "error-message": { "": { "backgroundColor": "#ffffff", "position": "absolute", "left": 0, "top": 0, "right": 0, "bottom": 0, "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15, "opacity": 0.9, "zIndex": 102 } }, "selected-area": { "": { "width": "750rpx" } }, "selected-list": { "": { "flexDirection": "row", "flexWrap": "nowrap", "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 5, "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#f8f8f8" } }, "selected-item": { "": { "marginLeft": 10, "marginRight": 10, "paddingTop": 12, "paddingRight": 0, "paddingBottom": 12, "paddingLeft": 0, "textAlign": "center", "fontSize": 14 } }, "selected-item-text-overflow": { "": { "width": 168, "overflow": "hidden" } }, "selected-item-active": { "": { "borderBottomWidth": 2, "borderBottomStyle": "solid", "borderBottomColor": "#007aff" } }, "selected-item-text": { "": { "color": "#007aff" } }, "tab-c": { "": { "position": "relative", "flex": 1, "flexDirection": "row", "overflow": "hidden" } }, "list": { "": { "flex": 1 } }, "item": { "": { "paddingTop": 12, "paddingRight": 15, "paddingBottom": 12, "paddingLeft": 15, "flexDirection": "row", "justifyContent": "space-between" } }, "is-disabled": { "": { "opacity": 0.5 } }, "item-text": { "": { "color": "#333333", "fontSize": 14 } }, "item-text-overflow": { "": { "width": 280, "overflow": "hidden" } }, "check": { "": { "marginRight": 5, "borderWidth": 2, "borderStyle": "solid", "borderColor": "#007aff", "borderLeftWidth": 0, "borderLeftStyle": "solid", "borderLeftColor": "#000000", "borderTopWidth": 0, "borderTopStyle": "solid", "borderTopColor": "#000000", "height": 12, "width": 6, "transformOrigin": "center", "transform": "rotate(45deg)" } } };
  var _sfc_main$4 = {
    name: "UniDataPickerView",
    emits: ["nodeclick", "change", "datachange", "update:modelValue"],
    mixins: [dataPicker],
    props: {
      managedMode: {
        type: Boolean,
        default: false
      },
      ellipsis: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {};
    },
    created() {
      if (this.managedMode) {
        return;
      }
      this.$nextTick(() => {
        this.load();
      });
    },
    methods: {
      onPropsChange() {
        this._treeData = [];
        this.selectedIndex = 0;
        this.load();
      },
      load() {
        if (this.isLocaldata) {
          this.loadData();
        } else if (this.dataValue.length) {
          this.getTreePath((res) => {
            this.loadData();
          });
        }
      },
      handleSelect(index) {
        this.selectedIndex = index;
      },
      handleNodeClick(item, i2, j2) {
        if (item.disable) {
          return;
        }
        const node = this.dataList[i2][j2];
        const text = node[this.map.text];
        const value = node[this.map.value];
        if (i2 < this.selected.length - 1) {
          this.selected.splice(i2, this.selected.length - i2);
          this.selected.push({
            text,
            value
          });
        } else if (i2 === this.selected.length - 1) {
          this.selected.splice(i2, 1, {
            text,
            value
          });
        }
        if (node.isleaf) {
          this.onSelectedChange(node, node.isleaf);
          return;
        }
        const {
          isleaf,
          hasNodes
        } = this._updateBindData();
        if (!this._isTreeView() && !hasNodes) {
          this.onSelectedChange(node, true);
          return;
        }
        if (this.isLocaldata && (!hasNodes || isleaf)) {
          this.onSelectedChange(node, true);
          return;
        }
        if (!isleaf && !hasNodes) {
          this._loadNodeData((data) => {
            if (!data.length) {
              node.isleaf = true;
            } else {
              this._treeData.push(...data);
              this._updateBindData(node);
            }
            this.onSelectedChange(node, node.isleaf);
          }, this._nodeWhere());
          return;
        }
        this.onSelectedChange(node, false);
      },
      updateData(data) {
        this._treeData = data.treeData;
        this.selected = data.selected;
        if (!this._treeData.length) {
          this.loadData();
        } else {
          this._updateBindData();
        }
      },
      onDataChange() {
        this.$emit("datachange");
      },
      onSelectedChange(node, isleaf) {
        if (isleaf) {
          this._dispatchEvent();
        }
        if (node) {
          this.$emit("nodeclick", node);
        }
      },
      _dispatchEvent() {
        this.$emit("change", this.selected.slice(0));
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_load_more = resolveEasycom((0, import_vue6.resolveDynamicComponent)("uni-load-more"), __easycom_02);
    return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
      class: "uni-data-pickerview",
      renderWhole: true
    }, [
      (0, import_vue6.createElementVNode)("scroll-view", {
        class: "selected-area",
        scrollX: "true",
        scrollY: "false",
        showScrollbar: false
      }, [
        (0, import_vue6.createElementVNode)("view", { class: "selected-list" }, [
          ((0, import_vue6.openBlock)(true), (0, import_vue6.createElementBlock)(
            import_vue6.Fragment,
            null,
            (0, import_vue6.renderList)(_ctx.selected, (item, index) => {
              return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
                import_vue6.Fragment,
                null,
                [
                  item.text ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                    key: 0,
                    class: (0, import_vue6.normalizeClass)(["selected-item", { "selected-item-active": index == _ctx.selectedIndex, "selected-item-text-overflow": $props.ellipsis }]),
                    onClick: ($event) => $options.handleSelect(index)
                  }, [
                    (0, import_vue6.createElementVNode)(
                      "u-text",
                      { class: "" },
                      (0, import_vue6.toDisplayString)(item.text),
                      1
                      /* TEXT */
                    )
                  ], 10, ["onClick"])) : (0, import_vue6.createCommentVNode)("v-if", true)
                ],
                64
                /* STABLE_FRAGMENT */
              );
            }),
            256
            /* UNKEYED_FRAGMENT */
          ))
        ])
      ]),
      (0, import_vue6.createElementVNode)("view", { class: "tab-c" }, [
        ((0, import_vue6.openBlock)(true), (0, import_vue6.createElementBlock)(
          import_vue6.Fragment,
          null,
          (0, import_vue6.renderList)(_ctx.dataList, (child, i2) => {
            return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
              import_vue6.Fragment,
              null,
              [
                i2 == _ctx.selectedIndex ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("scroll-view", {
                  class: "list",
                  key: i2,
                  scrollY: true
                }, [
                  ((0, import_vue6.openBlock)(true), (0, import_vue6.createElementBlock)(
                    import_vue6.Fragment,
                    null,
                    (0, import_vue6.renderList)(child, (item, j2) => {
                      return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                        class: (0, import_vue6.normalizeClass)(["item", { "is-disabled": !!item.disable }]),
                        onClick: ($event) => $options.handleNodeClick(item, i2, j2)
                      }, [
                        (0, import_vue6.createElementVNode)(
                          "u-text",
                          { class: "item-text item-text-overflow" },
                          (0, import_vue6.toDisplayString)(item[_ctx.map.text]),
                          1
                          /* TEXT */
                        ),
                        _ctx.selected.length > i2 && item[_ctx.map.value] == _ctx.selected[i2].value ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                          key: 0,
                          class: "check"
                        })) : (0, import_vue6.createCommentVNode)("v-if", true)
                      ], 10, ["onClick"]);
                    }),
                    256
                    /* UNKEYED_FRAGMENT */
                  ))
                ])) : (0, import_vue6.createCommentVNode)("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            );
          }),
          256
          /* UNKEYED_FRAGMENT */
        )),
        _ctx.loading ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
          key: 0,
          class: "loading-cover"
        }, [
          (0, import_vue6.createVNode)(_component_uni_load_more, {
            class: "load-more",
            contentText: _ctx.loadMore,
            status: "loading"
          }, null, 8, ["contentText"])
        ])) : (0, import_vue6.createCommentVNode)("v-if", true),
        _ctx.errorMessage ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
          key: 1,
          class: "error-message"
        }, [
          (0, import_vue6.createElementVNode)(
            "u-text",
            { class: "error-text" },
            (0, import_vue6.toDisplayString)(_ctx.errorMessage),
            1
            /* TEXT */
          )
        ])) : (0, import_vue6.createCommentVNode)("v-if", true)
      ])
    ]);
  }
  var DataPickerView = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["styles", [_style_0$4]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/uni_modules/uni-data-picker/components/uni-data-pickerview/uni-data-pickerview.vue"]]);
  var _style_0$3 = { "uni-data-tree": { "": { "flex": 1, "position": "relative", "fontSize": 16 } }, "error-text": { "": { "color": "#DD524D" } }, "input-value": { "": { "flexDirection": "row", "alignItems": "center", "flexWrap": "nowrap", "backgroundColor": "#FFFFFF", "fontSize": 16, "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 10, "overflow": "hidden", "height": 35 } }, "input-value-border": { "": { "borderWidth": 1, "borderStyle": "solid", "borderColor": "#e5e5e5", "borderRadius": 5 } }, "selected-area": { "": { "flex": 1, "overflow": "hidden", "flexDirection": "row" } }, "load-more": { "": { "width": 40 } }, "selected-list": { "": { "flexDirection": "row", "flexWrap": "nowrap" } }, "selected-item": { "": { "flexDirection": "row" } }, "text-color": { "": { "color": "#333333", "fontSize": 16 } }, "placeholder": { "": { "color": "#808080", "fontSize": 14 } }, "input-split-line": { "": { "opacity": 0.5 } }, "arrow-area": { "": { "position": "relative", "width": 20, "height": 20, "justifyContent": "center", "alignItems": "center" } }, "input-arrow": { "": { "width": 7, "height": 7, "borderLeftWidth": 1, "borderLeftStyle": "solid", "borderLeftColor": "#999999", "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#999999", "transform": "rotate(-45deg)", "transformOrigin": "center" } }, "uni-data-tree-cover": { "": { "position": "fixed", "left": 0, "top": 0, "right": 0, "bottom": 0, "backgroundColor": "rgba(0,0,0,0.4)", "flexDirection": "column", "zIndex": 100 } }, "uni-data-tree-dialog": { "": { "position": "fixed", "left": 0, "top": 20, "right": 0, "bottom": 0, "backgroundColor": "#FFFFFF", "borderTopLeftRadius": 10, "borderTopRightRadius": 10, "flexDirection": "column", "zIndex": 102, "overflow": "hidden", "width": "750rpx" } }, "dialog-caption": { "": { "position": "relative", "flexDirection": "row" } }, "title-area": { "": { "alignItems": "center", "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10 } }, "dialog-title": { "": { "lineHeight": 44 } }, "dialog-close": { "": { "position": "absolute", "top": 0, "right": 0, "bottom": 0, "flexDirection": "row", "alignItems": "center", "paddingTop": 0, "paddingRight": 15, "paddingBottom": 0, "paddingLeft": 15 } }, "dialog-close-plus": { "": { "width": 16, "height": 2, "backgroundColor": "#666666", "borderRadius": 2, "transform": "rotate(45deg)" } }, "dialog-close-rotate": { "": { "position": "absolute", "transform": "rotate(-45deg)" } }, "picker-view": { "": { "flex": 1, "overflow": "hidden" } }, "icon-clear": { "": { "display": "flex", "alignItems": "center" } }, "@FONT-FACE": [{ "uni-data-tree-cover": { "": { "backgroundColor": "rgba(0,0,0,0)" } }, "uni-data-tree-dialog": { "": { "position": "absolute", "top": 55, "minHeight": "400px", "maxHeight": 50, "backgroundColor": "#ffffff", "borderWidth": 1, "borderStyle": "solid", "borderColor": "#EBEEF5", "boxShadow": "0 2px 12px 0 rgba(0, 0, 0, 0.1)", "borderRadius": 4 } } }] };
  var _sfc_main$3 = {
    name: "UniDataPicker",
    emits: ["popupopened", "popupclosed", "nodeclick", "input", "change", "update:modelValue"],
    mixins: [dataPicker],
    components: {
      DataPickerView
    },
    props: {
      options: {
        type: [Object, Array],
        default() {
          return {};
        }
      },
      popupTitle: {
        type: String,
        default: "\u8BF7\u9009\u62E9"
      },
      placeholder: {
        type: String,
        default: "\u8BF7\u9009\u62E9"
      },
      heightMobile: {
        type: String,
        default: ""
      },
      readonly: {
        type: Boolean,
        default: false
      },
      clearIcon: {
        type: Boolean,
        default: true
      },
      border: {
        type: Boolean,
        default: true
      },
      split: {
        type: String,
        default: "/"
      },
      ellipsis: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        isOpened: false,
        inputSelected: []
      };
    },
    created() {
      this.form = this.getForm("uniForms");
      this.formItem = this.getForm("uniFormsItem");
      if (this.formItem) {
        if (this.formItem.name) {
          this.rename = this.formItem.name;
          this.form.inputChildrens.push(this);
        }
      }
      this.$nextTick(() => {
        this.load();
      });
    },
    methods: {
      clear() {
        this.inputSelected.splice(0);
        this._dispatchEvent([]);
      },
      onPropsChange() {
        this._treeData = [];
        this.selectedIndex = 0;
        this.load();
      },
      load() {
        if (this.readonly) {
          this._processReadonly(this.localdata, this.dataValue);
          return;
        }
        if (this.isLocaldata) {
          this.loadData();
          this.inputSelected = this.selected.slice(0);
        } else if (!this.parentField && !this.selfField && this.hasValue) {
          this.getNodeData(() => {
            this.inputSelected = this.selected.slice(0);
          });
        } else if (this.hasValue) {
          this.getTreePath(() => {
            this.inputSelected = this.selected.slice(0);
          });
        }
      },
      getForm(name = "uniForms") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      show() {
        this.isOpened = true;
        setTimeout(() => {
          this.$refs.pickerView.updateData({
            treeData: this._treeData,
            selected: this.selected,
            selectedIndex: this.selectedIndex
          });
        }, 200);
        this.$emit("popupopened");
      },
      hide() {
        this.isOpened = false;
        this.$emit("popupclosed");
      },
      handleInput() {
        if (this.readonly) {
          return;
        }
        this.show();
      },
      handleClose(e2) {
        this.hide();
      },
      onnodeclick(e2) {
        this.$emit("nodeclick", e2);
      },
      ondatachange(e2) {
        this._treeData = this.$refs.pickerView._treeData;
      },
      onchange(e2) {
        this.hide();
        this.$nextTick(() => {
          this.inputSelected = e2;
        });
        this._dispatchEvent(e2);
      },
      _processReadonly(dataList, value) {
        var isTree = dataList.findIndex((item2) => {
          return item2.children;
        });
        if (isTree > -1) {
          let inputValue;
          if (Array.isArray(value)) {
            inputValue = value[value.length - 1];
            if (typeof inputValue === "object" && inputValue.value) {
              inputValue = inputValue.value;
            }
          } else {
            inputValue = value;
          }
          this.inputSelected = this._findNodePath(inputValue, this.localdata);
          return;
        }
        if (!this.hasValue) {
          this.inputSelected = [];
          return;
        }
        let result = [];
        for (let i2 = 0; i2 < value.length; i2++) {
          var val = value[i2];
          var item = dataList.find((v2) => {
            return v2.value == val;
          });
          if (item) {
            result.push(item);
          }
        }
        if (result.length) {
          this.inputSelected = result;
        }
      },
      _filterForArray(data, valueArray) {
        var result = [];
        for (let i2 = 0; i2 < valueArray.length; i2++) {
          var value = valueArray[i2];
          var found = data.find((item) => {
            return item.value == value;
          });
          if (found) {
            result.push(found);
          }
        }
        return result;
      },
      _dispatchEvent(selected) {
        let item = {};
        if (selected.length) {
          var value = new Array(selected.length);
          for (var i2 = 0; i2 < selected.length; i2++) {
            value[i2] = selected[i2].value;
          }
          item = selected[selected.length - 1];
        } else {
          item.value = "";
        }
        if (this.formItem) {
          this.formItem.setValue(item.value);
        }
        this.$emit("input", item.value);
        this.$emit("update:modelValue", item.value);
        this.$emit("change", {
          detail: {
            value: selected
          }
        });
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_load_more = resolveEasycom((0, import_vue6.resolveDynamicComponent)("uni-load-more"), __easycom_02);
    const _component_uni_icons = resolveEasycom((0, import_vue6.resolveDynamicComponent)("uni-icons"), __easycom_1);
    const _component_data_picker_view = (0, import_vue6.resolveComponent)("data-picker-view");
    return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
      class: "uni-data-tree",
      renderWhole: true
    }, [
      (0, import_vue6.createElementVNode)("view", {
        class: "uni-data-tree-input",
        onClick: _cache[2] || (_cache[2] = (...args) => $options.handleInput && $options.handleInput(...args))
      }, [
        (0, import_vue6.renderSlot)(_ctx.$slots, "default", {
          options: $props.options,
          data: $data.inputSelected,
          error: _ctx.errorMessage
        }, () => [
          (0, import_vue6.createElementVNode)(
            "view",
            {
              class: (0, import_vue6.normalizeClass)(["input-value", { "input-value-border": $props.border }])
            },
            [
              _ctx.errorMessage ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
                "u-text",
                {
                  key: 0,
                  class: "selected-area error-text"
                },
                (0, import_vue6.toDisplayString)(_ctx.errorMessage),
                1
                /* TEXT */
              )) : _ctx.loading && !$data.isOpened ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                key: 1,
                class: "selected-area"
              }, [
                (0, import_vue6.createVNode)(_component_uni_load_more, {
                  class: "load-more",
                  contentText: _ctx.loadMore,
                  status: "loading"
                }, null, 8, ["contentText"])
              ])) : $data.inputSelected.length ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("scroll-view", {
                key: 2,
                class: "selected-area",
                scrollX: "true"
              }, [
                (0, import_vue6.createElementVNode)("view", {
                  class: "selected-list",
                  onClick: _cache[0] || (_cache[0] = (...args) => $options.handleInput && $options.handleInput(...args))
                }, [
                  ((0, import_vue6.openBlock)(true), (0, import_vue6.createElementBlock)(
                    import_vue6.Fragment,
                    null,
                    (0, import_vue6.renderList)($data.inputSelected, (item, index) => {
                      return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                        class: "selected-item",
                        key: index
                      }, [
                        (0, import_vue6.createElementVNode)(
                          "u-text",
                          { class: "text-color" },
                          (0, import_vue6.toDisplayString)(item.text),
                          1
                          /* TEXT */
                        ),
                        index < $data.inputSelected.length - 1 ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
                          "u-text",
                          {
                            key: 0,
                            class: "input-split-line"
                          },
                          (0, import_vue6.toDisplayString)($props.split),
                          1
                          /* TEXT */
                        )) : (0, import_vue6.createCommentVNode)("v-if", true)
                      ]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ])) : ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
                "u-text",
                {
                  key: 3,
                  class: "selected-area placeholder"
                },
                (0, import_vue6.toDisplayString)($props.placeholder),
                1
                /* TEXT */
              )),
              $props.clearIcon && !$props.readonly && $data.inputSelected.length ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                key: 4,
                class: "icon-clear",
                onClick: _cache[1] || (_cache[1] = (0, import_vue6.withModifiers)((...args) => $options.clear && $options.clear(...args), ["stop"]))
              }, [
                (0, import_vue6.createVNode)(_component_uni_icons, {
                  type: "clear",
                  color: "#c0c4cc",
                  size: "24"
                })
              ])) : (0, import_vue6.createCommentVNode)("v-if", true),
              (!$props.clearIcon || !$data.inputSelected.length) && !$props.readonly ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
                key: 5,
                class: "arrow-area"
              }, [
                (0, import_vue6.createElementVNode)("view", { class: "input-arrow" })
              ])) : (0, import_vue6.createCommentVNode)("v-if", true)
            ],
            2
            /* CLASS */
          )
        ])
      ]),
      $data.isOpened ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
        key: 0,
        class: "uni-data-tree-cover",
        onClick: _cache[3] || (_cache[3] = (...args) => $options.handleClose && $options.handleClose(...args))
      })) : (0, import_vue6.createCommentVNode)("v-if", true),
      $data.isOpened ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
        key: 1,
        class: "uni-data-tree-dialog"
      }, [
        (0, import_vue6.createElementVNode)("view", { class: "uni-popper__arrow" }),
        (0, import_vue6.createElementVNode)("view", { class: "dialog-caption" }, [
          (0, import_vue6.createElementVNode)("view", { class: "title-area" }, [
            (0, import_vue6.createElementVNode)(
              "u-text",
              { class: "dialog-title" },
              (0, import_vue6.toDisplayString)($props.popupTitle),
              1
              /* TEXT */
            )
          ]),
          (0, import_vue6.createElementVNode)("view", {
            class: "dialog-close",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.handleClose && $options.handleClose(...args))
          }, [
            (0, import_vue6.createElementVNode)("view", {
              class: "dialog-close-plus",
              "data-id": "close"
            }),
            (0, import_vue6.createElementVNode)("view", {
              class: "dialog-close-plus dialog-close-rotate",
              "data-id": "close"
            })
          ])
        ]),
        (0, import_vue6.createVNode)(_component_data_picker_view, {
          class: "picker-view",
          ref: "pickerView",
          modelValue: _ctx.dataValue,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.dataValue = $event),
          localdata: _ctx.localdata,
          preload: _ctx.preload,
          collection: _ctx.collection,
          field: _ctx.field,
          orderby: _ctx.orderby,
          where: _ctx.where,
          "step-searh": _ctx.stepSearh,
          "self-field": _ctx.selfField,
          "parent-field": _ctx.parentField,
          "managed-mode": true,
          map: _ctx.map,
          ellipsis: $props.ellipsis,
          onChange: $options.onchange,
          onDatachange: $options.ondatachange,
          onNodeclick: $options.onnodeclick
        }, null, 8, ["modelValue", "localdata", "preload", "collection", "field", "orderby", "where", "step-searh", "self-field", "parent-field", "map", "ellipsis", "onChange", "onDatachange", "onNodeclick"])
      ])) : (0, import_vue6.createCommentVNode)("v-if", true)
    ]);
  }
  var __easycom_6 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["styles", [_style_0$3]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/uni_modules/uni-data-picker/components/uni-data-picker/uni-data-picker.vue"]]);
  var _style_0$2 = { "uni-section": { "": { "backgroundColor": "#ffffff" } }, "uni-section-header": { ".uni-section ": { "position": "relative", "flexDirection": "row", "alignItems": "center", "paddingTop": 12, "paddingRight": 10, "paddingBottom": 12, "paddingLeft": 10, "fontWeight": "normal" } }, "uni-section-header__decoration": { ".uni-section ": { "marginRight": 6, "backgroundColor": "#2979ff" }, ".uni-section .line": { "width": 4, "height": 12, "borderRadius": 10 }, ".uni-section .circle": { "width": 8, "height": 8, "borderTopRightRadius": 50, "borderTopLeftRadius": 50, "borderBottomLeftRadius": 50, "borderBottomRightRadius": 50 }, ".uni-section .square": { "width": 8, "height": 8 } }, "uni-section-header__content": { ".uni-section ": { "flexDirection": "column", "flex": 1, "color": "#333333" } }, "distraction": { ".uni-section .uni-section-header__content ": { "flexDirection": "row", "alignItems": "center" } }, "uni-section-header__content-sub": { ".uni-section ": { "marginTop": 2 } }, "uni-section-header__slot-right": { ".uni-section ": { "fontSize": 14 } }, "uni-section-content": { ".uni-section ": { "fontSize": 14 } } };
  var _sfc_main$2 = {
    name: "UniSection",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        required: true,
        default: ""
      },
      titleFontSize: {
        type: String,
        default: "14px"
      },
      titleColor: {
        type: String,
        default: "#333"
      },
      subTitle: {
        type: String,
        default: ""
      },
      subTitleFontSize: {
        type: String,
        default: "12px"
      },
      subTitleColor: {
        type: String,
        default: "#999"
      },
      padding: {
        type: [Boolean, String],
        default: false
      }
    },
    computed: {
      _padding() {
        if (typeof this.padding === "string") {
          return this.padding;
        }
        return this.padding ? "10px" : "";
      }
    },
    watch: {
      title(newVal) {
        if (uni.report && newVal !== "") {
          uni.report("title", newVal);
        }
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
      class: "uni-section",
      renderWhole: true
    }, [
      (0, import_vue6.createElementVNode)("view", {
        class: "uni-section-header",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
      }, [
        $props.type ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
          "view",
          {
            key: 0,
            class: (0, import_vue6.normalizeClass)(["uni-section-header__decoration", $props.type])
          },
          null,
          2
          /* CLASS */
        )) : (0, import_vue6.renderSlot)(_ctx.$slots, "decoration", { key: 1 }),
        (0, import_vue6.createElementVNode)("view", { class: "uni-section-header__content" }, [
          (0, import_vue6.createElementVNode)(
            "u-text",
            {
              style: (0, import_vue6.normalizeStyle)({ "font-size": $props.titleFontSize, "color": $props.titleColor }),
              class: (0, import_vue6.normalizeClass)(["uni-section__content-title", { "distraction": !$props.subTitle }])
            },
            (0, import_vue6.toDisplayString)($props.title),
            7
            /* TEXT, CLASS, STYLE */
          ),
          $props.subTitle ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
            "u-text",
            {
              key: 0,
              style: (0, import_vue6.normalizeStyle)({ "font-size": $props.subTitleFontSize, "color": $props.subTitleColor }),
              class: "uni-section-header__content-sub"
            },
            (0, import_vue6.toDisplayString)($props.subTitle),
            5
            /* TEXT, STYLE */
          )) : (0, import_vue6.createCommentVNode)("v-if", true)
        ]),
        (0, import_vue6.createElementVNode)("view", { class: "uni-section-header__slot-right" }, [
          (0, import_vue6.renderSlot)(_ctx.$slots, "right")
        ])
      ]),
      (0, import_vue6.createElementVNode)(
        "view",
        {
          class: "uni-section-content",
          style: (0, import_vue6.normalizeStyle)({ padding: $options._padding })
        },
        [
          (0, import_vue6.renderSlot)(_ctx.$slots, "default")
        ],
        4
        /* STYLE */
      )
    ]);
  }
  var __easycom_8 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/uni_modules/uni-section/components/uni-section/uni-section.vue"]]);
  var _style_0$12 = { "segmented-control": { "": { "flexDirection": "row", "height": 36, "overflow": "hidden" } }, "segmented-control__item": { "": { "position": "relative", "flex": 1, "justifyContent": "center", "alignItems": "center" } }, "segmented-control__item--button": { "": { "borderStyle": "solid", "borderTopWidth": 1, "borderBottomWidth": 1, "borderRightWidth": 1, "borderLeftWidth": 0 } }, "segmented-control__item--button--first": { "": { "borderLeftWidth": 1, "borderTopLeftRadius": 5, "borderBottomLeftRadius": 5 } }, "segmented-control__item--button--last": { "": { "borderTopRightRadius": 5, "borderBottomRightRadius": 5 } }, "segmented-control__item--text": { "": { "borderBottomStyle": "solid", "borderBottomWidth": 2, "paddingTop": 6, "paddingRight": 0, "paddingBottom": 6, "paddingLeft": 0 } }, "segmented-control__text": { "": { "fontSize": 14, "lineHeight": 20, "textAlign": "center" } } };
  var _sfc_main$12 = {
    name: "UniSegmentedControl",
    emits: ["clickItem"],
    props: {
      current: {
        type: Number,
        default: 0
      },
      values: {
        type: Array,
        default() {
          return [];
        }
      },
      activeColor: {
        type: String,
        default: "#2979FF"
      },
      styleType: {
        type: String,
        default: "button"
      }
    },
    data() {
      return {
        currentIndex: 0
      };
    },
    watch: {
      current(val) {
        if (val !== this.currentIndex) {
          this.currentIndex = val;
        }
      }
    },
    created() {
      this.currentIndex = this.current;
    },
    methods: {
      _onClick(index) {
        if (this.currentIndex !== index) {
          this.currentIndex = index;
          this.$emit("clickItem", {
            currentIndex: index
          });
        }
      }
    }
  };
  function _sfc_render$12(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
      "view",
      {
        class: (0, import_vue6.normalizeClass)([[$props.styleType === "text" ? "segmented-control--text" : "segmented-control--button"], "segmented-control"]),
        style: (0, import_vue6.normalizeStyle)({ borderColor: $props.styleType === "text" ? "" : $props.activeColor }),
        renderWhole: true
      },
      [
        ((0, import_vue6.openBlock)(true), (0, import_vue6.createElementBlock)(
          import_vue6.Fragment,
          null,
          (0, import_vue6.renderList)($props.values, (item, index) => {
            return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("view", {
              class: (0, import_vue6.normalizeClass)([[
                $props.styleType === "text" ? "" : "segmented-control__item--button",
                index === $data.currentIndex && $props.styleType === "button" ? "segmented-control__item--button--active" : "",
                index === 0 && $props.styleType === "button" ? "segmented-control__item--button--first" : "",
                index === $props.values.length - 1 && $props.styleType === "button" ? "segmented-control__item--button--last" : ""
              ], "segmented-control__item"]),
              key: index,
              style: (0, import_vue6.normalizeStyle)({ backgroundColor: index === $data.currentIndex && $props.styleType === "button" ? $props.activeColor : "", borderColor: index === $data.currentIndex && $props.styleType === "text" || $props.styleType === "button" ? $props.activeColor : "transparent" }),
              onClick: ($event) => $options._onClick(index)
            }, [
              (0, import_vue6.createElementVNode)("view", null, [
                (0, import_vue6.createElementVNode)(
                  "u-text",
                  {
                    style: (0, import_vue6.normalizeStyle)({ color: index === $data.currentIndex ? $props.styleType === "text" ? $props.activeColor : "#fff" : $props.styleType === "text" ? "#000" : $props.activeColor }),
                    class: (0, import_vue6.normalizeClass)(["segmented-control__text", $props.styleType === "text" && index === $data.currentIndex ? "segmented-control__item--text" : ""])
                  },
                  (0, import_vue6.toDisplayString)(item),
                  7
                  /* TEXT, CLASS, STYLE */
                )
              ])
            ], 14, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      6
      /* CLASS, STYLE */
    );
  }
  var __easycom_9 = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["render", _sfc_render$12], ["styles", [_style_0$12]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.vue"]]);
  var _style_05 = { "example": { "": { "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15, "backgroundColor": "#ffffff" } }, "segmented-control": { "": { "marginBottom": 15 } }, "button-group": { "": { "marginTop": 15, "display": "flex", "justifyContent": "space-around" } }, "form-item": { "": { "display": "flex", "alignItems": "center", "flex": 1 } }, "button": { "": { "display": "flex", "alignItems": "center", "height": 35, "lineHeight": 35, "marginLeft": 10 } } };
  var _sfc_main5 = {
    data() {
      return {
        // 基础表单数据
        baseFormData: {
          name: "",
          age: "",
          introduction: "",
          sex: 2,
          hobby: [5],
          datetimesingle: 1627529992399,
          city: "",
          skills: 0
        },
        // 城市数据
        cityData: [{
          text: "\u5317\u4EAC",
          value: "10001"
        }, {
          text: "\u4E0A\u6D77",
          value: "10002"
        }, {
          text: "\u6DF1\u5733",
          value: "10004"
        }],
        skillsRange: [
          {
            value: 0,
            text: "\u7F16\u7A0B"
          },
          {
            value: 1,
            text: "\u7ED8\u753B"
          },
          {
            value: 2,
            text: "\u8FD0\u52A8"
          }
        ],
        // 表单数据
        alignmentFormData: {
          name: "",
          age: ""
        },
        // 单选数据源
        sexs: [{
          text: "\u7537",
          value: 0
        }, {
          text: "\u5973",
          value: 1
        }, {
          text: "\u4FDD\u5BC6",
          value: 2
        }],
        // 多选数据源
        hobbys: [{
          text: "\u8DD1\u6B65",
          value: 0
        }, {
          text: "\u6E38\u6CF3",
          value: 1
        }, {
          text: "\u7ED8\u753B",
          value: 2
        }, {
          text: "\u8DB3\u7403",
          value: 3
        }, {
          text: "\u7BEE\u7403",
          value: 4
        }, {
          text: "\u5176\u4ED6",
          value: 5
        }],
        // 分段器数据
        current: 0,
        items: ["\u5DE6\u5BF9\u9F50", "\u9876\u90E8\u5BF9\u9F50"],
        // 校验表单数据
        valiFormData: {
          name: "",
          age: "",
          introduction: ""
        },
        // 校验规则
        rules: {
          name: {
            rules: [{
              required: true,
              errorMessage: "\u59D3\u540D\u4E0D\u80FD\u4E3A\u7A7A"
            }]
          },
          age: {
            rules: [{
              required: true,
              errorMessage: "\u5E74\u9F84\u4E0D\u80FD\u4E3A\u7A7A"
            }, {
              format: "number",
              errorMessage: "\u5E74\u9F84\u53EA\u80FD\u8F93\u5165\u6570\u5B57"
            }]
          }
        },
        // 自定义表单数据
        customFormData: {
          name: "",
          age: "",
          hobby: []
        },
        // 自定义表单校验规则
        customRules: {
          name: {
            rules: [{
              required: true,
              errorMessage: "\u59D3\u540D\u4E0D\u80FD\u4E3A\u7A7A"
            }]
          },
          age: {
            rules: [{
              required: true,
              errorMessage: "\u5E74\u9F84\u4E0D\u80FD\u4E3A\u7A7A"
            }]
          },
          hobby: {
            rules: [
              {
                format: "array"
              },
              {
                validateFunction: function(rule, value, data, callback) {
                  if (value.length < 2) {
                    callback("\u8BF7\u81F3\u5C11\u52FE\u9009\u4E24\u4E2A\u5174\u8DA3\u7231\u597D");
                  }
                  return true;
                }
              }
            ]
          }
        },
        dynamicFormData: {
          email: "",
          domains: []
        },
        dynamicLists: [],
        dynamicRules: {
          email: {
            rules: [{
              required: true,
              errorMessage: "\u57DF\u540D\u4E0D\u80FD\u4E3A\u7A7A"
            }, {
              format: "email",
              errorMessage: "\u57DF\u540D\u683C\u5F0F\u9519\u8BEF"
            }]
          }
        }
      };
    },
    computed: {
      // 处理表单排列切换
      alignment() {
        if (this.current === 0)
          return "left";
        if (this.current === 1)
          return "top";
        return "left";
      }
    },
    onLoad() {
    },
    onReady() {
      this.$refs.customForm.setRules(this.customRules);
    },
    methods: {
      onClickItem(e2) {
        formatAppLog("log", "at pages/sample/form-ndemo.nvue:296", e2);
        this.current = e2.currentIndex;
      },
      add() {
        this.dynamicFormData.domains.push({
          label: "\u57DF\u540D",
          value: "",
          rules: [{
            "required": true,
            errorMessage: "\u57DF\u540D\u9879\u5FC5\u586B"
          }],
          id: Date.now()
        });
      },
      del(id) {
        let index = this.dynamicLists.findIndex((v2) => v2.id === id);
        this.dynamicLists.splice(index, 1);
      },
      submit(ref) {
        formatAppLog("log", "at pages/sample/form-ndemo.nvue:315", this.baseFormData);
        this.$refs[ref].validate().then((res) => {
          formatAppLog("log", "at pages/sample/form-ndemo.nvue:317", "success", res);
          uni.showToast({
            title: `\u6821\u9A8C\u901A\u8FC7`
          });
        }).catch((err) => {
          formatAppLog("log", "at pages/sample/form-ndemo.nvue:322", "err", err);
        });
      }
    }
  };
  function _sfc_render5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_data_select = resolveEasycom((0, import_vue6.resolveDynamicComponent)("uni-data-select"), __easycom_0);
    const _component_uni_card = resolveEasycom((0, import_vue6.resolveDynamicComponent)("uni-card"), __easycom_14);
    const _component_uni_easyinput = resolveEasycom((0, import_vue6.resolveDynamicComponent)("uni-easyinput"), __easycom_12);
    const _component_uni_forms_item = resolveEasycom((0, import_vue6.resolveDynamicComponent)("uni-forms-item"), __easycom_13);
    const _component_uni_data_checkbox = resolveEasycom((0, import_vue6.resolveDynamicComponent)("uni-data-checkbox"), __easycom_4);
    const _component_uni_datetime_picker = resolveEasycom((0, import_vue6.resolveDynamicComponent)("uni-datetime-picker"), __easycom_5);
    const _component_uni_data_picker = resolveEasycom((0, import_vue6.resolveDynamicComponent)("uni-data-picker"), __easycom_6);
    const _component_uni_forms = resolveEasycom((0, import_vue6.resolveDynamicComponent)("uni-forms"), __easycom_3);
    const _component_uni_section = resolveEasycom((0, import_vue6.resolveDynamicComponent)("uni-section"), __easycom_8);
    const _component_uni_segmented_control = resolveEasycom((0, import_vue6.resolveDynamicComponent)("uni-segmented-control"), __easycom_9);
    const _component_button = (0, import_vue6.resolveComponent)("button");
    return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue6.createElementVNode)("view", { class: "container" }, [
        (0, import_vue6.createElementVNode)("u-text", null, "NVUE"),
        (0, import_vue6.createVNode)(_component_uni_data_select, {
          modelValue: _ctx.skills,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.skills = $event),
          localdata: $data.skillsRange
        }, null, 8, ["modelValue", "localdata"]),
        (0, import_vue6.createVNode)(_component_uni_card, {
          "is-shadow": false,
          "is-full": ""
        }, {
          default: (0, import_vue6.withCtx)(() => [
            (0, import_vue6.createElementVNode)("u-text", { class: "uni-h6" }, "uni-forms \u7EC4\u4EF6\u4E00\u822C\u7531\u8F93\u5165\u6846\u3001\u9009\u62E9\u5668\u3001\u5355\u9009\u6846\u3001\u591A\u9009\u6846\u7B49\u63A7\u4EF6\u7EC4\u6210\uFF0C\u7528\u4EE5\u6536\u96C6\u3001\u6821\u9A8C\u3001\u63D0\u4EA4\u6570\u636E\u3002")
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue6.createVNode)(_component_uni_section, {
          title: "\u57FA\u672C\u7528\u6CD5",
          type: "line"
        }, {
          default: (0, import_vue6.withCtx)(() => [
            (0, import_vue6.createElementVNode)("view", { class: "example" }, [
              (0, import_vue6.createCommentVNode)(" \u57FA\u7840\u7528\u6CD5\uFF0C\u4E0D\u5305\u542B\u6821\u9A8C\u89C4\u5219 "),
              (0, import_vue6.createVNode)(_component_uni_forms, {
                ref: "baseForm",
                model: $data.baseFormData,
                labelWidth: "80px"
              }, {
                default: (0, import_vue6.withCtx)(() => [
                  (0, import_vue6.createVNode)(_component_uni_forms_item, {
                    label: "\u59D3\u540D",
                    required: ""
                  }, {
                    default: (0, import_vue6.withCtx)(() => [
                      (0, import_vue6.createVNode)(_component_uni_easyinput, {
                        modelValue: $data.baseFormData.name,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.baseFormData.name = $event),
                        placeholder: "\u8BF7\u8F93\u5165\u59D3\u540D"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  (0, import_vue6.createVNode)(_component_uni_forms_item, {
                    label: "\u5E74\u9F84",
                    required: ""
                  }, {
                    default: (0, import_vue6.withCtx)(() => [
                      (0, import_vue6.createVNode)(_component_uni_easyinput, {
                        modelValue: $data.baseFormData.age,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.baseFormData.age = $event),
                        placeholder: "\u8BF7\u8F93\u5165\u5E74\u9F84"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  (0, import_vue6.createVNode)(_component_uni_forms_item, {
                    label: "\u6027\u522B",
                    required: ""
                  }, {
                    default: (0, import_vue6.withCtx)(() => [
                      (0, import_vue6.createVNode)(_component_uni_data_checkbox, {
                        modelValue: $data.baseFormData.sex,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.baseFormData.sex = $event),
                        localdata: $data.sexs
                      }, null, 8, ["modelValue", "localdata"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  (0, import_vue6.createVNode)(_component_uni_forms_item, {
                    label: "\u5174\u8DA3\u7231\u597D",
                    required: ""
                  }, {
                    default: (0, import_vue6.withCtx)(() => [
                      (0, import_vue6.createVNode)(_component_uni_data_checkbox, {
                        modelValue: $data.baseFormData.hobby,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.baseFormData.hobby = $event),
                        multiple: "",
                        localdata: $data.hobbys
                      }, null, 8, ["modelValue", "localdata"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  (0, import_vue6.createVNode)(_component_uni_forms_item, { label: "\u81EA\u6211\u4ECB\u7ECD" }, {
                    default: (0, import_vue6.withCtx)(() => [
                      (0, import_vue6.createVNode)(_component_uni_easyinput, {
                        type: "textarea",
                        modelValue: $data.baseFormData.introduction,
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.baseFormData.introduction = $event),
                        placeholder: "\u8BF7\u8F93\u5165\u81EA\u6211\u4ECB\u7ECD"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  (0, import_vue6.createVNode)(_component_uni_forms_item, { label: "\u65E5\u671F\u65F6\u95F4" }, {
                    default: (0, import_vue6.withCtx)(() => [
                      (0, import_vue6.createVNode)(_component_uni_datetime_picker, {
                        type: "datetime",
                        "return-type": "timestamp",
                        modelValue: $data.baseFormData.datetimesingle,
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.baseFormData.datetimesingle = $event)
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  (0, import_vue6.createVNode)(_component_uni_forms_item, { label: "\u9009\u62E9\u57CE\u5E02" }, {
                    default: (0, import_vue6.withCtx)(() => [
                      (0, import_vue6.createVNode)(_component_uni_data_picker, {
                        modelValue: $data.baseFormData.city,
                        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.baseFormData.city = $event),
                        localdata: $data.cityData,
                        "popup-title": "\u9009\u62E9\u57CE\u5E02"
                      }, null, 8, ["modelValue", "localdata"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  (0, import_vue6.createVNode)(_component_uni_forms_item, { label: "\u9009\u62E9\u6280\u80FD" }, {
                    default: (0, import_vue6.withCtx)(() => [
                      (0, import_vue6.createVNode)(_component_uni_data_select, {
                        modelValue: $data.baseFormData.skills,
                        "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.baseFormData.skills = $event),
                        localdata: $data.skillsRange
                      }, null, 8, ["modelValue", "localdata"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["model"])
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue6.createVNode)(_component_uni_section, {
          title: "\u5BF9\u9F50\u65B9\u5F0F",
          type: "line"
        }, {
          default: (0, import_vue6.withCtx)(() => [
            (0, import_vue6.createElementVNode)("view", { class: "example" }, [
              (0, import_vue6.createElementVNode)("view", { class: "segmented-control" }, [
                (0, import_vue6.createVNode)(_component_uni_segmented_control, {
                  current: $data.current,
                  values: $data.items,
                  onClickItem: $options.onClickItem,
                  styleType: "button"
                }, null, 8, ["current", "values", "onClickItem"])
              ]),
              (0, import_vue6.createCommentVNode)(" \u5C55\u793A\u4E0D\u540C\u7684\u6392\u5217\u65B9\u5F0F "),
              (0, import_vue6.createVNode)(_component_uni_forms, {
                ref: "baseForm",
                modelValue: $data.alignmentFormData,
                "label-position": $options.alignment
              }, {
                default: (0, import_vue6.withCtx)(() => [
                  (0, import_vue6.createVNode)(_component_uni_forms_item, {
                    label: "\u59D3\u540D",
                    required: ""
                  }, {
                    default: (0, import_vue6.withCtx)(() => [
                      (0, import_vue6.createVNode)(_component_uni_easyinput, {
                        modelValue: $data.baseFormData.name,
                        "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.baseFormData.name = $event),
                        placeholder: "\u8BF7\u8F93\u5165\u59D3\u540D"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  (0, import_vue6.createVNode)(_component_uni_forms_item, {
                    label: "\u5E74\u9F84",
                    required: ""
                  }, {
                    default: (0, import_vue6.withCtx)(() => [
                      (0, import_vue6.createVNode)(_component_uni_easyinput, {
                        modelValue: $data.baseFormData.age,
                        "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $data.baseFormData.age = $event),
                        placeholder: "\u8BF7\u8F93\u5165\u5E74\u9F84"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue", "label-position"])
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue6.createVNode)(_component_uni_section, {
          title: "\u8868\u5355\u6821\u9A8C",
          type: "line"
        }, {
          default: (0, import_vue6.withCtx)(() => [
            (0, import_vue6.createElementVNode)("view", { class: "example" }, [
              (0, import_vue6.createCommentVNode)(" \u57FA\u7840\u8868\u5355\u6821\u9A8C "),
              (0, import_vue6.createVNode)(_component_uni_forms, {
                ref: "valiForm",
                rules: $data.rules,
                model: $data.valiFormData,
                labelWidth: "80px"
              }, {
                default: (0, import_vue6.withCtx)(() => [
                  (0, import_vue6.createVNode)(_component_uni_forms_item, {
                    label: "\u59D3\u540D",
                    required: "",
                    name: "name"
                  }, {
                    default: (0, import_vue6.withCtx)(() => [
                      (0, import_vue6.createVNode)(_component_uni_easyinput, {
                        modelValue: $data.valiFormData.name,
                        "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $data.valiFormData.name = $event),
                        placeholder: "\u8BF7\u8F93\u5165\u59D3\u540D"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  (0, import_vue6.createVNode)(_component_uni_forms_item, {
                    label: "\u5E74\u9F84",
                    required: "",
                    name: "age"
                  }, {
                    default: (0, import_vue6.withCtx)(() => [
                      (0, import_vue6.createVNode)(_component_uni_easyinput, {
                        modelValue: $data.valiFormData.age,
                        "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $data.valiFormData.age = $event),
                        placeholder: "\u8BF7\u8F93\u5165\u5E74\u9F84"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  (0, import_vue6.createVNode)(_component_uni_forms_item, { label: "\u81EA\u6211\u4ECB\u7ECD" }, {
                    default: (0, import_vue6.withCtx)(() => [
                      (0, import_vue6.createVNode)(_component_uni_easyinput, {
                        type: "textarea",
                        modelValue: $data.valiFormData.introduction,
                        "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $data.valiFormData.introduction = $event),
                        placeholder: "\u8BF7\u8F93\u5165\u81EA\u6211\u4ECB\u7ECD"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["rules", "model"]),
              (0, import_vue6.createVNode)(_component_button, {
                type: "primary",
                onClick: _cache[14] || (_cache[14] = ($event) => $options.submit("valiForm"))
              }, {
                default: (0, import_vue6.withCtx)(() => [
                  (0, import_vue6.createTextVNode)("\u63D0\u4EA4")
                ]),
                _: 1
                /* STABLE */
              })
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue6.createVNode)(_component_uni_section, {
          title: "\u81EA\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219",
          type: "line"
        }, {
          default: (0, import_vue6.withCtx)(() => [
            (0, import_vue6.createElementVNode)("view", { class: "example" }, [
              (0, import_vue6.createCommentVNode)(" \u81EA\u5B9A\u4E49\u8868\u5355\u6821\u9A8C "),
              (0, import_vue6.createVNode)(_component_uni_forms, {
                ref: "customForm",
                rules: $data.customRules,
                labelWidth: "80px",
                modelValue: $data.customFormData
              }, {
                default: (0, import_vue6.withCtx)(() => [
                  (0, import_vue6.createVNode)(_component_uni_forms_item, {
                    label: "\u59D3\u540D",
                    required: "",
                    name: "name"
                  }, {
                    default: (0, import_vue6.withCtx)(() => [
                      (0, import_vue6.createVNode)(_component_uni_easyinput, {
                        modelValue: $data.customFormData.name,
                        "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $data.customFormData.name = $event),
                        placeholder: "\u8BF7\u8F93\u5165\u59D3\u540D"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  (0, import_vue6.createVNode)(_component_uni_forms_item, {
                    label: "\u5E74\u9F84",
                    required: "",
                    name: "age"
                  }, {
                    default: (0, import_vue6.withCtx)(() => [
                      (0, import_vue6.createVNode)(_component_uni_easyinput, {
                        modelValue: $data.customFormData.age,
                        "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => $data.customFormData.age = $event),
                        placeholder: "\u8BF7\u8F93\u5165\u5E74\u9F84"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  (0, import_vue6.createVNode)(_component_uni_forms_item, {
                    label: "\u5174\u8DA3\u7231\u597D",
                    required: "",
                    name: "hobby"
                  }, {
                    default: (0, import_vue6.withCtx)(() => [
                      (0, import_vue6.createVNode)(_component_uni_data_checkbox, {
                        modelValue: $data.customFormData.hobby,
                        "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => $data.customFormData.hobby = $event),
                        multiple: "",
                        localdata: $data.hobbys
                      }, null, 8, ["modelValue", "localdata"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["rules", "modelValue"]),
              (0, import_vue6.createVNode)(_component_button, {
                type: "primary",
                onClick: _cache[18] || (_cache[18] = ($event) => $options.submit("customForm"))
              }, {
                default: (0, import_vue6.withCtx)(() => [
                  (0, import_vue6.createTextVNode)("\u63D0\u4EA4")
                ]),
                _: 1
                /* STABLE */
              })
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue6.createVNode)(_component_uni_section, {
          title: "\u52A8\u6001\u8868\u5355",
          type: "line"
        }, {
          default: (0, import_vue6.withCtx)(() => [
            (0, import_vue6.createElementVNode)("view", { class: "example" }, [
              (0, import_vue6.createCommentVNode)(" \u52A8\u6001\u8868\u5355\u6821\u9A8C "),
              (0, import_vue6.createVNode)(_component_uni_forms, {
                ref: "dynamicForm",
                rules: $data.dynamicRules,
                model: $data.dynamicFormData,
                labelWidth: "80px"
              }, {
                default: (0, import_vue6.withCtx)(() => [
                  (0, import_vue6.createVNode)(_component_uni_forms_item, {
                    label: "\u90AE\u7BB1",
                    required: "",
                    name: "email"
                  }, {
                    default: (0, import_vue6.withCtx)(() => [
                      (0, import_vue6.createVNode)(_component_uni_easyinput, {
                        modelValue: $data.dynamicFormData.email,
                        "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => $data.dynamicFormData.email = $event),
                        placeholder: "\u8BF7\u8F93\u5165\u59D3\u540D"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  ((0, import_vue6.openBlock)(true), (0, import_vue6.createElementBlock)(
                    import_vue6.Fragment,
                    null,
                    (0, import_vue6.renderList)($data.dynamicFormData.domains, (item, index) => {
                      return (0, import_vue6.openBlock)(), (0, import_vue6.createBlock)(_component_uni_forms_item, {
                        key: item.id,
                        label: item.label + " " + index,
                        required: "",
                        rules: item.rules,
                        name: ["domains", index, "value"]
                      }, {
                        default: (0, import_vue6.withCtx)(() => [
                          (0, import_vue6.createElementVNode)("view", { class: "form-item" }, [
                            (0, import_vue6.createVNode)(_component_uni_easyinput, {
                              modelValue: $data.dynamicFormData.domains[index].value,
                              "onUpdate:modelValue": ($event) => $data.dynamicFormData.domains[index].value = $event,
                              placeholder: "\u8BF7\u8F93\u5165\u57DF\u540D"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            (0, import_vue6.createVNode)(_component_button, {
                              class: "button",
                              size: "mini",
                              type: "default",
                              onClick: ($event) => $options.del(item.id)
                            }, {
                              default: (0, import_vue6.withCtx)(() => [
                                (0, import_vue6.createTextVNode)("\u5220\u9664")
                              ]),
                              _: 2
                              /* DYNAMIC */
                            }, 1032, ["onClick"])
                          ])
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["label", "rules", "name"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["rules", "model"]),
              (0, import_vue6.createElementVNode)("view", { class: "button-group" }, [
                (0, import_vue6.createVNode)(_component_button, {
                  type: "primary",
                  size: "mini",
                  onClick: $options.add
                }, {
                  default: (0, import_vue6.withCtx)(() => [
                    (0, import_vue6.createTextVNode)("\u65B0\u589E\u57DF\u540D")
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["onClick"]),
                (0, import_vue6.createVNode)(_component_button, {
                  type: "primary",
                  size: "mini",
                  onClick: _cache[20] || (_cache[20] = ($event) => $options.submit("dynamicForm"))
                }, {
                  default: (0, import_vue6.withCtx)(() => [
                    (0, import_vue6.createTextVNode)("\u63D0\u4EA4")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]);
  }
  var formNdemo = /* @__PURE__ */ _export_sfc(_sfc_main5, [["render", _sfc_render5], ["styles", [_style_05]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/pages/sample/form-ndemo.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/sample/form-ndemo";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e2) {
    }
    formNdemo.mpType = "page";
    const app = Vue.createPageApp(formNdemo, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...formNdemo.styles || []]));
    app.mount("#root");
  }
})();
