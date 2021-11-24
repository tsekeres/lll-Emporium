import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  LineItemOuterDiv,
  ProductsIconDiv,
  ProductsIconImg,
  LineItemDescriptionDiv
} from './LineItemHistoryCardElements';

const LineItemHistoryCard = ({
  lineItem
}) => {
  const history = useHistory();
  const lineItemHandleClick = () => {
    history.push(`/products/${lineItem.productId}`);
  };

  return (
    <LineItemOuterDiv className='line-item-outer-div' onClick={lineItemHandleClick}>
      <ProductsIconDiv>
          <ProductsIconImg className='line-item-product-image'
            src={lineItem.productImageUrl}
            alt="Product Image" />
        </ProductsIconDiv>
      <LineItemDescriptionDiv className='line-item-product-description'>
        {lineItem.productName}
      </LineItemDescriptionDiv>
    </LineItemOuterDiv>
  );
};

LineItemHistoryCard.propTypes = {
  lineItem: PropTypes.object
};

export default LineItemHistoryCard;
