import axios from 'axios';
import LLLConfig from '../apiKeys';

const dbURL = LLLConfig.baseUrl;

const getProducts = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${dbURL}/products.json`)
      .then((response) => resolve(Object.values(response.data)))
      .catch((error) => reject(error));
  });

export default getProducts;
