import styled from 'styled-components';

const LineItemOuterDiv = styled.div`
  margin 5px;
`;

const LineItemDescriptionDiv = styled.div`
  margin 5px;
`;

const LineItemCountSelect = styled.input`
  width: 2em;
`;

const LineItemUpdateButton = styled.button`
  width: 15em;
`;

const ProductIconDiv = styled.div`
  width: 15%;
  margin 0 5px 5px 0;
  height: auto;
  text-align: center;
  border-radius: 5px;
  vertical-align: top;
`;

const ProductIconImg = styled.img`
  width: 80%;
  object-fit: contain;
  border-radius: 5px;
`;

export {
  LineItemOuterDiv,
  LineItemDescriptionDiv,
  ProductIconDiv,
  ProductIconImg,
  LineItemCountSelect,
  LineItemUpdateButton
};
