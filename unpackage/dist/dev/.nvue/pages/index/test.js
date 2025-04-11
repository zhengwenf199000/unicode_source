import { _ as __easycom_0 } from "../../uni-data-select.js";
import { openBlock, createElementBlock, renderSlot, normalizeClass, normalizeStyle, toDisplayString, createCommentVNode, resolveDynamicComponent, createElementVNode, createVNode, Fragment, renderList, withCtx } from "vue";
import { r as resolveEasycom } from "../../uni-app.es.js";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
import { _ as __easycom_2, a as __easycom_3 } from "../../uni-popup.js";
const _style_0$1 = { "uni-badge--x": { "": { "position": "relative" } }, "uni-badge--absolute": { "": { "position": "absolute" } }, "uni-badge--small": { "": { "transform": "scale(0.8)", "transformOrigin": "center center" } }, "uni-badge": { "": { "justifyContent": "center", "flexDirection": "row", "height": 20, "minWidth": "20px", "paddingTop": 0, "paddingRight": 4, "paddingBottom": 0, "paddingLeft": 4, "lineHeight": 18, "color": "#ffffff", "borderRadius": 100, "backgroundColor": "rgba(0,0,0,0)", "borderWidth": 1, "borderStyle": "solid", "borderColor": "#ffffff", "textAlign": "center", "fontFamily": '"Helvetica Neue", Helvetica, sans-serif', "fontFeatureSettings": '"tnum"', "fontSize": 12 } }, "uni-badge--info": { "": { "color": "#ffffff", "backgroundColor": "#909399" } }, "uni-badge--primary": { "": { "backgroundColor": "#2979ff" } }, "uni-badge--success": { "": { "backgroundColor": "#4cd964" } }, "uni-badge--warning": { "": { "backgroundColor": "#f0ad4e" } }, "uni-badge--error": { "": { "backgroundColor": "#dd524d" } }, "uni-badge--inverted": { "": { "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 0, "color": "#909399" } }, "uni-badge--info-inverted": { "": { "color": "#909399", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--primary-inverted": { "": { "color": "#2979ff", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--success-inverted": { "": { "color": "#4cd964", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--warning-inverted": { "": { "color": "#f0ad4e", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--error-inverted": { "": { "color": "#dd524d", "backgroundColor": "rgba(0,0,0,0)" } } };
const _sfc_main$1 = {
  name: "UniBadge",
  emits: ["click"],
  props: {
    type: {
      type: String,
      default: "error"
    },
    inverted: {
      type: Boolean,
      default: false
    },
    isDot: {
      type: Boolean,
      default: false
    },
    maxNum: {
      type: Number,
      default: 99
    },
    absolute: {
      type: String,
      default: ""
    },
    offset: {
      type: Array,
      default() {
        return [0, 0];
      }
    },
    text: {
      type: [String, Number],
      default: ""
    },
    size: {
      type: String,
      default: "small"
    },
    customStyle: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    width() {
      return String(this.text).length * 8 + 12;
    },
    classNames() {
      const {
        inverted,
        type,
        size,
        absolute
      } = this;
      return [
        inverted ? "uni-badge--" + type + "-inverted" : "",
        "uni-badge--" + type,
        "uni-badge--" + size,
        absolute ? "uni-badge--absolute" : ""
      ].join(" ");
    },
    positionStyle() {
      if (!this.absolute)
        return {};
      let w = this.width / 2, h = 10;
      if (this.isDot) {
        w = 5;
        h = 5;
      }
      const x = `${-w + this.offset[0]}px`;
      const y = `${-h + this.offset[1]}px`;
      const whiteList = {
        rightTop: {
          right: x,
          top: y
        },
        rightBottom: {
          right: x,
          bottom: y
        },
        leftBottom: {
          left: x,
          bottom: y
        },
        leftTop: {
          left: x,
          top: y
        }
      };
      const match = whiteList[this.absolute];
      return match ? match : whiteList["rightTop"];
    },
    dotStyle() {
      if (!this.isDot)
        return {};
      return {
        width: "10px",
        minWidth: "0",
        height: "10px",
        padding: "0",
        borderRadius: "10px"
      };
    },
    displayValue() {
      const {
        isDot,
        text,
        maxNum
      } = this;
      return isDot ? "" : Number(text) > maxNum ? `${maxNum}+` : text;
    }
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "uni-badge--x",
    renderWhole: true
  }, [
    renderSlot(_ctx.$slots, "default"),
    $props.text ? (openBlock(), createElementBlock(
      "u-text",
      {
        key: 0,
        class: normalizeClass([$options.classNames, "uni-badge"]),
        style: normalizeStyle([$options.positionStyle, $props.customStyle, $options.dotStyle]),
        onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick())
      },
      toDisplayString($options.displayValue),
      7
      /* TEXT, CLASS, STYLE */
    )) : createCommentVNode("v-if", true)
  ]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/uni_modules/uni-badge/components/uni-badge/uni-badge.vue"]]);
const _style_0 = { "uni-container": { "": { "backgroundColor": "#4682B4" } } };
const _sfc_main = {
  data() {
    return {
      range: [
        {
          value: 0,
          text: "篮球"
        },
        {
          value: 1,
          text: "足球"
        },
        {
          value: 2,
          text: "游泳"
        }
      ],
      list: [
        {
          id: "fingerprint-component",
          name: "fingerprint component",
          open: false,
          url: "/pages/sample/ext-finger-component"
        },
        {
          id: "idcardact-module",
          name: "id card act module",
          open: false,
          url: "/pages/sample/idcardact-module"
        },
        {
          id: "ext-module",
          name: "活体检测 扩展 module",
          open: false,
          url: "/pages/sample/ext-module"
        },
        {
          id: "ext-component",
          name: "扩展 component",
          open: false,
          url: "/pages/sample/ext-component"
        },
        {
          id: "richAlert",
          name: "插件示例RichAlert",
          open: false,
          url: "/pages/sample/richAlert"
        },
        {
          id: "form-nvue-demo",
          name: "form-nvue-demo",
          open: false,
          url: "/pages/sample/form-ndemo"
        }
      ],
      navigateFlag: false
    };
  },
  onReady() {
  },
  methods: {
    change(e) {
    },
    triggerCollapse(e) {
      if (!this.list[e].pages) {
        this.goDetailPage(this.list[e].url);
        return;
      }
      for (var i = 0; i < this.list.length; ++i) {
        if (e === i) {
          this.list[i].open = !this.list[e].open;
        } else {
          this.list[i].open = false;
        }
      }
    },
    goDetailPage(e) {
      if (this.navigateFlag) {
        return;
      }
      this.navigateFlag = true;
      uni.navigateTo({
        url: e
      });
      setTimeout(() => {
        this.navigateFlag = false;
      }, 200);
      return false;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_data_select = resolveEasycom(resolveDynamicComponent("uni-data-select"), __easycom_0);
  const _component_uni_badge = resolveEasycom(resolveDynamicComponent("uni-badge"), __easycom_1);
  const _component_uni_popup_dialog = resolveEasycom(resolveDynamicComponent("uni-popup-dialog"), __easycom_2);
  const _component_uni_popup = resolveEasycom(resolveDynamicComponent("uni-popup"), __easycom_3);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "uni-container" }, [
      createVNode(_component_uni_data_select, {
        modelValue: _ctx.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
        localdata: $data.range,
        onChange: $options.change
      }, null, 8, ["modelValue", "localdata", "onChange"]),
      createElementVNode("view", { class: "uni-hello-text" }, [
        createElementVNode("u-text", { class: "hello-text" }, "uni原生插件示例")
      ]),
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($data.list, (item, index) => {
          return openBlock(), createElementBlock("view", {
            class: "uni-panel",
            key: item.id
          }, [
            createElementVNode("view", {
              class: normalizeClass(["uni-panel-h", item.open ? "uni-panel-h-on" : ""]),
              onClick: ($event) => $options.triggerCollapse(index)
            }, [
              createElementVNode(
                "u-text",
                { class: "uni-panel-text" },
                toDisplayString(item.name),
                1
                /* TEXT */
              ),
              createElementVNode(
                "u-text",
                {
                  class: normalizeClass(["uni-panel-icon uni-icon", item.open ? "uni-panel-icon-on" : ""])
                },
                toDisplayString(item.pages ? "" : ""),
                3
                /* TEXT, CLASS */
              )
            ], 10, ["onClick"]),
            item.open ? (openBlock(), createElementBlock("view", {
              key: 0,
              class: "uni-panel-c"
            }, [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(item.pages, (item2, key) => {
                  return openBlock(), createElementBlock("view", {
                    class: "uni-navigate-item",
                    key,
                    onClick: ($event) => $options.goDetailPage(item2.url)
                  }, [
                    createElementVNode(
                      "u-text",
                      { class: "uni-navigate-text" },
                      toDisplayString(item2.name ? item2.name : item2),
                      1
                      /* TEXT */
                    ),
                    createElementVNode("u-text", { class: "uni-navigate-icon uni-icon" }, "")
                  ], 8, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])) : createCommentVNode("v-if", true)
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      )),
      createVNode(_component_uni_badge, { text: "1230" }),
      createVNode(
        _component_uni_popup,
        {
          ref: "popup",
          type: "dialog"
        },
        {
          default: withCtx(() => [
            createVNode(_component_uni_popup_dialog, { content: "23123123" })
          ]),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      )
    ])
  ]);
}
const test = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/pages/index/test.nvue"]]);
export {
  test as default
};
