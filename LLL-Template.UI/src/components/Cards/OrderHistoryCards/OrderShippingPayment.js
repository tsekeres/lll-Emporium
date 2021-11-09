import React from 'react';
import PropTypes from 'prop-types';
import {
  ShippingLineDiv,
  BillingLineDiv,
  MessageLineDiv
} from './OrderShippingPaymentElements';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

const OrderShippingPaymentCard = ({
  order,
  totalPayments,
  orderSubTotal,
  shippingCost,
}) => (
  <>
    <ShippingLineDiv>Shipped to: </ShippingLineDiv>
    <ShippingLineDiv>{order.shippingAddress}</ShippingLineDiv>
    <ShippingLineDiv>{order.shippingCity}</ShippingLineDiv>
    <ShippingLineDiv>{order.shippingState}</ShippingLineDiv>
    <ShippingLineDiv>{order.shippingZip}</ShippingLineDiv>
    <BillingLineDiv>Order Sub-Total {currencyFormatter.format(orderSubTotal)}</BillingLineDiv>
    <BillingLineDiv>Shipping: {currencyFormatter.format(shippingCost)}</BillingLineDiv>
    <BillingLineDiv>Order Total: {currencyFormatter.format(orderSubTotal + shippingCost)}</BillingLineDiv>
    <BillingLineDiv>Total Payments: {currencyFormatter.format(totalPayments)}</BillingLineDiv>
    <BillingLineDiv>Balance Due: {currencyFormatter.format(orderSubTotal + shippingCost - totalPayments)}</BillingLineDiv>
    <MessageLineDiv>Thank you for your order!</MessageLineDiv>
  </>
);

OrderShippingPaymentCard.propTypes = {
  order: PropTypes.object,
  totalPayments: PropTypes.number,
  orderSubTotal: PropTypes.number,
  shippingCost: PropTypes.number
};

export default OrderShippingPaymentCard;
