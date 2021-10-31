import axios from 'axios';
import LLLConfig from '../apiKeys';

const dbURL = LLLConfig.baseUrl;

const GetLineItemsByOrderId = (orderId) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/orders/${orderId}/orderLines`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default GetLineItemsByOrderId;
