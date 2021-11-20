/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SHCards } from '../../components/Cards/SellingHistoryCards/SellingHistoryCards';
import {
  SHContainer,
  SHWrapper,
  Column1,
} from './SellingHIstoryElements';
import { getProductWithDetail } from '../../helpers/data/productData';

export const SellingHistory = ({ user }) => {
  const [designerProducts, setDesignerProducts] = useState([]);

  useEffect(() => {
    if (user) {
      getProductWithDetail(user.id).then((productWithDetailArray) => setDesignerProducts(productWithDetailArray));
    }
  }, [user]);

  return (
    <SHContainer className="SHContainer" id="SHContainer">
      <SHWrapper className="SHWrapper" id="SH">
        <Column1 className="SHColumn1">
        {designerProducts?.map((designerProductInfo) => (
            <SHCards
              key={designerProductInfo.id}
              id={designerProductInfo.id}
              productImageUrl={designerProductInfo.productImageUrl}
              productName={designerProductInfo.productName}
              designerId = {designerProductInfo.designerId}
              productDescription={designerProductInfo.productDescription}
              inventoryCount = {designerProductInfo.inventoryCount}
              price={designerProductInfo.price}
              orderLineId={designerProductInfo.OrderLineOl}
              orderId={designerProductInfo.orderId}
              quantity={designerProductInfo.quantity}
              orderDate={designerProductInfo.orderDate}
              customerId={designerProductInfo.customerId}
              setDesignerProducts={setDesignerProducts}
              productTypeId={designerProductInfo.productTypeId}
              user={user}
          />
        ))}
      </Column1>
        </SHWrapper>
      </SHContainer>
  );
};

SellingHistory.propTypes = {
  user: PropTypes.any,
  designerProducts: PropTypes.any,
  setDesignerProducts: PropTypes.func,
};

export default SellingHistory;
