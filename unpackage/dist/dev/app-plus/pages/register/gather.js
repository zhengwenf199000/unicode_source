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

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/pages/register/gather.js
  var import_vue4 = __toESM(require_vue());

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/http.js
  var import_vue3 = __toESM(require_vue());
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
  function isObject(input) {
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
  function isNumber(input) {
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
      var t = Object(this), len = t.length >>> 0, i;
      for (i = 0; i < len; i++) {
        if (i in t && fun.call(this, t[i], i, t)) {
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
        if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
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
      if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
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
    if (isNumber(callback)) {
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
        if (!isNumber(value)) {
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
  function normalizeLocale(key) {
    return key ? key.toLowerCase().replace("_", "-") : key;
  }
  function chooseLocale(names) {
    var i = 0, j, next, locale2, split;
    while (i < names.length) {
      split = normalizeLocale(names[i]).split("-");
      j = split.length;
      next = normalizeLocale(names[i + 1]);
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
    } else if (isObject(input)) {
      configFromObject(config);
    } else if (isNumber(input)) {
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
    if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
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
    } else if (isNumber(input) || !isNaN(+input)) {
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
    return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === void 0;
  }
  function isMomentInputObject(input) {
    var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
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
        return !isNumber(item) && isString(input);
      }).length === 0;
    }
    return arrayTest && dataTypeTest;
  }
  function isCalendarSpec(input) {
    var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
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
  function toString() {
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
  proto.toString = toString;
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
    if (isNumber(format2)) {
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
      if (isNumber(format2)) {
        index2 = format2;
        format2 = void 0;
      }
      format2 = format2 || "";
    } else {
      format2 = localeSorted;
      index2 = format2;
      localeSorted = false;
      if (isNumber(format2)) {
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
  var moduleFaceCompare = {
    compareFeature: (face1, face2, callback) => {
    }
  };
  {
    moduleFaceCompare = requireNativePlugin("ModuleFaceCompare");
  }
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

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/Finger.js
  var _imports_12 = "/static/imgs/Finger.png";

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/Voice.js
  var _imports_2 = "/static/imgs/Voice.png";

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/pages/register/gather.js
  var _style_02 = { "gather_content-breadcrumb": { ".gather_content ": { "height": 50, "flexDirection": "row", "alignItems": "center" } }, "gather_content-breadcrumb--textnormal": { ".gather_content .gather_content-breadcrumb ": { "color": "#666666", "fontSize": 16, "fontWeight": "bold" } }, "gather_content-breadcrumb--textseg": { ".gather_content .gather_content-breadcrumb ": { "marginLeft": 10, "marginRight": 12, "width": 10, "height": 10, "borderTopWidth": 2, "borderTopStyle": "solid", "borderTopColor": "#666666", "borderRightWidth": 2, "borderRightStyle": "solid", "borderRightColor": "#666666", "transform": "rotate(45deg)" } }, "gather_content-breadcrumb--textaction": { ".gather_content .gather_content-breadcrumb ": { "color": "#006AEC", "fontSize": 16, "fontWeight": "bold" } }, "gather_content-c": { ".gather_content ": { "flex": 1, "backgroundColor": "#ffffff", "marginBottom": 15 } }, "gather_content-c--fingerprint": { ".gather_content .gather_content-c ": { "flex": 1, "justifyContent": "center", "alignItems": "center" } }, "gather_content-c--fingerprint---status": { ".gather_content .gather_content-c .gather_content-c--fingerprint ": { "fontSize": 20, "fontWeight": "bold", "color": "#006AEC" } }, "gather_content-c--fingerprint---component": { ".gather_content .gather_content-c .gather_content-c--fingerprint ": { "marginTop": 30, "width": 200, "height": 240, "display": "flex" } }, "gather_content-c--fingerprint---component_icon": { ".gather_content .gather_content-c .gather_content-c--fingerprint ": { "position": "absolute", "left": 0, "top": 0, "width": 200, "height": 240 } }, "gather_content-c--fingerprint---component_fp": { ".gather_content .gather_content-c .gather_content-c--fingerprint ": { "flex": 1 } }, "gather_content-c--audio": { ".gather_content .gather_content-c ": { "paddingTop": 20, "paddingRight": 20, "paddingBottom": 20, "paddingLeft": 20, "flex": 1, "alignItems": "center", "justifyContent": "space-around" } }, "gather_content-c--audio---btn": { ".gather_content .gather_content-c .gather_content-c--audio ": { "width": 100, "height": 100 } }, "gather_content-c--audio---status": { ".gather_content .gather_content-c .gather_content-c--audio ": { "paddingTop": 10, "textAlign": "center", "color": "#006AEC" } }, "gather_content-c--audio---tint": { ".gather_content .gather_content-c .gather_content-c--audio ": { "marginTop": 20, "color": "#006AEC", "fontSize": 18, "fontWeight": "bold", "textAlign": "center" } }, "gather_content-c--audio---sample": { ".gather_content .gather_content-c .gather_content-c--audio ": { "alignItems": "flex-start" } }, "gather_content-c--audio---sample----tipb": { ".gather_content .gather_content-c .gather_content-c--audio .gather_content-c--audio---sample ": { "color": "#006AEC", "fontSize": 18, "fontWeight": "bold" } }, "gather_content-c--audio---sample----tip": { ".gather_content .gather_content-c .gather_content-c--audio .gather_content-c--audio---sample ": { "color": "#006AEC", "fontSize": 16, "marginTop": 5 } }, "gather_content-c--recognizeFace": { ".gather_content .gather_content-c ": { "flex": 1, "alignItems": "center", "justifyContent": "center" } }, "gather_content-c--recognizeFace---status": { ".gather_content .gather_content-c .gather_content-c--recognizeFace ": { "fontSize": 24, "fontWeight": "bold", "color": "#006AEC" } }, "gather_content-c--recognizeFace---alive_detect": { ".gather_content .gather_content-c .gather_content-c--recognizeFace ": { "marginTop": 20, "width": 800, "height": 300, "backgroundColor": "#F5DEB3" } } };
  var recorderManager = uni.getRecorderManager();
  var _sfc_main2 = {
    mixins: [userInactiveMixin],
    data() {
      return {
        step: 0,
        gettedFingerpath: "",
        fingerpath: "",
        recording: false,
        recordFile: "",
        facePath: ""
      };
    },
    computed: {
      status() {
        if (this.step === 0) {
          return "\u4EBA\u8138\u91C7\u96C6";
        }
        if (this.step === 1) {
          return "\u6307\u7EB9\u91C7\u96C6";
        }
        return "\u58F0\u7EB9\u91C7\u96C6";
      }
    },
    watch: {
      step(newV) {
        if (newV === 0)
          ;
        else if (newV === 1) {
          this.startFingerprint();
        } else
          ;
      }
    },
    onLoad(options) {
      const {
        idnum
      } = options;
      this.idnum = idnum;
      this.onRecorderStop();
    },
    onReady() {
      if (this.step === 0) {
        this.startAliveDetecting();
      } else if (this.step === 1) {
        this.startFingerprint();
      }
    },
    methods: {
      homeClick() {
        uni.reLaunch({
          url: "/pages/home/home"
        });
      },
      testClick() {
      },
      trydo(doo) {
        try {
          doo && doo();
        } catch (e) {
          uni.showToast({
            title: e.message,
            icon: "none",
            duration: 3e3
          });
        }
      },
      startAliveDetecting() {
        setTimeout(() => {
          this.trydo(() => {
            this.$refs.alive_detect.startDetecting((path) => {
              formatAppLog("log", "at pages/register/gather.nvue:139", path);
              if (path) {
                this.$refs.alive_detect.stopDetecting();
                this.upload(path, "renlian", (remote) => {
                  this.facePath = remote;
                  this.saveBiosignature(remote, 1, () => {
                    this.nextStep();
                  });
                });
              }
            });
          });
        }, 1500);
      },
      onRecorderStop() {
        recorderManager.onStop((r) => {
          this.recordFile = r.tempFilePath;
          formatAppLog("log", "at pages/register/gather.nvue:164", r.tempFilePath);
          this.upload(r.tempFilePath, "shenwen", (remote) => {
            this.recordFile = remote;
            this.saveBiosignature(remote, 3, () => {
              formatAppLog("log", "at pages/register/gather.nvue:170", "\u58F0\u7EB9\u91C7\u96C6\u5B8C\u6BD5\uFF01");
              uni.showToast({
                title: "\u58F0\u7EB9\u91C7\u96C6\u5B8C\u6210"
              });
              this.nextStep();
            });
          });
        });
      },
      startFingerprint() {
        uni.$u.sleep(1500).then(() => {
          this.trydo(() => {
            this.$refs.fingerprint.getFingerprintImage((path) => {
              if (path) {
                this.gettedFingerpath = path;
                this.upload(path, "zhiwen", (remote) => {
                  this.fingerpath = remote;
                  this.saveBiosignature(remote, 2, () => {
                    uni.showToast({
                      title: "\u6307\u7EB9\u91C7\u96C6\u5B8C\u6210"
                    });
                    this.$refs.fingerprint.closeFingerprint();
                    this.nextStep();
                  });
                });
              }
            });
          });
        });
      },
      nextStep() {
        if (this.step >= 2) {
          uni.showToast({
            title: "\u4F53\u5F81\u91C7\u96C6\u5DF2\u5B8C\u6210",
            icon: "none"
          });
          uni.$u.sleep(1e3).then(() => {
            uni.navigateBack();
          });
          return;
        }
        this.step++;
      },
      upload(path, type, successCallback) {
        uni.showLoading({
          title: "\u4E0A\u4F20\u4E2D..."
        });
        upload(path, type).then((remote) => {
          uni.hideLoading();
          successCallback(remote);
        }).catch((err) => {
          uni.showToast({
            title: err,
            icon: "none"
          });
        });
      },
      saveBiosignature(filePath, type, successCallback) {
        const api = `${apis.saveBiosignature}?id_num=${this.idnum}&tzlx=${type}&filePath=${filePath}`;
        uni.showLoading({
          title: "\u6B63\u5728\u4FDD\u5B58\u7279\u5F81..."
        });
        requestApi(api, null, { token: this.$store.getters.token }).then((data) => {
          uni.hideLoading();
          successCallback();
        }).catch((err) => {
          uni.showToast({
            title: err,
            icon: "none"
          });
          uni.$u.sleep(1e3).then(() => {
            uni.navigateBack();
          });
        });
      },
      startOrStopRecording() {
        this.recording ? this.stopRecording() : this.startRecording();
        this.recording = !this.recording;
      },
      startRecording() {
        recorderManager.start({
          duration: 6e5
        });
      },
      stopRecording() {
        recorderManager.stop();
      }
    }
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_content_bg = resolveEasycom((0, import_vue4.resolveDynamicComponent)("content-bg"), __easycom_0);
    const _component_alive_detect = (0, import_vue4.resolveComponent)("alive-detect");
    const _component_swiper_item = (0, import_vue4.resolveComponent)("swiper-item");
    const _component_finger_print = (0, import_vue4.resolveComponent)("finger-print");
    const _component_swiper = (0, import_vue4.resolveComponent)("swiper");
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue4.createElementVNode)("view", {
        class: "content gather_content",
        onClick: _cache[2] || (_cache[2] = (...args) => _ctx.capture && _ctx.capture(...args))
      }, [
        (0, import_vue4.createVNode)(_component_content_bg),
        (0, import_vue4.createElementVNode)("view", { class: "content-nav" }, [
          (0, import_vue4.createElementVNode)("u-image", {
            class: "content-nav-home",
            src: _imports_02,
            mode: "widthFix",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.homeClick && $options.homeClick(...args))
          })
        ]),
        (0, import_vue4.createElementVNode)("view", { class: "content-c" }, [
          (0, import_vue4.createElementVNode)("view", { class: "gather_content-breadcrumb" }, [
            (0, import_vue4.createElementVNode)("u-text", { class: "gather_content-breadcrumb--textnormal" }, "\u4F53\u5F81\u91C7\u96C6"),
            (0, import_vue4.createElementVNode)("view", { class: "gather_content-breadcrumb--textseg" }),
            (0, import_vue4.createElementVNode)(
              "u-text",
              { class: "gather_content-breadcrumb--textaction" },
              (0, import_vue4.toDisplayString)($options.status),
              1
              /* TEXT */
            )
          ]),
          (0, import_vue4.createVNode)(_component_swiper, {
            class: "gather_content-c",
            current: $data.step,
            "disable-touch": true
          }, {
            default: (0, import_vue4.withCtx)(() => [
              (0, import_vue4.createVNode)(_component_swiper_item, null, {
                default: (0, import_vue4.withCtx)(() => [
                  (0, import_vue4.createElementVNode)("view", { class: "gather_content-c--recognizeFace" }, [
                    (0, import_vue4.createElementVNode)("u-text", { class: "gather_content-c--recognizeFace---status" }, "\u6B63\u5728\u68C0\u6D4B\u4EBA\u8138..."),
                    $data.step === 0 ? ((0, import_vue4.openBlock)(), (0, import_vue4.createBlock)(_component_alive_detect, {
                      key: 0,
                      ref: "alive_detect",
                      class: "gather_content-c--recognizeFace---alive_detect",
                      cameratype: "black",
                      onOnDetectFailure: _ctx.detectFailure,
                      onOnDetectSuccess: _ctx.detectSuccess
                    }, null, 8, ["onOnDetectFailure", "onOnDetectSuccess"])) : (0, import_vue4.createCommentVNode)("v-if", true),
                    (0, import_vue4.createCommentVNode)(' <image style="height: 200; width: 200; background: red" :src="facePath"></image> ')
                  ])
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue4.createVNode)(_component_swiper_item, null, {
                default: (0, import_vue4.withCtx)(() => [
                  (0, import_vue4.createElementVNode)("view", { class: "gather_content-c--fingerprint" }, [
                    (0, import_vue4.createElementVNode)("u-text", { class: "gather_content-c--fingerprint---status" }, "\u8BF7\u6309\u538B\u6307\u7EB9..."),
                    (0, import_vue4.createElementVNode)("view", { class: "gather_content-c--fingerprint---component" }, [
                      !$data.gettedFingerpath ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("u-image", {
                        key: 0,
                        class: "gather_content-c--fingerprint---component_icon",
                        src: _imports_12
                      })) : (0, import_vue4.createCommentVNode)("v-if", true),
                      $data.step === 1 ? ((0, import_vue4.openBlock)(), (0, import_vue4.createBlock)(
                        _component_finger_print,
                        {
                          key: 1,
                          ref: "fingerprint",
                          class: "gather_content-c--fingerprint---component_fp"
                        },
                        null,
                        512
                        /* NEED_PATCH */
                      )) : (0, import_vue4.createCommentVNode)("v-if", true)
                    ])
                  ])
                ]),
                _: 1
                /* STABLE */
              }),
              (0, import_vue4.createVNode)(_component_swiper_item, null, {
                default: (0, import_vue4.withCtx)(() => [
                  (0, import_vue4.createElementVNode)("view", { class: "gather_content-c--audio" }, [
                    (0, import_vue4.createElementVNode)("view", { style: { "align-items": "center" } }, [
                      (0, import_vue4.createElementVNode)("u-image", {
                        class: "gather_content-c--audio---btn",
                        src: _imports_2,
                        onClick: _cache[1] || (_cache[1] = (...args) => $options.startOrStopRecording && $options.startOrStopRecording(...args))
                      }),
                      (0, import_vue4.createElementVNode)(
                        "u-text",
                        { class: "gather_content-c--audio---btn gather_content-c--audio---status" },
                        (0, import_vue4.toDisplayString)($data.recording ? "\u6B63\u5728\u5F55\u5236..." : ""),
                        1
                        /* TEXT */
                      ),
                      (0, import_vue4.createElementVNode)(
                        "u-text",
                        { class: "gather_content-c--audio---tint" },
                        (0, import_vue4.toDisplayString)($data.recording ? "\u8BF7\u70B9\u51FB\u5F55\u5236\u6309\u94AE\u7ED3\u675F\u5F55\u5236" : "\u8BF7\u70B9\u51FB\u5F55\u5236\u6309\u94AE\uFF0C\u8D34\u8FD1\u9EA6\u514B\u98CE\u5F00\u59CB\u5F55\u5236"),
                        1
                        /* TEXT */
                      )
                    ]),
                    (0, import_vue4.createElementVNode)("view", { class: "gather_content-c--audio---sample" }, [
                      (0, import_vue4.createElementVNode)("u-text", { class: "gather_content-c--audio---sample----tipb" }, "\u60A8\u53EF\u4EE5\u6717\u8BFB\u4E0B\u9762\u8FD9\u6BB5\u6587\u5B57\uFF1A"),
                      (0, import_vue4.createElementVNode)("u-text", { class: "gather_content-c--audio---sample----tip" }, "\u6211\u662F***\u53F8\u6CD5\u6240\u7684\u77EB\u6B63\u5BF9\u8C61***\uFF0C\u8FD1\u671F\u6211\u90FD\u6709\u8BA4\u771F\u53CD\u601D\u81EA\u5DF1\u6240\u72AF\u7684\u7F6A\u884C\uFF0C\u5E76\u5145\u5206\u8BA4\u8BC6\u5230\u7F6A\u884C\u7684\u4E25\u91CD\u6027\uFF0C\u4EE5\u540E\u7EDD\u4E0D\u518D\u72AF\uFF0C\u6211\u670D\u4ECE\u77EB\u6B63\u673A\u6784\u7684\u7BA1\u7406\uFF0C\u63A5\u53D7\u53F8\u6CD5\u673A\u5173\u7684\u76D1\u7763\uFF0C\u6211\u4F1A\u6309\u65F6\u53C2\u52A0\u77EB\u6B63\u673A\u6784\u7EC4\u7EC7\u7684\u6559\u80B2\u5B66\u4E60\u3001\u793E\u533A\u670D\u52A1\u6D3B\u52A8\uFF0C\u4E3B\u52A8\u7B7E\u5230\u4E0A\u62A5\u4F4D\u7F6E\uFF0C\u6C47\u62A5\u601D\u60F3\u3001\u6C47\u62A5\u4E2A\u4EBA\u6D3B\u52A8\u60C5\u51B5\uFF0C\u6211\u670D\u4ECE\u77EB\u6B63\u673A\u6784\u7684\u5B89\u6392\uFF0C\u79EF\u6781\u8FDB\u53D6\uFF0C\u529B\u4E89\u65E9\u65E5\u6210\u4E3A\u4E00\u4E2A\u5408\u683C\u7684\u516C\u6C11\u3002\u6C47\u62A5\u4EBA\uFF1A***")
                    ])
                  ])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["current"])
        ])
      ])
    ]);
  }
  var gather = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/pages/register/gather.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/register/gather";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    gather.mpType = "page";
    const app = Vue.createPageApp(gather, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...gather.styles || []]));
    app.mount("#root");
  }
})();
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
