//Extra exercise with arrow functions 
const ADULT_AGE = 18

const adultMath = ({age}) =>  age >= ADULT_AGE 

// function adult(person) {
//   if (adultMath(person)) {
//     console.log(`${person.name} is an Adult`);
//   } else {
//     console.log(`${person.name} isn´t an Adult`);
//   }
// }

var adult = (person) => adultMath(person) ? console.log(`${person.name} is an Adult`) : console.log(`${person.name} isn´t an adult`);

adult({name: "Paty", age: 15})