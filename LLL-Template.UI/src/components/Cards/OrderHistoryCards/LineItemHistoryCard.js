import React from 'react';
import PropTypes from 'prop-types';
import LineItemHistoryCardDiv from './LineItemHistoryCardElements';

const LineItemHistoryCard = ({
  lineItem
}) => (
  <LineItemHistoryCardDiv>
    {lineItem.productName}
  </LineItemHistoryCardDiv>

);

LineItemHistoryCard.propTypes = {
  lineItem: PropTypes.object
};

export default LineItemHistoryCard;
