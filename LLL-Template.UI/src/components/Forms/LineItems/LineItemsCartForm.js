import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  OrderLineItemsFormOuterDiv,
  OrderLineItemsUL,
  OrderLineItemsLI,
} from './LineItemsCartFormElements';
import CartLineItem from '../../Cards/OrderHistoryCards/CartLineItem';

const LineItemsCartForm = ({
  orderId,
  lineItemsList,
  lineItemsUpdated,
  setLineItemsUpdated,
  hasTransactions,
  setCartCount
}) => {
  const [formList, setFormList] = useState([]);
  // const [quantity, setQuantity] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted && lineItemsList) {
      setFormList(lineItemsList);
    }
    return () => {
      mounted = false;
    };
  }, [lineItemsList]);

  return (
    <OrderLineItemsFormOuterDiv>
      <OrderLineItemsUL>
        { formList.length ? formList?.map((lineObj) => <OrderLineItemsLI
          key={lineObj.id}>
          <CartLineItem
            orderId={orderId}
            lineItem={lineObj}
            lineItemsUpdated={lineItemsUpdated}
            setLineItemsUpdated={setLineItemsUpdated}
            hasTransactions={hasTransactions}
            setCartCount={setCartCount} />
          </OrderLineItemsLI>) : '' }
      </OrderLineItemsUL>
    </OrderLineItemsFormOuterDiv>
  );
};

LineItemsCartForm.propTypes = {
  orderId: PropTypes.string,
  lineItemsList: PropTypes.array,
  lineItemsUpdated: PropTypes.bool,
  setLineItemsUpdated: PropTypes.func,
  hasTransactions: PropTypes.bool,
  setCartCount: PropTypes.func
};

export default LineItemsCartForm;
