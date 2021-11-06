import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const HomePage = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  height: 734px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 1150px) {
    padding-top: 100px;
  }

  @media screen and (max-width: 950px) {
    padding-top: 50px;
  }

  @media screen and (max-width: 700px) {
    padding-top: 25px;
  }

  @media screen and (max-width: 700px) {
    padding-top: 0px;
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const CategoryData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export const AlternateItem = styled.div`
  margin-top: 75px;


  @media screen and (min-width: 500px) {
    display: none;
    color: #000000;
  }

  @media screen and (max-width: 400px) {
    margin-top: px;
  }

  @media screen and (max-width: 325px) {
    font-size: 12px;
  }

  @media screen and (max-width: 250px) {
    font-size: 10px;
  }

  @media screen and (max-width: 215px) {
    font-size: 6px;
  }
  
`;

export const Item = styled.div`
  display: flex;

  @media screen and (max-width: 1000px) {
    font-size: 10px;
  }

  @media screen and (max-width: 675px) {
    font-size: 8px;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 50px;
  width: 100%;

`;

export const WelcomeImg = styled.img`
  display: flex;
  align-self: center;
  width: 60%;

  @media screen and (max-width: 1150px) {
    width: 65%;
  }

  @media screen and (max-width: 1000px) {
    width: 75%;
  }

  @media screen and (max-width: 900px) {
    width: 85%;
  }

`;

export const AlternateWelcomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 85%;

  @media screen and (min-width: 600px) {
    display: none;
    color: #000000;
  }
`;

export const AlternateWelcomeImg = styled.img`
  width: 33.25%;
  align-self: center;
`;

export const SecondWelcomeImg = styled.img`
  display: flex;
  align-self: center;
  width: 85%;

  @media screen and (min-width: 326px) {
    display: none;
  }
`;
