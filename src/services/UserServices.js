import axios from 'axios';
import jwt_decode from 'jwt-decode';

import store from '../store/store';
import router from '../router';
import { keys } from './AppServices';

const auth = axios.create({  
  baseURL: `${keys.apiUrl}/users`
});

// Start loading before a request
auth.interceptors.request.use(config => {
  store.dispatch('loading/startLoading');
  return config;
}, error => {
  store.dispatch('loading/finishLoading');
  return Promise.reject(error);
});

// Finish Loading after a response 
auth.interceptors.response.use(response => {
  store.dispatch('loading/finishLoading');
  return response;
}, error => {
  store.dispatch('loading/finishLoading');
  return Promise.reject(error);
});

export async function login(email, password) {
  try {
    const response = await auth.post('/login', {
      email: email,
      password: password
    });
    if(!response.status === 200) {
      return false;
    }
    const token = response.data.token;
    const user = response.data.userData;
    localStorage.setItem('token', token);
    store.dispatch('user/userIsLogged');
    store.dispatch('user/addToken');
    store.dispatch('user/addUser', user);
    return true;
  } catch(err) {
    return false;
  }
}

export async function register(username, email, password) {
  try {
    const response = await auth.post('/register', {
      username: username,
      email: email,
      password: password
    });
    return true;
  } catch(error) {
    return false;
  }
}

export async function checkAuth() {
  const token = localStorage.getItem('token');
  if (token === null) {
    router.push({ name: 'Index' });
    return false;
  }
  const decode = jwt_decode(token);
  const user = decode.user;
  const username = user.username;
  await store.dispatch('user/userIsLogged');
  await store.dispatch('user/addToken');
  await store.dispatch('user/addUser', user);
  store.dispatch('recipe/fetchRecipes');
  return true;
}
