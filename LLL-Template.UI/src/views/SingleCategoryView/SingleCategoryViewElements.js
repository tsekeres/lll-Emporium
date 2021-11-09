/* eslint-disable quotes */
import styled from 'styled-components';

export const CategoryContainer = styled.div`
display: flex;
flex-direction: column;
  color: #00000;
  background: #fff;
  height: 734px;
`;

export const Modal = styled.div`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #fff;
display: grid;
align-items: center;
top: 0;
left: 0;
transitionL 0.3s ease-in-out;
opacity:  ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '100%')};
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

export const AddCategoryButtonImg = styled.img`
height: 15px;
`;

export const AddButtonContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
width: 5%;
padding-top: 150px;
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

export const Button = styled.button`
display: flex;
flex-direction: row;
justify-content: flex-end;
background-color: Transparent;
background-repeat:no-repeat;
border: none;
cursor:pointer;
overflow: hidden;
`;

export const ButtonImg = styled.img`
height: 15px;
`;

export const AddCategoryButton = styled.button`
display: flex;
flex-direction: row;
justify-content: flex-end;
background-color: Transparent;
background-repeat:no-repeat;
border: none;
cursor:pointer;
overflow: hidden;
`;
