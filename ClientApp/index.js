import Vue from "vue";
import VueBootstrap from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from "axios";
import App from "./AppRoot.vue";
import router from "./Router/index";
import VueCookie from "vue-cookie";
import store from "./Store/store";
import { sync } from "vuex-router-sync";
import { Validator } from 'vee-validate';
import babelPolyfill from "babel-polyfill";
import 'vue-toastr-2/dist/vue-toastr-2.min.css';
import VueToastr2 from "vue-toastr-2";
window.toastr = require('toastr');


Vue.use(VueBootstrap);
Vue.use(VueCookie);
Vue.use(VueToastr2);

sync(store, router);


Vue.prototype.$http = axios;

axios.defaults.headers = {
  "Content-type": "application/JSON",
  requestTime: new Date()
};

const app = new Vue({
  store,
  router,
  ...App
});

export { app, router, store };
