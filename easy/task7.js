function countOnes(n){
  let binary=n.toString(2);
  count = 0;
  for(let x of binary){
    if(x == 1){
      count +=1;
    }
  }
  return count;
}

console.log(countOnes(257));
