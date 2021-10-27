/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
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
    <SidebarContainer className='SidebarContainer' isOpen={isOpen} onClick={toggle}>
      <Icon className='Icon' onClick={toggle}>
        <CloseIcon className ='Icon'/>
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
            <SidebarLink className='Link' to="/Designers" onClick={toggle}>
              designers
            </SidebarLink>
            <SidebarLink className='Link' onClick={toggle}>
              account
            </SidebarLink>
            <SidebarLink className='Link' onClick={toggle}>
              order history
            </SidebarLink>
            <SidebarLink className='Link' onClick={toggle}>
              sales
            </SidebarLink>
            <SidebarLink className='Link' onClick={toggle}>
              users
            </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap className='SideBtnWrap'>
          <SidebarRoute className='SidebarRoute' onClick={toggle}>sign in</SidebarRoute>
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
