import Vue from "vue";
import Vuex from "vuex";
import { userNamespace, userStoreModule } from "./module/user.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
   [userNamespace]: userStoreModule
  },
});
