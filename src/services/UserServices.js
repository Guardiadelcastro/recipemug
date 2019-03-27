import axios from 'axios';
import jwt_decode from 'jwt-decode';

import store from '../store/store';
import { keys } from './AppServices';

const auth = axios.create({  
  baseURL: `${keys.apiUrl}/users`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

// Start loading before a request
auth.interceptors.request.use(config => {
  store.dispatch('loader/startLoading');
  return config;
}, error => {
  store.dispatch('loader/finishLoading');
  return Promise.reject(error);
});

// Finish Loading after a response 
auth.interceptors.response.use(response => {
  store.dispatch('loader/finishLoading');
  return response;
}, error => {
  store.dispatch('loader/finishLoading');
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
    const user = response.data.user;
    localStorage.setItem('token', token);
    store.dispatch('user/userIsLogged');
    store.dispatch('user/addToken');
    store.dispatch('user/addUser', user);
    return true;
  } catch(err) {
    return false;
  }
}

export async function register(email, password) {
  try {
    const response = await auth.post('/register', {
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
  if (!token) {
    return false;
  }
  store.dispatch('user/userIsLogged');
  store.dispatch('user/addToken');
  const user = await getUser(token);
  store.dispatch('user/addUser', user);
  return true;
}

export async function getUser(token) {
  try {
    const { email } = jwt_decode(token);
    const user = await auth.get('/find-by-email', {
      email: email,
    });
    return user;
  } catch(err) {
    return err;
  }
}