let vowels= ['a','e','i','o','u'];
function countVowels(text){
  let vowelSum=0;
for(let letter of text){
  for(let vowel of vowels){
    if(letter == vowel){
      vowelSum+=1;
    }
  }
}
return vowelSum;
}
console.log(countVowels("asdfiio"));