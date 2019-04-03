import { createNewRecipe, fetchAllRecipes, saveNewRecipe, updateRecipe } from '../../services/RecipeServices';
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
        slug: 'new',
        title: '',
        description: 'New description',
        ingredients: [],
        steps: [],
        owner: rootState.user.user.email
      };
      commit('SET_ACTIVE_RECIPE', newRecipe);
    },
    async saveRecipe({commit, state, dispatch}, recipeToSave) {
      const userRecipe = {
        slug: recipeToSave.slug,
        title: recipeToSave.title
      };
      console.log(recipeToSave);
      console.log(userRecipe);
      const recipes = state.recipes;
      const recipeInArray = recipes.find((recipe) => {
        recipe.slug === recipeToSave.slug;
      });
      if (recipeInArray === undefined) {
        const response = await saveNewRecipe(recipeToSave);
        // TODO: handle failed request 
        dispatch('user/addUserRecipe', userRecipe, {root: true});
        commit('SAVE_NEW_RECIPE', recipeToSave);
        return;
      }
      dispatch('user/updateUserRecipe', userRecipe, {root: true});
      commit('UPDATE_RECIPE', recipeToSave);
    }
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
    SAVE_NEW_RECIPE(state, recipe) {
      state.recipes.push(recipe);
      state.activeRecipe = {};
    },
    UPDATE_RECIPE(state, recipeToUpdate) {
      const index = state.recipes.findIndex(recipe => recipe.slug == recipeToUpdate.slug);
      state.recipes[index] = recipeToUpdate;
    }
  }
};

export default recipe;