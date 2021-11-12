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
import { getUsers } from '../../helpers/data/userData';

const OrderHistory = ({
  user
}) => {
  const [orderList, setOrderList] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const optionsArr = [];
    let mounted = true;
    if (mounted && user) {
      if (user.roleTypeName === 'Super User'
        || user.roleTypeName === 'Administrator') {
        setIsAdmin(true);
        setOrderList([]);
      } else {
        // if this is not an admin user, we show their orders
        getOrdersByUserId(user.id)
          .then((orderListResponse) => setOrderList(orderListResponse));
      }
      // setup list of user names for the select drop down
      getUsers().then((resultArr) => {
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

OrderHistory.propTypes = {
  user: PropTypes.any
};

export default OrderHistory;
