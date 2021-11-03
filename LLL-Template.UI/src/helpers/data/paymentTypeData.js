import axios from 'axios';
import { LLLConfig } from '../apiKeys';

const apiURL = LLLConfig.baseUrl;

const getPaymentTypes = () => new Promise((resolve, reject) => {
  axios.get(`${apiURL}/api/paymentTypes`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getPaymentTypes;
