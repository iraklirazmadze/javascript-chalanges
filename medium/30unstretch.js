function unstretch(text){
  let result = "";
  for(let i=0; i<text.length; i++){
    if(text[i] !== text[i+1]){
      result += text[i];
    }
  }
  return result;
}

console.log(unstretch("cccccaaarrrbbonnnnn") );