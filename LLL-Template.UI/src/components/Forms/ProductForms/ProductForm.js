import React, { useState } from 'react';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { getProducts, addProduct, updateProduct } from '../../../helpers/data/ProductsData';
import {
  ProductFormTitle,
  Button,
  Form,
  Label,
  ButtonImg,
  Option,
} from './ProductFormElements';
import add from '../../../Assets/ActionIcons/Add.png';

const ProductForm = ({
  productFormTitle,
  setProducts,
  productImageURL,
  productName,
  productDescription,
  price,
  productId,
  productTypeId,
  productTypes,
}) => {
  const [product, setProduct] = useState({
    productImageURL: productImageURL || '',
    productName: productName || '',
    productDescription: productDescription || '',
    price: price || '',
    productId: productId || '',
    productTypeId: productTypeId || '',
  });

  const handleInputChange = (e) => {
    setProduct((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.productId) {
      updateProduct(productId, product).then(getProducts(setProducts));
    } else {
      const productObj = {
        productImageURL: product.productImageURL,
        productName: product.productName,
        productDescription: product.productDescription,
        price: product.price,
        productTypeId: product.productTypeId,
      };
      addProduct(productObj).then(getProducts(setProduct));

      setProduct({
        productImageURL: '',
        productName: '',
        productDescription: '',
        price: '',
        productId: null,
        productTypesId: '',
      });
    }
  };

  return (
    <Form
      id='addProductForm'
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <ProductFormTitle id='productFormTitle'>
        {productFormTitle}
      </ProductFormTitle>
      <Label className='productNameLabel'>Name:</Label>
      <Input
        name='productName'
        id='productName'
        value={product.productName}
        type='text'
        placeholder='Enter a Name'
        onChange={handleInputChange}
      ></Input>
      <Label for='productImageURL'>Image URL: </Label>
      <Input
        name='productImageURL'
        id='productImageURL'
        value={product.productImageURL}
        type='url'
        placeholder='Enter an Image URL'
        onChange={handleInputChange}
      ></Input>
      <Label for='productDescription'>Description: </Label>
      <Input
        name='productDescription'
        id='productDescription'
        value={product.productDescription}
        type='text'
        placeholder='Enter a Description'
        onChange={handleInputChange}
      ></Input>
      <Label for='price'>Price: </Label>
      <Input
        name='price'
        id='price'
        value={product.price}
        type='text'
        placeholder='Enter a Price'
        onChange={handleInputChange}
      ></Input>
      <Label>Product Type:</Label>
      <Input
        className='item'
        type='select'
        name='productTypeId'
        placeholder='Product Type'
        id='exampleSelect'
        onChange={handleInputChange}
      >
        {productTypes?.map((productType) => (
          <Option key={productType.id} value={productType.id}>
            {productType.productTypeName}
          </Option>
        ))}
      </Input>
      <Button className='addProductType' type='submit'>
        <ButtonImg src={add}></ButtonImg>
      </Button>
    </Form>
  );
};

ProductForm.propTypes = {
  productFormTitle: PropTypes.string.isRequired,
  setProducts: PropTypes.func,
  productImageURL: PropTypes.string,
  productName: PropTypes.string,
  productDescription: PropTypes.string,
  price: PropTypes.string,
  productId: PropTypes.string,
  productTypeId: PropTypes.string,
  productTypes: PropTypes.any,
};

export default ProductForm;
