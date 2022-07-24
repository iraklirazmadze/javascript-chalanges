function capLast(text){
  let splited = text.split(" ");
  let result = [];
  for(let x of splited){
   let y = x.replace(x[x.length-1],x[x.length-1].toUpperCase());
    result.push(y);
  }
  return result.join(" ");
}

console.log(capLast("My Name Is Edabit"));