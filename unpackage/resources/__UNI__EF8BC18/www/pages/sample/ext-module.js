"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(()=>{var h=Object.create;var m=Object.defineProperty;var A=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var w=Object.getPrototypeOf,b=Object.prototype.hasOwnProperty;var F=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var S=(e,t,o,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let l of x(t))!b.call(e,l)&&l!==o&&m(e,l,{get:()=>t[l],enumerable:!(s=A(t,l))||s.enumerable});return e};var _=(e,t,o)=>(o=e!=null?h(w(e)):{},S(t||!e||!e.__esModule?m(o,"default",{value:e,enumerable:!0}):o,e));var i=F((T,f)=>{f.exports=Vue});var E=_(i());function u(e){return weex.requireModule(e)}function c(e,t,...o){uni.__log__?uni.__log__(e,t,...o):console[e].apply(console,[...o,t])}var n=_(i());var y=(e,t)=>{let o=e.__vccOpts||e;for(let[s,l]of t)o[s]=l;return o};var k={alive_detect:{"":{marginTop:20,width:"750rpx",height:"375rpx",backgroundColor:"#ff6600"}}},g=u("TestModule"),p=u("modal"),C={data(){return{detecting:!1,isAlive:!1,pitchAngle:0,yawAngle:0,rollAngle:0}},onLoad(){plus.globalEvent.addEventListener("TestEvent",function(e){p.toast({message:"TestEvent\u6536\u5230\uFF1A"+e.msg,duration:1.5})})},methods:{detectSuccessFunc(){uni.showToast({title:"\u6B63\u5728\u68C0\u6D4B..."}),c("log","at pages/sample/ext-module.nvue:43","detectSuccess"),this.detecting=!1,this.isAlive=!0,uni.hideLoading()},detectFailure(e){c("log","at pages/sample/ext-module.nvue:49","detectFailure!",e),this.detecting=!1,this.isAlive=!1,uni.hideLoading()},detectingFunc(){this.detecting=!0},recognizing(){c("log","at pages/sample/ext-module.nvue:58","\u6B63\u5728\u68C0\u6D4B..."),uni.showLoading({title:"\u6B63\u5728\u68C0\u6D4B..."})},angleChange(e){let{pitchAngle:t,yawAngle:o,rollAngle:s}=e.detail;this.pitchAngle=t,this.yawAngle=o,this.rollAngle=s},testAsyncFunc(){g.testAsyncFunc({name:"unimp",age:1},e=>{p.toast({message:e,duration:1.5})})},testSyncFunc(){var e=g.testSyncFunc({name:"unimp",age:1});p.toast({message:e,duration:1.5})},gotoNativePage(){g.gotoNativePage()}}};function D(e,t,o,s,l,a){let v=(0,n.resolveComponent)("alive-detect");return(0,n.openBlock)(),(0,n.createElementBlock)("scroll-view",{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true",style:{flexDirection:"column"}},[(0,n.createElementVNode)("view",{style:{display:"flex","align-items":"center"}},[l.detecting?((0,n.openBlock)(),(0,n.createElementBlock)("u-text",{key:0,style:{color:"#666",margin:"10px"}},"\u6B63\u5728\u68C0\u6D4B\u4E2D\u3002\u3002\u3002")):(0,n.createCommentVNode)("",!0),l.isAlive?((0,n.openBlock)(),(0,n.createElementBlock)("u-text",{key:1,style:{color:"green"}},"\u786E\u8BA4\u662F\u6D3B\u4F53")):((0,n.openBlock)(),(0,n.createElementBlock)("u-text",{key:2,style:{color:"red"}},"\u4E0D\u662F\u6D3B\u4F53\uFF0C\u6301\u7EED\u68C0\u6D4B\u4E2D\u3002\u3002\u3002")),(0,n.createVNode)(v,{class:"alive_detect",cameratype:"black",onRecognizing:a.recognizing,onDetecting:a.detectingFunc,onDetectFailure:a.detectFailure,onDetectSuccess:a.detectSuccessFunc,onAngleChange:a.angleChange},null,8,["onRecognizing","onDetecting","onDetectFailure","onDetectSuccess","onAngleChange"]),(0,n.createElementVNode)("u-text",{style:{color:"#333",margin:"20px","font-weight":"bolder"}},"\u89D2\u5EA6\uFF1A\u4EF0\u89D2"+(0,n.toDisplayString)(l.pitchAngle)+" \u5DE6\u53F3\u89D2\u5EA6"+(0,n.toDisplayString)(l.yawAngle)+" \u6446\u52A8\u89D2\u5EA6"+(0,n.toDisplayString)(l.rollAngle),1)])])}var r=y(C,[["render",D],["styles",[k]]]);var d=plus.webview.currentWebview();if(d){let e=parseInt(d.id),t="pages/sample/ext-module",o={};try{o=JSON.parse(d.__query__)}catch(l){}r.mpType="page";let s=Vue.createPageApp(r,{$store:getApp({allowDefault:!0}).$store,__pageId:e,__pagePath:t,__pageQuery:o});s.provide("__globalStyles",Vue.useCssStyles([...__uniConfig.styles,...r.styles||[]])),s.mount("#root")}})();
