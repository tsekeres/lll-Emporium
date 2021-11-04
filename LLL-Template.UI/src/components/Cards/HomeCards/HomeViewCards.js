/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Item, Button } from './HomeViewCardElements';

export const HomeViewCards = ({ id, categoryName }) => {
  return (
    <Item className="Item" key={id}>
      <Button>{categoryName}</Button>
    </Item>
  );
};

HomeViewCards.propTypes = {
  id: PropTypes.string,
  categoryName: PropTypes.string,
};

export default HomeViewCards;
