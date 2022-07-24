function findBob(arr){
  let index =-1;
  for(let name of arr){
    if (name == 'bob'){
      index = arr.indexOf(name);
    }
  }
  return index;
}

console.log(findBob(['sad','asd','bob']));