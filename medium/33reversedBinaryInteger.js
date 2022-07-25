function reversedBinaryInteger(num){
  let binary = num.toString(2);
  let reversed = binary.split('').reverse().join('');
  return parseInt(reversed,2);
}

console.log(reversedBinaryInteger(12));