/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Item, Button } from './HomeViewCardElements';

export const HomeViewCards = ({ id, categoryName }) => {
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'view':
        history.push(`/categories/${id}`);
        break;
      default:
        console.warn('Nothing selected');
    }
  };

  return (
    <Item className="Item" key={id}>
      <Button onClick={() => handleClick('view')}>{categoryName}</Button>
    </Item>
  );
};

HomeViewCards.propTypes = {
  id: PropTypes.string,
  categoryName: PropTypes.string,
};

export default HomeViewCards;
