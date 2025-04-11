import App from './App'
import store from './store'
import index from './utils/index'

// #ifndef VUE3
import Vue from 'vue'

Vue.config.productionTip = false
Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()

uni.$u = {
	...index
}
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  return {
    app
  }
}

uni.$u = {
	...index
}

// #endif