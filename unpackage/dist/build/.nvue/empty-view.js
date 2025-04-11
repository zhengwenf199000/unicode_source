import { resolveComponent, openBlock, createElementBlock, createElementVNode, toDisplayString, createVNode, withCtx, createTextVNode, createCommentVNode } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.js";
const _imports_0 = "/static/imgs/nodata.png";
const _style_0 = { "empty-view": { "": { "flex": 1, "backgroundColor": "#ffffff", "alignItems": "center", "justifyContent": "center" } }, "empty-view--nodata": { ".empty-view ": { "width": 200, "height": 200 } }, "empty-view--text": { ".empty-view ": { "color": "#999999", "fontSize": 24 } }, "empty-view--action": { ".empty-view ": { "display": "flex", "flexDirection": "row", "marginTop": 20 } }, "empty-view--action---text": { ".empty-view .empty-view--action ": { "color": "#999999", "fontSize": 18 } }, "empty-view--action---btn": { ".empty-view .empty-view--action ": { "marginLeft": 10, "width": 80, "lineHeight": 35, "backgroundColor": "#006AEC" } } };
const _sfc_main = {
  name: "empty-view",
  emits: ["applyClick"],
  props: {
    text: {
      type: String,
      default: "当前无数据"
    },
    action: {
      type: Boolean,
      default: false
    },
    actionTitle: {
      type: String,
      default: "可点击这里进行"
    },
    actionBtnTitle: {
      type: String,
      default: "申请"
    }
  },
  data() {
    return {};
  },
  methods: {
    applyClick() {
      this.$emit("applyClick");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_button = resolveComponent("button");
  return openBlock(), createElementBlock("view", {
    class: "empty-view",
    renderWhole: true
  }, [
    createElementVNode("u-image", {
      class: "empty-view--nodata",
      src: _imports_0,
      mode: "aspectFit"
    }),
    createElementVNode("u-text", { class: "empty-view--text" }, toDisplayString($props.text), 1),
    $props.action ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: "empty-view--action"
    }, [
      createElementVNode("u-text", { class: "empty-view--action---text" }, toDisplayString($props.actionTitle), 1),
      createVNode(_component_button, {
        class: "empty-view--action---btn",
        type: "primary",
        size: "mini",
        onClick: $options.applyClick
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString($props.actionBtnTitle), 1)
        ]),
        _: 1
      }, 8, ["onClick"])
    ])) : createCommentVNode("", true)
  ]);
}
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  __easycom_3 as _
};
