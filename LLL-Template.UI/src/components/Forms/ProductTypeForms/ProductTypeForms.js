import React, { useState } from 'react';
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
  Input,
  Label,
  ButtonImg,
} from './ProductTypeFormElements';
import add from '../../../Assets/ActionIcons/Add.png';

const ProductTypeForms = ({
  categoryFormTitle,
  id,
  categoryName,
  categoryImageUrl,
  setProductTypes,
}) => {
  const [productType, setProductType] = useState({
    categoryName: categoryName || '',
    categoryImageUrl: categoryImageUrl || '',
    id: id || null,
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
        categoryName: productType.categoryName,
        categoryImageUrl: productType.categoryImageUrl,
      };
      addProductType(productTypeObj).then(() => getProductTypes().then((response) => setProductTypes(response)));

      setProductType({
        categoryName: '',
        categoryImageUrl: '',
        id: null,
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
        {categoryFormTitle}
      </CategoryFormTitle>
      <Label className='categoryNameLabel'>Name:</Label>
      <Input
        className='category'
        name='categoryName'
        type='text'
        placeholder='Category Name'
        value={productType.categoryName}
        onChange={handleInputChange}
      ></Input>
      <Label>Image: </Label>
      <Input
        className='category'
        name='categoryImageUrl'
        type='text'
        placeholder='Category Image URL'
        value={productType.categoryImageUrl}
        onChange={handleInputChange}
      ></Input>
      <Button className='addCategory' type='submit'>
        <ButtonImg src={add}></ButtonImg>
      </Button>
    </Form>
  );
};

ProductTypeForms.propTypes = {
  categoryFormTitle: PropTypes.string.isRequired,
  setProductTypes: PropTypes.func,
  id: PropTypes.string,
  categoryName: PropTypes.string,
  categoryImageUrl: PropTypes.string,
};

export default ProductTypeForms;
