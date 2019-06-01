import Vue from 'vue'
import Vuex from 'vuex'
import {FB} from "./config/FirebaesConfig"
import {MAKE_URL, GET_FROM_URL} from "./config/StoreConfig"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    async [MAKE_URL] (context, payload) {
      try {
        const result = await FB.database().ref(`/${payload.key}`).update(payload)
        console.log(result);
      } catch(e) {
        console.error("MAKE_URL error : ", e);
        return null;
      }
    },
    async [GET_FROM_URL] (context, payload) {
      try {
        const result = await FB.database().ref(`/${payload.key}`).once("value");
        if (!result.exists()) {
          return "/"
        }
        console.log(result.val());
        return result.val()["from"];
      } catch(e) {
        console.error("GET_FROM_URL error : ", e);
        return null;
      }
    }
  }
})
