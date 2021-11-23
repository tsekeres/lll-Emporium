import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import { getProducts } from '../../helpers/data/productData';
import { SearchBarBar } from './SearchBarElements';

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
    history.replace(`/products/${e.value}`);
    window.location.reload(false);
  });

  return (
    <SearchBarBar>
      <Select options={options} onChange={handleSelectClick} defaultValue={{ value: '', label: 'Search Our Products' }}/>
    </SearchBarBar>
  );
};

export default SearchBar;
