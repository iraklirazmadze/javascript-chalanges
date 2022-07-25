function arrayOfMultiples(x,y){
  let arr=[];
  for(i=1; i<=y; i++){
    arr.push(x*i);
  }
  return arr;
}

console.log(arrayOfMultiples(7,5));