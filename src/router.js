import Vue from 'vue'
import Router from 'vue-router'
import Hello from './components/HelloWorld.vue'
import Hash from './components/Hash.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Hello
    },
    {
      path: "/:hash",
      name: "hash",
      component: Hash
    }
  ]
})
