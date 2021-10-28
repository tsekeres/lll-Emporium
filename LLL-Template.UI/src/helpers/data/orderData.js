import axios from 'axios';
import LLLConfig from '../apiKeys';

const dbURL = LLLConfig.baseUrl;

const GetOrderById = (orderId) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/orders/${orderId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const GetOrdersByUserId = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/orders/customers/${userId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  GetOrderById,
  GetOrdersByUserId
};
