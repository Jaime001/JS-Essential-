const key = document.getElementById('input')
//evento del teclado, para poder obtener info mas especifica debemos utilizar el evento(e) y imprimirlo para ver sus metodos
key.addEventListener('keydown', function(e){
  console.log('Letra: ' + e.key + ' codigo: ' + e.keyCode);
})