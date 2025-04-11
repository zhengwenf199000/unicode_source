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


(()=>{var C=Object.create;var p=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var k=Object.getOwnPropertyNames;var T=Object.getPrototypeOf,F=Object.prototype.hasOwnProperty;var I=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports);var N=(e,n,s,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let c of k(n))!F.call(e,c)&&c!==s&&p(e,c,{get:()=>n[c],enumerable:!(r=b(n,c))||r.enumerable});return e};var m=(e,n,s)=>(s=e!=null?C(T(e)):{},N(n||!e||!e.__esModule?p(s,"default",{value:e,enumerable:!0}):s,e));var a=I((W,f)=>{f.exports=Vue});var o=m(a());var l=(e,n)=>{let s=e.__vccOpts||e;for(let[r,c]of n)s[r]=c;return s};var S="/static/home/HomePage.png",E="/static/imgs/logo.png",V={"content-bg__countdown":{"":{position:"absolute",right:150,color:"#FFFFFF",fontSize:15}}},A={name:"content-bg",data(){return{}},computed:{systemName(){return this.$store.getters.systemName},leftTime(){return this.userInactivePage.leftTime},isCountdown(){return this.userInactivePage.isCountdown}},inject:{userInactivePage:{from:"userInactivePage",default(){return{}}}},methods:{}};function P(e,n,s,r,c,i){return(0,o.openBlock)(),(0,o.createElementBlock)("view",{class:"content-bg",renderWhole:!0},[(0,o.createElementVNode)("view",{class:"content-bg"},[(0,o.createElementVNode)("u-image",{class:"content-bg_image",src:S,mode:"widthFix"}),(0,o.createElementVNode)("view",{class:"content-bg_title"},[(0,o.createElementVNode)("view",{class:"content-bg_title__placeholder"},[(0,o.createElementVNode)("u-image",{class:"content-bg_title__placeholder___logo",src:E,mode:"widthFix"})]),(0,o.createElementVNode)("u-text",{class:"content-bg_title__text",style:{"font-size":"60px"}},(0,o.toDisplayString)(i.systemName)+"\u793E\u533A\u77EB\u6B63\u81EA\u52A9\u7EC8\u7AEF",1),i.isCountdown?((0,o.openBlock)(),(0,o.createElementBlock)("u-text",{key:0,class:"content-bg__countdown"},(0,o.toDisplayString)(i.leftTime)+"\u79D2\u540E\u5173\u95ED",1)):(0,o.createCommentVNode)("",!0)]),(0,o.createElementVNode)("view",{class:"content-bg_placeholder"})]),(0,o.renderSlot)(e.$slots,"default")])}var g=l(A,[["render",P],["styles",[V]]]);var t=m(a());var H=m(a());function y(e,n){return typeof e=="string"?n:e}var h="/static/imgs/Home.png";var B={"study_content-title":{".study_content ":{color:"#006AEC",fontSize:26,fontWeight:"bold",marginTop:20}},"study_content-type":{".study_content ":{color:"#006AEC",fontSize:26,fontWeight:"bold",textAlign:"center",marginTop:10}},"study_content-funcsc":{".study_content ":{flex:1,justifyContent:"center"}},"study_content-funcs":{".study_content ":{flexDirection:"row",justifyContent:"center",height:160}},"study_content-funcs-f":{".study_content .study_content-funcs ":{marginLeft:30}},"study_content-funcs-first":{".study_content .study_content-funcs ":{marginLeft:0}},"study_content-funcs-p":{".study_content .study_content-funcs ":{width:30}},"study_content-logout":{".study_content ":{alignSelf:"flex-end",backgroundColor:"#006AEC",marginBottom:15,color:"#ffffff",width:100}}},L={data(){return{funcItems:[{path:"",icon:"../../static/study/VideoLearning.png"},{path:"",icon:"../../static/study/OnlineCheck-in.png"}]}},onLoad(e){this.idnum=e.idnum},methods:{homeClick(){uni.reLaunch({url:"/pages/home/home"})},funcItemClick(e){if(!e.path){uni.showToast({title:"\u7CFB\u7EDF\u5347\u7EA7\u4E2D...",icon:"none"});return}if(!this.idnum){uni.showToast({title:"\u672A\u83B7\u53D6\u5230\u60A8\u7684\u8EAB\u4EFD\u4FE1\u606F",icon:"none"});return}uni.navigateTo({url:e.path+"?idnum="+this.idnum,animationType:"none"})},exitClick(){uni.navigateBack()}}};function z(e,n,s,r,c,i){let w=y((0,t.resolveDynamicComponent)("content-bg"),g),v=(0,t.resolveComponent)("button");return(0,t.openBlock)(),(0,t.createElementBlock)("scroll-view",{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true",style:{flexDirection:"column"}},[(0,t.createElementVNode)("view",{class:"content study_content"},[(0,t.createVNode)(w),(0,t.createElementVNode)("view",{class:"content-nav"},[(0,t.createElementVNode)("u-image",{class:"content-nav-home",src:h,mode:"widthFix",onClick:n[0]||(n[0]=(...u)=>i.homeClick&&i.homeClick(...u))})]),(0,t.createElementVNode)("view",{class:"content-c"},[(0,t.createElementVNode)("u-text",{class:"study_content-title"},"\u81EA\u52A9\u5B66\u4E60"),(0,t.createElementVNode)("u-text",{class:"study_content-type"},"\u8BF7\u9009\u62E9\u4E1A\u52A1\u7C7B\u578B"),(0,t.createElementVNode)("view",{class:"study_content-funcsc"},[(0,t.createElementVNode)("view",{class:"study_content-funcs"},[((0,t.openBlock)(!0),(0,t.createElementBlock)(t.Fragment,null,(0,t.renderList)(c.funcItems,(u,x)=>((0,t.openBlock)(),(0,t.createElementBlock)("u-image",{class:(0,t.normalizeClass)(["study_content-funcs-f",{"study_content-funcs-first":x===0}]),src:u.icon,mode:"heightFix",onClick:D=>i.funcItemClick(u)},null,10,["src","onClick"]))),256))])]),(0,t.createVNode)(v,{type:"primary",class:"study_content-logout",onClick:i.exitClick},{default:(0,t.withCtx)(()=>[(0,t.createTextVNode)("\u9000\u51FA")]),_:1},8,["onClick"])])])])}var _=l(L,[["render",z],["styles",[B]]]);var d=plus.webview.currentWebview();if(d){let e=parseInt(d.id),n="pages/study/study",s={};try{s=JSON.parse(d.__query__)}catch(c){}_.mpType="page";let r=Vue.createPageApp(_,{$store:getApp({allowDefault:!0}).$store,__pageId:e,__pagePath:n,__pageQuery:s});r.provide("__globalStyles",Vue.useCssStyles([...__uniConfig.styles,..._.styles||[]])),r.mount("#root")}})();
