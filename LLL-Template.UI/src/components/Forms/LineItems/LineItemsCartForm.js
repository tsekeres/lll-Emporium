import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  OrderLineItemsFormOuterDiv,
  OrderLineItemsUL,
  OrderLineItemsLI,
} from './LineItemsCartFormElements';
import CartLineItem from '../../Cards/OrderHistoryCards/CartLineItem';

const LineItemsCartForm = ({
  lineItemsList,
  lineItemsUpdated,
  setLineItemsUpdated
}) => {
  const [formList, setFormList] = useState([]);
  // const [quantity, setQuantity] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted && lineItemsList) {
      setFormList(lineItemsList);
      setLineItemsUpdated(!lineItemsUpdated);
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
            lineItem={lineObj}
            lineItemsUpdated={lineItemsUpdated}
            setLineItemsUpdated={setLineItemsUpdated} />
          </OrderLineItemsLI>) : '' }
      </OrderLineItemsUL>
    </OrderLineItemsFormOuterDiv>
  );
};

LineItemsCartForm.propTypes = {
  lineItemsList: PropTypes.array,
  lineItemsUpdated: PropTypes.bool,
  setLineItemsUpdated: PropTypes.func
};

export default LineItemsCartForm;
