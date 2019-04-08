import { fetchUserRecipes, saveNewRecipe } from '../../services/RecipeServices';

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
      const owner = rootState.user.user.email;
      const recipes = await fetchUserRecipes(owner);
      commit('SET_RECIPES', recipes);
    },
    createNewRecipe({commit, rootState}) {
      const newRecipe = {
        slug: 'new',
        title: '',
        description: '',
        ingredients: [],
        steps: [],
        owner: rootState.user.user.email
      };
      commit('SET_ACTIVE_RECIPE', newRecipe);
    },
    addActiveRecipe({commit, state}, slug) {
      const recipeInArray = state.recipes.find(recipe => recipe.slug === slug );
      commit('SET_ACTIVE_RECIPE', recipeInArray);
    },
    async saveRecipe({commit, state}, recipeToSave) {
      const recipeInArray = state.recipes.find((recipe) => recipe.slug === recipeToSave.slug);
      if (recipeInArray == undefined) {
        commit('SAVE_NEW_RECIPE', recipeToSave);
        const response = await saveNewRecipe(recipeToSave);
        //TODO: handle failed request 
        return;
      }
      commit('UPDATE_RECIPE', recipeToSave);
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
      state.activeRecipe = {};
    },
    UPDATE_RECIPE(state, recipeToUpdate) {
      const index = state.recipes.findIndex(recipe => recipe.slug == recipeToUpdate.slug);
      state.recipes[index] = recipeToUpdate;
    }
  }
};

export default recipe;