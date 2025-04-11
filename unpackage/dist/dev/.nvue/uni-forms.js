import { _ as __easycom_1$1 } from "./uni-icons.js";
import { resolveDynamicComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, createBlock, createCommentVNode, Fragment, renderSlot, resolveComponent, createVNode, withCtx } from "vue";
import { r as resolveEasycom, f as formatAppLog } from "./uni-app.es.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.js";
const _style_0$1 = { "uni-easyinput": { "": { "flex": 1, "position": "relative", "textAlign": "left", "color": "#333333", "fontSize": 14 } }, "uni-easyinput__content": { "": { "flex": 1, "flexDirection": "row", "alignItems": "center", "borderColor": "#ffffff", "transitionProperty": "borderColor", "transitionDuration": 300 } }, "uni-easyinput__content-input": { "": { "position": "relative", "overflow": "hidden", "flex": 1, "lineHeight": 1, "fontSize": 14, "height": 35 } }, "uni-easyinput__placeholder-class": { "": { "color": "#999999", "fontSize": 12 }, ".is-input-error-border ": { "color": "#f29e99" }, ".is-disabled ": { "color": "#d5d5d5", "fontSize": 12 } }, "is-textarea": { "": { "alignItems": "flex-start" } }, "is-textarea-icon": { "": { "marginTop": 5 } }, "uni-easyinput__content-textarea": { "": { "position": "relative", "overflow": "hidden", "flex": 1, "lineHeight": 1.5, "fontSize": 14, "marginTop": 6, "marginRight": 6, "marginBottom": 6, "marginLeft": 0, "height": 80, "minHeight": "80px" } }, "input-padding": { "": { "paddingLeft": 10 } }, "content-clear-icon": { "": { "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 5 } }, "label-icon": { "": { "marginRight": 5, "marginTop": -1 } }, "is-input-border": { "": { "flexDirection": "row", "alignItems": "center", "borderWidth": 1, "borderStyle": "solid", "borderColor": "#dcdfe6", "borderRadius": 4 } }, "uni-error-message": { "": { "position": "absolute", "bottom": -17, "left": 0, "lineHeight": 12, "color": "#e43d33", "fontSize": 12, "textAlign": "left" } }, "uni-error-msg--boeder": { "": { "position": "relative", "bottom": 0, "lineHeight": 22 } }, "is-input-error-border": { "": { "borderColor": "#e43d33" } }, "uni-easyinput--border": { "": { "marginBottom": 0, "paddingTop": 10, "paddingRight": 15, "paddingBottom": 10, "paddingLeft": 15, "borderTopWidth": 1, "borderTopStyle": "solid", "borderTopColor": "#eeeeee" } }, "uni-easyinput-error": { "": { "paddingBottom": 0 } }, "is-first-border": { "": { "borderWidth": 0 } }, "is-disabled": { "": { "backgroundColor": "#f7f6f6", "color": "#d5d5d5" } }, "@TRANSITION": { "uni-easyinput__content": { "property": "borderColor", "duration": 300 } } };
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
const _sfc_main$1 = {
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
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_1$1);
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["uni-easyinput", { "uni-easyinput-error": $options.msg }]),
      style: normalizeStyle($options.boxStyle),
      renderWhole: true
    },
    [
      createElementVNode(
        "view",
        {
          class: normalizeClass(["uni-easyinput__content", $options.inputContentClass]),
          style: normalizeStyle($options.inputContentStyle)
        },
        [
          $props.prefixIcon ? (openBlock(), createBlock(_component_uni_icons, {
            key: 0,
            class: "content-clear-icon",
            type: $props.prefixIcon,
            color: "#c0c4cc",
            onClick: _cache[0] || (_cache[0] = ($event) => $options.onClickIcon("prefix")),
            size: "22"
          }, null, 8, ["type"])) : createCommentVNode("v-if", true),
          $props.type === "textarea" ? (openBlock(), createElementBlock("u-textarea", {
            key: 1,
            class: normalizeClass(["uni-easyinput__content-textarea", { "input-padding": $props.inputBorder }]),
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
          }, null, 42, ["name", "value", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "autoHeight"])) : (openBlock(), createElementBlock("u-input", {
            key: 2,
            type: $props.type === "password" ? "text" : $props.type,
            class: "uni-easyinput__content-input",
            style: normalizeStyle($options.inputStyle),
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
          $props.type === "password" && $props.passwordIcon ? (openBlock(), createElementBlock(
            Fragment,
            { key: 3 },
            [
              createCommentVNode(" 开启密码时显示小眼睛 "),
              $options.isVal ? (openBlock(), createBlock(_component_uni_icons, {
                key: 0,
                class: normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
                type: $data.showPassword ? "eye-slash-filled" : "eye-filled",
                size: 22,
                color: $data.focusShow ? $props.primaryColor : "#c0c4cc",
                onClick: $options.onEyes
              }, null, 8, ["class", "type", "color", "onClick"])) : createCommentVNode("v-if", true)
            ],
            64
            /* STABLE_FRAGMENT */
          )) : $props.suffixIcon ? (openBlock(), createElementBlock(
            Fragment,
            { key: 4 },
            [
              $props.suffixIcon ? (openBlock(), createBlock(_component_uni_icons, {
                key: 0,
                class: "content-clear-icon",
                type: $props.suffixIcon,
                color: "#c0c4cc",
                onClick: _cache[9] || (_cache[9] = ($event) => $options.onClickIcon("suffix")),
                size: "22"
              }, null, 8, ["type"])) : createCommentVNode("v-if", true)
            ],
            64
            /* STABLE_FRAGMENT */
          )) : (openBlock(), createElementBlock(
            Fragment,
            { key: 5 },
            [
              $props.clearable && $options.isVal && !$props.disabled && $props.type !== "textarea" ? (openBlock(), createBlock(_component_uni_icons, {
                key: 0,
                class: normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
                type: "clear",
                size: $props.clearSize,
                color: $options.msg ? "#dd524d" : $data.focusShow ? $props.primaryColor : "#c0c4cc",
                onClick: $options.onClear
              }, null, 8, ["class", "size", "color", "onClick"])) : createCommentVNode("v-if", true)
            ],
            64
            /* STABLE_FRAGMENT */
          )),
          renderSlot(_ctx.$slots, "right")
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue"]]);
var pattern = {
  email: /^\S+?@\S+?\.\S+?$/,
  idcard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
  url: new RegExp(
    "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
    "i"
  )
};
const FORMAT_MAPPING = {
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
const types = {
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
class RuleValidator {
  constructor(message) {
    this._message = message;
  }
  async validateRule(fieldKey, fieldValue, value, data, allData) {
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
        let now = Date.now();
        let resultExpr = rule.validateExpr(value, allData, now);
        if (resultExpr === false) {
          result = this._getMessage(rule, rule.errorMessage || this._message["default"]);
          break;
        }
      }
      if (rule.validateFunction) {
        result = await this.validateFunction(rule, value, data, allData, vt);
        if (result !== null) {
          break;
        }
      }
    }
    if (result !== null) {
      result = message.TAG + result;
    }
    return result;
  }
  async validateFunction(rule, value, data, allData, vt) {
    let result = null;
    try {
      let callbackMessage = null;
      const res = await rule.validateFunction(rule, value, allData || data, (message) => {
        callbackMessage = message;
      });
      if (callbackMessage || typeof res === "string" && res || res === false) {
        result = this._getMessage(rule, callbackMessage || res, vt);
      }
    } catch (e) {
      result = this._getMessage(rule, e.message, vt);
    }
    return result;
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
}
const RuleValidatorHelper = {
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
    for (let i = 0; i < range.length; i++) {
      const item = range[i];
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
class SchemaValidator extends RuleValidator {
  constructor(schema, options) {
    super(SchemaValidator.message);
    this._schema = schema;
    this._options = options || null;
  }
  updateSchema(schema) {
    this._schema = schema;
  }
  async validate(data, allData) {
    let result = this._checkFieldInSchema(data);
    if (!result) {
      result = await this.invokeValidate(data, false, allData);
    }
    return result.length ? result[0] : null;
  }
  async validateAll(data, allData) {
    let result = this._checkFieldInSchema(data);
    if (!result) {
      result = await this.invokeValidate(data, true, allData);
    }
    return result;
  }
  async validateUpdate(data, allData) {
    let result = this._checkFieldInSchema(data);
    if (!result) {
      result = await this.invokeValidateUpdate(data, false, allData);
    }
    return result.length ? result[0] : null;
  }
  async invokeValidate(data, all, allData) {
    let result = [];
    let schema = this._schema;
    for (let key in schema) {
      let value = schema[key];
      let errorMessage = await this.validateRule(key, value, data[key], data, allData);
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
  }
  async invokeValidateUpdate(data, all, allData) {
    let result = [];
    for (let key in data) {
      let errorMessage = await this.validateRule(key, this._schema[key], data[key], data, allData);
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
    }, SchemaValidator.message.TAG + SchemaValidator.message["defaultInvalid"]);
    return [{
      key: "invalid",
      errorMessage
    }];
  }
}
function Message() {
  return {
    TAG: "",
    default: "验证错误",
    defaultInvalid: "提交的字段{field}在数据库中并不存在",
    validateFunction: "验证无效",
    required: "{label}必填",
    "enum": "{label}超出范围",
    timestamp: "{label}格式无效",
    whitespace: "{label}不能为空",
    typeError: "{label}类型无效",
    date: {
      format: "{label}日期{value}格式无效",
      parse: "{label}日期无法解析,{value}无效",
      invalid: "{label}日期{value}无效"
    },
    length: {
      minLength: "{label}长度不能少于{minLength}",
      maxLength: "{label}长度不能超过{maxLength}",
      range: "{label}必须介于{minLength}和{maxLength}之间"
    },
    number: {
      minimum: "{label}不能小于{minimum}",
      maximum: "{label}不能大于{maximum}",
      exclusiveMinimum: "{label}不能小于等于{minimum}",
      exclusiveMaximum: "{label}不能大于等于{maximum}",
      range: "{label}必须介于{minimum}and{maximum}之间"
    },
    pattern: {
      mismatch: "{label}格式不匹配"
    }
  };
}
SchemaValidator.message = new Message();
const deepCopy = (val) => {
  return JSON.parse(JSON.stringify(val));
};
const typeFilter = (format) => {
  return format === "int" || format === "double" || format === "number" || format === "timestamp";
};
const getValue = (key, value, rules) => {
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
const setDataValue = (field, formdata, value) => {
  formdata[field] = value;
  return value || "";
};
const getDataValue = (field, data) => {
  return objGet(data, field);
};
const realName = (name, data = {}) => {
  const base_name = _basePath(name);
  if (typeof base_name === "object" && Array.isArray(base_name) && base_name.length > 1) {
    const realname = base_name.reduce((a, b) => a += `#${b}`, "_formdata_");
    return realname;
  }
  return base_name[0] || name;
};
const isRealName = (name) => {
  const reg = /^_formdata_#*/;
  return reg.test(name);
};
const rawData = (object = {}, name) => {
  let newData = JSON.parse(JSON.stringify(object));
  let formData = {};
  for (let i in newData) {
    let path = name2arr(i);
    objSet(formData, path, newData[i]);
  }
  return formData;
};
const name2arr = (name) => {
  let field = name.replace("_formdata_#", "");
  field = field.split("#").map((v) => isNumber(v) ? Number(v) : v);
  return field;
};
const objSet = (object, path, value) => {
  if (typeof object !== "object")
    return object;
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
  }, object);
  return object;
};
function _basePath(path) {
  if (Array.isArray(path))
    return path;
  return path.replace(/\[/g, ".").replace(/\]/g, "").split(".");
}
const objGet = (object, path, defaultVal = "undefined") => {
  let newPath = _basePath(path);
  let val = newPath.reduce((o, k) => {
    return (o || {})[k];
  }, object);
  return !val || val !== void 0 ? val : defaultVal;
};
const isNumber = (num) => {
  return !isNaN(Number(num));
};
const isBoolean = (bool) => {
  return typeof bool === "boolean";
};
const isRequiredField = (rules) => {
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
const isEqual = (a, b) => {
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
const _style_0 = {};
const _sfc_main = {
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
            return formatAppLog("error", "at uni_modules/uni-forms/components/uni-forms/uni-forms.vue:182", "当前 uni-froms 组件缺少 ref 属性");
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
        formatAppLog("warn", "at uni_modules/uni-forms/components/uni-forms/uni-forms.vue:289", "submit 方法即将废弃，请使用validate方法代替！");
      }
      return this.checkAll(this.formData, keepitem, callback, "submit");
    },
    // 校验所有
    async checkAll(invalidFields, keepitem, callback, type) {
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
      for (let i in childrens) {
        const child = childrens[i];
        let name = realName(child.name);
        const result = await child.onFieldChange(tempFormData[name]);
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
      if (promise && callback) {
        return promise;
      } else {
        return null;
      }
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_form = resolveComponent("form");
  return openBlock(), createElementBlock("view", {
    class: "uni-forms",
    renderWhole: true
  }, [
    createVNode(_component_form, null, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    })
  ]);
}
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/uni_modules/uni-forms/components/uni-forms/uni-forms.vue"]]);
export {
  __easycom_1 as _,
  __easycom_3 as a
};
