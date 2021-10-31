import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  updateCategory,
  addCategory,
} from '../../../helpers/data/categoryData';
import {
  AddCategoryForm,
  CategoryFormTitle,
  Button,
} from './CategoryFormElements';

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
      updateCategory(category, id).then((categoryArray) => setCategories(categoryArray));
    } else {
      addCategory(category, id).then((categoryArray) => setCategories(categoryArray));

      setCategory({
        categoryName: '',
        categoryImageUrl: '',
        id: null,
      });
    }
  };

  return (
    <AddCategoryForm
      id='addCategoryForm'
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <CategoryFormTitle id='categoryFormTitle'>
        {categoryFormTitle}
      </CategoryFormTitle>
      <label className='categoryNameLabel'>Name:</label>
      <input
        className='category'
        name='categoryName'
        type='text'
        placeholder='Category Name'
        value={categoryName}
        onChange={handleInputChange}
      ></input>
      <label>Image: </label>
      <input
        className='category'
        name='categoryImage'
        type='text'
        placeholder='Category Image URL'
        value={categoryImageUrl}
        onChange={handleInputChange}
      ></input>
      <Button className='addCategory' type='submit'>
        Add Category
      </Button>
    </AddCategoryForm>
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
