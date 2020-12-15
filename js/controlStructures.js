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

function adult(person) {
  console.log(`${person.name} is:`);

  if (person.age >= 18){
    console.log("An adult!");
  } else {
    console.log("not an Adult");
  }
  if (person.age > 120) {
    console.log("And Probably dead");
  } 
}

adult(jaime)