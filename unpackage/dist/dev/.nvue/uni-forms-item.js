import { openBlock, createElementBlock, normalizeClass, renderSlot, createElementVNode, normalizeStyle, createCommentVNode, toDisplayString } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.js";
const _style_0 = { "uni-forms-item": { "": { "position": "relative", "display": "flex", "paddingBottom": 22, "flexDirection": "row" }, ".is-direction-left": { "flexDirection": "row" }, ".is-direction-top": { "flexDirection": "column" } }, "uni-forms-item__label": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "textAlign": "left", "fontSize": 14, "color": "#606266", "height": 36, "paddingTop": 0, "paddingRight": 12, "paddingBottom": 0, "paddingLeft": 0 }, ".no-label": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0 }, ".uni-forms-item.is-direction-top ": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 8, "paddingLeft": 0, "lineHeight": 1.5715, "textAlign": "left" } }, "uni-forms-item__content": { "": { "position": "relative", "fontSize": 14, "flex": 1, "flexDirection": "row" } }, "uni-forms-item__nuve-content": { ".uni-forms-item ": { "display": "flex", "flexDirection": "column", "flex": 1 } }, "uni-forms-item__error": { "": { "color": "#f56c6c", "fontSize": 12, "lineHeight": 1, "paddingTop": 4, "position": "absolute", "bottom": 5, "opacity": 0 }, ".msg--active": { "opacity": 1, "transform": "translateY(0%)" }, ".uni-forms-item--border ": { "position": "relative", "top": 0, "left": 0, "paddingTop": 0, "marginTop": 5 } }, "error-text": { ".uni-forms-item__error ": { "color": "#f56c6c", "fontSize": 12 } }, "is-required": { ".uni-forms-item ": { "color": "#dd524d", "fontWeight": "bold" } }, "uni-forms-item--border": { "": { "marginBottom": 0, "paddingTop": 10, "paddingRight": 0, "paddingBottom": 10, "paddingLeft": 0, "borderTopWidth": 1, "borderTopStyle": "solid", "borderTopColor": "#eeeeee", "display": "flex", "flexDirection": "column" } }, "is-first-border": { "": { "borderWidth": 0 } } };
const _sfc_main = {
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
          const isEqual = this.form._isEqual(value, oldVal);
          if (!isEqual) {
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
    async onFieldChange(value, formtrigger = true) {
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
      const isRequiredField = _isRequiredField(this.itemRules.rules || []);
      let result = null;
      if (validateTrigger === "bind" || formtrigger) {
        result = await this.validator.validateUpdate(
          {
            [name]: value
          },
          formData
        );
        if (!isRequiredField && (value === void 0 || value === "")) {
          result = null;
        }
        if (result && result.errorMessage) {
          if (errShowType === "undertext") {
            this.errMsg = !result ? "" : result.errorMessage;
          }
          if (errShowType === "toast") {
            uni.showToast({
              title: result.errorMessage || "校验错误",
              icon: "none"
            });
          }
          if (errShowType === "modal") {
            uni.showModal({
              title: "提示",
              content: result.errorMessage || "校验错误"
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["uni-forms-item", ["is-direction-" + $data.localLabelPos, $data.border ? "uni-forms-item--border" : "", $data.border && $data.isFirstBorder ? "is-first-border" : ""]]),
      renderWhole: true
    },
    [
      renderSlot(_ctx.$slots, "label", {}, () => [
        createElementVNode(
          "view",
          {
            class: normalizeClass(["uni-forms-item__label", { "no-label": !$props.label && !$data.isRequired }]),
            style: normalizeStyle({ width: $data.localLabelWidth, justifyContent: $data.localLabelAlign })
          },
          [
            $data.isRequired ? (openBlock(), createElementBlock("u-text", {
              key: 0,
              class: "is-required"
            }, "*")) : createCommentVNode("v-if", true),
            createElementVNode(
              "u-text",
              null,
              toDisplayString($props.label),
              1
              /* TEXT */
            )
          ],
          6
          /* CLASS, STYLE */
        )
      ]),
      createElementVNode("view", { class: "uni-forms-item__nuve-content" }, [
        createElementVNode("view", { class: "uni-forms-item__content" }, [
          renderSlot(_ctx.$slots, "default")
        ]),
        createElementVNode(
          "view",
          {
            class: normalizeClass(["uni-forms-item__error", { "msg--active": $options.msg }])
          },
          [
            createElementVNode(
              "u-text",
              { class: "error-text" },
              toDisplayString($options.msg),
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
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.vue"]]);
export {
  __easycom_1 as _
};
