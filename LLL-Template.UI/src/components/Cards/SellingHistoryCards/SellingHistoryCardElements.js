/* eslint-disable quotes */
import styled from 'styled-components';

export const SHCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  width: 50%;
  height: 50%;
  margin-left: 75px;

  @media screen and (max-width: 525px) {
    margin-left: 25px;
    margin-right: 20px;
  }
`;

export const SHCardFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5px;
  width: 100%;
  height: 75%;
`;

export const SHCardImg = styled.img`
  height: 25%;
`;

export const SHCardFooterLine = styled.div`
  height:10%;
`;
