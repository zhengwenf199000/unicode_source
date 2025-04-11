import { f as formatAppLog, r as resolveEasycom } from "../../uni-app.es.js";
import { _ as __easycom_0 } from "../../content-bg.js";
import { resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, createBlock, withCtx, createTextVNode } from "vue";
import { _ as __easycom_1 } from "../../breadcrumb.js";
import { _ as __easycom_2 } from "../../action-table.js";
import { _ as __easycom_3 } from "../../empty-view.js";
import { r as requestApi, a as apis } from "../../http.js";
import { g as educationTableMapper, h as educationDetailMapper } from "../../tableMappers.js";
import { u as userInactiveMixin } from "../../userInactiveMixin.js";
import { _ as _imports_0 } from "../../Home.js";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
const _style_0 = { "education_content-backbtn": { ".education_content ": { "alignSelf": "flex-end", "width": 100, "backgroundColor": "#006AEC", "marginTop": 10, "marginRight": 0, "marginBottom": 10, "marginLeft": 0 } } };
const _sfc_main = {
  mixins: [userInactiveMixin],
  data() {
    return {
      tableMapper: educationTableMapper,
      idnum: "",
      name: "",
      type: 0,
      activitys: []
      // activitys: Array.from(new Array(2)).map((v, i) => ({
      // 	"studyAddress": "",                    //活动地点
      // 	"id": "4697",                          //事件ID
      // 	"startDate": "2021-08-09 13:00:00",    //学习开始时间
      // 	"title": "集体体教育学习",                     //学习标题
      // 	"studyContent": "教育学习学习",              //学习内容
      // 	"endDate": "2021-08-09 20:00:00"       //学习结束时间
      // }))
    };
  },
  computed: {
    // idnum() {
    // 	const authInfo = this.$store.getters.compoundAuthInfo
    // 	if (!authInfo) {
    // 		return ''
    // 	}
    // 	return authInfo.idnum
    // },
    token() {
      return this.$store.getters.token;
    },
    title() {
      return this.type == 1 ? "集体教育" : "个人教育";
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
  onShow() {
    this.getActivitys();
  },
  methods: {
    getActivitys() {
      uni.showLoading();
      requestApi(apis.queryStudy, {
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
      formatAppLog("log", "at pages/compound/education.nvue:92", act);
      this.$store.commit("setDetailData", {
        name: "教育学习",
        data: act,
        detailMapper: educationDetailMapper
      });
      uni.navigateTo({
        url: "/pages/compound/detail?idnum=" + this.idnum + "&name=" + this.name + "&id=" + act.id,
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
      createElementVNode("view", { class: "content-c education_content" }, [
        createVNode(_component_breadcrumb, {
          title: "综合报到",
          actionTitle: $options.title
        }, null, 8, ["actionTitle"]),
        $data.activitys.length > 0 ? (openBlock(), createBlock(_component_action_table, {
          key: 0,
          tableMapper: $data.tableMapper,
          tableData: $data.activitys,
          onViewBtnClick: $options.viewBtnClick
        }, null, 8, ["tableMapper", "tableData", "onViewBtnClick"])) : (openBlock(), createBlock(_component_empty_view, {
          key: 1,
          text: "未指派" + $options.title,
          action: false,
          onApplyClick: _ctx.applyClick
        }, null, 8, ["text", "onApplyClick"])),
        createVNode(_component_button, {
          class: "education_content-backbtn",
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
const education = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  education as default
};
