import styled from 'styled-components';

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

export {
  OrderLineItemsUL,
  OrderLineItemsLI,
  OrderLineCheckBox,
  OrderLineCountSelect
};
