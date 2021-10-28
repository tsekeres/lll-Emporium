import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardImg } from 'reactstrap';

// import {
//   RoleTypeButtonLabel,
//   RoleTypeFormDiv,
//   RoleTypeRadioButton,
//   RoleTypeButton,
//   RoleTypeInputDiv,
//   RoleTypeTextInput,
//   RoleTypeMessage
// } from './RoleTypeFormElements';

const ProductCards = ({ product }) => (
  <Card>
    <CardImg
      className='product-image'
      top
      width='100%'
      src={product.ProductImageURL}
      alt='Card image cap'
    />
    <CardBody>
      <CardTitle tag='h5'>{product.ProductName}</CardTitle>
      <CardText>{product.ProductDescription}</CardText>
      <CardText>{product.Price}</CardText>
    </CardBody>
  </Card>
);

ProductCards.propTypes = {
  product: PropTypes.object,
};

export default ProductCards;
