import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router.js';
import store from './store/store';

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');