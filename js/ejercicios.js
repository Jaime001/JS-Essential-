//Como obtener elementos por ID y cambiar su contenido
const title = document.getElementById('title')
title.innerHTML = "Hola mundo"
const description = document.getElementById('description')
description.innerHTML = "Listado de cosas "

//Como obtener elementos por Clase
//const items = document.getElementsByClassName('list-group-item')//El getElementsByClassName devuelve un listado(array) de los objetos con esa clase

//odd - par y even - impar querySelectorAll retorna un arreglo y sin el All solo el primer elemnto. :nth-child() es para acceder a la posicion o hijos del arreglo
const items = document.querySelectorAll('li:nth-child(odd)')
for (let i = 0; i < items.length; i++) {
  let elements = items[i];
  elements.style.background = '#f2f2f2'
}

const element = document.querySelector('div.row > ul.list-group > li')
console.log(element);