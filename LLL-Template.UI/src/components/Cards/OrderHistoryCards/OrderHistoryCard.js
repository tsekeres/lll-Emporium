import React from 'react';
import PropTypes from 'prop-types';
import {
  OrderHistoryCardOuterDiv,
  OrderDataDetailDiv,
  OrderDataDiv
} from './OrderHistoryCardElements';

const OrderHistoryCard = ({
  order
}) => (
    <OrderHistoryCardOuterDiv>
      <OrderDataDiv>
        <OrderDataDetailDiv>Order Number: {order?.id}</OrderDataDetailDiv>
        <OrderDataDetailDiv>Order Date: {order?.orderDate}</OrderDataDetailDiv>
      </OrderDataDiv>
    </OrderHistoryCardOuterDiv>
);

OrderHistoryCard.propTypes = {
  order: PropTypes.object
};

export default OrderHistoryCard;
