import Vue from 'vue'
import Vuex from 'vuex'
import {FB} from "./config/FirebaesConfig"
import {MAKE_URL} from "./config/StoreConfig"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    async [MAKE_URL] (context, payload) {
      try {
        const result = await FB.database().ref("/").push(payload)
        console.log(result);
      } catch(e) {
        console.error("MAKE_URL error : ", e);
        return null;
      }
    }
  }
})
