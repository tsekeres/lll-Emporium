/* eslint-disable arrow-body-style */
import axios from 'axios';
import firebase from 'firebase/app';
import { addUser } from './data/userData';
import { getRoleTypeByName } from './data/roleTypeData';

axios.interceptors.request.use((request) => {
  const token = sessionStorage.getItem('token');

  if (token != null) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
}, (error) => {
  return Promise.reject(error);
});

const signInUser = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((user) => {
    const us = user.user;
    if (user.additionalUserInfo?.isNewUser) {
      getRoleTypeByName('Customer').then((customerRole) => {
        const userInfo = {
          DisplayName: us?.email.split('@gmail.com')[0],
          FirstName: us?.displayName.split(' ')[0],
          LastName: us?.displayName.split(' ')[1],
          ProfilePicUrl: us?.photoURL,
          RoleTypeId: customerRole.id,
          // GoogleId: us?.uid,
          EmailAddress: us?.email,
          Bio: '',
        };
        addUser(userInfo);
        window.location.href = '/';
      });
    }
  });
};

const signOutUser = () => new Promise((resolve, reject) => {
  firebase.auth().signOut().then(resolve).catch(reject);
});

export { signInUser, signOutUser };
