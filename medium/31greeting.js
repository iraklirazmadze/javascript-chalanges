
const guestList = {Randy: "Germany", Karla: "France", Wendy: "Japan", Norman: "England", Sam: "Argentina"}

function greeting(name){
let country = guestList[name];
return "hi i'm "+ name + ", and i'm from " + country;
}

console.log(greeting('Karla'));
