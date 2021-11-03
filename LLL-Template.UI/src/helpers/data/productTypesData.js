import axios from 'axios';
import { LLLConfig } from '../apiKeys';

const dbURL = LLLConfig.baseUrl;

const getProductTypes = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/ProductTypes`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getSingleProductType = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/ProductTypes/${id}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const addProductType = (productType) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/api/ProductTypes`, productType)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updateProductType = (id, productTypeObj) => new Promise((resolve, reject) => {
  axios.put(`${dbURL}/api/ProductTypes/${id}`, productTypeObj)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const deleteProductType = (id) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/api/ProductTypes/${id}`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export {
  getProductTypes,
  getSingleProductType,
  addProductType,
  updateProductType,
  deleteProductType
};
