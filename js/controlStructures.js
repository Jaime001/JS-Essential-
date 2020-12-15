var jaime = {
  name: "Jaime", 
  age:  150, 
  engineer: false,
  chef: false,
  singer: false,
  softwareEngineer: true
}

function printProfession(person) {

  console.log(`${person.name} is:`);

  if (person.engineer){
    console.log("Engineer");
  } else {
    console.log(`${person.name} isn´t and Engineer`);
  }
  if (person.chef){
    console.log("Chef");
  }
  if (person.singer){
    console.log("Singer");
  }
  if (person.softwareEngineer){
    console.log("Software Engineer");
  }
}

//printProfession(jaime)

//Extra exercise 
const ADULT_AGE = 18

function adultMath(person){ return person.age >= ADULT_AGE }

function adult(person) {
  if (adultMath(person)) {
    console.log(`${person.name} is an Adult`);
  } else {
    console.log(`${person.name} isn´t an Adult`);
  }
}

adult({name: "Paty", age: 12})