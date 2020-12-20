const API_URL = 'https://swapi.dev/api/'
const PEOPLE_ID = 'people/:id'
const opts = { crossDomain: true } //upload the info or date of another site.

//This get method call the api and the id of the object that we want to get
//$.get(`${API_URL}${PEOPLE_ID.replace(":id", i)}`, { crossDomain: true})-
// const lukeUrl = `${API_URL}${PEOPLE_ID.replace(':id', 1)}`
//arguments is a variable that all the functions have and return an array with all the parameters that receive that function
//callback is a fucntion wich get the array of caracteristics from the character 
function getCharacter (id) {
  return new Promise((resolve, reject) => {
    const displayCharacter = `${API_URL}${PEOPLE_ID.replace(':id', id)}`
    $.get(displayCharacter, opts, function(data){
      resolve(data)
    })
    .fail(() =>  reject(id))
  })
}
function onError(id) {
  console.log(`We got an error with the character ${id}`);
}
//The map () method creates a new array with the results of the call to the indicated function applied to each of its elements.
var ids = [1,2,3,4,5,6,7]
var idsToPromise = ids.map(id =>  getCharacter(id)) //id is the current value of the function and if you return just one value you can delete the word return for the arrow function 
Promise
  .all(idsToPromise)
  .then(character => console.log(character))
  .catch(onError)

// getCharacter(1)
//   .then(function(character){
//     console.log(`The character 1 is: ${character.name}`);
//     return getCharacter(2)
//   })
//   .then(function(character){
//     console.log(`The character 2 is: ${character.name}`);
//     return getCharacter(3)
//   })
//   .then(function(character){
//     console.log(`The character 3 is: ${character.name}`);
//     return getCharacter(4)
//   })
//   .then(function(character){
//     console.log(`The character 4 is: ${character.name}`);
//     return getCharacter(5)
//   })
//   .then(function(character){
//     console.log(`The character 5 is: ${character.name}`);
//   })
//   .catch(onError)