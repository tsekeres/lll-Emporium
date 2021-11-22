import styled from 'styled-components';

const OrderOuterDiv = styled.div`
  width: 90%;
  margin 100px 3em;
`;

const OrderBaseInfoDiv = styled.div`
  width: 100%;
`;

const OrderItemsPaymentDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

const OrderDataDetailDiv = styled.div`
  width: 90%;
`;

const OrderLineItemsOuterDiv = styled.div`
  flex-basis: 50%;
  min-width: 20em;
`;

const OrderLineItemsDiv = styled.div`
  margin: 10px 0 5px;
  padding-left: 1%;
  background-color: #c4c4c4;
`;

const OrderLineItemsUL = styled.ul`
  width: 100%;
  list-style-type: none;
  padding: 0;
`;

const OrderLineItemsLI = styled.li`
  width: 78%;
`;

const OrderLineCheckBox = styled.input`
  width: 20%;
`;

const OrderLineCountSelect = styled.input`
  width: 2em;
`;

const OrderAddressPaymentOuterDiv = styled.div`
  flex-basis: 40%;
  min-width: 20em;
`;

const OrderAddressPaymentDiv = styled.div`
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

const OrderFinanceOutputDiv = styled.div`
  margin: 1px 5px;
`;

const OrderTransactionList = styled.div`
  width: 100%;
`;

const OrderTransactionLine = styled.div`
  width: 100%;
`;

const OrderFinancialFigure = styled.div`
  display: inline-block;
  float: right;
  text-align: right;
`;

const OrderPaymentFigure = styled.div`
  text-align: right;
`;

const OrderTotalPaymentsDiv = styled.div`
  width: 100%;
`;

const OrderSubTotalDiv = styled.div`
  width: 100%;
`;

const OrderShippingCostDiv = styled.div`
  width: 100%;
`;

const OrderTotalDue = styled.div`
  width: 100%;
`;

const OrderSubmitButton = styled.button`
  width: 10em
`;

const EmptyCartDiv = styled.div`
  text-align: center;
`;

export {
  OrderOuterDiv,
  OrderBaseInfoDiv,
  OrderDataDetailDiv,
  OrderItemsPaymentDiv,
  OrderLineItemsOuterDiv,
  OrderLineItemsDiv,
  OrderLineItemsUL,
  OrderLineItemsLI,
  OrderLineCheckBox,
  OrderLineCountSelect,
  OrderAddressPaymentOuterDiv,
  OrderAddressPaymentDiv,
  InputLabel,
  OrderFormInput,
  OrderFinanceOutputDiv,
  OrderTransactionList,
  OrderTransactionLine,
  OrderFinancialFigure,
  OrderPaymentFigure,
  OrderTotalPaymentsDiv,
  OrderSubTotalDiv,
  OrderShippingCostDiv,
  OrderTotalDue,
  OrderSubmitButton,
  EmptyCartDiv
};
