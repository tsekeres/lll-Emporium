import React from 'react';
import PropTypes from 'prop-types';
import {
  SearchBarBar,
} from './SearchBarElements';

export default function SearchBar({ toggle2, isOpen2 }) {
  return (
    <SearchBarBar
      className="SearchBarBar"
      toggle2={toggle2}
      isOpen2={isOpen2}
      // isOpen2={isOpen2}
    >
    </SearchBarBar>
  );
}

SearchBar.propTypes = {
  toggle2: PropTypes.any,
  isOpen2: PropTypes.any,
};
