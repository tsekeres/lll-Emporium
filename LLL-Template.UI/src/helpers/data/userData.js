import axios from 'axios';
import LLLConfig from '../apiKeys';

const dbURL = LLLConfig.baseUrl;

const getAllUsers = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/users`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getAllUsers;
