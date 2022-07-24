function secondLargest(arr){
  let max = Math.max(...arr);
   arr[arr.indexOf(max)] = -Infinity;
  return Math.max(...arr);
}

console.log(Math.max([0,2,5,7,8,10]));