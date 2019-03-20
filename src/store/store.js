import Vue from 'vue';
import Vuex from 'vuex';

import { user } from './modules/user';
import { recipe } from './modules/recipe';

Vue.use(Vuex);
Vue.config.devtools = true;

const store = new Vuex.Store({
  modules: {
    user,
    recipe
  }
});

export default store;