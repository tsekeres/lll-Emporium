import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { useParams } from 'react-router-dom';
import validator from 'validator';
import getPaymentTypes from '../../helpers/data/paymentTypeData';
import getTransactionTypes from '../../helpers/data/transactionTypeData';
import { addTransaction, getTransactionsByOrderId } from '../../helpers/data/transactionData';
import { getOrderById, updateOrder } from '../../helpers/data/orderData';
import { updateProduct } from '../../helpers/data/productData';
import {
  OrderOuterDiv,
  OrderBaseInfoDiv,
  OrderDataDetailDiv,
  OrderItemsPaymentDiv,
  OrderLineItemsOuterDiv,
  OrderLineItemsDiv,
  OrderAddressPaymentOuterDiv,
  OrderAddressPaymentDiv,
  InputLabel,
  OrderFormInput,
  // OrderFinanceOutputDiv,
  OrderTransactionList,
  OrderTransactionLine,
  OrderFinancialFigure,
  OrderPaymentFigure,
  OrderSubTotalDiv,
  OrderShippingCostDiv,
  OrderTotalDue,
  OrderSubmitButton,
  OrderTotalPaymentsDiv,
  EmptyCartDiv,
} from './OrderElements';

import {
  formatDate,
  calculateOrderSubtotal,
  calculateTotalPayments,
  calculateShippingCost
} from '../../helpers/data/calculators';
// import LineItemDetailCard from '../../components/Cards/OrderHistoryCards/LineItemDetailCard';
import LineItemsCartForm from '../../components/Forms/LineItems/LineItemsCartForm';
import OrderShippingPayment from '../../components/Cards/OrderHistoryCards/OrderShippingPayment';
import { getOrderLinesWithProduct } from '../../helpers/data/lineItemData';
// import { getLineItemsByOrderId } from '../../helpers/data/lineItemData';

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
  user,
  cartCount,
  setCartCount,
  cartId,
  setCartId
}) => {
  const { orderId } = useParams();
  const [authed, setAuthed] = useState(null);
  const [order, setOrder] = useState(null);
  const [validOrderId, setIsValidOrderId] = useState(true);
  const [orderSubTotal, setOrderSubTotal] = useState(0.0);
  const [lineItemsList, setLineItemsList] = useState([]);
  const [transactionList, setTransactionList] = useState([]);
  const [paymentTypeOptions, setPaymentTypeOptions] = useState([]);
  const [paymentType, setPaymentType] = useState({
    value: '',
    label: ''
  });
  const [shippingCost, setShippingCost] = useState(7.99);
  const [transactionTypeOptions, setTransactionTypeOptions] = useState({});
  const [newTransaction, setNewTransaction] = useState({
    orderId,
    paymentTypeId: '',
    transactionTypeId: '',
    paymentAccount: '',
    paymentAmount: '0.0',
    paymentDate: ''
  });
  const [hasTransactions, setHasTransactions] = useState(false);
  const [totalPayments, setTotalPayments] = useState('');
  const [lineItemsUpdated, setLineItemsUpdated] = useState(false);
  useEffect(() => {
    let mounted = true;
    if (mounted && orderId) {
      if (validator.isUUID(orderId)) {
        getOrderById(orderId).then(setOrder);
        getTransactionsByOrderId(orderId).then((transactions) => {
          setTransactionList(transactions);
          if (transactions.length > 0) {
            setHasTransactions(true);
          } else setHasTransactions(false);
        });
      } else setIsValidOrderId(false);
    }
    return () => {
      mounted = false;
    };
  }, [orderId]);

  useEffect(() => {
    let mounted = true;
    const optionsArr = [];
    if (mounted) {
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
      // transaction types are not a user input option, unlike payment types
      getTransactionTypes().then((resultArr) => setTransactionTypeOptions(resultArr))
        .catch(setTransactionTypeOptions([]));
    }
    return function cleanup() {
      mounted = false;
    };
  }, []);

  // order subtotal
  useEffect(() => {
    let mounted = true;
    if (mounted && lineItemsList) {
      setOrderSubTotal(calculateOrderSubtotal(lineItemsList, hasTransactions));
    }
    return function cleanup() {
      mounted = false;
    };
  }, [lineItemsList]);

  // sum of payments made
  useEffect(() => {
    let mounted = true;
    if (transactionList && mounted) {
      setTotalPayments(calculateTotalPayments(transactionList));
    }
    return function cleanup() {
      mounted = false;
    };
  }, [transactionList]);

  // setup new transaction
  useEffect(() => {
    let mounted = true;
    if (mounted && orderSubTotal) {
      setNewTransaction((prevState) => ({
        ...prevState,
        paymentAmount: Math.round((orderSubTotal + shippingCost - totalPayments + Number.EPSILON) * 100) / 100
      }));
    }
    return function cleanup() {
      mounted = false;
    };
  }, [orderSubTotal, totalPayments, shippingCost]);

  useEffect(() => {
    let mounted = true;
    if (mounted && orderSubTotal) {
      setShippingCost(calculateShippingCost(orderSubTotal));
    }
    return function cleanup() {
      mounted = false;
    };
  }, [orderSubTotal]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getOrderLinesWithProduct(orderId)
        .then((listArr) => {
          setLineItemsList(listArr);
          setOrderSubTotal(calculateOrderSubtotal(listArr));
        });
    }
    return () => {
      mounted = false;
    };
  }, [lineItemsUpdated, orderId]);

  useEffect(() => {
    let mounted = true;
    if (user && order && (user.id === order.customerId || user.roleTypeName === 'Administrator'
        || user.roleTypeName === 'Super User')) {
      setAuthed(true);
    } else setAuthed(false);
    return () => {
      mounted = false;
      return mounted;
    };
  }, [user, order]);

  // main form input
  const handleChange = (e) => {
    setOrder((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value ? e.target.value : ''
    }));
  };

  // select payment type
  const handlePaymentTypeChange = (e) => {
    // react-select uses e.value, e.name etc.
    setPaymentType((e));
  };

  // payment type and amount for transaction
  const handleTransactionChange = (e) => {
    setNewTransaction((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value ? e.target.value : ''
    }));
  };

  const updateQuantities = () => {
    lineItemsList.forEach((item) => {
      const tempObj = {
        productTypeId: item.productTypeId,
        designerId: item.designerId,
        productName: item.productName,
        productDescription: item.productDescription,
        productImageUrl: item.productImageUrl,
        price: item.currentPrice,
        inventoryCount: item.inventoryCount - item.quantity <= 0 ? 0 : item.inventoryCount - item.quantity
      };
      updateProduct(item.productId, tempObj);
    });
  };

  // update order
  const handleSubmit = () => {
    order.shippingCost = shippingCost;
    if (parseFloat(newTransaction.paymentAmount) === orderSubTotal + shippingCost) {
      order.completed = true;
    }
    const transactionTypeId = getTransactionTypeId(transactionTypeOptions,
      totalPayments, parseFloat(newTransaction.paymentAmount), orderSubTotal + shippingCost);
    const timeStamp = new Date();
    const transaction = {
      orderId: order.id,
      paymentTypeId: paymentType.value,
      transactionTypeId,
      paymentAccount: newTransaction.paymentAccount,
      paymentAmount: newTransaction.paymentAmount,
      paymentDate: timeStamp.toISOString()
    };
    addTransaction(transaction).then(() => {
      updateOrder(order);
      if (!hasTransactions) {
        updateQuantities();
      }
      getTransactionsByOrderId(orderId).then((responseList) => {
        setTransactionList(responseList);
        if (responseList.length > 0) {
          setHasTransactions(true);
          // This is not a cart anymore if there are payments.
          setCartCount(0);
          setCartId('');
        }
      });
    });
    // addTransaction(transaction);
  };

  return (
    <>
    { authed
    && (order && (cartCount !== 0 || order.id !== cartId) ? (
      <OrderOuterDiv className='order-outer-div'>
        <OrderBaseInfoDiv className='order-basic-info'>
          <OrderDataDetailDiv>Order Number: {order.id}</OrderDataDetailDiv>
          <OrderDataDetailDiv>Order Date: {formatDate(order.orderDate)}</OrderDataDetailDiv>
        </OrderBaseInfoDiv>
        <OrderItemsPaymentDiv className='items-payments'>
          <OrderLineItemsOuterDiv className='line-items-outer-div'>
            <OrderLineItemsDiv className='order-line-items'>
              <LineItemsCartForm
                orderId={order.id}
                lineItemsList={lineItemsList}
                lineItemsUpdated={lineItemsUpdated}
                setLineItemsUpdated={setLineItemsUpdated}
                hasTransactions={hasTransactions}
                setCartCount={setCartCount}
              />
            </OrderLineItemsDiv>
          </OrderLineItemsOuterDiv>
          <OrderAddressPaymentOuterDiv className='address-payment-outer-div'>
            <OrderAddressPaymentDiv className='order-address-payment'>
            {(totalPayments < parseFloat((orderSubTotal + shippingCost).toFixed(2))) ? (
              <>
                <InputLabel>{user.firstName} {user.lastName}</InputLabel>
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
                <OrderSubTotalDiv>SubTotal:<OrderFinancialFigure> {currencyFormatter.format(orderSubTotal)}</OrderFinancialFigure></OrderSubTotalDiv>
                <OrderShippingCostDiv>Shipping:<OrderFinancialFigure>{currencyFormatter.format(shippingCost)}</OrderFinancialFigure></OrderShippingCostDiv>
                <OrderSubTotalDiv>Order Total<OrderFinancialFigure>{currencyFormatter.format(orderSubTotal + shippingCost)}</OrderFinancialFigure></OrderSubTotalDiv>
                <div>Past Payments</div>
                <OrderTransactionList>
                  { transactionList.length ? (transactionList.map((transaction) => <OrderTransactionLine
                    key={transaction.id}>
                    <OrderPaymentFigure>{currencyFormatter.format(transaction.paymentAmount)}</OrderPaymentFigure>
                  </OrderTransactionLine>)) : '' }
                </OrderTransactionList>
                <OrderTotalPaymentsDiv>Total Payments:
                  <OrderFinancialFigure>{currencyFormatter.format(totalPayments)}</OrderFinancialFigure>
                </OrderTotalPaymentsDiv>
                <OrderTotalDue>Balance Due:<OrderFinancialFigure>{currencyFormatter.format(orderSubTotal + shippingCost - totalPayments)}</OrderFinancialFigure>
                  </OrderTotalDue>
                <OrderSubmitButton onClick={handleSubmit}>Submit Order</OrderSubmitButton> </>)
              : (<OrderShippingPayment
                  order={order}
                  totalPayments={totalPayments}
                  orderSubTotal={orderSubTotal}
                  shippingCost={shippingCost} />) }
            </OrderAddressPaymentDiv>
          </OrderAddressPaymentOuterDiv>
        </OrderItemsPaymentDiv>
      </OrderOuterDiv>
    ) : <OrderOuterDiv>
          <EmptyCartDiv>Your Cart is empty</EmptyCartDiv>
        </OrderOuterDiv>) }
    { (authed === false && order) && <OrderOuterDiv>
          <EmptyCartDiv>You are not authorized to view this page.</EmptyCartDiv>
        </OrderOuterDiv>}
    { (authed === false && !validOrderId) && <OrderOuterDiv>
        <EmptyCartDiv>Invalid Order</EmptyCartDiv>
      </OrderOuterDiv>}
    </>
  );
};

OrderDetailView.propTypes = {
  user: PropTypes.any,
  orderId: PropTypes.string,
  cartCount: PropTypes.number,
  setCartCount: PropTypes.func,
  cartId: PropTypes.string,
  setCartId: PropTypes.func
};

export default OrderDetailView;
