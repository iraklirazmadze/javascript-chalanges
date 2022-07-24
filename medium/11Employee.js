
class employee {
  constructor(name, surname) {
      this.fullname = name + " " + surname;
      this.email = name + "." + surname + "@gmail.com";
      this.firstname = name;
  }
  
}

let emp1 =new employee("irakli","razmadze");
console.log(emp1.fullname);
console.log(emp1.email);
console.log(emp1.firstname);