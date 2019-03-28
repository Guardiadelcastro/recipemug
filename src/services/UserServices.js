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
  if (!token) {
    return false;
  }
  const response = await getUser(token);
  if(!response) {
    return false;
  }
  const user = response.data;
  store.dispatch('user/userIsLogged');
  store.dispatch('user/addToken');
  store.dispatch('user/addUser', user);
  return true;
}

export async function getUser(token) {
  try {
    const decode = jwt_decode(token);
    console.log(decode);
    const user = await auth.get('/find/email', {
      email: decode.email,
    });
    return user;
  } catch(err) {
    return err;
  }
}