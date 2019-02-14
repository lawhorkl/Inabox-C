import Vue from "vue";
import axios from "axios";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
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
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

Vue.use(Vuetify);
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
