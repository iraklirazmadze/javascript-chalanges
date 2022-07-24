function reverseBoolean(x){
  if(x === true){
    return false;
  }else if(x === false){
    return true;
  }else{
    return "boolean expected";
  }
}
console.log(reverseBoolean(true));
console.log(reverseBoolean(false));
console.log(reverseBoolean(0));
