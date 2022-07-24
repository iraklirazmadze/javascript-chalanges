
function filterArray(arr){
let newArr =[];
for(let x of arr){
  if(typeof(x) == "number"){
    newArr.push(x);
  }
}
return newArr;
}
console.log(filterArray([0,4,'s','g',4,8,9]));