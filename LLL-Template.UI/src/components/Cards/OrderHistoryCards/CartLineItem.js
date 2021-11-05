import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { updateOrderLine } from '../../../helpers/data/lineItemData';
import {
  LineItemOuterDiv,
  LineItemDescriptionDiv,
  ProductIconDiv,
  ProductIconImg,
  LineItemCountSelect,
  LineItemUpdateButton
} from './CartLineItemElements';

const LineItemDetailCard = ({
  lineItem,
  lineItemsUpdated,
  setLineItemsUpdated
}) => {
  const [cardLineItem, setCardLineItem] = useState({});

  useEffect(() => {
    let mounted = true;
    if (mounted && lineItem) {
      setCardLineItem(lineItem);
    }
    return () => {
      mounted = false;
    };
  }, [lineItem]);

  const handleDelete = (e) => {
    console.warn('Delete');
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
      <LineItemUpdateButton
        name={cardLineItem.id}
        onClick={handleDelete}>Delete</LineItemUpdateButton>
      <LineItemCountSelect
        type='number' id={cardLineItem.id} value={cardLineItem.quantity || ''}
        name='quantity' min='1' max={cardLineItem.inventoryCount} onChange={handleUpdateQuantities} />
    </LineItemOuterDiv>
  );
};

LineItemDetailCard.propTypes = {
  lineItem: PropTypes.object,
  lineItemsUpdated: PropTypes.bool,
  setLineItemsUpdated: PropTypes.func
};

export default LineItemDetailCard;
