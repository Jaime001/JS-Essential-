function Person(name, lastName, height, nationality) {
  this.name = name
  this.lastName = lastName
  this.height = height
  this.nationality = nationality
}

const TALL_VAR = 1.8

Person.prototype.ImTall = function () {
  this.height >= TALL_VAR ?  console.log(`${this.name} is Tall`) : console.log(`${this.name} is short`);
}

Person.prototype.printPerson = function () {
  console.log(`Hi my name is ${this.name} ${this.lastName}`);
}

var jaime = new Person("Jaime", "Ortiz", 1.82, "Mexican")

var oswlado = new Person("Oswaldo", "Ortiz", 1.72, "Mexican")

var mingo = new Person("Mingo", "Diaz", 1.79, "Mexican")
