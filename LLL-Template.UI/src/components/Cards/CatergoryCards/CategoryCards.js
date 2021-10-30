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

export const CategoryCards = ({ id, categoryImageUrl, categoryName }) => {
  return (
    <CategoryCard className="CategoryCard" key={id}>
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
      <CategoryCardImg className="CategoryCardImg" src={categoryImageUrl}/>
      <CategoryCardFooter className="CategoryCardFooter">
        {categoryName}
      </CategoryCardFooter>
    </CategoryCard>
  );
};

CategoryCards.propTypes = {
  id: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  categoryImageUrl: PropTypes.string.isRequired,
};

export default CategoryCards;
