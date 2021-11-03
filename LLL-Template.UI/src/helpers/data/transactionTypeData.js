import axios from 'axios';
import { LLLConfig } from '../apiKeys';

const apiURL = LLLConfig.baseUrl;

const getTransactionTypes = () => new Promise((resolve, reject) => {
  axios.get(`${apiURL}/api/transactiontypes`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getTransactionTypes;
