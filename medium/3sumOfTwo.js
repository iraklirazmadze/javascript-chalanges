function sumOfTwo(arr1,arr2,v){
  for(let num1 of arr1){
    for(let num2 of arr2){
      if(num1 + num2 == v){
        return true;
      }else{return false}
    }
  }
}

console.log(sumOfTwo([1, 2], [4, 5, 6], 5));
console.log(sumOfTwo([1, 2], [4, 5, 6], 3));