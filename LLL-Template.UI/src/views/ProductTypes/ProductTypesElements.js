/* eslint-disable quotes */
import styled from 'styled-components';

export const ProductTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 125px;
  height: 1000px;
  padding-bottom: 125px;
`;

export const ProductTypeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 1000px;
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
  width: 90%;
`;

export const AddProductTypeButtonImg = styled.img`
  width: 15px;
`;

export const AddButtonContainer = styled.div`
width: 10%;
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
