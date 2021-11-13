import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaBars } from 'react-icons/fa';
import { HashLink } from '../../../node_modules/react-router-hash-link';
import { signInUser, signOutUser } from '../../helpers/auth';
import SearchBar from '../SearchBar/SearchBar';
import {
  NavigationBar,
  NavLeft,
  NavItemsLeft,
  DropDown,
  DropDownContent,
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
  Button,
} from './NavBarElements';
import logo from '../../Assets/NavBarIcons/LOGO.png';
import loggedin from '../../Assets/NavBarIcons/LoggedIn.png';
import loggedOut from '../../Assets/NavBarIcons/LoggedOut.png';
import bag from '../../Assets/NavBarIcons/bag.png';
import magnifyingGlass from '../../Assets/NavBarIcons/SearchIcons.png';

const styleObj = {
  color: '#000000',
};

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -10;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};

export default function NavBar({ toggle, user }) {
  const [isOpen2, setIsOpen2] = useState(false);

  const toggle2 = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <NavigationBar className="NavigationBar">
      <NavLeft className="NavLeft">
        <NavItemsLeft className="NavItemsLeft">
          <HashLink smooth to="/#Home" scroll={scrollWithOffset} style={styleObj}><NavBarImg1 className="NavBarImg" src={logo}></NavBarImg1></HashLink>
          <NavLink className="Link">
            <DropDown>
                shop
              <DropDownContent className="dropdown-content">
                <HashLink smooth to="/#Categories" scroll={scrollWithOffset} style={styleObj}>categories</HashLink>
                <Link to="/ProductTypes" style={styleObj}>product types</Link>
                <Link to="/Products" style={styleObj}>products</Link>
              </DropDownContent>
            </DropDown>
          </NavLink>
          <NavLink className="Link">
          <HashLink smooth to='/#AboutUs' scroll={scrollWithOffset} style={styleObj}>
            about us
            </HashLink>
          </NavLink>
          <NavLink className="Link">
            <Link to="/Designers" style={styleObj}> designers</Link>
          </NavLink>
          {
            user !== null
            && <div className="NavItemsRight" id="authButtons">
              {
                (user)
                  ? <NavLink className="Link">
                      <DropDown>
                        account
                        <DropDownContent className="dropdown-content">
                          <Link to="/PersonalProfile" style={styleObj}> my account </Link>
                          <Link to="/OrderHistory" style={styleObj}>order history</Link>
                          <Link to="/SellingHistory" style={styleObj}>selling history</Link>
                          <Link to="/Users" style={styleObj}> users</Link>
                        </DropDownContent>
                      </DropDown>
                    </NavLink>
                  : <div>
                    </div>
              }
              </div>
            }
        </NavItemsLeft>
      </NavLeft>
      <NavMiddle className="NavMiddle">
        <NavItemsMiddle className="NavItemsMiddle">
          <HashLink smooth to="/#Home" scroll={scrollWithOffset} style={styleObj}><NavBarImg className="NavBarImg" src={logo}></NavBarImg></HashLink>
        </NavItemsMiddle>
      </NavMiddle>
      <NavRight className="NavRight">
      <NavItemsRight className="NavItemsRight" id="authButtons">
        { isOpen2 && <SearchBar/>}
          {
            user !== null
            && <div className="NavItemsRight" id="authButtons">
              {
                (user)
                  ? <div>
                      <SearchImg className="SearchImg" src={magnifyingGlass}></SearchImg>
                      <Button id="signOut" onClick={signOutUser}><SignIn className="SignOut" src={loggedin}></SignIn></Button>
                      <BagImg className="BagImg" src={bag}></BagImg>
                    </div>
                  : <div>
                      <Button onClick={toggle2}><SearchImg className="SearchImg" src={magnifyingGlass}></SearchImg></Button>
                      <Button id="signOut" onClick={signInUser}><SignIn className="SignIn" src={loggedOut}></SignIn></Button>
                    </div>
              }
              </div>
            }
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
  toggle2: PropTypes.any,
  user: PropTypes.any
};
