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

const list = document.querySelector('ul')

//  console.log(list.childElementCount); //Cuenta los elementos hijos que tiene
//podemos recorrer la lista de esta manera o solo indicar el indice [0],[1],[3] etc
for (let index = 0; index < list.children.length; index++) {
  //console.log(list.children[index]);
}

console.log(list.firstElementChild.innerHTML); //primer elemnto hijo de la lista
console.log(list.lastElementChild.innerHTML); //ultimo elemento hijo de la lista

const element = document.querySelector('div.row > ul.list-group > li')
console.log(element.parentElement); //padre del elemnto
console.log(element.nextElementSibling); //hermano(el siguiente elemento)

const lastElement = document.getElementById('lastChild')
console.log(lastElement.previousElementSibling);