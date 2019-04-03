import {updateUser} from '../../services/UserServices';
const user = {
  namespaced: true,
  state: {
    jwt: '',
    user: {},
    isLoggedIn: false
  },
  getters: {
    getUserID(state) {
      return state.user._id;
    },
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
    logOut({commit}) {
      commit('CLEAN_USER_STATE');
      commit('CLEAN_RECIPE_STATE', null, {root: true});
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
    },
    async addUserRecipe({commit}, userRecipe) {
      await updateUser(userRecipe);
      commit('ADD_USER_RECIPE', userRecipe);
    },
    async updateUserRecipe({ commit }, userRecipe) {
      await updateUser(userRecipe);
      commit('UPDATE_USER_RECIPE', userRecipe);
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
    },
    ADD_USER_RECIPE(state, userRecipe) {
      state.recipes.push(userRecipe);
    },
    UPDATE_USER_RECIPE(state, userRecipe) {
      const index = state.user.recipes.indexOf((recipe) => {
        recipe.slug = userRecipe.slug;
      });
      state.user.recipes[index] = userRecipe;
    }
  }
};

export default user;