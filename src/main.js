// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import jsonp from 'jsonp'
// 引入element组件库
import ElementUI from 'element-ui'
// 引入重置样式
import '../src/assets/css/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
// 引入vuex
import store from './vuex/store'
Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
