/* eslint-disable quotes */
import styled from 'styled-components';

export const AboutUsContainer = styled.div`
  color: #00000;
  background: #fff;
  height: 734px;
  padding-top: 50px;
`;

export const AboutUsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media screen and (max-width: 525px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const Column1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 734px;

  @media screen and (max-width: 525px) {
    height: 50%;
    width: 50%;
    justify-content: center;
    align-items: center;
  }
`;

export const AboutUsImg = styled.img`
  display: flex;
  width: 50%;

  @media screen and (max-width: 1150px) {
    width: 60%;
  }

  @media screen and (max-width: 525px) {
    width: 100%;
    align-self: center;
    margin-top: 100px;
  }

  @media screen and (max-width: 300px) {
    width: 100%;
    align-self: center;
    margin-top: 200px;
  }
`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45%;
  height: 734px;

  @media screen and (max-width: 525px) {
    height: 50%;
    width: 90%;
    margin-top: 10px;
  }
`;

export const LogoImgWrapper = styled.div`
  display: flex;
  height: 50%;
  justify-content: center;


  @media screen and (max-width: 525px) {
    margin-bottom: 0px;
    height: 50%;
  }
`;

export const LogoImg = styled.img`
  display: flex;
  height: 50%;

  @media screen and (max-width: 1150px) {
    height: 150px;
  }

  @media screen and (max-width: 785px) {
    height: 75px;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 220px;
    margin-top: 10px;
  }

  @media screen and (max-width: 525px) {
    margin-bottom: 0px;
    margin-top: 10px;
  }
`;

export const Bio = styled.div`
  height: 50%;
  justify-content: center;
  margin-top: 100px;
  text-align: center;

  @media screen and (max-width: 1150px) {
    height: 300px;
    margin-top: 200px;
  }

  @media screen and (max-width: 1000px) {
    font-size: 14px;
  }

  @media screen and (max-width: 785px) {
    font-size: 12px;
  }

  @media screen and (max-width: 600px) {
    font-size: 8px;
    margin-top: 220px;
  }

  @media screen and (max-width: 525px) {
    margin-top: 10px;
    height: 50%;
  }
`;
