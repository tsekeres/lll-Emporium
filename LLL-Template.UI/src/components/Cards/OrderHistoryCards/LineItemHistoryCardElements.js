import styled from 'styled-components';

const LineItemOuterDiv = styled.div`
  width: 100%;
  height: 4em;
  margin 5px;
`;

const ProductsIconDiv = styled.div`
  display: inline-block;
  width: 15%;
  margin 0 5px 5px 0;
  height: auto;
  text-align: center;
  border-radius: 5px;
  vertical-align: top;
`;

const ProductsHelperSpan = styled.span`
  display: inline-block;
  height: 100%;
  vertical-align: top;
`;

const ProductsIconImg = styled.img`
  width: 80%;
  object-fit: contain;
`;

const LineItemDescriptionDiv = styled.div`
  width: 78%;
  display: inline-block;
`;

export {
  LineItemOuterDiv,
  ProductsIconDiv,
  ProductsHelperSpan,
  ProductsIconImg,
  LineItemDescriptionDiv
};
