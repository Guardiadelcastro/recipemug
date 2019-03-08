import { login } from '../../services/userService';

export const users = {
  namespaced: true,
  state: {
    jwt: { 
      token: ''
    },
    user: {}
  },

  getters: {
    getUserID(state) {
      return state.user._id;
    },
    getUser(state) {
      return state.user;
    }
  },

  actions: {
    async fetchUser({commit}, {email, password}) {
      const response = await login(email, password);
      commit('SET_JWT', response.token);
      commit('SET_USER', response.user);
    }
  },

  mutations: {
    SET_JWT(state, jwt) {
      state.jwt = jwt;
    },
    SET_USER(state, user) {
      state.user = user;
    }
  }
};