import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [
      { id: 1, name: 'Breakfast', img:'https://assets.recipemug.club/img/categories/breakfast.jpg'},
      { id: 2, name: 'Lunch', img:'https://assets.recipemug.club/img/categories/lunch.jpg'},
      { id: 3, name: 'Dinner', img:'https://assets.recipemug.club/img/categories/dinner.jpg'},
      { id: 4, name: 'Nibbles', img:'https://assets.recipemug.club/img/categories/nibbles.jpg'},
      { id: 5, name: 'Drinks', img:'https://assets.recipemug.club/img/categories/drinks.jpg'}
    ],
    user:{},
    recipes: [],
    activeRecipe: -1
  },
  getters: {
    getIngredients(state) {
      const recipe = state.recipes.find((recipe) => {
        return recipe.uuid == state.activeRecipe;
      });
      return recipe.ingredients;
    }
  }, 
  mutations: {
    ADD_RECIPES(state, recipes) {
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
  },
  actions: {
    UPDATE_TITLE(context) {
      context.commit('UPDATE_TITLE');
    },
    UPDATE_DESCRIPTION(context) {
      context.commit('UPDATE_DESCRIPTION');
    }
  }
});