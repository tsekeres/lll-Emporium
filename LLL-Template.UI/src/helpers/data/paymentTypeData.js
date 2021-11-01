import axios from 'axios';
import LLLConfig from '../apiKeys';

const dbURL = LLLConfig.baseUrl;

const getPaymentTypes = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/paymentTypes`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getPaymentTypes;
