import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Sidebar from '../components/Sidebar/Sidebar';
import { Footer } from '../components/Footer/Footer';
import Routes from '../helpers/Routes';

export default function App() {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0],
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <NavBar toggle={toggle} user={user} />
        <Routes user={user}></Routes>
        <Footer />
      </Router>
    </div>
  );
}
