 function diceGame(arr){
  let total = 0;
  for(let x of arr){
    if(x[0] == x[1]){
      return 0;
    }else{
      total += Number(x[0]) + Number(x[1]);
    }
  }
  return total;
 }

 console.log(diceGame([[1, 2], [3, 4], [5, 6]]));
 console.log(diceGame([[1, 3], [4, 3], [5, 5]]));