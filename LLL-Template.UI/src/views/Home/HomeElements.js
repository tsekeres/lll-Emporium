import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 50px;
`;

export const CategoryData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export const AlternateItem = styled.div`
  display: none;

  @media screen and (min-width: 500px) {

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

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 50px;
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

  @media screen and (max-width: 900px) {
    width: 95%;
  }
`;
