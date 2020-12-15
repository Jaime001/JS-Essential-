var jaime = {
  name: "jaime",
  age: 22,
  weight: 79,
  nationality: "Mexican"
}

const WEIGHT_DIF = 0.2

const sumtWeight = person => person.weight += WEIGHT_DIF
const restWeight = person => person.weight -= WEIGHT_DIF


console.log(jaime.weight);
for(var i = 1; i<365; i++){
  var random = Math.random()
  if (random <= 0.25){
    sumtWeight(jaime)
  } else if (random < 0.5 ){
    restWeight(jaime)
  }
}

console.log(jaime.weight);