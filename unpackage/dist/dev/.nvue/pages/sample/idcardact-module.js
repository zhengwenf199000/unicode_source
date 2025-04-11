import { a as requireNativePlugin, f as formatAppLog, r as resolveEasycom } from "../../uni-app.es.js";
import { _ as __easycom_0 } from "../../uni-data-select.js";
import { resolveComponent, resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createCommentVNode, toDisplayString, createVNode, withCtx, createTextVNode } from "vue";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
const _style_0 = { "idcardact-container": { "": { "flexDirection": "column", "alignItems": "center" } }, "idcardact-status": { "": { "marginTop": 20, "marginRight": 20, "marginBottom": 20, "marginLeft": 20 } }, "id_card_info_c": { "": { "width": "750rpx", "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "alignItems": "flex-start" } }, "id_card_info_c-photo": { "": { "position": "absolute", "right": 10, "width": 100, "height": 100, "backgroundColor": "#FAEBD7" } } };
const moduleIdCardAct = requireNativePlugin("ModuleIDCardAct");
const moduleFaceCompare = requireNativePlugin("ModuleFaceCompare");
const _sfc_main = {
  data() {
    return {
      loading: true,
      data: "身份证信息",
      idCardInfo: null,
      marriage: "01",
      marriageRange: [
        { text: "未婚", value: "01" },
        { text: "已婚", value: "02" },
        { text: "离异", value: "03" },
        { text: "丧偶", value: "04" }
      ],
      skillsRange: [
        {
          value: 0,
          text: "编程"
        },
        {
          value: 1,
          text: "绘画"
        },
        {
          value: 2,
          text: "运动"
        }
      ]
    };
  },
  onLoad() {
    moduleFaceCompare.compareFeature();
  },
  onUnload() {
    moduleIdCardAct.stop();
  },
  methods: {
    change(e) {
      formatAppLog("log", "at pages/sample/idcardact-module.nvue:62", e);
    },
    getInfo() {
      moduleIdCardAct.start((idCardInfo) => {
        if (idCardInfo) {
          this.loading = false;
          this.idCardInfo = idCardInfo;
        }
        this.data = JSON.stringify(idCardInfo);
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_button = resolveComponent("button");
  const _component_uni_data_select = resolveEasycom(resolveDynamicComponent("uni-data-select"), __easycom_0);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "idcardact-container" }, [
      $data.loading ? (openBlock(), createElementBlock("u-text", {
        key: 0,
        class: "idcardact-status"
      }, "读取中...")) : createCommentVNode("v-if", true),
      $data.idCardInfo ? (openBlock(), createElementBlock("view", {
        key: 1,
        class: "id_card_info_c"
      }, [
        createElementVNode(
          "u-text",
          null,
          "姓名：" + toDisplayString($data.idCardInfo.name),
          1
          /* TEXT */
        ),
        createElementVNode(
          "u-text",
          null,
          "性别：" + toDisplayString($data.idCardInfo.sex),
          1
          /* TEXT */
        ),
        createElementVNode(
          "u-text",
          null,
          "民族：" + toDisplayString($data.idCardInfo.nation),
          1
          /* TEXT */
        ),
        createElementVNode(
          "u-text",
          null,
          "出生：" + toDisplayString($data.idCardInfo.birthTime),
          1
          /* TEXT */
        ),
        createElementVNode(
          "u-text",
          null,
          "住址：" + toDisplayString($data.idCardInfo.address),
          1
          /* TEXT */
        ),
        createElementVNode(
          "u-text",
          null,
          "身份证号：" + toDisplayString($data.idCardInfo.number),
          1
          /* TEXT */
        ),
        createElementVNode(
          "u-text",
          null,
          "签发机关：" + toDisplayString($data.idCardInfo.issueOffice),
          1
          /* TEXT */
        ),
        createElementVNode(
          "u-text",
          null,
          "有效期：" + toDisplayString($data.idCardInfo.effectiveStartDate) + " - " + toDisplayString($data.idCardInfo.effectiveEndDate),
          1
          /* TEXT */
        ),
        createElementVNode("u-image", {
          src: $data.idCardInfo.photoURI,
          class: "id_card_info_c-photo"
        }, null, 8, ["src"])
      ])) : createCommentVNode("v-if", true),
      createVNode(_component_button, {
        class: "idcardact-status",
        onClick: $options.getInfo
      }, {
        default: withCtx(() => [
          createTextVNode("获取身份信息")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["onClick"]),
      createVNode(_component_uni_data_select, {
        modelValue: _ctx.skills,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.skills = $event),
        localdata: $data.skillsRange
      }, null, 8, ["modelValue", "localdata"]),
      createElementVNode(
        "u-text",
        null,
        toDisplayString($data.data),
        1
        /* TEXT */
      )
    ])
  ]);
}
const idcardactModule = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/pages/sample/idcardact-module.nvue"]]);
export {
  idcardactModule as default
};
