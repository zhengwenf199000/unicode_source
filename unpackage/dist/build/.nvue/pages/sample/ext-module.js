import { a as requireNativePlugin, f as formatAppLog } from "../../uni-app.es.js";
import { resolveComponent, openBlock, createElementBlock, createElementVNode, createCommentVNode, createVNode, toDisplayString } from "vue";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
const _style_0 = { "alive_detect": { "": { "marginTop": 20, "width": "750rpx", "height": "375rpx", "backgroundColor": "#ff6600" } } };
var testModule = requireNativePlugin("TestModule");
const modal = requireNativePlugin("modal");
const _sfc_main = {
  data() {
    return {
      detecting: false,
      isAlive: false,
      pitchAngle: 0,
      yawAngle: 0,
      rollAngle: 0
    };
  },
  onLoad() {
    plus.globalEvent.addEventListener("TestEvent", function(e) {
      modal.toast({
        message: "TestEvent收到：" + e.msg,
        duration: 1.5
      });
    });
  },
  methods: {
    detectSuccessFunc() {
      uni.showToast({
        title: "正在检测..."
      });
      formatAppLog("log", "at pages/sample/ext-module.nvue:43", "detectSuccess");
      this.detecting = false;
      this.isAlive = true;
      uni.hideLoading();
    },
    detectFailure(e) {
      formatAppLog("log", "at pages/sample/ext-module.nvue:49", "detectFailure!", e);
      this.detecting = false;
      this.isAlive = false;
      uni.hideLoading();
    },
    detectingFunc() {
      this.detecting = true;
    },
    recognizing() {
      formatAppLog("log", "at pages/sample/ext-module.nvue:58", "正在检测...");
      uni.showLoading({
        title: "正在检测..."
      });
    },
    angleChange(e) {
      const {
        pitchAngle,
        yawAngle,
        rollAngle
      } = e.detail;
      this.pitchAngle = pitchAngle;
      this.yawAngle = yawAngle;
      this.rollAngle = rollAngle;
    },
    testAsyncFunc() {
      testModule.testAsyncFunc(
        {
          "name": "unimp",
          "age": 1
        },
        (ret) => {
          modal.toast({
            message: ret,
            duration: 1.5
          });
        }
      );
    },
    testSyncFunc() {
      var ret = testModule.testSyncFunc({
        "name": "unimp",
        "age": 1
      });
      modal.toast({
        message: ret,
        duration: 1.5
      });
    },
    gotoNativePage() {
      testModule.gotoNativePage();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_alive_detect = resolveComponent("alive-detect");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { style: { "display": "flex", "align-items": "center" } }, [
      $data.detecting ? (openBlock(), createElementBlock("u-text", {
        key: 0,
        style: { "color": "#666", "margin": "10px" }
      }, "正在检测中。。。")) : createCommentVNode("", true),
      $data.isAlive ? (openBlock(), createElementBlock("u-text", {
        key: 1,
        style: { "color": "green" }
      }, "确认是活体")) : (openBlock(), createElementBlock("u-text", {
        key: 2,
        style: { "color": "red" }
      }, "不是活体，持续检测中。。。")),
      createVNode(_component_alive_detect, {
        class: "alive_detect",
        cameratype: "black",
        onRecognizing: $options.recognizing,
        onDetecting: $options.detectingFunc,
        onDetectFailure: $options.detectFailure,
        onDetectSuccess: $options.detectSuccessFunc,
        onAngleChange: $options.angleChange
      }, null, 8, ["onRecognizing", "onDetecting", "onDetectFailure", "onDetectSuccess", "onAngleChange"]),
      createElementVNode("u-text", { style: { "color": "#333", "margin": "20px", "font-weight": "bolder" } }, "角度：仰角" + toDisplayString($data.pitchAngle) + " 左右角度" + toDisplayString($data.yawAngle) + " 摆动角度" + toDisplayString($data.rollAngle), 1)
    ])
  ]);
}
const extModule = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  extModule as default
};
