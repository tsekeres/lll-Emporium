import axios from 'axios';
import LLLConfig from '../apiKeys';

const dbURL = LLLConfig.baseUrl;

const getLineItemsByOrderId = (orderId) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/orders/${orderId}/orderLines`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getOrderLineWithProduct = (orderLineId) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/order/orderLines/details/${orderLineId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getOrderLinesWithProduct = (orderId) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/orders/${orderId}/orderLinesWithProduct`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getLineItemsByOrderId,
  getOrderLineWithProduct,
  getOrderLinesWithProduct
};
