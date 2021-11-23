/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import { signInUser, signOutUser } from '../../helpers/auth';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SidebarRoute2,
  NavBarImg1,
  Button,
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
  toggle,
  user,
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
            <SidebarRoute to="/ProductTypes">product types</SidebarRoute>
            <SidebarRoute to="/Products">products</SidebarRoute>
            <SidebarLink className='Link' onClick={toggle}>
            <HashLink smooth to='/#AboutUs' style={styleObj}>
              about us
            </HashLink>
            </SidebarLink>
          <SidebarRoute className="Link" to="/Designers" onClick={toggle}>
            designers
          </SidebarRoute>
          {
            user !== null
            && <div>
              {
                (user)
                  ? <div>
                      <SidebarRoute className="Link" to="/PersonalProfile" onClick={toggle}>
                        account
                      </SidebarRoute>
                      <SidebarRoute className="Link" to="/OrderHistory" onClick={toggle}>
                        order history
                      </SidebarRoute>
                      {
                        user.roleTypeName === 'Designer' || user.roleTypeName === 'Administrator'
                          ? <div>
                              <SidebarRoute className="Link" to="/SellingHistory" onClick={toggle}>
                                sales
                              </SidebarRoute>
                              {
                                user.roleTypeName === 'Administrator'
                                  ? <SidebarRoute className="Link" to="/Users" onClick={toggle}>
                                      users
                                    </SidebarRoute>
                                  : <div></div>
                              }
                            </div>
                          : <div></div>
                      }
                    </div>
                  : <div></div>
              }
              </div>
            }
        </SidebarMenu>
        <SideBtnWrap className="SideBtnWrap">
          <SidebarRoute2 className="SidebarRoute" onClick={toggle}>
          {
            user !== null
            && <div className="SidebarRoute">
              {
                (user)
                  ? <div><Button id="signOut" onClick={signOutUser}>sign out</Button></div>
                  : <div><Button id="signIn" onClick={signInUser}>sign in</Button></div>
              }
              </div>
            }
          </SidebarRoute2>
          <NavBarImg1 className="NavBarImg" src={logo}></NavBarImg1>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

Sidebar.propTypes = {
  isOpen: PropTypes.any,
  toggle: PropTypes.func,
  user: PropTypes.any,
};
