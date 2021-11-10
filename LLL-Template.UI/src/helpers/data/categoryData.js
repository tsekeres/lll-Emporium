import axios from 'axios';
import { LLLConfig } from '../apiKeys';

const apiURL = LLLConfig.baseUrl;

const getCategories = () => new Promise((resolve, reject) => {
  axios.get(`${apiURL}/api/categories`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getSingleCategory = (categoryId) => new Promise((resolve, reject) => {
  axios.get(`${apiURL}/api/categories/${categoryId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const addCategory = (category) => new Promise((resolve, reject) => {
  axios.post(`${apiURL}/api/categories`, category)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updateCategory = (categoryId, categoryObj) => new Promise((resolve, reject) => {
  axios.put(`${apiURL}/api/categories/${categoryId}`, categoryObj)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const deleteCategory = (categoryId) => new Promise((resolve, reject) => {
  axios.delete(`${apiURL}/api/categories/${categoryId}`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const getCategoryProductTypes = (categoryId) => new Promise((resolve, reject) => {
  axios.get(`${apiURL}/api/ProductTypes/categories/${categoryId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getCategories,
  getSingleCategory,
  addCategory,
  updateCategory,
  deleteCategory,
  getCategoryProductTypes,
  // showCategoryProductTypes
};
