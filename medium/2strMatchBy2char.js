function strMatchBy2char(x,y){
  let count=0;
  let smaller = Math.min(x.length,y.length);
  for(let i=0; i < smaller; i++){
    if(x[i] === y[i]  && x[i+1] === y[i+1]){
      count += 1;
    }
  }
  return count;
}
console.log(strMatchBy2char("jjcAAzz","jjBAAz"));