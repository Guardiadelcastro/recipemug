import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';
import recipe from './modules/recipe';
import notifications from './modules/notifications';
import loading from './modules/loading';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    recipe,
    notifications,
    loading
  }
});

export default store;