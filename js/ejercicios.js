//Como obtener elementos por ID y cambiar su contenido
const title = document.getElementById('title')
title.innerHTML = "Hola mundo"
const description = document.getElementById('description')
description.innerHTML = "Listado de cosas "

//Como obtener elementos por Clase

const items = document.getElementsByClassName('list-group-item')//El getElementsByClassName devuelve un listado(array) de los objetos con esa clase
for (let i = 0; i < items.length; i++) {
  let elements = items[i];
  console.log(elements);
  
}
