/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { HashLink } from '../../../node_modules/react-router-hash-link';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  NavBarImg1,
} from './SidebarElements';
import logo from '../../Assets/NavBarIcons/LOGO.png';

const styleObj = {
  color: '#000000',
};

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -65;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};

export default function Sidebar({
  isOpen,
  toggle
}) {
  return (
    <SidebarContainer
      className="SidebarContainer"
      isOpen={isOpen}
      onClick={toggle}
    >
      <Icon className="Icon" onClick={toggle}>
        <CloseIcon className="Icon" />
      </Icon>
      <SidebarWrapper className='SidebarWrapper'>
        <SidebarMenu className='SidebarMenu'>
          <SidebarLink className='Link' onClick={toggle}>
          <HashLink smooth to='/#Categories' style={styleObj} scroll={scrollWithOffset} >
              shop
            </HashLink>
          </SidebarLink>
            <SidebarLink className='Link' onClick={toggle}>
            <HashLink smooth to='/#AboutUs' style={styleObj}>
              about us
            </HashLink>
            </SidebarLink>
          <SidebarRoute className="Link" to="/Designers" onClick={toggle}>
            designers
          </SidebarRoute>
          <SidebarRoute className="Link" to="/PersonalProfile" onClick={toggle}>
            account
          </SidebarRoute>
          <SidebarRoute className="Link" to="/OrderHistory" onClick={toggle}>
            order history
          </SidebarRoute>
          <SidebarRoute className="Link" to="/SellingHistory" onClick={toggle}>
            sales
          </SidebarRoute>
          <SidebarRoute className="Link" to="/Users" onClick={toggle}>
            users
          </SidebarRoute>
        </SidebarMenu>
        <SideBtnWrap className="SideBtnWrap">
          <SidebarRoute className="SidebarRoute" onClick={toggle}>
            sign in
          </SidebarRoute>
          <NavBarImg1 className="NavBarImg" src={logo}></NavBarImg1>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

Sidebar.propTypes = {
  isOpen: PropTypes.any,
  toggle: PropTypes.func,
};
