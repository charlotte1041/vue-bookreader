import Vue from 'vue';
import App from './App.vue';
import './assets/css/index.css';
import './assets/iconfont/iconfont.css';


//axios
import axios from 'axios';
axios.interceptors.request.use(function(config){
    store.dispatch('showLoading');
    return config;
},function(error){
    return Promise.reject(error);
});
axios.interceptors.response.use(function(response){
    store.dispatch('hideLoading');
    return response;
},function(error){
    return Promise.reject(error);
});
Vue.prototype.$http = axios;

//路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import routes from './router.config';
let router = new VueRouter(routes);

//状态管理
import store from './store';

//loading动画
import loading from './components/loading';
Vue.use(loading);

//动画
import 'animate.css'

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});

