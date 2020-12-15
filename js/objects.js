// var course = new Object();

// var course = {

//   title: "JavaScript Essentials",
//   instructor: "Morton",
//   time: "5.3 hours", 
//   published: true,
//   views: 1,
//   viewsUpdate: function(){
//      return course.views++;
//   }
// }

// console.log(course.views);
// course.viewsUpdate();
// console.log(course.views);

var nombre1 = {
  nombre: "Oswaldo",
  apellido: "Ortiz",
  edad: 15,
  nacionalidad: "Mexicana"
}

var nombre2 = {nombre: "Karla", edad: 23, nacionalidad: "Mexicana"}

function  cambiarNombreMayusculas({persona}){
  console.log(nombre.toUpperCase());
}

// cambiarNombreMayusculas(nombre1);
// cambiarNombreMayusculas(nombre2);
// cambiarNombreMayusculas({nombre: "Jaime"});

function imprimirNombreYEdad(persona){
  var { nombre } = persona
  var { edad } = persona
  console.log("Hola me llamo "+ nombre + " y tengo " + edad + " años de edad.");
}

// imprimirNombreYEdad(nombre1);
// imprimirNombreYEdad(nombre2);
// imprimirNombreYEdad({nombre: "Jaime", edad: 22});

function aumentarEdad(persona){ //podemos retornar un objeto para no modificar el objeto origina de la sig manera: 
  return {
    ...persona,
    edad: persona.edad + 1
  }
}
