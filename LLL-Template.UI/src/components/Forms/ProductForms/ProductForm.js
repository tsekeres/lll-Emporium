import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addProduct, updateProduct } from '../../../helpers/data/ProductsData';

const ProductForm = ({
  formTitle,
  setProducts,
  productImageURL,
  productName,
  productDescription,
  price,
  productId,
}) => {
  const [product, setProducts] = useState({
    productImageURL: productImageURL || "",
    productName: productName || "",
    productDescription: productDescription || "",
    price: price || "",
    productId: productId || "",
  });
  const history = useHistory();

  const handleInputChange = (e) => {
    setProduct((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.productId) {
      updateProduct(product).then(setProducts);
    } else {
      addProduct(product).then(setProduct);
      history.push('/products');

      setProject({
        productImageURL: '',
        productName: '',
        productDescription: '',
        price: '',
        productId: null,
      });
    }
  };

  return (
    <div className="product-form">
      <Form id="addProductForm" autoComplete="off" onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <FormGroup>
          <Label for="productName">Name:</Label>
          <Input
            name="productName"
            id="productName"
            value={product.productName}
            type="text"
            placeholder="Enter a Name"
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="productImageURL">Image URL: </Label>
          <Input
            name="productImageURL"
            id="productImageURL"
            value={product.productImageURL}
            type="url"
            placeholder="Enter an Image URL"
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="productDescription">Description: </Label>
          <Input
            name="productDescription"
            id="productDescription"
            value={product.productDescription}
            type="text"
            placeholder="Enter a Description"
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price: </Label>
          <Input
            name="price"
            id="price"
            value={product.price}
            type="text"
            placeholder="Enter a Price"
            onChange={handleInputChange}
          />
        </FormGroup>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

ProjectForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setProducts: PropTypes.func,
  productImageURL: PropTypes.string,
  productName: PropTypes.string,
  productDescription: PropTypes.string,
  price: PropTypes.string,
  productId: PropTypes.string,
};

export default ProductForm;
