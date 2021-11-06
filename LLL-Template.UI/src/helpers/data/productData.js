import axios from 'axios';
import { LLLConfig } from '../apiKeys';

const apiURL = LLLConfig.baseUrl;

const updateProduct = (productId, productObj) => new Promise((resolve, reject) => {
  axios.put(`${apiURL}/api/products/${productId}`, productObj)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default updateProduct;
