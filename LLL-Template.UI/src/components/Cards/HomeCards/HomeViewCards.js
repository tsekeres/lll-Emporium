/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './HomeViewCardElements';

export const HomeViewCards = ({ id, categoryName }) => {
  return (
    <Item className="Item" key={id}>
      {categoryName}
    </Item>
  );
};

HomeViewCards.propTypes = {
  id: PropTypes.string,
  categoryName: PropTypes.string,
};

export default HomeViewCards;
