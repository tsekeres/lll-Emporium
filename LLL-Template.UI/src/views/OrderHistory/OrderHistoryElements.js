import styled from 'styled-components';

const OrderHistorySearchUserOuterDiv = styled.div`
  width: 50%;
  margin 100px auto 10px;
`;

const OrderHistoryTitle = styled.div`
  margin: 5px;
  text-align: center;
  font-size: 1.2em;
`;

const OrderHistoryOuterDiv = styled.div`
  width: 95%;
  margin: 100px auto 10px;
`;

const OrderHistorySearchUser = styled.input`
  border: 3px solid black;
`;

const UL = styled.ul`
  list-style: none;
`;

const LI = styled.li`
  width = 20em;
`;

export {
  OrderHistorySearchUserOuterDiv,
  OrderHistoryTitle,
  OrderHistorySearchUser,
  OrderHistoryOuterDiv,
  UL,
  LI
};
