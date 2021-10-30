import React from 'react';
import PropTypes from 'prop-types';
import {
  ProductContainer,
  ProductWrapper,
  Column1,
  ProductCard,
  ProductCardImg,
  ProductCardHeader,
  ProductCardButtons,
  ProductCardEdit,
  ProductCardDelete,
  ProductCardBody,
  CardTitle,
  CardText,
} from './ProductCardElements';

const ProductCards = ({ product }) => (
  <ProductContainer className="ProductContainer">
    <ProductWrapper className="ProductWrapper" id="Products">
      <Column1 className="Column1">
        <ProductCard>
          <ProductCardHeader className="ProductCardHeader">
            <ProductCardButtons className="ProductCardButtons">
              <ProductCardEdit
                className="ProductCardEdit"
                // src={edit}
              ></ProductCardEdit>
              <ProductCardDelete
                className="ProductCardDelete"
                // src={deleted}
              ></ProductCardDelete>
            </ProductCardButtons>
          </ProductCardHeader>
          <ProductCardImg
            className="product-image"
            src={product.productImageURL}
            alt="Product Card image cap"
          />
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

ProductCards.propTypes = {
  product: PropTypes.object,
};

export default ProductCards;
