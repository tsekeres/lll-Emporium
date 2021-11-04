/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductTypeForms from '../../components/Forms/ProductTypeForms/ProductTypeForms';
import { getProductTypes } from '../../helpers/data/productTypesData';
import { ProductTypeCards } from '../../components/Cards/ProductTypeCards/ProductTypeCards';
import {
  CategoryContainer,
  CategoryWrapper,
  Column1,
  AddButtonContainer,
  AddCategoryButton,
  AddCategoryButtonImg,
  Button,
  ButtonImg,
  Modal,
} from './ProductTypesElements';
import add from '../../Assets/ActionIcons/Add.png';
import deleted from '../../Assets/ActionIcons/Delete.png';

export const ProductTypes = ({ categories }) => {
  const [productTypes, setProductTypes] = useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    getProductTypes().then((response) => setProductTypes(response));
  }, []);
  return (
    <CategoryContainer className="CategoryContainer" id="CategoryContainer">
      <CategoryWrapper className="CategoryWrapper" id="Categories">
      <AddButtonContainer className="AddButtonContainer">
            <AddCategoryButton className="addCategory" onClick={openModal}>
              <AddCategoryButtonImg className="AddCategoryButtonImg" src={add}>
              </AddCategoryButtonImg>
            </AddCategoryButton>
          </AddButtonContainer>
          <Modal
            isOpen={modalIsOpen}
            className="Modal"
          >
            <Button className="modalClose" onClick={closeModal}><ButtonImg src={deleted}/></Button>
                <ProductTypeForms
                  productTypeFormTitle="Add Product Type"
                  setProductTypes={setProductTypes}
                  productTypes={productTypes}
                  categories={categories}
                />
          </Modal>
        <Column1 className="CategoryColumn1">
          {productTypes?.map((productTypeInfo) => (
            <ProductTypeCards
              key={productTypeInfo.id}
              id={productTypeInfo.id}
              categoryId={productTypeInfo.categoryId}
              typeName={productTypeInfo.typeName}
              productTypeImageUrl={productTypeInfo.productTypeImageUrl}
              setProductTypes={setProductTypes}
              productTypes={productTypes}
              categories={categories}
            />
          ))}
        </Column1>
        </CategoryWrapper>
      </CategoryContainer>
  );
};

ProductTypes.propTypes = {
  productTypes: PropTypes.any,
  setProductTypes: PropTypes.func,
  categories: PropTypes.any,
};

export default ProductTypes;
