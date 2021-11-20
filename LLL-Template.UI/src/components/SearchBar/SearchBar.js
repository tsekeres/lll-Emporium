import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
// import {
//   SearchBarBar,
// } from './SearchBarElements';
import { getProducts } from '../../helpers/data/productData';

const SearchBar = () => {
  const history = useHistory();
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const optionsArr = [];
    getProducts().then((resultArr) => {
      for (let i = 0; i < resultArr.length; i += 1) {
        const option = {
          value: resultArr[i].id,
          label: `${resultArr[i].productName}`
        };
        optionsArr.push(option);
      }
      setOptions(optionsArr);
    })
      .catch(setOptions([]));
  }, []);

  const handleSelectClick = ((e) => {
    history.push(`/products/${e.value}`);
  });

  return (
    <Select
      options={options}
      onChange={handleSelectClick}/>
  );
};

export default SearchBar;
