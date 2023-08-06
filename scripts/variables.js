const apiRoot = "https://api-pokemon-fr.vercel.app/api/v1/pokemon/";

const main = document.querySelector("main");

let pokemonCount = 0,
  currentPokemon = 0,
  currentCard;

let indexPokemons = shuffleArray(datas.map((v, i) => i));

let startX = 0,
  startY = 0,
  deltaX = 0,
  deltaY = 0;
