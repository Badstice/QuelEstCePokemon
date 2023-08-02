const apiRoot = "https://api-pokemon-fr.vercel.app/api/v1/pokemon/";

const myImage = document.querySelector("img");

let pokemonCount = 0,
  currentPokemon = 0;

let indexPokemons = shuffleArray(datas.map((v, i) => i));

function shuffleArray(arr) {
  arr.sort(() => Math.random() - 0.5);
  return arr;
}

function getPokemon(pokemonName) {
  return datas.find((p) => p.name === pokemonName);
}

async function getPokemonData(pokemonName) {
  const response = await fetch(apiRoot + pokemonName);
  const json = await response.json();
  return json;
}

async function getImage(url) {
  const response = await fetch(url);
  const image = await response.blob();
  const objectURL = URL.createObjectURL(image);
  return objectURL;
}

async function createImg(url, parent, classes, datasets, params) {
  const stock = createElmt("img", parent, classes, datasets, null, params);
  stock.src = await getImage(url);
  return stock;
}

function createElmt(elmt, parent, classes, datasets, innerText, params) {
  const stock = document.createElement(elmt);
  parent.appendChild(stock);

  if (classes) {
    classes.forEach((c) => {
      stock.classList.add(c);
    });
  }

  if (datasets) {
    for (const key in datasets) {
      if (Object.hasOwnProperty.call(datasets, key)) {
        const value = datasets[key];
        stock.dataset[key] = value;
      }
    }
  }

  if (innerText) {
    stock.innerText = innerText;
  }

  if (params) {
    for (const key in params) {
      if (Object.hasOwnProperty.call(params, key)) {
        const value = params[key];
        stock.style[key] = value;
      }
    }
  }
  return stock;
}

async function createCard(pokemon, evolutionContainer) {
  let card = {};
  if (evolutionContainer) {
    card.container = createElmt(
      "div",
      evolutionContainer,
      ["card-container"],
      {
        id: pokemon.data.pokedexId,
      },
      null,
      { order: pokemon.data.pokedexId }
    );
  } else {
    card.container = createElmt("div", document.body, ["card-container"], {
      id: pokemon.data.pokedexId,
    });
  }

  card.backgrounds = [];
  for (const type of pokemon.data.types) {
    card.backgrounds.push(
      createElmt("div", card.container, ["bg"], {
        type: type.name,
      })
    );
  }

  card.container.id = pokemonCount;
  card.card = createElmt("div", card.container, ["card"]);
  card.img = await createImg(
    pokemon.data.sprites.regular,
    card.card,
    ["pokemon-img"],
    {
      pokemon: pokemon.name,
    }
  );

  card.response = {};
  card.response.container = createElmt(
    "div",
    card.card,
    ["response-container"],
    { response: pokemon.name.toLocaleLowerCase(), input: "" }
  );
  card.response.syllabes = [];

  card.input = {};
  card.input.container = createElmt("div", card.card, ["input-container"]);
  card.input.syllabes = [];

  const indexs = shuffleArray(pokemon.syllabes.map((v, i) => i));

  for (let index = 0; index < pokemon.syllabes.length; index++) {
    const syllabe = pokemon.syllabes[index];
    card.response.syllabes.push(
      createElmt("div", card.response.container, ["syllabe"], { index })
    );
    card.input.syllabes.push(
      createElmt(
        "div",
        card.input.container,
        ["syllabe"],
        { index, syllabe, id: pokemon.data.pokedexId },
        syllabe,
        {
          order: indexs[index],
        }
      )
    );
  }

  card.information = {};
  card.information.container = createElmt("div", card.card, [
    "information-container",
  ]);

  card.information.types = {};
  card.information.types.container = createElmt(
    "div",
    card.information.container,
    ["types-container"]
  );
  card.information.types.imgs = [];
  for (const type of pokemon.data.types) {
    card.information.types.imgs.push(
      createImg(type.image, card.information.types.container, ["type"], {
        type: type.name,
      })
    );
  }

  if (pokemon.data.sprites.shiny) {
    createImg(pokemon.data.sprites.shiny, card.information.container, [
      "shiny",
    ]);
  }

  card.information.bnt = createElmt(
    "div",
    card.information.container,
    ["information"],
    { pokemon: pokemon.name },
    "i"
  );
  return card;
}

async function newCard() {
  const index = indexPokemons.shift();
  const pokemon = datas[index];
  pokemon.data = await getPokemonData(pokemon.name);
  const card = await createCard(pokemon);
  console.log(pokemon.data);
  pokemonCount += 1;
}

function goTo(dir) {
  const nextId = currentPokemon + dir;
  const elmt = document.getElementById(nextId);
  if (elmt) {
    elmt.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
    currentPokemon = nextId;
  }
}

newCard();
