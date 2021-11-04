import firebase from 'firebase/app';
import axios from 'axios';

axios.interceptors.request.use(
  (request) => {
    const token = sessionStorage.getItem('token');

    if (token != null) {
      request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
  },
  (err) => Promise.reject(err),
);

const signInUser = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((user) => {
    if (user.additionalUserInfo?.isNewUser) {
      const userInfo = {
        display_Name: user.user?.displayName,
        image_Url: user.user?.photoURL,
        firebase_Uid: user.user?.uid,
        email: user.user?.email,
      };
      window.location.href = '/';
    }
  });
};

const signOutUser = () => new Promise((resolve, reject) => {
  firebase.auth().signOut().then(resolve).catch(reject);
});

export { signInUser, signOutUser };
