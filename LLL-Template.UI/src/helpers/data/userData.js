import axios from 'axios';
import LLLConfig from '../apiKeys';

const dbUrl = LLLConfig.baseUrl;

const getUsers = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/users`)
    .then((userList) => { console.warn(userList); resolve(userList.data); })
    .catch((err) => reject(err));
});

export default getUsers;
