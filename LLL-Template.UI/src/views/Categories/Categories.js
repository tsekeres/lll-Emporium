/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import CategoryForms from '../../components/Forms/CategoryForms/CategoryForms';
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
  Modal,
} from './CategoryElements';
import category from '../../Assets/ViewStockPhotos/CategoryViewStock.jpeg';
import add from '../../Assets/ActionIcons/Add.png';
import deleted from '../../Assets/ActionIcons/Delete.png';

export const Categories = ({ user, categories, setCategories }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <CategoryContainer className="CategoryContainer" id="CategoryContainer">
      <CategoryWrapper className="CategoryWrapper" id="Categories">
      {
            user !== null
            && <div className="CategoryWrapper">
              {
                (user)
                  ? <div>
                      <AddButtonContainer className="AddButtonContainer">
                        <AddCategoryButton className="addCategory" onClick={openModal}>
                          <AddCategoryButtonImg className="AddCategoryButtonImg" src={add}>
                          </AddCategoryButtonImg>
                        </AddCategoryButton>
                      </AddButtonContainer>
                      <Modal
                        isOpen={modalIsOpen}
                        className="Modal"
                      >
                        <Button className="modalClose" onClick={closeModal}>
                          <ButtonImg src={deleted}/>
                        </Button>
                        <CategoryForms
                          categoryFormTitle="Add Category"
                          setCategories={setCategories}
                          categories={categories}
                          user={user}
                        />
                      </Modal>
                    </div>
                  : <div></div>
              }
              </div>
            }
        <Column1 className="CategoryColumn1">
          {categories?.map((categoryInfo) => (
            <CategoryCards
              key={categoryInfo.id}
              id={categoryInfo.id}
              categoryImageUrl={categoryInfo.categoryImageUrl}
              categoryName={categoryInfo.categoryName}
              setCategories={setCategories}
              categories={categories}
              user={user}
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
  user: PropTypes.any,
};

export default Categories;
