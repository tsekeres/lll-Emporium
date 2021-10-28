import axios from 'axios';
import LLLConfig from '../apiKeys';

const dbURL = LLLConfig.baseUrl;

const GetOrderById = (orderId) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/orders/${orderId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default GetOrderById;
