/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import {
  SHCard,
  SHCardFooter,
} from './SellingHistoryCardElements';

export const SHCards = ({
  user,
  id,
  productTypeId,
  designerId,
  productName,
  productDescription,
  productImageUrl,
  price,
  inventoryCount,
}) => {
  return (
    <SHCard className='SHCard' key={id} id='SHCard'>
      <SHCardFooter className='SHCardFooter'>
        {productName}
        {productTypeId}
        {designerId}
        {productDescription}
        {productImageUrl}
        {price}
        {inventoryCount}
        {user}
      </SHCardFooter>
    </SHCard>
  );
};

SHCards.propTypes = {
  user: PropTypes.any,
  id: PropTypes.string.isRequired,
  aProducts: PropTypes.any,
  allProducts: PropTypes.any,
  setAllProducts: PropTypes.func,
  productTypeId: PropTypes.any,
  designerId: PropTypes.any,
  productName: PropTypes.any,
  productDescription: PropTypes.any,
  productImageUrl: PropTypes.any,
  price: PropTypes.any,
  inventoryCount: PropTypes.any,
};

export default SHCards;
