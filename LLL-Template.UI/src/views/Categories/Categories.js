/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  CategoryContainer,
  CategoryWrapper,
  Column1,
  CategoryCard,
  CategoryCardImg,
  CategoryCardHeader,
  CategoryCardButtons,
  CategoryCardEdit,
  CategoryCardDelete,
  CategoryImg,
  CategoryCardFooter,
  Column2,
} from './CategoryElements';
import category from '../../Assets/ViewStockPhotos/CategoryViewStock.jpeg';
import jewelry from '../../Assets/CategoryIcons/Jewelry.png';
// import add from '../../Assets/ActionIcons/Add.png';
import edit from '../../Assets/ActionIcons/Edit.png';
import deleted from '../../Assets/ActionIcons/Delete.png';

export const Categories = () => {
  return (
      <CategoryContainer className="AboutUsContainer">
        <CategoryWrapper className="AboutUsWrapper" id="Categories">
        <Column1 className="Column1">
            <CategoryCard className="CategoryCard">
              <CategoryCardHeader className="CategoryCardHeader">
                <CategoryCardButtons className="CategoryCardButtons">
                  <CategoryCardEdit className="CategoryCardEdit" src={edit}></CategoryCardEdit>
                  <CategoryCardDelete className="CategoryCardDelete" src={deleted}></CategoryCardDelete>
                </CategoryCardButtons>
              </CategoryCardHeader>
              <CategoryCardImg className="CategoryCardImg" src={jewelry}></CategoryCardImg>
              <CategoryCardFooter className="CategoryCardFooter">
                jewelry
              </CategoryCardFooter>
            </CategoryCard>
            <CategoryCard className="CategoryCard">
              <CategoryCardHeader className="CategoryCardHeader">
                <CategoryCardButtons className="CategoryCardButtons">
                  <CategoryCardEdit className="CategoryCardEdit" src={edit}></CategoryCardEdit>
                  <CategoryCardDelete className="CategoryCardDelete" src={deleted}></CategoryCardDelete>
                </CategoryCardButtons>
              </CategoryCardHeader>
              <CategoryCardImg className="CategoryCardImg" src={jewelry}></CategoryCardImg>
              <CategoryCardFooter className="CategoryCardFooter">
                jewelry
              </CategoryCardFooter>
            </CategoryCard>
            <CategoryCard className="CategoryCard">
              <CategoryCardHeader className="CategoryCardHeader">
                <CategoryCardButtons className="CategoryCardButtons">
                  <CategoryCardEdit className="CategoryCardEdit" src={edit}></CategoryCardEdit>
                  <CategoryCardDelete className="CategoryCardDelete" src={deleted}></CategoryCardDelete>
                </CategoryCardButtons>
              </CategoryCardHeader>
              <CategoryCardImg className="CategoryCardImg" src={jewelry}></CategoryCardImg>
              <CategoryCardFooter className="CategoryCardFooter">
                jewelry
              </CategoryCardFooter>
            </CategoryCard>
            <CategoryCard className="CategoryCard">
              <CategoryCardHeader className="CategoryCardHeader">
                <CategoryCardButtons className="CategoryCardButtons">
                  <CategoryCardEdit className="CategoryCardEdit" src={edit}></CategoryCardEdit>
                  <CategoryCardDelete className="CategoryCardDelete" src={deleted}></CategoryCardDelete>
                </CategoryCardButtons>
              </CategoryCardHeader>
              <CategoryCardImg className="CategoryCardImg" src={jewelry}></CategoryCardImg>
              <CategoryCardFooter className="CategoryCardFooter">
                jewelry
              </CategoryCardFooter>
            </CategoryCard>
            <CategoryCard className="CategoryCard">
              <CategoryCardHeader className="CategoryCardHeader">
                <CategoryCardButtons className="CategoryCardButtons">
                  <CategoryCardEdit className="CategoryCardEdit" src={edit}></CategoryCardEdit>
                  <CategoryCardDelete className="CategoryCardDelete" src={deleted}></CategoryCardDelete>
                </CategoryCardButtons>
              </CategoryCardHeader>
              <CategoryCardImg className="CategoryCardImg" src={jewelry}></CategoryCardImg>
              <CategoryCardFooter className="CategoryCardFooter">
                jewelry
              </CategoryCardFooter>
            </CategoryCard>
            <CategoryCard className="CategoryCard">
              <CategoryCardHeader className="CategoryCardHeader">
                <CategoryCardButtons className="CategoryCardButtons">
                  <CategoryCardEdit className="CategoryCardEdit" src={edit}></CategoryCardEdit>
                  <CategoryCardDelete className="CategoryCardDelete" src={deleted}></CategoryCardDelete>
                </CategoryCardButtons>
              </CategoryCardHeader>
              <CategoryCardImg className="CategoryCardImg" src={jewelry}></CategoryCardImg>
              <CategoryCardFooter className="CategoryCardFooter">
                jewelry
              </CategoryCardFooter>
            </CategoryCard>
            <CategoryCard className="CategoryCard">
              <CategoryCardHeader className="CategoryCardHeader">
                <CategoryCardButtons className="CategoryCardButtons">
                  <CategoryCardEdit className="CategoryCardEdit" src={edit}></CategoryCardEdit>
                  <CategoryCardDelete className="CategoryCardDelete" src={deleted}></CategoryCardDelete>
                </CategoryCardButtons>
              </CategoryCardHeader>
              <CategoryCardImg className="CategoryCardImg" src={jewelry}></CategoryCardImg>
              <CategoryCardFooter className="CategoryCardFooter">
                jewelry
              </CategoryCardFooter>
            </CategoryCard>
            <CategoryCard className="CategoryCard">
              <CategoryCardHeader className="CategoryCardHeader">
                <CategoryCardButtons className="CategoryCardButtons">
                  <CategoryCardEdit className="CategoryCardEdit" src={edit}></CategoryCardEdit>
                  <CategoryCardDelete className="CategoryCardDelete" src={deleted}></CategoryCardDelete>
                </CategoryCardButtons>
              </CategoryCardHeader>
              <CategoryCardImg className="CategoryCardImg" src={jewelry}></CategoryCardImg>
              <CategoryCardFooter className="CategoryCardFooter">
                jewelry
              </CategoryCardFooter>
            </CategoryCard>
        </Column1>
        <Column2 className="Column2">
          <CategoryImg src={category} className="CategoryImg"></CategoryImg>
        </Column2>
        </CategoryWrapper>
      </CategoryContainer>
  );
};
