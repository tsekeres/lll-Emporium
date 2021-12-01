import styled from 'styled-components';
import bag from '../../../Assets/NavBarIcons/bag.png';

export const SingleProductContainer = styled.div`
  display: flex;
  justify-content: space-around;
  color: #00000;
  background: #fff;
  padding-top: 100px;
  height: 734px;
`;

export const SingleProductCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  width: 35%;
  height: 80%;
  opacity: 0.5;
  margin: 30px;
  padding-bottom: 10px;

  @media screen and (max-width: 525px) {
    margin-left: 25px;
    margin-right: 20px;
  }

  opacity: ${({ isOpen }) => (isOpen ? '0' : '100%')};
  top: ${({ isOpen }) => (isOpen ? '100%' : '0')};
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

export const Button = styled.button`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 50%;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
`;

export const Button1 = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
`;

export const CartButton = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  background-image: ${bag}
`;

export const SingleProductCardImg = styled.img`
  border-radius: 10px;
  display: flex;
  width: 100%;
`;

export const SingleProductCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  height: 20%;
  width: 100%;
  justify-content: flex-end;
`;

export const SingleProductCardButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

export const SingleProductCardEdit = styled.img`
  height: 15px;
`;

export const SingleProductCardDelete = styled.img`
  height: 13px;
  margin-right: 5px;
`;

export const Modal1 = styled.div``;

export const SingleProductCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-bottom: 5px;
  width: 100%;
  text-transform: lowercase;

  @media screen and (max-width: 920px) {
    font-size: 10px;
  }
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 15%;
  width: 100%;
  justify-content: flex-end;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 15%;
  width: 100%;
  justify-content: flex-end;
`;
