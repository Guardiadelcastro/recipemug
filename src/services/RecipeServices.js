import axios from 'axios';

import store from '../store/store';
import user from '../store/modules/user';
import { keys } from './AppServices';

const token = user.getters.getToken;

const recipes = axios.create({  
  baseURL: `${keys.apiUrl}/api/recipes/`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }
});

// Start loading before a request
recipes.interceptors.request.use(config => {
  store.dispatch('loader/startLoading');
  return config;
}, error => {
  store.dispatch('loader/finishLoading');
  return Promise.reject(error);
});

// Finish Loading after a response 
recipes.interceptors.response.use(response => {
  store.dispatch('loader/finishLoading');
  return response;
}, error => {
  store.dispatch('loader/finishLoading');
  return Promise.reject(error);
});

export async function createNewRecipe(recipe) {
  try {
    const response = await recipes.post('/create-recipe', {
      recipe
    });
    return response;
  } catch(err) {
    return err;
  }
}

export async function fetchAllRecipes(owner) {
  try {
    const recipes = await recipes.get('/my-recipes', {owner});
    return recipes;
  } catch(err) {
    return err;
  }

}


