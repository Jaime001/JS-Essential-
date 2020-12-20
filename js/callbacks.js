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
  console.log(`We have an error with the character ${id}`);
}

function onResolve(character){
  console.log(`The character 1 is: ${character.name}`);
}
getCharacter(1)
  .then(onResolve)
  .catch(onError)