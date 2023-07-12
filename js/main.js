//¡Les damos la bienvenida a este desafío!
//Cuando terminemos, ¡la página debería estar llena de Pokemons!

/* 1 - Este es un array que contiene objetos, cada objeto es un Pokemon.
Su primer tarea será agregar al menos 2 pokemones más (pueden cambiar todos si quieren)
Es posible copiar y pegar el último item y luego reemplazar los valores, 
¡Pero cuidado con la sintaxis! Recuerden que los ítems de un array están separados por comas.
*/

let pokemons = [
  {
      nombre: 'Bulbasaur',
      tipo: 'Planta',
      img: 'https://jusrecondo.github.io/hosted-assets/bulbasaur.png'
  },
  {
      nombre: 'Pikachu',
      tipo: 'Eléctrico',
      img: 'https://jusrecondo.github.io/hosted-assets/pikachu.png'
  },
  {
      nombre: 'Togepi',
      tipo: 'Hada',
      img: 'https://jusrecondo.github.io/hosted-assets/togepi.png'
  },
   {
  nombre: 'Charizard',
  tipo: 'Fuego/Volador',
  img: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/95/latest/20160817212623/Charizard.png/300px-Charizard.png'
},
{
  nombre: 'Squirtle',
  tipo: 'Agua',
  img: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/e/e3/latest/20160309230820/Squirtle.png/300px-Squirtle.png'
},
{
  nombre: 'Jigglypuff',
  tipo: 'Normal/Hada',
  img: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/a/af/latest/20150110232910/Jigglypuff.png/300px-Jigglypuff.png'
}// Agregar más pokemones aquí
];

/* 2 - Esta función crearHTMLPokemon(pokemon) crea el código HTML de un elemento <li> con los datos del Pokemon que reciba como parámetro. Aquí hay herramientas de JS que veremos en la Clase 10.
--> createElement('nombreElementoHtml') es un método del Documento HTML que crea un elemento HTML cualquiera.
--> appendChild(item) es un método que tienen los elementos HTML y permite "agregarles un elemento hijo".
Donde dice listItem.appendChild(nombrePokemon); Esto le agrega al <li> el <h3> con el nombre del Pokemon.
Su tarea:
Al mismo <li> debemos agregarle la imagen y el tipo de Pokemon. Para esto, repitan esa última línea de código 2 veces más pero pasando como argumento al método appendChild() primero imagenPokemon y luego tipoPokemon
*/

function crearHTMLPokemon(pokemon) {
let nombrePokemon = document.createElement('h3');
nombrePokemon.innerText = pokemon.nombre;

let imagenPokemon = document.createElement('img');
imagenPokemon.src = pokemon.img;

let tipoPokemon = document.createElement('p');
tipoPokemon.innerText = pokemon.tipo;

let listItem = document.createElement('li');
listItem.appendChild(nombrePokemon);
listItem.appendChild(imagenPokemon); // Agregamos la imagen al listItem
listItem.appendChild(tipoPokemon); // Agregamos el tipo de Pokemon al listItem

return listItem;
}

// Aquí estamos "seleccionando" el <ul> con id "pokemon-list" para luego poder trabajar con este elemento. No modificar.
const listaPokemons = document.querySelector('#pokemon-list');

/* 3 - Con este forEach() recorremos el array pokemons y a partir de cada elemento creamos un pokemon y lo insertamos en el HTML dentro del <ul>
Su tarea:
Dentro de la función, falta crear una variable llamada pokemonListItem y asignarle un nuevo pokemon llamando a la función crearHTMLPokemon(pokemon)
La última línea del código se ocupa de lo demás 😉
*/
pokemons.forEach(function(pokemon) {
let pokemonListItem = crearHTMLPokemon(pokemon); // Creamos el listItem para el Pokemon actual

listaPokemons.appendChild(pokemonListItem);
});
