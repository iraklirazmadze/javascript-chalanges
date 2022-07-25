/*this functions revers only odd characters of the text. i recognize task wrong
function reverseOdd(text){
  let odds=[];
  let evens = [];
  for(let i=0; i<text.length; i++){
    if(i %2 == 0){
      odds.push(text[i]);
    }else{
      evens.push(text[i])
    }
  }
  let reverseodds = odds.reverse();
  let result = '';
  let x = 0;
  while(result.length < text.length){
    result += reverseodds[x];
    if(result.length < text.length){
    result+= evens[x];
  }
    x+=1;
  }
  return result;
}

console.log(reverseOdd("Bananas"));
console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));
*/

function reverseOdd(text){
  let splited = text.split(' ');
  let result =[];
  for(let word of splited){
    if(word.length % 2 == 0){
      result.push(word);
    }else{
      result.push(word.split('').reverse().join(''));
    }
  }
  return result.join(' ');
}

console.log(reverseOdd("Bananas"));
console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));