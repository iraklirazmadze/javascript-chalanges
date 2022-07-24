function collatz(x){
  let count=0
  while(x >1){
    if(x%2 ==0){
      x=x/2;
      count+=1;
    }else{
      x=x*3+1;
      count+=1;
    }
  }
  return count;
}
console.log(collatz(10));