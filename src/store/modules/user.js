import { login } from '../../services/userService';

export const user = {
  namespaced: true,
  state: {
    jwt: '',
    user: {}
  },

  getters: {
    getUserID(state) {
      return state.user._id;
    },
    getUser(state) {
      return state.user;
    },
    getToken(state) {
      return state.jwt;
    }
  },

  actions: {
    async fetchUser({commit}, {email, password}) {
      const response = await login(email, password);
      commit('SET_JWT', response.token);
      commit('SET_USER', response.user);
    },
    logout({commit}, ) {
      commit('CLEAN_USER_STATE');
      commit('CLEAN_RECIPE_STATE', null, {root: true});
    }
  },

  mutations: {
    SET_JWT(state, jwt) {
      state.jwt = jwt;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAN_USER_STATE(state) {
      state.jwt ={};
      state.user = {};
    }
  }
};

