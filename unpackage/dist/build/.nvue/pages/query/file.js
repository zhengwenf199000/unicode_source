import { _ as __easycom_0 } from "../../content-bg.js";
import { resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, createTextVNode } from "vue";
import { r as resolveEasycom } from "../../uni-app.es.js";
import { _ as __easycom_1 } from "../../breadcrumb.js";
import { _ as __easycom_2 } from "../../detail-table.js";
import { f as fileDetailMapper } from "../../tableMappers.js";
import { r as requestApi, a as apis } from "../../http.js";
import { u as userInactiveMixin } from "../../userInactiveMixin.js";
import { _ as _imports_0 } from "../../Home.js";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
const _style_0 = { "detail_content-backbtns": { ".detail_content ": { "display": "flex", "flexDirection": "row", "justifyContent": "flex-end", "marginTop": 10, "marginRight": 10, "marginBottom": 10, "marginLeft": 10 } }, "detail_content-backbtn": { ".detail_content .detail_content-backbtns ": { "width": 100, "backgroundColor": "#006AEC" } }, "detail_content-placeholder": { ".detail_content .detail_content-backbtns ": { "width": 120 } } };
const _sfc_main = {
  mixins: [userInactiveMixin],
  data() {
    return {
      destroyReason: "",
      destroyWay: "",
      detailMapper: fileDetailMapper,
      activity: {
        criminalInfo: {
          name: "",
          // 姓名
          id_num: "",
          // 身份证号
          phone_no: "",
          // 手机号
          edu_bg: "",
          // 教育程度
          affiance: "",
          // 婚姻状况
          outside_limit: "",
          // 矫正期限
          health: "",
          // 健康状况
          dept_id: "",
          // 矫正单位
          rybh: "",
          // 人员编号 x
          jgjb: "",
          // 监管级别 x
          outside_start: "",
          // 矫正开始
          outside_end: "",
          // 矫正结束
          update_date: ""
          // 录入时间
        }
      }
    };
  },
  computed: {
    token() {
      return this.$store.getters.token;
    }
  },
  onLoad(options) {
    this.idnum = options.idnum;
    this.getFileDetail();
  },
  methods: {
    getFileDetail() {
      uni.showLoading();
      requestApi(apis.personInfo, {
        id_num: this.idnum
      }, {
        token: this.token
      }).then((data) => {
        uni.hideLoading();
        this.activity = data;
      }).catch((err) => {
        uni.showToast({
          title: err,
          icon: "none"
        });
      });
    },
    homeClick() {
      uni.reLaunch({
        url: "/pages/home/home"
      });
    },
    backClick() {
      uni.navigateBack();
    },
    reasonInputShow() {
      this.$refs.popup.open();
    },
    reasonInputDismiss() {
      this.$refs.popup.close();
    },
    destroyClick() {
      const {
        destroyWay,
        destroyReason
      } = this;
      if (!destroyWay) {
        uni.showToast({
          title: "请输入销假方式",
          icon: "none"
        });
        return;
      }
      if (!destroyReason) {
        uni.showToast({
          title: "请输入销假理由",
          icon: "none"
        });
        return;
      }
      uni.showLoading({
        title: "正在销假..."
      });
      requestApi(apis.signIn, {
        leaveId: this.leaveId
      }, {
        token: this.token
      }).then((data) => {
        uni.hideLoading();
        this.$refs.popup.close();
        uni.showToast({
          title: "销假成功！",
          icon: "none"
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
    createElementVNode("view", {
      class: "content",
      onClick: _cache[1] || (_cache[1] = (...args) => _ctx.capture && _ctx.capture(...args))
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
      createElementVNode("view", { class: "content-c detail_content" }, [
        createVNode(_component_breadcrumb, {
          title: "信息查询",
          actionTitle: "个人档案"
        }),
        createVNode(_component_detail_table, {
          detailMapper: $data.detailMapper,
          detailData: $data.activity.criminalInfo
        }, null, 8, ["detailMapper", "detailData"]),
        createElementVNode("view", { class: "detail_content-backbtns" }, [
          createVNode(_component_button, {
            class: "detail_content-backbtn",
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
    ])
  ]);
}
const file = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  file as default
};
