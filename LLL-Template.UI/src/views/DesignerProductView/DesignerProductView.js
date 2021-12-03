import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import ProductForms from '../../components/Forms/ProductForms/ProductForm';
import ProductCards from '../../components/Cards/ProductCards/ProductCards';
import {
  DesignerProductsContainer,
  DesignerProductsWrapper,
  Column1,
  AddButtonContainer,
  AddProductButton,
  AddProductButtonImg,
  Button,
  ButtonImg,
  Modal,
} from './DesignerProductViewElements';
import add from '../../Assets/ActionIcons/Add.png';
import deleted from '../../Assets/ActionIcons/Delete.png';
import { getProductByDesignerId } from '../../helpers/data/productData';

function DesignerProducts({
  user, productTypes, products, setProducts
}) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [designerProducts, setdesignerProducts] = useState([{}]);
  const { designerId } = useParams();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    getProductByDesignerId(designerId).then((dPArray) => setdesignerProducts(dPArray));
  }, []);

  return (
    <DesignerProductsContainer className='ProductContainer' id='ProductContainer'>
      <DesignerProductsWrapper className='ProductWrapper' id='Products'>
        {user !== null && (
          <AddButtonContainer className='AddButtonContainer'>
            {user.roleTypeName === 'Designer' || user.roleTypeName === 'Administrator' ? (
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
            user={user}
          />
        </Modal>
        <Column1 className='designer-product-view'>
          {designerProducts?.map((productInfo, index) => (
            <ProductCards
              key={index}
              id={productInfo.id}
              productImageUrl={productInfo.productImageUrl}
              productName={productInfo.productName}
              productDescription={productInfo.productDescription}
              price={productInfo.price}
              designerProducts={designerProducts}
              setdesignerProducts={setdesignerProducts}
              setProducts={setProducts}
              products={products}
              productTypeId={productInfo.productTypeId}
              productTypes={productTypes}
              user={user}
              designerId={productInfo.designerId}
            />
          ))}
        </Column1>
      </DesignerProductsWrapper>
    </DesignerProductsContainer>
  );
}

DesignerProducts.propTypes = {
  user: PropTypes.any,
  productTypes: PropTypes.any,
  products: PropTypes.any,
  setProducts: PropTypes.func,
};

export default DesignerProducts;
