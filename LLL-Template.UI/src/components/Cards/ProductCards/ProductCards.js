import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ProductContainer,
  ProductWrapper,
  Column1,
  ProductCard,
  // ProductCardImg,
  ProductCardHeader,
  ProductCardButtons,
  ProductCardEdit,
  ProductCardDelete,
  ProductCardBody,
  CardTitle,
  CardText,
} from './ProductCardElements';
import { deleteProduct } from '../../../helpers/data/ProductsData';
import ProductForm from '../../Forms/ProductForms/ProductForm';

const ProductCards = ({
  product,
  setProducts
}) => {
  const [updating, setUpdating] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteProduct(product.productId)
          .then(setProducts);
        break;
      case 'update':
        setUpdating((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
  <ProductContainer className="ProductContainer">
    <ProductWrapper className="ProductWrapper" id="Products">
      <Column1 className="Column1">
        <ProductCard>
          <ProductCardHeader className="ProductCardHeader">
            <ProductCardButtons className="ProductCardButtons">
              <ProductCardEdit className="ProductCardEdit" onClick={() => handleClick('update')}>
                {updating ? 'Close Form' : 'Update Product'}
              </ProductCardEdit>
              {updating && (
                <ProductForm
                  formTitle='Update Product'
                  setProducts={setProducts}
                  productId={product.productId}
                  productDescription={product.productDescription}
                  productImageURL={product.productImageURL}
                  productName={product.productName}
                  price={product.price}
                />
              )}
              <ProductCardDelete
                className="ProductCardDelete"
                onClick={() => handleClick('delete')}
              ></ProductCardDelete>
            </ProductCardButtons>
          </ProductCardHeader>
          {/* <ProductCardImg
            className="product-image"
            src={product.productImageURL}
            alt="Product Card image cap"
          /> */}
          <ProductCardBody>
            <CardTitle tag="h5">{product.productName}</CardTitle>
            <CardText>{product.productDescription}</CardText>
            <CardText>{product.price}</CardText>
          </ProductCardBody>
        </ProductCard>
      </Column1>
    </ProductWrapper>
  </ProductContainer>
  );
};

ProductCards.propTypes = {
  product: PropTypes.object,
  setProducts: PropTypes.func,
};

export default ProductCards;
