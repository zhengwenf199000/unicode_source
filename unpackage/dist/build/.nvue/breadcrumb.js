import { openBlock, createElementBlock, createElementVNode, toDisplayString } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.js";
const _style_0 = { "breadcrumb": { "": { "height": 50, "flexDirection": "row", "alignItems": "center" } }, "breadcrumb--textnormal": { ".breadcrumb ": { "color": "#666666", "fontSize": 16, "fontWeight": "bold" } }, "breadcrumb--textseg": { ".breadcrumb ": { "marginLeft": 10, "marginRight": 12, "width": 10, "height": 10, "borderTopWidth": 2, "borderTopStyle": "solid", "borderTopColor": "#666666", "borderRightWidth": 2, "borderRightStyle": "solid", "borderRightColor": "#666666", "transform": "rotate(45deg)" } }, "breadcrumb--textaction": { ".breadcrumb ": { "color": "#006AEC", "fontSize": 16, "fontWeight": "bold" } } };
const _sfc_main = {
  name: "breadcrumb",
  props: {
    title: {
      type: String,
      default: ""
    },
    actionTitle: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "breadcrumb",
    renderWhole: true
  }, [
    createElementVNode("u-text", { class: "breadcrumb--textnormal" }, toDisplayString($props.title), 1),
    createElementVNode("view", { class: "breadcrumb--textseg" }),
    createElementVNode("u-text", { class: "breadcrumb--textaction" }, toDisplayString($props.actionTitle), 1)
  ]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
