const formatDate = (dateString) => {
  let output = '';
  if (dateString) {
    for (let i = 0; i < 10 && i < dateString.length; i += 1) {
      output += dateString[i];
    }
  }
  return output;
};

const calculateOrderSubtotal = (order, itemsList) => {
  let total = 0.0;
  itemsList.forEach((item) => {
    total += item.unitPrice;
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
  return total;
};

export {
  formatDate,
  calculateOrderSubtotal,
  calculateTotalPayments
};
