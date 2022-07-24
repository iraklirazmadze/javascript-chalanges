function replaceThe(text){
let splited = text.split(" ");
let result=text;
for( i=0; i<splited.length; i++){
  if(splited[i] == "the" && isVowel(splited[i+1][0]) ){
    result = result.replace("the","an");
  }else if(splited[i] == "the" && !isVowel(splited[i+1][0])){
    result = result.replace("the","a");
  }
}
return result;
}
function isVowel(x){
  let result = false;
  let vowels = ['a','e','i','o','u'];
  for(let vowel of vowels){
    if(vowel == x){
      result =  true;
    }
  }
  return result;
}

console.log(replaceThe("the asdg aett asd the dog the egg"))