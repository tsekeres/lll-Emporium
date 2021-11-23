import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 125px;
  // height: 1000px;
  // padding-bottom: 125px;
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

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const Column1 = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 90%;
  height: 75%;
  // margin-bottom: 100px;
`;

export const AddProductButtonImg = styled.img`
  height: 15px;
`;

export const ProductCardHeader = styled.div`
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

export const AddProductButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 50%;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
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
