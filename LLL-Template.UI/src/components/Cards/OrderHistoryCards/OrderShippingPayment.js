import React from 'react';
import PropTypes from 'prop-types';

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
    <div>Shipped to: </div>
    <div>{order.shippingAddress}</div>
    <div>{order.shippingCity}</div>
    <div>{order.shippingState}</div>
    <div>{order.shippingZip}</div>
    <div>Order Sub-Total {currencyFormatter.format(orderSubTotal)}</div>
    <div>Shipping: {currencyFormatter.format(shippingCost)}</div>
    <div>Order Total: {currencyFormatter.format(orderSubTotal + shippingCost)}</div>
    <div>Total Payments: {currencyFormatter.format(totalPayments)}</div>
    <div>Balance Due: {currencyFormatter.format(orderSubTotal + shippingCost - totalPayments)}</div>
  </>
);

OrderShippingPaymentCard.propTypes = {
  order: PropTypes.object,
  totalPayments: PropTypes.number,
  orderSubTotal: PropTypes.number,
  shippingCost: PropTypes.number
};

export default OrderShippingPaymentCard;
