import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { getLineItemsByOrderId, updateOrderLine, deleteOrderLine } from '../../../helpers/data/lineItemData';
import {
  LineItemOuterDiv,
  LineItemDescriptionOuterDiv,
  LineItemDescriptionDiv,
  ProductIconDiv,
  ProductIconImg,
  LineItemCountDisplay,
  LineItemRemoveButton,
} from './CartLineItemElements';
import { calculateCartCount } from '../../../helpers/data/calculators';

const LineItemDetailCard = ({
  order,
  user,
  lineItem,
  toggleQuantitiesUpdated,
  toggleLineItemRemoved,
  hasTransactions,
  setCartCount
}) => {
  const [quantityOptions, setQuantityOptions] = useState([]);
  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  const history = useHistory();

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
    deleteOrderLine(removeId)
      .then(() => getLineItemsByOrderId(order.id)
        .then((lineItemList) => {
          toggleLineItemRemoved();
          if (order.customerId === user.id) {
            setCartCount(calculateCartCount(lineItemList));
          }
        }));
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
      .then(() => getLineItemsByOrderId(order.id)
        .then((lineItemList) => {
          toggleQuantitiesUpdated();
          // update the cart icon if this is the cart owner and not an admin
          if (order.customerId === user.id) {
            setCartCount(calculateCartCount(lineItemList));
          }
        }));
  };

  const handleClick = () => {
    history.push(`/products/${lineItem.productId}`);
  };

  return (
    <LineItemOuterDiv >
      <ProductIconDiv>
          <ProductIconImg className='product-icon-img'
            onClick={handleClick}
            src={lineItem?.productImageUrl}
            alt="Product Image" />
        </ProductIconDiv>
      <LineItemDescriptionOuterDiv className='line-item-outer-div'>
        <LineItemDescriptionDiv onClick={handleClick}>
          {lineItem?.productName}
        </LineItemDescriptionDiv>
        <LineItemDescriptionDiv onClick={handleClick}>
          {lineItem?.productDescription}
        </LineItemDescriptionDiv>
      </LineItemDescriptionOuterDiv>
      <div>{`Each: ${currencyFormatter.format(lineItem?.unitPrice - lineItem?.discount)}`}
        { lineItem?.discount ? ` (${currencyFormatter.format(lineItem?.discount)} discount)` : '' }</div>
      { hasTransactions ? ''
        : <LineItemRemoveButton
        id={`remove_${lineItem.id}`}
        onClick={handleRemove}>Remove</LineItemRemoveButton> }
      { (lineItem.inventoryCount && (hasTransactions ? <LineItemCountDisplay>Qty: {lineItem.quantity}</LineItemCountDisplay>
        : <LineItemCountDisplay><Select
          options={quantityOptions}
          name='quantity' defaultValue={{ value: `${lineItem.quantity}`, label: `${lineItem.quantity}` }}
          onChange={handleUpdateQuantities} /> </LineItemCountDisplay>))
          || (!lineItem.inventoryCount
                && (hasTransactions ? <LineItemCountDisplay>Qty {lineItem.quantity}</LineItemCountDisplay>
                  : <LineItemCountDisplay>Out of Stock</LineItemCountDisplay>)) }
    </LineItemOuterDiv>
  );
};

LineItemDetailCard.propTypes = {
  order: PropTypes.object,
  user: PropTypes.any,
  lineItem: PropTypes.object,
  toggleQuantitiesUpdated: PropTypes.func,
  toggleLineItemRemoved: PropTypes.func,
  hasTransactions: PropTypes.bool,
  setCartCount: PropTypes.func
};

export default LineItemDetailCard;
