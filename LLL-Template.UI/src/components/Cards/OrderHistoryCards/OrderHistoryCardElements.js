import styled from 'styled-components';

const OrderHistoryCardOuterDiv = styled.div`
  width: 90%:
`;

const OrderDataDiv = styled.div`
  width: 28%;
  margin: 10px 5px;
  display: inline-block;
  border: 1px solid black;
  border-radius: 5px;
  vertical-align: top;
`;

const OrderDataDetailDiv = styled.div`
  width: 90%;
`;

const OrderLineItemsDiv = styled.div`
  margin: 10px 10px 5px;
  display: inline-block;
  width: 50%; 
  padding-left: 1%;
`;

const OrderTotalDiv = styled.div`
  display: inline-block;
  width: 8%;
  background-color: #ba9e9b;
  height: 77px;
  vertical-align: top;
  padding: 5px;
  float: right;
`;

export {
  OrderHistoryCardOuterDiv,
  OrderDataDiv,
  OrderDataDetailDiv,
  OrderLineItemsDiv,
  OrderTotalDiv,
};
