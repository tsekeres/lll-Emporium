import axios from 'axios';
import { LLLConfig } from '../apiKeys';

const dbURL = LLLConfig.baseUrl;

const getOrderById = (orderId) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/orders/${orderId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getOrdersByUserId = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/orders/customers/${userId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getOrderWithDetail = (orderId) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/orders/details/${orderId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updateOrder = (order) => new Promise((resolve, reject) => {
  axios.put(`${dbURL}/api/orders/${order.id}`, order)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getOrderById,
  getOrdersByUserId,
  getOrderWithDetail,
  updateOrder
};
