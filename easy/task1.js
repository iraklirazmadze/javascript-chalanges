function middleLetter(x){
  if(x.length % 2 == 1){
    return x[Math.floor(x.length/2)];
  }else{
    return x[x.length/2-1] + x[x.length/2];
  }
}

console.log(middleLetter("asas"));