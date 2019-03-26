import axios from 'axios';

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
    return response;
  } catch(err) {
    return err;
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