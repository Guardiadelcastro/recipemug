import axios from 'axios';

const users = axios.create({  
  baseURL: 'http://localhost:3000/users',
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export async function userLogin(email, password) {
  try {
    const response = await users.post('/login', {
      email: email,
      password: password
    });
    return response;
  } catch(err) {
    return err;
  }
   
}

export async function userRegister(email, password) {
  try {
    const response = await users.post('/register', {
      email: email,
      password: password
    });
    return response;
  } catch(err) {
    // eslint-disable-next-line no-console
    return err;
  }
}