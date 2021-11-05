const formatDate = (dateString) => {
  let output = '';
  if (dateString) {
    for (let i = 0; i < 10 && i < dateString.length; i += 1) {
      output += dateString[i];
    }
  }
  return output;
};

const calculateOrderSubtotal = (itemsList) => {
  let total = 0.0;
  itemsList.forEach((item) => {
    total += item.unitPrice * item.quantity;
  });
  return total;
};

const calculateTotalPayments = (transactionList) => {
  let total = 0.0;
  if (transactionList) {
    for (let i = 0; i < transactionList.length; i += 1) {
      total += transactionList[i].paymentAmount;
    }
  }
  total = parseFloat(total.toFixed(2));
  return total;
};

const calculateShippingCost = (subTotal) => {
  let shippingCost = 7.99;
  const additional = 5.00;
  switch (true) {
    case (subTotal < 100.00):
      shippingCost += additional;
      break;
    case (subTotal < 200.00):
      // 16.99
      shippingCost += additional - 1;
      break;
    case (subTotal < 400.00):
      // 19.99
      shippingCost += additional - 2;
      break;
    case (subTotal < 800.00):
      // 21.99
      shippingCost += additional - 3;
      break;
    case (subTotal >= 800.00):
      shippingCost += Math.round((subTotal * 0.02));
      break;
    default:
      break;
  }
  return shippingCost;
};

export {
  formatDate,
  calculateOrderSubtotal,
  calculateTotalPayments,
  calculateShippingCost
};
