import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import ServerStore from './Modules/ServerStore'

const state = {
};

const getters = {
  getUsers: state => {
    return state.users;
  },
  getUser: state =>  {

  },

};

const mutations = {
  addUser: (state, user) => {

  },
  deleteUser: (state, user_id) => {

  },

};

//Actions are called to perform mutations, which is what actually manipulates state, and also allow for async processes.
//Mutations will be called via these actions even if the process isn't async for the sake of consistency and to
//be future-proof
const actions = {
  do_addUser: ({ commit }, user) => {

  },
  do_deleteUser: ( { commit }, user_id) => {

  },
  do_addServer: ({ commit }, server) => {

  }
  ,
  do_deleteServer: ({ commit }, server_id) => {

  }
};

// Modules allow you to import other state from ./modules
const modules = {
  'serverStore': ServerStore
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules
});