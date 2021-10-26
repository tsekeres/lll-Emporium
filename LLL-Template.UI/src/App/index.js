import React, { useEffect } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import getProducts from '../helpers/Data/ProductsData';
import Home from '../views/Home/Home';

export default function App() {
  // const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  useEffect(() => {
  //   firebase.auth().onAuthStateChanged((authed) => {
  //     if (authed) {
  //       const userInfoObj = {
  //         fullName: authed.displayName,
  //         profileImage: authed.photoURL,
  //         uid: authed.uid,
  //         user: authed.email.split('@')[0],
  //       };
  //       setUser(userInfoObj);
  //     } else if (user || user === null) {
  //       setUser(false);
  //     }
  //   });
  }, []);

  return (
    <div className='App'>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}
