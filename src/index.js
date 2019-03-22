import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router.js';
import store from './store/store';
import Vuelidate from 'vuelidate';

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(VueRouter);
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');