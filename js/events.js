//Evento click y doble click
const button = document.querySelector('.btn.btn-primary')

//Creamos el evento click o dblclick
button.addEventListener('click',function(e){ //e de evento tierne un atributo llamado .tarjet el cual almacena el elemnto que disparo el evento

  console.log(e);
  if (title.style.display != 'none') {
    title.style.display = 'none'
    description.style.display = 'none'
    //button.textContent = 'Mostrar'
    //this.textContent = 'Mostrar'
    e.target.textContent = 'Mostrar'
  } else  {
    title.style.display = 'block'
    description.style.display = 'block'
    //button.textContent = 'Ocultar'
    //this.textContent = 'Ocultar'
    e.target.textContent = 'Ocultar'
  }
})

button.addEventListener('mouseenter', function(e){
  e.target.className = 'btn btn-danger'
})
button.addEventListener('mouseout', function(e){
  e.target.className = 'btn btn-primary'
})
//SetTimeput nos ayuda a ejecutar un bloque de codigo estableciendo un tiempo de respuesta para la ejecucion
setTimeout(function(a1,a2,a3){
  console.log(a1);
  console.log(a2);
  console.log(a3);
}, 3000, "hola", "Como", "estas")