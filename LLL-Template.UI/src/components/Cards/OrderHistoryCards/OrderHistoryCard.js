import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
// import GetLineItemsByOrderId from '../../../helpers/data/lineItemData';
import { getOrderWithDetail } from '../../../helpers/data/orderData';
import { calculateTotalPayments } from '../../../helpers/data/calculators';
import LineItemHistoryCard from './LineItemHistoryCard';
import {
  OrderHistoryCardOuterDiv,
  OrderDataDetailDiv,
  OrderDataDiv,
  OrderLineItemsDiv,
  FinanceDiv,
  FinanceLineDiv
} from './OrderHistoryCardElements';

const formatDate = (dateString) => {
  let output = '';
  for (let i = 0; i < 10 && i < dateString.length; i += 1) {
    output += dateString[i];
  }
  return output;
};

const calculateTotal = (itemsObj) => {
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
  const [balanceDue, setBalanceDue] = useState(0);
  const history = useHistory();
  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  useEffect(() => {
    let mounted = true;
    getOrderWithDetail(order.id).then((itemsObj) => {
      setLineItems(itemsObj.lineItems);
      const total = calculateTotal(itemsObj);
      const payments = calculateTotalPayments(itemsObj.transactionItems);
      setBalanceDue(parseFloat((total - payments).toFixed(2)));
      setOrderTotal(total);
    });
    return () => {
      mounted = false;
      return mounted;
    };
  }, []);

  const handleOrderDivClick = () => {
    history.push(`/orders/${order.id}`);
  };

  return (
    <OrderHistoryCardOuterDiv>
      <OrderDataDiv onClick={handleOrderDivClick}>
        <OrderDataDetailDiv>Order Number: {order?.id}</OrderDataDetailDiv>
        <OrderDataDetailDiv>Order Date: {formatDate(order?.orderDate)}</OrderDataDetailDiv>
       </OrderDataDiv>
       <OrderLineItemsDiv>
        { lineItems.map((orderLine) => <LineItemHistoryCard
          key={orderLine.id}
          lineItem={orderLine}
          />) }
      </OrderLineItemsDiv>
      <FinanceDiv>
        <FinanceLineDiv>
          Order Total: {currencyFormatter.format(orderTotal)}
        </FinanceLineDiv>
      { balanceDue !== 0.00 ? (<FinanceLineDiv>
          Balance Due: {currencyFormatter.format(balanceDue)}
        </FinanceLineDiv>) : '' }
      </FinanceDiv>
    </OrderHistoryCardOuterDiv>
  );
};

OrderHistoryCard.propTypes = {
  order: PropTypes.object
};

export default OrderHistoryCard;
