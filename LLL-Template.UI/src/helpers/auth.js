import firebase from 'firebase/app';
import axios from 'axios';

axios.interceptors.request.use((request) => {
  const token = sessionStorage.getItem('token');

  if (token != null) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
  }, (err) => {
    return Promise.reject(err);
});



const signInUser = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);

  firebase.auth().signInWithPopup(provider).then((user) => {
    if (user.additionalUserInfo?.isNewUser){
        const userInfo = {
        FirstName: user.user?.FirstName,
        LastName: user.user?.LastName,
        ProfilePicURL: user.user?.ProfilePicURL,
        firebase_Uid: user.user?.uid,
        Bio: user.user?.Bio,
      }

      //add the user to your api and database

      window.location.href = '/api/users';
    }
  });
};

const signOutUser = () => new Promise((resolve, reject) => {
  firebase.auth().signOut().then(resolve).catch(reject);
});

export { signInUser, signOutUser };
