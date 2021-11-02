/* eslint-disable quotes */
import styled from 'styled-components';

export const CategoryContainer = styled.div`
  color: #00000;
  background: #fff;
  height: 734px;
  padding-top: 50px;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Column1 = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  height: 634px;
  margin-top: 48px;

  @media screen and (max-width: 1150px) {
    width: 70%;
  }

  @media screen and (max-width: 525px) {
    width: 100%;
  }
`;

export const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  width: 25%;
  height: 20%;
  opacity: .5;
  margin-left: 75px;

  @media screen and (max-width: 525px) {
    margin-left: 25px;
    margin-right: 20px;
  }
`;

export const AddCategoryButtonImg = styled.img`
height: 15px;
`;

export const CategoryCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  height: 15%;
  width: 100%;
  justify-content: flex-end;
`;

export const AddButtonContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
width: 5%;
padding-top: 150px;
`;

export const AddCategoryButton = styled.button`
display: flex;
flex-direction: row;
justify-content: flex-end;
width: 50%;
background-color: Transparent;
background-repeat:no-repeat;
border: none;
cursor:pointer;
overflow: hidden; 
`;

export const CategoryImg = styled.img`
  display: flex;
  align-self: center;
  width: 60%;
`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 734px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const CategoryCardFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  width: 100%;
`;

export const Button = styled.button`
display: flex;
flex-direction: row;
justify-content: flex-end;
width: 50%;
background-color: Transparent;
background-repeat:no-repeat;
border: none;
cursor:pointer;
overflow: hidden; 
`;

export const ButtonImg = styled.img`
height: 15px;
`;
