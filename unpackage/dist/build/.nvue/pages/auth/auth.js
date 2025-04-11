import { f as formatAppLog, r as resolveEasycom } from "../../uni-app.es.js";
import { _ as __easycom_0 } from "../../content-bg.js";
import { openBlock, createElementBlock, normalizeClass, normalizeStyle, toDisplayString, createCommentVNode, resolveDynamicComponent, createBlock, withCtx, createVNode, Fragment, renderList, resolveComponent, createElementVNode, createTextVNode } from "vue";
import { _ as __easycom_1$1, a as __easycom_3 } from "../../uni-forms.js";
import { _ as __easycom_1$2 } from "../../uni-forms-item.js";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
import { _ as __easycom_2$1, a as __easycom_3$1 } from "../../uni-popup.js";
import { r as requestApi, a as apis, b as apiUrl, u as upload, p as plugins } from "../../http.js";
import { u as userInactiveMixin } from "../../userInactiveMixin.js";
import { _ as _imports_0 } from "../../Home.js";
const _style_0$2 = { "uni-tag": { "": { "lineHeight": 14, "fontSize": 12, "fontWeight": "200", "paddingTop": 4, "paddingRight": 7, "paddingBottom": 4, "paddingLeft": 7, "color": "#ffffff", "borderRadius": 3, "backgroundColor": "#8f939c", "borderWidth": "1rpx", "borderStyle": "solid", "borderColor": "#8f939c" } }, "uni-tag--default": { "": { "fontSize": 13 } }, "uni-tag--default--inverted": { "": { "color": "#8f939c", "borderColor": "#8f939c" } }, "uni-tag--small": { "": { "paddingTop": 2, "paddingRight": 5, "paddingBottom": 2, "paddingLeft": 5, "fontSize": 12, "borderRadius": 2 } }, "uni-tag--mini": { "": { "paddingTop": 1, "paddingRight": 3, "paddingBottom": 1, "paddingLeft": 3, "fontSize": 12, "borderRadius": 2 } }, "uni-tag--primary": { "": { "backgroundColor": "#2979ff", "borderColor": "#2979ff", "color": "#ffffff" } }, "uni-tag--success": { "": { "color": "#ffffff", "backgroundColor": "#18bc37", "borderColor": "#18bc37" } }, "uni-tag--warning": { "": { "color": "#ffffff", "backgroundColor": "#f3a73f", "borderColor": "#f3a73f" } }, "uni-tag--error": { "": { "color": "#ffffff", "backgroundColor": "#e43d33", "borderColor": "#e43d33" } }, "uni-tag--primary--inverted": { "": { "color": "#2979ff", "borderColor": "#2979ff" } }, "uni-tag--success--inverted": { "": { "color": "#18bc37", "borderColor": "#18bc37" } }, "uni-tag--warning--inverted": { "": { "color": "#f3a73f", "borderColor": "#f3a73f" } }, "uni-tag--error--inverted": { "": { "color": "#e43d33", "borderColor": "#e43d33" } }, "uni-tag--inverted": { "": { "backgroundColor": "#ffffff" } }, "uni-tag--circle": { "": { "!borderRadius": 15 } }, "uni-tag--mark": { "": { "!borderTopLeftRadius": 0, "!borderBottomLeftRadius": 0, "!borderTopRightRadius": 15, "!borderBottomRightRadius": 15 } }, "uni-tag--disabled": { "": { "opacity": 0.5 } }, "uni-tag-text": { "": { "color": "#ffffff", "fontSize": 14 } }, "uni-tag-text--primary": { "": { "color": "#2979ff" } }, "uni-tag-text--success": { "": { "color": "#18bc37" } }, "uni-tag-text--warning": { "": { "color": "#f3a73f" } }, "uni-tag-text--error": { "": { "color": "#e43d33" } }, "uni-tag-text--small": { "": { "fontSize": 12 } } };
const _sfc_main$2 = {
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
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.text ? (openBlock(), createElementBlock("u-text", {
    key: 0,
    class: normalizeClass(["uni-tag", $options.classes]),
    style: normalizeStyle($props.customStyle),
    onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
  }, toDisplayString($props.text), 7)) : createCommentVNode("", true);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]]]);
const _style_0$1 = { "input-popup_content": { "": { "uni-forms-item__label": { "": { "fontSize": 16, "color": "#333333" } } } } };
const _sfc_main$1 = {
  name: "input-popup",
  emits: ["cancel", "afterVerify", "afterOther"],
  props: {
    title: {
      type: String,
      default: "管理员后台登录"
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
            label: "账号：",
            placeholder: "账号",
            err: "账号或者密码不正确",
            type: "text"
          },
          {
            label: "密码：",
            placeholder: "密码",
            err: "账号或者密码不正确",
            type: "password"
          }
        ];
      }
    },
    placeholder: {
      type: String,
      default: "请输入管理员"
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
          errorMessage: form.err || "账号或者密码不正确",
          validateFunction: getValidateFunction(form)
        };
      };
    },
    warningText() {
      if (this.warning) {
        return typeof this.warning === "string" ? this.warning : "此功能为生产厂家人员进行系统设置所用，非相关人员请取消使用。";
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
          formatAppLog("log", "at components/input-popup/input-popup.vue:168", "时间到了，我要关闭了");
          this.cancel();
        }
      });
    },
    clearAutoClose() {
      if (this.userFuncTask) {
        this.userFuncTask.release();
      }
    },
    async auth() {
      try {
        const r = await this.$refs.forms.validate();
        this.$emit("afterVerify", this.inputObj);
        this.close();
      } catch (e) {
        formatAppLog("log", "at components/input-popup/input-popup.vue:184", e);
      }
    },
    async other() {
      try {
        const r = await this.$refs.forms.validate();
        this.$emit("afterOther", this.inputObj);
        this.close();
      } catch (e) {
        formatAppLog("log", "at components/input-popup/input-popup.vue:193", e);
      }
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_easyinput = resolveEasycom(resolveDynamicComponent("uni-easyinput"), __easycom_1$1);
  const _component_uni_forms_item = resolveEasycom(resolveDynamicComponent("uni-forms-item"), __easycom_1$2);
  const _component_uni_tag = resolveEasycom(resolveDynamicComponent("uni-tag"), __easycom_2);
  const _component_uni_forms = resolveEasycom(resolveDynamicComponent("uni-forms"), __easycom_3);
  const _component_uni_popup_dialog = resolveEasycom(resolveDynamicComponent("uni-popup-dialog"), __easycom_2$1);
  const _component_uni_popup = resolveEasycom(resolveDynamicComponent("uni-popup"), __easycom_3$1);
  return openBlock(), createBlock(_component_uni_popup, {
    ref: "popup",
    class: "input-popup_content",
    onClick: $options.capture
  }, {
    default: withCtx(() => [
      createVNode(_component_uni_popup_dialog, {
        mode: "input",
        beforeClose: true,
        title: $props.title,
        otherText: $props.otherText,
        onClose: _cache[0] || (_cache[0] = ($event) => $options.cancel()),
        onConfirm: _cache[1] || (_cache[1] = ($event) => $options.auth()),
        onOther: $options.other
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_forms, {
            ref: "forms",
            rules: $options.rules,
            model: $data.inputObj,
            style: { "width": "450px" },
            labelWidth: $props.labelWidth
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList($props.forms, (form, i) => {
                return openBlock(), createBlock(_component_uni_forms_item, {
                  key: i,
                  class: "input-popup_forms-items",
                  name: i + "",
                  label: form.label,
                  labelAlign: "center"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_uni_easyinput, {
                      modelValue: $data.inputObj[i],
                      "onUpdate:modelValue": ($event) => $data.inputObj[i] = $event,
                      type: form.type,
                      placeholder: $props.placeholder + form.placeholder
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "placeholder"])
                  ]),
                  _: 2
                }, 1032, ["name", "label"]);
              }), 128)),
              $props.warning ? (openBlock(), createBlock(_component_uni_tag, {
                key: 0,
                size: "default",
                type: "error",
                text: $options.warningText
              }, null, 8, ["text"])) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["rules", "model", "labelWidth"])
        ]),
        _: 1
      }, 8, ["title", "otherText", "onOther"])
    ]),
    _: 1
  }, 8, ["onClick"]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]]]);
const _imports_1 = "/static/register/detail/SwipeIDCard.png";
const _style_0 = { "auth_content": { "": { "flex": 1 } }, "auth_content-swiper": { ".auth_content ": { "flex": 1 } }, "auth_content-idcardauth": { ".auth_content ": { "flex": 1, "justifyContent": "center", "alignItems": "center" } }, "auth_content-idcardauth--status": { ".auth_content .auth_content-idcardauth ": { "color": "#006AEC", "fontSize": 20, "fontWeight": "bold", "marginBottom": 20 } }, "auth_content-idcardauth--btn": { ".auth_content .auth_content-idcardauth ": { "marginTop": 20, "borderWidth": 0, "borderColor": "#000000" } }, "auth_content-faceauth": { ".auth_content ": { "flex": 1, "alignItems": "center", "justifyContent": "center" } }, "auth_content-faceauth--status": { ".auth_content .auth_content-faceauth ": { "fontSize": 24, "fontWeight": "bold", "color": "#006AEC" } }, "auth_content-faceauth--alive_detect": { ".auth_content .auth_content-faceauth ": { "marginTop": 40, "width": 800, "height": 300, "backgroundColor": "#F5DEB3" } } };
const {
  moduleIdCardAct,
  moduleFaceCompare
} = plugins;
const _sfc_main = {
  mixins: [userInactiveMixin],
  data() {
    return {
      idcardInputForm: [{
        label: "身份证号：",
        err: "身份证号码格式不正确",
        placeholder: "请输入身份证号码",
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
    moduleIdCardAct.stop();
  },
  methods: {
    homeClick() {
      uni.navigateBack({ delta: getCurrentPages().length });
    },
    manualInput() {
      moduleIdCardAct.stop();
      this.$refs.popup.open();
    },
    idcardAfterVerify(val) {
      this.findBiosignature(val[0]);
    },
    cancelManualInput() {
      this.startIdCardAct();
    },
    compareFaces(face1, face2, resultCallback) {
      moduleFaceCompare.compareFeature(face1, face2, resultCallback);
    },
    startIdCardAct() {
      moduleIdCardAct.start((idCardInfo) => {
        uni.showToast({
          title: "身份信息已获取！",
          icon: "none"
        });
        if (idCardInfo) {
          this.idCardInfo = idCardInfo;
          this.number = idCardInfo.number;
          this.name = idCardInfo.name;
          moduleIdCardAct.stop();
          {
            this.findBiosignature(idCardInfo.number);
          }
        }
        formatAppLog("log", "at pages/auth/auth.nvue:153", idCardInfo);
      });
    },
    // 通过身份证号码查找已录入的生物特性
    findBiosignature(number) {
      this.number = number;
      uni.showLoading({
        title: "读取资料..."
      });
      requestApi(apis.findBiosignature, {
        id_num: number
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
            title: "暂无您的体征信息，请先体征采集",
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
          title: err || "您还未入矫",
          icon: "none"
        });
        uni.$u.sleep(1e3).then(() => {
          uni.navigateBack();
        });
      });
    },
    // 开始人脸检测
    async startDetecting() {
      await uni.$u.sleep(500);
      this.$refs.alive_detect.startDetecting((path) => {
        formatAppLog("log", "at pages/auth/auth.nvue:205", path);
        if (path) {
          this.$refs.alive_detect.stopDetecting();
          this.detectingFacePath = path;
          uni.showLoading({
            title: "正在验证..."
          });
          this.compareFaces(this.lastFacepath, path, (r) => {
            if (r) {
              uni.showLoading({
                title: "正在更新..."
              });
              upload(path, "renlian").then((data) => {
                uni.hideLoading();
                this.facepath = data;
                this.redirectToTarget();
              }).catch((err) => {
                uni.showToast({
                  title: "上传失败:" + err,
                  icon: "none"
                });
              });
            } else {
              uni.showToast({
                title: "人脸验证不匹配，请重试！",
                icon: "none"
              });
              uni.$u.sleep(2e3).then(() => {
                uni.navigateBack();
              });
            }
          });
        }
      });
    },
    redirectToTarget() {
      let url = `${this.target}${this.target.indexOf("?") >= 0 ? "&" : "?"}idnum=${this.number}&name=${this.name}`;
      formatAppLog("log", "at pages/auth/auth.nvue:247", "redirectToTarget:", this.target, url);
      if (this.type !== "idCard") {
        url += `&facepath=${this.facepath}`;
      }
      if (this.target.indexOf("print") > -1) {
        uni.navigateBack({
          animationType: "none",
          async success() {
            await uni.$u.sleep(5);
            uni.navigateTo({
              url,
              animationType: "none"
            });
          }
        });
        return;
      }
      uni.redirectTo({
        url
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_content_bg = resolveEasycom(resolveDynamicComponent("content-bg"), __easycom_0);
  const _component_button = resolveComponent("button");
  const _component_swiper_item = resolveComponent("swiper-item");
  const _component_alive_detect = resolveComponent("alive-detect");
  const _component_swiper = resolveComponent("swiper");
  const _component_input_popup = resolveEasycom(resolveDynamicComponent("input-popup"), __easycom_1);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", {
      class: "content auth_content",
      onClick: _cache[1] || (_cache[1] = (...args) => _ctx.capture && _ctx.capture(...args))
    }, [
      createVNode(_component_content_bg),
      createElementVNode("view", { class: "content-nav" }, [
        createElementVNode("u-image", {
          class: "content-nav-home",
          src: _imports_0,
          mode: "widthFix",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.homeClick && $options.homeClick(...args))
        })
      ]),
      createElementVNode("view", { class: "content-c" }, [
        createVNode(_component_swiper, {
          class: "auth_content-swiper",
          current: $data.step,
          "disable-touch": true
        }, {
          default: withCtx(() => [
            createVNode(_component_swiper_item, null, {
              default: withCtx(() => [
                createElementVNode("view", { class: "auth_content-idcardauth" }, [
                  createElementVNode("u-text", { class: "auth_content-idcardauth--status" }, "身份信息验证中..."),
                  createElementVNode("u-image", {
                    class: "auth_content-idcardauth--icon",
                    src: _imports_1,
                    mode: "heightFix"
                  }),
                  $options.showManual ? (openBlock(), createBlock(_component_button, {
                    key: 0,
                    class: "auth_content-idcardauth--btn",
                    type: "primary",
                    onClick: $options.manualInput
                  }, {
                    default: withCtx(() => [
                      createTextVNode("未携带身份证，手动录入")
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : createCommentVNode("", true)
                ])
              ]),
              _: 1
            }),
            createVNode(_component_swiper_item, null, {
              default: withCtx(() => [
                createElementVNode("view", { class: "auth_content-faceauth" }, [
                  createElementVNode("u-text", { class: "auth_content-faceauth--status" }, "检测人脸..."),
                  $data.step === 1 ? (openBlock(), createBlock(_component_alive_detect, {
                    key: 0,
                    ref: "alive_detect",
                    class: "auth_content-faceauth--alive_detect",
                    cameratype: "black",
                    onOnDetectFailure: _ctx.detectFailure,
                    onOnDetectSuccess: _ctx.detectSuccess
                  }, null, 8, ["onOnDetectFailure", "onOnDetectSuccess"])) : createCommentVNode("", true)
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["current"])
      ]),
      createVNode(_component_input_popup, {
        ref: "popup",
        title: "手动录入身份证信息",
        placeholder: "",
        labelWidth: 100,
        forms: $data.idcardInputForm,
        onAfterVerify: $options.idcardAfterVerify,
        onCancel: $options.cancelManualInput
      }, null, 8, ["forms", "onAfterVerify", "onCancel"])
    ])
  ]);
}
const auth = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  auth as default
};
