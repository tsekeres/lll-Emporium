import axios from 'axios';
import { LLLConfig } from '../apiKeys';

const dbURL = LLLConfig.baseUrl;

const getCategories = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/categories`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getSingleCategory = (categoryId) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/categories/${categoryId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const addCategory = (category) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/api/categories`, category)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updateCategory = (categoryId, categoryObj) => new Promise((resolve, reject) => {
  axios.put(`${dbURL}/api/categories/${categoryId}`, categoryObj)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const deleteCategory = (categoryId) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/api/categories/${categoryId}`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const getCategoryProductTypes = (categoryId) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/producttypes?orderBy="categoryId"&equalTo="${categoryId}"`)
    .then((response) => console.warn(response.data))
    .catch((error) => reject(error));
});

const showCategoryProductTypes = (categoryId) => new Promise((resolve, reject) => {
  const category = getSingleCategory(categoryId);
  const categoryProductType = getCategoryProductTypes(categoryId);
  Promise.all([category, categoryProductType])
    .then(([categoryResponse, categoryProductTypeResponse]) => resolve({ category: categoryResponse, categoryProductTypes: categoryProductTypeResponse }))
    .catch((error) => reject(error));
});

export {
  getCategories,
  getSingleCategory,
  addCategory,
  updateCategory,
  deleteCategory,
  getCategoryProductTypes,
  showCategoryProductTypes
};
