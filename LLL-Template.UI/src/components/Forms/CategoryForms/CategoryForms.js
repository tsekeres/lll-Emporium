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
      updateCategory(category).then((categoryArray) => setCategories(categoryArray));
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
    <form
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
        name='categoryImageUrl'
        type='text'
        placeholder='Category Image URL'
        value={categoryImageUrl}
        onChange={handleInputChange}
      ></input>
      <Button className='addCategory' type='submit'>
        Add Category
      </Button>
    </form>
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
