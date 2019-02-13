import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  test: "test"
};

const getters = {};

const mutations = {};

//Actions are called to perform mutations, which is what actually manipulates state, and also allow for async processes.
//Mutations will be called via these actions even if the process isn't async for the sake of consistency and to
//be future-proof
const actions = {};

// Modules allow you to import other state from ./modules
const modules = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules
});