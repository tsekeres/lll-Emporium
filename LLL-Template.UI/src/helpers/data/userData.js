import axios from 'axios';
import { LLLConfig } from '../apiKeys';

const dbUrl = LLLConfig.baseUrl;

// took outmerge conflicts
const getUsers = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/users`)
    .then((userList) => resolve(userList.data))
    .catch((err) => reject(err));
});


const getDesigners = () => new Promise((resolve, reject) => {
axios.get(`${dbUrl}/api`)
})
export default getUsers;
