import axios from 'axios';
import NProgress from 'nprogress';

import user from '../store/modules/user';
import { keys } from './AppService';

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
// before a request is made start the nprogress
recipes.interceptors.request.use(config => {
  NProgress.start();
  return config;
}, error => {
  NProgress.done();
});

// before a response is returned stop nprogress
recipes.interceptors.response.use(response => {
  NProgress.done();
  return response;
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