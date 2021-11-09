import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductForms from '../../components/Forms/ProductForms/ProductForm';
import ProductCards from '../../components/Cards/ProductCards/ProductCards';
import {
  ProductContainer,
  ProductWrapper,
  Column1,
  AddButtonContainer,
  AddProductButton,
  AddProductButtonImg,
  Button,
  ButtonImg,
  Modal,
} from './ProductElements';
import { getProducts } from '../../helpers/data/ProductsData';
import add from '../../Assets/ActionIcons/Add.png';
import deleted from '../../Assets/ActionIcons/Delete.png';

function Products({
  user, productTypes
}) {
  const [products, setProducts] = useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    getProducts().then((response) => setProducts(response));
  }, []);
  return (
    <ProductContainer className='ProductContainer' id='ProductContainer'>
      <ProductWrapper className='ProductWrapper' id='Products'>
        {user !== null && (
          <AddButtonContainer className='AddButtonContainer'>
            {user ? (
              <AddProductButton className='addProduct' onClick={openModal}>
                <AddProductButtonImg
                  className='AddProductButtonImg'
                  src={add}
                ></AddProductButtonImg>
              </AddProductButton>
            ) : (
              <div></div>
            )}
          </AddButtonContainer>
        )}
        <Modal isOpen={modalIsOpen} className='Modal'>
          <Button className='modalClose' onClick={closeModal}>
            <ButtonImg src={deleted} />
          </Button>
          <ProductForms
            productFormTitle='Add Product'
            setProducts={setProducts}
            products={products}
            productTypes={productTypes}
          />
        </Modal>
        <Column1 className='product-view'>
          {products?.map((productInfo) => (
            <ProductCards
              key={productInfo.id}
              id={productInfo.id}
              productImageURL={productInfo.productImageURL}
              productName={productInfo.productName}
              productDescription={productInfo.productDescription}
              price={productInfo.price}
              products={products}
              setProducts={setProducts}
              productTypeId={productInfo.productTypeId}
              productTypes={productTypes}
              user={user}
            />
          ))}
        </Column1>
      </ProductWrapper>
    </ProductContainer>
  );
}

Products.propTypes = {
  user: PropTypes.any,
  productTypes: PropTypes.any,
  products: PropTypes.any,
  setProducts: PropTypes.func,
};

export default Products;
