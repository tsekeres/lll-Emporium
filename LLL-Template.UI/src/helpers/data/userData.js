import axios from 'axios';
import LLLConfig from '../apiKeys';

<<<<<<< HEAD
const dbUrl = LLLConfig.baseUrl;

const getUsers = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/users`)
    .then((userList) => { console.warn(userList); resolve(userList.data); })
    .catch((err) => reject(err));
});

export default getUsers;
=======
const dbURL = LLLConfig.baseUrl;

const getAllUsers = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/users`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getAllUsers;
>>>>>>> main
