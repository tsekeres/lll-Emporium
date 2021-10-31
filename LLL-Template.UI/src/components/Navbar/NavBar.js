import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaBars } from 'react-icons/fa';
import { HashLink } from '../../../node_modules/react-router-hash-link';
import {
  NavigationBar,
  NavLeft,
  NavItemsLeft,
  NavLink,
  NavMiddle,
  NavItemsMiddle,
  NavRight,
  NavItemsRight,
  NavBarImg,
  NavBarImg1,
  SearchImg,
  SignIn,
  BagImg,
  MobileIcon,
} from './NavBarElements';
import logo from '../../Assets/NavBarIcons/LOGO.png';
import loggedOut from '../../Assets/NavBarIcons/LoggedOut.png';
import bag from '../../Assets/NavBarIcons/bag.png';
import magnifyingGlass from '../../Assets/NavBarIcons/SearchIcons.png';

const styleObj = {
  color: '#000000',
};

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};
export default function NavBar({ toggle }) {
  return (
    <NavigationBar className="NavigationBar">
      <NavLeft className="NavLeft">
        <NavItemsLeft className="NavItemsLeft">
          <NavBarImg1 className="NavBarImg" src={logo}></NavBarImg1>
          <NavLink className="Link">
            <HashLink smooth to='/#Categories' scroll={scrollWithOffset} style={styleObj}>
            shop
            </HashLink>
          </NavLink>
          <NavLink className="Link">
          <HashLink smooth to='/#AboutUs' scroll={scrollWithOffset} style={styleObj}>
            about us
            </HashLink>
          </NavLink>
          <NavLink className="Link">
            <Link to="/Designers" style={styleObj}> designers</Link>
          </NavLink>
          <NavLink className="Link">
            <Link to="/PersonalProfile" style={styleObj}> account </Link>
          </NavLink>
          <NavLink className="Link">
            <Link to="/OrderHistory" style={styleObj}> order history</Link>
          </NavLink>
          <NavLink className="Link">
            <Link to="/SellingHistory" style={styleObj}> selling history</Link>
          </NavLink>
          <NavLink className="Link">
            <Link to="/Users" style={styleObj}> users</Link>
          </NavLink>
        </NavItemsLeft>
      </NavLeft>
      <NavMiddle className="NavMiddle">
        <NavItemsMiddle className="NavItemsMiddle">
          <NavBarImg className="NavBarImg" src={logo}></NavBarImg>
        </NavItemsMiddle>
      </NavMiddle>
      <NavRight className="NavRight">
        <NavItemsRight className="NavItemsRight">
          <SearchImg className="SearchImg" src={magnifyingGlass}></SearchImg>
          <SignIn className="SignIn" src={loggedOut}></SignIn>
          <BagImg className="BagImg" src={bag}></BagImg>
          <MobileIcon className="MobileIcon" onClick={toggle}>
            <FaBars className="FaBars" />
          </MobileIcon>
        </NavItemsRight>
      </NavRight>
    </NavigationBar>
  );
}

NavBar.propTypes = {
  toggle: PropTypes.any,
};
