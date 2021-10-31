/* eslint-disable quotes */
import styled from 'styled-components';

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

export const Button = styled.button`
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
`;

export const CategoryCardImg = styled.img`
  height: 60%;
`;

export const CategoryCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  height: 20%;
  width: 100%;
  justify-content: flex-end;
`;

export const CategoryCardButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 50%;
  height: 100%;
`;

export const CategoryCardEdit = styled.img`
  height: 15px;
`;

export const CategoryCardDelete = styled.img`
  height: 13px;
  margin-right: 5px;
`;

export const CategoryCardFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  width: 100%;
`;

export const Modal1 = styled.div`
`;
