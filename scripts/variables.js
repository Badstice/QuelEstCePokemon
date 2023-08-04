const apiRoot = "https://api-pokemon-fr.vercel.app/api/v1/pokemon/";

const myImage = document.querySelector("img");

let pokemonCount = 0,
  currentPokemon = 0;

let indexPokemons = shuffleArray(datas.map((v, i) => i));

let startX = 0,
  startY = 0,
  deltaX = 0,
  deltaY = 0;