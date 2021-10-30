import axios from 'axios';
import LLLConfig from '../apiKeys';

const dbURL = LLLConfig.baseUrl;

const getProducts = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbURL}/products`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// const getRoleTypes = () =>
//   new Promise((resolve, reject) => {
//     axios
//       .get(`${dbURL}/api/roleTypes`)
//       .then((response) => resolve(response.data))
//       .catch((error) => reject(error));
//   });

// const getSingleRoleType = (roleId) =>
//   new Promise((resolve, reject) => {
//     axios
//       .get(`${dbURL}/api/roleTypes/${roleId}`)
//       .then((response) => resolve(response.data))
//       .catch((error) => reject(error));
//   });

// const addRoleType = (typeName) =>
//   new Promise((resolve, reject) => {
//     axios
//       .post(`${dbURL}/api/roleTypes`, typeName)
//       .then((response) => resolve(response.data))
//       .catch((error) => reject(error));
//   });

// const updateRoleType = (roleId, roleObj) =>
//   new Promise((resolve, reject) => {
//     axios
//       .put(`${dbURL}/api/roleTypes/${roleId}`, roleObj)
//       .then((response) => resolve(response.data))
//       .catch((error) => reject(error));
//   });

// const deleteRoleType = (roleId) =>
//   new Promise((resolve, reject) => {
//     axios
//       .delete(`${dbURL}/api/roleTypes/${roleId}`)
//       .then((response) => resolve(response))
//       .catch((error) => reject(error));
//   });

export default getProducts;
