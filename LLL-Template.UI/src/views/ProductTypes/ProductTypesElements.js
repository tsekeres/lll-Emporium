/* eslint-disable quotes */
import styled from 'styled-components';

export const ProductTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #00000;
  background: #fff;
  height: 1400px;
  padding-top: 100px;
`;

export const ProductTypeWrapper = styled.div`
display: flex;
flex-direction: row;
width: 100%;
align-items: center;
justify-content: center;

@media screen and (max-width: 800px) {
  flex-direction: column;
  align-items: center;
}
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

export const Column1 = styled.div`
display: flex;
flex-flow: row wrap;
align-self: center;
justify-content: space-around;
align-items: center;
width: 80%;
height: 634px;
margin-top: 48px;

@media screen and (max-width: 1150px) {
  width: 70%;
}
`;

export const AddProductTypeButtonImg = styled.img`
  width: 15px;
`;

export const AddButtonContainer = styled.div`
width: 5%;
`;

export const AddProductTypeButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  overflow: hidden;
`;

export const Button = styled.button`
`;

export const ButtonImg = styled.img``;
