import React from 'react';
import PropTypes from 'prop-types';

import {
  ShippingLineDiv,
  BillingLineDiv,
  BillingLineFigure,
  MessageLineDiv
} from './OrderShippingPaymentElements';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

const OrderShippingPaymentCard = ({
  user,
  order,
  totalPayments,
  orderSubTotal,
  shippingCost,
}) => (
  <>
    <ShippingLineDiv>Shipped to: </ShippingLineDiv>
    <ShippingLineDiv>{user.firstName} {user.lastName}</ShippingLineDiv>
    <ShippingLineDiv>{order.shippingAddress}</ShippingLineDiv>
    <ShippingLineDiv>{order.shippingCity}</ShippingLineDiv>
    <ShippingLineDiv>{order.shippingState}</ShippingLineDiv>
    <ShippingLineDiv>{order.shippingZip}</ShippingLineDiv>
    <BillingLineDiv>Order Sub-Total <BillingLineFigure>{currencyFormatter.format(orderSubTotal)}</BillingLineFigure></BillingLineDiv>
    <BillingLineDiv>Shipping: <BillingLineFigure>{currencyFormatter.format(shippingCost)}</BillingLineFigure></BillingLineDiv>
    <BillingLineDiv>Order Total:<BillingLineFigure>{currencyFormatter.format(orderSubTotal + shippingCost)}</BillingLineFigure> </BillingLineDiv>
    <BillingLineDiv>Total Payments:<BillingLineFigure>{currencyFormatter.format(totalPayments)}</BillingLineFigure></BillingLineDiv>
    <BillingLineDiv>Balance Due:<BillingLineFigure>{currencyFormatter.format(orderSubTotal + shippingCost - totalPayments)}</BillingLineFigure></BillingLineDiv>
    <MessageLineDiv>Thank you for your order!</MessageLineDiv>
  </>
);

OrderShippingPaymentCard.propTypes = {
  user: PropTypes.any,
  order: PropTypes.object,
  totalPayments: PropTypes.number,
  orderSubTotal: PropTypes.number,
  shippingCost: PropTypes.number
};

export default OrderShippingPaymentCard;
