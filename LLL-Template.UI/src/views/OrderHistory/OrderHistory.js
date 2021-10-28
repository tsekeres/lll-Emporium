import React, { useEffect, useState } from 'react';
import OrderHistoryCard from '../../components/Cards/OrderHistoryCards/OrderHistoryCard';
import OrderHistoryOuterDiv from './OrderHistoryElements';
import { GetOrdersByUserId } from '../../helpers/data/orderData';

const OrderHistory = () => {
  const [orderList, setOrderList] = useState([]);
  const userID = '21a4208d-db82-47e2-a6c8-ce26220b83ad';

  useEffect(() => {
    GetOrdersByUserId(userID)
      .then((orderListResponse) => setOrderList(orderListResponse));
  }, []);

  return (
    <OrderHistoryOuterDiv>
    { orderList.map((order) => <OrderHistoryCard
        key={order.Id}
        order={order} />) }
    </OrderHistoryOuterDiv>
  );
};
export default OrderHistory;
