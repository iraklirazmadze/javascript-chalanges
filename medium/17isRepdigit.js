function isRepdigit(num){
  let result = "true";
  let text = num.toString();
  if(num < 0){
    return false;
  }
  for (let i=0; i<text.length-1; i++){
    if(text[i] !== text[i+1]){
      result = false;
    }
  }
  return result;
}

console.log(isRepdigit(0));