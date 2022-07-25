 function sumEveryNth(arr,n){
  let result=0;
  for(let i=0; i<arr.length; i++){
    if((i+1)%n == 0){
      result += arr[i];
    }
  }
  return result;
}

 console.log(sumEveryNth([4, 8, 6, 6, 7, 9, 3], 1));
 console.log(sumEveryNth([10, 9, 2, 5, 9, 6, 4, 6, 7, 10, 9, 9, 9, 9, 2, 1, 2], 7) );