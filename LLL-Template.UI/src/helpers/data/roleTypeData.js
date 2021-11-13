import axios from 'axios';
import { LLLConfig } from '../apiKeys';

const apiURL = LLLConfig.baseUrl;

const getRoleTypes = () => new Promise((resolve, reject) => {
  axios.get(`${apiURL}/api/roleTypes`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getSingleRoleType = (roleId) => new Promise((resolve, reject) => {
  axios.get(`${apiURL}/api/roleTypes/${roleId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getRoleTypeByName = (roleName) => new Promise((resolve, reject) => {
  axios.get(`${apiURL}/api/roleTypes/roleName/${roleName}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const addRoleType = (typeName) => new Promise((resolve, reject) => {
  axios.post(`${apiURL}/api/roleTypes`, typeName)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updateRoleType = (roleId, roleObj) => new Promise((resolve, reject) => {
  axios.put(`${apiURL}/api/roleTypes/${roleId}`, roleObj)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const deleteRoleType = (roleId) => new Promise((resolve, reject) => {
  axios.delete(`${apiURL}/api/roleTypes/${roleId}`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export {
  getRoleTypes,
  getSingleRoleType,
  getRoleTypeByName,
  addRoleType,
  updateRoleType,
  deleteRoleType
};
