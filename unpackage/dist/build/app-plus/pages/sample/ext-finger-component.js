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


(()=>{var m=Object.create;var c=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var b=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty;var w=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var h=(e,t,n,p)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of x(t))!y.call(e,o)&&o!==n&&c(e,o,{get:()=>t[o],enumerable:!(p=d(t,o))||p.enumerable});return e};var v=(e,t,n)=>(n=e!=null?m(b(e)):{},h(t||!e||!e.__esModule?c(n,"default",{value:e,enumerable:!0}):n,e));var l=w((V,a)=>{a.exports=Vue});var r=v(l());var _=(e,t)=>{let n=e.__vccOpts||e;for(let[p,o]of t)n[p]=o;return n};var C={"finger-print-c":{"":{flex:1,alignItems:"center"}},"finger-print-tip":{"":{color:"#FF0000",marginTop:20}},"finger-print":{"":{marginTop:20,backgroundColor:"#FAEBD7"}},button:{"":{marginTop:20}}},k={data(){return{}},methods:{getFingerprint(){this.$refs.fingerprint.getFingerprintImage()}}};function F(e,t,n,p,o,g){let u=(0,r.resolveComponent)("finger-print"),f=(0,r.resolveComponent)("button");return(0,r.openBlock)(),(0,r.createElementBlock)("scroll-view",{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true",style:{flexDirection:"column"}},[(0,r.createElementVNode)("view",{class:"finger-print-c"},[(0,r.createElementVNode)("u-text",{class:"finger-print-tip"},"\u8BF7\u6309\u538B\u6307\u7EB9..."),(0,r.createVNode)(u,{ref:"fingerprint",style:{width:"100px",height:"100px"},class:"finger-print"},null,512),(0,r.createVNode)(f,{class:"button",onClick:g.getFingerprint},{default:(0,r.withCtx)(()=>[(0,r.createTextVNode)("\u83B7\u53D6\u6307\u7EB9")]),_:1},8,["onClick"])])])}var s=_(k,[["render",F],["styles",[C]]]);var i=plus.webview.currentWebview();if(i){let e=parseInt(i.id),t="pages/sample/ext-finger-component",n={};try{n=JSON.parse(i.__query__)}catch(o){}s.mpType="page";let p=Vue.createPageApp(s,{$store:getApp({allowDefault:!0}).$store,__pageId:e,__pagePath:t,__pageQuery:n});p.provide("__globalStyles",Vue.useCssStyles([...__uniConfig.styles,...s.styles||[]])),p.mount("#root")}})();
