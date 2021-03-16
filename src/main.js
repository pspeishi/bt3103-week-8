import Vue from 'vue'
import App from './App.vue'
import Routescomp from './routes.js'

//Import and use VueRouter
import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false

//Register Routes
const myRouter = new VueRouter({
  routes: Routescomp,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router:myRouter
}).$mount('#app')
