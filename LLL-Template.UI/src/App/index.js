import React, { useState, useEffect } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Sidebar from '../components/Sidebar/Sidebar';
import Home from '../views/Home/Home';
import { Categories } from '../views/Categories/Categories';
import { AboutUs } from '../views/AboutUs/AboutUs';

export default function App() {
  // const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

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
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle}/>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
        <Categories/>
        <AboutUs/>
      </Router>
    </div>
  );
}
