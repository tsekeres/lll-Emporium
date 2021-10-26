/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  AboutUsContainer,
  AboutUsWrapper,
  Column1,
  AboutUsImg,
  Column2,
  LogoImg,
  LogoImgWrapper,
  Bio,
} from './AboutUsElements';
import aboutus from '../../Assets/ViewStockPhotos/AboutUsViewStock.jpeg';
import logo from '../../Assets/NavBarIcons/LOGO.png';

export const AboutUs = () => {
  return (
      <AboutUsContainer className="AboutUsContainer">
        <AboutUsWrapper className="AboutUsWrapper">
          <Column1>
            <AboutUsImg src={aboutus}></AboutUsImg>
          </Column1>
          <Column2>
          <Bio>
              Here at Live, Laugh, Love Emporium we believe that in order to truly live, you must always do so according to our motto.
              First, you must live. Second, you must laugh. Third, you must love.
              However, we want to ensure our livers and laughers and lovers are not doing so in secret.
              We created this store to ensure that you have the necessary items to illustrate your dedication to living, laughing,
              and loving-- on your person, in your home, and on your feed.
            </Bio>
            <LogoImgWrapper>
              <LogoImg src={logo}></LogoImg>
            </LogoImgWrapper>
          </Column2>
        </AboutUsWrapper>
      </AboutUsContainer>
  );
};
