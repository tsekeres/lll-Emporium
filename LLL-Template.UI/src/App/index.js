import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import { getCategories } from '../helpers/data/categoryData';
import Sidebar from '../components/Sidebar/Sidebar';
import { Footer } from '../components/Footer/Footer';
import Routes from '../helpers/Routes';
import NavBar from '../components/Navbar/NavBar';

export default function App() {
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        authed.getIdToken().then((token) => localStorage.setItem('token', token));
        setUser(authed);
        getCategories().then((categoryArray) => setCategories(categoryArray));
      } else if (user || user === null) {
        setUser(false);
        getCategories().then((categoryArray) => setCategories(categoryArray));
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} user={user} />
        <NavBar toggle={toggle} user={user}/>
        <Routes user={user} categories={categories} setCategories={setCategories}></Routes>
        <Footer />
      </Router>
    </div>
  );
}
