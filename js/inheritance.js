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

  sayHello(fn){
    var {name, lastName} = this
    console.log(`Hi my name is ${name} ${lastName}`);
    if (fn) {
      sayHelloToo(name, lastName)
    }
  }
}

class Developer extends Person {
  constructor(name, lastName, height, especiality){
    super(name,lastName,height,especiality) //super told me the inheritance of Person, if i don't define super the class Developer isn't know about Person
  }

  sayHello(fn){
    var {name, lastName} = this
    console.log(`Hi my name is ${name} ${lastName} and I'm a developer`);
    if (fn){
      sayHelloToo(name, lastName, true)
    }
  }
}

function sayHelloToo(name, lastName, isDev) {
  console.log(`Hello ${name} ${lastName} nice to meet you!`);
  if (isDev) {
    console.log("Amazing!, you are Developer too!");
  }
}

var jaime = new Developer("Jaime", "Ortiz", 1.82, "Telematics")

var oswlado = new Person("Oswaldo", "Ortiz", 1.72, "Mexican")

var mingo = new Person("Mingo", "Diaz", 1.79, "Mexican")

oswlado.sayHello();
jaime.sayHello(sayHelloToo);
mingo.sayHello(sayHelloToo);