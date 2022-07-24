

function dubChar(text){
  let dubText="";
  for (let letter of text){
    dubText+=letter+=letter;
  }
  return dubText;
}

console.log(dubChar("hello world"));
