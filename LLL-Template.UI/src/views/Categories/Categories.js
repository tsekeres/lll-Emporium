/* eslint-disable react/prop-types */
import React from 'react';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  DescriptionWrap,
  AboutMe,
  ImgWrap,
  Img,
} from './CategoryElements';
import aboutus from '../../Assets/ViewStockPhotos/AboutUsViewStock.jpeg';

// eslint-disable-next-line import/prefer-default-export
export const Categories = ({
  lightbg,
  id,
  topLine,
  alt,
  imgStart,
  lightText,
  darkText,
  headline,
  buttonLabel,
  description,
// eslint-disable-next-line arrow-body-style
}) => {
  return (
    <>
      <InfoContainer lightbg={lightbg} id={id}>
        <InfoWrapper id='bio'>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <DescriptionWrap>
                  <AboutMe to="/#bio"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                  >{buttonLabel}</AboutMe>
                </DescriptionWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img alt={alt} src={aboutus}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};
