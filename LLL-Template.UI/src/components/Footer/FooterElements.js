import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  background-color: #000000;
  height: 80px;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const FooterLinkItems = styled.div`
  display: flex;
  box-sizing: box;
  color: #fff;
`;

export const FooterLinkTitle = styled.div`
  font-size: 14px;
  color: #fff;
  justify-content: center;
  align-self: center;
`;

export const FooterLink = styled(Link)`
  margin: 1rem;
`;

export const FooterImg = styled.img`
  height: 2rem;
  justify-content: space-between;
  margin: 1.25rem;
`;

export const FooterItem = styled.div`

`;
