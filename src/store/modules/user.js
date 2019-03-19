import { login } from '../../services/UserService';

export const user = {
  namespaced: true,
  state: {
    jwt: '',
    user: null,
    isLoggedIn: false
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
      return state.isLoggedIn;
    }
  },

  actions: {
    async login({commit}, {email, password}) {
      try {
        const response = await login(email, password);
        // eslint-disable-next-line no-console
        console.log(response);
        if (!response.status === 200) {
          throw new Error('failed auth');
        }
        
        const token = response.data.token;
        const user = response.data.user;
        localStorage.setItem('token', token);
        commit('SET_LOG_STATUS');
        commit('SET_USER', user);
        commit('SET_JWT');
      } catch(err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    },
    logOut({commit}, ) {
      commit('CLEAN_USER_STATE');
      commit('CLEAN_RECIPE_STATE', null, {root: true});
      localStorage.removeItem('token');
    }
  },

  mutations: {
    SET_JWT(state) {
      const token = localStorage.getItem('token');
      state.jwt = token;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_LOG_STATUS(state) {
      state.isLoggedIn = true;
    },
    CLEAN_USER_STATE(state) {
      state.jwt ={};
      state.user = {};
      state.isLoggedIn = false;
    }
  }
};

