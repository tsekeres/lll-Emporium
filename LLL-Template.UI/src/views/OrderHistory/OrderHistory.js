import React, { useEffect, useState } from 'react';
import OrderHistoryCard from '../../components/Cards/OrderHistoryCards/OrderHistoryCard';
import {
  OrderHistorySearchUserOuterDiv,
  OrderHistoryOuterDiv,
  OrderHistorySearchUser,
  UL,
  LI,

} from './OrderHistoryElements';
import { getOrdersByUserId } from '../../helpers/data/orderData';
import { getSingleRoleType } from '../../helpers/data/roleTypeData';
import getAllUsers from '../../helpers/data/userData';

const OrderHistory = () => {
  const [orderList, setOrderList] = useState([]);
  const [isAdmin, setIsAdmin] = useState('');
  const [userList, setUserList] = useState([]);
  const userID = '21a4208d-db82-47e2-a6c8-ce26220b83ad';
  const userRoleTypeId = 'B96AE106-B560-43BC-BCEC-3AB69EC1A794';

  useEffect(() => {
    getSingleRoleType(userRoleTypeId)
      .then((role) => {
        if (role.roleTypeName === 'Super User') {
          setIsAdmin(true);
        }
      });
    getAllUsers().then((resultArr) => setUserList(resultArr));
    getOrdersByUserId(userID)
      .then((orderListResponse) => setOrderList(orderListResponse));
  }, []);

  return (
    <>
    <OrderHistorySearchUserOuterDiv>
    { isAdmin ? <><OrderHistorySearchUser type='text' placeholder='search' />
      </> : '' }
    { isAdmin ? (<UL> { userList?.map((user) => <LI
        key={user.id}>{user.lastName}, {user.firstName}</LI>) }
        </UL>) : '' }
    </OrderHistorySearchUserOuterDiv>
    <OrderHistoryOuterDiv>
    { orderList.map((order) => <OrderHistoryCard
        key={order.id}
        order={order} />) }
    </OrderHistoryOuterDiv>
    </>
  );
};
export default OrderHistory;
