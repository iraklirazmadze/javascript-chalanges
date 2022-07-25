function censor(text){
  let splited = text.split(" ");
  for(let i=0; i<splited.length; i++){
    if(splited[i].length > 4){
      text = text.replace(splited[i],"*".repeat(splited[i].length))
    }
  }
  return text;
}

console.log(censor("aaaa aaaaa 1234 12345"));