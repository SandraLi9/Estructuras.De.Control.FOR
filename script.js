// Punto 1

for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Punto 2
const pregunta = prompt("Escribe un número:");
const numeroUsuario = parseInt(pregunta);
const pokemonData = [
   { number: 1, name: 'bulbasaur'},
   { number: 2, name: 'ivysaur'},
   { number: 3, name: 'venusaur'},
   { number: 4, name: 'charmander'},
   { number: 5, name: 'charmeleon'},
   { number: 6, name: 'charizard'},
   { number: 7, name: 'squirtle'},
   { number: 8, name: 'wartortle'},
   { number: 9, name: 'blastoise'},
   { number: 10, name: 'caterpie'},
   { number: 11, name: 'metapod'},
   { number: 12, name: 'butterfree'},
   { number: 13, name: 'weedle'},
   { number: 14, name: 'kakuna'},
   { number: 15, name: 'beedrill'},
   { number: 16, name: 'pidgey'},
   { number: 17, name: 'pidgeotto'},
   { number: 18, name: 'pidgeot'},
   { number: 19, name: 'rattata'},
   { number: 20, name: 'raticate'},
   { number: 21, name: 'spearow'},
   { number: 22, name: 'fearow'},
   { number: 23, name: 'ekans'},
   { number: 24, name: 'arbok'},
   { number: 25, name: 'pikachu'},
   { number: 26, name: 'raichu'},
   { number: 27, name: 'sandshrew'},
   { number: 28, name: 'sandslash'},
   { number: 29, name: 'nidoran-f'},
   { number: 30, name: 'nidorina'},
   { number: 31, name: 'nidoqueen'},
   { number: 32, name: 'nidoran-m'},
   { number: 33, name: 'nidorino'},
   { number: 34, name: 'nidoking'},
   { number: 35, name: 'clefairy'},
   { number: 36, name: 'clefable'},
   { number: 37, name: 'vulpix'},
   { number: 38, name: 'ninetales'},
   { number: 39, name: 'jigglypuff'},
   { number: 40, name: 'wigglytuff'},
   { number: 41, name: 'zubat'},
   { number: 42, name: 'golbat'},
   { number: 43, name: 'oddish'},
   { number: 44, name: 'gloom'},
   { number: 45, name: 'vileplume'},
   { number: 46, name: 'paras'},
   { number: 47, name: 'parasect'},
   { number: 48, name: 'venonat'},
   { number: 49, name: 'venomoth'},
   { number: 50, name: 'diglett'},
   { number: 51, name: 'dugtrio'},
   { number: 52, name: 'meowth'},
   { number: 53, name: 'persian'},
   { number: 54, name: 'psyduck'},
   { number: 55, name: 'golduck'},
   { number: 56, name: 'mankey'},
   { number: 57, name: 'primeape'},
   { number: 58, name: 'growlithe'},
   { number: 90, name: 'arcanine'},
   { number: 60, name: 'poliwag'},
   { number: 61, name: 'poliwhirl'},
   { number: 62, name: 'poliwrath'},
   { number: 63, name: 'abra'},
   { number: 64, name: 'kadabra'},
   { number: 65, name: 'alakazam'},
   { number: 66, name: 'machop'},
   { number: 67, name: 'machoke'},
   { number: 68, name: 'machamp'},
   { number: 69, name: 'bellsprout'},
   { number: 70, name: 'weepinbell'},
   { number: 71, name: 'victreebel'},
   { number: 72, name: 'tentacool'},
   { number: 73, name: 'tentacruel'},
   { number: 74, name: 'geodude'},
   { number: 75, name: 'graveler'},
   { number: 76, name: 'golem'},
   { number: 77, name: 'ponyta'},
   { number: 78, name: 'rapidash'},
   { number: 79, name: 'slowpoke'},
   { number: 80, name: 'slowbro'},
   { number: 81, name: 'magnemite'},
   { number: 82, name: 'magneton'},
   { number: 83, name: 'farfetchd'},
   { number: 84, name: 'doduo'},
   { number: 85, name: 'dodrio'},
   { number: 86, name: 'seel'},
   { number: 87, name: 'dewgong'},
   { number: 88, name: 'grimer'},
   { number: 89, name: 'muk'},
   { number: 90, name: 'shellder'},
   { number: 91, name: 'cloyster'},
   { number: 92, name: 'gastly'},
   { number: 93, name: 'haunter'},
   { number: 94, name: 'gengar'},
   { number: 95, name: 'onix'},
   { number: 96, name: 'drowzee'},
   { number: 97, name: 'hypno'},
   { number: 98, name: 'krabby'},
   { number: 99, name: 'kingler'},
   { number: 100, name: 'voltorb'}
]

for (let i = 1; i <= numeroUsuario; i++) {
  if (i % 5 === 0) {
    const pokemon = pokemonData.find((pokemon) => pokemon.number === i);

    if (pokemon) {
      console.log(pokemon.name);
    }
  }
}


// Punto 3  

const arreglo = [4, "dos", 8, "tres", 5, 9, 1, "cero"];

for (let i = 0; i < arreglo.length; i++) {
  if (typeof arreglo[i] === "number") {
    console.log(arreglo[i]);
  }
}