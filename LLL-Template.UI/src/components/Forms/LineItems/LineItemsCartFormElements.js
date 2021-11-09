import styled from 'styled-components';

const OrderLineItemsFormOuterDiv = styled.div`
  width: 100%;
`;

const OrderLineItemsUL = styled.ul`
  width: 100%;
  list-style-type: none;
  padding: 0;
`;

const OrderLineItemsLI = styled.li`
  width: 78%;
`;

const OrderLineCheckbox = styled.input`
  width: 20%;
`;

const OrderLineCountSelect = styled.input`
  width: 2em;
`;

const OrderLineItemsUpdateButton = styled.button`
  width: 15em;
`;

export {
  OrderLineItemsFormOuterDiv,
  OrderLineItemsUL,
  OrderLineItemsLI,
  OrderLineCheckbox,
  OrderLineCountSelect,
  OrderLineItemsUpdateButton
};
