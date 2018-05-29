// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Home from './components/home'
import 'bootstrap/dist/css/bootstrap.css'
import store from './store'
import TimeEntries from './components/TimeEntries'


// Vue.config.productionTip = false


Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
  path: '/',
  component: Home
},
  {
    path: 'home',
    component: Home
  }
  ,
  {
    path: '/time-entries',
    component: TimeEntries
  }];

const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App,
  // components: { App },
  // template: '<App/>'
});
