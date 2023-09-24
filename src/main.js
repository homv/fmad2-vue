import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/js/bootstrap.js";

Vue.config.productionTip = false

Vue.prototype.$apiUrl = 'http://127.0.0.1:5000'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
