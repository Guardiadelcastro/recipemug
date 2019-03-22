import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router.js';
import store from './store/store';
<<<<<<< HEAD
import Vuelidate from 'vuelidate';
=======
import 'nprogress/nprogress.css';
>>>>>>> refactor

Vue.config.productionTip = false;
Vue.config.devtools = true;


Vue.use(VueRouter);
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');