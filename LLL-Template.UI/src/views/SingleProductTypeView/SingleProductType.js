import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/Cards/ProductCards/ProductCards';
import { getProductTypeProducts } from '../../helpers/data/productTypesData';
import ProductForm from '../../components/Forms/ProductForms/ProductForm';
import {
  CategoryContainer,
  CategoryWrapper,
  Column1,
  AddButtonContainer,
  AddCategoryButton,
  AddCategoryButtonImg,
  // CategoryImg,
  // Column2,
  Button,
  ButtonImg,
  Modal,
} from './SingleProductTypeElements';
// import category from '../../Assets/ProfileImages/Three.jpeg';
import add from '../../Assets/ActionIcons/Add.png';
import deleted from '../../Assets/ActionIcons/Delete.png';

export default function SingleProductTypeView({
  user,
  productTypes,
  products,
  setProducts
}) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [productTypeProducts, setProductTypeProducts] = useState([]);
  const { productTypeId } = useParams();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    getProductTypeProducts(productTypeId).then((pTPArray) => setProductTypeProducts(pTPArray));
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
          <ProductForm
            productFormTitle='Add Product'
            setProductTypeProducts={setProductTypeProducts}
            productTypeProducts={productTypeProducts}
            productTypes={productTypes}
            products={products}
            setProducts={setProducts}
            productTypeId={productTypeId}
            user={user}
          />
        </Modal>
        <Column1 className='ProductTypeColumn1'>
          {productTypeProducts?.map((productInfo) => (
            <ProductCard
            key={productInfo.id}
            id={productInfo.id}
            productImageUrl={productInfo.productImageUrl}
            productName={productInfo.productName}
            productDescription={productInfo.productDescription}
            price={productInfo.price}
            productTypeId={productInfo.productTypeId}
            productTypeProducts={productTypeProducts}
            user={user}
            setProductTypeProducts={setProductTypeProducts}
            productTypes={productTypes}
            setProducts={setProducts}
            />
          ))}
        </Column1>
        {/* <Column2 className='CategoryColumn2'>
          <CategoryImg src={category} className='CategoryImg'></CategoryImg>
        </Column2> */}
      </CategoryWrapper>
    </CategoryContainer>
  );
}

SingleProductTypeView.propTypes = {
  user: PropTypes.any,
  productTypes: PropTypes.any,
  products: PropTypes.any,
  setProducts: PropTypes.func,
};
