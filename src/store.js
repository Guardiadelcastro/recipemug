import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [],
    activeRecipe: -1,
    editActive: false
  },
  getters: {
    getJWT(state) {
      return state.jwt;
    },
    getIngredients(state) {
      const recipe = state.recipes.find((recipe) => {
        return recipe.uuid == state.activeRecipe;
      });
      return recipe.ingredients;
    }
  },
  actions: {
    addToken(context) {
      context.commit('SET_JWT', );
    }
  },
  mutations: {
    ADD_RECIPES(state, recipes) {
      state.recipes = [];
      state.recipes = recipes;
    },  
    ADD_USER(state, user) {
      state.user = user;
    },
    UPDATE_TITLE(state, title) {
      const recipe = state.recipes.find((recipe) => {
        return recipe.uuid == state.activeRecipe;
      });
      recipe.title = title;
    },
    UPDATE_DESCRIPTION(state, description) {
      const recipe = state.recipes.find((recipe) => {
        return recipe.uuid == state.activeRecipe;
      });
      recipe.description = description;
    },
    UPDATE_INGREDIENTS(state, ingredients) {
      const recipe = state.recipes.find((recipe) => {
        return recipe.uuid == state.activeRecipe;
      });
      // eslint-disable-next-line no-console
      console.log(recipe);
      // eslint-disable-next-line no-console
      console.log(ingredients);
      recipe.ingredients = ingredients;
    },
    UPDATE_STEPS(state, steps) {
      const recipe = state.recipes.find((recipe) => {
        return recipe.uuid == state.activeRecipe;
      });
      recipe.steps = steps;
    },
    SAVE_NEW_RECIPE(state) {
      const user_id = state.user[0].uuid;
      state.recipes.forEach((recipe) => {
        if(recipe.uuid == 0) {
          axios.post('https://api.recipemug.club/recipes/'+user_id, recipe)
          // eslint-disable-next-line no-console
            .then((message) => console.log(message))
          // eslint-disable-next-line no-console
            .catch((err) => console.log(err));
        } else {
          const id = recipe.uuid;
          axios.put('https://api.recipemug.club/recipes/'+id, recipe)
          // eslint-disable-next-line no-console
            .then((message) => console.log(message))
          // eslint-disable-next-line no-console
            .catch((err) => console.log(err));
        }
      });
      state.recipes = [];
      const id = state.user[0].uuid;
      axios
        .get('https://api.recipemug.club/recipes/'+ id)
        .then((recipes) => {
          state.recipes = recipes.data;
        });
      state.editActive = false;
    },
    NEW_RECIPE(state) {
      const newRecipe = {
        title: 'New recipe',
        description: 'New description',
        ingredients: [],
        steps: [],
        img: '', 
        uuid: '0'
      };
      state.recipes.push(newRecipe);
    },
    MAKE_ACTIVE(state, id) {
      state.activeRecipe = id;
    }
  }
});