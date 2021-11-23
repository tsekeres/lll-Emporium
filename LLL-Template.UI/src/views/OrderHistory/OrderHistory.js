import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import OrderHistoryCard from '../../components/Cards/OrderHistoryCards/OrderHistoryCard';
import {
  OrderHistorySearchUserOuterDiv,
  OrderHistoryOuterDiv,
  OrderHistoryTitle,
} from './OrderHistoryElements';
import { getOrdersByUserId } from '../../helpers/data/orderData';
import { getAllUsers } from '../../helpers/data/userData';

const OrderHistory = ({
  user
}) => {
  const [orderList, setOrderList] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const optionsArr = [];
    let mounted = true;
    if (user) {
      if (user.roleTypeName === 'Super User'
        || user.roleTypeName === 'Administrator') {
        if (mounted) setIsAdmin(true);
        setOrderList([]);
        getOrdersByUserId(user.id)
          .then((orderListResponse) => {
            if (mounted) setOrderList(orderListResponse);
          });
      }
      // setup list of user names for the select drop down
      getAllUsers().then((resultArr) => {
        for (let i = 0; i < resultArr.length; i += 1) {
          const option = {
            value: resultArr[i].id,
            label: `${resultArr[i].lastName}, ${resultArr[i].firstName}`
          };
          optionsArr.push(option);
        }
        if (mounted) setOptions(optionsArr);
      })
        .catch(setOptions([]));
    } else setOptions([]);
    return function cleanup() {
      mounted = false;
    };
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
      onChange={handleSelectClick}
      defaultValue={{ value: user.id, label: `${user.lastName}, ${user.firstName}` }} /> : '' }
    </OrderHistorySearchUserOuterDiv>
    <OrderHistoryOuterDiv className='order-history-outer-div'>
    { orderList.map((order) => <OrderHistoryCard
        key={order.id}
        order={order} />) }
    </OrderHistoryOuterDiv>
    </>
  );
};

OrderHistory.propTypes = {
  user: PropTypes.any
};

export default OrderHistory;
