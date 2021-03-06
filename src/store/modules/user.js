const user = {
  namespaced: true,
  state: {
    jwt: '',
    user: {},
    isLoggedIn: false
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getUsername(state) {
      return state.user.username;
    },
    getToken(state) {
      return state.jwt;
    },
    getLogStatus(state) {
      return state.isLoggedIn;
    }
  },
  actions: {
    logOut({commit, dispatch}) {
      commit('CLEAN_USER_STATE');
      dispatch('recipe/cleanRecipeState', null, {root: true});
      localStorage.removeItem('token');
    },
    userIsLogged({commit}) {
      commit('SET_LOG_STATUS');
    },
    addUser({commit}, user){
      commit('SET_USER', user);
    },
    addToken({commit}){
      commit('SET_JWT');
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
      localStorage.removeItem('token');
      state.jwt ={};
      state.user = {};
      state.isLoggedIn = false;
    }
  }
};

export default user;