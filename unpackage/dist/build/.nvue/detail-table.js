import { openBlock, createElementBlock, Fragment, renderList, createElementVNode, normalizeClass, toDisplayString } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.js";
const _style_0 = { "detail-table": { "": { "flex": 1, "display": "flex", "flexDirection": "column", "backgroundColor": "#ffffff", "borderRightWidth": 1, "borderRightStyle": "solid", "borderRightColor": "#dddddd", "borderTopWidth": 1, "borderTopStyle": "solid", "borderTopColor": "#dddddd" } }, "detail-table--row": { ".detail-table ": { "display": "flex", "flexDirection": "row", "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#dddddd" } }, "detail-table--heighten": { ".detail-table ": { "minHeight": "150px", "height": 100 } }, "detail-table--col": { ".detail-table ": { "flex": 1, "flexDirection": "row", "alignItems": "center" } }, "detail-table--col---item": { ".detail-table .detail-table--col ": { "justifyContent": "center", "paddingTop": 12, "paddingRight": 15, "paddingBottom": 12, "paddingLeft": 15 } }, "detail-table--col---left": { ".detail-table .detail-table--col ": { "width": 150, "height": 100, "backgroundColor": "#f7f8f9", "borderLeftWidth": 1, "borderLeftStyle": "solid", "borderLeftColor": "#dddddd", "alignItems": "flex-end" } }, "detail-table--col---right": { ".detail-table .detail-table--col ": { "flex": 1, "backgroundColor": "#ffffff" } }, "detail-table--col---text": { ".detail-table .detail-table--col ": { "fontSize": 16, "color": "#333333" } }, "detail-table--col---image": { ".detail-table .detail-table--col ": { "width": 200, "height": 150, "backgroundColor": "#dddddd" } }, "detail-table--col---content": { ".detail-table .detail-table--col ": { "fontSize": 16, "color": "#666666" } } };
const _sfc_main = {
  name: "detail-table",
  props: {
    // table用于内容展示的数据
    detailData: {
      type: Object,
      default() {
        return {};
      }
    },
    // 用于展示表头，以及内容取值的相关匹配
    detailMapper: {
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
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("scroller", { class: "detail-table" }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.detailMapper, (cols, i) => {
      return openBlock(), createElementBlock("view", {
        class: "detail-table--row",
        key: i
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(cols, (col, j) => {
          return openBlock(), createElementBlock("view", {
            class: "detail-table--col",
            key: col.name
          }, [
            createElementVNode("view", {
              class: normalizeClass(["detail-table--col---item detail-table--col---left", { "detail-table--heighten": cols.length === 1 && !col.normal }])
            }, [
              createElementVNode("u-text", { class: "detail-table--col---text" }, toDisplayString(col.name), 1)
            ], 2),
            createElementVNode("view", { class: "detail-table--col---item detail-table--col---right" }, [
              col.isImage ? (openBlock(), createElementBlock("u-image", {
                key: 0,
                class: "detail-table--col---image",
                src: $props.detailData[col.valueKey]
              }, null, 8, ["src"])) : (openBlock(), createElementBlock("u-text", {
                key: 1,
                class: "detail-table--col---content"
              }, toDisplayString($options.tdText($props.detailData, col)), 1))
            ])
          ]);
        }), 128))
      ]);
    }), 128))
  ]);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  __easycom_2 as _
};
