import React from 'react';
import PropTypes from 'prop-types';
import LineItemDetailCard from '../../Cards/OrderHistoryCards/LineItemDetailCard';

import {
  OrderLineItemsUL,
  OrderLineItemsLI,
  OrderLineCheckBox,
  OrderLineCountSelect
} from './LineItemsCartFormElements';

const LineItemsCartForm = ({
  lineItemsList
}) => (

    <OrderLineItemsUL>
        { lineItemsList ? lineItemsList.map((lineObj) => <OrderLineItemsLI
          key={lineObj.id}>
          <LineItemDetailCard
            lineItem={lineObj} />
          <OrderLineCheckBox
            type='checkbox' name={lineObj.id} value='true'>
          </OrderLineCheckBox>
          <OrderLineCountSelect
            type='number'id={lineObj.id} value={lineObj.quantity} />
          </OrderLineItemsLI>) : '' }
        </OrderLineItemsUL>
);

LineItemsCartForm.propTypes = {
  lineItemsList: PropTypes.array
};

export default LineItemsCartForm;
