import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { ProductTypeCards } from '../../components/Cards/ProductTypeCards/ProductTypeCards';
import { getCategoryProductTypes } from '../../helpers/data/categoryData';
import ProductTypeForms from '../../components/Forms/ProductTypeForms/ProductTypeForms';
import {
  CategoryContainer,
  CategoryWrapper,
  Column1,
  AddButtonContainer,
  AddCategoryButton,
  AddCategoryButtonImg,
  CategoryImg,
  Column2,
  Button,
  ButtonImg,
  Modal,
} from './SingleCategoryViewElements';
import category from '../../Assets/ViewStockPhotos/CategoryViewStock.jpeg';
import add from '../../Assets/ActionIcons/Add.png';
import deleted from '../../Assets/ActionIcons/Delete.png';

export default function SingleCategoryView({ user, categories }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [categoryProductTypes, setCategoryProductTypes] = useState([]);
  const { categoryId } = useParams();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    getCategoryProductTypes().then((cPTArray) => setCategoryProductTypes(cPTArray));
    console.warn(categoryId);
  }, []);

  return (
    <CategoryContainer className='CategoryContainer' id='CategoryContainer'>
      <CategoryWrapper className='CategoryWrapper' id='Categories'>
        {user !== null && (
          <AddButtonContainer className='AddButtonContainer'>
            {user ? (
              <AddCategoryButton className='addCategory' onClick={openModal}>
                <AddCategoryButtonImg
                  className='AddCategoryButtonImg'
                  src={add}
                ></AddCategoryButtonImg>
              </AddCategoryButton>
            ) : (
              <div></div>
            )}
          </AddButtonContainer>
        )}
        <Modal isOpen={modalIsOpen} className='Modal'>
          <Button className='modalClose' onClick={closeModal}>
            <ButtonImg src={deleted} />
          </Button>
          <ProductTypeForms
            productTypeFormTitle='Add Product Type'
            setCategoryProductTypes={setCategoryProductTypes}
            categoryProductTypes={categoryProductTypes}
            categories={categories}
          />
        </Modal>
        <Column1 className='ProductTypeColumn1'>
          {categoryProductTypes?.map((productTypeInfo) => (
            <ProductTypeCards
              key={productTypeInfo.id}
              id={productTypeInfo.id}
              categoryId={productTypeInfo.categoryId}
              typeName={productTypeInfo.typeName}
              productTypeImageUrl={productTypeInfo.productTypeImageUrl}
              setCategoryProductTypes={setCategoryProductTypes}
              categoryProductTypes={categoryProductTypes}
              categories={categories}
              user={user}
            />
          ))}
        </Column1>
        <Column2 className='CategoryColumn2'>
          <CategoryImg src={category} className='CategoryImg'></CategoryImg>
        </Column2>
      </CategoryWrapper>
    </CategoryContainer>
  );
}

SingleCategoryView.propTypes = {
  user: PropTypes.any,
  categories: PropTypes.any,
};
