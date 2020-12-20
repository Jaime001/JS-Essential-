  const API_URL = 'https://swapi.dev/api/'
  const PEOPLE_ID = 'people/:id'
  const opts = { crossDomain: true }

  //This get method call the api and the id of the object that we want to get
  //$.get(`${API_URL}${PEOPLE_ID.replace(":id", i)}`, { crossDomain: true})-
  // const lukeUrl = `${API_URL}${PEOPLE_ID.replace(':id', 1)}`
  //arguments is a variable that all the functions have and return an array with all the parameters that receive that function
  function getCharacter (id, callback) {
      const displayCharacter = `${API_URL}${PEOPLE_ID.replace(':id', id)}`

      $.get(displayCharacter, opts, callback)
      .fail(() => { console.log(`Error ocurred with the character ${id}`);})
  }

  getCharacter(1, function (character){
    console.log(`Hello, I'm ${character.name}`)
      getCharacter(2, function(character){
        console.log(`Hello, I'm ${character.name}`)
        getCharacter(3, function(character){
          console.log(`Hello, I'm ${character.name}`)
          getCharacter(4, function(character){
            console.log(`Hello, I'm ${character.name}`)
            getCharacter(5, function(character){
              console.log(`Hello, I'm ${character.name}`)
            })
          })
        })
      })
  })