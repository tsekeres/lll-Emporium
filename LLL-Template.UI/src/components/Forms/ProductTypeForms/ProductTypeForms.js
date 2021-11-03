import React, { useState } from 'react';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';
import {
  updateProductType,
  addProductType,
  getProductTypes,
} from '../../../helpers/data/productTypesData';
import {
  CategoryFormTitle,
  Button,
  Form,
  Label,
  ButtonImg,
  Option,
} from './ProductTypeFormElements';
import add from '../../../Assets/ActionIcons/Add.png';

const ProductTypeForms = ({
  productTypeFormTitle,
  id,
  categoryId,
  typeName,
  productTypeImageUrl,
  setProductTypes,
  categories,
}) => {
  const [productType, setProductType] = useState({
    typeName: typeName || '',
    productTypeImageUrl: productTypeImageUrl || '',
    id: id || null,
    categoryId: categoryId || '',
  });

  const handleInputChange = (e) => {
    setProductType((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productType.id) {
      updateProductType(id, productType).then(() => getProductTypes().then((response) => setProductTypes(response)));
    } else {
      const productTypeObj = {
        typeName: productType.typeName,
        productTypeImageUrl: productType.productTypeImageUrl,
        categoryId: productType.categoryId,
      };
      addProductType(productTypeObj).then(() => getProductTypes().then((response) => setProductTypes(response)));

      setProductType({
        typeName: '',
        productTypeImageUrl: '',
        id: null,
        categoryId: '',
      });
    }
  };

  return (
    <Form
      id='addCategoryForm'
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <CategoryFormTitle id='categoryFormTitle'>
        {productTypeFormTitle}
      </CategoryFormTitle>
      <Label className='categoryNameLabel'>Name:</Label>
      <Input
        className='category'
        name='typeName'
        type='text'
        placeholder='Product Type Name'
        value={productType.typeName}
        onChange={handleInputChange}
      ></Input>
      <Label>Image: </Label>
      <Input
        className='category'
        name='productTypeImageUrl'
        type='text'
        placeholder='Product Type Image URL'
        value={productType.productTypeImageUrl}
        onChange={handleInputChange}
      ></Input>
      <Label>Category:</Label>
      <Input
          className="item"
          type="select"
          name="categoryId"
          placeholder="Category"
          id="exampleSelect"
          onChange={handleInputChange}
        >
          {categories?.map((category) => (
            <Option key={category.id} value={category.id}>
              {category.categoryName}
            </Option>
          ))}
        </Input>
      <Button className='addCategory' type='submit'>
        <ButtonImg src={add}></ButtonImg>
      </Button>
    </Form>
  );
};

ProductTypeForms.propTypes = {
  productTypeFormTitle: PropTypes.string.isRequired,
  setProductTypes: PropTypes.func,
  id: PropTypes.string,
  typeName: PropTypes.string,
  productTypeImageUrl: PropTypes.string,
  categoryId: PropTypes.string,
  categories: PropTypes.any,
};

export default ProductTypeForms;
