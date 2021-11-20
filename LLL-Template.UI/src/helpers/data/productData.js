import axios from 'axios';
import { LLLConfig } from '../apiKeys';

const apiURL = LLLConfig.baseUrl;

const getProducts = () => new Promise((resolve, reject) => {
  axios
    .get(`${apiURL}/api/products`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getSingleProduct = (productId) => new Promise((resolve, reject) => {
  axios
    .get(`${apiURL}/api/products/${productId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const addProduct = (productName) => new Promise((resolve, reject) => {
  axios
    .post(`${apiURL}/api/products`, productName)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updateProduct = (productId, productObj) => new Promise((resolve, reject) => {
  axios
    .put(`${apiURL}/api/products/${productId}`, productObj)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const deleteProduct = (productId) => new Promise((resolve, reject) => {
  axios
    .delete(`${apiURL}/api/products/${productId}`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const getProductByDesignerId = (designerId) => new Promise((resolve, reject) => {
  axios
    .get(`${apiURL}/api/products/designers/${designerId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getProductWithDetail = (designerId) => new Promise((resolve, reject) => {
  axios.get(`${apiURL}/api/products/details/${designerId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductByDesignerId,
  getProductWithDetail,
};
