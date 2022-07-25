function makeChange(num){
  let result ={"q":2,"d":0,"n":0,"p":0}
  let quarter = 0.25
  let dime  = 0.1;
  let nickel = 0.05;
  let penny = 0.01;  
  let inCent=num/100;
  result.q = Math.floor(inCent/quarter);
  let change = inCent % quarter;
  result.d =  Math.floor(change/dime);
  change = change % dime;
  result.n = Math.floor(change/nickel);
  change = change % nickel;
  result.p = Math.round(change/penny)
  return result;
}
console.log(makeChange(47));
console.log(makeChange(36));