import { openBlock, createElementBlock, createElementVNode, toDisplayString, createCommentVNode, renderSlot } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.js";
const _imports_0 = "/static/home/HomePage.png";
const _imports_1 = "/static/imgs/logo.png";
const _style_0 = { "content-bg__countdown": { "": { "position": "absolute", "right": 150, "color": "#FFFFFF", "fontSize": 15 } } };
const _sfc_main = {
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
  return openBlock(), createElementBlock("view", {
    class: "content-bg",
    renderWhole: true
  }, [
    createElementVNode("view", { class: "content-bg" }, [
      createElementVNode("u-image", {
        class: "content-bg_image",
        src: _imports_0,
        mode: "widthFix"
      }),
      createElementVNode("view", { class: "content-bg_title" }, [
        createElementVNode("view", { class: "content-bg_title__placeholder" }, [
          createElementVNode("u-image", {
            class: "content-bg_title__placeholder___logo",
            src: _imports_1,
            mode: "widthFix"
          })
        ]),
        createElementVNode(
          "u-text",
          {
            class: "content-bg_title__text",
            style: { "font-size": "60px" }
          },
          toDisplayString($options.systemName) + "社区矫正自助终端",
          1
          /* TEXT */
        ),
        $options.isCountdown ? (openBlock(), createElementBlock(
          "u-text",
          {
            key: 0,
            class: "content-bg__countdown"
          },
          toDisplayString($options.leftTime) + "秒后关闭",
          1
          /* TEXT */
        )) : createCommentVNode("v-if", true)
      ]),
      createElementVNode("view", { class: "content-bg_placeholder" })
    ]),
    renderSlot(_ctx.$slots, "default")
  ]);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/components/content-bg/content-bg.vue"]]);
export {
  __easycom_0 as _
};
