function profit(arr){
  let profit = (arr.sellPrice - arr.costPrice)*arr.inventory;
  return Math.round(profit);
}

console.log(profit({costPrice: 32.67, sellPrice: 45.00, inventory: 1200}));