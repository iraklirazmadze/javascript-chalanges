function binaryToDecimal(arr){
  let text = arr.join('');
  return parseInt(text,2);
}
console.log(binaryToDecimal([1, 1, 1, 1, 1, 1, 1, 1]) );