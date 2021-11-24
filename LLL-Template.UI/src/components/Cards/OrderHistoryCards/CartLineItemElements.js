import styled from 'styled-components';

const LineItemOuterDiv = styled.div`
  margin: 5px 5px 10px 5px;
`;

const LineItemDescriptionOuterDiv = styled.div`
  margin: 10px 5px 10px 0
`;

const LineItemDescriptionDiv = styled.div`
  cursor: pointer;
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
  margin: 5px 1em 0 0;
`;

const ProductIconDiv = styled.div`
  width: 15%;
  height: auto;
  text-align: center;
  border-radius: 5px;
  vertical-align: top;
`;

const ProductIconImg = styled.img`
  margin: 10px 0 0 0;
  width: 80%;
  object-fit: contain;
  border-radius: 5px;
  cursor: pointer;
`;

export {
  LineItemOuterDiv,
  LineItemDescriptionOuterDiv,
  LineItemDescriptionDiv,
  ProductIconDiv,
  ProductIconImg,
  LineItemCountSelect,
  LineItemCountDisplay,
  LineItemRemoveButton
};
