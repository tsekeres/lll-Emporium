import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { updateOrderLine } from '../../../helpers/data/lineItemData';
import {
  LineItemOuterDiv,
  LineItemDescriptionDiv,
  ProductIconDiv,
  ProductIconImg,
  LineItemCountSelect,
  LineItemCountDisplay,
  LineItemRemoveButton
} from './CartLineItemElements';

const LineItemDetailCard = ({
  lineItem,
  lineItemsUpdated,
  setLineItemsUpdated,
  hasTransactions
}) => {
  const [cardLineItem, setCardLineItem] = useState({});

  useEffect(() => {
    let mounted = true;
    if (mounted && lineItem) {
      setCardLineItem(lineItem);
      console.warn(hasTransactions);
      console.warn('hello');
    }
    return () => {
      mounted = false;
    };
  }, [lineItem]);

  const handleRemove = (e) => {
    console.warn('Remove');
    console.warn(e.target.id);
    // setLineItemsUpdated(!lineItemsUpdated);
  };

  const handleUpdateQuantities = (e) => {
    setCardLineItem((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value ? e.target.value : ''
    }));
    // lineItem is a join of two tables, so we have to pare down
    // to an object corresponding to the OrderLine table model
    // The product id and order id are required due to constraints,
    // and the quantity is the only thing that needs to change.
    // However, numeric data also has to be included or the values
    // in the database return to zero.
    const lineObj = {
      orderId: lineItem.orderId,
      productId: lineItem.productId,
      unitPrice: lineItem.unitPrice,
      quantity: e.target.value,
      discount: lineItem.discount
    };
    updateOrderLine(lineItem.id, lineObj)
      .then(setLineItemsUpdated(!lineItemsUpdated));
  };

  return (
    <LineItemOuterDiv>
      <ProductIconDiv>
          <ProductIconImg
            src={cardLineItem?.productImageUrl}
            alt="Product Image" />
        </ProductIconDiv>
      <LineItemDescriptionDiv>
        {cardLineItem?.productName}
      </LineItemDescriptionDiv>
      <LineItemDescriptionDiv>
        {cardLineItem?.productDescription}
      </LineItemDescriptionDiv>
      { hasTransactions ? ''
        : <LineItemRemoveButton
        name={cardLineItem.id}
        onClick={handleRemove}>Remove</LineItemRemoveButton> }
      { hasTransactions ? <LineItemCountDisplay>Qty: {cardLineItem.quantity}</LineItemCountDisplay>
        : <LineItemCountSelect
        type='number' id={cardLineItem.id} value={cardLineItem.quantity || ''}
        name='quantity' min='1' max={cardLineItem.inventoryCount} onChange={handleUpdateQuantities} /> }
    </LineItemOuterDiv>
  );
};

LineItemDetailCard.propTypes = {
  lineItem: PropTypes.object,
  lineItemsUpdated: PropTypes.bool,
  setLineItemsUpdated: PropTypes.func,
  hasTransactions: PropTypes.bool
};

export default LineItemDetailCard;
