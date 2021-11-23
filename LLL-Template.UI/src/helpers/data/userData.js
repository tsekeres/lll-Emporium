import axios from 'axios';
import { LLLConfig } from '../apiKeys';

const dbUrl = LLLConfig.baseUrl;

// took outmerge conflicts
const getUsers = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/users`)
    .then((userList) => resolve(userList.data))
    .catch((err) => reject(err));
});

const getDesigners = (RoleTypeId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/users/${RoleTypeId}/RoleTypeId`)
    .then((response) => resolve(response.data))
    .catch((err) => reject(err));
});

const addUsers = (User) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/api/users`, User)
    .then((response) => resolve(response.data))
    .catch((err) => reject(err));
});

const deleteUser = (userId) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/api/users/${userId}`)
    .then((response) => resolve(response.data))
    .catch((err) => reject(err));
});

const updateUser = (userId, userObj) => new Promise((resolve, reject) => {
  axios.put(`${dbUrl}/api/users/${userId}`, userObj)
    .then((response) => resolve(response.data))
    .catch((err) => reject(err));
});

const getUserByEmail = (emailAddress) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/users/email/${emailAddress}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getUserWithRoleByEmail = (emailAddress) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/users/withRole/email/${emailAddress}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const addUser = (user) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/api/users`, user)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getUsers,
  deleteUser,
  addUsers,
  updateUser,
  getDesigners,
  getUserByEmail,
  getUserWithRoleByEmail,
  addUser
};
