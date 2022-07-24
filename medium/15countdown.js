function countdown(n,text){
  let arr="";
  for(let i=n; i>=0; i--){
    arr += n +".";
    n -=1;
  }
  arr += text + "!";
  return arr;
}
console.log(countdown(10,'go'));