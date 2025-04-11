import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, createTextVNode } from "vue";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
const _style_0 = { "finger-print-c": { "": { "flex": 1, "alignItems": "center" } }, "finger-print-tip": { "": { "color": "#FF0000", "marginTop": 20 } }, "finger-print": { "": { "marginTop": 20, "backgroundColor": "#FAEBD7" } }, "button": { "": { "marginTop": 20 } } };
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    getFingerprint() {
      this.$refs.fingerprint.getFingerprintImage();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_finger_print = resolveComponent("finger-print");
  const _component_button = resolveComponent("button");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "finger-print-c" }, [
      createElementVNode("u-text", { class: "finger-print-tip" }, "请按压指纹..."),
      createVNode(_component_finger_print, {
        ref: "fingerprint",
        style: { "width": "100px", "height": "100px" },
        class: "finger-print"
      }, null, 512),
      createVNode(_component_button, {
        class: "button",
        onClick: $options.getFingerprint
      }, {
        default: withCtx(() => [
          createTextVNode("获取指纹")
        ]),
        _: 1
      }, 8, ["onClick"])
    ])
  ]);
}
const extFingerComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  extFingerComponent as default
};
