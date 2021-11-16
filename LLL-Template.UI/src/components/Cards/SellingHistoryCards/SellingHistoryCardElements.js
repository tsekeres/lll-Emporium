/* eslint-disable quotes */
import styled from 'styled-components';

export const SHCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  width: 25%;
  height: 20%;
  opacity: .5;
  margin-left: 75px;

  @media screen and (max-width: 525px) {
    margin-left: 25px;
    margin-right: 20px;
  }
`;

export const SHCardFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  width: 100%;
  text-transform: lowercase;
`;
