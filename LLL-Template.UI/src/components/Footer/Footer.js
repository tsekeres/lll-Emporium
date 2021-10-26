/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  FooterLinksContainer,
  FooterContainer,
  FooterLinkItems,
  FooterItem,
  FooterImg,
} from './FooterElements';
import logoWhite from '../../Assets/NavBarIcons/LLLEMPORIUMWHite.png';
import facebook from '../../Assets/NavBarIcons/facebook2.png';
import insta from '../../Assets/NavBarIcons/insta.png';
import tiktok from '../../Assets/NavBarIcons/tiktok2.png';
import twitter from '../../Assets/NavBarIcons/twitter2.png';

export const Footer = () => {
  return (
    // styled components use to instead of href
    <>
      <FooterContainer className='FooterContainer'>
        <FooterLinksContainer className='FooterLinksContainer'>
              <FooterLinkItems className="FooterLinkItems">
                  <FooterItem className='FooterItem'>
                    <a className='FooterLinks' href='https://github.com/thedigitalmenagerie' target='_blank' rel='noopener noreferrer'>
                      <FooterImg src={facebook}></FooterImg>
                    </a>
                  </FooterItem>
                  <FooterItem>
                    <a className='FooterLinks' href="https://www.linkedin.com/in/honeyraeswan/" target='_blank' rel='noopener noreferrer'>
                      <FooterImg src={twitter}></FooterImg>
                    </a>
                  </FooterItem>
                  <FooterItem>
                      <FooterImg src={logoWhite}></FooterImg>
                  </FooterItem>
                  <FooterItem>
                    <a className='FooterLinks' href="https://boxd.it/2jgft" target='_blank' rel='noopener noreferrer'>
                      <FooterImg src={insta}></FooterImg>
                    </a>
                  </FooterItem>
                  <FooterItem>
                    <a className='FooterLinks' href="https://open.spotify.com/user/hrelizabethswan?si=A0xAD-X3SYWVS8vbSof0pA&dl_branch=1" target='_blank' rel='noopener noreferrer'>
                      <FooterImg src={tiktok}></FooterImg>
                    </a>
                  </FooterItem>
              </FooterLinkItems>
        </FooterLinksContainer>
      </FooterContainer>
    </>
  );
};
