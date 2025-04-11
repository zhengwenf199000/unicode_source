import { f as formatAppLog, r as resolveEasycom } from "../../uni-app.es.js";
import { _ as __easycom_0 } from "../../content-bg.js";
import { resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, createBlock, withCtx, createTextVNode } from "vue";
import { _ as __easycom_1 } from "../../breadcrumb.js";
import { _ as __easycom_2 } from "../../detail-table.js";
import { r as requestApi, a as apis, S as SIGN_IN_TYPE_MAPPER, h as hooks } from "../../http.js";
import { u as userInactiveMixin } from "../../userInactiveMixin.js";
import { _ as _imports_0 } from "../../Home.js";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
const _style_0 = { "detail_content-backbtns": { ".detail_content ": { "display": "flex", "flexDirection": "row", "justifyContent": "space-between", "marginTop": 10, "marginRight": 0, "marginBottom": 10, "marginLeft": 0 } }, "detail_content-backbtn": { ".detail_content .detail_content-backbtns ": { "width": 100, "backgroundColor": "#006AEC" } }, "detail_content-placeholder": { ".detail_content .detail_content-backbtns ": { "width": 100 } } };
const _sfc_main = {
  mixins: [userInactiveMixin],
  data() {
    return {
      title: "",
      detailMapper: [],
      activity: {},
      onlyView: false,
      idnum: "",
      name: "",
      id: ""
    };
  },
  computed: {
    detailData() {
      return this.$store.getters.compoundDetailData;
    },
    authInfo() {
      return this.$store.getters.compoundAuthInfo || {};
    }
  },
  onLoad(options) {
    this.onlyView = options.onlyView;
    this.idnum = options.idnum;
    this.name = options.name;
    this.id = options.id;
    if (this.detailData) {
      this.title = this.detailData.name;
      this.detailMapper = this.detailData.detailMapper, this.activity = this.detailData.data;
    }
  },
  methods: {
    getActivitys() {
      uni.showLoading();
      requestApi(apis.queryLabor, {
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
      formatAppLog("log", "at pages/compound/detail.nvue:80", act);
    },
    homeClick() {
      uni.reLaunch({
        url: "/pages/home/home"
      });
    },
    backClick() {
      uni.navigateBack();
    },
    signInClick() {
      uni.showLoading({
        title: "正在签到..."
      });
      requestApi(apis.signIn, {
        CRIMINAL_NAME: this.name,
        CRIMINAL_SFZH: this.idnum,
        FILE_PATH: "",
        SIGN_IN_TYPE: SIGN_IN_TYPE_MAPPER[this.title],
        SIGN_IN_TIME: hooks().format("yyyy-MM-DD HH:mm:ss"),
        EVENT_ID: this.id
      }).then((data) => {
        uni.hideLoading();
        uni.showToast({
          title: "签到成功！",
          icon: "none"
        });
        uni.$u.sleep(1e3).then(() => {
          uni.navigateBack();
        });
      }).catch((err) => {
        uni.hideLoading();
        uni.showToast({
          title: err,
          icon: "none"
        });
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_content_bg = resolveEasycom(resolveDynamicComponent("content-bg"), __easycom_0);
  const _component_breadcrumb = resolveEasycom(resolveDynamicComponent("breadcrumb"), __easycom_1);
  const _component_detail_table = resolveEasycom(resolveDynamicComponent("detail-table"), __easycom_2);
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
        createElementVNode("view", { class: "content-c detail_content" }, [
          createVNode(_component_breadcrumb, {
            title: "信息查询",
            actionTitle: $data.title
          }, null, 8, ["actionTitle"]),
          createVNode(_component_detail_table, {
            detailMapper: $data.detailMapper,
            detailData: $data.activity
          }, null, 8, ["detailMapper", "detailData"]),
          createElementVNode("view", { class: "detail_content-backbtns" }, [
            !$data.onlyView ? (openBlock(), createBlock(_component_button, {
              key: 0,
              class: "detail_content-backbtn",
              type: "primary",
              onClick: $options.signInClick
            }, {
              default: withCtx(() => [
                createTextVNode("签到")
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onClick"])) : (openBlock(), createElementBlock("view", { key: 1 })),
            createVNode(_component_button, {
              class: "detail_content-backbtn",
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
        ])
      ],
      32
      /* NEED_HYDRATION */
    )
  ]);
}
const detail = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/pages/compound/detail.nvue"]]);
export {
  detail as default
};
