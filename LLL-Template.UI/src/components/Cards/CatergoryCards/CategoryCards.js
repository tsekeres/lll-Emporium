/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import {
  CategoryCard,
  CategoryCardImg,
  CategoryCardHeader,
  CategoryCardButtons,
  CategoryCardEdit,
  CategoryCardDelete,
  CategoryCardFooter,
} from './CategoryCardElements';
import edit from '../../../Assets/ActionIcons/Edit.png';
import deleted from '../../../Assets/ActionIcons/Delete.png';

export const CategoryCards = ({ CategoryId, CategoryImageUrl, CategoryName }) => {
  return (
    <CategoryCard className="CategoryCard" key={CategoryId}>
      <CategoryCardHeader className="CategoryCardHeader">
        <CategoryCardButtons className="CategoryCardButtons">
          <CategoryCardEdit
            className="CategoryCardEdit"
            src={edit}
          ></CategoryCardEdit>
          <CategoryCardDelete
            className="CategoryCardDelete"
            src={deleted}
          ></CategoryCardDelete>
        </CategoryCardButtons>
      </CategoryCardHeader>
      <CategoryCardImg
        className="CategoryCardImg"
        src={CategoryImageUrl}
      ></CategoryCardImg>
      <CategoryCardFooter className="CategoryCardFooter">
        {CategoryName}
      </CategoryCardFooter>
    </CategoryCard>
  );
};

CategoryCards.propTypes = {
  CategoryId: PropTypes.string.isRequired,
  CategoryName: PropTypes.string.isRequired,
  CategoryImageUrl: PropTypes.string.isRequired,
};

export default CategoryCards;
