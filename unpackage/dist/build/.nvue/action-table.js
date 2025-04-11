import { resolveComponent, openBlock, createElementBlock, createElementVNode, Fragment, renderList, normalizeClass, toDisplayString, createBlock, withCtx, createTextVNode } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.js";
const _style_0 = { "action-table-container": { "": { "flex": 1, "display": "flex", "flexDirection": "column" } }, "action-table--radius": { ".action-table-container ": { "borderRadius": 6 } }, "action-table--row": { ".action-table-container ": { "display": "flex", "flexDirection": "row", "alignItems": "center", "backgroundColor": "#ffffff", "paddingTop": 10, "paddingRight": 0, "paddingBottom": 10, "paddingLeft": 0 } }, "action-table--rowodd": { ".action-table-container ": { "backgroundColor": "#ffffff" } }, "action-table--roweven": { ".action-table-container ": { "backgroundColor": "#f7f8f9" } }, "action-table-th": { ".action-table-container ": { "display": "flex", "flexDirection": "column", "flex": 1, "alignItems": "center" } }, "action-table-th--text": { ".action-table-container ": { "color": "#006AEC", "fontWeight": "bold", "fontSize": 16 } }, "action-table-td": { ".action-table-container ": { "display": "flex", "flexDirection": "column", "flex": 1, "alignItems": "center" } }, "action-table-td--image": { ".action-table-container ": { "width": 50, "height": 50 } }, "action-table-td--text": { ".action-table-container ": { "color": "#333333", "fontSize": 14 } }, "isView": { ".action-table-container ": { "flex": 0.5, "flexDirection": "row", "justifyContent": "center" } }, "action-table-body--btn": { ".action-table-container .isView ": { "marginTop": 0, "marginRight": "20rpx", "marginBottom": 0, "marginLeft": "20rpx" } }, "action-scroller": { ".action-table-container ": { "marginTop": 10, "marginRight": 0, "marginBottom": 10, "marginLeft": 0 } } };
const _sfc_main = {
  name: "action-table",
  emits: ["viewBtnClick"],
  props: {
    // table用于内容展示的数据
    tableData: {
      type: Array,
      default() {
        return [];
      }
    },
    // 用于展示表头，以及内容取值的相关匹配
    tableMapper: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    tdText() {
      return (item, mapper) => {
        if (mapper.fixedValue)
          return mapper.fixedValue;
        const value = item[mapper.valueKey];
        if (mapper.valueHandler)
          return mapper.valueHandler(value);
        return value;
      };
    }
  },
  methods: {
    viewBtnClick(index, title) {
      this.$emit("viewBtnClick", index, title);
    },
    getViewTitles(title) {
      if (Array.isArray(title))
        return title;
      return [title || "查看"];
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_button = resolveComponent("button");
  return openBlock(), createElementBlock("view", {
    class: "action-table-container",
    renderWhole: true
  }, [
    createElementVNode("view", { class: "action-table" }, [
      createElementVNode("view", { class: "action-table--row action-table--radius" }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.tableMapper, (mapper, i) => {
          return openBlock(), createElementBlock("view", {
            class: normalizeClass(["action-table-th", { isView: mapper.isView }]),
            key: i
          }, [
            createElementVNode("u-text", { class: "action-table-th--text" }, toDisplayString(mapper.name), 1)
          ], 2);
        }), 128))
      ])
    ]),
    createElementVNode("scroller", { class: "action-scroller" }, [
      createElementVNode("view", { class: "action-table" }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.tableData, (item, index) => {
          return openBlock(), createElementBlock("view", {
            class: normalizeClass(["action-table--row", { "action-table--rowodd": index % 2 === 1, "action-table--roweven": index % 2 === 0 }]),
            key: index
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($props.tableMapper, (mapper, i) => {
              return openBlock(), createElementBlock("view", {
                class: normalizeClass(["action-table-td", { isView: mapper.isView }]),
                key: i
              }, [
                mapper.isView ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($options.getViewTitles(mapper.viewTitle), (title, i2) => {
                  return openBlock(), createBlock(_component_button, {
                    key: i2,
                    class: "action-table-body--btn",
                    type: "primary",
                    size: "mini",
                    onClick: ($event) => $options.viewBtnClick(index, title)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(title), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]);
                }), 128)) : mapper.isImage ? (openBlock(), createElementBlock("u-image", {
                  key: 1,
                  class: "action-table-body--image",
                  src: item[mapper.valueKey]
                }, null, 8, ["src"])) : (openBlock(), createElementBlock("u-text", {
                  key: 2,
                  class: "action-table-td--text"
                }, toDisplayString($options.tdText(item, mapper)), 1))
              ], 2);
            }), 128))
          ], 2);
        }), 128))
      ])
    ])
  ]);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  __easycom_2 as _
};
