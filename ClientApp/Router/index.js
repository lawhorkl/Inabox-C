import Vue from "vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.use(VueRouter);
Vue.use(Vuetify);

let router = new VueRouter({
  mode: "history",
  routes
});

export default router;
