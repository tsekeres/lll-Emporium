import axios from 'axios';
import { LLLConfig } from '../apiKeys';

const apiURL = LLLConfig.baseUrl;

const addTransaction = (transactionObj) => new Promise((resolve, reject) => {
  axios.post(`${apiURL}/api/transaction`, transactionObj)
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => reject(error));
});

const getTransactionsByOrderId = (orderId) => new Promise((resolve, reject) => {
  axios.get(`${apiURL}/api/transaction/order/${orderId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  addTransaction,
  getTransactionsByOrderId
};
