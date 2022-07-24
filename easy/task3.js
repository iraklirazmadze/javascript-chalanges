const prompt = require('prompt-sync')();
let array =[
  {key:"irakli",value:24}
]
console.log(array.length);

let tuple=["guido","tim"];
let name = prompt("your name: ");
let age =Number(prompt("your age: "));
let newArray = {key:name, value:age};
for (let x of tuple){
  if(x == name){
    array.push(newArray);
  }
}
console.log(array.length);

