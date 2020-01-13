// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import '@/assets/css/style.css'
import '@/assets/JS/script.js'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import Datepicker from 'vuejs-datepicker'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
