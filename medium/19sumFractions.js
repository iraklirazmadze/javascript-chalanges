function sumFractions(arr){
  let sum =0;
  for(let x of arr){
    sum += x[0]/x[1];
  }
  return Math.round(sum);
}

console.log(sumFractions([[18, 13], [4, 5]]) );
console.log(sumFractions([[11, 2], [3, 4], [5, 4], [21, 11], [12, 6]]));