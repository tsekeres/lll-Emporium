import styled from 'styled-components';

export const ProductContainer = styled.div`
  color: #00000;
  background: #fff;
  height: 734px;
  padding-top: 50px;
`;

export const ProductWrapper = styled.div`
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

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  width: 25%;
  height: 20%;
  opacity: 0.5;
  margin-left: 75px;

  @media screen and (max-width: 525px) {
    margin-left: 25px;
    margin-right: 20px;
  }
`;

export const ProductCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  height: 15%;
  width: 100%;
  justify-content: flex-end;
`;

export const ProductCardButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 50%;
  margin-top: 5px;
`;

export const ProductCardEdit = styled.img`
  height: 15px;
  margin-left: 10px;
`;

export const ProductCardDelete = styled.img`
  height: 13px;
  margin-top: 1.5px;
`;

export const ProductCardImg = styled.img`
  display: flex;
  align-self: center;
  width: 60%;

  @media screen and (max-width: 1150px) {
    width: 70%;
  }
  }
`;

export const ProductCardBody = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  width: 100%;
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: row;
  height: 15%;
  width: 100%;
  justify-content: flex-end;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: row;
  height: 15%;
  width: 100%;
  justify-content: flex-end;
`;
