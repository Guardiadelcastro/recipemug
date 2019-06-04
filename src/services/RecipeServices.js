import axios from 'axios';

import store from '../store/store';
import { keys } from './AppServices';

const recipes = axios.create({  
  baseURL: `${keys.apiUrl}/api/recipes/`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
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
    const response = await recipes.get(`/my-recipes/${owner}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch(err) {
    return err;
  }
}

export async function saveNewRecipe(recipe) {
  try{
    const response = await recipes.post('/create', {recipe}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response;
  } catch(err) {
    return err;
  }
}

export async function updateRecipe(recipe) {
  try{
    const response = await recipes.put('/update', {recipe}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response;
  } catch(err) {
    return err;
  }
}

export async function deleteRecipe(id) {
  try{
    const response = await recipes.delete(`/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response;
  } catch(err) {
    return err;
  }
}