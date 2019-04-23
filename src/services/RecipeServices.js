import axios from 'axios';

import store from '../store/store';
import { user } from '../store/modules/user';
import { keys } from './AppServices';

// const token = store.getters['user/getToken'];
const token = localStorage.getItem['token'];
console.log(token);
const bearer = `Bearer ${token}`;

const recipes = axios.create({  
  baseURL: `${keys.apiUrl}/api/recipes/`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: bearer
  }
});

// Start loading before a request
recipes.interceptors.request.use(config => {
  store.dispatch('loading/startLoading');
  return config;
}, error => {
  store.dispatch('loading/finishLoading');
  return Promise.reject(error);
});

// Finish Loading after a response 
recipes.interceptors.response.use(response => {
  store.dispatch('loading/finishLoading');
  return response;
}, error => {
  store.dispatch('loading/finishLoading');
  return Promise.reject(error);
});

export async function fetchUserRecipes(owner) {
  try {
    const response = await recipes.get(`/my-recipes/${owner}`);
    return response.data;
  } catch(err) {
    return err;
  }
}

export async function saveNewRecipe(recipe) {
  try{
    const response = await recipes.post('/create', {recipe});
    return response;
  } catch(err) {
    return err;
  }
}

export async function updateRecipe(recipe) {
  try{
    const response = await recipes.put('/update', {recipe});
    return response;
  } catch(err) {
    return err;
  }
}

export async function deleteRecipe(id) {
  try{
    const response = await recipes.delete(`/delete/${id}`);
    return response;
  } catch(err) {
    return err;
  }
}