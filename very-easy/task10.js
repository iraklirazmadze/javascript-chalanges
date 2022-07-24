let wins = 5;
let draws =2;
let loses = 1;

function footballPoints(wins,draws,loses){
  return wins*3 + draws*1 + loses*0;
}
console.log(footballPoints(wins,draws,loses));