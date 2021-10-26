import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getProducts = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${dbURL}/products.json`)
      .then((response) => resolve(Object.values(response.data)))
      .catch((error) => reject(error));
  });

// const addTechnologies = (obj) =>
//   new Promise((resolve, reject) => {
//     axios
//       .post(`${dbURL}/technologies.json`, obj)
//       .then((response) => {
//         const tech = { firebaseKey: response.data.name };
//         axios
//           .patch(`${dbURL}/technologies/${response.data.name}.json`, tech)
//           .then(() => {
//             getTechnologies().then((technologiesArray) =>
//               resolve(technologiesArray)
//             );
//           });
//       })
//       .catch((error) => reject(error));
//   });

// const updateTechnologies = (tech) =>
//   new Promise((resolve, reject) => {
//     axios
//       .patch(`${dbURL}/technologies/${tech.firebaseKey}.json`, tech)
//       .then(() => getTechnologies().then(resolve))
//       .catch((error) => reject(error));
//   });

// const deleteTechnologies = (firebaseKey) =>
//   new Promise((resolve, reject) => {
//     axios
//       .delete(`${dbURL}/technologies/${firebaseKey}.json`)
//       .then(() =>
//         getTechnologies().then((technologiesArray) =>
//           resolve(technologiesArray)
//         )
//       )
//       .catch((error) => reject(error));
//   });

export default getProducts;
