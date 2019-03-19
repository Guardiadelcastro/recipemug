import { login } from '../../services/userService';

export const user = {
  namespaced: true,
  state: {
    jwt: '',
    user: {},
    isLogged: false
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
    },
    getLogStatus(state) {
      return state.logStatus;
    }
  },

  actions: {
    async fetchUser({commit}, {email, password}) {
      const response = await login(email, password);
      commit('SET_JWT', response.token);
      commit('SET_USER', response.user);
      commit('SET_LOG_STATUS');
    },
    logOut({commit}, ) {
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
    SET_LOG_STATUS(state) {
      state.isLogged = true;
    },
    CLEAN_USER_STATE(state) {
      state.jwt ={};
      state.user = {};
      state.logStatus = false;
    }
  }
};

