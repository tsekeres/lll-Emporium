import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  updateCategory,
  addCategory,
  getCategories,
} from '../../../helpers/data/categoryData';
import {
  CategoryFormTitle,
  Button,
  Form,
  Input,
  Label,
  ButtonImg,
} from './CategoryFormElements';
import add from '../../../Assets/ActionIcons/Add.png';

const CategoryForms = ({
  categoryFormTitle,
  id,
  categoryName,
  categoryImageUrl,
  setCategories,
}) => {
  const [category, setCategory] = useState({
    categoryName: categoryName || '',
    categoryImageUrl: categoryImageUrl || '',
    id: id || null,
  });

  const handleInputChange = (e) => {
    setCategory((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category.id) {
      updateCategory(id, category).then(() => getCategories().then((response) => setCategories(response)));
    } else {
      const categoryObj = {
        categoryName: category.categoryName,
        categoryImageUrl: category.categoryImageUrl,
      };
      addCategory(categoryObj).then(() => getCategories().then((response) => setCategories(response)));

      setCategory({
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
        value={category.categoryName}
        onChange={handleInputChange}
      ></Input>
      <Label>Image: </Label>
      <Input
        className='category'
        name='categoryImageUrl'
        type='text'
        placeholder='Category Image URL'
        value={category.categoryImageUrl}
        onChange={handleInputChange}
      ></Input>
      <Button className='addCategory' type='submit'>
        <ButtonImg src={add}></ButtonImg>
      </Button>
    </Form>
  );
};

CategoryForms.propTypes = {
  categoryFormTitle: PropTypes.string.isRequired,
  setCategories: PropTypes.func,
  id: PropTypes.string,
  categoryName: PropTypes.string,
  categoryImageUrl: PropTypes.string,
};

export default CategoryForms;
