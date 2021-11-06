/* eslint-disable quotes */
import styled from 'styled-components';

export const PTCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  width: 20%;
  margin: 5px;
  opacity: .5;

  @media screen and (max-width: 920px) {
    width: 30%;
  }

  @media screen and (max-width: 833px) {
    width: 20%;
  }

  @media screen and (max-width: 630px) {
    width: 45%;
  }

opacity:  ${({ isOpen }) => (isOpen ? '0' : '100%')};
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
  height: 50%;
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  overflow: hidden; 
`;

export const Button1 = styled.button`
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  overflow: hidden; 

  @media screen and (max-width: 630px) {
  }
`;

export const PTCardImg = styled.img`
  height: 60%;
`;

export const PTCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  height: 20%;
  width: 100%;
  justify-content: flex-end;
`;

export const PTCardButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 630px) {
    width: 100%;
    height: 150%;
  }
`;

export const PTCardEdit = styled.img`
  height: 15px;

  @media screen and (max-width: 920px) {
    height: 10px;
  }
`;

export const PTCardDelete = styled.img`
  height: 13px;
  margin-right: 5px;

  @media screen and (max-width: 920px) {
    height: 10px;
  }
`;

export const PTCardFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  width: 100%;
  text-transform: lowercase;

  @media screen and (max-width: 920px) {
    font-size: 10px;
  }
`;

export const Modal1 = styled.div`
`;
