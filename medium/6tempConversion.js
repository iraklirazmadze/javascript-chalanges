function tempConversion(c){
  if(c < -273.15){
    return "Invalid", "Wow, is it realy that cold?";
  }else{
  return [c*9/5 +32,c + 273.15];
}
}
console.log(tempConversion(-300));