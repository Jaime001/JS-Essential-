var ximena = {
  name: "Ximena",
  age: 20,
  sex: "female"
}

var jaime = {
  name: "Jaime",
  age: 22,
  sex: "male"
}

var oswaldo = {
  name: "Oswaldo",
  age: 15,
  sex: "male"
}

var jorge = {
  name: "Jorge",
  age: 23,
  sex: "male"
}

var paty = {
  name: "Paty",
  age: 53,
  sex: "female"
}


var people = [ximena, jaime, oswaldo, jorge, paty]

// for (var i = 0; i < people.length; i++){
//   console.log(`${people[i].name} has ${people[i].age} and is a ${people[i].sex}`);
// }

var isFemale = people =>  people.sex == "female"

var femalePeople = people.filter(isFemale);

console.log(femalePeople);