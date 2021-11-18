import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const SearchBarBar = styled.input`
//   width: 150px;
//   height: 15px;
//   background: #fff;
//   border: 1px solid black;
//   border-radius: 5px;
//   margin-top: 8px;
//   margin-right: 5px;
//   transitionL 0.3s ease-in-out;
// //   opacity:  ${({ isOpen2 }) => (isOpen2 ? '100%' : '0')};
// //   top: ${({ isOpen2 }) => (isOpen2 ? '0' : '-100%')};
`;

const ProductSearchProductOuterDiv = styled.div`
  width: 50%;
  margin 100px auto 10px;
`;

const ProductSearchTitle = styled.div`
  margin: 5px;
  text-align: center;
  font-size: 1.2em;
`;

const ProductSearchOuterDiv = styled.div`
  width: 95%;
  margin: 100px auto 10px;
`;

const UL = styled.ul`
  list-style: none;
`;

const LI = styled.li`
  width = 20em;
`;

export {
  ProductSearchProductOuterDiv,
  ProductSearchTitle,
  ProductSearchOuterDiv,
  UL,
  LI,
};
