import styled from 'styled-components';

export const CardBio = styled.div` 
width: 196px;
height: 231px;
left: 390px;
top: 145px;

font-family: Open Sans;
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 19px;
display: flex;
align-items: right;
text-align: right;
`;

export const Card = styled.div`
width: 50em;
display: flex;
display: wrap;
margin: 100px;
opacity:  ${({ isOpen }) => (isOpen ? '0' : '100%')};
top: ${({ isOpen }) => (isOpen ? '100%' : '0')};
`;

export const CardImg = styled.img`
width: 271px;
border-radius: 50%;
height: 276.02px;
left: 85px;
top: 142px;
`;

export const CardBody = styled.div` 
width: 40em;
`;

export const EditButton = styled.button`
border-color: #e7e7e7;
color: black;
border-radius: 50px;
height: 60px;
width: 60px;
margin: 50px;

`;

export const Modal = styled.button`
border-radius: 50%;
opacity:  ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '100%')};
`;

export const ButtonModal = styled.div`
border-radius: 10%;
`;

export const ButtonImg = styled.img`
border-radius: 50%;
`;
