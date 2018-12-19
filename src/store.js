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
    user:[],
    recipes:[]
  },
  getters: {
    getCategories(state) {
      return state.categories;
    }
  },
  actions: {
 
  }

});