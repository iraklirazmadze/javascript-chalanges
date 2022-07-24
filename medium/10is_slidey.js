function isSlidey(y){
  let x = y.toString();
  let boolean=true;
  for(let i=0; i< x.length-1; i++){
    if(Number(x[i])+1 !== Number(x[i+1])  && Number(x[i])-1 !== Number(x[i+1])){
      boolean = false;
    }
  }
  return boolean;
}

console.log(isSlidey(123454321));
console.log(isSlidey(2323232322));