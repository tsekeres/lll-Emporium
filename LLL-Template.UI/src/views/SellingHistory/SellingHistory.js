/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import { SHCards } from '../../components/Cards/SellingHistoryCards/SellingHistoryCards';
import {
  SHContainer,
  SHWrapper,
  Column1,
  SHImg,
  Column2,
} from './SellingHIstoryElements';
import category from '../../Assets/ViewStockPhotos/CategoryViewStock.jpeg';
import { getProductByDesignerId } from '../../helpers/data/productData';

export const SellingHistory = ({ user }) => {
  const [designerProducts, setDesignerProducts] = useState([]);
  const designerId = user.id;
  console.warn(designerProducts);
  console.warn(setDesignerProducts);

  useEffect(() => {
    getProductByDesignerId(designerId).then((dProductsArray) => console.warn(dProductsArray));
  });

  return (
    <SHContainer className="SHContainer" id="SHContainer">
      <SHWrapper className="SHWrapper" id="SH">
        <Column1 className="SHColumn1">
        </Column1>
        <Column2 className="SHColumn2">
          <SHImg src={category} className="SHImg"></SHImg>
        </Column2>
        </SHWrapper>
      </SHContainer>
  );
};

SellingHistory.propTypes = {
  user: PropTypes.any,
//   allProducts: PropTypes.any,
//   setAllProducts: PropTypes.func,
};

export default SellingHistory;
