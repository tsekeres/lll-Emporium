import React from 'react';
import PropTypes from 'prop-types';
import {
  SearchBarContainer,
} from './SearchBarElements';

// eslint-disable-next-line import/no-named-as-default-member
export default function SearchBar1({ toggle2, isOpen }) {
  return (
    // eslint-disable-next-line import/no-named-as-default-member
    <SearchBarContainer className="SearchBar"
    isOpen={isOpen}
    onClick={toggle2}>
    </SearchBarContainer>
  );
}

SearchBar1.propTypes = {
  toggle2: PropTypes.any,
  isOpen: PropTypes.any,
};
