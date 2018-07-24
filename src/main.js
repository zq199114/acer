// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import 'styles/reset.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import './mock/index'
import 'swiper/dist/css/swiper.css'

Vue.prototype.$axios = axios
// require styles

Vue.use(VueAwesomeSwiper)

Vue.use(iView)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
