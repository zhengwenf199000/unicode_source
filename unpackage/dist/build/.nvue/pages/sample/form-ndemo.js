import { r as resolveEasycom, f as formatAppLog } from "../../uni-app.es.js";
import { n as nr, _ as __easycom_0$1 } from "../../uni-data-select.js";
import { openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot, createElementVNode, createCommentVNode, toDisplayString, resolveDynamicComponent, resolveComponent, createBlock, Fragment, withCtx, renderList, createVNode, withModifiers, createTextVNode } from "vue";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
import { _ as __easycom_1$2, a as __easycom_3 } from "../../uni-forms.js";
import { _ as __easycom_1$3 } from "../../uni-forms-item.js";
import { i as initVueI18n } from "../../uni-i18n.es.js";
import { _ as __easycom_1$1 } from "../../uni-icons.js";
const _style_0$b = { "uni-card": { "": { "marginTop": 10, "marginRight": 10, "marginBottom": 10, "marginLeft": 10, "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "borderRadius": 4, "overflow": "hidden", "fontFamily": "Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif", "backgroundColor": "#ffffff", "flex": 1 } }, "uni-card__cover": { ".uni-card ": { "position": "relative", "marginTop": 10, "flexDirection": "row", "overflow": "hidden", "borderRadius": 4 } }, "uni-card__cover-image": { ".uni-card .uni-card__cover ": { "flex": 1 } }, "uni-card__header": { ".uni-card ": { "display": "flex", "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#EBEEF5", "flexDirection": "row", "alignItems": "center", "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "overflow": "hidden" } }, "uni-card__header-box": { ".uni-card .uni-card__header ": { "flex": 1, "flexDirection": "row", "alignItems": "center", "overflow": "hidden" } }, "uni-card__header-avatar": { ".uni-card .uni-card__header ": { "width": 40, "height": 40, "overflow": "hidden", "borderRadius": 5, "marginRight": 10 } }, "uni-card__header-avatar-image": { ".uni-card .uni-card__header .uni-card__header-avatar ": { "flex": 1, "width": 40, "height": 40 } }, "uni-card__header-content": { ".uni-card .uni-card__header ": { "flexDirection": "column", "justifyContent": "center", "flex": 1, "overflow": "hidden" } }, "uni-card__header-content-title": { ".uni-card .uni-card__header .uni-card__header-content ": { "fontSize": 15, "color": "#3a3a3a" } }, "uni-card__header-content-subtitle": { ".uni-card .uni-card__header .uni-card__header-content ": { "fontSize": 12, "marginTop": 5, "color": "#909399" } }, "uni-card__header-extra": { ".uni-card .uni-card__header ": { "lineHeight": 12 } }, "uni-card__header-extra-text": { ".uni-card .uni-card__header .uni-card__header-extra ": { "fontSize": 12, "color": "#909399" } }, "uni-card__content": { ".uni-card ": { "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "fontSize": 14, "color": "#6a6a6a", "lineHeight": 22 } }, "uni-card__actions": { ".uni-card ": { "fontSize": 12 } }, "uni-card--border": { "": { "borderWidth": 1, "borderStyle": "solid", "borderColor": "#EBEEF5" } }, "uni-card--shadow": { "": { "position": "relative" } }, "uni-card--full": { "": { "marginTop": 0, "marginRight": 0, "marginBottom": 0, "marginLeft": 0, "borderLeftWidth": 0, "borderRadius": 0 } }, "uni-ellipsis": { "": { "lines": 1 } } };
const _sfc_main$b = {
  name: "UniCard",
  emits: ["click"],
  props: {
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    padding: {
      type: String,
      default: "10px"
    },
    margin: {
      type: String,
      default: "15px"
    },
    spacing: {
      type: String,
      default: "0 10px"
    },
    extra: {
      type: String,
      default: ""
    },
    cover: {
      type: String,
      default: ""
    },
    thumbnail: {
      type: String,
      default: ""
    },
    isFull: {
      // 内容区域是否通栏
      type: Boolean,
      default: false
    },
    isShadow: {
      // 是否开启阴影
      type: Boolean,
      default: true
    },
    shadow: {
      type: String,
      default: "0px 0px 3px 1px rgba(0, 0, 0, 0.08)"
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onClick(type) {
      this.$emit("click", type);
    }
  }
};
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(["uni-card", { "uni-card--full": $props.isFull, "uni-card--shadow": $props.isShadow, "uni-card--border": $props.border }]),
    style: normalizeStyle({ "margin": $props.isFull ? 0 : $props.margin, "padding": $props.spacing, "box-shadow": $props.isShadow ? $props.shadow : "" }),
    renderWhole: true
  }, [
    renderSlot(_ctx.$slots, "cover", {}, () => [
      $props.cover ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "uni-card__cover"
      }, [
        createElementVNode("u-image", {
          class: "uni-card__cover-image",
          mode: "widthFix",
          onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick("cover")),
          src: $props.cover
        }, null, 8, ["src"])
      ])) : createCommentVNode("", true)
    ]),
    renderSlot(_ctx.$slots, "title", {}, () => [
      $props.title || $props.extra ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "uni-card__header"
      }, [
        createElementVNode("view", {
          class: "uni-card__header-box",
          onClick: _cache[1] || (_cache[1] = ($event) => $options.onClick("title"))
        }, [
          $props.thumbnail ? (openBlock(), createElementBlock("view", {
            key: 0,
            class: "uni-card__header-avatar"
          }, [
            createElementVNode("u-image", {
              class: "uni-card__header-avatar-image",
              src: $props.thumbnail,
              mode: "aspectFit"
            }, null, 8, ["src"])
          ])) : createCommentVNode("", true),
          createElementVNode("view", { class: "uni-card__header-content" }, [
            createElementVNode("u-text", { class: "uni-card__header-content-title uni-ellipsis" }, toDisplayString($props.title), 1),
            $props.title && $props.subTitle ? (openBlock(), createElementBlock("u-text", {
              key: 0,
              class: "uni-card__header-content-subtitle uni-ellipsis"
            }, toDisplayString($props.subTitle), 1)) : createCommentVNode("", true)
          ])
        ]),
        createElementVNode("view", {
          class: "uni-card__header-extra",
          onClick: _cache[2] || (_cache[2] = ($event) => $options.onClick("extra"))
        }, [
          createElementVNode("u-text", { class: "uni-card__header-extra-text" }, toDisplayString($props.extra), 1)
        ])
      ])) : createCommentVNode("", true)
    ]),
    createElementVNode("view", {
      class: "uni-card__content",
      style: normalizeStyle({ padding: $props.padding }),
      onClick: _cache[3] || (_cache[3] = ($event) => $options.onClick("content"))
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 4),
    createElementVNode("view", {
      class: "uni-card__actions",
      onClick: _cache[4] || (_cache[4] = ($event) => $options.onClick("actions"))
    }, [
      renderSlot(_ctx.$slots, "actions")
    ])
  ], 6);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b], ["styles", [_style_0$b]]]);
const en$1 = {
  "uni-load-more.contentdown": "Pull up to show more",
  "uni-load-more.contentrefresh": "loading...",
  "uni-load-more.contentnomore": "No more data"
};
const zhHans$1 = {
  "uni-load-more.contentdown": "上拉显示更多",
  "uni-load-more.contentrefresh": "正在加载...",
  "uni-load-more.contentnomore": "没有更多数据了"
};
const zhHant$1 = {
  "uni-load-more.contentdown": "上拉顯示更多",
  "uni-load-more.contentrefresh": "正在加載...",
  "uni-load-more.contentnomore": "沒有更多數據了"
};
const messages$1 = {
  en: en$1,
  "zh-Hans": zhHans$1,
  "zh-Hant": zhHant$1
};
const _style_0$a = { "uni-load-more": { "": { "flexDirection": "row", "height": 40, "alignItems": "center", "justifyContent": "center" } }, "uni-load-more__text": { "": { "fontSize": 14, "marginLeft": 8 } }, "uni-load-more__img": { "": { "width": 24, "height": 24 } }, "uni-load-more__img--nvue": { "": { "color": "#666666" } }, "uni-load-more__img--android": { "": { "width": 24, "height": 24, "transform": "rotate(0deg)" } }, "uni-load-more__img--ios": { "": { "width": 24, "height": 24, "transform": "rotate(0deg)" } } };
let platform;
setTimeout(() => {
  platform = uni.getSystemInfoSync().platform;
}, 16);
const {
  t: t$3
} = initVueI18n(messages$1);
const _sfc_main$a = {
  name: "UniLoadMore",
  emits: ["clickLoadMore"],
  props: {
    status: {
      // 上拉的状态：more-loading前；loading-loading中；noMore-没有更多了
      type: String,
      default: "more"
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    iconType: {
      type: String,
      default: "auto"
    },
    iconSize: {
      type: Number,
      default: 24
    },
    color: {
      type: String,
      default: "#777777"
    },
    contentText: {
      type: Object,
      default() {
        return {
          contentdown: "",
          contentrefresh: "",
          contentnomore: ""
        };
      }
    },
    showText: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      webviewHide: false,
      platform,
      imgBase64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlBMzU3OTlEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlBMzU3OUFEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOUEzNTc5N0Q5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOUEzNTc5OEQ5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt+ALSwAAA6CSURBVHja1FsLkFZVHb98LM+F5bHL8khA1iSeiyQBCRM+YGqKUnnJTDLGI0BGZlKDIU2MMglUiDApEZvSsZnQtBRJtKwQNKQMFYeRDR10WOLd8ljYXdh+v8v5fR3Od+797t1dnOnO/Ofce77z+J//+b/P+ZqtXbs2sJ9MJhNUV1cHJ06cCJo3bx7EPc2aNcvpy7pWrVoF+/fvDyoqKoI2bdoE9fX1F7TjN8a+EXBn/fkfvw942Tf+wYMHg9mzZwfjxo0LDhw4EPa1x2MbFw/fOGfPng1qa2tzcCkILsLDydq2bRsunpOTMM7TD/W/tZDZhPdeKD+yGxHhdu3aBV27dg3OnDlzMVANMheLAO3btw8KCwuDmpoaX5OxbgUIMEq7K8IcPnw4KCsrC/r37x8cP378/4cAXAB3vqSkJMuiDhTkw+XcuXNhOWbMmKBly5YhUT8xArhyFvP0BfwRsAuwxJZJsm/nzp2DTp06he/OU+cZ64K6o0ePBkOHDg2GDx8e6gEbJ5Q/NHNuAJQ1hgBeHUDlR7nVTkY8rQAvAi4z34vR/mPs1FoRsaCgIJThI0eOBC1atEiFGGV+5MiRoS45efJkqFjJFXV1dQuA012m2WcwTw98fy6CqBdsaiIO4CScrGPHjvk4odhavPquRtFWXEC25VgkREKOCh/qDSq+vn37htzD/mZTOmOc5U7zKzBPEedygWshcDyWvs30igAbU+6oyMgJBCFhwQE0fccxN60Ay9iebbjoDh06hMowjQxT4fXq1SskArmHZpkArvixp/kWzHdMeArExSJEaiXIjjRjRJ4DaAGWpibLzXN3Fm1vA5teBgh3j1Rv3bp1YgKwPdmf2p9zcyNYYgPKMfY0T5f5nNYdw158nJ8QawW4CLKwiOBSEgO/hok2eBydR+3dYH+PLxA5J8Vv0KBBwenTp0P2JWAx6+yFEBfs8lMY+y0SWMBNI9E4ThKi58VKTg3FQZS1RQF1cz27eC0QHMu+3E0SkUowjhVt5VdaWhp07949ZHv2Qd1EjDXM2cla1M0nl3GxAs3J9yREzyTdFVKVFOaE9qRA8GM0WebRuo9JGZKA7Mv2SeS/Z8+eoQ9BArMfFrLGo6jvxbhHbJZnKX2Rzz1O7QhJJ9Cs2ZMaWIyq/zhdeqPNfIoHd58clIQD+JSXl4dKlyIAuBdVXZwFVWKspSSoxE++h8x4k3uCnEhE4I5KwRiFWGOU0QWKiCYLbdoRMRKAu2kQ9vkfLU6dOhX06NEjlH+yMRZSinnuyWnYosVcji8CEA/6Cg2JF+IIUBqnGKUTCNwtwBN4f89RiK1R96DEgO2o0NDmtEdvVFdVVYV+P3UAPUEs6GFwV3PHmXkD4vh74iDFJysVI/MlaQhwKeBNTLYX5VuA8T4/gZxA4MRGFxDB6R7OmYPfyykGRJbyie+XnGYnQIC/coH9+vULiYrxrkL9ZA9+0ykaHIfEpM7ge8TiJ2CsHYwyMfafAF1yCGBHYIbCVDjDjKt7BeB51D+LgQa6OkG7IDYEEtvQ7lnXLKLtLdLuJBpE4gPUXcW2+PkZwOex+4cGDhwYDBkyRL7/HFcEwUGPo/8uWRUpYnfxGHco8HkewLHLyYmAawAPuIFZxhOpDfJQ8gbUv41yORAptMWBNr6oqMhWird5+u+iHmBb2nhjDV7HWBNQTgK8y11l5NetWzc5ULscAtSj7nbNI0skhWeUZCc0W4nyH/jO4Vz0u1IeYhbk4AiwM6tjxIWByHsoZ9qcIBPJd/y+DwPfBESOmCa/QF3WiZHucLlEDpNxcNhmheEOPgdQNx6/VZFQzFZ5TN08AHXQt2Ii3EdyFuUsPtTcGPhW5iMiCNELvz+Gdn9huG4HUJaW/w3g0wxV0XaG7arG2WeKiUWYM4Y7GO5ezshTARbbWGw/DvXkpp/ivVvE0JVoMxN4rpGzJMhE5Pl+xlATsDIqikP9F9D2z3h9nOksEUFhK+qO4rcPkoalMQ/HqJLIyb3F3JdjrCcw1yZ8joyJLR5gCo54etlag7qIoeNh1N1BRYj3DTFJ0elotxPlVzkGuYAmL0VSJVGAJA41c4Z6A3BzTLfn0HYwYKEI6CUAMzZEWvLsIcQOo1AmmyyM72nHJCfYsogflGV6jEk9vyQZXSuq6w4c16NsGcGZbwOPr+H1RkOk2LEzjNepxQkihHSCQ4ynAYNRx2zMKV92CQMWqj8J0BRE8EShxRFN6YrfCRhC0x3r/Zm4IbQCcmJoV0kMamllccR6FjHqUC5F2R/wS2dcymOlfAKOS4KmzQb5cpNC2MC7JhVn5wjXoJ44rYhLh8n0eXOCorJxa7POjbSlCGVczr34/RsAmrcvo9s+wGp3tzVhntxiXiJ4nvEYb4FJkf0O8HocAePmLvCxnL0AORraVekJk6TYjDabRVXfRE2lCN1h6ZQRN1+InUbsCpKwoBZHh0dODN9JBCUffItXxEavTQkUtnfTVAplCWL3JISz29h4NjotnuSsQKJCk8dF+kJR6RARjrqFVmfPnj3ZbK8cIJ0msd6jgHPGtfVTQ8VLmlvh4mct9sobRmPic0DyDQQnx/NlfYUgyz59+oScsH379pAwXABD32nTpoUHIToESeI5mnbE/UqDdyLcafEBf2MCqgC7NwxIbMREJQ0g4D4sfJwnD+AmRrII05cfMWJE+L1169bQr+fip06dGp4oJ83lmYd5wj/EmMa4TaHivo4EeCguYZBnkB5g2aWA69OIEnUHOaGysjIYMGBAMGnSpODYsWPZwCpFmm4lNq+4gSLQA7jcX8DwtjEyRC8wjabnXEx9kfWnTJkSJkAo90xpJVV+FmcVNeYAF5zWngS4C4O91MBxmAv8blLEpbjI5sz9MTdAhcgkCT1RO8mZkAjfiYpTEvStAS53Uw1vAiUGgZ3GpuQEYvoiBqlIan7kSDHnTwJQFNiPu0+5VxCVYhcZIjNrdXUDdp+Eq5AZ3Gkg8QAyVZRZIk4Tl4QAbF9cXJxNYZMAtAokgs4BrNxEpCtteXg7DDTMDKYNSuQdKsnJBek7HxewvxaosWxLYXtw+cJp18217wql4aKCfBNoEu0O5VU+PhctJ0YeXD4C6JQpyrlpSLTojpGGGN5YwNziChdIZLk4lvLcFJ9jMX3QdiImY9bmGQU+TRUL5CHITTRlgF8D9ouD1MfmLoEPl5xokIumZ2cfgMpHt47IW9N64Hsh7wQYYjyIugWuF5fCqYncXRd5vPMWyizzvhi/32+nvG0dZc9vR6fZOu0md5e+uC408FvKSIOZwXlGvxPv95izA2Vtvg1xKFWARI+vMX66HUhpQQb643uW1bSjuTWyw2SBvDrBvjFic1eGGlz5esq3ko9uSIlBRqPuFcCv8F4WIcN12nVaBd0SaYwI6PDDImR11JkqgHcPmQssjxIn6bUshygDFJUTxPMpHk+jfjPgupgdnYV2R/g7xSjtpah8RJBewhwf0gGK6XI92u4wXFEU40afJ4DN4h5LcAd+40HI3JgJecuT0c062W0i2hQJUTcxan3/CMW1PF2K6bbA+Daz4xRs1D3Br1Cm0OihKCqizW78/nXAF/G5TXrEcVzaNMH6CyMswqsAHqDyDLEyou8lwOXnKF8DjI6KjV3KzMBiXkDH8ij/H214J5A596ekrZ3F0zXlWeL7+P5eUrNo3/QwC15uxthuzidy7DzKRwEDaAViiDgKbTbz7CJnzo0bN7pIfIiid8SuPwn25o3QCmpnyjlZkyxPP8EomCJzrGb7GJMx7tNsq4MT2xMUYaiErZOluTzKsnz3gwCeCZyVRZJfYplNEokEjwrPtxlxjeYAk+F1F74VAzPxQRNYYdtpOUvWs8J1sGhBJMNsb7igN8plJs1eSmLIhLKE4rvaCX27gOhLpLOsIzJ7qn/i+wZzcvSOZ23/du8TZjwV8zHIXoP4R3ifBxiFz1dcVpa3aPntPE+c6TmIWE9EtcMmAcPdWAhYhAXxcLOQi9L1WhD1Sc8p1d2oL7XGiRKp8F4A2i8K/nfI+y/gsTDJ/YC/8+AD5Uh04KHiGl+cIFPnBDDrPMjwRGkLXyxO4VGbfQWnDH2v0bVWE3C9QOXlepbgjEfIJQI6XDG3z5ahD9cw2pS78ipB85wyScNTvsVzlzzhL8/jRrnmVjfFJK/m3m4nj9vbgQTguT8XZTjsm672R5uJKEaQmBI/c58gyus8ZDagLpEVSJBIyHp4jn++xqPV71OgQgJYEWOtZ/haxRtKmWOBu8xdBLftWltsY84zE6WIEy/eIOWL+BaayMx+KHtL7EAkqdNDLiEXmEMUHniedtJqg9HmZtfvt26vNi0BdG3Ft3g8ZOf7PAu59TxtzivLNIekyi+wD1i8CuUiD9FXAa8C+/xS3JPmZnomyc7H+fb4/Se0bk41Fel621r4cgVxbq91V4jVqwB7HTe2M7jgB+QWHavZkDRPmZcASoZEmBx6i75bGjPcMdL4/VKGFAGWZkGzPG0XAbdL9A81G5LOmUnC9hHKJeO7dcUMjblSl12867ElFTtaGl20xvvLGPdVz/8TVuU7y0x1PG7vtNg24oz9Uo/Z412++VFWI7Fcog9tu9Lm6gvRmIPv9x1xmQAu6RDkXtbOtlGEmpgD5Nvnyc0dcv0EE6cfdi1HmhMf9wDF3k3gtRvEedhxjpgfqPb9PU9iEJHnyOUA7bQUXh6kq/D7l2iTjWv7XOD530BDr8jIrus+srXjt4MzumJMHuTsBa63YKE1+RR5lBjEikCCnWKWiHdzOgKO+nRIBAF88za/IFmJ3eMZov4CYxGBabcpGL8EYx+SeMXJeRwHNsV/h+vdxeuhEpN3ZyNY78Gm2fknJxVGhyjixPiQvVkNzT1elD9Py/aTAL64Hb9vcYmC9zfdXdT/C1LeGbg4rnBaAihDFJH12W5ulfNCNe/xTsP3bp8ikzJs5BF+5PNfAQYAPaseTdsEcaYAAAAASUVORK5CYII="
    };
  },
  computed: {
    iconSnowWidth() {
      return (Math.floor(this.iconSize / 24) || 1) * 2;
    },
    contentdownText() {
      return this.contentText.contentdown || t$3("uni-load-more.contentdown");
    },
    contentrefreshText() {
      return this.contentText.contentrefresh || t$3("uni-load-more.contentrefresh");
    },
    contentnomoreText() {
      return this.contentText.contentnomore || t$3("uni-load-more.contentnomore");
    }
  },
  mounted() {
    var pages = getCurrentPages();
    var page = pages[pages.length - 1];
    var currentWebview = page.$getAppWebview();
    currentWebview.addEventListener("hide", () => {
      this.webviewHide = true;
    });
    currentWebview.addEventListener("show", () => {
      this.webviewHide = false;
    });
  },
  methods: {
    onClick() {
      this.$emit("clickLoadMore", {
        detail: {
          status: this.status
        }
      });
    }
  }
};
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "uni-load-more",
    onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args)),
    renderWhole: true
  }, [
    !$data.webviewHide && $props.status === "loading" && $props.showIcon ? (openBlock(), createElementBlock("loading-indicator", {
      key: 0,
      style: normalizeStyle({ color: $props.color, width: $props.iconSize + "px", height: $props.iconSize + "px" }),
      animating: true,
      class: "uni-load-more__img uni-load-more__img--nvue"
    }, null, 4)) : createCommentVNode("", true),
    $props.showText ? (openBlock(), createElementBlock("u-text", {
      key: 1,
      class: "uni-load-more__text",
      style: normalizeStyle({ color: $props.color })
    }, toDisplayString($props.status === "more" ? $options.contentdownText : $props.status === "loading" ? $options.contentrefreshText : $options.contentnomoreText), 5)) : createCommentVNode("", true)
  ]);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["styles", [_style_0$a]]]);
const _style_0$9 = { "uni-data-loading": { "": { "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "height": 36, "paddingLeft": 10, "color": "#999999" } }, "uni-data-checklist": { "": { "position": "relative", "zIndex": 0, "flex": 1 } }, "checklist-group": { ".uni-data-checklist ": { "flexDirection": "row", "flexWrap": "wrap" }, ".uni-data-checklist .is-list": { "flexDirection": "column" } }, "checklist-box": { ".uni-data-checklist .checklist-group ": { "flexDirection": "row", "alignItems": "center", "position": "relative", "marginTop": 5, "marginRight": 25, "marginBottom": 5, "marginLeft": 0 }, ".uni-data-checklist .checklist-group .is--button": { "marginRight": 10, "paddingTop": 5, "paddingRight": 10, "paddingBottom": 5, "paddingLeft": 10, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#DCDFE6", "borderRadius": 3, "transitionProperty": "borderColor", "transitionDuration": 200 }, ".uni-data-checklist .checklist-group .is--button.is-disable": { "borderWidth": 1, "borderStyle": "solid", "borderColor": "#eeeeee", "opacity": 0.4 }, ".uni-data-checklist .checklist-group .is--button.is-checked": { "borderColor": "#2979ff" }, ".uni-data-checklist .checklist-group .is--button.is-checked.is-disable": { "opacity": 0.4 }, ".uni-data-checklist .checklist-group .is--tag": { "marginRight": 10, "paddingTop": 5, "paddingRight": 10, "paddingBottom": 5, "paddingLeft": 10, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#DCDFE6", "borderRadius": 3, "backgroundColor": "#f5f5f5" }, ".uni-data-checklist .checklist-group .is--tag.is-disable": { "opacity": 0.4 }, ".uni-data-checklist .checklist-group .is--tag.is-checked": { "backgroundColor": "#2979ff", "borderColor": "#2979ff" }, ".uni-data-checklist .checklist-group .is--list": { "paddingTop": 10, "paddingRight": 15, "paddingBottom": 10, "paddingLeft": 0, "marginTop": 0, "marginRight": 0, "marginBottom": 0, "marginLeft": 0 }, ".uni-data-checklist .checklist-group .is--list.is-list-border": { "borderTopWidth": 1, "borderTopStyle": "solid", "borderTopColor": "#eeeeee" } }, "hidden": { ".uni-data-checklist .checklist-group .checklist-box ": { "position": "absolute", "opacity": 0 } }, "checklist-content": { ".uni-data-checklist .checklist-group .checklist-box ": { "flex": 1, "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between" } }, "checklist-text": { ".uni-data-checklist .checklist-group .checklist-box .checklist-content ": { "fontSize": 14, "color": "#666666", "marginLeft": 5, "lineHeight": 14 }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-disable ": { "color": "#999999" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked ": { "color": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked.is-disable ": { "opacity": 0.4 }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-disable ": { "color": "#999999" }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-checked ": { "color": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--tag ": { "marginTop": 0, "marginRight": 0, "marginBottom": 0, "marginLeft": 0, "color": "#666666" }, ".uni-data-checklist .checklist-group .checklist-box.is--tag.is-checked ": { "color": "#ffffff" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-disable ": { "color": "#999999" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked ": { "color": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked.is-disable ": { "opacity": 0.4 } }, "checkobx__list": { ".uni-data-checklist .checklist-group .checklist-box .checklist-content ": { "borderRightWidth": 1, "borderRightColor": "#007aff", "borderRightStyle": "solid", "borderBottomWidth": 1, "borderBottomColor": "#007aff", "borderBottomStyle": "solid", "height": 12, "width": 6, "left": -5, "transformOrigin": "center", "transform": "rotate(45deg)", "opacity": 0 }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked .checklist-content ": { "opacity": 1, "borderColor": "#2979ff" } }, "checkbox__inner": { ".uni-data-checklist .checklist-group .checklist-box ": { "position": "relative", "width": 16, "height": 16, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#DCDFE6", "borderRadius": 4, "backgroundColor": "#ffffff", "zIndex": 1 }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-disable ": { "backgroundColor": "#F2F6FC", "borderColor": "#DCDFE6" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked ": { "borderColor": "#2979ff", "backgroundColor": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked.is-disable ": { "opacity": 0.4 }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-disable ": { "backgroundColor": "#F2F6FC", "borderColor": "#DCDFE6" }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-checked ": { "borderColor": "#2979ff", "backgroundColor": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-disable ": { "backgroundColor": "#F2F6FC", "borderColor": "#DCDFE6" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked ": { "borderColor": "#2979ff", "backgroundColor": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked.is-disable ": { "opacity": 0.4 } }, "checkbox__inner-icon": { ".uni-data-checklist .checklist-group .checklist-box .checkbox__inner ": { "position": "absolute", "top": 2, "left": 5, "height": 8, "width": 4, "borderRightWidth": 1, "borderRightColor": "#ffffff", "borderRightStyle": "solid", "borderBottomWidth": 1, "borderBottomColor": "#ffffff", "borderBottomStyle": "solid", "opacity": 0, "transformOrigin": "center", "transform": "rotate(40deg)" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked .checkbox__inner ": { "opacity": 1, "transform": "rotate(45deg)" }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-checked .checkbox__inner ": { "opacity": 1, "transform": "rotate(45deg)" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked .checkbox__inner ": { "opacity": 1, "transform": "rotate(45deg)" } }, "radio__inner": { ".uni-data-checklist .checklist-group .checklist-box ": { "justifyContent": "center", "alignItems": "center", "position": "relative", "width": 16, "height": 16, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#DCDFE6", "borderRadius": 16, "backgroundColor": "#ffffff", "zIndex": 1 }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-disable ": { "backgroundColor": "#F2F6FC", "borderColor": "#DCDFE6" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked ": { "borderColor": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked.is-disable ": { "opacity": 0.4 }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-disable ": { "backgroundColor": "#F2F6FC", "borderColor": "#DCDFE6" }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-checked ": { "borderColor": "#2979ff" } }, "radio__inner-icon": { ".uni-data-checklist .checklist-group .checklist-box .radio__inner ": { "width": 8, "height": 8, "borderRadius": 10, "opacity": 0 }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked .radio__inner ": { "opacity": 1, "backgroundColor": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-checked .radio__inner ": { "opacity": 1, "backgroundColor": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked .radio__inner ": { "opacity": 1 } }, "@TRANSITION": { "checklist-box": { "property": "borderColor", "duration": 200 } } };
const _sfc_main$9 = {
  name: "uniDataChecklist",
  mixins: [nr.mixinDatacom || {}],
  emits: ["input", "update:modelValue", "change"],
  props: {
    mode: {
      type: String,
      default: "default"
    },
    multiple: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Array, String, Number],
      default() {
        return "";
      }
    },
    // TODO vue3
    modelValue: {
      type: [Array, String, Number],
      default() {
        return "";
      }
    },
    localdata: {
      type: Array,
      default() {
        return [];
      }
    },
    min: {
      type: [Number, String],
      default: ""
    },
    max: {
      type: [Number, String],
      default: ""
    },
    wrap: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: "left"
    },
    selectedColor: {
      type: String,
      default: ""
    },
    selectedTextColor: {
      type: String,
      default: ""
    },
    emptyText: {
      type: String,
      default: "暂无数据"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    map: {
      type: Object,
      default() {
        return {
          text: "text",
          value: "value"
        };
      }
    }
  },
  watch: {
    localdata: {
      handler(newVal) {
        this.range = newVal;
        this.dataList = this.getDataList(this.getSelectedValue(newVal));
      },
      deep: true
    },
    mixinDatacomResData(newVal) {
      this.range = newVal;
      this.dataList = this.getDataList(this.getSelectedValue(newVal));
    },
    value(newVal) {
      this.dataList = this.getDataList(newVal);
    },
    modelValue(newVal) {
      this.dataList = this.getDataList(newVal);
    }
  },
  data() {
    return {
      dataList: [],
      range: [],
      contentText: {
        contentdown: "查看更多",
        contentrefresh: "加载中",
        contentnomore: "没有更多"
      },
      isLocal: true,
      styles: {
        selectedColor: "#2979ff",
        selectedTextColor: "#666"
      },
      isTop: 0
    };
  },
  computed: {
    dataValue() {
      if (this.value === "")
        return this.modelValue;
      if (this.modelValue === "")
        return this.value;
      return this.value;
    }
  },
  created() {
    if (this.localdata && this.localdata.length !== 0) {
      this.isLocal = true;
      this.range = this.localdata;
      this.dataList = this.getDataList(this.getSelectedValue(this.range));
    } else {
      if (this.collection) {
        this.isLocal = false;
        this.loadData();
      }
    }
  },
  methods: {
    loadData() {
      this.mixinDatacomGet().then((res) => {
        this.mixinDatacomResData = res.result.data;
        if (this.mixinDatacomResData.length === 0) {
          this.isLocal = false;
          this.mixinDatacomErrorMessage = this.emptyText;
        } else {
          this.isLocal = true;
        }
      }).catch((err) => {
        this.mixinDatacomErrorMessage = err.message;
      });
    },
    /**
     * 获取父元素实例
     */
    getForm(name = "uniForms") {
      let parent = this.$parent;
      let parentName = parent.$options.name;
      while (parentName !== name) {
        parent = parent.$parent;
        if (!parent)
          return false;
        parentName = parent.$options.name;
      }
      return parent;
    },
    chagne(e) {
      const values = e.detail.value;
      let detail = {
        value: [],
        data: []
      };
      if (this.multiple) {
        this.range.forEach((item) => {
          if (values.includes(item[this.map.value] + "")) {
            detail.value.push(item[this.map.value]);
            detail.data.push(item);
          }
        });
      } else {
        const range = this.range.find((item) => item[this.map.value] + "" === values);
        if (range) {
          detail = {
            value: range[this.map.value],
            data: range
          };
        }
      }
      this.$emit("input", detail.value);
      this.$emit("update:modelValue", detail.value);
      this.$emit("change", {
        detail
      });
      if (this.multiple) {
        this.dataList = this.getDataList(detail.value, true);
      } else {
        this.dataList = this.getDataList(detail.value);
      }
    },
    /**
     * 获取渲染的新数组
     * @param {Object} value 选中内容
     */
    getDataList(value) {
      let dataList = JSON.parse(JSON.stringify(this.range));
      let list = [];
      if (this.multiple) {
        if (!Array.isArray(value)) {
          value = [];
        }
      }
      dataList.forEach((item, index) => {
        item.disabled = item.disable || item.disabled || false;
        if (this.multiple) {
          if (value.length > 0) {
            let have = value.find((val) => val === item[this.map.value]);
            item.selected = have !== void 0;
          } else {
            item.selected = false;
          }
        } else {
          item.selected = value === item[this.map.value];
        }
        list.push(item);
      });
      return this.setRange(list);
    },
    /**
     * 处理最大最小值
     * @param {Object} list
     */
    setRange(list) {
      let selectList = list.filter((item) => item.selected);
      let min = Number(this.min) || 0;
      let max = Number(this.max) || "";
      list.forEach((item, index) => {
        if (this.multiple) {
          if (selectList.length <= min) {
            let have = selectList.find((val) => val[this.map.value] === item[this.map.value]);
            if (have !== void 0) {
              item.disabled = true;
            }
          }
          if (selectList.length >= max && max !== "") {
            let have = selectList.find((val) => val[this.map.value] === item[this.map.value]);
            if (have === void 0) {
              item.disabled = true;
            }
          }
        }
        this.setStyles(item, index);
        list[index] = item;
      });
      return list;
    },
    /**
     * 设置 class
     * @param {Object} item
     * @param {Object} index
     */
    setStyles(item, index) {
      item.styleBackgroud = this.setStyleBackgroud(item);
      item.styleIcon = this.setStyleIcon(item);
      item.styleIconText = this.setStyleIconText(item);
      item.styleRightIcon = this.setStyleRightIcon(item);
    },
    /**
     * 获取选中值
     * @param {Object} range
     */
    getSelectedValue(range) {
      if (!this.multiple)
        return this.dataValue;
      let selectedArr = [];
      range.forEach((item) => {
        if (item.selected) {
          selectedArr.push(item[this.map.value]);
        }
      });
      return this.dataValue.length > 0 ? this.dataValue : selectedArr;
    },
    /**
     * 设置背景样式
     */
    setStyleBackgroud(item) {
      let styles = {};
      let selectedColor = this.selectedColor ? this.selectedColor : "#2979ff";
      if (this.selectedColor) {
        if (this.mode !== "list") {
          styles["border-color"] = item.selected ? selectedColor : "#DCDFE6";
        }
        if (this.mode === "tag") {
          styles["background-color"] = item.selected ? selectedColor : "#f5f5f5";
        }
      }
      let classles = "";
      for (let i in styles) {
        classles += `${i}:${styles[i]};`;
      }
      return classles;
    },
    setStyleIcon(item) {
      let styles = {};
      let classles = "";
      if (this.selectedColor) {
        let selectedColor = this.selectedColor ? this.selectedColor : "#2979ff";
        styles["background-color"] = item.selected ? selectedColor : "#fff";
        styles["border-color"] = item.selected ? selectedColor : "#DCDFE6";
        if (!item.selected && item.disabled) {
          styles["background-color"] = "#F2F6FC";
          styles["border-color"] = item.selected ? selectedColor : "#DCDFE6";
        }
      }
      for (let i in styles) {
        classles += `${i}:${styles[i]};`;
      }
      return classles;
    },
    setStyleIconText(item) {
      let styles = {};
      let classles = "";
      if (this.selectedColor) {
        let selectedColor = this.selectedColor ? this.selectedColor : "#2979ff";
        if (this.mode === "tag") {
          styles.color = item.selected ? this.selectedTextColor ? this.selectedTextColor : "#fff" : "#666";
        } else {
          styles.color = item.selected ? this.selectedTextColor ? this.selectedTextColor : selectedColor : "#666";
        }
        if (!item.selected && item.disabled) {
          styles.color = "#999";
        }
      }
      for (let i in styles) {
        classles += `${i}:${styles[i]};`;
      }
      return classles;
    },
    setStyleRightIcon(item) {
      let styles = {};
      let classles = "";
      if (this.mode === "list") {
        styles["border-color"] = item.selected ? this.styles.selectedColor : "#DCDFE6";
      }
      for (let i in styles) {
        classles += `${i}:${styles[i]};`;
      }
      return classles;
    }
  }
};
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_load_more = resolveEasycom(resolveDynamicComponent("uni-load-more"), __easycom_0);
  const _component_checkbox = resolveComponent("checkbox");
  const _component_label = resolveComponent("label");
  const _component_checkbox_group = resolveComponent("checkbox-group");
  const _component_radio = resolveComponent("radio");
  const _component_radio_group = resolveComponent("radio-group");
  return openBlock(), createElementBlock("view", {
    class: "uni-data-checklist",
    style: normalizeStyle({ "margin-top": $data.isTop + "px" }),
    renderWhole: true
  }, [
    !$data.isLocal ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: "uni-data-loading"
    }, [
      !_ctx.mixinDatacomErrorMessage ? (openBlock(), createBlock(_component_uni_load_more, {
        key: 0,
        status: "loading",
        iconType: "snow",
        iconSize: 18,
        "content-text": $data.contentText
      }, null, 8, ["content-text"])) : (openBlock(), createElementBlock("u-text", { key: 1 }, toDisplayString(_ctx.mixinDatacomErrorMessage), 1))
    ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
      $props.multiple ? (openBlock(), createBlock(_component_checkbox_group, {
        key: 0,
        class: normalizeClass(["checklist-group", { "is-list": $props.mode === "list" || $props.wrap }]),
        onChange: $options.chagne
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.dataList, (item, index) => {
            return openBlock(), createBlock(_component_label, {
              class: normalizeClass(["checklist-box", ["is--" + $props.mode, item.selected ? "is-checked" : "", $props.disabled || !!item.disabled ? "is-disable" : "", index !== 0 && $props.mode === "list" ? "is-list-border" : ""]]),
              style: normalizeStyle(item.styleBackgroud),
              key: index
            }, {
              default: withCtx(() => [
                createVNode(_component_checkbox, {
                  class: "hidden",
                  hidden: "",
                  disabled: $props.disabled || !!item.disabled,
                  value: item[$props.map.value] + "",
                  checked: item.selected
                }, null, 8, ["disabled", "value", "checked"]),
                $props.mode !== "tag" && $props.mode !== "list" || $props.mode === "list" && $props.icon === "left" ? (openBlock(), createElementBlock("view", {
                  key: 0,
                  class: "checkbox__inner",
                  style: normalizeStyle(item.styleIcon)
                }, [
                  createElementVNode("view", { class: "checkbox__inner-icon" })
                ], 4)) : createCommentVNode("", true),
                createElementVNode("view", {
                  class: normalizeClass(["checklist-content", { "list-content": $props.mode === "list" && $props.icon === "left" }])
                }, [
                  createElementVNode("u-text", {
                    class: "checklist-text",
                    style: normalizeStyle(item.styleIconText)
                  }, toDisplayString(item[$props.map.text]), 5),
                  $props.mode === "list" && $props.icon === "right" ? (openBlock(), createElementBlock("view", {
                    key: 0,
                    class: "checkobx__list",
                    style: normalizeStyle(item.styleBackgroud)
                  }, null, 4)) : createCommentVNode("", true)
                ], 2)
              ]),
              _: 2
            }, 1032, ["class", "style"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["class", "onChange"])) : (openBlock(), createBlock(_component_radio_group, {
        key: 1,
        class: normalizeClass(["checklist-group", { "is-list": $props.mode === "list", "is-wrap": $props.wrap }]),
        onChange: $options.chagne
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.dataList, (item, index) => {
            return openBlock(), createBlock(_component_label, {
              class: normalizeClass(["checklist-box", ["is--" + $props.mode, item.selected ? "is-checked" : "", $props.disabled || !!item.disabled ? "is-disable" : "", index !== 0 && $props.mode === "list" ? "is-list-border" : ""]]),
              style: normalizeStyle(item.styleBackgroud),
              key: index
            }, {
              default: withCtx(() => [
                createVNode(_component_radio, {
                  class: "hidden",
                  hidden: "",
                  disabled: $props.disabled || item.disabled,
                  value: item[$props.map.value] + "",
                  checked: item.selected
                }, null, 8, ["disabled", "value", "checked"]),
                $props.mode !== "tag" && $props.mode !== "list" || $props.mode === "list" && $props.icon === "left" ? (openBlock(), createElementBlock("view", {
                  key: 0,
                  class: "radio__inner",
                  style: normalizeStyle(item.styleBackgroud)
                }, [
                  createElementVNode("view", {
                    class: "radio__inner-icon",
                    style: normalizeStyle(item.styleIcon)
                  }, null, 4)
                ], 4)) : createCommentVNode("", true),
                createElementVNode("view", {
                  class: normalizeClass(["checklist-content", { "list-content": $props.mode === "list" && $props.icon === "left" }])
                }, [
                  createElementVNode("u-text", {
                    class: "checklist-text",
                    style: normalizeStyle(item.styleIconText)
                  }, toDisplayString(item[$props.map.text]), 5),
                  $props.mode === "list" && $props.icon === "right" ? (openBlock(), createElementBlock("view", {
                    key: 0,
                    style: normalizeStyle(item.styleRightIcon),
                    class: "checkobx__list"
                  }, null, 4)) : createCommentVNode("", true)
                ], 2)
              ]),
              _: 2
            }, 1032, ["class", "style"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["class", "onChange"]))
    ], 64))
  ], 4);
}
const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["styles", [_style_0$9]]]);
class Calendar {
  constructor({
    date,
    selected,
    startDate,
    endDate,
    range
    // multipleStatus
  } = {}) {
    this.date = this.getDate(/* @__PURE__ */ new Date());
    this.selected = selected || [];
    this.startDate = startDate;
    this.endDate = endDate;
    this.range = range;
    this.cleanMultipleStatus();
    this.weeks = {};
    this.lastHover = false;
  }
  /**
   * 设置日期
   * @param {Object} date
   */
  setDate(date) {
    this.selectDate = this.getDate(date);
    this._getWeek(this.selectDate.fullDate);
  }
  /**
   * 清理多选状态
   */
  cleanMultipleStatus() {
    this.multipleStatus = {
      before: "",
      after: "",
      data: []
    };
  }
  /**
   * 重置开始日期
   */
  resetSatrtDate(startDate) {
    this.startDate = startDate;
  }
  /**
   * 重置结束日期
   */
  resetEndDate(endDate) {
    this.endDate = endDate;
  }
  /**
   * 获取任意时间
   */
  getDate(date, AddDayCount = 0, str = "day") {
    if (!date) {
      date = /* @__PURE__ */ new Date();
    }
    if (typeof date !== "object") {
      date = date.replace(/-/g, "/");
    }
    const dd = new Date(date);
    switch (str) {
      case "day":
        dd.setDate(dd.getDate() + AddDayCount);
        break;
      case "month":
        if (dd.getDate() === 31) {
          dd.setDate(dd.getDate() + AddDayCount);
        } else {
          dd.setMonth(dd.getMonth() + AddDayCount);
        }
        break;
      case "year":
        dd.setFullYear(dd.getFullYear() + AddDayCount);
        break;
    }
    const y = dd.getFullYear();
    const m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
    const d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
    return {
      fullDate: y + "-" + m + "-" + d,
      year: y,
      month: m,
      date: d,
      day: dd.getDay()
    };
  }
  /**
   * 获取上月剩余天数
   */
  _getLastMonthDays(firstDay, full) {
    let dateArr = [];
    for (let i = firstDay; i > 0; i--) {
      const beforeDate = new Date(full.year, full.month - 1, -i + 1).getDate();
      dateArr.push({
        date: beforeDate,
        month: full.month - 1,
        disable: true
      });
    }
    return dateArr;
  }
  /**
   * 获取本月天数
   */
  _currentMonthDys(dateData, full) {
    let dateArr = [];
    let fullDate = this.date.fullDate;
    for (let i = 1; i <= dateData; i++) {
      let nowDate = full.year + "-" + (full.month < 10 ? full.month : full.month) + "-" + (i < 10 ? "0" + i : i);
      let isDay = fullDate === nowDate;
      let info = this.selected && this.selected.find((item) => {
        if (this.dateEqual(nowDate, item.date)) {
          return item;
        }
      });
      let disableBefore = true;
      let disableAfter = true;
      if (this.startDate) {
        disableBefore = this.dateCompare(this.startDate, nowDate);
      }
      if (this.endDate) {
        disableAfter = this.dateCompare(nowDate, this.endDate);
      }
      let multiples = this.multipleStatus.data;
      let checked = false;
      let multiplesStatus = -1;
      if (this.range) {
        if (multiples) {
          multiplesStatus = multiples.findIndex((item) => {
            return this.dateEqual(item, nowDate);
          });
        }
        if (multiplesStatus !== -1) {
          checked = true;
        }
      }
      let data = {
        fullDate: nowDate,
        year: full.year,
        date: i,
        multiple: this.range ? checked : false,
        beforeMultiple: this.isLogicBefore(nowDate, this.multipleStatus.before, this.multipleStatus.after),
        afterMultiple: this.isLogicAfter(nowDate, this.multipleStatus.before, this.multipleStatus.after),
        month: full.month,
        disable: !(disableBefore && disableAfter),
        isDay,
        userChecked: false
      };
      if (info) {
        data.extraInfo = info;
      }
      dateArr.push(data);
    }
    return dateArr;
  }
  /**
   * 获取下月天数
   */
  _getNextMonthDays(surplus, full) {
    let dateArr = [];
    for (let i = 1; i < surplus + 1; i++) {
      dateArr.push({
        date: i,
        month: Number(full.month) + 1,
        disable: true
      });
    }
    return dateArr;
  }
  /**
   * 获取当前日期详情
   * @param {Object} date
   */
  getInfo(date) {
    if (!date) {
      date = /* @__PURE__ */ new Date();
    }
    const dateInfo = this.canlender.find((item) => item.fullDate === this.getDate(date).fullDate);
    return dateInfo;
  }
  /**
   * 比较时间大小
   */
  dateCompare(startDate, endDate) {
    startDate = new Date(startDate.replace("-", "/").replace("-", "/"));
    endDate = new Date(endDate.replace("-", "/").replace("-", "/"));
    if (startDate <= endDate) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * 比较时间是否相等
   */
  dateEqual(before, after) {
    before = new Date(before.replace("-", "/").replace("-", "/"));
    after = new Date(after.replace("-", "/").replace("-", "/"));
    if (before.getTime() - after.getTime() === 0) {
      return true;
    } else {
      return false;
    }
  }
  /**
   *  比较真实起始日期
   */
  isLogicBefore(currentDay, before, after) {
    let logicBefore = before;
    if (before && after) {
      logicBefore = this.dateCompare(before, after) ? before : after;
    }
    return this.dateEqual(logicBefore, currentDay);
  }
  isLogicAfter(currentDay, before, after) {
    let logicAfter = after;
    if (before && after) {
      logicAfter = this.dateCompare(before, after) ? after : before;
    }
    return this.dateEqual(logicAfter, currentDay);
  }
  /**
   * 获取日期范围内所有日期
   * @param {Object} begin
   * @param {Object} end
   */
  geDateAll(begin, end) {
    var arr = [];
    var ab = begin.split("-");
    var ae = end.split("-");
    var db = /* @__PURE__ */ new Date();
    db.setFullYear(ab[0], ab[1] - 1, ab[2]);
    var de = /* @__PURE__ */ new Date();
    de.setFullYear(ae[0], ae[1] - 1, ae[2]);
    var unixDb = db.getTime() - 24 * 60 * 60 * 1e3;
    var unixDe = de.getTime() - 24 * 60 * 60 * 1e3;
    for (var k = unixDb; k <= unixDe; ) {
      k = k + 24 * 60 * 60 * 1e3;
      arr.push(this.getDate(new Date(parseInt(k))).fullDate);
    }
    return arr;
  }
  /**
   *  获取多选状态
   */
  setMultiple(fullDate) {
    let {
      before,
      after
    } = this.multipleStatus;
    if (!this.range)
      return;
    if (before && after) {
      if (!this.lastHover) {
        this.lastHover = true;
        return;
      }
      this.multipleStatus.before = fullDate;
      this.multipleStatus.after = "";
      this.multipleStatus.data = [];
      this.multipleStatus.fulldate = "";
      this.lastHover = false;
    } else {
      if (!before) {
        this.multipleStatus.before = fullDate;
        this.lastHover = false;
      } else {
        this.multipleStatus.after = fullDate;
        if (this.dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
          this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
        } else {
          this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
        }
        this.lastHover = true;
      }
    }
    this._getWeek(fullDate);
  }
  /**
   *  鼠标 hover 更新多选状态
   */
  setHoverMultiple(fullDate) {
    let {
      before,
      after
    } = this.multipleStatus;
    if (!this.range)
      return;
    if (this.lastHover)
      return;
    if (!before) {
      this.multipleStatus.before = fullDate;
    } else {
      this.multipleStatus.after = fullDate;
      if (this.dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
        this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
      } else {
        this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
      }
    }
    this._getWeek(fullDate);
  }
  /**
   * 更新默认值多选状态
   */
  setDefaultMultiple(before, after) {
    this.multipleStatus.before = before;
    this.multipleStatus.after = after;
    if (before && after) {
      if (this.dateCompare(before, after)) {
        this.multipleStatus.data = this.geDateAll(before, after);
        this._getWeek(after);
      } else {
        this.multipleStatus.data = this.geDateAll(after, before);
        this._getWeek(before);
      }
    }
  }
  /**
   * 获取每周数据
   * @param {Object} dateData
   */
  _getWeek(dateData) {
    const {
      fullDate,
      year,
      month,
      date,
      day
    } = this.getDate(dateData);
    let firstDay = new Date(year, month - 1, 1).getDay();
    let currentDay = new Date(year, month, 0).getDate();
    let dates = {
      lastMonthDays: this._getLastMonthDays(firstDay, this.getDate(dateData)),
      // 上个月末尾几天
      currentMonthDys: this._currentMonthDys(currentDay, this.getDate(dateData)),
      // 本月天数
      nextMonthDays: [],
      // 下个月开始几天
      weeks: []
    };
    let canlender = [];
    const surplus = 42 - (dates.lastMonthDays.length + dates.currentMonthDys.length);
    dates.nextMonthDays = this._getNextMonthDays(surplus, this.getDate(dateData));
    canlender = canlender.concat(dates.lastMonthDays, dates.currentMonthDys, dates.nextMonthDays);
    let weeks = {};
    for (let i = 0; i < canlender.length; i++) {
      if (i % 7 === 0) {
        weeks[parseInt(i / 7)] = new Array(7);
      }
      weeks[parseInt(i / 7)][i % 7] = canlender[i];
    }
    this.canlender = canlender;
    this.weeks = weeks;
  }
  //静态方法
  // static init(date) {
  // 	if (!this.instance) {
  // 		this.instance = new Calendar(date);
  // 	}
  // 	return this.instance;
  // }
}
const _style_0$8 = { "uni-calendar-item__weeks-box": { "": { "flex": 1, "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "marginTop": 1, "marginRight": 0, "marginBottom": 1, "marginLeft": 0, "position": "relative" } }, "uni-calendar-item__weeks-box-text": { "": { "fontSize": 14, "fontWeight": "bold", "color": "#001833" } }, "uni-calendar-item__weeks-lunar-text": { "": { "fontSize": 12, "color": "#333333" } }, "uni-calendar-item__weeks-box-item": { "": { "position": "relative", "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "width": 40, "height": 40 } }, "uni-calendar-item__weeks-box-circle": { "": { "position": "absolute", "top": 5, "right": 5, "width": 8, "height": 8, "borderRadius": 8, "backgroundColor": "#dd524d" } }, "uni-calendar-item--disable": { ".uni-calendar-item__weeks-box ": { "cursor": "default" } }, "uni-calendar-item__weeks-box-text-disable": { ".uni-calendar-item--disable ": { "color": "#D1D1D1" } }, "uni-calendar-item--isDay": { "": { "position": "absolute", "top": 10, "right": 17, "backgroundColor": "#dd524d", "width": 6, "height": 6, "borderRadius": 50 } }, "uni-calendar-item--extra": { "": { "color": "#dd524d", "opacity": 0.8 } }, "uni-calendar-item--checked": { ".uni-calendar-item__weeks-box ": { "backgroundColor": "#007aff", "borderRadius": 50, "boxSizing": "border-box", "borderWidth": 3, "borderStyle": "solid", "borderColor": "#ffffff" } }, "uni-calendar-item--checked-text": { ".uni-calendar-item--checked ": { "color": "#ffffff" }, ".uni-calendar-item--before-checked ": { "color": "#ffffff" }, ".uni-calendar-item--after-checked ": { "color": "#ffffff" } }, "uni-calendar-item--checked-range-text": { ".uni-calendar-item--multiple ": { "color": "#333333" } }, "uni-calendar-item--multiple": { "": { "backgroundColor": "#F6F7FC" } }, "uni-calendar-item--before-checked": { ".uni-calendar-item--multiple ": { "backgroundColor": "#007aff", "borderRadius": 50, "boxSizing": "border-box", "borderWidth": 3, "borderStyle": "solid", "borderColor": "#F6F7FC" } }, "uni-calendar-item--after-checked": { ".uni-calendar-item--multiple ": { "backgroundColor": "#007aff", "borderRadius": 50, "boxSizing": "border-box", "borderWidth": 3, "borderStyle": "solid", "borderColor": "#F6F7FC" } }, "uni-calendar-item--before-checked-x": { "": { "borderTopLeftRadius": 50, "borderBottomLeftRadius": 50, "boxSizing": "border-box", "backgroundColor": "#F6F7FC" } }, "uni-calendar-item--after-checked-x": { "": { "borderTopRightRadius": 50, "borderBottomRightRadius": 50, "backgroundColor": "#F6F7FC" } } };
const _sfc_main$8 = {
  props: {
    weeks: {
      type: Object,
      default() {
        return {};
      }
    },
    calendar: {
      type: Object,
      default: () => {
        return {};
      }
    },
    selected: {
      type: Array,
      default: () => {
        return [];
      }
    },
    lunar: {
      type: Boolean,
      default: false
    },
    checkHover: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    choiceDate(weeks) {
      this.$emit("change", weeks);
    },
    handleMousemove(weeks) {
      this.$emit("handleMouse", weeks);
    }
  }
};
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(["uni-calendar-item__weeks-box", {
      "uni-calendar-item--disable": $props.weeks.disable,
      "uni-calendar-item--before-checked-x": $props.weeks.beforeMultiple,
      "uni-calendar-item--multiple": $props.weeks.multiple,
      "uni-calendar-item--after-checked-x": $props.weeks.afterMultiple
    }]),
    onClick: _cache[0] || (_cache[0] = ($event) => $options.choiceDate($props.weeks)),
    onMouseenter: _cache[1] || (_cache[1] = ($event) => $options.handleMousemove($props.weeks)),
    renderWhole: true
  }, [
    createElementVNode("view", {
      class: normalizeClass(["uni-calendar-item__weeks-box-item", {
        "uni-calendar-item--checked": $props.calendar.fullDate === $props.weeks.fullDate && ($props.calendar.userChecked || !$props.checkHover),
        "uni-calendar-item--checked-range-text": $props.checkHover,
        "uni-calendar-item--before-checked": $props.weeks.beforeMultiple,
        "uni-calendar-item--multiple": $props.weeks.multiple,
        "uni-calendar-item--after-checked": $props.weeks.afterMultiple,
        "uni-calendar-item--disable": $props.weeks.disable
      }])
    }, [
      $props.selected && $props.weeks.extraInfo ? (openBlock(), createElementBlock("u-text", {
        key: 0,
        class: "uni-calendar-item__weeks-box-circle"
      })) : createCommentVNode("", true),
      createElementVNode("u-text", { class: "uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text" }, toDisplayString($props.weeks.date), 1)
    ], 2),
    createElementVNode("view", {
      class: normalizeClass({ "uni-calendar-item--isDay": $props.weeks.isDay })
    }, null, 2)
  ], 34);
}
const calendarItem = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["styles", [_style_0$8]]]);
const en = {
  "uni-datetime-picker.selectDate": "select date",
  "uni-datetime-picker.selectTime": "select time",
  "uni-datetime-picker.selectDateTime": "select datetime",
  "uni-datetime-picker.startDate": "start date",
  "uni-datetime-picker.endDate": "end date",
  "uni-datetime-picker.startTime": "start time",
  "uni-datetime-picker.endTime": "end time",
  "uni-datetime-picker.ok": "ok",
  "uni-datetime-picker.clear": "clear",
  "uni-datetime-picker.cancel": "cancel",
  "uni-datetime-picker.year": "-",
  "uni-datetime-picker.month": "",
  "uni-calender.MON": "MON",
  "uni-calender.TUE": "TUE",
  "uni-calender.WED": "WED",
  "uni-calender.THU": "THU",
  "uni-calender.FRI": "FRI",
  "uni-calender.SAT": "SAT",
  "uni-calender.SUN": "SUN",
  "uni-calender.confirm": "confirm"
};
const zhHans = {
  "uni-datetime-picker.selectDate": "选择日期",
  "uni-datetime-picker.selectTime": "选择时间",
  "uni-datetime-picker.selectDateTime": "选择日期时间",
  "uni-datetime-picker.startDate": "开始日期",
  "uni-datetime-picker.endDate": "结束日期",
  "uni-datetime-picker.startTime": "开始时间",
  "uni-datetime-picker.endTime": "结束时间",
  "uni-datetime-picker.ok": "确定",
  "uni-datetime-picker.clear": "清除",
  "uni-datetime-picker.cancel": "取消",
  "uni-datetime-picker.year": "年",
  "uni-datetime-picker.month": "月",
  "uni-calender.SUN": "日",
  "uni-calender.MON": "一",
  "uni-calender.TUE": "二",
  "uni-calender.WED": "三",
  "uni-calender.THU": "四",
  "uni-calender.FRI": "五",
  "uni-calender.SAT": "六",
  "uni-calender.confirm": "确认"
};
const zhHant = {
  "uni-datetime-picker.selectDate": "選擇日期",
  "uni-datetime-picker.selectTime": "選擇時間",
  "uni-datetime-picker.selectDateTime": "選擇日期時間",
  "uni-datetime-picker.startDate": "開始日期",
  "uni-datetime-picker.endDate": "結束日期",
  "uni-datetime-picker.startTime": "開始时间",
  "uni-datetime-picker.endTime": "結束时间",
  "uni-datetime-picker.ok": "確定",
  "uni-datetime-picker.clear": "清除",
  "uni-datetime-picker.cancel": "取消",
  "uni-datetime-picker.year": "年",
  "uni-datetime-picker.month": "月",
  "uni-calender.SUN": "日",
  "uni-calender.MON": "一",
  "uni-calender.TUE": "二",
  "uni-calender.WED": "三",
  "uni-calender.THU": "四",
  "uni-calender.FRI": "五",
  "uni-calender.SAT": "六",
  "uni-calender.confirm": "確認"
};
const messages = {
  en,
  "zh-Hans": zhHans,
  "zh-Hant": zhHant
};
const _style_0$7 = { "uni-datetime-picker-view": { "": { "height": 130, "width": 270 } }, "uni-datetime-picker-item": { "": { "height": 50, "lineHeight": 50, "textAlign": "center", "fontSize": 14 } }, "uni-datetime-picker-btn": { "": { "marginTop": 60, "flexDirection": "row", "justifyContent": "space-between" } }, "uni-datetime-picker-btn-text": { "": { "fontSize": 14, "color": "#007aff" } }, "uni-datetime-picker-btn-group": { "": { "flexDirection": "row" } }, "uni-datetime-picker-cancel": { "": { "marginRight": 30 } }, "uni-datetime-picker-mask": { "": { "position": "fixed", "bottom": 0, "top": 0, "left": 0, "right": 0, "backgroundColor": "rgba(0,0,0,0.4)", "transitionDuration": 300, "zIndex": 998 } }, "uni-datetime-picker-popup": { "": { "borderRadius": 8, "paddingTop": 30, "paddingRight": 30, "paddingBottom": 30, "paddingLeft": 30, "width": 330, "height": 500, "backgroundColor": "#ffffff", "position": "fixed", "top": 50, "left": 50, "transform": "translate(-50%, -50%)", "transitionDuration": 300, "zIndex": 999 } }, "fix-nvue-height": { "": { "height": 330 } }, "uni-datetime-picker-time": { "": { "color": "#808080" } }, "uni-datetime-picker-column": { "": { "height": 50 } }, "uni-datetime-picker-timebox": { "": { "borderWidth": 1, "borderStyle": "solid", "borderColor": "#E5E5E5", "borderRadius": 5, "paddingTop": 7, "paddingRight": 10, "paddingBottom": 7, "paddingLeft": 10 } }, "uni-datetime-picker-disabled": { "": { "opacity": 0.4 } }, "uni-datetime-picker-text": { "": { "fontSize": 14, "lineHeight": 50 } }, "uni-datetime-picker-sign": { "": { "position": "absolute", "top": 53, "color": "#999999", "fontSize": 16 } }, "sign-left": { "": { "left": 86 } }, "sign-right": { "": { "right": 86 } }, "sign-center": { "": { "left": 135 } }, "uni-datetime-picker__container-box": { "": { "position": "relative", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginTop": 40 } }, "time-hide-second": { "": { "width": 180 } }, "@TRANSITION": { "uni-datetime-picker-mask": { "duration": 300 }, "uni-datetime-picker-popup": { "duration": 300 } } };
const { t: t$2 } = initVueI18n(messages);
const _sfc_main$7 = {
  name: "UniDatetimePicker",
  components: {},
  data() {
    return {
      indicatorStyle: `height: 50px;`,
      visible: false,
      fixNvueBug: {},
      dateShow: true,
      timeShow: true,
      title: "日期和时间",
      // 输入框当前时间
      time: "",
      // 当前的年月日时分秒
      year: 1920,
      month: 0,
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
      // 起始时间
      startYear: 1920,
      startMonth: 1,
      startDay: 1,
      startHour: 0,
      startMinute: 0,
      startSecond: 0,
      // 结束时间
      endYear: 2120,
      endMonth: 12,
      endDay: 31,
      endHour: 23,
      endMinute: 59,
      endSecond: 59
    };
  },
  props: {
    type: {
      type: String,
      default: "datetime"
    },
    value: {
      type: [String, Number],
      default: ""
    },
    modelValue: {
      type: [String, Number],
      default: ""
    },
    start: {
      type: [Number, String],
      default: ""
    },
    end: {
      type: [Number, String],
      default: ""
    },
    returnType: {
      type: String,
      default: "string"
    },
    disabled: {
      type: [Boolean, String],
      default: false
    },
    border: {
      type: [Boolean, String],
      default: true
    },
    hideSecond: {
      type: [Boolean, String],
      default: false
    }
  },
  watch: {
    value: {
      handler(newVal, oldVal) {
        if (newVal) {
          this.parseValue(this.fixIosDateFormat(newVal));
          this.initTime(false);
        } else {
          this.time = "";
          this.parseValue(Date.now());
        }
      },
      immediate: true
    },
    type: {
      handler(newValue) {
        if (newValue === "date") {
          this.dateShow = true;
          this.timeShow = false;
          this.title = "日期";
        } else if (newValue === "time") {
          this.dateShow = false;
          this.timeShow = true;
          this.title = "时间";
        } else {
          this.dateShow = true;
          this.timeShow = true;
          this.title = "日期和时间";
        }
      },
      immediate: true
    },
    start: {
      handler(newVal) {
        this.parseDatetimeRange(this.fixIosDateFormat(newVal), "start");
      },
      immediate: true
    },
    end: {
      handler(newVal) {
        this.parseDatetimeRange(this.fixIosDateFormat(newVal), "end");
      },
      immediate: true
    },
    // 月、日、时、分、秒可选范围变化后，检查当前值是否在范围内，不在则当前值重置为可选范围第一项
    months(newVal) {
      this.checkValue("month", this.month, newVal);
    },
    days(newVal) {
      this.checkValue("day", this.day, newVal);
    },
    hours(newVal) {
      this.checkValue("hour", this.hour, newVal);
    },
    minutes(newVal) {
      this.checkValue("minute", this.minute, newVal);
    },
    seconds(newVal) {
      this.checkValue("second", this.second, newVal);
    }
  },
  computed: {
    // 当前年、月、日、时、分、秒选择范围
    years() {
      return this.getCurrentRange("year");
    },
    months() {
      return this.getCurrentRange("month");
    },
    days() {
      return this.getCurrentRange("day");
    },
    hours() {
      return this.getCurrentRange("hour");
    },
    minutes() {
      return this.getCurrentRange("minute");
    },
    seconds() {
      return this.getCurrentRange("second");
    },
    // picker 当前值数组
    ymd() {
      return [this.year - this.minYear, this.month - this.minMonth, this.day - this.minDay];
    },
    hms() {
      return [this.hour - this.minHour, this.minute - this.minMinute, this.second - this.minSecond];
    },
    // 当前 date 是 start
    currentDateIsStart() {
      return this.year === this.startYear && this.month === this.startMonth && this.day === this.startDay;
    },
    // 当前 date 是 end
    currentDateIsEnd() {
      return this.year === this.endYear && this.month === this.endMonth && this.day === this.endDay;
    },
    // 当前年、月、日、时、分、秒的最小值和最大值
    minYear() {
      return this.startYear;
    },
    maxYear() {
      return this.endYear;
    },
    minMonth() {
      if (this.year === this.startYear) {
        return this.startMonth;
      } else {
        return 1;
      }
    },
    maxMonth() {
      if (this.year === this.endYear) {
        return this.endMonth;
      } else {
        return 12;
      }
    },
    minDay() {
      if (this.year === this.startYear && this.month === this.startMonth) {
        return this.startDay;
      } else {
        return 1;
      }
    },
    maxDay() {
      if (this.year === this.endYear && this.month === this.endMonth) {
        return this.endDay;
      } else {
        return this.daysInMonth(this.year, this.month);
      }
    },
    minHour() {
      if (this.type === "datetime") {
        if (this.currentDateIsStart) {
          return this.startHour;
        } else {
          return 0;
        }
      }
      if (this.type === "time") {
        return this.startHour;
      }
    },
    maxHour() {
      if (this.type === "datetime") {
        if (this.currentDateIsEnd) {
          return this.endHour;
        } else {
          return 23;
        }
      }
      if (this.type === "time") {
        return this.endHour;
      }
    },
    minMinute() {
      if (this.type === "datetime") {
        if (this.currentDateIsStart && this.hour === this.startHour) {
          return this.startMinute;
        } else {
          return 0;
        }
      }
      if (this.type === "time") {
        if (this.hour === this.startHour) {
          return this.startMinute;
        } else {
          return 0;
        }
      }
    },
    maxMinute() {
      if (this.type === "datetime") {
        if (this.currentDateIsEnd && this.hour === this.endHour) {
          return this.endMinute;
        } else {
          return 59;
        }
      }
      if (this.type === "time") {
        if (this.hour === this.endHour) {
          return this.endMinute;
        } else {
          return 59;
        }
      }
    },
    minSecond() {
      if (this.type === "datetime") {
        if (this.currentDateIsStart && this.hour === this.startHour && this.minute === this.startMinute) {
          return this.startSecond;
        } else {
          return 0;
        }
      }
      if (this.type === "time") {
        if (this.hour === this.startHour && this.minute === this.startMinute) {
          return this.startSecond;
        } else {
          return 0;
        }
      }
    },
    maxSecond() {
      if (this.type === "datetime") {
        if (this.currentDateIsEnd && this.hour === this.endHour && this.minute === this.endMinute) {
          return this.endSecond;
        } else {
          return 59;
        }
      }
      if (this.type === "time") {
        if (this.hour === this.endHour && this.minute === this.endMinute) {
          return this.endSecond;
        } else {
          return 59;
        }
      }
    },
    /**
     * for i18n
     */
    selectTimeText() {
      return t$2("uni-datetime-picker.selectTime");
    },
    okText() {
      return t$2("uni-datetime-picker.ok");
    },
    clearText() {
      return t$2("uni-datetime-picker.clear");
    },
    cancelText() {
      return t$2("uni-datetime-picker.cancel");
    }
  },
  mounted() {
    const res = uni.getSystemInfoSync();
    this.fixNvueBug = {
      top: res.windowHeight / 2,
      left: res.windowWidth / 2
    };
  },
  methods: {
    /**
     * @param {Object} item
     * 小于 10 在前面加个 0
     */
    lessThanTen(item) {
      return item < 10 ? "0" + item : item;
    },
    /**
     * 解析时分秒字符串，例如：00:00:00
     * @param {String} timeString
     */
    parseTimeType(timeString) {
      if (timeString) {
        let timeArr = timeString.split(":");
        this.hour = Number(timeArr[0]);
        this.minute = Number(timeArr[1]);
        this.second = Number(timeArr[2]);
      }
    },
    /**
     * 解析选择器初始值，类型可以是字符串、时间戳，例如：2000-10-02、'08:30:00'、 1610695109000
     * @param {String | Number} datetime
     */
    initPickerValue(datetime) {
      let defaultValue = null;
      if (datetime) {
        defaultValue = this.compareValueWithStartAndEnd(datetime, this.start, this.end);
      } else {
        defaultValue = Date.now();
        defaultValue = this.compareValueWithStartAndEnd(defaultValue, this.start, this.end);
      }
      this.parseValue(defaultValue);
    },
    /**
     * 初始值规则：
     * - 用户设置初始值 value
     * 	- 设置了起始时间 start、终止时间 end，并 start < value < end，初始值为 value， 否则初始值为 start
     * 	- 只设置了起始时间 start，并 start < value，初始值为 value，否则初始值为 start
     * 	- 只设置了终止时间 end，并 value < end，初始值为 value，否则初始值为 end
     * 	- 无起始终止时间，则初始值为 value
     * - 无初始值 value，则初始值为当前本地时间 Date.now()
     * @param {Object} value
     * @param {Object} dateBase
     */
    compareValueWithStartAndEnd(value, start, end) {
      let winner = null;
      value = this.superTimeStamp(value);
      start = this.superTimeStamp(start);
      end = this.superTimeStamp(end);
      if (start && end) {
        if (value < start) {
          winner = new Date(start);
        } else if (value > end) {
          winner = new Date(end);
        } else {
          winner = new Date(value);
        }
      } else if (start && !end) {
        winner = start <= value ? new Date(value) : new Date(start);
      } else if (!start && end) {
        winner = value <= end ? new Date(value) : new Date(end);
      } else {
        winner = new Date(value);
      }
      return winner;
    },
    /**
     * 转换为可比较的时间戳，接受日期、时分秒、时间戳
     * @param {Object} value
     */
    superTimeStamp(value) {
      let dateBase = "";
      if (this.type === "time" && value && typeof value === "string") {
        const now = /* @__PURE__ */ new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate();
        dateBase = year + "/" + month + "/" + day + " ";
      }
      if (Number(value) && !isNaN(value)) {
        value = parseInt(value);
        dateBase = 0;
      }
      return this.createTimeStamp(dateBase + value);
    },
    /**
     * 解析默认值 value，字符串、时间戳
     * @param {Object} defaultTime
     */
    parseValue(value) {
      if (!value) {
        return;
      }
      if (this.type === "time" && typeof value === "string") {
        this.parseTimeType(value);
      } else {
        let defaultDate = null;
        defaultDate = new Date(value);
        if (this.type !== "time") {
          this.year = defaultDate.getFullYear();
          this.month = defaultDate.getMonth() + 1;
          this.day = defaultDate.getDate();
        }
        if (this.type !== "date") {
          this.hour = defaultDate.getHours();
          this.minute = defaultDate.getMinutes();
          this.second = defaultDate.getSeconds();
        }
      }
      if (this.hideSecond) {
        this.second = 0;
      }
    },
    /**
     * 解析可选择时间范围 start、end，年月日字符串、时间戳
     * @param {Object} defaultTime
     */
    parseDatetimeRange(point, pointType) {
      if (!point) {
        if (pointType === "start") {
          this.startYear = 1920;
          this.startMonth = 1;
          this.startDay = 1;
          this.startHour = 0;
          this.startMinute = 0;
          this.startSecond = 0;
        }
        if (pointType === "end") {
          this.endYear = 2120;
          this.endMonth = 12;
          this.endDay = 31;
          this.endHour = 23;
          this.endMinute = 59;
          this.endSecond = 59;
        }
        return;
      }
      if (this.type === "time") {
        const pointArr = point.split(":");
        this[pointType + "Hour"] = Number(pointArr[0]);
        this[pointType + "Minute"] = Number(pointArr[1]);
        this[pointType + "Second"] = Number(pointArr[2]);
      } else {
        if (!point) {
          pointType === "start" ? this.startYear = this.year - 60 : this.endYear = this.year + 60;
          return;
        }
        if (Number(point) && !isNaN(point)) {
          point = parseInt(point);
        }
        const hasTime = /[0-9]:[0-9]/;
        if (this.type === "datetime" && pointType === "end" && typeof point === "string" && !hasTime.test(
          point
        )) {
          point = point + " 23:59:59";
        }
        const pointDate = new Date(point);
        this[pointType + "Year"] = pointDate.getFullYear();
        this[pointType + "Month"] = pointDate.getMonth() + 1;
        this[pointType + "Day"] = pointDate.getDate();
        if (this.type === "datetime") {
          this[pointType + "Hour"] = pointDate.getHours();
          this[pointType + "Minute"] = pointDate.getMinutes();
          this[pointType + "Second"] = pointDate.getSeconds();
        }
      }
    },
    // 获取 年、月、日、时、分、秒 当前可选范围
    getCurrentRange(value) {
      const range = [];
      for (let i = this["min" + this.capitalize(value)]; i <= this["max" + this.capitalize(value)]; i++) {
        range.push(i);
      }
      return range;
    },
    // 字符串首字母大写
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    // 检查当前值是否在范围内，不在则当前值重置为可选范围第一项
    checkValue(name, value, values) {
      if (values.indexOf(value) === -1) {
        this[name] = values[0];
      }
    },
    // 每个月的实际天数
    daysInMonth(year, month) {
      return new Date(year, month, 0).getDate();
    },
    //兼容 iOS、safari 日期格式
    fixIosDateFormat(value) {
      if (typeof value === "string") {
        value = value.replace(/-/g, "/");
      }
      return value;
    },
    /**
     * 生成时间戳
     * @param {Object} time
     */
    createTimeStamp(time) {
      if (!time)
        return;
      if (typeof time === "number") {
        return time;
      } else {
        time = time.replace(/-/g, "/");
        if (this.type === "date") {
          time = time + " 00:00:00";
        }
        return Date.parse(time);
      }
    },
    /**
     * 生成日期或时间的字符串
     */
    createDomSting() {
      const yymmdd = this.year + "-" + this.lessThanTen(this.month) + "-" + this.lessThanTen(this.day);
      let hhmmss = this.lessThanTen(this.hour) + ":" + this.lessThanTen(this.minute);
      if (!this.hideSecond) {
        hhmmss = hhmmss + ":" + this.lessThanTen(this.second);
      }
      if (this.type === "date") {
        return yymmdd;
      } else if (this.type === "time") {
        return hhmmss;
      } else {
        return yymmdd + " " + hhmmss;
      }
    },
    /**
     * 初始化返回值，并抛出 change 事件
     */
    initTime(emit = true) {
      this.time = this.createDomSting();
      if (!emit)
        return;
      if (this.returnType === "timestamp" && this.type !== "time") {
        this.$emit("change", this.createTimeStamp(this.time));
        this.$emit("input", this.createTimeStamp(this.time));
        this.$emit("update:modelValue", this.createTimeStamp(this.time));
      } else {
        this.$emit("change", this.time);
        this.$emit("input", this.time);
        this.$emit("update:modelValue", this.time);
      }
    },
    /**
     * 用户选择日期或时间更新 data
     * @param {Object} e
     */
    bindDateChange(e) {
      const val = e.detail.value;
      this.year = this.years[val[0]];
      this.month = this.months[val[1]];
      this.day = this.days[val[2]];
    },
    bindTimeChange(e) {
      const val = e.detail.value;
      this.hour = this.hours[val[0]];
      this.minute = this.minutes[val[1]];
      this.second = this.seconds[val[2]];
    },
    /**
     * 初始化弹出层
     */
    initTimePicker() {
      if (this.disabled)
        return;
      const value = this.fixIosDateFormat(this.value);
      this.initPickerValue(value);
      this.visible = !this.visible;
    },
    /**
     * 触发或关闭弹框
     */
    tiggerTimePicker(e) {
      this.visible = !this.visible;
    },
    /**
     * 用户点击“清空”按钮，清空当前值
     */
    clearTime() {
      this.time = "";
      this.$emit("change", this.time);
      this.$emit("input", this.time);
      this.$emit("update:modelValue", this.time);
      this.tiggerTimePicker();
    },
    /**
     * 用户点击“确定”按钮
     */
    setTime() {
      this.initTime();
      this.tiggerTimePicker();
    }
  }
};
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_picker_view_column = resolveComponent("picker-view-column");
  const _component_picker_view = resolveComponent("picker-view");
  return openBlock(), createElementBlock("view", {
    class: "uni-datetime-picker",
    renderWhole: true
  }, [
    createElementVNode("view", {
      onClick: _cache[0] || (_cache[0] = (...args) => $options.initTimePicker && $options.initTimePicker(...args))
    }, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createElementVNode("view", {
          class: normalizeClass(["uni-datetime-picker-timebox-pointer", { "uni-datetime-picker-disabled": $props.disabled, "uni-datetime-picker-timebox": $props.border }])
        }, [
          createElementVNode("u-text", { class: "uni-datetime-picker-text" }, toDisplayString($data.time), 1),
          !$data.time ? (openBlock(), createElementBlock("view", {
            key: 0,
            class: "uni-datetime-picker-time"
          }, [
            createElementVNode("u-text", { class: "uni-datetime-picker-text" }, toDisplayString($options.selectTimeText), 1)
          ])) : createCommentVNode("", true)
        ], 2)
      ])
    ]),
    $data.visible ? (openBlock(), createElementBlock("view", {
      key: 0,
      id: "mask",
      class: "uni-datetime-picker-mask",
      onClick: _cache[1] || (_cache[1] = (...args) => $options.tiggerTimePicker && $options.tiggerTimePicker(...args))
    })) : createCommentVNode("", true),
    $data.visible ? (openBlock(), createElementBlock("view", {
      key: 1,
      class: normalizeClass(["uni-datetime-picker-popup", [$data.dateShow && $data.timeShow ? "" : "fix-nvue-height"]]),
      style: normalizeStyle($data.fixNvueBug)
    }, [
      createElementVNode("view", { class: "uni-title" }, [
        createElementVNode("u-text", { class: "uni-datetime-picker-text" }, toDisplayString($options.selectTimeText), 1)
      ]),
      $data.dateShow ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "uni-datetime-picker__container-box"
      }, [
        createVNode(_component_picker_view, {
          class: "uni-datetime-picker-view",
          "indicator-style": $data.indicatorStyle,
          value: $options.ymd,
          onChange: $options.bindDateChange
        }, {
          default: withCtx(() => [
            createVNode(_component_picker_view_column, null, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList($options.years, (item, index) => {
                  return openBlock(), createElementBlock("view", {
                    class: "uni-datetime-picker-item",
                    key: index
                  }, [
                    createElementVNode("u-text", { class: "uni-datetime-picker-item" }, toDisplayString($options.lessThanTen(item)), 1)
                  ]);
                }), 128))
              ]),
              _: 1
            }),
            createVNode(_component_picker_view_column, null, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList($options.months, (item, index) => {
                  return openBlock(), createElementBlock("view", {
                    class: "uni-datetime-picker-item",
                    key: index
                  }, [
                    createElementVNode("u-text", { class: "uni-datetime-picker-item" }, toDisplayString($options.lessThanTen(item)), 1)
                  ]);
                }), 128))
              ]),
              _: 1
            }),
            createVNode(_component_picker_view_column, null, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList($options.days, (item, index) => {
                  return openBlock(), createElementBlock("view", {
                    class: "uni-datetime-picker-item",
                    key: index
                  }, [
                    createElementVNode("u-text", { class: "uni-datetime-picker-item" }, toDisplayString($options.lessThanTen(item)), 1)
                  ]);
                }), 128))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["indicator-style", "value", "onChange"]),
        createElementVNode("u-text", { class: "uni-datetime-picker-sign sign-left" }, "-"),
        createElementVNode("u-text", { class: "uni-datetime-picker-sign sign-right" }, "-")
      ])) : createCommentVNode("", true),
      $data.timeShow ? (openBlock(), createElementBlock("view", {
        key: 1,
        class: "uni-datetime-picker__container-box"
      }, [
        createVNode(_component_picker_view, {
          class: normalizeClass(["uni-datetime-picker-view", [$props.hideSecond ? "time-hide-second" : ""]]),
          "indicator-style": $data.indicatorStyle,
          value: $options.hms,
          onChange: $options.bindTimeChange
        }, {
          default: withCtx(() => [
            createVNode(_component_picker_view_column, null, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList($options.hours, (item, index) => {
                  return openBlock(), createElementBlock("view", {
                    class: "uni-datetime-picker-item",
                    key: index
                  }, [
                    createElementVNode("u-text", { class: "uni-datetime-picker-item" }, toDisplayString($options.lessThanTen(item)), 1)
                  ]);
                }), 128))
              ]),
              _: 1
            }),
            createVNode(_component_picker_view_column, null, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList($options.minutes, (item, index) => {
                  return openBlock(), createElementBlock("view", {
                    class: "uni-datetime-picker-item",
                    key: index
                  }, [
                    createElementVNode("u-text", { class: "uni-datetime-picker-item" }, toDisplayString($options.lessThanTen(item)), 1)
                  ]);
                }), 128))
              ]),
              _: 1
            }),
            !$props.hideSecond ? (openBlock(), createBlock(_component_picker_view_column, { key: 0 }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList($options.seconds, (item, index) => {
                  return openBlock(), createElementBlock("view", {
                    class: "uni-datetime-picker-item",
                    key: index
                  }, [
                    createElementVNode("u-text", { class: "uni-datetime-picker-item" }, toDisplayString($options.lessThanTen(item)), 1)
                  ]);
                }), 128))
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["class", "indicator-style", "value", "onChange"]),
        createElementVNode("u-text", {
          class: normalizeClass(["uni-datetime-picker-sign", [$props.hideSecond ? "sign-center" : "sign-left"]])
        }, ":", 2),
        !$props.hideSecond ? (openBlock(), createElementBlock("u-text", {
          key: 0,
          class: "uni-datetime-picker-sign sign-right"
        }, ":")) : createCommentVNode("", true)
      ])) : createCommentVNode("", true),
      createElementVNode("view", { class: "uni-datetime-picker-btn" }, [
        createElementVNode("view", {
          onClick: _cache[2] || (_cache[2] = (...args) => $options.clearTime && $options.clearTime(...args))
        }, [
          createElementVNode("u-text", { class: "uni-datetime-picker-btn-text" }, toDisplayString($options.clearText), 1)
        ]),
        createElementVNode("view", { class: "uni-datetime-picker-btn-group" }, [
          createElementVNode("view", {
            class: "uni-datetime-picker-cancel",
            onClick: _cache[3] || (_cache[3] = (...args) => $options.tiggerTimePicker && $options.tiggerTimePicker(...args))
          }, [
            createElementVNode("u-text", { class: "uni-datetime-picker-btn-text" }, toDisplayString($options.cancelText), 1)
          ]),
          createElementVNode("view", {
            onClick: _cache[4] || (_cache[4] = (...args) => $options.setTime && $options.setTime(...args))
          }, [
            createElementVNode("u-text", { class: "uni-datetime-picker-btn-text" }, toDisplayString($options.okText), 1)
          ])
        ])
      ])
    ], 6)) : createCommentVNode("", true)
  ]);
}
const timePicker = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["styles", [_style_0$7]]]);
const _style_0$6 = { "uni-calendar": { "": { "flexDirection": "column" } }, "uni-calendar__mask": { "": { "position": "fixed", "bottom": 0, "top": 0, "left": 0, "right": 0, "backgroundColor": "rgba(0,0,0,0.4)", "transitionProperty": "opacity", "transitionDuration": 300, "opacity": 0 } }, "uni-calendar--mask-show": { "": { "opacity": 1 } }, "uni-calendar--fixed": { "": { "position": "fixed", "left": 0, "right": 0, "transitionProperty": "transform", "transitionDuration": 300, "transform": "translateY(460px)" } }, "uni-calendar--ani-show": { "": { "transform": "translateY(0)" } }, "uni-calendar__content": { "": { "backgroundColor": "#ffffff" } }, "uni-calendar__content-mobile": { "": { "borderTopLeftRadius": 10, "borderTopRightRadius": 10, "boxShadow": "0px 0px 5px 3px rgba(0, 0, 0, 0.1)" } }, "uni-calendar__header": { "": { "position": "relative", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "height": 50 } }, "uni-calendar__header-mobile": { "": { "paddingTop": 10, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10 } }, "uni-calendar--fixed-top": { "": { "flexDirection": "row", "justifyContent": "space-between", "borderTopColor": "rgba(0,0,0,0.4)", "borderTopStyle": "solid", "borderTopWidth": 1 } }, "uni-calendar--fixed-width": { "": { "width": 50 } }, "uni-calendar__backtoday": { "": { "position": "absolute", "right": 0, "top": "25rpx", "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 10, "height": 25, "lineHeight": 25, "fontSize": 12, "borderTopLeftRadius": 25, "borderBottomLeftRadius": 25, "color": "#ffffff", "backgroundColor": "#f1f1f1" } }, "uni-calendar__header-text": { "": { "textAlign": "center", "width": 100, "fontSize": 15, "color": "#666666" } }, "uni-calendar__button-text": { "": { "textAlign": "center", "width": 100, "fontSize": 14, "color": "#007aff" } }, "uni-calendar__header-btn-box": { "": { "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "width": 50, "height": 50 } }, "uni-calendar__header-btn": { "": { "width": 9, "height": 9, "borderLeftColor": "#808080", "borderLeftStyle": "solid", "borderLeftWidth": 1, "borderTopColor": "#555555", "borderTopStyle": "solid", "borderTopWidth": 1 } }, "uni-calendar--left": { "": { "transform": "rotate(-45deg)" } }, "uni-calendar--right": { "": { "transform": "rotate(135deg)" } }, "uni-calendar__weeks": { "": { "position": "relative", "flexDirection": "row" } }, "uni-calendar__weeks-item": { "": { "flex": 1 } }, "uni-calendar__weeks-day": { "": { "flex": 1, "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "height": 40, "borderBottomColor": "#F5F5F5", "borderBottomStyle": "solid", "borderBottomWidth": 1 } }, "uni-calendar__weeks-day-text": { "": { "fontSize": 12, "color": "#B2B2B2" } }, "uni-calendar__box": { "": { "position": "relative", "paddingBottom": 7 } }, "uni-calendar__box-bg": { "": { "justifyContent": "center", "alignItems": "center", "position": "absolute", "top": 0, "left": 0, "right": 0, "bottom": 0 } }, "uni-calendar__box-bg-text": { "": { "fontSize": 200, "fontWeight": "bold", "color": "#999999", "opacity": 0.1, "textAlign": "center" } }, "uni-date-changed": { "": { "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10, "textAlign": "center", "color": "#333333", "borderTopColor": "#DCDCDC", "borderTopStyle": "solid", "borderTopWidth": 1, "flex": 1 } }, "uni-date-btn--ok": { "": { "paddingTop": 20, "paddingRight": 15, "paddingBottom": 20, "paddingLeft": 15 } }, "uni-date-changed--time-start": { "": { "alignItems": "center" } }, "uni-date-changed--time-end": { "": { "alignItems": "center" } }, "uni-date-changed--time-date": { "": { "color": "#999999", "lineHeight": 50, "marginRight": 5 } }, "time-picker-style": { "": { "justifyContent": "center", "alignItems": "center" } }, "mr-10": { "": { "marginRight": 10 } }, "dialog-close": { "": { "position": "absolute", "top": 0, "right": 0, "bottom": 0, "flexDirection": "row", "alignItems": "center", "paddingTop": 0, "paddingRight": 25, "paddingBottom": 0, "paddingLeft": 25, "marginTop": 10 } }, "dialog-close-plus": { "": { "width": 16, "height": 2, "backgroundColor": "#737987", "borderRadius": 2, "transform": "rotate(45deg)" } }, "dialog-close-rotate": { "": { "position": "absolute", "transform": "rotate(-45deg)" } }, "uni-datetime-picker--btn": { "": { "borderRadius": 100, "height": 40, "lineHeight": 40, "backgroundColor": "#007aff", "color": "#ffffff", "fontSize": 16, "letterSpacing": "2px" } }, "@TRANSITION": { "uni-calendar__mask": { "property": "opacity", "duration": 300 }, "uni-calendar--fixed": { "property": "transform", "duration": 300 } } };
const {
  t: t$1
} = initVueI18n(messages);
const _sfc_main$6 = {
  components: {
    calendarItem,
    timePicker
  },
  props: {
    date: {
      type: String,
      default: ""
    },
    defTime: {
      type: [String, Object],
      default: ""
    },
    selectableTimes: {
      type: [Object],
      default() {
        return {};
      }
    },
    selected: {
      type: Array,
      default() {
        return [];
      }
    },
    lunar: {
      type: Boolean,
      default: false
    },
    startDate: {
      type: String,
      default: ""
    },
    endDate: {
      type: String,
      default: ""
    },
    range: {
      type: Boolean,
      default: false
    },
    typeHasTime: {
      type: Boolean,
      default: false
    },
    insert: {
      type: Boolean,
      default: true
    },
    showMonth: {
      type: Boolean,
      default: true
    },
    clearDate: {
      type: Boolean,
      default: true
    },
    left: {
      type: Boolean,
      default: true
    },
    right: {
      type: Boolean,
      default: true
    },
    checkHover: {
      type: Boolean,
      default: true
    },
    hideSecond: {
      type: [Boolean],
      default: false
    },
    pleStatus: {
      type: Object,
      default() {
        return {
          before: "",
          after: "",
          data: [],
          fulldate: ""
        };
      }
    }
  },
  data() {
    return {
      show: false,
      weeks: [],
      calendar: {},
      nowDate: "",
      aniMaskShow: false,
      firstEnter: true,
      time: "",
      timeRange: {
        startTime: "",
        endTime: ""
      },
      tempSingleDate: "",
      tempRange: {
        before: "",
        after: ""
      }
    };
  },
  watch: {
    date: {
      immediate: true,
      handler(newVal, oldVal) {
        if (!this.range) {
          this.tempSingleDate = newVal;
          setTimeout(() => {
            this.init(newVal);
          }, 100);
        }
      }
    },
    defTime: {
      immediate: true,
      handler(newVal, oldVal) {
        if (!this.range) {
          this.time = newVal;
        } else {
          this.timeRange.startTime = newVal.start;
          this.timeRange.endTime = newVal.end;
        }
      }
    },
    startDate(val) {
      this.cale.resetSatrtDate(val);
      this.cale.setDate(this.nowDate.fullDate);
      this.weeks = this.cale.weeks;
    },
    endDate(val) {
      this.cale.resetEndDate(val);
      this.cale.setDate(this.nowDate.fullDate);
      this.weeks = this.cale.weeks;
    },
    selected(newVal) {
      this.cale.setSelectInfo(this.nowDate.fullDate, newVal);
      this.weeks = this.cale.weeks;
    },
    pleStatus: {
      immediate: true,
      handler(newVal, oldVal) {
        const {
          before,
          after,
          fulldate,
          which
        } = newVal;
        this.tempRange.before = before;
        this.tempRange.after = after;
        setTimeout(() => {
          if (fulldate) {
            this.cale.setHoverMultiple(fulldate);
            if (before && after) {
              this.cale.lastHover = true;
              if (this.rangeWithinMonth(after, before))
                return;
              this.setDate(before);
            } else {
              this.cale.setMultiple(fulldate);
              this.setDate(this.nowDate.fullDate);
              this.calendar.fullDate = "";
              this.cale.lastHover = false;
            }
          } else {
            this.cale.setDefaultMultiple(before, after);
            if (which === "left") {
              this.setDate(before);
              this.weeks = this.cale.weeks;
            } else {
              this.setDate(after);
              this.weeks = this.cale.weeks;
            }
            this.cale.lastHover = true;
          }
        }, 16);
      }
    }
  },
  computed: {
    reactStartTime() {
      const activeDate = this.range ? this.tempRange.before : this.calendar.fullDate;
      const res = activeDate === this.startDate ? this.selectableTimes.start : "";
      return res;
    },
    reactEndTime() {
      const activeDate = this.range ? this.tempRange.after : this.calendar.fullDate;
      const res = activeDate === this.endDate ? this.selectableTimes.end : "";
      return res;
    },
    /**
     * for i18n
     */
    selectDateText() {
      return t$1("uni-datetime-picker.selectDate");
    },
    startDateText() {
      return this.startPlaceholder || t$1("uni-datetime-picker.startDate");
    },
    endDateText() {
      return this.endPlaceholder || t$1("uni-datetime-picker.endDate");
    },
    okText() {
      return t$1("uni-datetime-picker.ok");
    },
    yearText() {
      return t$1("uni-datetime-picker.year");
    },
    monthText() {
      return t$1("uni-datetime-picker.month");
    },
    MONText() {
      return t$1("uni-calender.MON");
    },
    TUEText() {
      return t$1("uni-calender.TUE");
    },
    WEDText() {
      return t$1("uni-calender.WED");
    },
    THUText() {
      return t$1("uni-calender.THU");
    },
    FRIText() {
      return t$1("uni-calender.FRI");
    },
    SATText() {
      return t$1("uni-calender.SAT");
    },
    SUNText() {
      return t$1("uni-calender.SUN");
    },
    confirmText() {
      return t$1("uni-calender.confirm");
    }
  },
  created() {
    this.cale = new Calendar({
      // date: new Date(),
      selected: this.selected,
      startDate: this.startDate,
      endDate: this.endDate,
      range: this.range
      // multipleStatus: this.pleStatus
    });
    this.init(this.date);
  },
  methods: {
    leaveCale() {
      this.firstEnter = true;
    },
    handleMouse(weeks) {
      if (weeks.disable)
        return;
      if (this.cale.lastHover)
        return;
      let {
        before,
        after
      } = this.cale.multipleStatus;
      if (!before)
        return;
      this.calendar = weeks;
      this.cale.setHoverMultiple(this.calendar.fullDate);
      this.weeks = this.cale.weeks;
      if (this.firstEnter) {
        this.$emit("firstEnterCale", this.cale.multipleStatus);
        this.firstEnter = false;
      }
    },
    rangeWithinMonth(A, B) {
      const [yearA, monthA] = A.split("-");
      const [yearB, monthB] = B.split("-");
      return yearA === yearB && monthA === monthB;
    },
    // 取消穿透
    clean() {
      this.close();
    },
    // 蒙版点击事件
    maskClick() {
      this.$emit("maskClose");
    },
    clearCalender() {
      if (this.range) {
        this.timeRange.startTime = "";
        this.timeRange.endTime = "";
        this.tempRange.before = "";
        this.tempRange.after = "";
        this.cale.multipleStatus.before = "";
        this.cale.multipleStatus.after = "";
        this.cale.multipleStatus.data = [];
        this.cale.lastHover = false;
      } else {
        this.time = "";
        this.tempSingleDate = "";
      }
      this.calendar.fullDate = "";
      this.setDate();
    },
    bindDateChange(e) {
      const value = e.detail.value + "-1";
      this.init(value);
    },
    /**
     * 初始化日期显示
     * @param {Object} date
     */
    init(date) {
      this.cale.setDate(date);
      this.weeks = this.cale.weeks;
      this.nowDate = this.calendar = this.cale.getInfo(date);
    },
    // choiceDate(weeks) {
    // 	if (weeks.disable) return
    // 	this.calendar = weeks
    // 	// 设置多选
    // 	this.cale.setMultiple(this.calendar.fullDate, true)
    // 	this.weeks = this.cale.weeks
    // 	this.tempSingleDate = this.calendar.fullDate
    // 	this.tempRange.before = this.cale.multipleStatus.before
    // 	this.tempRange.after = this.cale.multipleStatus.after
    // 	this.change()
    // },
    /**
     * 打开日历弹窗
     */
    open() {
      if (this.clearDate && !this.insert) {
        this.cale.cleanMultipleStatus();
        this.init(this.date);
      }
      this.show = true;
      this.$nextTick(() => {
        setTimeout(() => {
          this.aniMaskShow = true;
        }, 50);
      });
    },
    /**
     * 关闭日历弹窗
     */
    close() {
      this.aniMaskShow = false;
      this.$nextTick(() => {
        setTimeout(() => {
          this.show = false;
          this.$emit("close");
        }, 300);
      });
    },
    /**
     * 确认按钮
     */
    confirm() {
      this.setEmit("confirm");
      this.close();
    },
    /**
     * 变化触发
     */
    change() {
      if (!this.insert)
        return;
      this.setEmit("change");
    },
    /**
     * 选择月份触发
     */
    monthSwitch() {
      let {
        year,
        month
      } = this.nowDate;
      this.$emit("monthSwitch", {
        year,
        month: Number(month)
      });
    },
    /**
     * 派发事件
     * @param {Object} name
     */
    setEmit(name) {
      let {
        year,
        month,
        date,
        fullDate,
        lunar,
        extraInfo
      } = this.calendar;
      this.$emit(name, {
        range: this.cale.multipleStatus,
        year,
        month,
        date,
        time: this.time,
        timeRange: this.timeRange,
        fulldate: fullDate,
        lunar,
        extraInfo: extraInfo || {}
      });
    },
    /**
     * 选择天触发
     * @param {Object} weeks
     */
    choiceDate(weeks) {
      if (weeks.disable)
        return;
      this.calendar = weeks;
      this.calendar.userChecked = true;
      this.cale.setMultiple(this.calendar.fullDate, true);
      this.weeks = this.cale.weeks;
      this.tempSingleDate = this.calendar.fullDate;
      this.cale.multipleStatus.before;
      const beforeDate = new Date(this.cale.multipleStatus.before).getTime();
      const afterDate = new Date(this.cale.multipleStatus.after).getTime();
      if (beforeDate > afterDate && afterDate) {
        this.tempRange.before = this.cale.multipleStatus.after;
        this.tempRange.after = this.cale.multipleStatus.before;
      } else {
        this.tempRange.before = this.cale.multipleStatus.before;
        this.tempRange.after = this.cale.multipleStatus.after;
      }
      this.change();
    },
    /**
     * 回到今天
     */
    backtoday() {
      let date = this.cale.getDate(/* @__PURE__ */ new Date()).fullDate;
      this.init(date);
      this.change();
    },
    /**
     * 比较时间大小
     */
    dateCompare(startDate, endDate) {
      startDate = new Date(startDate.replace("-", "/").replace("-", "/"));
      endDate = new Date(endDate.replace("-", "/").replace("-", "/"));
      if (startDate <= endDate) {
        return true;
      } else {
        return false;
      }
    },
    /**
     * 上个月
     */
    pre() {
      const preDate = this.cale.getDate(this.nowDate.fullDate, -1, "month").fullDate;
      this.setDate(preDate);
      this.monthSwitch();
    },
    /**
     * 下个月
     */
    next() {
      const nextDate = this.cale.getDate(this.nowDate.fullDate, 1, "month").fullDate;
      this.setDate(nextDate);
      this.monthSwitch();
    },
    /**
     * 设置日期
     * @param {Object} date
     */
    setDate(date) {
      this.cale.setDate(date);
      this.weeks = this.cale.weeks;
      this.nowDate = this.cale.getInfo(date);
    }
  }
};
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_picker = resolveComponent("picker");
  const _component_calendar_item = resolveComponent("calendar-item");
  const _component_time_picker = resolveComponent("time-picker");
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_1$1);
  return openBlock(), createElementBlock("view", {
    class: "uni-calendar",
    onMouseleave: _cache[8] || (_cache[8] = (...args) => $options.leaveCale && $options.leaveCale(...args)),
    renderWhole: true
  }, [
    !$props.insert && $data.show ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: normalizeClass(["uni-calendar__mask", { "uni-calendar--mask-show": $data.aniMaskShow }]),
      onClick: _cache[0] || (_cache[0] = ($event) => {
        $options.clean();
        $options.maskClick();
      })
    }, null, 2)) : createCommentVNode("", true),
    $props.insert || $data.show ? (openBlock(), createElementBlock("view", {
      key: 1,
      class: normalizeClass(["uni-calendar__content", { "uni-calendar--fixed": !$props.insert, "uni-calendar--ani-show": $data.aniMaskShow, "uni-calendar__content-mobile": $data.aniMaskShow }])
    }, [
      createElementVNode("view", {
        class: normalizeClass(["uni-calendar__header", { "uni-calendar__header-mobile": !$props.insert }])
      }, [
        $props.left ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "uni-calendar__header-btn-box",
          onClick: _cache[1] || (_cache[1] = withModifiers((...args) => $options.pre && $options.pre(...args), ["stop"]))
        }, [
          createElementVNode("view", { class: "uni-calendar__header-btn uni-calendar--left" })
        ])) : createCommentVNode("", true),
        createVNode(_component_picker, {
          mode: "date",
          value: $props.date,
          fields: "month",
          onChange: $options.bindDateChange
        }, {
          default: withCtx(() => [
            createElementVNode("u-text", { class: "uni-calendar__header-text" }, toDisplayString(($data.nowDate.year || "") + $options.yearText + ($data.nowDate.month || "") + $options.monthText), 1)
          ]),
          _: 1
        }, 8, ["value", "onChange"]),
        $props.right ? (openBlock(), createElementBlock("view", {
          key: 1,
          class: "uni-calendar__header-btn-box",
          onClick: _cache[2] || (_cache[2] = withModifiers((...args) => $options.next && $options.next(...args), ["stop"]))
        }, [
          createElementVNode("view", { class: "uni-calendar__header-btn uni-calendar--right" })
        ])) : createCommentVNode("", true),
        !$props.insert ? (openBlock(), createElementBlock("view", {
          key: 2,
          class: "dialog-close",
          onClick: _cache[3] || (_cache[3] = (...args) => $options.clean && $options.clean(...args))
        }, [
          createElementVNode("view", {
            class: "dialog-close-plus",
            "data-id": "close"
          }),
          createElementVNode("view", {
            class: "dialog-close-plus dialog-close-rotate",
            "data-id": "close"
          })
        ])) : createCommentVNode("", true)
      ], 2),
      createElementVNode("view", { class: "uni-calendar__box" }, [
        $props.showMonth ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "uni-calendar__box-bg"
        }, [
          createElementVNode("u-text", { class: "uni-calendar__box-bg-text" }, toDisplayString($data.nowDate.month), 1)
        ])) : createCommentVNode("", true),
        createElementVNode("view", {
          class: "uni-calendar__weeks",
          style: { "padding-bottom": "7px" }
        }, [
          createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
            createElementVNode("u-text", { class: "uni-calendar__weeks-day-text" }, toDisplayString($options.SUNText), 1)
          ]),
          createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
            createElementVNode("u-text", { class: "uni-calendar__weeks-day-text" }, toDisplayString($options.MONText), 1)
          ]),
          createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
            createElementVNode("u-text", { class: "uni-calendar__weeks-day-text" }, toDisplayString($options.TUEText), 1)
          ]),
          createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
            createElementVNode("u-text", { class: "uni-calendar__weeks-day-text" }, toDisplayString($options.WEDText), 1)
          ]),
          createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
            createElementVNode("u-text", { class: "uni-calendar__weeks-day-text" }, toDisplayString($options.THUText), 1)
          ]),
          createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
            createElementVNode("u-text", { class: "uni-calendar__weeks-day-text" }, toDisplayString($options.FRIText), 1)
          ]),
          createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
            createElementVNode("u-text", { class: "uni-calendar__weeks-day-text" }, toDisplayString($options.SATText), 1)
          ])
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList($data.weeks, (item, weekIndex) => {
          return openBlock(), createElementBlock("view", {
            class: "uni-calendar__weeks",
            key: weekIndex
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(item, (weeks, weeksIndex) => {
              return openBlock(), createElementBlock("view", {
                class: "uni-calendar__weeks-item",
                key: weeksIndex
              }, [
                createVNode(_component_calendar_item, {
                  class: "uni-calendar-item--hook",
                  weeks,
                  calendar: $data.calendar,
                  selected: $props.selected,
                  lunar: $props.lunar,
                  checkHover: $props.range,
                  onChange: $options.choiceDate,
                  onHandleMouse: $options.handleMouse
                }, null, 8, ["weeks", "calendar", "selected", "lunar", "checkHover", "onChange", "onHandleMouse"])
              ]);
            }), 128))
          ]);
        }), 128))
      ]),
      !$props.insert && !$props.range && $props.typeHasTime ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "uni-date-changed uni-calendar--fixed-top",
        style: { "padding": "0 80px" }
      }, [
        createElementVNode("view", { class: "uni-date-changed--time-date" }, [
          createElementVNode("u-text", null, toDisplayString($data.tempSingleDate ? $data.tempSingleDate : $options.selectDateText), 1)
        ]),
        createVNode(_component_time_picker, {
          type: "time",
          start: $options.reactStartTime,
          end: $options.reactEndTime,
          modelValue: $data.time,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.time = $event),
          disabled: !$data.tempSingleDate,
          border: false,
          "hide-second": $props.hideSecond,
          class: "time-picker-style"
        }, null, 8, ["start", "end", "modelValue", "disabled", "hide-second"])
      ])) : createCommentVNode("", true),
      !$props.insert && $props.range && $props.typeHasTime ? (openBlock(), createElementBlock("view", {
        key: 1,
        class: "uni-date-changed uni-calendar--fixed-top"
      }, [
        createElementVNode("view", { class: "uni-date-changed--time-start" }, [
          createElementVNode("view", { class: "uni-date-changed--time-date" }, [
            createElementVNode("u-text", null, toDisplayString($data.tempRange.before ? $data.tempRange.before : $options.startDateText), 1)
          ]),
          createVNode(_component_time_picker, {
            type: "time",
            start: $options.reactStartTime,
            modelValue: $data.timeRange.startTime,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.timeRange.startTime = $event),
            border: false,
            "hide-second": $props.hideSecond,
            disabled: !$data.tempRange.before,
            class: "time-picker-style"
          }, null, 8, ["start", "modelValue", "hide-second", "disabled"])
        ]),
        createElementVNode("view", { style: { "line-height": "50px" } }, [
          createVNode(_component_uni_icons, {
            type: "arrowthinright",
            color: "#999"
          })
        ]),
        createElementVNode("view", { class: "uni-date-changed--time-end" }, [
          createElementVNode("view", { class: "uni-date-changed--time-date" }, [
            createElementVNode("u-text", null, toDisplayString($data.tempRange.after ? $data.tempRange.after : $options.endDateText), 1)
          ]),
          createVNode(_component_time_picker, {
            type: "time",
            end: $options.reactEndTime,
            modelValue: $data.timeRange.endTime,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.timeRange.endTime = $event),
            border: false,
            "hide-second": $props.hideSecond,
            disabled: !$data.tempRange.after,
            class: "time-picker-style"
          }, null, 8, ["end", "modelValue", "hide-second", "disabled"])
        ])
      ])) : createCommentVNode("", true),
      !$props.insert ? (openBlock(), createElementBlock("view", {
        key: 2,
        class: "uni-date-changed uni-date-btn--ok"
      }, [
        createElementVNode("view", {
          class: "uni-datetime-picker--btn",
          onClick: _cache[7] || (_cache[7] = (...args) => $options.confirm && $options.confirm(...args))
        }, [
          createElementVNode("u-text", null, toDisplayString($options.confirmText), 1)
        ])
      ])) : createCommentVNode("", true)
    ], 2)) : createCommentVNode("", true)
  ], 32);
}
const calendar = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["styles", [_style_0$6]]]);
const _style_0$5 = { "uni-date": { "": { "flex": 1 } }, "uni-date-editor": { "": { "width": 100 } }, "uni-date-x": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10, "borderRadius": 4, "backgroundColor": "#ffffff", "color": "#666666", "fontSize": 14, "flex": 1 } }, "uni-date-x--border": { "": { "boxSizing": "border-box", "borderRadius": 4, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#e5e5e5" } }, "uni-date-editor--x": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "position": "relative" } }, "uni-date__icon-clear": { ".uni-date-editor--x ": { "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 5, "display": "flex", "alignItems": "center" } }, "uni-date__x-input": { "": { "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "position": "relative", "overflow": "hidden", "flex": 1, "lineHeight": 1, "fontSize": 14, "height": 35 } }, "t-c": { "": { "textAlign": "center" } }, "uni-date__input": { "": { "height": 40, "width": 100, "lineHeight": 40, "fontSize": 14 } }, "uni-date-range__input": { "": { "textAlign": "center", "maxWidth": "142px" } }, "uni-date-picker__container": { "": { "position": "relative" } }, "uni-date-mask": { "": { "position": "fixed", "bottom": 0, "top": 0, "left": 0, "right": 0, "backgroundColor": "rgba(0,0,0,0)", "transitionDuration": 300, "zIndex": 996 } }, "uni-date-single--x": { "": { "backgroundColor": "#ffffff", "position": "absolute", "top": 0, "right": 0, "zIndex": 999, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#EBEEF5", "boxShadow": "0 2px 12px 0 rgba(0, 0, 0, 0.1)", "borderRadius": 4 } }, "uni-date-range--x": { "": { "backgroundColor": "#ffffff", "position": "absolute", "top": 0, "zIndex": 999, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#EBEEF5", "boxShadow": "0 2px 12px 0 rgba(0, 0, 0, 0.1)", "borderRadius": 4 } }, "uni-date-editor--x__disabled": { "": { "opacity": 0.4, "cursor": "default" } }, "uni-date-editor--logo": { "": { "width": 16, "height": 16, "verticalAlign": "middle" } }, "popup-x-header": { "": { "flexDirection": "row" } }, "popup-x-header--datetime": { "": { "flexDirection": "row", "flex": 1 } }, "popup-x-body": { "": { "display": "flex" } }, "popup-x-footer": { "": { "paddingTop": 0, "paddingRight": 15, "paddingBottom": 0, "paddingLeft": 15, "borderTopColor": "#F1F1F1", "borderTopStyle": "solid", "borderTopWidth": 1, "lineHeight": 40, "textAlign": "right", "color": "#666666" } }, "confirm": { ".popup-x-footer ": { "marginLeft": 20, "color": "#007aff" } }, "uni-date-changed": { "": { "textAlign": "center", "color": "#333333", "borderBottomColor": "#F1F1F1", "borderBottomStyle": "solid", "borderBottomWidth": 1 } }, "uni-date-changed--time": { ".uni-date-changed ": { "flex": 1 } }, "uni-date-changed--time-date": { "": { "color": "#333333", "opacity": 0.6 } }, "mr-50": { "": { "marginRight": 50 } }, "uni-popper__arrow": { "": { "position::after": "absolute", "width::after": 0, "height::after": 0, "borderColor::after": "rgba(0,0,0,0)", "borderStyle::after": "solid", "borderWidth::after": 6, "filter": "drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03))", "top": -6, "right": 10, "marginRight": 3, "borderTopWidth": 0, "borderBottomColor": "#EBEEF5", "content::after": '" "', "top::after": 1, "marginLeft::after": -6, "borderTopWidth::after": 0, "borderBottomColor::after": "#ffffff" } }, "@TRANSITION": { "uni-date-mask": { "duration": 300 } } };
const {
  t
} = initVueI18n(messages);
const _sfc_main$5 = {
  name: "UniDatetimePicker",
  options: {
    virtualHost: true
  },
  components: {
    calendar,
    timePicker
  },
  inject: {
    form: {
      from: "uniForm",
      default: null
    },
    formItem: {
      from: "uniFormItem",
      default: null
    }
  },
  data() {
    return {
      isRange: false,
      hasTime: false,
      mobileRange: false,
      // 单选
      singleVal: "",
      tempSingleDate: "",
      defSingleDate: "",
      time: "",
      // 范围选
      caleRange: {
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: ""
      },
      range: {
        startDate: "",
        // startTime: '',
        endDate: ""
        // endTime: ''
      },
      tempRange: {
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: ""
      },
      // 左右日历同步数据
      startMultipleStatus: {
        before: "",
        after: "",
        data: [],
        fulldate: ""
      },
      endMultipleStatus: {
        before: "",
        after: "",
        data: [],
        fulldate: ""
      },
      visible: false,
      popup: false,
      popover: null,
      isEmitValue: false,
      isPhone: false,
      isFirstShow: true
    };
  },
  props: {
    type: {
      type: String,
      default: "datetime"
    },
    value: {
      type: [String, Number, Array, Date],
      default: ""
    },
    modelValue: {
      type: [String, Number, Array, Date],
      default: ""
    },
    start: {
      type: [Number, String],
      default: ""
    },
    end: {
      type: [Number, String],
      default: ""
    },
    returnType: {
      type: String,
      default: "string"
    },
    placeholder: {
      type: String,
      default: ""
    },
    startPlaceholder: {
      type: String,
      default: ""
    },
    endPlaceholder: {
      type: String,
      default: ""
    },
    rangeSeparator: {
      type: String,
      default: "-"
    },
    border: {
      type: [Boolean],
      default: true
    },
    disabled: {
      type: [Boolean],
      default: false
    },
    clearIcon: {
      type: [Boolean],
      default: true
    },
    hideSecond: {
      type: [Boolean],
      default: false
    }
  },
  watch: {
    type: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal.indexOf("time") !== -1) {
          this.hasTime = true;
        } else {
          this.hasTime = false;
        }
        if (newVal.indexOf("range") !== -1) {
          this.isRange = true;
        } else {
          this.isRange = false;
        }
      }
    },
    modelValue: {
      immediate: true,
      handler(newVal, oldVal) {
        if (this.isEmitValue) {
          this.isEmitValue = false;
          return;
        }
        this.initPicker(newVal);
      }
    },
    start: {
      immediate: true,
      handler(newVal, oldVal) {
        if (!newVal)
          return;
        const {
          defDate,
          defTime
        } = this.parseDate(newVal);
        this.caleRange.startDate = defDate;
        if (this.hasTime) {
          this.caleRange.startTime = defTime;
        }
      }
    },
    end: {
      immediate: true,
      handler(newVal, oldVal) {
        if (!newVal)
          return;
        const {
          defDate,
          defTime
        } = this.parseDate(newVal);
        this.caleRange.endDate = defDate;
        if (this.hasTime) {
          this.caleRange.endTime = defTime;
        }
      }
    }
  },
  computed: {
    reactStartTime() {
      const activeDate = this.isRange ? this.tempRange.startDate : this.tempSingleDate;
      const res = activeDate === this.caleRange.startDate ? this.caleRange.startTime : "";
      return res;
    },
    reactEndTime() {
      const activeDate = this.isRange ? this.tempRange.endDate : this.tempSingleDate;
      const res = activeDate === this.caleRange.endDate ? this.caleRange.endTime : "";
      return res;
    },
    reactMobDefTime() {
      const times = {
        start: this.tempRange.startTime,
        end: this.tempRange.endTime
      };
      return this.isRange ? times : this.time;
    },
    mobSelectableTime() {
      return {
        start: this.caleRange.startTime,
        end: this.caleRange.endTime
      };
    },
    datePopupWidth() {
      return this.isRange ? 653 : 301;
    },
    /**
     * for i18n
     */
    singlePlaceholderText() {
      return this.placeholder || (this.type === "date" ? this.selectDateText : t(
        "uni-datetime-picker.selectDateTime"
      ));
    },
    startPlaceholderText() {
      return this.startPlaceholder || this.startDateText;
    },
    endPlaceholderText() {
      return this.endPlaceholder || this.endDateText;
    },
    selectDateText() {
      return t("uni-datetime-picker.selectDate");
    },
    selectTimeText() {
      return t("uni-datetime-picker.selectTime");
    },
    startDateText() {
      return this.startPlaceholder || t("uni-datetime-picker.startDate");
    },
    startTimeText() {
      return t("uni-datetime-picker.startTime");
    },
    endDateText() {
      return this.endPlaceholder || t("uni-datetime-picker.endDate");
    },
    endTimeText() {
      return t("uni-datetime-picker.endTime");
    },
    okText() {
      return t("uni-datetime-picker.ok");
    },
    clearText() {
      return t("uni-datetime-picker.clear");
    },
    showClearIcon() {
      const {
        clearIcon,
        disabled,
        singleVal,
        range
      } = this;
      const bool = clearIcon && !disabled && (singleVal || range.startDate && range.endDate);
      return bool;
    }
  },
  created() {
  },
  mounted() {
    this.platform();
  },
  methods: {
    initPicker(newVal) {
      if (!newVal || Array.isArray(newVal) && !newVal.length) {
        this.$nextTick(() => {
          this.clear(false);
        });
        return;
      }
      if (!Array.isArray(newVal) && !this.isRange) {
        const {
          defDate,
          defTime
        } = this.parseDate(newVal);
        this.singleVal = defDate;
        this.tempSingleDate = defDate;
        this.defSingleDate = defDate;
        if (this.hasTime) {
          this.singleVal = defDate + " " + defTime;
          this.time = defTime;
        }
      } else {
        const [before, after] = newVal;
        if (!before && !after)
          return;
        const defBefore = this.parseDate(before);
        const defAfter = this.parseDate(after);
        const startDate = defBefore.defDate;
        const endDate = defAfter.defDate;
        this.range.startDate = this.tempRange.startDate = startDate;
        this.range.endDate = this.tempRange.endDate = endDate;
        if (this.hasTime) {
          this.range.startDate = defBefore.defDate + " " + defBefore.defTime;
          this.range.endDate = defAfter.defDate + " " + defAfter.defTime;
          this.tempRange.startTime = defBefore.defTime;
          this.tempRange.endTime = defAfter.defTime;
        }
        const defaultRange = {
          before: defBefore.defDate,
          after: defAfter.defDate
        };
        this.startMultipleStatus = Object.assign({}, this.startMultipleStatus, defaultRange, {
          which: "right"
        });
        this.endMultipleStatus = Object.assign({}, this.endMultipleStatus, defaultRange, {
          which: "left"
        });
      }
    },
    updateLeftCale(e) {
      const left = this.$refs.left;
      left.cale.setHoverMultiple(e.after);
      left.setDate(this.$refs.left.nowDate.fullDate);
    },
    updateRightCale(e) {
      const right = this.$refs.right;
      right.cale.setHoverMultiple(e.after);
      right.setDate(this.$refs.right.nowDate.fullDate);
    },
    platform() {
      const systemInfo = uni.getSystemInfoSync();
      this.isPhone = systemInfo.windowWidth <= 500;
      this.windowWidth = systemInfo.windowWidth;
    },
    show(event) {
      if (this.disabled) {
        return;
      }
      this.platform();
      if (this.isPhone) {
        this.$refs.mobile.open();
        return;
      }
      this.popover = {
        top: "10px"
      };
      const dateEditor = uni.createSelectorQuery().in(this).select(".uni-date-editor");
      dateEditor.boundingClientRect((rect) => {
        if (this.windowWidth - rect.left < this.datePopupWidth) {
          this.popover.right = 0;
        }
      }).exec();
      setTimeout(() => {
        this.popup = !this.popup;
        if (!this.isPhone && this.isRange && this.isFirstShow) {
          this.isFirstShow = false;
          const {
            startDate,
            endDate
          } = this.range;
          if (startDate && endDate) {
            if (this.diffDate(startDate, endDate) < 30) {
              this.$refs.right.next();
            }
          } else {
            this.$refs.right.next();
            this.$refs.right.cale.lastHover = false;
          }
        }
      }, 50);
    },
    close() {
      setTimeout(() => {
        this.popup = false;
        this.$emit("maskClick", this.value);
        this.$refs.mobile.close();
      }, 20);
    },
    setEmit(value) {
      if (this.returnType === "timestamp" || this.returnType === "date") {
        if (!Array.isArray(value)) {
          if (!this.hasTime) {
            value = value + " 00:00:00";
          }
          value = this.createTimestamp(value);
          if (this.returnType === "date") {
            value = new Date(value);
          }
        } else {
          if (!this.hasTime) {
            value[0] = value[0] + " 00:00:00";
            value[1] = value[1] + " 00:00:00";
          }
          value[0] = this.createTimestamp(value[0]);
          value[1] = this.createTimestamp(value[1]);
          if (this.returnType === "date") {
            value[0] = new Date(value[0]);
            value[1] = new Date(value[1]);
          }
        }
      }
      this.$emit("change", value);
      this.$emit("input", value);
      this.$emit("update:modelValue", value);
      this.isEmitValue = true;
    },
    createTimestamp(date) {
      date = this.fixIosDateFormat(date);
      return Date.parse(new Date(date));
    },
    singleChange(e) {
      this.tempSingleDate = e.fulldate;
      if (this.hasTime)
        return;
      this.confirmSingleChange();
    },
    confirmSingleChange() {
      if (!this.tempSingleDate) {
        this.popup = false;
        return;
      }
      if (this.hasTime) {
        this.singleVal = this.tempSingleDate + " " + (this.time ? this.time : "00:00:00");
      } else {
        this.singleVal = this.tempSingleDate;
      }
      this.setEmit(this.singleVal);
      this.popup = false;
    },
    leftChange(e) {
      const {
        before,
        after
      } = e.range;
      this.rangeChange(before, after);
      const obj = {
        before: e.range.before,
        after: e.range.after,
        data: e.range.data,
        fulldate: e.fulldate
      };
      this.startMultipleStatus = Object.assign({}, this.startMultipleStatus, obj);
    },
    rightChange(e) {
      const {
        before,
        after
      } = e.range;
      this.rangeChange(before, after);
      const obj = {
        before: e.range.before,
        after: e.range.after,
        data: e.range.data,
        fulldate: e.fulldate
      };
      this.endMultipleStatus = Object.assign({}, this.endMultipleStatus, obj);
    },
    mobileChange(e) {
      if (this.isRange) {
        const {
          before,
          after
        } = e.range;
        this.handleStartAndEnd(before, after, true);
        if (this.hasTime) {
          const {
            startTime,
            endTime
          } = e.timeRange;
          this.tempRange.startTime = startTime;
          this.tempRange.endTime = endTime;
        }
        this.confirmRangeChange();
      } else {
        if (this.hasTime) {
          this.singleVal = e.fulldate + " " + e.time;
        } else {
          this.singleVal = e.fulldate;
        }
        this.setEmit(this.singleVal);
      }
      this.$refs.mobile.close();
    },
    rangeChange(before, after) {
      if (!(before && after))
        return;
      this.handleStartAndEnd(before, after, true);
      if (this.hasTime)
        return;
      this.confirmRangeChange();
    },
    confirmRangeChange() {
      if (!this.tempRange.startDate && !this.tempRange.endDate) {
        this.popup = false;
        return;
      }
      let start, end;
      if (!this.hasTime) {
        start = this.range.startDate = this.tempRange.startDate;
        end = this.range.endDate = this.tempRange.endDate;
      } else {
        start = this.range.startDate = this.tempRange.startDate + " " + (this.tempRange.startTime ? this.tempRange.startTime : "00:00:00");
        end = this.range.endDate = this.tempRange.endDate + " " + (this.tempRange.endTime ? this.tempRange.endTime : "00:00:00");
      }
      const displayRange = [start, end];
      this.setEmit(displayRange);
      this.popup = false;
    },
    handleStartAndEnd(before, after, temp = false) {
      if (!(before && after))
        return;
      const type = temp ? "tempRange" : "range";
      if (this.dateCompare(before, after)) {
        this[type].startDate = before;
        this[type].endDate = after;
      } else {
        this[type].startDate = after;
        this[type].endDate = before;
      }
    },
    /**
     * 比较时间大小
     */
    dateCompare(startDate, endDate) {
      startDate = new Date(startDate.replace("-", "/").replace("-", "/"));
      endDate = new Date(endDate.replace("-", "/").replace("-", "/"));
      if (startDate <= endDate) {
        return true;
      } else {
        return false;
      }
    },
    /**
     * 比较时间差
     */
    diffDate(startDate, endDate) {
      startDate = new Date(startDate.replace("-", "/").replace("-", "/"));
      endDate = new Date(endDate.replace("-", "/").replace("-", "/"));
      const diff = (endDate - startDate) / (24 * 60 * 60 * 1e3);
      return Math.abs(diff);
    },
    clear(needEmit = true) {
      if (!this.isRange) {
        this.singleVal = "";
        this.tempSingleDate = "";
        this.time = "";
        if (this.isPhone) {
          this.$refs.mobile && this.$refs.mobile.clearCalender();
        } else {
          this.$refs.pcSingle && this.$refs.pcSingle.clearCalender();
        }
        if (needEmit) {
          this.$emit("change", "");
          this.$emit("input", "");
          this.$emit("update:modelValue", "");
        }
      } else {
        this.range.startDate = "";
        this.range.endDate = "";
        this.tempRange.startDate = "";
        this.tempRange.startTime = "";
        this.tempRange.endDate = "";
        this.tempRange.endTime = "";
        if (this.isPhone) {
          this.$refs.mobile && this.$refs.mobile.clearCalender();
        } else {
          this.$refs.left && this.$refs.left.clearCalender();
          this.$refs.right && this.$refs.right.clearCalender();
          this.$refs.right && this.$refs.right.next();
        }
        if (needEmit) {
          this.$emit("change", []);
          this.$emit("input", []);
          this.$emit("update:modelValue", []);
        }
      }
    },
    parseDate(date) {
      date = this.fixIosDateFormat(date);
      const defVal = new Date(date);
      const year = defVal.getFullYear();
      const month = defVal.getMonth() + 1;
      const day = defVal.getDate();
      const hour = defVal.getHours();
      const minute = defVal.getMinutes();
      const second = defVal.getSeconds();
      const defDate = year + "-" + this.lessTen(month) + "-" + this.lessTen(day);
      const defTime = this.lessTen(hour) + ":" + this.lessTen(minute) + (this.hideSecond ? "" : ":" + this.lessTen(second));
      return {
        defDate,
        defTime
      };
    },
    lessTen(item) {
      return item < 10 ? "0" + item : item;
    },
    //兼容 iOS、safari 日期格式
    fixIosDateFormat(value) {
      if (typeof value === "string") {
        value = value.replace(/-/g, "/");
      }
      return value;
    },
    leftMonthSwitch(e) {
    },
    rightMonthSwitch(e) {
    }
  }
};
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_1$1);
  const _component_time_picker = resolveComponent("time-picker");
  const _component_calendar = resolveComponent("calendar");
  return openBlock(), createElementBlock("view", {
    class: "uni-date",
    renderWhole: true
  }, [
    createElementVNode("view", {
      class: "uni-date-editor",
      onClick: _cache[4] || (_cache[4] = (...args) => $options.show && $options.show(...args))
    }, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createElementVNode("view", {
          class: normalizeClass(["uni-date-editor--x", {
            "uni-date-editor--x__disabled": $props.disabled,
            "uni-date-x--border": $props.border
          }])
        }, [
          !$data.isRange ? (openBlock(), createElementBlock("view", {
            key: 0,
            class: "uni-date-x uni-date-single"
          }, [
            createVNode(_component_uni_icons, {
              type: "calendar",
              color: "#c0c4cc",
              size: "22"
            }),
            createElementVNode("u-input", {
              class: "uni-date__x-input",
              type: "text",
              modelValue: $data.singleVal,
              onInput: _cache[0] || (_cache[0] = ($event) => $data.singleVal = $event.detail.value),
              placeholder: $options.singlePlaceholderText,
              disabled: true
            }, null, 40, ["modelValue", "placeholder"])
          ])) : (openBlock(), createElementBlock("view", {
            key: 1,
            class: "uni-date-x uni-date-range"
          }, [
            createVNode(_component_uni_icons, {
              type: "calendar",
              color: "#c0c4cc",
              size: "22"
            }),
            createElementVNode("u-input", {
              class: "uni-date__x-input t-c",
              type: "text",
              modelValue: $data.range.startDate,
              onInput: _cache[1] || (_cache[1] = ($event) => $data.range.startDate = $event.detail.value),
              placeholder: $options.startPlaceholderText,
              disabled: true
            }, null, 40, ["modelValue", "placeholder"]),
            renderSlot(_ctx.$slots, "default", {}, () => [
              createElementVNode("view", { class: "" }, [
                createElementVNode("u-text", null, toDisplayString($props.rangeSeparator), 1)
              ])
            ]),
            createElementVNode("u-input", {
              class: "uni-date__x-input t-c",
              type: "text",
              modelValue: $data.range.endDate,
              onInput: _cache[2] || (_cache[2] = ($event) => $data.range.endDate = $event.detail.value),
              placeholder: $options.endPlaceholderText,
              disabled: true
            }, null, 40, ["modelValue", "placeholder"])
          ])),
          $options.showClearIcon ? (openBlock(), createElementBlock("view", {
            key: 2,
            class: "uni-date__icon-clear",
            onClick: _cache[3] || (_cache[3] = withModifiers((...args) => $options.clear && $options.clear(...args), ["stop"]))
          }, [
            createVNode(_component_uni_icons, {
              type: "clear",
              color: "#c0c4cc",
              size: "24"
            })
          ])) : createCommentVNode("", true)
        ], 2)
      ])
    ]),
    $data.popup ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: "uni-date-mask",
      onClick: _cache[5] || (_cache[5] = (...args) => $options.close && $options.close(...args))
    })) : createCommentVNode("", true),
    !$data.isPhone && $data.popup ? (openBlock(), createElementBlock("view", {
      key: 1,
      ref: "datePicker",
      class: "uni-date-picker__container"
    }, [
      !$data.isRange ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "uni-date-single--x",
        style: normalizeStyle($data.popover)
      }, [
        createElementVNode("view", { class: "uni-popper__arrow" }),
        $data.hasTime ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "uni-date-changed popup-x-header"
        }, [
          createElementVNode("u-input", {
            class: "uni-date__input t-c",
            type: "text",
            modelValue: $data.tempSingleDate,
            onInput: _cache[6] || (_cache[6] = ($event) => $data.tempSingleDate = $event.detail.value),
            placeholder: $options.selectDateText
          }, null, 40, ["modelValue", "placeholder"]),
          createVNode(_component_time_picker, {
            type: "time",
            modelValue: $data.time,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.time = $event),
            border: false,
            disabled: !$data.tempSingleDate,
            start: $options.reactStartTime,
            end: $options.reactEndTime,
            hideSecond: $props.hideSecond,
            style: { "width": "100%" }
          }, {
            default: withCtx(() => [
              createElementVNode("u-input", {
                class: "uni-date__input t-c",
                type: "text",
                modelValue: $data.time,
                onInput: _cache[7] || (_cache[7] = ($event) => $data.time = $event.detail.value),
                placeholder: $options.selectTimeText,
                disabled: !$data.tempSingleDate
              }, null, 40, ["modelValue", "placeholder", "disabled"])
            ]),
            _: 1
          }, 8, ["modelValue", "disabled", "start", "end", "hideSecond"])
        ])) : createCommentVNode("", true),
        createVNode(_component_calendar, {
          ref: "pcSingle",
          showMonth: false,
          "start-date": $data.caleRange.startDate,
          "end-date": $data.caleRange.endDate,
          date: $data.defSingleDate,
          onChange: $options.singleChange,
          style: { "padding": "0 8px" }
        }, null, 8, ["start-date", "end-date", "date", "onChange"]),
        $data.hasTime ? (openBlock(), createElementBlock("view", {
          key: 1,
          class: "popup-x-footer"
        }, [
          createElementVNode("u-text", {
            class: "confirm",
            onClick: _cache[9] || (_cache[9] = (...args) => $options.confirmSingleChange && $options.confirmSingleChange(...args))
          }, toDisplayString($options.okText), 1)
        ])) : createCommentVNode("", true),
        createElementVNode("view", { class: "uni-date-popper__arrow" })
      ], 4)) : (openBlock(), createElementBlock("view", {
        key: 1,
        class: "uni-date-range--x",
        style: normalizeStyle($data.popover)
      }, [
        createElementVNode("view", { class: "uni-popper__arrow" }),
        $data.hasTime ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "popup-x-header uni-date-changed"
        }, [
          createElementVNode("view", { class: "popup-x-header--datetime" }, [
            createElementVNode("u-input", {
              class: "uni-date__input uni-date-range__input",
              type: "text",
              modelValue: $data.tempRange.startDate,
              onInput: _cache[10] || (_cache[10] = ($event) => $data.tempRange.startDate = $event.detail.value),
              placeholder: $options.startDateText
            }, null, 40, ["modelValue", "placeholder"]),
            createVNode(_component_time_picker, {
              type: "time",
              modelValue: $data.tempRange.startTime,
              "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $data.tempRange.startTime = $event),
              start: $options.reactStartTime,
              border: false,
              disabled: !$data.tempRange.startDate,
              hideSecond: $props.hideSecond
            }, {
              default: withCtx(() => [
                createElementVNode("u-input", {
                  class: "uni-date__input uni-date-range__input",
                  type: "text",
                  modelValue: $data.tempRange.startTime,
                  onInput: _cache[11] || (_cache[11] = ($event) => $data.tempRange.startTime = $event.detail.value),
                  placeholder: $options.startTimeText,
                  disabled: !$data.tempRange.startDate
                }, null, 40, ["modelValue", "placeholder", "disabled"])
              ]),
              _: 1
            }, 8, ["modelValue", "start", "disabled", "hideSecond"])
          ]),
          createVNode(_component_uni_icons, {
            type: "arrowthinright",
            color: "#999",
            style: { "line-height": "40px" }
          }),
          createElementVNode("view", { class: "popup-x-header--datetime" }, [
            createElementVNode("u-input", {
              class: "uni-date__input uni-date-range__input",
              type: "text",
              modelValue: $data.tempRange.endDate,
              onInput: _cache[13] || (_cache[13] = ($event) => $data.tempRange.endDate = $event.detail.value),
              placeholder: $options.endDateText
            }, null, 40, ["modelValue", "placeholder"]),
            createVNode(_component_time_picker, {
              type: "time",
              modelValue: $data.tempRange.endTime,
              "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $data.tempRange.endTime = $event),
              end: $options.reactEndTime,
              border: false,
              disabled: !$data.tempRange.endDate,
              hideSecond: $props.hideSecond
            }, {
              default: withCtx(() => [
                createElementVNode("u-input", {
                  class: "uni-date__input uni-date-range__input",
                  type: "text",
                  modelValue: $data.tempRange.endTime,
                  onInput: _cache[14] || (_cache[14] = ($event) => $data.tempRange.endTime = $event.detail.value),
                  placeholder: $options.endTimeText,
                  disabled: !$data.tempRange.endDate
                }, null, 40, ["modelValue", "placeholder", "disabled"])
              ]),
              _: 1
            }, 8, ["modelValue", "end", "disabled", "hideSecond"])
          ])
        ])) : createCommentVNode("", true),
        createElementVNode("view", { class: "popup-x-body" }, [
          createVNode(_component_calendar, {
            ref: "left",
            showMonth: false,
            "start-date": $data.caleRange.startDate,
            "end-date": $data.caleRange.endDate,
            range: true,
            onChange: $options.leftChange,
            pleStatus: $data.endMultipleStatus,
            onFirstEnterCale: $options.updateRightCale,
            onMonthSwitch: $options.leftMonthSwitch,
            style: { "padding": "0 8px" }
          }, null, 8, ["start-date", "end-date", "onChange", "pleStatus", "onFirstEnterCale", "onMonthSwitch"]),
          createVNode(_component_calendar, {
            ref: "right",
            showMonth: false,
            "start-date": $data.caleRange.startDate,
            "end-date": $data.caleRange.endDate,
            range: true,
            onChange: $options.rightChange,
            pleStatus: $data.startMultipleStatus,
            onFirstEnterCale: $options.updateLeftCale,
            onMonthSwitch: $options.rightMonthSwitch,
            style: { "padding": "0 8px", "border-left": "1px solid #F1F1F1" }
          }, null, 8, ["start-date", "end-date", "onChange", "pleStatus", "onFirstEnterCale", "onMonthSwitch"])
        ]),
        $data.hasTime ? (openBlock(), createElementBlock("view", {
          key: 1,
          class: "popup-x-footer"
        }, [
          createElementVNode("u-text", {
            class: "",
            onClick: _cache[16] || (_cache[16] = (...args) => $options.clear && $options.clear(...args))
          }, toDisplayString($options.clearText), 1),
          createElementVNode("u-text", {
            class: "confirm",
            onClick: _cache[17] || (_cache[17] = (...args) => $options.confirmRangeChange && $options.confirmRangeChange(...args))
          }, toDisplayString($options.okText), 1)
        ])) : createCommentVNode("", true)
      ], 4))
    ], 512)) : createCommentVNode("", true),
    $data.isPhone ? (openBlock(), createBlock(_component_calendar, {
      key: 2,
      ref: "mobile",
      clearDate: false,
      date: $data.defSingleDate,
      defTime: $options.reactMobDefTime,
      "start-date": $data.caleRange.startDate,
      "end-date": $data.caleRange.endDate,
      selectableTimes: $options.mobSelectableTime,
      pleStatus: $data.endMultipleStatus,
      showMonth: false,
      range: $data.isRange,
      typeHasTime: $data.hasTime,
      insert: false,
      hideSecond: $props.hideSecond,
      onConfirm: $options.mobileChange,
      onMaskClose: $options.close
    }, null, 8, ["date", "defTime", "start-date", "end-date", "selectableTimes", "pleStatus", "range", "typeHasTime", "hideSecond", "onConfirm", "onMaskClose"])) : createCommentVNode("", true)
  ]);
}
const __easycom_5 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["styles", [_style_0$5]]]);
const dataPicker = {
  props: {
    localdata: {
      type: [Array, Object],
      default() {
        return [];
      }
    },
    spaceInfo: {
      type: Object,
      default() {
        return {};
      }
    },
    collection: {
      type: String,
      default: ""
    },
    action: {
      type: String,
      default: ""
    },
    field: {
      type: String,
      default: ""
    },
    orderby: {
      type: String,
      default: ""
    },
    where: {
      type: [String, Object],
      default: ""
    },
    pageData: {
      type: String,
      default: "add"
    },
    pageCurrent: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 20
    },
    getcount: {
      type: [Boolean, String],
      default: false
    },
    getone: {
      type: [Boolean, String],
      default: false
    },
    gettree: {
      type: [Boolean, String],
      default: false
    },
    manual: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Array, String, Number],
      default() {
        return [];
      }
    },
    modelValue: {
      type: [Array, String, Number],
      default() {
        return [];
      }
    },
    preload: {
      type: Boolean,
      default: false
    },
    stepSearh: {
      type: Boolean,
      default: true
    },
    selfField: {
      type: String,
      default: ""
    },
    parentField: {
      type: String,
      default: ""
    },
    multiple: {
      type: Boolean,
      default: false
    },
    map: {
      type: Object,
      default() {
        return {
          text: "text",
          value: "value"
        };
      }
    }
  },
  data() {
    return {
      loading: false,
      errorMessage: "",
      loadMore: {
        contentdown: "",
        contentrefresh: "",
        contentnomore: ""
      },
      dataList: [],
      selected: [],
      selectedIndex: 0,
      page: {
        current: this.pageCurrent,
        size: this.pageSize,
        count: 0
      }
    };
  },
  computed: {
    isLocaldata() {
      return !this.collection.length;
    },
    postField() {
      let fields = [this.field];
      if (this.parentField) {
        fields.push(`${this.parentField} as parent_value`);
      }
      return fields.join(",");
    },
    dataValue() {
      let isModelValue = Array.isArray(this.modelValue) ? this.modelValue.length > 0 : this.modelValue !== null || this.modelValue !== void 0;
      return isModelValue ? this.modelValue : this.value;
    },
    hasValue() {
      if (typeof this.dataValue === "number") {
        return true;
      }
      return this.dataValue != null && this.dataValue.length > 0;
    }
  },
  created() {
    this.$watch(() => {
      var al = [];
      [
        "pageCurrent",
        "pageSize",
        "spaceInfo",
        "value",
        "modelValue",
        "localdata",
        "collection",
        "action",
        "field",
        "orderby",
        "where",
        "getont",
        "getcount",
        "gettree"
      ].forEach((key) => {
        al.push(this[key]);
      });
      return al;
    }, (newValue, oldValue) => {
      for (let i = 2; i < newValue.length; i++) {
        if (newValue[i] != oldValue[i]) {
          break;
        }
      }
      if (newValue[0] != oldValue[0]) {
        this.page.current = this.pageCurrent;
      }
      this.page.size = this.pageSize;
      this.onPropsChange();
    });
    this._treeData = [];
  },
  methods: {
    onPropsChange() {
      this._treeData = [];
    },
    getCommand(options = {}) {
      let db = nr.database(this.spaceInfo);
      const action = options.action || this.action;
      if (action) {
        db = db.action(action);
      }
      const collection = options.collection || this.collection;
      db = db.collection(collection);
      const where = options.where || this.where;
      if (!(!where || !Object.keys(where).length)) {
        db = db.where(where);
      }
      const field = options.field || this.field;
      if (field) {
        db = db.field(field);
      }
      const orderby = options.orderby || this.orderby;
      if (orderby) {
        db = db.orderBy(orderby);
      }
      const current = options.pageCurrent !== void 0 ? options.pageCurrent : this.page.current;
      const size = options.pageSize !== void 0 ? options.pageSize : this.page.size;
      const getCount = options.getcount !== void 0 ? options.getcount : this.getcount;
      const getTree = options.gettree !== void 0 ? options.gettree : this.gettree;
      const getOptions = {
        getCount,
        getTree
      };
      if (options.getTreePath) {
        getOptions.getTreePath = options.getTreePath;
      }
      db = db.skip(size * (current - 1)).limit(size).get(getOptions);
      return db;
    },
    getNodeData(callback) {
      if (this.loading) {
        return;
      }
      this.loading = true;
      this.getCommand({
        field: this.postField,
        where: this._pathWhere()
      }).then((res) => {
        this.loading = false;
        this.selected = res.result.data;
        callback && callback();
      }).catch((err) => {
        this.loading = false;
        this.errorMessage = err;
      });
    },
    getTreePath(callback) {
      if (this.loading) {
        return;
      }
      this.loading = true;
      this.getCommand({
        field: this.postField,
        getTreePath: {
          startWith: `${this.selfField}=='${this.dataValue}'`
        }
      }).then((res) => {
        this.loading = false;
        let treePath = [];
        this._extractTreePath(res.result.data, treePath);
        this.selected = treePath;
        callback && callback();
      }).catch((err) => {
        this.loading = false;
        this.errorMessage = err;
      });
    },
    loadData() {
      if (this.isLocaldata) {
        this._processLocalData();
        return;
      }
      if (this.dataValue != null) {
        this._loadNodeData((data) => {
          this._treeData = data;
          this._updateBindData();
          this._updateSelected();
        });
        return;
      }
      if (this.stepSearh) {
        this._loadNodeData((data) => {
          this._treeData = data;
          this._updateBindData();
        });
      } else {
        this._loadAllData((data) => {
          this._treeData = [];
          this._extractTree(data, this._treeData, null);
          this._updateBindData();
        });
      }
    },
    _loadAllData(callback) {
      if (this.loading) {
        return;
      }
      this.loading = true;
      this.getCommand({
        field: this.postField,
        gettree: true,
        startwith: `${this.selfField}=='${this.dataValue}'`
      }).then((res) => {
        this.loading = false;
        callback(res.result.data);
        this.onDataChange();
      }).catch((err) => {
        this.loading = false;
        this.errorMessage = err;
      });
    },
    _loadNodeData(callback, pw) {
      if (this.loading) {
        return;
      }
      this.loading = true;
      this.getCommand({
        field: this.postField,
        where: pw || this._postWhere(),
        pageSize: 500
      }).then((res) => {
        this.loading = false;
        callback(res.result.data);
        this.onDataChange();
      }).catch((err) => {
        this.loading = false;
        this.errorMessage = err;
      });
    },
    _pathWhere() {
      let result = [];
      let where_field = this._getParentNameByField();
      if (where_field) {
        result.push(`${where_field} == '${this.dataValue}'`);
      }
      if (this.where) {
        return `(${this.where}) && (${result.join(" || ")})`;
      }
      return result.join(" || ");
    },
    _postWhere() {
      let result = [];
      let selected = this.selected;
      let parentField = this.parentField;
      if (parentField) {
        result.push(`${parentField} == null || ${parentField} == ""`);
      }
      if (selected.length) {
        for (var i = 0; i < selected.length - 1; i++) {
          result.push(`${parentField} == '${selected[i].value}'`);
        }
      }
      let where = [];
      if (this.where) {
        where.push(`(${this.where})`);
      }
      if (result.length) {
        where.push(`(${result.join(" || ")})`);
      }
      return where.join(" && ");
    },
    _nodeWhere() {
      let result = [];
      let selected = this.selected;
      if (selected.length) {
        result.push(`${this.parentField} == '${selected[selected.length - 1].value}'`);
      }
      if (this.where) {
        return `(${this.where}) && (${result.join(" || ")})`;
      }
      return result.join(" || ");
    },
    _getParentNameByField() {
      const fields = this.field.split(",");
      let where_field = null;
      for (let i = 0; i < fields.length; i++) {
        const items = fields[i].split("as");
        if (items.length < 2) {
          continue;
        }
        if (items[1].trim() === "value") {
          where_field = items[0].trim();
          break;
        }
      }
      return where_field;
    },
    _isTreeView() {
      return this.parentField && this.selfField;
    },
    _updateSelected() {
      var dl = this.dataList;
      var sl = this.selected;
      let textField = this.map.text;
      let valueField = this.map.value;
      for (var i = 0; i < sl.length; i++) {
        var value = sl[i].value;
        var dl2 = dl[i];
        for (var j = 0; j < dl2.length; j++) {
          var item2 = dl2[j];
          if (item2[valueField] === value) {
            sl[i].text = item2[textField];
            break;
          }
        }
      }
    },
    _updateBindData(node) {
      const {
        dataList,
        hasNodes
      } = this._filterData(this._treeData, this.selected);
      let isleaf = this._stepSearh === false && !hasNodes;
      if (node) {
        node.isleaf = isleaf;
      }
      this.dataList = dataList;
      this.selectedIndex = dataList.length - 1;
      if (!isleaf && this.selected.length < dataList.length) {
        this.selected.push({
          value: null,
          text: "请选择"
        });
      }
      return {
        isleaf,
        hasNodes
      };
    },
    _filterData(data, paths) {
      let dataList = [];
      let hasNodes = true;
      dataList.push(data.filter((item) => {
        return item.parent_value === null || item.parent_value === void 0 || item.parent_value === "";
      }));
      for (let i = 0; i < paths.length; i++) {
        var value = paths[i].value;
        var nodes = data.filter((item) => {
          return item.parent_value === value;
        });
        if (nodes.length) {
          dataList.push(nodes);
        } else {
          hasNodes = false;
        }
      }
      return {
        dataList,
        hasNodes
      };
    },
    _extractTree(nodes, result, parent_value) {
      let valueField = this.map.value;
      for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        let child = {};
        for (let key in node) {
          if (key !== "children") {
            child[key] = node[key];
          }
        }
        if (parent_value !== null && parent_value !== void 0 && parent_value !== "") {
          child.parent_value = parent_value;
        }
        result.push(child);
        let children = node.children;
        if (children) {
          this._extractTree(children, result, node[valueField]);
        }
      }
    },
    _extractTreePath(nodes, result) {
      for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        let child = {};
        for (let key in node) {
          if (key !== "children") {
            child[key] = node[key];
          }
        }
        result.push(child);
        let children = node.children;
        if (children) {
          this._extractTreePath(children, result);
        }
      }
    },
    _findNodePath(key, nodes, path = []) {
      let textField = this.map.text;
      let valueField = this.map.value;
      for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        let children = node.children;
        let text = node[textField];
        let value = node[valueField];
        path.push({
          value,
          text
        });
        if (value === key) {
          return path;
        }
        if (children) {
          const p = this._findNodePath(key, children, path);
          if (p.length) {
            return p;
          }
        }
        path.pop();
      }
      return [];
    },
    _processLocalData() {
      this._treeData = [];
      this._extractTree(this.localdata, this._treeData);
      var inputValue = this.dataValue;
      if (inputValue === void 0) {
        return;
      }
      if (Array.isArray(inputValue)) {
        inputValue = inputValue[inputValue.length - 1];
        if (typeof inputValue === "object" && inputValue[this.map.value]) {
          inputValue = inputValue[this.map.value];
        }
      }
      this.selected = this._findNodePath(inputValue, this.localdata);
    }
  }
};
const _style_0$4 = { "uni-data-pickerview": { "": { "flex": 1, "flexDirection": "column", "overflow": "hidden", "height": 100 } }, "error-text": { "": { "color": "#DD524D" } }, "loading-cover": { "": { "position": "absolute", "left": 0, "top": 0, "right": 0, "bottom": 0, "backgroundColor": "rgba(255,255,255,0.5)", "flexDirection": "column", "alignItems": "center", "zIndex": 1001 } }, "error-message": { "": { "backgroundColor": "#ffffff", "position": "absolute", "left": 0, "top": 0, "right": 0, "bottom": 0, "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15, "opacity": 0.9, "zIndex": 102 } }, "selected-area": { "": { "width": "750rpx" } }, "selected-list": { "": { "flexDirection": "row", "flexWrap": "nowrap", "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 5, "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#f8f8f8" } }, "selected-item": { "": { "marginLeft": 10, "marginRight": 10, "paddingTop": 12, "paddingRight": 0, "paddingBottom": 12, "paddingLeft": 0, "textAlign": "center", "fontSize": 14 } }, "selected-item-text-overflow": { "": { "width": 168, "overflow": "hidden" } }, "selected-item-active": { "": { "borderBottomWidth": 2, "borderBottomStyle": "solid", "borderBottomColor": "#007aff" } }, "selected-item-text": { "": { "color": "#007aff" } }, "tab-c": { "": { "position": "relative", "flex": 1, "flexDirection": "row", "overflow": "hidden" } }, "list": { "": { "flex": 1 } }, "item": { "": { "paddingTop": 12, "paddingRight": 15, "paddingBottom": 12, "paddingLeft": 15, "flexDirection": "row", "justifyContent": "space-between" } }, "is-disabled": { "": { "opacity": 0.5 } }, "item-text": { "": { "color": "#333333", "fontSize": 14 } }, "item-text-overflow": { "": { "width": 280, "overflow": "hidden" } }, "check": { "": { "marginRight": 5, "borderWidth": 2, "borderStyle": "solid", "borderColor": "#007aff", "borderLeftWidth": 0, "borderLeftStyle": "solid", "borderLeftColor": "#000000", "borderTopWidth": 0, "borderTopStyle": "solid", "borderTopColor": "#000000", "height": 12, "width": 6, "transformOrigin": "center", "transform": "rotate(45deg)" } } };
const _sfc_main$4 = {
  name: "UniDataPickerView",
  emits: ["nodeclick", "change", "datachange", "update:modelValue"],
  mixins: [dataPicker],
  props: {
    managedMode: {
      type: Boolean,
      default: false
    },
    ellipsis: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  created() {
    if (this.managedMode) {
      return;
    }
    this.$nextTick(() => {
      this.load();
    });
  },
  methods: {
    onPropsChange() {
      this._treeData = [];
      this.selectedIndex = 0;
      this.load();
    },
    load() {
      if (this.isLocaldata) {
        this.loadData();
      } else if (this.dataValue.length) {
        this.getTreePath((res) => {
          this.loadData();
        });
      }
    },
    handleSelect(index) {
      this.selectedIndex = index;
    },
    handleNodeClick(item, i, j) {
      if (item.disable) {
        return;
      }
      const node = this.dataList[i][j];
      const text = node[this.map.text];
      const value = node[this.map.value];
      if (i < this.selected.length - 1) {
        this.selected.splice(i, this.selected.length - i);
        this.selected.push({
          text,
          value
        });
      } else if (i === this.selected.length - 1) {
        this.selected.splice(i, 1, {
          text,
          value
        });
      }
      if (node.isleaf) {
        this.onSelectedChange(node, node.isleaf);
        return;
      }
      const {
        isleaf,
        hasNodes
      } = this._updateBindData();
      if (!this._isTreeView() && !hasNodes) {
        this.onSelectedChange(node, true);
        return;
      }
      if (this.isLocaldata && (!hasNodes || isleaf)) {
        this.onSelectedChange(node, true);
        return;
      }
      if (!isleaf && !hasNodes) {
        this._loadNodeData((data) => {
          if (!data.length) {
            node.isleaf = true;
          } else {
            this._treeData.push(...data);
            this._updateBindData(node);
          }
          this.onSelectedChange(node, node.isleaf);
        }, this._nodeWhere());
        return;
      }
      this.onSelectedChange(node, false);
    },
    updateData(data) {
      this._treeData = data.treeData;
      this.selected = data.selected;
      if (!this._treeData.length) {
        this.loadData();
      } else {
        this._updateBindData();
      }
    },
    onDataChange() {
      this.$emit("datachange");
    },
    onSelectedChange(node, isleaf) {
      if (isleaf) {
        this._dispatchEvent();
      }
      if (node) {
        this.$emit("nodeclick", node);
      }
    },
    _dispatchEvent() {
      this.$emit("change", this.selected.slice(0));
    }
  }
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_load_more = resolveEasycom(resolveDynamicComponent("uni-load-more"), __easycom_0);
  return openBlock(), createElementBlock("view", {
    class: "uni-data-pickerview",
    renderWhole: true
  }, [
    createElementVNode("scroll-view", {
      class: "selected-area",
      scrollX: "true",
      scrollY: "false",
      showScrollbar: false
    }, [
      createElementVNode("view", { class: "selected-list" }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.selected, (item, index) => {
          return openBlock(), createElementBlock(Fragment, null, [
            item.text ? (openBlock(), createElementBlock("view", {
              key: 0,
              class: normalizeClass(["selected-item", { "selected-item-active": index == _ctx.selectedIndex, "selected-item-text-overflow": $props.ellipsis }]),
              onClick: ($event) => $options.handleSelect(index)
            }, [
              createElementVNode("u-text", { class: "" }, toDisplayString(item.text), 1)
            ], 10, ["onClick"])) : createCommentVNode("", true)
          ], 64);
        }), 256))
      ])
    ]),
    createElementVNode("view", { class: "tab-c" }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dataList, (child, i) => {
        return openBlock(), createElementBlock(Fragment, null, [
          i == _ctx.selectedIndex ? (openBlock(), createElementBlock("scroll-view", {
            class: "list",
            key: i,
            scrollY: true
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(child, (item, j) => {
              return openBlock(), createElementBlock("view", {
                class: normalizeClass(["item", { "is-disabled": !!item.disable }]),
                onClick: ($event) => $options.handleNodeClick(item, i, j)
              }, [
                createElementVNode("u-text", { class: "item-text item-text-overflow" }, toDisplayString(item[_ctx.map.text]), 1),
                _ctx.selected.length > i && item[_ctx.map.value] == _ctx.selected[i].value ? (openBlock(), createElementBlock("view", {
                  key: 0,
                  class: "check"
                })) : createCommentVNode("", true)
              ], 10, ["onClick"]);
            }), 256))
          ])) : createCommentVNode("", true)
        ], 64);
      }), 256)),
      _ctx.loading ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "loading-cover"
      }, [
        createVNode(_component_uni_load_more, {
          class: "load-more",
          contentText: _ctx.loadMore,
          status: "loading"
        }, null, 8, ["contentText"])
      ])) : createCommentVNode("", true),
      _ctx.errorMessage ? (openBlock(), createElementBlock("view", {
        key: 1,
        class: "error-message"
      }, [
        createElementVNode("u-text", { class: "error-text" }, toDisplayString(_ctx.errorMessage), 1)
      ])) : createCommentVNode("", true)
    ])
  ]);
}
const DataPickerView = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["styles", [_style_0$4]]]);
const _style_0$3 = { "uni-data-tree": { "": { "flex": 1, "position": "relative", "fontSize": 16 } }, "error-text": { "": { "color": "#DD524D" } }, "input-value": { "": { "flexDirection": "row", "alignItems": "center", "flexWrap": "nowrap", "backgroundColor": "#FFFFFF", "fontSize": 16, "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 10, "overflow": "hidden", "height": 35 } }, "input-value-border": { "": { "borderWidth": 1, "borderStyle": "solid", "borderColor": "#e5e5e5", "borderRadius": 5 } }, "selected-area": { "": { "flex": 1, "overflow": "hidden", "flexDirection": "row" } }, "load-more": { "": { "width": 40 } }, "selected-list": { "": { "flexDirection": "row", "flexWrap": "nowrap" } }, "selected-item": { "": { "flexDirection": "row" } }, "text-color": { "": { "color": "#333333", "fontSize": 16 } }, "placeholder": { "": { "color": "#808080", "fontSize": 14 } }, "input-split-line": { "": { "opacity": 0.5 } }, "arrow-area": { "": { "position": "relative", "width": 20, "height": 20, "justifyContent": "center", "alignItems": "center" } }, "input-arrow": { "": { "width": 7, "height": 7, "borderLeftWidth": 1, "borderLeftStyle": "solid", "borderLeftColor": "#999999", "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#999999", "transform": "rotate(-45deg)", "transformOrigin": "center" } }, "uni-data-tree-cover": { "": { "position": "fixed", "left": 0, "top": 0, "right": 0, "bottom": 0, "backgroundColor": "rgba(0,0,0,0.4)", "flexDirection": "column", "zIndex": 100 } }, "uni-data-tree-dialog": { "": { "position": "fixed", "left": 0, "top": 20, "right": 0, "bottom": 0, "backgroundColor": "#FFFFFF", "borderTopLeftRadius": 10, "borderTopRightRadius": 10, "flexDirection": "column", "zIndex": 102, "overflow": "hidden", "width": "750rpx" } }, "dialog-caption": { "": { "position": "relative", "flexDirection": "row" } }, "title-area": { "": { "alignItems": "center", "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10 } }, "dialog-title": { "": { "lineHeight": 44 } }, "dialog-close": { "": { "position": "absolute", "top": 0, "right": 0, "bottom": 0, "flexDirection": "row", "alignItems": "center", "paddingTop": 0, "paddingRight": 15, "paddingBottom": 0, "paddingLeft": 15 } }, "dialog-close-plus": { "": { "width": 16, "height": 2, "backgroundColor": "#666666", "borderRadius": 2, "transform": "rotate(45deg)" } }, "dialog-close-rotate": { "": { "position": "absolute", "transform": "rotate(-45deg)" } }, "picker-view": { "": { "flex": 1, "overflow": "hidden" } }, "icon-clear": { "": { "display": "flex", "alignItems": "center" } }, "@FONT-FACE": [{ "uni-data-tree-cover": { "": { "backgroundColor": "rgba(0,0,0,0)" } }, "uni-data-tree-dialog": { "": { "position": "absolute", "top": 55, "minHeight": "400px", "maxHeight": 50, "backgroundColor": "#ffffff", "borderWidth": 1, "borderStyle": "solid", "borderColor": "#EBEEF5", "boxShadow": "0 2px 12px 0 rgba(0, 0, 0, 0.1)", "borderRadius": 4 } } }] };
const _sfc_main$3 = {
  name: "UniDataPicker",
  emits: ["popupopened", "popupclosed", "nodeclick", "input", "change", "update:modelValue"],
  mixins: [dataPicker],
  components: {
    DataPickerView
  },
  props: {
    options: {
      type: [Object, Array],
      default() {
        return {};
      }
    },
    popupTitle: {
      type: String,
      default: "请选择"
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    heightMobile: {
      type: String,
      default: ""
    },
    readonly: {
      type: Boolean,
      default: false
    },
    clearIcon: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    },
    split: {
      type: String,
      default: "/"
    },
    ellipsis: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isOpened: false,
      inputSelected: []
    };
  },
  created() {
    this.form = this.getForm("uniForms");
    this.formItem = this.getForm("uniFormsItem");
    if (this.formItem) {
      if (this.formItem.name) {
        this.rename = this.formItem.name;
        this.form.inputChildrens.push(this);
      }
    }
    this.$nextTick(() => {
      this.load();
    });
  },
  methods: {
    clear() {
      this.inputSelected.splice(0);
      this._dispatchEvent([]);
    },
    onPropsChange() {
      this._treeData = [];
      this.selectedIndex = 0;
      this.load();
    },
    load() {
      if (this.readonly) {
        this._processReadonly(this.localdata, this.dataValue);
        return;
      }
      if (this.isLocaldata) {
        this.loadData();
        this.inputSelected = this.selected.slice(0);
      } else if (!this.parentField && !this.selfField && this.hasValue) {
        this.getNodeData(() => {
          this.inputSelected = this.selected.slice(0);
        });
      } else if (this.hasValue) {
        this.getTreePath(() => {
          this.inputSelected = this.selected.slice(0);
        });
      }
    },
    getForm(name = "uniForms") {
      let parent = this.$parent;
      let parentName = parent.$options.name;
      while (parentName !== name) {
        parent = parent.$parent;
        if (!parent)
          return false;
        parentName = parent.$options.name;
      }
      return parent;
    },
    show() {
      this.isOpened = true;
      setTimeout(() => {
        this.$refs.pickerView.updateData({
          treeData: this._treeData,
          selected: this.selected,
          selectedIndex: this.selectedIndex
        });
      }, 200);
      this.$emit("popupopened");
    },
    hide() {
      this.isOpened = false;
      this.$emit("popupclosed");
    },
    handleInput() {
      if (this.readonly) {
        return;
      }
      this.show();
    },
    handleClose(e) {
      this.hide();
    },
    onnodeclick(e) {
      this.$emit("nodeclick", e);
    },
    ondatachange(e) {
      this._treeData = this.$refs.pickerView._treeData;
    },
    onchange(e) {
      this.hide();
      this.$nextTick(() => {
        this.inputSelected = e;
      });
      this._dispatchEvent(e);
    },
    _processReadonly(dataList, value) {
      var isTree = dataList.findIndex((item2) => {
        return item2.children;
      });
      if (isTree > -1) {
        let inputValue;
        if (Array.isArray(value)) {
          inputValue = value[value.length - 1];
          if (typeof inputValue === "object" && inputValue.value) {
            inputValue = inputValue.value;
          }
        } else {
          inputValue = value;
        }
        this.inputSelected = this._findNodePath(inputValue, this.localdata);
        return;
      }
      if (!this.hasValue) {
        this.inputSelected = [];
        return;
      }
      let result = [];
      for (let i = 0; i < value.length; i++) {
        var val = value[i];
        var item = dataList.find((v) => {
          return v.value == val;
        });
        if (item) {
          result.push(item);
        }
      }
      if (result.length) {
        this.inputSelected = result;
      }
    },
    _filterForArray(data, valueArray) {
      var result = [];
      for (let i = 0; i < valueArray.length; i++) {
        var value = valueArray[i];
        var found = data.find((item) => {
          return item.value == value;
        });
        if (found) {
          result.push(found);
        }
      }
      return result;
    },
    _dispatchEvent(selected) {
      let item = {};
      if (selected.length) {
        var value = new Array(selected.length);
        for (var i = 0; i < selected.length; i++) {
          value[i] = selected[i].value;
        }
        item = selected[selected.length - 1];
      } else {
        item.value = "";
      }
      if (this.formItem) {
        this.formItem.setValue(item.value);
      }
      this.$emit("input", item.value);
      this.$emit("update:modelValue", item.value);
      this.$emit("change", {
        detail: {
          value: selected
        }
      });
    }
  }
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_load_more = resolveEasycom(resolveDynamicComponent("uni-load-more"), __easycom_0);
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_1$1);
  const _component_data_picker_view = resolveComponent("data-picker-view");
  return openBlock(), createElementBlock("view", {
    class: "uni-data-tree",
    renderWhole: true
  }, [
    createElementVNode("view", {
      class: "uni-data-tree-input",
      onClick: _cache[2] || (_cache[2] = (...args) => $options.handleInput && $options.handleInput(...args))
    }, [
      renderSlot(_ctx.$slots, "default", {
        options: $props.options,
        data: $data.inputSelected,
        error: _ctx.errorMessage
      }, () => [
        createElementVNode("view", {
          class: normalizeClass(["input-value", { "input-value-border": $props.border }])
        }, [
          _ctx.errorMessage ? (openBlock(), createElementBlock("u-text", {
            key: 0,
            class: "selected-area error-text"
          }, toDisplayString(_ctx.errorMessage), 1)) : _ctx.loading && !$data.isOpened ? (openBlock(), createElementBlock("view", {
            key: 1,
            class: "selected-area"
          }, [
            createVNode(_component_uni_load_more, {
              class: "load-more",
              contentText: _ctx.loadMore,
              status: "loading"
            }, null, 8, ["contentText"])
          ])) : $data.inputSelected.length ? (openBlock(), createElementBlock("scroll-view", {
            key: 2,
            class: "selected-area",
            scrollX: "true"
          }, [
            createElementVNode("view", {
              class: "selected-list",
              onClick: _cache[0] || (_cache[0] = (...args) => $options.handleInput && $options.handleInput(...args))
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($data.inputSelected, (item, index) => {
                return openBlock(), createElementBlock("view", {
                  class: "selected-item",
                  key: index
                }, [
                  createElementVNode("u-text", { class: "text-color" }, toDisplayString(item.text), 1),
                  index < $data.inputSelected.length - 1 ? (openBlock(), createElementBlock("u-text", {
                    key: 0,
                    class: "input-split-line"
                  }, toDisplayString($props.split), 1)) : createCommentVNode("", true)
                ]);
              }), 128))
            ])
          ])) : (openBlock(), createElementBlock("u-text", {
            key: 3,
            class: "selected-area placeholder"
          }, toDisplayString($props.placeholder), 1)),
          $props.clearIcon && !$props.readonly && $data.inputSelected.length ? (openBlock(), createElementBlock("view", {
            key: 4,
            class: "icon-clear",
            onClick: _cache[1] || (_cache[1] = withModifiers((...args) => $options.clear && $options.clear(...args), ["stop"]))
          }, [
            createVNode(_component_uni_icons, {
              type: "clear",
              color: "#c0c4cc",
              size: "24"
            })
          ])) : createCommentVNode("", true),
          (!$props.clearIcon || !$data.inputSelected.length) && !$props.readonly ? (openBlock(), createElementBlock("view", {
            key: 5,
            class: "arrow-area"
          }, [
            createElementVNode("view", { class: "input-arrow" })
          ])) : createCommentVNode("", true)
        ], 2)
      ])
    ]),
    $data.isOpened ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: "uni-data-tree-cover",
      onClick: _cache[3] || (_cache[3] = (...args) => $options.handleClose && $options.handleClose(...args))
    })) : createCommentVNode("", true),
    $data.isOpened ? (openBlock(), createElementBlock("view", {
      key: 1,
      class: "uni-data-tree-dialog"
    }, [
      createElementVNode("view", { class: "uni-popper__arrow" }),
      createElementVNode("view", { class: "dialog-caption" }, [
        createElementVNode("view", { class: "title-area" }, [
          createElementVNode("u-text", { class: "dialog-title" }, toDisplayString($props.popupTitle), 1)
        ]),
        createElementVNode("view", {
          class: "dialog-close",
          onClick: _cache[4] || (_cache[4] = (...args) => $options.handleClose && $options.handleClose(...args))
        }, [
          createElementVNode("view", {
            class: "dialog-close-plus",
            "data-id": "close"
          }),
          createElementVNode("view", {
            class: "dialog-close-plus dialog-close-rotate",
            "data-id": "close"
          })
        ])
      ]),
      createVNode(_component_data_picker_view, {
        class: "picker-view",
        ref: "pickerView",
        modelValue: _ctx.dataValue,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.dataValue = $event),
        localdata: _ctx.localdata,
        preload: _ctx.preload,
        collection: _ctx.collection,
        field: _ctx.field,
        orderby: _ctx.orderby,
        where: _ctx.where,
        "step-searh": _ctx.stepSearh,
        "self-field": _ctx.selfField,
        "parent-field": _ctx.parentField,
        "managed-mode": true,
        map: _ctx.map,
        ellipsis: $props.ellipsis,
        onChange: $options.onchange,
        onDatachange: $options.ondatachange,
        onNodeclick: $options.onnodeclick
      }, null, 8, ["modelValue", "localdata", "preload", "collection", "field", "orderby", "where", "step-searh", "self-field", "parent-field", "map", "ellipsis", "onChange", "onDatachange", "onNodeclick"])
    ])) : createCommentVNode("", true)
  ]);
}
const __easycom_6 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["styles", [_style_0$3]]]);
const _style_0$2 = { "uni-section": { "": { "backgroundColor": "#ffffff" } }, "uni-section-header": { ".uni-section ": { "position": "relative", "flexDirection": "row", "alignItems": "center", "paddingTop": 12, "paddingRight": 10, "paddingBottom": 12, "paddingLeft": 10, "fontWeight": "normal" } }, "uni-section-header__decoration": { ".uni-section ": { "marginRight": 6, "backgroundColor": "#2979ff" }, ".uni-section .line": { "width": 4, "height": 12, "borderRadius": 10 }, ".uni-section .circle": { "width": 8, "height": 8, "borderTopRightRadius": 50, "borderTopLeftRadius": 50, "borderBottomLeftRadius": 50, "borderBottomRightRadius": 50 }, ".uni-section .square": { "width": 8, "height": 8 } }, "uni-section-header__content": { ".uni-section ": { "flexDirection": "column", "flex": 1, "color": "#333333" } }, "distraction": { ".uni-section .uni-section-header__content ": { "flexDirection": "row", "alignItems": "center" } }, "uni-section-header__content-sub": { ".uni-section ": { "marginTop": 2 } }, "uni-section-header__slot-right": { ".uni-section ": { "fontSize": 14 } }, "uni-section-content": { ".uni-section ": { "fontSize": 14 } } };
const _sfc_main$2 = {
  name: "UniSection",
  emits: ["click"],
  props: {
    type: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      required: true,
      default: ""
    },
    titleFontSize: {
      type: String,
      default: "14px"
    },
    titleColor: {
      type: String,
      default: "#333"
    },
    subTitle: {
      type: String,
      default: ""
    },
    subTitleFontSize: {
      type: String,
      default: "12px"
    },
    subTitleColor: {
      type: String,
      default: "#999"
    },
    padding: {
      type: [Boolean, String],
      default: false
    }
  },
  computed: {
    _padding() {
      if (typeof this.padding === "string") {
        return this.padding;
      }
      return this.padding ? "10px" : "";
    }
  },
  watch: {
    title(newVal) {
      if (uni.report && newVal !== "") {
        uni.report("title", newVal);
      }
    }
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "uni-section",
    renderWhole: true
  }, [
    createElementVNode("view", {
      class: "uni-section-header",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      $props.type ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: normalizeClass(["uni-section-header__decoration", $props.type])
      }, null, 2)) : renderSlot(_ctx.$slots, "decoration", { key: 1 }),
      createElementVNode("view", { class: "uni-section-header__content" }, [
        createElementVNode("u-text", {
          style: normalizeStyle({ "font-size": $props.titleFontSize, "color": $props.titleColor }),
          class: normalizeClass(["uni-section__content-title", { "distraction": !$props.subTitle }])
        }, toDisplayString($props.title), 7),
        $props.subTitle ? (openBlock(), createElementBlock("u-text", {
          key: 0,
          style: normalizeStyle({ "font-size": $props.subTitleFontSize, "color": $props.subTitleColor }),
          class: "uni-section-header__content-sub"
        }, toDisplayString($props.subTitle), 5)) : createCommentVNode("", true)
      ]),
      createElementVNode("view", { class: "uni-section-header__slot-right" }, [
        renderSlot(_ctx.$slots, "right")
      ])
    ]),
    createElementVNode("view", {
      class: "uni-section-content",
      style: normalizeStyle({ padding: $options._padding })
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 4)
  ]);
}
const __easycom_8 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]]]);
const _style_0$1 = { "segmented-control": { "": { "flexDirection": "row", "height": 36, "overflow": "hidden" } }, "segmented-control__item": { "": { "position": "relative", "flex": 1, "justifyContent": "center", "alignItems": "center" } }, "segmented-control__item--button": { "": { "borderStyle": "solid", "borderTopWidth": 1, "borderBottomWidth": 1, "borderRightWidth": 1, "borderLeftWidth": 0 } }, "segmented-control__item--button--first": { "": { "borderLeftWidth": 1, "borderTopLeftRadius": 5, "borderBottomLeftRadius": 5 } }, "segmented-control__item--button--last": { "": { "borderTopRightRadius": 5, "borderBottomRightRadius": 5 } }, "segmented-control__item--text": { "": { "borderBottomStyle": "solid", "borderBottomWidth": 2, "paddingTop": 6, "paddingRight": 0, "paddingBottom": 6, "paddingLeft": 0 } }, "segmented-control__text": { "": { "fontSize": 14, "lineHeight": 20, "textAlign": "center" } } };
const _sfc_main$1 = {
  name: "UniSegmentedControl",
  emits: ["clickItem"],
  props: {
    current: {
      type: Number,
      default: 0
    },
    values: {
      type: Array,
      default() {
        return [];
      }
    },
    activeColor: {
      type: String,
      default: "#2979FF"
    },
    styleType: {
      type: String,
      default: "button"
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  watch: {
    current(val) {
      if (val !== this.currentIndex) {
        this.currentIndex = val;
      }
    }
  },
  created() {
    this.currentIndex = this.current;
  },
  methods: {
    _onClick(index) {
      if (this.currentIndex !== index) {
        this.currentIndex = index;
        this.$emit("clickItem", {
          currentIndex: index
        });
      }
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: normalizeClass([[$props.styleType === "text" ? "segmented-control--text" : "segmented-control--button"], "segmented-control"]),
    style: normalizeStyle({ borderColor: $props.styleType === "text" ? "" : $props.activeColor }),
    renderWhole: true
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.values, (item, index) => {
      return openBlock(), createElementBlock("view", {
        class: normalizeClass([[
          $props.styleType === "text" ? "" : "segmented-control__item--button",
          index === $data.currentIndex && $props.styleType === "button" ? "segmented-control__item--button--active" : "",
          index === 0 && $props.styleType === "button" ? "segmented-control__item--button--first" : "",
          index === $props.values.length - 1 && $props.styleType === "button" ? "segmented-control__item--button--last" : ""
        ], "segmented-control__item"]),
        key: index,
        style: normalizeStyle({ backgroundColor: index === $data.currentIndex && $props.styleType === "button" ? $props.activeColor : "", borderColor: index === $data.currentIndex && $props.styleType === "text" || $props.styleType === "button" ? $props.activeColor : "transparent" }),
        onClick: ($event) => $options._onClick(index)
      }, [
        createElementVNode("view", null, [
          createElementVNode("u-text", {
            style: normalizeStyle({ color: index === $data.currentIndex ? $props.styleType === "text" ? $props.activeColor : "#fff" : $props.styleType === "text" ? "#000" : $props.activeColor }),
            class: normalizeClass(["segmented-control__text", $props.styleType === "text" && index === $data.currentIndex ? "segmented-control__item--text" : ""])
          }, toDisplayString(item), 7)
        ])
      ], 14, ["onClick"]);
    }), 128))
  ], 6);
}
const __easycom_9 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]]]);
const _style_0 = { "example": { "": { "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15, "backgroundColor": "#ffffff" } }, "segmented-control": { "": { "marginBottom": 15 } }, "button-group": { "": { "marginTop": 15, "display": "flex", "justifyContent": "space-around" } }, "form-item": { "": { "display": "flex", "alignItems": "center", "flex": 1 } }, "button": { "": { "display": "flex", "alignItems": "center", "height": 35, "lineHeight": 35, "marginLeft": 10 } } };
const _sfc_main = {
  data() {
    return {
      // 基础表单数据
      baseFormData: {
        name: "",
        age: "",
        introduction: "",
        sex: 2,
        hobby: [5],
        datetimesingle: 1627529992399,
        city: "",
        skills: 0
      },
      // 城市数据
      cityData: [{
        text: "北京",
        value: "10001"
      }, {
        text: "上海",
        value: "10002"
      }, {
        text: "深圳",
        value: "10004"
      }],
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
      ],
      // 表单数据
      alignmentFormData: {
        name: "",
        age: ""
      },
      // 单选数据源
      sexs: [{
        text: "男",
        value: 0
      }, {
        text: "女",
        value: 1
      }, {
        text: "保密",
        value: 2
      }],
      // 多选数据源
      hobbys: [{
        text: "跑步",
        value: 0
      }, {
        text: "游泳",
        value: 1
      }, {
        text: "绘画",
        value: 2
      }, {
        text: "足球",
        value: 3
      }, {
        text: "篮球",
        value: 4
      }, {
        text: "其他",
        value: 5
      }],
      // 分段器数据
      current: 0,
      items: ["左对齐", "顶部对齐"],
      // 校验表单数据
      valiFormData: {
        name: "",
        age: "",
        introduction: ""
      },
      // 校验规则
      rules: {
        name: {
          rules: [{
            required: true,
            errorMessage: "姓名不能为空"
          }]
        },
        age: {
          rules: [{
            required: true,
            errorMessage: "年龄不能为空"
          }, {
            format: "number",
            errorMessage: "年龄只能输入数字"
          }]
        }
      },
      // 自定义表单数据
      customFormData: {
        name: "",
        age: "",
        hobby: []
      },
      // 自定义表单校验规则
      customRules: {
        name: {
          rules: [{
            required: true,
            errorMessage: "姓名不能为空"
          }]
        },
        age: {
          rules: [{
            required: true,
            errorMessage: "年龄不能为空"
          }]
        },
        hobby: {
          rules: [
            {
              format: "array"
            },
            {
              validateFunction: function(rule, value, data, callback) {
                if (value.length < 2) {
                  callback("请至少勾选两个兴趣爱好");
                }
                return true;
              }
            }
          ]
        }
      },
      dynamicFormData: {
        email: "",
        domains: []
      },
      dynamicLists: [],
      dynamicRules: {
        email: {
          rules: [{
            required: true,
            errorMessage: "域名不能为空"
          }, {
            format: "email",
            errorMessage: "域名格式错误"
          }]
        }
      }
    };
  },
  computed: {
    // 处理表单排列切换
    alignment() {
      if (this.current === 0)
        return "left";
      if (this.current === 1)
        return "top";
      return "left";
    }
  },
  onLoad() {
  },
  onReady() {
    this.$refs.customForm.setRules(this.customRules);
  },
  methods: {
    onClickItem(e) {
      formatAppLog("log", "at pages/sample/form-ndemo.nvue:296", e);
      this.current = e.currentIndex;
    },
    add() {
      this.dynamicFormData.domains.push({
        label: "域名",
        value: "",
        rules: [{
          "required": true,
          errorMessage: "域名项必填"
        }],
        id: Date.now()
      });
    },
    del(id) {
      let index = this.dynamicLists.findIndex((v) => v.id === id);
      this.dynamicLists.splice(index, 1);
    },
    submit(ref) {
      formatAppLog("log", "at pages/sample/form-ndemo.nvue:315", this.baseFormData);
      this.$refs[ref].validate().then((res) => {
        formatAppLog("log", "at pages/sample/form-ndemo.nvue:317", "success", res);
        uni.showToast({
          title: `校验通过`
        });
      }).catch((err) => {
        formatAppLog("log", "at pages/sample/form-ndemo.nvue:322", "err", err);
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_data_select = resolveEasycom(resolveDynamicComponent("uni-data-select"), __easycom_0$1);
  const _component_uni_card = resolveEasycom(resolveDynamicComponent("uni-card"), __easycom_1);
  const _component_uni_easyinput = resolveEasycom(resolveDynamicComponent("uni-easyinput"), __easycom_1$2);
  const _component_uni_forms_item = resolveEasycom(resolveDynamicComponent("uni-forms-item"), __easycom_1$3);
  const _component_uni_data_checkbox = resolveEasycom(resolveDynamicComponent("uni-data-checkbox"), __easycom_4);
  const _component_uni_datetime_picker = resolveEasycom(resolveDynamicComponent("uni-datetime-picker"), __easycom_5);
  const _component_uni_data_picker = resolveEasycom(resolveDynamicComponent("uni-data-picker"), __easycom_6);
  const _component_uni_forms = resolveEasycom(resolveDynamicComponent("uni-forms"), __easycom_3);
  const _component_uni_section = resolveEasycom(resolveDynamicComponent("uni-section"), __easycom_8);
  const _component_uni_segmented_control = resolveEasycom(resolveDynamicComponent("uni-segmented-control"), __easycom_9);
  const _component_button = resolveComponent("button");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "container" }, [
      createElementVNode("u-text", null, "NVUE"),
      createVNode(_component_uni_data_select, {
        modelValue: _ctx.skills,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.skills = $event),
        localdata: $data.skillsRange
      }, null, 8, ["modelValue", "localdata"]),
      createVNode(_component_uni_card, {
        "is-shadow": false,
        "is-full": ""
      }, {
        default: withCtx(() => [
          createElementVNode("u-text", { class: "uni-h6" }, "uni-forms 组件一般由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据。")
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "基本用法",
        type: "line"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "example" }, [
            createVNode(_component_uni_forms, {
              ref: "baseForm",
              model: $data.baseFormData,
              labelWidth: "80px"
            }, {
              default: withCtx(() => [
                createVNode(_component_uni_forms_item, {
                  label: "姓名",
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_uni_easyinput, {
                      modelValue: $data.baseFormData.name,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.baseFormData.name = $event),
                      placeholder: "请输入姓名"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_uni_forms_item, {
                  label: "年龄",
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_uni_easyinput, {
                      modelValue: $data.baseFormData.age,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.baseFormData.age = $event),
                      placeholder: "请输入年龄"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_uni_forms_item, {
                  label: "性别",
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_uni_data_checkbox, {
                      modelValue: $data.baseFormData.sex,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.baseFormData.sex = $event),
                      localdata: $data.sexs
                    }, null, 8, ["modelValue", "localdata"])
                  ]),
                  _: 1
                }),
                createVNode(_component_uni_forms_item, {
                  label: "兴趣爱好",
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_uni_data_checkbox, {
                      modelValue: $data.baseFormData.hobby,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.baseFormData.hobby = $event),
                      multiple: "",
                      localdata: $data.hobbys
                    }, null, 8, ["modelValue", "localdata"])
                  ]),
                  _: 1
                }),
                createVNode(_component_uni_forms_item, { label: "自我介绍" }, {
                  default: withCtx(() => [
                    createVNode(_component_uni_easyinput, {
                      type: "textarea",
                      modelValue: $data.baseFormData.introduction,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.baseFormData.introduction = $event),
                      placeholder: "请输入自我介绍"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_uni_forms_item, { label: "日期时间" }, {
                  default: withCtx(() => [
                    createVNode(_component_uni_datetime_picker, {
                      type: "datetime",
                      "return-type": "timestamp",
                      modelValue: $data.baseFormData.datetimesingle,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.baseFormData.datetimesingle = $event)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_uni_forms_item, { label: "选择城市" }, {
                  default: withCtx(() => [
                    createVNode(_component_uni_data_picker, {
                      modelValue: $data.baseFormData.city,
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.baseFormData.city = $event),
                      localdata: $data.cityData,
                      "popup-title": "选择城市"
                    }, null, 8, ["modelValue", "localdata"])
                  ]),
                  _: 1
                }),
                createVNode(_component_uni_forms_item, { label: "选择技能" }, {
                  default: withCtx(() => [
                    createVNode(_component_uni_data_select, {
                      modelValue: $data.baseFormData.skills,
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.baseFormData.skills = $event),
                      localdata: $data.skillsRange
                    }, null, 8, ["modelValue", "localdata"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model"])
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "对齐方式",
        type: "line"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "example" }, [
            createElementVNode("view", { class: "segmented-control" }, [
              createVNode(_component_uni_segmented_control, {
                current: $data.current,
                values: $data.items,
                onClickItem: $options.onClickItem,
                styleType: "button"
              }, null, 8, ["current", "values", "onClickItem"])
            ]),
            createVNode(_component_uni_forms, {
              ref: "baseForm",
              modelValue: $data.alignmentFormData,
              "label-position": $options.alignment
            }, {
              default: withCtx(() => [
                createVNode(_component_uni_forms_item, {
                  label: "姓名",
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_uni_easyinput, {
                      modelValue: $data.baseFormData.name,
                      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.baseFormData.name = $event),
                      placeholder: "请输入姓名"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_uni_forms_item, {
                  label: "年龄",
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_uni_easyinput, {
                      modelValue: $data.baseFormData.age,
                      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $data.baseFormData.age = $event),
                      placeholder: "请输入年龄"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["modelValue", "label-position"])
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "表单校验",
        type: "line"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "example" }, [
            createVNode(_component_uni_forms, {
              ref: "valiForm",
              rules: $data.rules,
              model: $data.valiFormData,
              labelWidth: "80px"
            }, {
              default: withCtx(() => [
                createVNode(_component_uni_forms_item, {
                  label: "姓名",
                  required: "",
                  name: "name"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_uni_easyinput, {
                      modelValue: $data.valiFormData.name,
                      "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $data.valiFormData.name = $event),
                      placeholder: "请输入姓名"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_uni_forms_item, {
                  label: "年龄",
                  required: "",
                  name: "age"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_uni_easyinput, {
                      modelValue: $data.valiFormData.age,
                      "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $data.valiFormData.age = $event),
                      placeholder: "请输入年龄"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_uni_forms_item, { label: "自我介绍" }, {
                  default: withCtx(() => [
                    createVNode(_component_uni_easyinput, {
                      type: "textarea",
                      modelValue: $data.valiFormData.introduction,
                      "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $data.valiFormData.introduction = $event),
                      placeholder: "请输入自我介绍"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["rules", "model"]),
            createVNode(_component_button, {
              type: "primary",
              onClick: _cache[14] || (_cache[14] = ($event) => $options.submit("valiForm"))
            }, {
              default: withCtx(() => [
                createTextVNode("提交")
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "自定义校验规则",
        type: "line"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "example" }, [
            createVNode(_component_uni_forms, {
              ref: "customForm",
              rules: $data.customRules,
              labelWidth: "80px",
              modelValue: $data.customFormData
            }, {
              default: withCtx(() => [
                createVNode(_component_uni_forms_item, {
                  label: "姓名",
                  required: "",
                  name: "name"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_uni_easyinput, {
                      modelValue: $data.customFormData.name,
                      "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $data.customFormData.name = $event),
                      placeholder: "请输入姓名"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_uni_forms_item, {
                  label: "年龄",
                  required: "",
                  name: "age"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_uni_easyinput, {
                      modelValue: $data.customFormData.age,
                      "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => $data.customFormData.age = $event),
                      placeholder: "请输入年龄"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_uni_forms_item, {
                  label: "兴趣爱好",
                  required: "",
                  name: "hobby"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_uni_data_checkbox, {
                      modelValue: $data.customFormData.hobby,
                      "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => $data.customFormData.hobby = $event),
                      multiple: "",
                      localdata: $data.hobbys
                    }, null, 8, ["modelValue", "localdata"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["rules", "modelValue"]),
            createVNode(_component_button, {
              type: "primary",
              onClick: _cache[18] || (_cache[18] = ($event) => $options.submit("customForm"))
            }, {
              default: withCtx(() => [
                createTextVNode("提交")
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "动态表单",
        type: "line"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "example" }, [
            createVNode(_component_uni_forms, {
              ref: "dynamicForm",
              rules: $data.dynamicRules,
              model: $data.dynamicFormData,
              labelWidth: "80px"
            }, {
              default: withCtx(() => [
                createVNode(_component_uni_forms_item, {
                  label: "邮箱",
                  required: "",
                  name: "email"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_uni_easyinput, {
                      modelValue: $data.dynamicFormData.email,
                      "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => $data.dynamicFormData.email = $event),
                      placeholder: "请输入姓名"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                (openBlock(true), createElementBlock(Fragment, null, renderList($data.dynamicFormData.domains, (item, index) => {
                  return openBlock(), createBlock(_component_uni_forms_item, {
                    key: item.id,
                    label: item.label + " " + index,
                    required: "",
                    rules: item.rules,
                    name: ["domains", index, "value"]
                  }, {
                    default: withCtx(() => [
                      createElementVNode("view", { class: "form-item" }, [
                        createVNode(_component_uni_easyinput, {
                          modelValue: $data.dynamicFormData.domains[index].value,
                          "onUpdate:modelValue": ($event) => $data.dynamicFormData.domains[index].value = $event,
                          placeholder: "请输入域名"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_button, {
                          class: "button",
                          size: "mini",
                          type: "default",
                          onClick: ($event) => $options.del(item.id)
                        }, {
                          default: withCtx(() => [
                            createTextVNode("删除")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["label", "rules", "name"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["rules", "model"]),
            createElementVNode("view", { class: "button-group" }, [
              createVNode(_component_button, {
                type: "primary",
                size: "mini",
                onClick: $options.add
              }, {
                default: withCtx(() => [
                  createTextVNode("新增域名")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_button, {
                type: "primary",
                size: "mini",
                onClick: _cache[20] || (_cache[20] = ($event) => $options.submit("dynamicForm"))
              }, {
                default: withCtx(() => [
                  createTextVNode("提交")
                ]),
                _: 1
              })
            ])
          ])
        ]),
        _: 1
      })
    ])
  ]);
}
const formNdemo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  formNdemo as default
};
