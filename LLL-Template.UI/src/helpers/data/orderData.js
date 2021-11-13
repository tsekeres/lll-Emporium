import axios from 'axios';
import { LLLConfig } from '../apiKeys';

const apiURL = LLLConfig.baseUrl;

const getOrderById = (orderId) => new Promise((resolve, reject) => {
  axios.get(`${apiURL}/api/orders/${orderId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getOrdersByUserId = (userId) => new Promise((resolve, reject) => {
  axios.get(`${apiURL}/api/orders/customers/${userId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getOrderWithDetail = (orderId) => new Promise((resolve, reject) => {
  axios.get(`${apiURL}/api/orders/details/${orderId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getShoppingCart = (customerId) => new Promise((resolve, reject) => {
  axios.get(`${apiURL}/api/orders/customers/${customerId}/shoppingCart`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updateOrder = (order) => new Promise((resolve, reject) => {
  axios.put(`${apiURL}/api/orders/${order.id}`, order)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const createOrder = (orderObj) => new Promise((resolve, reject) => {
  axios.post(`${apiURL}/api/orders`, orderObj)
    .then((response) => {
      console.warn(response.data);
      resolve(response.data);
    })
    .catch((error) => {
      console.warn(error);
      reject(error);
    });
});

export {
  getOrderById,
  getOrdersByUserId,
  getOrderWithDetail,
  getShoppingCart,
  updateOrder,
  createOrder,
};
