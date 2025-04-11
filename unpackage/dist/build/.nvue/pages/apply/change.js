import { f as formatAppLog, r as resolveEasycom } from "../../uni-app.es.js";
import { _ as __easycom_0 } from "../../content-bg.js";
import { resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, createBlock, withCtx, createTextVNode } from "vue";
import { _ as __easycom_1 } from "../../breadcrumb.js";
import { _ as __easycom_2 } from "../../action-table.js";
import { _ as __easycom_3 } from "../../empty-view.js";
import { r as requestApi, a as apis } from "../../http.js";
import { c as applyChangeTableMapper, d as applyChangeDetailMapper } from "../../tableMappers.js";
import { u as userInactiveMixin } from "../../userInactiveMixin.js";
import { _ as _imports_0 } from "../../Home.js";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
const _style_0 = { "change_content-backbtns": { ".change_content ": { "marginTop": 10, "marginRight": 0, "marginBottom": 10, "marginLeft": 0, "display": "flex", "flexDirection": "row", "justifyContent": "space-between" } }, "change_content-backbtn": { ".change_content .change_content-backbtns ": { "width": 100, "backgroundColor": "#006AEC" } } };
const _sfc_main = {
  mixins: [userInactiveMixin],
  data() {
    return {
      tableMapper: applyChangeTableMapper,
      activitys: []
    };
  },
  computed: {
    token() {
      return this.$store.getters.token;
    }
  },
  onLoad(options) {
    this.idnum = options.idnum;
  },
  onShow() {
    this.getActivitys();
  },
  methods: {
    getActivitys() {
      uni.showLoading();
      requestApi(apis.getNewRelocate, {
        id_num: this.idnum
      }, {
        token: this.token
      }).then((data) => {
        uni.hideLoading();
        this.activitys = data;
      }).catch((err) => {
        uni.showToast({
          title: err,
          icon: "none"
        });
      });
    },
    viewBtnClick(index) {
      const act = this.activitys[index];
      formatAppLog("log", "at pages/apply/change.nvue:67", act);
      this.$store.commit("setDetailData", {
        name: "变更详情",
        data: act,
        detailMapper: applyChangeDetailMapper
      });
      uni.navigateTo({
        url: "/pages/compound/detail?onlyView=true",
        animationType: "none"
      });
    },
    applyClick() {
      uni.navigateTo({
        // url: '/pages/apply/do?idnum=' + this.idnum,
        url: "/pages/blank/blank?idnum=" + this.idnum + "&target=/pages/apply/do",
        animationType: "none"
      });
    },
    homeClick() {
      uni.reLaunch({
        url: "/pages/home/home"
      });
    },
    backClick() {
      uni.navigateBack();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_content_bg = resolveEasycom(resolveDynamicComponent("content-bg"), __easycom_0);
  const _component_breadcrumb = resolveEasycom(resolveDynamicComponent("breadcrumb"), __easycom_1);
  const _component_action_table = resolveEasycom(resolveDynamicComponent("action-table"), __easycom_2);
  const _component_empty_view = resolveEasycom(resolveDynamicComponent("empty-view"), __easycom_3);
  const _component_button = resolveComponent("button");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", {
      class: "content",
      onClick: _cache[1] || (_cache[1] = (...args) => _ctx.capture && _ctx.capture(...args)),
      onTouchmove: _cache[2] || (_cache[2] = (...args) => _ctx.capture && _ctx.capture(...args))
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
      createElementVNode("view", { class: "content-c change_content" }, [
        createVNode(_component_breadcrumb, {
          title: "自助申请自助打印",
          actionTitle: "执行地变更"
        }),
        $data.activitys.length > 0 ? (openBlock(), createBlock(_component_action_table, {
          key: 0,
          tableMapper: $data.tableMapper,
          tableData: $data.activitys,
          onViewBtnClick: $options.viewBtnClick
        }, null, 8, ["tableMapper", "tableData", "onViewBtnClick"])) : (openBlock(), createBlock(_component_empty_view, {
          key: 1,
          text: "当前无申请",
          action: false,
          onApplyClick: $options.applyClick
        }, null, 8, ["onApplyClick"])),
        createElementVNode("view", { class: "change_content-backbtns" }, [
          createVNode(_component_button, {
            class: "change_content-backbtn",
            type: "primary",
            onClick: $options.applyClick
          }, {
            default: withCtx(() => [
              createTextVNode("申请")
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_button, {
            class: "change_content-backbtn",
            type: "primary",
            onClick: $options.backClick
          }, {
            default: withCtx(() => [
              createTextVNode("返回")
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ])
    ], 32)
  ]);
}
const change = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  change as default
};
