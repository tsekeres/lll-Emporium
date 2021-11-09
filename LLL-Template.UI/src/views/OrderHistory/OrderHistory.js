import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import OrderHistoryCard from '../../components/Cards/OrderHistoryCards/OrderHistoryCard';
import {
  OrderHistorySearchUserOuterDiv,
  OrderHistoryOuterDiv,
  OrderHistoryTitle,
} from './OrderHistoryElements';
import { getOrdersByUserId } from '../../helpers/data/orderData';
import { getSingleRoleType } from '../../helpers/data/roleTypeData';
import { getAllUsers } from '../../helpers/data/userData';

const OrderHistory = () => {
  const [orderList, setOrderList] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [options, setOptions] = useState([]);
  const userId = '21a4208d-db82-47e2-a6c8-ce26220b83ad';
  const userRoleTypeId = 'B96AE106-B560-43BC-BCEC-3AB69EC1A794';
  // const userRoleTypeId = '50FA8B54-8C02-4440-844E-43AAE0F74B73';

  useEffect(() => {
    const optionsArr = [];
    getSingleRoleType(userRoleTypeId)
      .then((role) => {
        if (role.roleTypeName === 'Super User'
          || role.roleTypesName === 'Administrator') {
          setIsAdmin(true);
          setOrderList([]);
        } else {
          // if this is not an admin user, we show their orders
          getOrdersByUserId(userId)
            .then((orderListResponse) => setOrderList(orderListResponse));
        }
      })
      .catch(setIsAdmin(false));
    // setup list of user names for the select drop down
    getAllUsers().then((resultArr) => {
      for (let i = 0; i < resultArr.length; i += 1) {
        const option = {
          value: resultArr[i].id,
          label: `${resultArr[i].lastName}, ${resultArr[i].firstName}`
        };
        optionsArr.push(option);
      }
      setOptions(optionsArr);
    })
      .catch(setOptions([]));
  }, []);

  const handleSelectClick = ((e) => {
    getOrdersByUserId(e.value)
      .then((orderListItems) => setOrderList(orderListItems))
      .catch(() => setOrderList([]));
  });

  return (
    <>
    <OrderHistorySearchUserOuterDiv>
    <OrderHistoryTitle>Orders</OrderHistoryTitle>
    { isAdmin ? <Select
      options={options}
      onChange={handleSelectClick}/> : '' }
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
