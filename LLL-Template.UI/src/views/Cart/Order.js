import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import getPaymentTypes from '../../helpers/data/paymentTypeData';
import getTransactionTypes from '../../helpers/data/transactionTypeData';
import { addTransaction, getTransactionsByOrderId } from '../../helpers/data/transactionData';
import { getOrderWithDetail, updateOrder } from '../../helpers/data/orderData';
import {
  OrderOuterDiv,
  OrderDataDetailDiv,
  OrderLineItemsDiv,
  OrderAddressPaymentDiv,
  InputLabel,
  OrderFormInput,
  OrderTransactionList,
  OrderTransactionLine,
  OrderSubTotalDiv,
  OrderShippingCostDiv,
  OrderTotalDue,
  OrderSubmitButton,
  OrderTotalPaymentsDiv,
} from './OrderElements';

import {
  formatDate,
  calculateOrderSubtotal,
  calculateTotalPayments
} from '../../helpers/data/calculators';
import LineItemDetailCard from '../../components/Cards/OrderHistoryCards/LineItemDetailCard';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

function getTransactionTypeId(options, payments, paymentAmount, totalDue) {
  let id = -1;
  if (payments + paymentAmount < totalDue) {
    for (let i = 0; i < options.length; i += 1) {
      if (options[i].transactionTypeName === 'Partial Payment') {
        id = options[i].id;
      }
    }
  } else if (payments + paymentAmount >= totalDue) {
    for (let i = 0; i < options.length; i += 1) {
      if (options[i].transactionTypeName === 'Payment') {
        id = options[i].id;
      }
    }
  }
  return id;
}

const OrderDetailView = ({
  orderId
}) => {
  const [order, setOrder] = useState(null);
  const [orderSubTotal, setOrderSubTotal] = useState('');
  const [lineItemsList, setLineItemsList] = useState([]);
  const [transactionList, setTransactionList] = useState([]);
  const [paymentTypeOptions, setPaymentTypeOptions] = useState([]);
  const [paymentType, setPaymentType] = useState({
    value: '',
    label: ''
  });
  const [transactionTypeOptions, setTransactionTypeOptions] = useState({});
  const [newTransaction, setNewTransaction] = useState({
    orderId,
    paymentTypeId: '',
    transactionTypeId: '',
    paymentAccount: '',
    paymentAmount: '0.0',
    paymentDate: ''
  });
  const [totalPayments, setTotalPayments] = useState('');
  useEffect(() => {
    getOrderWithDetail(orderId)
      .then((resultObj) => {
        setOrder(resultObj.order);
        setLineItemsList(resultObj.lineItems);
        setTransactionList(resultObj.transactionItems);
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
      setPaymentTypeOptions(optionsArr);
    })
      .catch(setPaymentTypeOptions([]));
    getTransactionTypes().then((resultArr) => setTransactionTypeOptions(resultArr))
      .catch(setTransactionTypeOptions([]));
  }, []);

  useEffect(() => {
    if (order && lineItemsList) {
      setOrderSubTotal(calculateOrderSubtotal(order, lineItemsList));
    }
  }, [lineItemsList]);

  useEffect(() => {
    let mounted = true;
    if (transactionList && mounted) {
      setTotalPayments(calculateTotalPayments(transactionList));
    }
    return function cleanup() {
      mounted = false;
    };
  }, [transactionList]);

  useEffect(() => {
    let mounted = true;
    if (mounted && orderSubTotal) {
      setNewTransaction((prevState) => ({
        ...prevState,
        paymentAmount: Math.round((orderSubTotal + order.shippingCost - totalPayments + Number.EPSILON) * 100) / 100
      }));
    }
    return function cleanup() {
      mounted = false;
    };
  }, [orderSubTotal, totalPayments]);
  const handleChange = (e) => {
    setOrder((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value ? e.target.value : ''
    }));
  };

  const handlePaymentTypeChange = (e) => {
    // react-select uses e.value, e.name etc.
    setPaymentType((e));
  };

  const handleTransactionChange = (e) => {
    setNewTransaction((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value ? e.target.value : ''
    }));
  };

  const handleSubmit = () => {
    updateOrder(order)
      .catch((err) => console.warn(err));
    const transactionTypeId = getTransactionTypeId(transactionTypeOptions,
      totalPayments, parseFloat(newTransaction.paymentAmount), orderSubTotal + order.shippingCost);
    const timeStamp = new Date();
    const transaction = {
      orderId: order.id,
      paymentTypeId: paymentType.value,
      transactionTypeId,
      paymentAccount: newTransaction.paymentAccount,
      paymentAmount: newTransaction.paymentAmount,
      paymentDate: timeStamp.toISOString()
    };
    addTransaction(transaction).then((transactionId) => {
      console.warn(transactionId);
      getTransactionsByOrderId(orderId).then((responseList) => {
        setTransactionList(responseList);
      });
    })
      .catch((error) => console.warn(error));
    console.warn(transaction);
    // addTransaction(transaction);
  };

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
          <InputLabel htmlFor='shippingAddress'>Street Address</InputLabel>
          <OrderFormInput
            type='text' name='shippingAddress' value={order.shippingAddress}
            label='shippingAddress' onChange={handleChange}/>
          <InputLabel htmlFor='shippingCity'>City</InputLabel>
          <OrderFormInput
            type='text' name='shippingCity' value={order.shippingCity}
            label='shippingCity' onChange={handleChange}/>
          <InputLabel htmlFor="shippingState">State</InputLabel>
          <OrderFormInput
            type='text' name='shippingState' value={order.shippingState}
            label='shippingState' onChange={handleChange}/>
          <InputLabel htmlFor='shippingZip'>Zip Code</InputLabel>
          <OrderFormInput
            type='text' name='shippingZip' value={order.shippingZip}
            label='shippingZip' onChange={handleChange}/>
          <InputLabel htmlFor='paymentType'>Payment Type</InputLabel>
          <Select
            options={paymentTypeOptions}
            onChange={handlePaymentTypeChange} />
          <InputLabel htmlFor='paymentAccount'>Account Number</InputLabel>
          <OrderFormInput
            type='text' name='paymentAccount' value={newTransaction.paymentAccount}
            label='paymentAccount' onChange={handleTransactionChange} />
          <InputLabel htmlFor='paymentAmount'>Payment Amount</InputLabel>
          <OrderFormInput
            type='text' name='paymentAmount' value={newTransaction.paymentAmount}
            label='paymentAmount' onChange={handleTransactionChange} />
            <div>Past Payments</div>
          <OrderTransactionList>
            { transactionList.length ? (transactionList.map((transaction) => <OrderTransactionLine
              key={transaction.id}>
              {currencyFormatter.format(transaction.paymentAmount)}
            </OrderTransactionLine>)) : '' }
          </OrderTransactionList>
          <OrderSubTotalDiv>SubTotal: {currencyFormatter.format(orderSubTotal)}</OrderSubTotalDiv>
          <OrderShippingCostDiv>Shipping: {currencyFormatter.format(order.shippingCost)}</OrderShippingCostDiv>
          <OrderTotalPaymentsDiv>Total Payments:
            {currencyFormatter.format(totalPayments)}
          </OrderTotalPaymentsDiv>
          <OrderTotalDue>Balance Due: {currencyFormatter.format(orderSubTotal + order.shippingCost - totalPayments)}</OrderTotalDue>
          <OrderSubmitButton onClick={handleSubmit}>Submit Order</OrderSubmitButton>
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
