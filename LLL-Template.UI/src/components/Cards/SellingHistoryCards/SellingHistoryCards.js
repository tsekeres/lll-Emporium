/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import {
  SHCard,
  SHCardFooter,
  SHCardImg,
  SHCardFooterLine,
} from './SellingHistoryCardElements';

export const SHCards = ({
  id,
  productTypeId,
  designerId,
  productName,
  productImageUrl,
  price,
  inventoryCount,
  customerId,
  orderDate,
  orderId,
  quantity,
  orderLineId,
}) => {
  return (
    <SHCard className='SHCard' key={id} id='SHCard'>
      <SHCardImg src={productImageUrl}/>
      <SHCardFooter className='SHCardFooter'>
        <SHCardFooterLine>
          {productName}
        </SHCardFooterLine>
        <SHCardFooterLine>
          Product Type: {productTypeId}
        </SHCardFooterLine>
        <SHCardFooterLine>
          Designer: {designerId}
        </SHCardFooterLine>
        <SHCardFooterLine>
          Price: {price}
        </SHCardFooterLine>
        <SHCardFooterLine>
          Inventory Count: {inventoryCount}
        </SHCardFooterLine>
        <SHCardFooterLine>
          Customer Id: {customerId}
        </SHCardFooterLine>
        <SHCardFooterLine>
          Order Date: {orderDate}
        </SHCardFooterLine>
        <SHCardFooterLine>
          Order Id: {orderId}
        </SHCardFooterLine>
        <SHCardFooterLine>
          Quantity Ordered: {quantity}
        </SHCardFooterLine>
        <SHCardFooterLine>
        OrderLine Id:{orderLineId}
        </SHCardFooterLine>
      </SHCardFooter>
    </SHCard>
  );
};

SHCards.propTypes = {
  user: PropTypes.any,
  id: PropTypes.string.isRequired,
  productTypeId: PropTypes.any,
  designerId: PropTypes.any,
  productName: PropTypes.any,
  productDescription: PropTypes.any,
  productImageUrl: PropTypes.any,
  price: PropTypes.any,
  inventoryCount: PropTypes.any,
  customerId: PropTypes.any,
  orderDate: PropTypes.any,
  orderId: PropTypes.any,
  quantity: PropTypes.any,
  orderLineId: PropTypes.any,
};

export default SHCards;
