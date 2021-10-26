/* eslint-disable quotes */
import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #00000;
  background: #fff;
  height: 734px;
  padding-top: 100px;
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;

`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};


  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col2' 'col1 col1'` : `'col1' 'col2'`)};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 9;
  padding-bottom: 30px;
`;

export const TopLine = styled.p`
  color: #fff;
  font-size: 13px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 8px;

  @media screen and (max-width: 480px) {
    font-size: 8px;
  }
`;

export const Heading = styled.h1`
  font-size: 32px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#fff' : '#000000')};

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 15px;
  font-size: 16px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#000000' : '#fff')};

  @media screen and (max-width: 480px) {
    font-size: 8px;
  }
`;

export const DescriptionWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;

  @media screen and (max-width: 540px) {
    width: 50%;
  }

  @media screen and (max-width: 480px) {
    width: 50%;
    padding: 0;
  }

  @media screen and (max-width: 375px) {
    width: 50%;
    padding: 0;
  }
`;

export const Img = styled.img`
  width: 75%;
  // margin: 0 0 10px 0;
  // padding-right: 0;

  @media screen and (max-width: 768px) {
    width: 50%;
    // padding-bottom: 200px;
  }

  @media screen and (max-width: 480px) {
    width: 75%;
    // padding-bottom: 200px;
  }

  @media screen and (max-width: 411px) {
    width: 75%;
    // padding-bottom: 200px;
  }

  @media screen and (max-width: 360px) {
    width: 75%;
    // padding-bottom: 300px;
  }
`;

export const AboutMe = styled.p`
  font-size: 12px;

  @media screen and (max-width: 480px) {
    font-size: 8px;
  }
`;
