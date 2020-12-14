function Car(model, color, horsePower, washTheCar){
  this.model = model;
  this.color = color;
  this.horsePower = horsePower;
  this.washTheCar = function() {
    return "Your car is washed! :D";
  }
}

var cars = [
  new Car("Coupe", "Red", "150"),
  new Car("Truck", "Black", "80")
]

console.log(cars[1].color);