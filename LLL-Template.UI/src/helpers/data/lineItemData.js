import axios from 'axios';
import { LLLConfig } from '../apiKeys';

const apiURL = LLLConfig.baseUrl;

const getLineItemsByOrderId = (orderId) => new Promise((resolve, reject) => {
  axios.get(`${apiURL}/api/orders/${orderId}/orderLines`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getOrderLineWithProduct = (orderLineId) => new Promise((resolve, reject) => {
  axios.get(`${apiURL}/api/order/orderLines/details/${orderLineId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getOrderLinesWithProduct = (orderId) => new Promise((resolve, reject) => {
  axios.get(`${apiURL}/api/orders/${orderId}/orderLinesWithProduct`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updateOrderLine = (orderId, orderObj) => new Promise((resolve, reject) => {
  axios.put(`${apiURL}/api/orders/orderLines/${orderId}`, orderObj)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export {
  getLineItemsByOrderId,
  getOrderLineWithProduct,
  getOrderLinesWithProduct,
  updateOrderLine
};
