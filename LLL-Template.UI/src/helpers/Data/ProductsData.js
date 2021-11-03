import axios from 'axios';
import { LLLConfig } from '../apiKeys';

const dbURL = LLLConfig.baseUrl;

const getProducts = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbURL}/api/products`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getSingleProduct = (productId) => new Promise((resolve, reject) => {
  axios
    .get(`${dbURL}/api/products/${productId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const addProduct = (productName) => new Promise((resolve, reject) => {
  axios
    .post(`${dbURL}/api/products`, productName)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updateProduct = (productId, productObj) => new Promise((resolve, reject) => {
  axios
    .put(`${dbURL}/api/products/${productId}`, productObj)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const deleteProduct = (productId) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbURL}/api/products/${productId}`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export {
  getProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
