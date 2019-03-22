import { createNewRecipe, fetchAllRecipes } from '../../services/RecipeService';
import { isNull } from 'util';

const recipe = {
  namespaced: true,
  state: {
    recipes: [],
    activeRecipe: {},
  },

  getters: {
    getRecipes(state) {
      return state.recipes;
    },
    getActive(state) {
      return state.activeRecipe;
    }
  },

  actions: {
    async fetchRecipes({commit, rootState}) {
      const owner = { owner: rootState.user._id };
      const recipes = await fetchAllRecipes(owner);
      commit('SET_RECIPES', recipes);
    },
    createNewRecipe({commit, rootState}) {
      const newRecipe = {
        _id: null,
        title: 'New recipe',
        description: 'New description',
        ingredients: [],
        steps: [],
        owner: rootState.user._id
      };
      commit('SET_ACTIVE_RECIPE', newRecipe);
    },
    async saveRecipe({commit, state}) {
      let activeRecipe = state.active;
      if(activeRecipe._id === isNull) {
        await createNewRecipe(activeRecipe);
        commit('SAVE_NEW_RECIPE', activeRecipe);
        return;
      }
      commit('SAVE_RECIPE', activeRecipe);
    },
    updateTitle({commit}, title) {
      commit('SET_TITLE', title);
    },
    updateDescription({commit}, description) {
      commit('SET_DESCRIPTION', description);
    },
    updateIngredients({commit}, ingredients) {
      commit('SET_INGREDIENTS', ingredients);
    },
    updateSteps({commit}, steps) {
      commit('SET_STEPS', steps);
    },
  },

  mutations: {
    CLEAN_RECIPE_STATE(state) {
      state.recipes = [];
      state.activeRecipe = {};
    },
    SET_RECIPES(state, recipes) {
      state.recipes = recipes;
    },
    SET_ACTIVE_RECIPE(state, recipe) {
      state.activeRecipe = recipe;
    },
    SAVE_NEW_RECIPE(state, activeRecipe) {
      state.recipes.push(activeRecipe);
      state.active = {};
    },
    SAVE_RECIPE(state, activeRecipe) {
      const index = state.recipes.findIndex(recipe => recipe._id == activeRecipe._id);
      state.recipes[index] = activeRecipe;
    },
    SET_TITLE(state, title) {
      state.activeRecipe.title = title;
    },
    SET_DESCRIPTION(state, description) {
      state.activeRecipe.description = description;
    },
    SET_INGREDIENTS(state, ingredients) {
      state.activeRecipe.ingredients = ingredients;
    },
    SET_STEPS(state, steps) {
      state.activeRecipe.steps = steps;
    }
  }
};

export default recipe;