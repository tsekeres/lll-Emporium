const formatDate = (dateString) => {
  let output = '';
  if (dateString) {
    for (let i = 0; i < 10 && i < dateString.length; i += 1) {
      output += dateString[i];
    }
  }
  return output;
};

const calculateOrderSubtotal = (itemsList, hasTransactions) => {
  let total = 0.0;
  itemsList.forEach((item) => {
    if (!hasTransactions) {
      total += (item.unitPrice - item.discount) * Math.min(item.quantity, item.inventoryCount);
    // once a transaction exists, the inventory has been reduced and is no longer considered
    } else {
      total += (item.unitPrice - item.discount) * item.quantity;
    }
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

function calculateCartCount(lineItemsList) {
  let cartCount = 0;
  for (let i = 0; i < lineItemsList.length; i += 1) {
    cartCount += lineItemsList[i].quantity;
  }
  return cartCount;
}

const calculateShippingCost = (subTotal) => {
  let shippingCost = 7.99;
  switch (true) {
    case (subTotal < 100.00):
      shippingCost += 5;
      break;
    case (subTotal < 200.00):
      // 16.99
      shippingCost += 9;
      break;
    case (subTotal < 400.00):
      // 19.99
      shippingCost += 12;
      break;
    case (subTotal < 800.00):
      // 21.99
      shippingCost += 14;
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
  calculateShippingCost,
  calculateCartCount,
};
