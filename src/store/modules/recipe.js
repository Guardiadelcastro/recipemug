import { fetchUserRecipes, saveNewRecipe, updateRecipe, deleteRecipe } from '../../services/RecipeServices';

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
    },
    getRecipeCount(state) {
      return state.recipes.length;
    }
  },

  actions: {
    async fetchRecipes({commit, rootState}) {
      const owner = rootState.user.user.username;
      const recipes = await fetchUserRecipes(owner);
      commit('SET_RECIPES', recipes);
    },
    createNewRecipe({commit, rootState}) {
      const newRecipe = {
        id: '0',
        slug: 'new',
        title: '',
        description: '',
        ingredients: [],
        steps: [],
        owner: rootState.user.user.username
      };
      commit('SET_ACTIVE_RECIPE', newRecipe);
    },
    addActiveRecipe({commit, state}, selectedRecipe) {
      const recipeInArray = state.recipes.find(recipe => recipe.slug === selectedRecipe.slug );
      commit('SET_ACTIVE_RECIPE', recipeInArray);
    },
    async saveRecipe({commit}, recipeToSave) {
      if (recipeToSave.id === '0') {
        const response = await saveNewRecipe(recipeToSave);
        const newRecipe = response.data.newRecipe;
        commit('SAVE_NEW_RECIPE', newRecipe);
        //TODO: handle failed request 
        return;
      }
      await updateRecipe(recipeToSave);
      commit('UPDATE_RECIPE', recipeToSave);
      // dispatch('cleanRecipeState');
    },
    async deleteRecipe({commit}, recipeToDelete) {
      await deleteRecipe(recipeToDelete.id);
      commit('DELETE_RECIPE', recipeToDelete);
    },
    cleanRecipeState({commit}) {
      commit('CLEAN_RECIPE_STATE');
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
      state.activeRecipe = recipe;
    },
    UPDATE_RECIPE(state, recipeToUpdate) {
      const index = state.recipes.findIndex(recipe => recipe.slug == recipeToUpdate.slug);
      state.recipes[index] = recipeToUpdate;
    },
    DELETE_RECIPE(state, recipeToDelete) {
      const index = state.recipes.findIndex(recipe => recipe.slug == recipeToDelete.slug);
      state.recipes.splice(index, 1);
    }
  }
};

export default recipe;