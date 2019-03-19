import axios from 'axios';
import { user } from '../store/modules/user';

const token = user.getters.getToken;

const recipes = axios.create({  
  baseURL: 'http://localhost:3000/api/recipes/',
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }
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