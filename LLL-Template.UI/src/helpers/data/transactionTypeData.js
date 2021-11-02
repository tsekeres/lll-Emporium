import axios from 'axios';
import { LLLConfig } from '../apiKeys';

const dbURL = LLLConfig.baseUrl;

const getTransactionTypes = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/api/transactiontypes`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getTransactionTypes;
