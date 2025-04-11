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


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/uni-app.es.js
  var import_vue = __toESM(require_vue());
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/pages/sample/ext-component.js
  var import_vue2 = __toESM(require_vue());

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../../../../Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/unpackage/dist/dev/.nvue/pages/sample/ext-component.js
  var _style_0 = { "ext-component-c": { "": { "backgroundColor": "#f5f6f7" } }, "sign-pad": { "": { "width": 100, "height": 200, "backgroundColor": "#F0FFFF", "marginTop": 20, "marginRight": 0, "marginBottom": 0, "marginLeft": 0 } }, "sign-done-button": { "": { "width": 90, "marginTop": 30, "marginRight": 5, "marginBottom": 30, "marginLeft": 5 } } };
  var _sfc_main = {
    data() {
      return {
        svg: `<svg t="1660277623931" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3476" width="200" height="200"><path d="M512 1024c-106.623857 0-184.708138-6.73534-231.969677-20.091862-19.863545-5.593757-34.932441-12.557414-46.119955-21.119286-16.552954-12.78573-21.918395-27.283835-23.630769-37.215608l-0.114159-0.799108-89.043478-663.488071c-25.000669-7.534448-43.151839-30.708584-43.151839-58.106578v-26.028093c0-33.448384 27.283835-60.732219 60.732218-60.732219h522.274248L676.045485 1.598216l175.232999 19.749387-13.47068 115.18573H885.297659c33.448384 0 60.732219 27.283835 60.732218 60.732219v26.028093c0 27.397993-18.265329 50.572129-43.151839 58.106578l-89.157637 663.488071-0.114158 0.799108c-1.598216 9.931773-7.077815 24.429877-23.630769 37.215608-11.073356 8.561873-26.25641 15.52553-46.119956 21.119287C696.708138 1017.26466 618.623857 1024 512 1024z" fill="#25467A" p-id="3477"></path><path d="M512 230.028986H164.958751l94.979711 707.32486S265.988852 973.770346 512 973.770346s252.061538-36.416499 252.061538-36.4165L859.041249 230.143144H512v-0.114158z" fill="#FAFAFA" p-id="3478"></path><path d="M695.22408 925.481382l-72.947157 7.991082L720.338907 57.079153l75.116165 8.447714z" fill="#E6E6E6" p-id="3479"></path><path d="M813.14961 400.010702l-70.77815 526.726422C731.069788 932.901672 683.237458 950.938685 512 950.938685s-219.069788-18.037012-230.37146-24.087403l-70.77815-526.726421s42.46689-56.165886 138.017391-21.347603c124.432553 45.206689 188.247046 49.430546 275.920625 6.507023 97.719509-47.83233 188.361204 14.84058 188.361204 14.84058v-0.114159z" fill="#FFCCBC" p-id="3480"></path><path d="M813.14961 400.010702c0 0.114158 0 0.114158 0 0zM759.26689 375.809142l-64.04281 549.67224-72.947157 7.991082L685.520624 368.046377c27.740468-2.625641 53.083612 1.598216 73.746266 7.762765z" fill="#FFAB91" p-id="3481"></path><path d="M512 650.474025c-35.274916 0-63.928651-28.653735-63.928651-63.928652 0-7.077815 5.707915-12.78573 12.78573-12.78573s12.78573 5.707915 12.78573 12.78573c0 21.233445 17.237904 38.357191 38.357191 38.357191s38.357191-17.123746 38.357191-38.357191c0-7.077815 5.707915-12.78573 12.78573-12.78573s12.78573 5.707915 12.78573 12.78573c0 35.389075-28.653735 63.928651-63.928651 63.928652z" fill="#25467A" p-id="3482"></path><path d="M384.142698 484.259532m-38.357191 0a38.357191 38.357191 0 1 0 76.714382 0 38.357191 38.357191 0 1 0-76.714382 0Z" fill="#25467A" p-id="3483"></path><path d="M639.857302 484.259532m-38.357191 0a38.357191 38.357191 0 1 0 76.714382 0 38.357191 38.357191 0 1 0-76.714382 0Z" fill="#25467A" p-id="3484"></path><path d="M332.999777 548.188183h-51.142921c-14.15563 0-25.57146 11.415831-25.57146 25.57146s11.415831 25.57146 25.57146 25.571461h51.142921c14.15563 0 25.57146-11.415831 25.57146-25.571461 0-14.041472-11.415831-25.457302-25.57146-25.57146zM742.143144 548.188183h-51.142921c-14.15563 0-25.57146 11.415831-25.57146 25.57146s11.415831 25.57146 25.57146 25.571461h51.142921c14.15563 0 25.57146-11.415831 25.57146-25.571461 0-14.041472-11.415831-25.457302-25.57146-25.57146z" fill="#FF8A80" p-id="3485"></path><path d="M546.085137 911.865725a34.704125 34.704125 0 1 0 26.561387-64.124861 34.704125 34.704125 0 1 0-26.561387 64.124861Z" fill="#997A70" p-id="3486"></path><path d="M491.565663 908.12932m-34.704125 0a34.704125 34.704125 0 1 0 69.40825 0 34.704125 34.704125 0 1 0-69.40825 0Z" fill="#997A70" p-id="3487"></path><path d="M471.245485 828.446823m-34.704125 0a34.704125 34.704125 0 1 0 69.40825 0 34.704125 34.704125 0 1 0-69.40825 0Z" fill="#997A70" p-id="3488"></path><path d="M332.314827 893.97369m-34.704125 0a34.704125 34.704125 0 1 0 69.40825 0 34.704125 34.704125 0 1 0-69.40825 0Z" fill="#997A70" p-id="3489"></path><path d="M380.032999 826.962765m-34.704125 0a34.704125 34.704125 0 1 0 69.40825 0 34.704125 34.704125 0 1 0-69.40825 0Z" fill="#997A70" p-id="3490"></path><path d="M627.756522 903.791304m-34.704125 0a34.704125 34.704125 0 1 0 69.40825 0 34.704125 34.704125 0 1 0-69.40825 0Z" fill="#997A70" p-id="3491"></path><path d="M555.265998 806.756745m-34.704125 0a34.704125 34.704125 0 1 0 69.40825 0 34.704125 34.704125 0 1 0-69.40825 0Z" fill="#997A70" p-id="3492"></path><path d="M701.616945 893.631215m-34.704124 0a34.704125 34.704125 0 1 0 69.408249 0 34.704125 34.704125 0 1 0-69.408249 0Z" fill="#997A70" p-id="3493"></path><path d="M640.313935 831.757414m-34.704125 0a34.704125 34.704125 0 1 0 69.40825 0 34.704125 34.704125 0 1 0-69.40825 0Z" fill="#997A70" p-id="3494"></path><path d="M711.662876 812.46466m-34.704125 0a34.704125 34.704125 0 1 0 69.40825 0 34.704125 34.704125 0 1 0-69.40825 0Z" fill="#997A70" p-id="3495"></path><path d="M308.341583 798.537347m-34.704125 0a34.704125 34.704125 0 1 0 69.40825 0 34.704125 34.704125 0 1 0-69.40825 0Z" fill="#997A70" p-id="3496"></path><path d="M414.508807 891.462207m-34.704125 0a34.704125 34.704125 0 1 0 69.40825 0 34.704125 34.704125 0 1 0-69.40825 0Z" fill="#997A70" p-id="3497"></path><path d="M885.297659 233.682051H138.702341c-5.822074 0-10.502564-4.680491-10.502564-10.502564v-26.028093c0-5.822074 4.680491-10.502564 10.502564-10.502565h746.595318c5.822074 0 10.502564 4.680491 10.502564 10.502565v26.028093c0 5.822074-4.680491 10.502564-10.502564 10.502564z" fill="#FFFFFF" p-id="3498"></path></svg>`,
        signSvg: "",
        sourceData: "",
        imgBlob: "../../static/imgs/bg_sign.png"
        // signSvg: `<?xml version='1.0' encoding='utf-8' standalone='yes' ?><ArrayOfPS xmlns:xsi="723.0,429.0" xmlns:xsd="http://www.w3.org/2001/XMLSchema"><Ps act="0"><parameters><pif x="655.0" y="276.648" p="0.37007874" t="581213810" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="655.0" y="276.648" p="0.37007874" t="581213815" i="0" /><pif x="655.0" y="276.648" p="0.37795275" t="581213820" i="0" /><pif x="655.0" y="276.648" p="0.37007874" t="581213826" i="0" /><pif x="654.0" y="274.64886" p="0.37795275" t="581213831" i="0" /><pif x="653.0" y="271.65015" p="0.37795275" t="581213837" i="0" /><pif x="651.52856" y="268.7085" p="0.37795275" t="581213841" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="651.0" y="267.65186" p="0.37007874" t="581213842" i="0" /><pif x="648.0" y="262.654" p="0.37795275" t="581213848" i="0" /><pif x="644.0" y="256.65656" p="0.37007874" t="581213853" i="0" /><pif x="638.0" y="248.65997" p="0.37007874" t="581213859" i="0" /><pif x="633.1196" y="242.38788" p="0.37007874" t="581213863" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="631.0" y="239.66382" p="0.37007874" t="581213864" i="0" /><pif x="624.0" y="230.66766" p="0.37795275" t="581213870" i="0" /><pif x="616.0" y="221.67151" p="0.37795275" t="581213876" i="0" /><pif x="608.0" y="212.67535" p="0.37795275" t="581213881" i="0" /><pif x="603.2795" y="207.28278" p="0.37795275" t="581213885" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="601.0" y="204.67877" p="0.37007874" t="581213887" i="0" /><pif x="593.0" y="196.68219" p="0.36220473" t="581213892" i="0" /><pif x="585.0" y="188.68561" p="0.35433072" t="581213898" i="0" /><pif x="576.0" y="179.68945" p="0.3464567" t="581213903" i="0" /><pif x="568.73047" y="173.08362" p="0.3464567" t="581213907" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="565.0" y="169.69373" p="0.3464567" t="581213909" i="0" /><pif x="552.0" y="158.69843" p="0.32283464" t="581213915" i="0" /><pif x="539.0" y="148.7027" p="0.33858266" t="581213920" i="0" /><pif x="525.0" y="138.70697" p="0.32283464" t="581213926" i="0" /><pif x="509.0" y="128.71124" p="0.31496063" t="581213931" i="0" /><pif x="494.0" y="119.71509" p="0.30708662" t="581213937" i="0" /><pif x="484.6085" y="114.708435" p="0.30708662" t="581213940" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="479.0" y="111.718506" p="0.27559054" t="581213942" i="0" /><pif x="466.0" y="103.721924" p="0.27559054" t="581213948" i="0" /><pif x="454.0" y="97.72449" p="0.27559054" t="581213953" i="0" /><pif x="442.0" y="92.72662" p="0.26771653" t="581213959" i="0" /><pif x="435.71854" y="90.21509" p="0.26771653" t="581213962" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="432.0" y="88.72833" p="0.2519685" t="581213965" i="0" /><pif x="421.0" y="86.72919" p="0.26771653" t="581213970" i="0" /><pif x="412.0" y="84.73004" p="0.24409449" t="581213976" i="0" /><pif x="404.0" y="85.729614" p="0.24409449" t="581213982" i="0" /><pif x="400.92984" y="85.729614" p="0.24409449" t="581213984" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="398.0" y="85.729614" p="0.22834645" t="581213987" i="0" /><pif x="392.0" y="87.72876" p="0.23622048" t="581213992" i="0" /><pif x="389.908" y="88.77429" p="0.23622048" t="581213995" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="388.0" y="89.727905" p="0.24409449" t="581213998" i="0" /><pif x="383.0" y="92.72662" p="0.26771653" t="581214004" i="0" /><pif x="380.98575" y="94.236694" p="0.26771653" t="581214006" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="379.0" y="95.72534" p="0.24409449" t="581214009" i="0" /><pif x="375.0" y="99.72363" p="0.2519685" t="581214015" i="0" /><pif x="370.0" y="106.72064" p="0.2519685" t="581214020" i="0" /><pif x="366.0" y="116.71637" p="0.23622048" t="581214026" i="0" /><pif x="364.10306" y="121.930725" p="0.23622048" t="581214028" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="362.0" y="127.71167" p="0.23622048" t="581214031" i="0" /><pif x="359.0" y="140.70612" p="0.25984251" t="581214037" i="0" /><pif x="358.53415" y="146.7594" p="0.25984251" t="581214039" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="358.0" y="153.70056" p="0.27559054" t="581214042" i="0" /><pif x="358.0" y="169.69373" p="0.26771653" t="581214048" i="0" /><pif x="358.89883" y="177.77972" p="0.26771653" t="581214051" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="360.0" y="187.68604" p="0.26771653" t="581214054" i="0" /><pif x="362.0" y="203.6792" p="0.2992126" t="581214059" i="0" /><pif x="363.72574" y="211.44165" p="0.2992126" t="581214062" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="366.0" y="221.67151" p="0.30708662" t="581214065" i="0" /><pif x="371.0" y="241.66296" p="0.31496063" t="581214070" i="0" /><pif x="373.00748" y="248.48541" p="0.31496063" t="581214073" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="376.0" y="258.6557" p="0.2992126" t="581214076" i="0" /><pif x="382.0" y="273.6493" p="0.31496063" t="581214081" i="0" /><pif x="384.36423" y="279.1635" p="0.31496063" t="581214084" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="388.0" y="287.6433" p="0.31496063" t="581214087" i="0" /><pif x="393.0" y="302.6369" p="0.31496063" t="581214093" i="0" /><pif x="394.4763" y="307.4328" p="0.31496063" t="581214095" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="397.0" y="315.63135" p="0.33858266" t="581214098" i="0" /><pif x="401.0" y="326.62665" p="0.33858266" t="581214104" i="0" /><pif x="402.114" y="330.3385" p="0.33858266" t="581214106" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="404.0" y="336.62238" p="0.36220473" t="581214109" i="0" /><pif x="406.0" y="344.61896" p="0.36220473" t="581214115" i="0" /><pif x="406.7292" y="346.8056" p="0.36220473" t="581214117" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="408.0" y="350.6164" p="0.36220473" t="581214120" i="0" /><pif x="410.0" y="356.61383" p="0.36220473" t="581214126" i="0" /><pif x="410.35544" y="358.03497" p="0.36220473" t="581214128" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="411.0" y="360.61212" p="0.37007874" t="581214132" i="0" /><pif x="412.0" y="363.61084" p="0.36220473" t="581214137" i="0" /><pif x="412.34134" y="364.2932" p="0.36220473" t="581214139" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="413.0" y="365.61" p="0.36220473" t="581214143" i="0" /><pif x="414.0" y="366.60956" p="0.37007874" t="581214148" i="0" /><pif x="414.332" y="366.9414" p="0.37007874" t="581214150" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="415.0" y="367.60913" p="0.37007874" t="581214154" i="0" /><pif x="416.0" y="368.6087" p="0.36220473" t="581214159" i="0" /><pif x="416.28882" y="368.6087" p="0.36220473" t="581214161" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="417.0" y="368.6087" p="0.37007874" t="581214165" i="0" /><pif x="418.0" y="367.60913" p="0.37007874" t="581214170" i="0" /><pif x="418.57965" y="367.02972" p="0.37007874" t="581214172" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="420.0" y="365.61" p="0.37007874" t="581214176" i="0" /><pif x="422.0" y="361.6117" p="0.37007874" t="581214181" i="0" /><pif x="422.88083" y="359.85077" p="0.37007874" t="581214183" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="425.0" y="355.61426" p="0.37007874" t="581214187" i="0" /><pif x="430.0" y="347.61768" p="0.37007874" t="581214193" i="0" /><pif x="431.4563" y="345.28857" p="0.37007874" t="581214194" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="435.0" y="339.6211" p="0.37007874" t="581214198" i="0" /><pif x="441.0" y="328.6258" p="0.37007874" t="581214204" i="0" /><pif x="442.93436" y="325.31116" p="0.37007874" t="581214205" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="448.0" y="316.63092" p="0.36220473" t="581214209" i="0" /><pif x="456.0" y="304.63605" p="0.37007874" t="581214215" i="0" /><pif x="457.8351" y="302.01556" p="0.37007874" t="581214216" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="463.0" y="294.64032" p="0.37007874" t="581214220" i="0" /><pif x="471.0" y="283.64502" p="0.37007874" t="581214226" i="0" /><pif x="472.98703" y="281.6588" p="0.37007874" t="581214227" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="479.0" y="275.64844" p="0.37795275" t="581214232" i="0" /><pif x="488.0" y="267.65186" p="0.37007874" t="581214237" i="0" /><pif x="490.15228" y="265.7395" p="0.37007874" t="581214238" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="500.0" y="258.6557" p="0.37007874" t="581214243" i="0" /><pif x="513.0" y="250.65912" p="0.37795275" t="581214248" i="0" /><pif x="515.3451" y="249.21661" p="0.37795275" t="581214249" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="524.0" y="242.66254" p="0.38582677" t="581214254" i="0" /><pif x="536.0" y="236.6651" p="0.37795275" t="581214259" i="0" /><pif x="538.4535" y="235.4389" p="0.37795275" t="581214261" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="548.0" y="230.66766" p="0.37795275" t="581214265" i="0" /><pif x="563.0" y="225.6698" p="0.37795275" t="581214270" i="0" /><pif x="565.3536" y="224.81433" p="0.37795275" t="581214272" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="574.0" y="221.67151" p="0.38582677" t="581214276" i="0" /><pif x="586.0" y="217.67322" p="0.38582677" t="581214282" i="0" /><pif x="588.3108" y="217.28827" p="0.38582677" t="581214283" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="598.0" y="215.67407" p="0.38582677" t="581214287" i="0" /><pif x="610.0" y="214.6745" p="0.38582677" t="581214293" i="0" /><pif x="612.1334" y="214.6745" p="0.38582677" t="581214294" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="622.0" y="214.6745" p="0.38582677" t="581214298" i="0" /><pif x="634.0" y="216.67365" p="0.37795275" t="581214304" i="0" /><pif x="635.88947" y="217.18872" p="0.37795275" t="581214305" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="645.0" y="219.67236" p="0.39370078" t="581214309" i="0" /><pif x="655.0" y="223.67065" p="0.39370078" t="581214315" i="0" /><pif x="656.34216" y="224.11786" p="0.39370078" t="581214316" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="664.0" y="226.66937" p="0.39370078" t="581214321" i="0" /><pif x="671.0" y="230.66766" p="0.39370078" t="581214326" i="0" /><pif x="671.87085" y="231.1651" p="0.39370078" t="581214327" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="678.0" y="235.66553" p="0.4015748" t="581214332" i="0" /><pif x="682.0" y="239.66382" p="0.39370078" t="581214337" i="0" /><pif x="682.5422" y="240.20575" p="0.39370078" t="581214338" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="686.0" y="244.66168" p="0.39370078" t="581214343" i="0" /><pif x="690.0" y="250.65912" p="0.39370078" t="581214348" i="0" /><pif x="690.46497" y="251.35632" p="0.39370078" t="581214349" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="692.0" y="257.65613" p="0.39370078" t="581214354" i="0" /><pif x="694.0" y="265.6527" p="0.39370078" t="581214360" i="0" /><pif x="694.14514" y="266.2329" p="0.39370078" t="581214360" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="694.0" y="273.6493" p="0.38582677" t="581214365" i="0" /><pif x="693.0" y="282.64545" p="0.38582677" t="581214371" i="0" /><pif x="692.91144" y="283.44226" p="0.38582677" t="581214371" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="689.0" y="291.6416" p="0.37795275" t="581214376" i="0" /><pif x="683.0" y="299.63818" p="0.37795275" t="581214382" i="0" /><pif x="682.597" y="300.1753" p="0.37795275" t="581214382" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="674.0" y="308.63434" p="0.37007874" t="581214387" i="0" /><pif x="661.0" y="319.62964" p="0.33858266" t="581214393" i="0" /><pif x="660.13824" y="320.35852" p="0.33858266" t="581214393" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="639.0" y="332.62408" p="0.31496063" t="581214398" i="0" /><pif x="613.0" y="345.61853" p="0.25984251" t="581214404" i="0" /><pif x="612.02826" y="346.1042" p="0.25984251" t="581214404" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="578.0" y="358.61298" p="0.2519685" t="581214410" i="0" /><pif x="547.0" y="368.6087" p="0.25984251" t="581214415" i="0" /><pif x="546.0135" y="368.92682" p="0.25984251" t="581214415" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="508.0" y="376.6053" p="0.22047244" t="581214421" i="0" /><pif x="464.0" y="384.60187" p="0.23622048" t="581214426" i="0" /><pif x="462.4737" y="384.87927" p="0.23622048" t="581214426" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="423.0" y="388.60016" p="0.19685039" t="581214432" i="0" /><pif x="380.66498" y="392.44714" p="0.19685039" t="581214437" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="379.0" y="392.59845" p="0.18897638" t="581214438" i="0" /><pif x="338.0" y="394.5976" p="0.18897638" t="581214443" i="0" /><pif x="296.0" y="398.5959" p="0.15748031" t="581214448" i="0" /><pif x="295.9583" y="398.59985" p="0.15748031" t="581214448" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="256.0" y="398.5959" p="0.17322835" t="581214454" i="0" /><pif x="225.0" y="399.59546" p="0.1496063" t="581214459" i="0" /><pif x="224.9426" y="399.5973" p="0.1496063" t="581214459" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="198.0" y="400.59503" p="0.18110237" t="581214465" i="0" /><pif x="170.83948" y="399.62543" p="0.18110237" t="581214471" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="170.0" y="399.59546" p="0.15748031" t="581214471" i="0" /><pif x="150.0" y="399.59546" p="0.1496063" t="581214476" i="0" /><pif x="130.25552" y="397.62183" p="0.1496063" t="581214482" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="130.0" y="397.5963" p="0.13385826" t="581214482" i="0" /><pif x="115.0" y="395.59717" p="0.13385826" t="581214487" i="0" /><pif x="105.16617" y="392.64825" p="0.13385826" t="581214493" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="105.0" y="392.59845" p="0.13385826" t="581214493" i="0" /><pif x="96.0" y="390.5993" p="0.13385826" t="581214498" i="0" /><pif x="90.224396" y="387.7127" p="0.13385826" t="581214504" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="90.0" y="387.6006" p="0.12598425" t="581214504" i="0" /><pif x="86.0" y="385.60144" p="0.12598425" t="581214510" i="0" /><pif x="84.09654" y="383.6988" p="0.12598425" t="581214515" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="84.0" y="383.6023" p="0.14173228" t="581214515" i="0" /><pif x="82.0" y="379.604" p="0.1496063" t="581214521" i="0" /><pif x="82.0" y="374.91467" p="0.1496063" t="581214526" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="82.0" y="374.60614" p="0.15748031" t="581214526" i="0" /><pif x="83.0" y="367.60913" p="0.15748031" t="581214532" i="0" /><pif x="85.74358" y="362.12433" p="0.15748031" t="581214537" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="86.0" y="361.6117" p="0.15748031" t="581214537" i="0" /><pif x="94.0" y="351.61597" p="0.15748031" t="581214543" i="0" /><pif x="105.69806" y="340.8224" p="0.15748031" t="581214548" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="107.0" y="339.6211" p="0.18110237" t="581214548" i="0" /><pif x="126.0" y="326.62665" p="0.17322835" t="581214554" i="0" /><pif x="147.99155" y="312.55804" p="0.17322835" t="581214559" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="151.0" y="310.63348" p="0.21259843" t="581214560" i="0" /><pif x="179.0" y="296.63947" p="0.2047244" t="581214565" i="0" /><pif x="200.26971" y="286.89502" p="0.2047244" t="581214570" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="203.0" y="285.64417" p="0.22047244" t="581214571" i="0" /><pif x="228.0" y="276.648" p="0.24409449" t="581214576" i="0" /><pif x="247.35405" y="269.91907" p="0.24409449" t="581214581" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="251.0" y="268.65143" p="0.24409449" t="581214582" i="0" /><pif x="275.0" y="261.65442" p="0.2519685" t="581214588" i="0" /><pif x="295.74002" y="256.47162" p="0.2519685" t="581214592" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="299.0" y="255.65698" p="0.25984251" t="581214593" i="0" /><pif x="317.0" y="252.65826" p="0.28346455" t="581214599" i="0" /><pif x="331.3332" y="250.12994" p="0.28346455" t="581214603" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="334.0" y="249.65955" p="0.30708662" t="581214604" i="0" /><pif x="353.0" y="247.6604" p="0.30708662" t="581214610" i="0" /><pif x="367.9476" y="247.6604" p="0.30708662" t="581214614" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="371.0" y="247.6604" p="0.31496063" t="581214615" i="0" /><pif x="384.0" y="247.6604" p="0.33858266" t="581214621" i="0" /><pif x="393.904" y="247.6604" p="0.33858266" t="581214625" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="396.0" y="247.6604" p="0.33070865" t="581214626" i="0" /><pif x="408.0" y="248.65997" p="0.2992126" t="581214632" i="0" /><pif x="413.73904" y="249.47949" p="0.2992126" t="581214636" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="415.0" y="249.65955" p="0.2992126" t="581214637" i="0" /><pif x="420.0" y="250.65912" p="0.33070865" t="581214643" i="0" /><pif x="422.4297" y="250.65912" p="0.33070865" t="581214647" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="423.0" y="250.65912" p="0.33858266" t="581214648" i="0" /><pif x="425.0" y="251.65869" p="0.32283464" t="581214654" i="0" /><pif x="425.75983" y="251.65869" p="0.32283464" t="581214658" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="426.0" y="251.65869" p="0.3464567" t="581214660" i="0" /><pif x="425.0" y="251.65869" p="0.2913386" t="581214666" i="0" /><pif x="421.24554" y="252.40924" p="0.2913386" t="581214669" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="420.0" y="252.65826" p="0.25984251" t="581214671" i="0" /><pif x="402.0" y="253.65784" p="0.24409449" t="581214676" i="0" /><pif x="373.02972" y="254.41986" p="0.24409449" t="581214681" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="364.0" y="254.65741" p="0.18110237" t="581214682" i="0" /><pif x="312.0" y="255.65698" p="0.17322835" t="581214688" i="0" /><pif x="267.35968" y="257.12" p="0.17322835" t="581214692" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="251.0" y="257.65613" p="0.18110237" t="581214693" i="0" /><pif x="194.0" y="259.65527" p="0.16535433" t="581214699" i="0" /><pif x="155.28511" y="263.95508" p="0.16535433" t="581214703" i="0" /></parameters></Ps><Ps act="2"><parameters><pif x="140.0" y="265.6527" p="0.14173228" t="581214704" i="0" /></parameters></Ps><Ps act="1"><parameters><pif x="140.0" y="265.6527" p="0.14173228" t="581214710" i="0" /></parameters></Ps><Ps act="1"><parameters><pif x="140.0" y="265.6527" p="0.14173228" t="581214710" i="0" /></parameters></Ps></ArrayOfPS>`
      };
    },
    onLoad() {
    },
    methods: {
      onTel(e) {
        formatAppLog("log", "at pages/sample/ext-component.nvue:31", "onTel=" + e.detail.tel);
      },
      myTextClick(e) {
        this.$refs.telText.clearTel();
      },
      clear() {
        this.$refs.signPad.clear();
      },
      signDone() {
        this.$refs.signPad.getSignPicture((res) => {
          const imgBuffer = res;
          this.imgBlob = imgBuffer;
          uni.setClipboardData({
            data: this.imgBlob,
            success: () => {
              uni.showToast({
                icon: "none",
                title: "\u5DF2\u590D\u5236\u5230\u526A\u5207\u677F"
              });
            }
          });
        });
      },
      getSignImg(e) {
        uni.showToast({
          title: "get sign img" + e.detail.img,
          icon: "none"
        });
        this.sourceData = JSON.stringify(e.detail.img);
        this.signSvg = e.img + " - " + e.detail.img;
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_myText = (0, import_vue2.resolveComponent)("myText");
    const _component_sign_pad = (0, import_vue2.resolveComponent)("sign-pad");
    const _component_button = (0, import_vue2.resolveComponent)("button");
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue2.createElementVNode)("view", { class: "ext-component-c" }, [
        (0, import_vue2.createVNode)(_component_myText, {
          ref: "telText",
          tel: "12305",
          style: { "width": "200", "height": "100" },
          onOnTel: $options.onTel,
          onClick: $options.myTextClick
        }, null, 8, ["onOnTel", "onClick"]),
        (0, import_vue2.createVNode)(_component_sign_pad, {
          ref: "signPad",
          onGetSignImg: $options.getSignImg,
          border: true,
          line: "10",
          color: "#ff6600",
          class: "sign-pad",
          style: { "width": "100%", "height": "200px", "background": "wheat" }
        }, null, 8, ["onGetSignImg"]),
        (0, import_vue2.createElementVNode)("u-image", {
          src: $data.imgBlob,
          mode: "aspectFit",
          style: { "width": "100%", "height": "200px", "background": "cadetblue" }
        }, null, 8, ["src"]),
        (0, import_vue2.createCommentVNode)(' <view class="sign-pad" style="width: 100%; height: 200px; background: azure;" v-html="sourceData">\r\n			{{ sourceData }}</view>\r\n		<text>{{ signSvg }}</text> '),
        (0, import_vue2.createVNode)(_component_button, {
          class: "sign-done-button",
          type: "primary",
          onClick: $options.signDone
        }, {
          default: (0, import_vue2.withCtx)(() => [
            (0, import_vue2.createTextVNode)("\u5B8C\u6210\u7B7E\u540D")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"]),
        (0, import_vue2.createVNode)(_component_button, {
          class: "sign-done-button",
          type: "primary",
          onClick: $options.clear
        }, {
          default: (0, import_vue2.withCtx)(() => [
            (0, import_vue2.createTextVNode)("\u6E05\u9664")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"])
      ])
    ]);
  }
  var extComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/yumingzhang/Desktop/my_porject/smart-correct-tianjin/unicode_source/pages/sample/ext-component.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/sample/ext-component";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    extComponent.mpType = "page";
    const app = Vue.createPageApp(extComponent, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...extComponent.styles || []]));
    app.mount("#root");
  }
})();
