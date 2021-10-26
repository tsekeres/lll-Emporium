import React from 'react';
import PropTypes from 'prop-types';
import {
  HomePage,
  Top,
  AlternateItem,
  Item,
  CategoryData,
  Bottom,
  WelcomeImg,
  AlternateWelcomeContainer,
  AlternateWelcomeImg,
  SecondWelcomeImg,
} from './HomeElements';
import welcomeImg from '../../Assets/ViewStockPhotos/WelcomeImg.jpeg';
import knitting from '../../Assets/ViewStockPhotos/Knitting.jpeg';
import dancing from '../../Assets/ViewStockPhotos/Dancing.jpeg';
import man from '../../Assets/ViewStockPhotos/Man.jpeg';
import yoga from '../../Assets/ViewStockPhotos/Yoga.jpeg';

function Home() {
  return (
    <HomePage className='Home'>
      <Top className="Top">
        <CategoryData className="CategoryData">
          <AlternateItem className="AlternateItem">
            One place for all your live, laugh, love needs.
          </AlternateItem>
          <Item className="Item">
            Clothing
          </Item>
          <Item className="Item">
            Accessories
          </Item>
          <Item className="Item">
            Kitchen
          </Item>
          <Item className="Item">
            Bath
          </Item>
          <Item className="Item">
            Car Accessories
          </Item>
          <Item className="Item">
            Lawn and Garden
          </Item>
          <Item className="Item">
            Biker Gear
          </Item>
          <Item className="Item">
            Construction Eqipment
          </Item>
        </CategoryData>
      </Top>
      <Bottom className="Bottom">
        <WelcomeImg src={welcomeImg} className="WelcomeImg"></WelcomeImg>
        <AlternateWelcomeContainer>
          <AlternateWelcomeImg src={dancing} className="AlternateWelcomeImg"></AlternateWelcomeImg>
          <AlternateWelcomeImg src={man} className="AlternateWelcomeImg"></AlternateWelcomeImg>
          <AlternateWelcomeImg src={knitting} className="AlternateWelcomeImg"></AlternateWelcomeImg>
        </AlternateWelcomeContainer>
        <SecondWelcomeImg src={yoga} className="SecondWelcomeImg"></SecondWelcomeImg>
      </Bottom>
    </HomePage>
  );
}

Home.propTypes = {
  user: PropTypes.any,
};

export default Home;
