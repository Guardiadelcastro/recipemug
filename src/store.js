import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [
      { id: 1, name: 'Breakfast'},
      { id: 2, name: 'Lunch'},
      { id: 3, name: 'Dinner'},
      { id: 4, name: 'Nibbles', img:'https://assets.recipemug.club/img/categories/nibbles.jpg'},
      { id: 5, name: 'Drinks'}
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