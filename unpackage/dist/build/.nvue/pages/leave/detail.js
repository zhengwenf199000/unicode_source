import { _ as __easycom_0 } from "../../content-bg.js";
import { resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, createBlock, withCtx, createTextVNode } from "vue";
import { r as resolveEasycom } from "../../uni-app.es.js";
import { _ as __easycom_1 } from "../../breadcrumb.js";
import { _ as __easycom_2 } from "../../detail-table.js";
import { _ as __easycom_2$1, a as __easycom_3 } from "../../uni-popup.js";
import { e as leaveDetailMapper } from "../../tableMappers.js";
import { r as requestApi, a as apis } from "../../http.js";
import { u as userInactiveMixin } from "../../userInactiveMixin.js";
import { _ as _imports_0 } from "../../Home.js";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
const _style_0 = { "reason_input_area": { "": { "width": 600, "paddingTop": 10, "paddingBottom": 20, "backgroundColor": "#ffffff" } }, "reason_input_area-title": { ".reason_input_area ": { "paddingLeft": 20, "paddingBottom": 10, "marginBottom": 20, "justifyContent": "center", "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#dddddd" } }, "reason_input_area-title--text": { ".reason_input_area .reason_input_area-title ": { "color": "#666666", "fontSize": 15 } }, "reason_input_area-forms": { ".reason_input_area ": { "marginRight": 30 } }, "reason_input_area-actions": { ".reason_input_area ": { "marginRight": 20, "flexDirection": "row", "justifyContent": "flex-end" } }, "reason_input_area-actions-cancel": { ".reason_input_area .reason_input_area-actions ": { "backgroundColor": "#dddddd", "width": 80, "marginRight": 10, "borderWidth": 0, "borderColor": "#000000" } }, "reason_input_area-actions-sure": { ".reason_input_area .reason_input_area-actions ": { "backgroundColor": "#006AEC", "width": 80 } }, "detail_content-backbtns": { ".detail_content ": { "display": "flex", "flexDirection": "row", "justifyContent": "space-between", "marginTop": 10, "marginRight": 0, "marginBottom": 10, "marginLeft": 0 } }, "detail_content-backbtn": { ".detail_content .detail_content-backbtns ": { "width": 100, "backgroundColor": "#006AEC" } }, "detail_content-placeholder": { ".detail_content .detail_content-backbtns ": { "width": 100 } } };
const _sfc_main = {
  mixins: [userInactiveMixin],
  data() {
    return {
      leaveId: "",
      status: "",
      isDestroy: false,
      destroyReason: "",
      destroyWay: "",
      detailMapper: leaveDetailMapper,
      activity: {}
      // activity: {
      // 	"deptName": "社区矫正平台",
      // 	"approve": [{
      // 			"approveOpinion": "同意ceshi20170315的外出请假审请", //审批意见
      // 			"approveDate": "2021-08-13 17:43:51", //审批时间
      // 			"approvePerson": "系统管理员", //审批人员
      // 			"approveName": "司法所管理岗审批" //审批人员角色
      // 		},
      // 		{
      // 			"approveOpinion": "同意ceshi20170315的外出请假审请",
      // 			"approveDate": "2021-08-13 17:44:00",
      // 			"approvePerson": "系统管理员",
      // 			"approveName": "县市区司法局工作岗审批"
      // 		},
      // 		{
      // 			"approveOpinion": "同意ceshi20170315的外出请假审请",
      // 			"approveDate": "2021-08-13 17:44:08",
      // 			"approvePerson": "系统管理员",
      // 			"approveName": "县市区司法局管理岗审批"
      // 		},
      // 		{
      // 			"approveOpinion": "同意ceshi20170315的外出请假审请",
      // 			"approveDate": "2021-08-13 17:44:15",
      // 			"approvePerson": "系统管理员",
      // 			"approveName": "县市区司法局分管局长审批"
      // 		},
      // 		{
      // 			"approveOpinion": "同意ceshi20170315的外出请假审请",
      // 			"approveDate": "2021-08-13 17:44:23",
      // 			"approvePerson": "系统管理员",
      // 			"approveName": "司法所工作岗办结"
      // 		}
      // 	],
      // 	"starTime": "2021-08-10", //请假开始时间
      // 	"area": "新抚区", //外出区
      // 	"outAddressDetail": "辽宁", //外出目的地明细
      // 	"criminalName": "ceshi20170315", //矫正对象姓名
      // 	"reason": "出去看病", //请假原因
      // 	"province": "辽宁省", //外出省份
      // 	"applyTime": "2021-08-13", //申请时间
      // 	"outAddressStreet": "新抚区", //外出目的地（乡镇、街道）
      // 	"endTime": "2021-09-10", //请假结束时间
      // 	"city": "抚顺市" //外出市
      // }
    };
  },
  computed: {
    token() {
      return this.$store.getters.token;
    }
  },
  onLoad(options) {
    this.leaveId = options.leaveId || options.id;
    this.status = options.status;
    this.isDestroy = options.destroy;
    this.getLeaveDetail();
  },
  methods: {
    getLeaveDetail() {
      uni.showLoading();
      requestApi(apis.getLeaveDetail, {
        leaveId: this.leaveId
      }, {
        token: this.token
      }).then((data) => {
        uni.hideLoading();
        this.activity = { status: this.status, ...data };
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
      uni.showLoading({
        title: "正在销假..."
      });
      requestApi(apis.leaveBack, {
        leaveId: this.leaveId
      }, {
        token: this.token
      }).then((data) => {
        uni.hideLoading();
        this.$refs.popup.close();
        uni.showToast({
          title: "销假成功！"
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
  const _component_uni_popup_dialog = resolveEasycom(resolveDynamicComponent("uni-popup-dialog"), __easycom_2$1);
  const _component_uni_popup = resolveEasycom(resolveDynamicComponent("uni-popup"), __easycom_3);
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
          title: "请销假",
          actionTitle: "外出详情"
        }),
        createVNode(_component_detail_table, {
          detailMapper: $data.detailMapper,
          detailData: $data.activity
        }, null, 8, ["detailMapper", "detailData"]),
        createElementVNode("view", { class: "detail_content-backbtns" }, [
          $data.isDestroy ? (openBlock(), createBlock(_component_button, {
            key: 0,
            class: "detail_content-backbtn",
            type: "primary",
            onClick: $options.reasonInputShow
          }, {
            default: withCtx(() => [
              createTextVNode("销假")
            ]),
            _: 1
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
          }, 8, ["onClick"])
        ])
      ]),
      createVNode(_component_uni_popup, { ref: "popup" }, {
        default: withCtx(() => [
          createVNode(_component_uni_popup_dialog, {
            title: "提示",
            content: "是否确定销假？",
            onConfirm: $options.destroyClick
          }, null, 8, ["onConfirm"])
        ]),
        _: 1
      }, 512)
    ])
  ]);
}
const detail = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  detail as default
};
