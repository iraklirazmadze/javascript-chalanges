 function move(text){
  let result = '';
  for(let letter of text){
    if(letter == 'z'){
      result += "z";
    }else{
      let charCode = letter.charCodeAt();
      result += String.fromCharCode(charCode+1);
    }
  }
  return result;
 }

 console.log(move("abcdz"));