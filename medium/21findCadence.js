function findCadence(arr){
  if(arr.indexOf("V") == arr.length-1){
    return "imperfect";
  }else if(arr.indexOf("V") == arr.indexOf("I")-1){
    return "perfect";
  }else if(arr.indexOf("IV") == arr.indexOf("I")-1){
    return "plagal";
  }else if(arr.indexOf("V") < arr.length-1 && arr.indexOf("V") !== arr.indexOf("I")-1){
    return "interrupted";
  }
}

console.log(findCadence(["I", "IV", "V"]) );
console.log(findCadence(["ii", "V", "I"]) );
console.log(findCadence(["I", "IV", "I", "V", "IV"]) );
console.log(findCadence(["V", "IV", "I"]))