/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Item = styled.div`
  display: flex;

  @media screen and (max-width: 1000px) {
    font-size: 10px;
  }

  @media screen and (max-width: 675px) {
    font-size: 8px;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const Button = styled.button`
display: flex;
background-color: Transparent;
background-repeat:no-repeat;
border: none;
cursor:pointer;
overflow: hidden; 
`;
