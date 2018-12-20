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
    newRecipe: {
      title: '',
      description: '',
      ingredients: [],
      steps: [],
      img: ''
    }
  },
  getters: {
    getCategories(state) {
      return state.categories;
    }
  }, 
  mutations: {
    ADD_RECIPES(state, recipes) {
      state.recipes = recipes;
    }, 
    ADD_USER(state, user) {
      state.user = user;
    },
    ADD_TITLE(state, title) {
      state.newRecipe.title = title;
    },
    ADD_DESCRIPTION(state, description) {
      state.newRecipe.description = description;
    },
    ADD_INGREDIENT(state, ingredient) {
      state.newRecipe.ingredients.push(ingredient);
    },
    SAVE_NEW_RECIPE(state) {
      state.recipes.push(state.newRecipe);
    },
    NEW_RECIPE(state) {
      state.newRecipe = {
        title: '',
        description: '',
        ingredients: [],
        steps: [],
        img: '' 
      };
    }
  }
});