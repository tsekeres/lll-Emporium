import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import getPaymentTypes from '../../helpers/data/paymentTypeData';
import { getOrderById } from '../../helpers/data/orderData';
import { getOrderLinesWithProduct } from '../../helpers/data/lineItemData';
import {
  OrderOuterDiv,
  OrderDataDetailDiv,
  OrderLineItemsDiv,
  OrderAddressPaymentDiv,
  InputLabel,
  OrderFormInput
} from './OrderElements';

import { formatDate, calculateTotal } from '../../helpers/data/calculators';
import LineItemDetailCard from '../../components/Cards/OrderHistoryCards/LineItemDetailCard';
// import LineItemHistoryCard from '../../components/Cards/OrderHistoryCards/LineItemHistoryCard';

const OrderDetailView = ({
  orderId
}) => {
  const [order, setOrder] = useState(null);
  const [orderTotal, setOrderTotal] = useState('');
  const [lineItemsList, setLineItemsList] = useState([]);
  const [options, setOptions] = useState([]);
  useEffect(() => {
    getOrderById(orderId)
      .then((orderResult) => {
        setOrder(orderResult);
        console.warn(order);
      })
      .catch(() => setOrder(null));
    getOrderLinesWithProduct(orderId)
      .then((resultList) => {
        console.warn(resultList);
        setLineItemsList(resultList);
      })
      .catch(() => console.warn('error'));
  }, [orderId]);

  useEffect(() => {
    const optionsArr = [];
    getPaymentTypes().then((resultArr) => {
      for (let i = 0; i < resultArr.length; i += 1) {
        const option = {
          value: resultArr[i].id,
          label: `${resultArr[i].paymentTypeName}`
        };
        optionsArr.push(option);
      }
      setOptions(optionsArr);
    })
      .catch(setOptions([]));
  }, []);

  useEffect(() => {
    if (order && lineItemsList) {
      setOrderTotal(calculateTotal(order, lineItemsList));
    }
  }, [order, lineItemsList]);

  return (
    <>
    { order ? (
      <OrderOuterDiv>
        <div>
          <OrderDataDetailDiv>Order Number: {order.id}</OrderDataDetailDiv>
          <OrderDataDetailDiv>Order Date: {formatDate(order.orderDate)}</OrderDataDetailDiv>
        </div>
        <OrderLineItemsDiv>
          { lineItemsList ? lineItemsList.map((lineObj) => <LineItemDetailCard
            key={lineObj.id}
            lineItem={lineObj} />) : '' }
        </OrderLineItemsDiv>
        <OrderAddressPaymentDiv>
          <InputLabel for='shippingAddress'>Street Address</InputLabel>
          <OrderFormInput
            type='text' name='shippingAddress' value={order.shippingAddress}
            label='shippingAddress'/>
          <InputLabel for='shippingCity'>City</InputLabel>
          <OrderFormInput
            type='text' name='shippingCity' value={order.shippingCity}
            label='shippingCity'/>
          <InputLabel for="shippingState">State</InputLabel>
          <OrderFormInput
            type='text' name='shippingState' value={order.shippingState}
            label='shippingState'/>
          <InputLabel for='shippingZip'>Zip Code</InputLabel>
          <OrderFormInput
            type='text' name='shippingZip' value={order.shippingZip}
            label='shippingZip'/>
          {'\u0024'}{orderTotal}
          <InputLabel for='paymentType'>Payment Type</InputLabel>
          <Select
          options={options} />
        </OrderAddressPaymentDiv>
      </OrderOuterDiv>
    ) : '' }
    </>
  );
};

OrderDetailView.propTypes = {
  orderId: PropTypes.string
};

export default OrderDetailView;
