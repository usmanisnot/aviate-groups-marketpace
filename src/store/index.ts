import { createStore } from 'vuex'
import superagent from "superagent";
import titleModule from './modules/Title';
import accountModule from './modules/Account';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default createStore({
  modules:{
    Title: titleModule,
    Authentication: accountModule
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
});
