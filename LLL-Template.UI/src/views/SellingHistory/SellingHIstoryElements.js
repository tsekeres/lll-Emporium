/* eslint-disable quotes */
import styled from 'styled-components';

export const SHContainer = styled.div`
display: flex;
flex-direction: column;
  color: #00000;
  background: #fff;
  height: 734px;
  padding-top: 50px;
`;

export const SHWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Column1 = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  height: 634px;
  margin-top: 48px;

  @media screen and (max-width: 1150px) {
    width: 70%;
  }

  @media screen and (max-width: 525px) {
    width: 100%;
  }
`;

export const SHImg = styled.img`
  display: flex;
  align-self: center;
  width: 60%;
`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 734px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;
