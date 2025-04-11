import { f as formatAppLog, r as resolveEasycom } from "../../uni-app.es.js";
import { _ as __easycom_0 } from "../../content-bg.js";
import { resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, createBlock, withCtx, createTextVNode } from "vue";
import { _ as __easycom_1 } from "../../breadcrumb.js";
import { _ as __easycom_2 } from "../../action-table.js";
import { _ as __easycom_3 } from "../../empty-view.js";
import { a as apis, r as requestApi } from "../../http.js";
import { s as signTableMapper, i as signDetailMapper, j as studyTableMapper, k as studyDetailMapper, w as warningTableMapper, m as warningDetailMapper, n as adviseTableMapper, o as adviseDetailMapper, p as evaluatingTableMapper, q as evaluatingDetailMapper, l as leaveTableMapper, e as leaveDetailMapper } from "../../tableMappers.js";
import { u as userInactiveMixin } from "../../userInactiveMixin.js";
import { _ as _imports_0 } from "../../Home.js";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
const queryTypeMapper = {
  sign: {
    table: signTableMapper,
    detail: signDetailMapper,
    title: "签到记录",
    api: apis.recordSign
  },
  study: {
    table: studyTableMapper,
    detail: studyDetailMapper,
    title: "学习记录",
    api: apis.recordStudy
  },
  warning: {
    table: warningTableMapper,
    detail: warningDetailMapper,
    title: "警告记录",
    api: apis.recordWarning
  },
  advise: {
    table: adviseTableMapper,
    detail: adviseDetailMapper,
    title: "训诫记录",
    api: apis.recordAdvise
  },
  evaluating: {
    table: evaluatingTableMapper,
    detail: evaluatingDetailMapper,
    title: "心理测评报告",
    api: apis.recordEvaluating
  },
  leave: {
    table: leaveTableMapper,
    detail: leaveDetailMapper,
    title: "外出记录",
    api: apis.getLeaveList,
    detailPage: "/pages/leave/detail"
  }
};
const _style_0 = { "query-common_content-backbtn": { ".query-common_content ": { "alignSelf": "flex-end", "width": 100, "backgroundColor": "#006AEC", "marginTop": 10, "marginRight": 0, "marginBottom": 10, "marginLeft": 0 } } };
const _sfc_main = {
  mixins: [userInactiveMixin],
  data() {
    return {
      type: "",
      title: "",
      tableMapper: [],
      detailMapper: [],
      api: "",
      detailPage: "",
      idnum: "",
      name: "",
      activitys: []
    };
  },
  computed: {
    token() {
      return this.$store.getters.token;
    }
  },
  watch: {
    type(nT) {
      const data = queryTypeMapper[nT];
      this.title = data.title;
      this.tableMapper = data.table;
      this.detailMapper = data.detail;
      this.api = data.api;
      this.detailPage = data.detailPage || "/pages/compound/detail";
      this.getActivitys();
    }
  },
  onLoad(options) {
    const {
      idnum,
      name,
      type
    } = options;
    this.idnum = idnum;
    this.name = name;
    this.type = type;
  },
  methods: {
    getActivitys() {
      uni.showLoading();
      formatAppLog("log", "at pages/query/common.nvue:72", "请求数据：", this.api);
      requestApi(this.api, {
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
      formatAppLog("log", "at pages/query/common.nvue:89", act);
      this.$store.commit("setDetailData", {
        name: this.title,
        data: act,
        detailMapper: this.detailMapper
      });
      uni.navigateTo({
        url: this.detailPage + "?idnum=" + this.idnum + "&name=" + this.name + "&id=" + act.id + "&status=" + act.processInfo,
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
    createElementVNode(
      "view",
      {
        class: "content",
        onClick: _cache[1] || (_cache[1] = (...args) => _ctx.capture && _ctx.capture(...args)),
        onTouchmove: _cache[2] || (_cache[2] = (...args) => _ctx.capture && _ctx.capture(...args))
      },
      [
        createVNode(_component_content_bg),
        createElementVNode("view", { class: "content-nav" }, [
          createElementVNode("u-image", {
            class: "content-nav-home",
            src: _imports_0,
            mode: "widthFix",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.homeClick && $options.homeClick(...args))
          })
        ]),
        createElementVNode("view", { class: "content-c query-common_content" }, [
          createVNode(_component_breadcrumb, {
            title: "信息查询",
            actionTitle: $data.title
          }, null, 8, ["actionTitle"]),
          $data.activitys.length > 0 ? (openBlock(), createBlock(_component_action_table, {
            key: 0,
            tableMapper: $data.tableMapper,
            tableData: $data.activitys,
            onViewBtnClick: $options.viewBtnClick
          }, null, 8, ["tableMapper", "tableData", "onViewBtnClick"])) : (openBlock(), createBlock(_component_empty_view, {
            key: 1,
            text: `暂无${$data.title}`,
            action: false,
            onApplyClick: _ctx.applyClick
          }, null, 8, ["text", "onApplyClick"])),
          createVNode(_component_button, {
            class: "query-common_content-backbtn",
            type: "primary",
            onClick: $options.backClick
          }, {
            default: withCtx(() => [
              createTextVNode("返回")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"])
        ])
      ],
      32
      /* NEED_HYDRATION */
    )
  ]);
}
const common = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/pages/query/common.nvue"]]);
export {
  common as default
};
