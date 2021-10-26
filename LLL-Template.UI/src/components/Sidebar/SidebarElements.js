import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

// in styled components you can do if else / ternerary operators
export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #fff;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transitionL 0.3s ease-in-out;
  opacity:  ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #000000;
  width: 15px;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 1rem;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #000000;
  width: 100%;
  height: 100%;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 60px);
  text-align: center;
  padding-top: 75px;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  text-decoration: none;
  list-style: none;
  transtion: 0.2s ease-in-out;
  text-decoration: none;
  color: #000000;

  &:hover {
    color: #fff;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 49%;
`;

export const SidebarRoute = styled(LinkR)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  color: #010606;
  font-size: 1rem;
  padding-top: 5px;
`;

export const NavBarImg1 = styled.img`
  width: 50px;
  padding-top: 25px;
`;