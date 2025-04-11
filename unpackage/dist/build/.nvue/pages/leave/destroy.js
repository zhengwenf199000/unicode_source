import { f as formatAppLog, r as resolveEasycom } from "../../uni-app.es.js";
import { _ as __easycom_0 } from "../../content-bg.js";
import { resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, createTextVNode } from "vue";
import { _ as __easycom_1 } from "../../breadcrumb.js";
import { _ as __easycom_2 } from "../../action-table.js";
import { r as requestApi, a as apis } from "../../http.js";
import { l as leaveTableMapper, e as leaveDetailMapper } from "../../tableMappers.js";
import { u as userInactiveMixin } from "../../userInactiveMixin.js";
import { _ as _imports_0 } from "../../Home.js";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
const _style_0 = { "list_content-backbtn": { ".list_content ": { "alignSelf": "flex-end", "width": 100, "backgroundColor": "#006AEC", "marginBottom": 10 } } };
const _sfc_main = {
  mixins: [userInactiveMixin],
  data() {
    return {
      tableMapper: leaveTableMapper,
      activitys: []
      // activitys: Array.from(new Array(2)).map((v, i) => ({
      // 	"deptName": "社区矫正平台", //矫正对象所在机构
      // 	"id": 9201 + i,          //事件编号
      // 	"time": "2021-08-10 ~ 2021-09-10", //请假时间
      // 	"status": "请假",   //类别
      // 	"overTime": "",    //销假时间
      // 	"address": "新抚区", //外出目的地
      // 	"applyTime": "2021-08-13",  //申请时间
      // 	"processInfo": "需要司法所管理岗审批"  //流程状态
      // }))
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
      requestApi(apis.getLeaveList, {
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
      formatAppLog("log", "at pages/leave/destroy.nvue:72", act);
      this.$store.commit("setDetailData", {
        name: "销假详情",
        data: act,
        detailMapper: leaveDetailMapper
      });
      uni.navigateTo({
        url: "/pages/leave/detail?leaveId=" + act.id + "&status=" + act.processInfo + "&destroy=true",
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
      createElementVNode("view", { class: "content-c list_content" }, [
        createVNode(_component_breadcrumb, {
          title: "请销假",
          actionTitle: "销假"
        }),
        createVNode(_component_action_table, {
          tableMapper: $data.tableMapper,
          tableData: $data.activitys,
          onViewBtnClick: $options.viewBtnClick
        }, null, 8, ["tableMapper", "tableData", "onViewBtnClick"]),
        createVNode(_component_button, {
          class: "list_content-backbtn",
          type: "primary",
          onClick: $options.backClick
        }, {
          default: withCtx(() => [
            createTextVNode("返回")
          ]),
          _: 1
        }, 8, ["onClick"])
      ])
    ], 32)
  ]);
}
const destroy = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  destroy as default
};
