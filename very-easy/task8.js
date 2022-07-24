function both(x,y){
  if(x>0 && y>0){
    return true;
  }else if(x==0 && y == 0){
    return true;
  }else if(x<0 && y<0){
    return true;
  }else{
    return false;
  }
}
console.log(both(0,0));
console.log(both(-1,-3));
console.log(both(2,2));
console.log(both(-2,0));