/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import { getCategories } from '../helpers/data/categoryData';
import { getProductTypes } from '../helpers/data/productTypesData';
import { getProducts } from '../helpers/data/productData';
import Sidebar from '../components/Sidebar/Sidebar';
import { Footer } from '../components/Footer/Footer';
import Routes from '../helpers/Routes';
import NavBar from '../components/Navbar/NavBar';
import { getUserWithRoleByEmail } from '../helpers/data/userData';
import { getShoppingCart } from '../helpers/data/orderData';
import { getLineItemsByOrderId } from '../helpers/data/lineItemData';

export default function App() {
  const [categories, setCategories] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [cartId, setCartId] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [lineItemsUpdated, setLineItemsUpdated] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userObj) => {
      if (userObj) {
        userObj.getIdToken().then((token) => sessionStorage.setItem('token', token));
        getUserWithRoleByEmail(userObj.email).then((responseObj) => {
          // getUserWithRoleByEmail can be called before a new
          // user is entered into the database due to a promise delay.
          // When the user is entered, useEffect will be called again
          // and we can set the user;
          if (responseObj !== '') {
            setUser(responseObj);
          } else setUser(false);
        });
        getCategories().then((categoryArray) => setCategories(categoryArray));
        getProductTypes().then((response) => setProductTypes(response));
        getProducts().then((response) => setProducts(response));
      } else {
        setUser(false);
        getCategories().then((categoryArray) => setCategories(categoryArray));
        getProductTypes().then((response) => setProductTypes(response));
        getProducts().then((response) => setProducts(response));
      }
    });
  }, []);

  useEffect(() => {
    let mounted = true;
    if (user) {
      getShoppingCart(user.id).then((cart) => {
        if (cart.length !== 0 && cart.id != null) {
          setCartId(cart.id);
          getLineItemsByOrderId(cart.id)
            .then((itemList) => {
              setCartCount(itemList.length);
            });
        } else {
          setCartId('');
          setCartCount(0);
        }
      });
    } else {
      setCartId('');
      setCartCount(0);
    }
    return () => {
      mounted = false;
      return mounted;
    };
  }, [user, lineItemsUpdated]);

  return (
    <div className='App'>
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} user={user} />
        <NavBar toggle={toggle} user={user}
          cartCount={cartCount} cartId={cartId}/>
        <Routes user={user} categories={categories} setCategories={setCategories} productTypes={productTypes} setProductTypes={setProductTypes}
                products={products} setProducts={setProducts}
                cartCount={cartCount} setCartCount={setCartCount}
                cartId={cartId} setCartId={setCartId}
                lineItemsUpdated={lineItemsUpdated} setLineItemsUpdated = {setLineItemsUpdated}/>
        <Footer />
      </Router>
    </div>
  );
}
