/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import {
  HomePage,
  Top,
  AlternateItem,
  CategoryData,
  Bottom,
  WelcomeImg,
  AlternateWelcomeContainer,
  AlternateWelcomeImg,
  SecondWelcomeImg,
} from './HomeElements';
import { Categories } from '../Categories/Categories';
import { AboutUs } from '../AboutUs/AboutUs';
import { HomeViewCards } from '../../components/Cards/HomeCards/HomeViewCards';
import welcomeImg from '../../Assets/ViewStockPhotos/WelcomeImg.jpeg';
import knitting from '../../Assets/ViewStockPhotos/Knitting.jpeg';
import dancing from '../../Assets/ViewStockPhotos/Dancing.jpeg';
import man from '../../Assets/ViewStockPhotos/Man.jpeg';
import yoga from '../../Assets/ViewStockPhotos/Yoga.jpeg';

function Home({ user, categories, setCategories }) {
  return (
    <>
    <HomePage className='Home' id="Home">
      <Top className="Top">
        <CategoryData className="CategoryData">
          <AlternateItem className="AlternateItem">
            One place for all your live, laugh, love needs.
          </AlternateItem>
          {categories?.map((categoryInfo) => (
            <HomeViewCards
              key={categoryInfo.id}
              id={categoryInfo.id}
              categoryName={categoryInfo.categoryName}
            />
          ))}
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
    <Categories user={user} categories={categories} setCategories={setCategories}/>
    <AboutUs/>
   </>
  );
}

Home.propTypes = {
  user: PropTypes.any,
  categories: PropTypes.any,
  setCategories: PropTypes.func,
};

export default Home;
