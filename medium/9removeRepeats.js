function removeRepeats(x){
  let result="";
  for(let i=0; i<x.length; i++){
    if(x[i] !== x[i+1]){
     result += x[i];
    }
  }
  return result;
}
console.log(removeRepeats("aassasdgwdddf"));