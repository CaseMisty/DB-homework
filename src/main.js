// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueSource from 'vue-resource'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import Material from './components/Material.vue'
Vue.config.productionTip = false
Vue.use(Router)
Vue.use(VueSource)
Vue.use(ElementUI)

// let router = new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       component: Material
//     }
//   ]
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  template: '<App/>',
  components: { App }
})
