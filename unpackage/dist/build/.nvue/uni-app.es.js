import "vue";
function requireNativePlugin(name) {
  return weex.requireModule(name);
}
function formatAppLog(type, filename, ...args) {
  if (uni.__log__) {
    uni.__log__(type, filename, ...args);
  } else {
    console[type].apply(console, [...args, filename]);
  }
}
function resolveEasycom(component, easycom) {
  return typeof component === "string" ? easycom : component;
}
export {
  requireNativePlugin as a,
  formatAppLog as f,
  resolveEasycom as r
};
