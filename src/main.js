import Vue from 'vue'
import App from './App.vue'
import axios from "axios"

window.axios = axios;

Vue.config.productionTip = false;
new Vue({
  el: '#app',
  render: h => h(App)
})
