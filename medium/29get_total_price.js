function getTotalPrice(arr){
  let total = 0;
  for(let x of arr){
    total+= Number(x.price)*Number(x.quantity)
  }
  return total;
}

console.log(getTotalPrice([
  { "product": "Milk", "quantity": 1, "price": 1.50 },
  { "product": "Cereals", "quantity": 1, "price": 2.50 }
]))