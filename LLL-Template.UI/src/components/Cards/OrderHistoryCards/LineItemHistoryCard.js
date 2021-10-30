import React from 'react';
import PropTypes from 'prop-types';
import {
  LineItemOuterDiv,
  ProductsIconDiv,
  ProductsIconImg,
  LineItemDescriptionDiv
} from './LineItemHistoryCardElements';

const LineItemHistoryCard = ({
  lineItem
}) => (
  <LineItemOuterDiv>
    <ProductsIconDiv>
        <ProductsIconImg
          src={lineItem.productImageUrl}
          alt="Product Image" />
      </ProductsIconDiv>
    <LineItemDescriptionDiv>
      {lineItem.productName}
    </LineItemDescriptionDiv>
  </LineItemOuterDiv>
);

LineItemHistoryCard.propTypes = {
  lineItem: PropTypes.object
};

export default LineItemHistoryCard;
