function stupidAddition(x,y){
  if(typeof x !== typeof y){
    return null;
  
  }else if(typeof x == 'string' && typeof y == 'string'){
    return Number(x) + Number(y);
  }else{
    return x.toString() + y.toString();
  }
}

console.log(stupidAddition(5,'2'));
console.log(stupidAddition('5',2));
console.log(stupidAddition(5,2));
console.log(stupidAddition('5','2'));