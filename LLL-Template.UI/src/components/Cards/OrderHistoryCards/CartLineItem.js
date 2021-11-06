import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { updateOrderLine, deleteOrderLine } from '../../../helpers/data/lineItemData';
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
  const [quantityOptions, setQuantityOptions] = useState([]);
  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

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
    const removeId = e.target.id.split('_')[1];
    deleteOrderLine(removeId).then(() => setLineItemsUpdated(!lineItemsUpdated));
  };

  const handleUpdateQuantities = (e) => {
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
            src={lineItem?.productImageUrl}
            alt="Product Image" />
        </ProductIconDiv>
      <LineItemDescriptionDiv>
        {lineItem?.productName}
      </LineItemDescriptionDiv>
      <LineItemDescriptionDiv>
        {lineItem?.productDescription}
      </LineItemDescriptionDiv>
      <div>{`Each: ${currencyFormatter.format(lineItem?.unitPrice - lineItem?.discount)}`}
        { lineItem?.discount ? ` (${currencyFormatter.format(lineItem?.discount)} discount)` : '' }</div>
      { hasTransactions ? ''
        : <LineItemRemoveButton
        id={`remove_${lineItem.id}`}
        onClick={handleRemove}>Remove</LineItemRemoveButton> }
      { hasTransactions ? <LineItemCountDisplay>Qty: {lineItem.quantity}</LineItemCountDisplay>
        : <LineItemCountDisplay><Select
          options={quantityOptions}
          name='quantity' defaultValue={{ value: `${lineItem.quantity}`, label: `${lineItem.quantity}` }}
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
