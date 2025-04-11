import { f as formatAppLog, r as resolveEasycom } from "../../uni-app.es.js";
import { _ as __easycom_0 } from "../../content-bg.js";
import { openBlock, createElementBlock, normalizeClass, renderSlot, createElementVNode, normalizeStyle, createCommentVNode, toDisplayString, resolveDynamicComponent, resolveComponent, createVNode, withCtx, createTextVNode, Fragment, renderList } from "vue";
import { _ as __easycom_1, a as __easycom_3 } from "../../uni-forms.js";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
import { s as systemName, b as apiUrl, D as DEPT_ID, c as DEPT_NAME, p as plugins, r as requestApi, d as updateSystemName, e as updateApiUrl, f as updateMacAddress, g as updateDeptId, i as updateDeptName, a as apis, m as macAddress } from "../../http.js";
import { _ as _imports_0 } from "../../success.js";
const _style_0$1 = { "uni-forms-item__label___text": { "": { "color": "#333333", "fontSize": 16 } }, "uni-forms-item__label___long": { "": { "width": 80 } }, "is-required": { "": { "color": "#dd524d", "fontWeight": "bold", "fontSize": 18 }, ".uni-forms-item ": { "color": "#dd524d", "fontWeight": "bold" } }, "uni-forms-item": { "": { "position": "relative", "display": "flex", "paddingBottom": 22, "flexDirection": "row" }, ".is-direction-left": { "flexDirection": "row" }, ".is-direction-top": { "flexDirection": "column" } }, "uni-forms-item__label": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "textAlign": "left", "fontSize": 16, "color": "#606266", "height": 36, "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 0, "width": 120 }, ".no-label": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0 }, ".uni-forms-item.is-direction-top ": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 8, "paddingLeft": 0, "lineHeight": 1.5715, "textAlign": "left" } }, "uni-forms-item__content": { "": { "position": "relative", "fontSize": 16, "flex": 1, "flexDirection": "row" } }, "uni-forms-item__nuve-content": { ".uni-forms-item ": { "display": "flex", "flexDirection": "column", "flex": 1 } }, "uni-forms-item__error": { "": { "color": "#f56c6c", "fontSize": 12, "lineHeight": 1, "paddingTop": 4, "position": "absolute", "bottom": 5, "opacity": 0 }, ".msg--active": { "opacity": 1, "transform": "translateY(0%)" }, ".uni-forms-item--border ": { "position": "relative", "top": 0, "left": 0, "paddingTop": 0, "marginTop": 5 } }, "error-text": { ".uni-forms-item__error ": { "color": "#f56c6c", "fontSize": 12 } }, "uni-forms-item--border": { "": { "marginBottom": 0, "paddingTop": 10, "paddingRight": 0, "paddingBottom": 10, "paddingLeft": 0, "borderTopWidth": 1, "borderTopStyle": "solid", "borderTopColor": "#eeeeee", "display": "flex", "flexDirection": "column" } }, "is-first-border": { "": { "borderWidth": 0 } } };
const _sfc_main$1 = {
  name: "FormsItem",
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
    labelContentWidth: {
      type: String,
      default: "130px"
    },
    label: {
      type: String,
      default: ""
    },
    labelStyle: {
      type: String,
      default: ""
    },
    longLabel: {
      type: Boolean,
      default: false
    },
    // label的宽度 ，默认 80
    labelWidth: {
      type: [String, Number],
      default: ""
    },
    // label 居中方式，默认 left 取值 left/center/right
    labelAlign: {
      type: String,
      default: ""
    },
    // label垂直对齐方式，默认 center 取值 flex-start/center/flex-end
    labelJustify: {
      type: String,
      default: "center"
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
      return "flex-end";
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
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(["uni-forms-item", ["is-direction-" + $data.localLabelPos, $data.border ? "uni-forms-item--border" : "", $data.border && $data.isFirstBorder ? "is-first-border" : ""]]),
    renderWhole: true
  }, [
    renderSlot(_ctx.$slots, "label", {}, () => [
      createElementVNode("view", {
        class: normalizeClass(["uni-forms-item__label", { "no-label": !$props.label && !$data.isRequired }]),
        style: normalizeStyle({ justifyContent: $data.localLabelAlign, alignItems: $props.labelJustify, width: $props.labelContentWidth })
      }, [
        $data.isRequired ? (openBlock(), createElementBlock("u-text", {
          key: 0,
          class: "is-required"
        }, "*")) : createCommentVNode("", true),
        createElementVNode("u-text", {
          class: normalizeClass(["uni-forms-item__label___text", { "uni-forms-item__label___long": $props.longLabel }]),
          style: normalizeStyle($props.labelStyle)
        }, toDisplayString($props.label), 7)
      ], 6)
    ]),
    createElementVNode("view", { class: "uni-forms-item__nuve-content" }, [
      createElementVNode("view", { class: "uni-forms-item__content" }, [
        renderSlot(_ctx.$slots, "default")
      ]),
      createElementVNode("view", {
        class: normalizeClass(["uni-forms-item__error", { "msg--active": $options.msg }])
      }, [
        createElementVNode("u-text", { class: "error-text" }, toDisplayString($options.msg), 1)
      ], 2)
    ])
  ], 2);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]]]);
const _style_0 = { "content-scroller": { "": { "display": "flex", "flexDirection": "column" } }, "set_content": { "": { "flex": 1, "height": 100, "display": "flex", "flexDirection": "column", "overflow": "hidden" } }, "set_content-versions": { "": { "paddingRight": 8 } }, "set_content-versions--text": { "": { "color": "#ffffff", "fontSize": 16, "fontWeight": "bold", "lineHeight": 25 } }, "set_content-versions--point": { "": { "position": "absolute", "top": 0, "right": 0, "width": 8, "height": 8, "borderRadius": 4, "backgroundColor": "#FF0000" } }, "set_content-placeholder": { "": { "position": "relative", "flex": 1 } }, "set_content-c": { "": { "position": "relative", "paddingTop": 0, "paddingRight": 200, "paddingBottom": 0, "paddingLeft": 200, "display": "flex", "flexDirection": "column", "overflow": "hidden" } }, "set_content-c--forms": { "": { "marginTop": 10 } }, "set_content-c--forms---item": { "": { "height": 60 } }, "set_content-c--forms---item_content": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center" } }, "set_content-c--forms---item_content__btn": { "": { "marginLeft": 10, "height": 35, "lineHeight": 35 } }, "set_content-c--list": { "": { "flex": 1, "display": "flex", "flexDirection": "column", "height": 290 } }, "set_content-c--list---table": { "": { "display": "flex", "flexDirection": "column", "alignSelf": "center" } }, "set_content-c--list---table_row": { "": { "width": 625, "height": 44, "display": "flex", "flexDirection": "row" } }, "set_content-c--list---table_row__th": { "": { "flex": 1, "backgroundColor": "#006AEC", "display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center" } }, "set_content-c--list---table_row__th___text": { "": { "color": "#ffffff" } }, "set_content-c--list---table_row__td": { "": { "flex": 1, "display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "backgroundColor": "#ffffff" } }, "set_content-c--list---table_row__td___text": { "": { "color": "#666666" } }, "set_content-c--list---table_row__check": { "": { "width": 20, "height": 20 } }, "set_content-c__footer": { ".set_content-c ": { "flexDirection": "row", "justifyContent": "space-around" } }, "set_content-c--submit": { "": { "alignSelf": "center", "marginTop": 10, "marginRight": 0, "marginBottom": 10, "marginLeft": 0, "width": 350, "fontSize": 16, "fontWeight": "bold" } } };
const _sfc_main = {
  data() {
    return {
      systemName,
      apiUrl,
      mac: macAddress || this.$store.getters.deviceMac,
      justices: [],
      checkedId: DEPT_ID,
      checkedName: "",
      keyword: DEPT_NAME,
      appVersion: "",
      wgtVersion: "",
      appCanUpdate: false,
      wgtCanUpdate: false,
      packageInfo: null
    };
  },
  computed: {
    searchedJustices() {
      return this.justices.filter((just) => {
        return just.deptName.indexOf(this.keyword) > -1;
      });
    }
  },
  onLoad() {
    this.requestJustices();
    plugins.getCurrentVersionInfo().then((info) => {
      this.appVersion = info.appVersion;
      this.wgtVersion = info.wgtVersion;
    });
    plugins.checkVersion((packageInfo) => {
      this.packageInfo = packageInfo;
      this.appCanUpdate = packageInfo.type !== "wgt";
      this.wgtCanUpdate = packageInfo.type === "wgt";
    });
  },
  methods: {
    requestJustices() {
      requestApi(apis.getDepts).then((data) => {
        this.justices = data;
      }).catch((err) => {
        uni.showToast({
          title: err,
          icon: "none"
        });
      });
    },
    syncSystemName() {
      updateSystemName(this.systemName);
      this.syncSuccess();
      this.$store.commit("setSystemName", this.systemName);
    },
    syncApiUrl() {
      if (!this.apiUrl) {
        uni.showToast({
          title: "地址不能为空",
          icon: "none"
        });
        return;
      }
      updateApiUrl(this.apiUrl);
      this.syncSuccess();
      this.requestJustices();
    },
    syncMacAddress() {
      if (!this.mac) {
        uni.showToast({
          title: "mac地址不能为空",
          icon: "none"
        });
        return;
      }
      updateMacAddress(this.mac);
      this.syncSuccess();
    },
    syncSuccess() {
      uni.showToast({
        title: "同步成功！"
      });
    },
    checkJustice(justice) {
      formatAppLog("log", "at pages/set/set.nvue:181", justice);
      this.checkedId = justice.deptId;
      this.checkedName = justice.deptName;
    },
    submit() {
      updateDeptId(this.checkedId);
      updateDeptName(this.checkedName);
      uni.reLaunch({
        url: "/pages/launch/launch"
      });
      formatAppLog("log", "at pages/set/set.nvue:191", DEPT_ID, apiUrl, this.mac);
    },
    cancel() {
      uni.navigateBack();
    },
    versionClick() {
      if (this.packageInfo) {
        uni.navigateTo({
          url: "/pages/sample/upgrade",
          animationType: "none"
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_content_bg = resolveEasycom(resolveDynamicComponent("content-bg"), __easycom_0);
  const _component_uni_easyinput = resolveEasycom(resolveDynamicComponent("uni-easyinput"), __easycom_1);
  const _component_button = resolveComponent("button");
  const _component_forms_item = resolveEasycom(resolveDynamicComponent("forms-item"), __easycom_2);
  const _component_uni_forms = resolveEasycom(resolveDynamicComponent("uni-forms"), __easycom_3);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "content set_content" }, [
      createVNode(_component_content_bg),
      createElementVNode("view", { class: "content-nav" }, [
        createElementVNode("view", {
          onClick: _cache[0] || (_cache[0] = (...args) => $options.versionClick && $options.versionClick(...args))
        }, [
          createElementVNode("view", { class: "set_content-versions" }, [
            createElementVNode("u-text", { class: "set_content-versions--text" }, "应用版本：v " + toDisplayString($data.appVersion), 1),
            $data.appCanUpdate ? (openBlock(), createElementBlock("view", {
              key: 0,
              class: "set_content-versions--point"
            })) : createCommentVNode("", true)
          ]),
          createElementVNode("view", { class: "set_content-versions" }, [
            createElementVNode("u-text", { class: "set_content-versions--text" }, "内核版本：" + toDisplayString($data.wgtVersion), 1),
            $data.wgtCanUpdate ? (openBlock(), createElementBlock("view", {
              key: 0,
              class: "set_content-versions--point"
            })) : createCommentVNode("", true)
          ])
        ])
      ]),
      createElementVNode("view", { class: "content-c set_content-c" }, [
        createVNode(_component_uni_forms, { class: "set_content-c--forms" }, {
          default: withCtx(() => [
            createVNode(_component_forms_item, {
              class: "set_content-c--forms---item",
              labelStyle: "color: #666; font-weight: bold;",
              labelAlign: "right",
              labelPosition: "top",
              label: "系统名称："
            }, {
              default: withCtx(() => [
                createVNode(_component_uni_easyinput, {
                  modelValue: $data.systemName,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.systemName = $event),
                  placeholder: "请输入系统名称"
                }, null, 8, ["modelValue"]),
                createVNode(_component_button, {
                  class: "set_content-c--forms---item_content__btn",
                  type: "default",
                  size: "mini",
                  onClick: $options.syncSystemName
                }, {
                  default: withCtx(() => [
                    createTextVNode("同步")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            }),
            createVNode(_component_forms_item, {
              class: "set_content-c--forms---item",
              labelStyle: "color: #666; font-weight: bold;",
              labelAlign: "right",
              labelPosition: "top",
              label: "资源地址："
            }, {
              default: withCtx(() => [
                createVNode(_component_uni_easyinput, {
                  modelValue: $data.apiUrl,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.apiUrl = $event),
                  placeholder: "请输入资源请求地址"
                }, null, 8, ["modelValue"]),
                createVNode(_component_button, {
                  class: "set_content-c--forms---item_content__btn",
                  type: "default",
                  size: "mini",
                  onClick: $options.syncApiUrl
                }, {
                  default: withCtx(() => [
                    createTextVNode("同步")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            }),
            createVNode(_component_forms_item, {
              class: "set_content-c--forms---item",
              labelStyle: "color: #666; font-weight: bold;",
              labelAlign: "right",
              labelPosition: "top",
              label: "Mac地址："
            }, {
              default: withCtx(() => [
                createVNode(_component_uni_easyinput, {
                  modelValue: $data.mac,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.mac = $event),
                  placeholder: "请输入Mac地址"
                }, null, 8, ["modelValue"]),
                createVNode(_component_button, {
                  class: "set_content-c--forms---item_content__btn",
                  type: "default",
                  size: "mini",
                  onClick: _cache[4] || (_cache[4] = ($event) => $options.syncMacAddress())
                }, {
                  default: withCtx(() => [
                    createTextVNode("同步")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_forms_item, {
              class: "set_content-c--forms---item",
              labelStyle: "color: #666; font-weight: bold;",
              labelAlign: "right",
              labelPosition: "top",
              label: "所属司法："
            }, {
              default: withCtx(() => [
                createVNode(_component_uni_easyinput, {
                  modelValue: $data.keyword,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.keyword = $event),
                  placeholder: "请输入关键字搜索"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createElementVNode("view", { class: "set_content-c--list---table" }, [
          createElementVNode("view", { class: "set_content-c--list---table_row" }, [
            createElementVNode("view", {
              class: "set_content-c--list---table_row__th",
              align: "center"
            }, [
              createElementVNode("u-text", { class: "set_content-c--list---table_row__th___text" }, "所属单位")
            ]),
            createElementVNode("view", {
              class: "set_content-c--list---table_row__th",
              align: "center"
            }, [
              createElementVNode("u-text", { class: "set_content-c--list---table_row__th___text" }, "选择")
            ])
          ])
        ]),
        createElementVNode("scroller", { class: "set_content-c--list" }, [
          createElementVNode("view", {
            class: "set_content-c--list---table",
            stripe: ""
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($options.searchedJustices, (justice, i) => {
              return openBlock(), createElementBlock("view", {
                class: "set_content-c--list---table_row",
                key: i,
                onClick: ($event) => $options.checkJustice(justice)
              }, [
                createElementVNode("view", {
                  class: "set_content-c--list---table_row__td",
                  align: "center"
                }, [
                  createElementVNode("u-text", { class: "set_content-c--list---table_row__td___text" }, toDisplayString(justice.deptName), 1)
                ]),
                createElementVNode("view", {
                  class: "set_content-c--list---table_row__td",
                  align: "center"
                }, [
                  $data.checkedId === justice.deptId ? (openBlock(), createElementBlock("u-image", {
                    key: 0,
                    class: "set_content-c--list---table_row__check",
                    src: _imports_0
                  })) : createCommentVNode("", true)
                ])
              ], 8, ["onClick"]);
            }), 128))
          ])
        ]),
        createElementVNode("view", { class: "set_content-c__footer" }, [
          createVNode(_component_button, {
            class: "set_content-c--submit",
            type: "primary",
            onClick: $options.submit
          }, {
            default: withCtx(() => [
              createTextVNode("提交")
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_button, {
            class: "set_content-c--submit",
            onClick: $options.cancel
          }, {
            default: withCtx(() => [
              createTextVNode("取消")
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ])
    ])
  ]);
}
const set = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  set as default
};
