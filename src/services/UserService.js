import axios from 'axios';

const users = axios.create({  
  baseURL: 'http://localhost:3000/users',
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

// export async function loginUser(email, password) {
//   try {

//   } catch(err) {
//     console.log(err);
//   }
   
// }

export async function axiosRegister(email, password) {
  try {
    const response = await users.post('/register', {
      email: email,
      password: password
    });
    // eslint-disable-next-line no-console
    console.log(response);
  } catch(err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}