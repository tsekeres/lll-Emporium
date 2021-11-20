/* eslint-disable quotes */
import styled from 'styled-components';

export const SHContainer = styled.div`
display: flex;
flex-direction: column;
  color: #00000;
  background: #fff;
  height: 800px;
  padding-top: 50px;
  padding-bottom: 50px;
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
  width: 100%;
  height: 634px;
  margin-top: 48px;
  }
`;
