import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import GetLineItemsByOrderId from '../../../helpers/data/lineItemData';
import { getOrderWithDetail } from '../../../helpers/data/orderData';
import LineItemHistoryCard from './LineItemHistoryCard';
import {
  OrderHistoryCardOuterDiv,
  OrderDataDetailDiv,
  OrderDataDiv,
  OrderLineItemsDiv,
  OrderTotalDiv,
} from './OrderHistoryCardElements';

const FormatDate = (dateString) => {
  let output = '';
  for (let i = 0; i < 10 && i < dateString.length; i += 1) {
    output += dateString[i];
  }
  return output;
};

const CalculateTotal = (itemsObj) => {
  let total = 0.0;
  itemsObj.lineItems.forEach((item) => {
    total += item.unitPrice;
  });
  total += itemsObj.order.shippingCost;
  return total;
};

const OrderHistoryCard = ({
  order
}) => {
  const [lineItems, setLineItems] = useState([]);
  const [orderTotal, setOrderTotal] = useState('');
  useEffect(() => {
    // console.warn(order.id);
    getOrderWithDetail(order.id).then((itemsObj) => {
      // console.warn(itemsObj.lineItems);
      setLineItems(itemsObj.lineItems);
      setOrderTotal(CalculateTotal(itemsObj));
    });
  }, []);

  return (
    <OrderHistoryCardOuterDiv>
      <OrderDataDiv>
        <OrderDataDetailDiv>Order Number: {order?.id}</OrderDataDetailDiv>
        <OrderDataDetailDiv>Order Date: {FormatDate(order?.orderDate)}</OrderDataDetailDiv>
       </OrderDataDiv>
       <OrderLineItemsDiv>
        { lineItems.map((orderLine) => <LineItemHistoryCard
          key={orderLine.id}
          lineItem={orderLine}
          />) }
      </OrderLineItemsDiv>
      <OrderTotalDiv>
        {'\u0024'}{orderTotal}
      </OrderTotalDiv>
    </OrderHistoryCardOuterDiv>
  );
};

OrderHistoryCard.propTypes = {
  order: PropTypes.object
};

export default OrderHistoryCard;