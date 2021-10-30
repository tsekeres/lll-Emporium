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
import { Categories } from '../Categories/Categories';
import { AboutUs } from '../AboutUs/AboutUs';
import { getCategories } from '../../helpers/data/categoryData';
import welcomeImg from '../../Assets/ViewStockPhotos/WelcomeImg.jpeg';
import knitting from '../../Assets/ViewStockPhotos/Knitting.jpeg';
import dancing from '../../Assets/ViewStockPhotos/Dancing.jpeg';
import man from '../../Assets/ViewStockPhotos/Man.jpeg';
import yoga from '../../Assets/ViewStockPhotos/Yoga.jpeg';

function Home() {
  return (
    <>
    <HomePage className='Home'>
      <Top className="Top">
        <CategoryData className="CategoryData">
          <AlternateItem className="AlternateItem">
            One place for all your live, laugh, love needs.
          </AlternateItem>
          <Item className="Item">
            clothing
          </Item>
          <Item className="Item">
            accessories
          </Item>
          <Item className="Item">
            kitchen
          </Item>
          <Item className="Item">
            bath
          </Item>
          <Item className="Item">
            car accessories
          </Item>
          <Item className="Item">
            lawn and garden
          </Item>
          <Item className="Item">
            biker gear
          </Item>
          <Item className="Item">
            construction eqipment
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
    <Categories/>
    <AboutUs/>
   </>
  );
}

Home.propTypes = {
  user: PropTypes.any,
};

export default Home;
