import axios from 'axios';
import { keys } from './AppService';

const auth = axios.create({  
  baseURL: `${keys.apiUrl}/users`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
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
    return response;
  } catch(err) {
    // eslint-disable-next-line no-console
    return err;
  }
}