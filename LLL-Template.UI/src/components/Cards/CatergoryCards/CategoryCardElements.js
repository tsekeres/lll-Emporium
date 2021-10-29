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

export const CategoryCardImg = styled.img`
  height: 60%;
`;

export const CategoryCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  height: 15%;
  width: 100%;
  justify-content: flex-end;
`;

export const CategoryCardButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 50%;
  margin-top: 5px;
`;

export const CategoryCardEdit = styled.img`
  height: 15px;
  margin-left: 10px;
`;

export const CategoryCardDelete = styled.img`
  height: 13px;
  margin-top: 1.5px;
`;

export const CategoryCardFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  width: 100%;
`;
