import styled from 'styled-components';

const OrderOuterDiv = styled.div`
  width: 90%;
  margin 100px 3em;
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
  background-color: #c4c4c4;
`;

const OrderAddressPaymentDiv = styled.div`
  width: 30%;
  background-color: #ba9e9b;
  padding: 5px;
  float: right;
`;

const InputLabel = styled.label`
  margin 3px;
  width: 90%;
`;

const OrderFormInput = styled.input`
  width: 90%;
`;

export {
  OrderOuterDiv,
  OrderDataDiv,
  OrderDataDetailDiv,
  OrderLineItemsDiv,
  OrderAddressPaymentDiv,
  InputLabel,
  OrderFormInput
};
