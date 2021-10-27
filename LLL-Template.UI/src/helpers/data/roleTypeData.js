import axios from 'axios';
import lllConfig from '../apiKeys';

const dbURL = lllConfig.baseUrl;

const getRoleTypes = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/roleTypes`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const deleteRoleType = (roleId) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/api/roleTypes/${roleId}`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export {
  getRoleTypes,
  deleteRoleType
};
