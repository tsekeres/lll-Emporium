import React from 'react';
import PropTypes from 'prop-types';
import {
  LineItemOuterDiv,
  LineItemDescriptionDiv,
  ProductIconDiv,
  ProductIconImg
} from './LineItemDetailCardElements';

const LineItemDetailCard = ({
  lineItem
}) => (
  <LineItemOuterDiv>
    <ProductIconDiv>
        <ProductIconImg
          src={lineItem?.productImageUrl}
          alt="Product Image" />
      </ProductIconDiv>
    <LineItemDescriptionDiv>
      {lineItem?.productName}
    </LineItemDescriptionDiv>
    <LineItemDescriptionDiv>
      {lineItem?.productDescription}
    </LineItemDescriptionDiv>
  </LineItemOuterDiv>
);

LineItemDetailCard.propTypes = {
  lineItem: PropTypes.string
};

export default LineItemDetailCard;
