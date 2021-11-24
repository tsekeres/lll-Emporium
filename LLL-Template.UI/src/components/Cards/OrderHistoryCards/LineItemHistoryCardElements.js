import styled from 'styled-components';

const LineItemOuterDiv = styled.div`
  width: 100%;
  height: 4em;
  margin 5px;
`;

const ProductsIconDiv = styled.div`
  display: inline-block;
  width: 15%;
  margin 5px 5px 0 0;
  height: auto;
  text-align: center;
  border-radius: 5px;
  vertical-align: top;
`;

const ProductsIconImg = styled.img`
  width: 80%;
  object-fit: contain;
  border-radius: 5px;
  cursor: pointer;
`;

const LineItemDescriptionDiv = styled.div`
  width: 78%;
  display: inline-block;
  vertical-align: bottom;
  cursor: pointer;
`;

export {
  LineItemOuterDiv,
  ProductsIconDiv,
  ProductsIconImg,
  LineItemDescriptionDiv
};
