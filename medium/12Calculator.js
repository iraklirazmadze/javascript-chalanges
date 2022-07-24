class calculator{
  constructor(x,y){
    this.add = x+y;
    this.subtract = x-y;
    this.multiply = x*y;
    this.divide =x/y;
  }
}

let calculate = new calculator(10,5);
console.log(calculate.add);
console.log(calculate.subtract);
console.log(calculate.multiply);
console.log(calculate.divide);