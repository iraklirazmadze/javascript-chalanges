function isSastry(x){
  let y=x+1;
  let concatanate = x.toString() + y.toString();
  let sqrt = Math.sqrt(Number(concatanate));
  if(sqrt - Math.floor(sqrt) == 0){
    return true;
  }else{
    return false;
  }
}
console.log(isSastry(183));
console.log(isSastry(98));