import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { updateOrderLine } from '../../../helpers/data/lineItemData';
import {
  LineItemOuterDiv,
  LineItemDescriptionDiv,
  ProductIconDiv,
  ProductIconImg,
  LineItemCountDisplay,
  LineItemRemoveButton,
} from './CartLineItemElements';

const LineItemDetailCard = ({
  lineItem,
  lineItemsUpdated,
  setLineItemsUpdated,
  hasTransactions
}) => {
  const [cardLineItem, setCardLineItem] = useState({});
  const [quantityOptions, setQuantityOptions] = useState({});

  useEffect(() => {
    let mounted = true;
    if (mounted && lineItem) {
      setCardLineItem(lineItem);
    }
    return () => {
      mounted = false;
    };
  }, [lineItem]);

  // setup quantity select
  useEffect(() => {
    let mounted = true;
    const optionsArr = [];
    if (mounted && lineItem) {
      for (let i = 1; i <= lineItem.inventoryCount && i < 100; i += 1) {
        const options = {
          value: i,
          label: i
        };
        optionsArr.push(options);
      }
      setQuantityOptions(optionsArr);
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
    /*
    setCardLineItem((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value ? e.target.value : ''
    }));
    */
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
      quantity: e.value,
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
        : <LineItemCountDisplay><Select
          options={quantityOptions}
          name='quantity' defaultInputValue='1'
          onChange={handleUpdateQuantities} /> </LineItemCountDisplay> }
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
