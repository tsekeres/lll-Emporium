/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from './SidebarElements';

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
        <SidebarLink className='Link'>
              shop
            </SidebarLink>
            <SidebarLink className='Link' onClick={toggle}>
              about us
            </SidebarLink>
            <SidebarLink className='Link' onClick={toggle}>
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
          <SidebarRoute className='SidebarRoute' onClick={toggle}>Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

Sidebar.propTypes = {
  isOpen: PropTypes.any,
  toggle: PropTypes.func,
};
