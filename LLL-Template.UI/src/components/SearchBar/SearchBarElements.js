import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const SearchBarContainer = styled.input`
  opacity:  ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;
