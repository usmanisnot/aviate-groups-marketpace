import superagent from "superagent";

import router from "@/router"; //shortcut to src
import { Module } from "vuex";

interface IAccountState{
  loggedIn: boolean,
  loginError: string,
  username: string
}

const authModule: Module<IAccountState, any> = {
  state:() => ({
    loggedIn: false,
    loginError: "null",
    username: "null"
  }),

  getters: {
    humanLoginError(state: IAccountState) {
      return state.loginError || "";
    }
  },

  mutations: {
    loggedIn(state: IAccountState, payload) {
      state.loggedIn = true;
      state.loginError = "null";
      state.username = payload.username || "";

      router.push("/");
    },

    loggedOut(state: IAccountState) {
      state.loggedIn = false;
      router.push("/login");
    },

    loginError(state: IAccountState, payload) {
      state.loginError = payload;
    }
  },

  actions: {
    async login({ commit }, payload) {
      commit("changeAppLoadingState", true);

      const formData = new FormData();
      formData.append("username", payload.name);
      formData.append("password", payload.pwd);

      superagent
        .post('/auth/login')
        .send(formData)
        .then((response: superagent.Response ) => {
            commit("loggedIn", { username: response.body.name})
            commit("changeAppLoadingState", false)
        })
        .catch((error: superagent.HTTPError) => {
            commit("loginError", error.message || "GENERAL_ERROR");
            commit("changeAppLoadingState", false);
        });
    },

    async logout({ commit }) {

        superagent
        .post('/auth/login')
        .then((res) => {
            commit("clearNavigationState");
            commit("loggedOut");
        })
        .catch((err) => {
            commit("clearNavigationState");
            commit("loggedOut");
        });
    }
  }
};

export default authModule;