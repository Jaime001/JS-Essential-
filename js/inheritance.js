const TALL_VAR = 1.8

class Person {
  constructor(name, lastName, height, nationality) {
    this.name = name
    this.lastName = lastName
    this.height = height
    this.nationality = nationality
  }
  
  imTall(){
    this.height >= TALL_VAR ?  console.log(`${this.name} is Tall`) : console.log(`${this.name} is short`);
  }

  sayHello(){
    console.log(`Hi my name is ${this.name} ${this.lastName}`);
  }
}

class Developer extends Person {
  constructor(name, lastName, height, especiality){
    super(name,lastName,height,especiality) //super told me the inheritance of Person, if i don't define super the class Developer isn't know about Person
  }

  sayHello(){
    console.log(`Hi my name is ${this.name} ${this.lastName} and I'm a developer`);
  }
}