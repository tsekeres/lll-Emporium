const formatDate = (dateString) => {
  let output = '';
  if (dateString) {
    for (let i = 0; i < 10 && i < dateString.length; i += 1) {
      output += dateString[i];
    }
  }
  return output;
};

const calculateTotal = (order, itemsList) => {
  let total = 0.0;
  itemsList.forEach((item) => {
    total += item.unitPrice;
  });
  total += order.shippingCost;
  return total;
};

export {
  formatDate,
  calculateTotal
};
