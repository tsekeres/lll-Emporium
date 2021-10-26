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
} from './HomeElements';
import welcomeImg from '../../Assets/ViewStockPhotos/WelcomeImg.jpeg';

function Home() {
  return (
    <HomePage className='Home'>
      <Top>
        <CategoryData>
          <AlternateItem>
            One place for all your live, laugh, love needs.
          </AlternateItem>
          <Item>
            Clothing
          </Item>
          <Item>
            Accessories
          </Item>
          <Item>
            Kitchen
          </Item>
          <Item>
            Bath
          </Item>
          <Item>
            Car Accessories
          </Item>
          <Item>
            Lawn and Garden
          </Item>
          <Item>
            Biker Gear
          </Item>
          <Item>
            Construction Eqipment
          </Item>
        </CategoryData>
      </Top>
      <Bottom>
        <WelcomeImg src={welcomeImg}></WelcomeImg>
      </Bottom>
    </HomePage>
  );
}

Home.propTypes = {
  user: PropTypes.any,
};

export default Home;
