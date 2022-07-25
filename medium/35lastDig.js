function lastDig(a,b,c){
  const x = a*b;
  const stringX = x.toString();
  const lastX = stringX[stringX.length-1];
  const stringC = c.toString();
  const lastC = stringC[stringC.length-1];
  if(lastX == lastC){
    return true;
  }else{
    return false;
  }
}

console.log(lastDig(15228, 9209, 72162));
console.log(lastDig(123, -15, 10) );