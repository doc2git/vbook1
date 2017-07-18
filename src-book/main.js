import Vue from 'vue';
import App from './App.vue';
import router from './router';

import './assets/css/index.less';

import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);

import VueScroller from 'vue-scroller';
Vue.use(VueScroller);

import VueLazyLoad from 'vue-lazyload';
import loading from './assets/logo.png';

Vue.use(VueLazyLoad, {
  loading: loading,
});

import store from './vuex';
new Vue({
  el:'#app',
  router,
  ...App,
  store
});

