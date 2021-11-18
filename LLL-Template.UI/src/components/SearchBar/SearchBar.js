import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import {
  SearchBarBar,
  ProductSearchProductOuterDiv,
  ProductSearchTitle,
  ProductSearchOuterDiv,
} from './SearchBarElements';
import { getProducts } from '../../helpers/data/productData';
import ProductCards from '../Cards/ProductCards/ProductCards';

const SearchBar = ({ toggle2, isOpen2 }) => {
  const [productList, setProductList] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const optionsArr = [];
    let mounted = true;
    if (mounted) {
      setProductList([]);
      getProducts()
        .then((productListResponse) => setProductList(productListResponse));
      // setup list of products for the select drop down
      getProducts().then((resultArr) => {
        for (let i = 0; i < resultArr.length; i += 1) {
          const option = {
            value: resultArr[i].productName,
            label: `${resultArr[i].productName}`
          };
          optionsArr.push(option);
        }
        setOptions(optionsArr);
      })
        .catch(setOptions([]));
    } else setOptions([]);
    return function cleanup() {
      mounted = false;
    };
  }, []);

  const handleSelectClick = ((e) => {
    getProducts(e.value)
      .then((productListItems) => setProductList(productListItems))
      .catch(() => setProductList([]));
  });

  return (
    <SearchBarBar
      className="SearchBarBar"
      toggle2={toggle2}
      isOpen2={isOpen2}
    >
      <ProductSearchProductOuterDiv>
      <ProductSearchTitle>Search Products</ProductSearchTitle>
      <Select
          options={options}
          onChange={handleSelectClick}/>
      </ProductSearchProductOuterDiv>
      <ProductSearchOuterDiv>
        { productList.map((product) => <ProductCards
          key={product.id}
          product={product} />) }
      </ProductSearchOuterDiv>
    </SearchBarBar>
  );
};

SearchBar.propTypes = {
  toggle2: PropTypes.any,
  isOpen2: PropTypes.any,
};

export default SearchBar;
