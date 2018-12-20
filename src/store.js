import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

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
    getCategories(state) {
      return state.categories;
    },
    getNewRecipe(state) {
      return state.newRecipe;
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
      const recipe = state.recipes.find((recipe) => {
        return recipe.uuid == state.activeRecipe;
      });
      recipe.title = title;
    },
    ADD_DESCRIPTION(state, description) {
      const recipe = state.recipes.find((recipe) => {
        return recipe.uuid == state.activeRecipe;
      });
      recipe.description = description;
    },
    ADD_INGREDIENT(state, ingredient) {
      const recipe = state.recipes.find((recipe) => {
        return recipe.uuid == state.activeRecipe;
      });
      recipe.ingredient.push(ingredient);
    },
    SAVE_NEW_RECIPE() {
       
    },
    NEW_RECIPE(state) {
      const newRecipe = {
        title: 'New Recipe',
        description: '',
        ingredients: [''],
        steps: [''],
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