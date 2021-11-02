/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import CategoryForms from '../../components/Forms/CategoryForms/CategoryForms';
import { getCategories } from '../../helpers/data/categoryData';
import { CategoryCards } from '../../components/Cards/CatergoryCards/CategoryCards';
import {
  CategoryContainer,
  CategoryWrapper,
  Column1,
  AddButtonContainer,
  AddCategoryButton,
  AddCategoryButtonImg,
  CategoryImg,
  Column2,
  Button,
  ButtonImg,
} from './CategoryElements';
import category from '../../Assets/ViewStockPhotos/CategoryViewStock.jpeg';
import add from '../../Assets/ActionIcons/Add.png';
import deleted from '../../Assets/ActionIcons/Delete.png';

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    getCategories().then((response) => setCategories(response));
  }, []);
  return (
    <CategoryContainer className="CategoryContainer" id="CategoryContainer">
      <CategoryWrapper className="CategoryWrapper" id="Categories">
      <AddButtonContainer>
            <AddCategoryButton className="addCategory" onClick={openModal}>
              <AddCategoryButtonImg src={add}>
              </AddCategoryButtonImg>
            </AddCategoryButton>
          </AddButtonContainer>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="Modal"
          >
            <Button className="modalClose" onClick={closeModal}><ButtonImg src={deleted}/>Close Form</Button>
              <div className="formContainer"></div>
                <CategoryForms
                  categoryFormTitle="Add Category"
                  setCategories={setCategories}
                  categories={categories}
                />
          </Modal>
        <Column1 className="CategoryColumn1">
          {categories.map((categoryInfo) => (
            <CategoryCards
              key={categoryInfo.id}
              id={categoryInfo.id}
              categoryImageUrl={categoryInfo.categoryImageUrl}
              categoryName={categoryInfo.categoryName}
              setCategories={setCategories}
              categories={categories}
            />
          ))}
        </Column1>
        <Column2 className="CategoryColumn2">
          <CategoryImg src={category} className="CategoryImg"></CategoryImg>
        </Column2>
        </CategoryWrapper>
      </CategoryContainer>
  );
};

Categories.propTypes = {
  categories: PropTypes.any,
  setCategories: PropTypes.func,
};

export default Categories;
