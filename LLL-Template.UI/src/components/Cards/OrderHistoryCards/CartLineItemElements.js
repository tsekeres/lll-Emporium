import styled from 'styled-components';

const LineItemOuterDiv = styled.div`
  margin 5px;
`;

const LineItemDescriptionDiv = styled.div`
  margin 5px;
`;

const LineItemCountSelect = styled.input`
  width: 2.5em;
`;

const LineItemCountDisplay = styled.div`
  display: inline-block;
  width 7em;
`;

const LineItemRemoveButton = styled.button`
  width: 10em;
  margin 5px 1em 0 0;
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
  LineItemCountDisplay,
  LineItemRemoveButton
};
