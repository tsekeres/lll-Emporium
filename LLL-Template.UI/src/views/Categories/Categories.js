/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { getCategories } from '../../helpers/data/categoryData';
import { CategoryCards } from '../../components/Cards/CatergoryCards/CategoryCards';
import {
  CategoryContainer,
  CategoryWrapper,
  Column1,
  CategoryImg,
  Column2,
} from './CategoryElements';
import category from '../../Assets/ViewStockPhotos/CategoryViewStock.jpeg';
// import add from '../../Assets/ActionIcons/Add.png';

export const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((response) => setCategories(response));
  }, []);
  return (
    <CategoryContainer className="AboutUsContainer">
      <CategoryWrapper className="AboutUsWrapper" id="Categories">
        <Column1 className="Column1">
          {categories.map((categoryInfo) => (
            <CategoryCards
              key={categoryInfo.id}
              categoryImageUrl={categoryInfo.categoryImageUrl}
              categoryName={categoryInfo.categoryName}
            />
          ))}
        </Column1>
        <Column2 className="Column2">
          <CategoryImg src={category} className="CategoryImg"></CategoryImg>
        </Column2>
        </CategoryWrapper>
      </CategoryContainer>
  );
};

export default Categories;
