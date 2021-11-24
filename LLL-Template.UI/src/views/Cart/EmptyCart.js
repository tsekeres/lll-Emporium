import React from 'react';

import {
  OrderOuterDiv,
  EmptyCartDiv
} from './OrderElements';

const EmptyCart = () => (
  <OrderOuterDiv>
    <EmptyCartDiv>Your Cart is Empty</EmptyCartDiv>
  </OrderOuterDiv>

);

export default EmptyCart;
