
function cupSwapping(arr){
  let ballsLocation = "B";
  for(let moves of arr){
    if(moves[0] == ballsLocation){
      ballsLocation = moves[1];
    }else if(moves[1] == ballsLocation){
      ballsLocation = moves[0];
    }
  }
  return ballsLocation;
}

console.log(cupSwapping(["AB", "CA", "AB"]));
console.log(cupSwapping(["AC", "CA", "CA", "AC"]));