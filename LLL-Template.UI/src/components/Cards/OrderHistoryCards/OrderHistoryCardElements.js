import styled from 'styled-components';

const OrderHistoryCardOuterDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const OrderDataDiv = styled.div`
  margin: 5px;
  border: 1px solid black;
  border-radius: 5px;
  vertical-align: top;
  cursor: pointer;
  flex-basis: 20em;
  max-height: 6em;
`;

const OrderDataDetailDiv = styled.div`
  width: 90%;
`;

const OrderLineItemsDiv = styled.div`
  margin: 5px;
  padding-left: 1%;
  background-color: #c4c4c4;
  flex-basis: 30em
`;

const OrderTotalDiv = styled.div`
  margin: 5px;
  background-color: #ba9e9b;
  height: 77px;
  padding: 5px;
  flex-basis: 10em;
`;

export {
  OrderHistoryCardOuterDiv,
  OrderDataDiv,
  OrderDataDetailDiv,
  OrderLineItemsDiv,
  OrderTotalDiv,
};
