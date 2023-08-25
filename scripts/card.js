async function getPokemonData(pokedexId) {
  const response = await fetch(apiRoot + pokedexId);
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
        if (value) stock.dataset[key] = value;
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

function createDiv(parent, classes, datasets, innerText, params) {
  return createElmt("div", parent, classes, datasets, innerText, params);
}

async function createCard(pokemon, evolutionContainer) {
  let card = {};
  card.container = createDiv(
    evolutionContainer,
    ["card-container"],
    {
      id: pokemon.data.pokedexId,
    },
    null
  );

  card.backgrounds = [];
  for (const type of pokemon.data.types) {
    card.backgrounds.push(
      createDiv(card.container, ["bg"], {
        type: type.name,
      })
    );
  }

  card.card = createDiv(card.container, ["card"]);

  card.img = {};
  card.img.container = createDiv(card.card, ["pokemon-img-container"]);
  card.img.sprite = await createImg(
    pokemon.data.sprites.regular,
    card.img.container,
    ["pokemon-img"],
    {
      pokemon: pokemon.name,
      pokephonem: pokemon.phonem,
    }
  );

  card.img.number = {};
  card.img.number.container = createDiv(card.img.container, [
    "number-container",
  ]);
  const gen = pokemon.data.generation;
  const pokeId = pokemon.data.pokedexId;
  card.img.number.generation = createElmt(
    "p",
    card.img.number.container,
    ["generation"],
    { gen },
    `Gen: ${gen}`
  );
  card.img.number.pokeId = createElmt(
    "p",
    card.img.number.container,
    ["pokeId"],
    { pokeId },
    `N°: ${pokeId}`
  );

  card.img.types = {};
  card.img.types.container = createDiv(card.img.container, ["types-container"]);
  card.img.types.imgs = [];
  for (const type of pokemon.data.types) {
    card.img.types.imgs.push(
      createImg(type.image, card.img.types.container, ["type"], {
        type: type.name,
      })
    );
  }

  card.response = {};
  card.response.container = createElmt(
    "div",
    card.card,
    ["response-container"],
    {
      response: pokemon.name.toLocaleLowerCase(),
      pokemon: pokemon.name,
      pokephonem: pokemon.phonem,
    }
  );
  card.response.syllabes = [];

  card.input = {};
  card.input.container = createElmt("div", card.card, ["input-container"], {
    pokemonspeak: pokemon?.phonem ?? pokemon.name,
  });
  card.input.syllabes = [];

  const indexs = shuffleArray(pokemon.syllabes.map((v, i) => i));

  for (let index = 0; index < pokemon.syllabes.length; index++) {
    const syllabe = pokemon.syllabes[index];
    card.response.syllabes.push(
      createElmt("div", card.response.container, ["syllabe"], { index })
    );

    if (pokemon.phonems && pokemon.phonems.find((p) => p.syllabe === syllabe)) {
      const phonem = pokemon.phonems.find((p) => p.syllabe === syllabe).phonem;
      card.input.syllabes.push(
        createElmt(
          "div",
          card.input.container,
          ["syllabe"],
          { index, syllabe, id: pokemon.data.pokedexId, phonem },
          syllabe.toUpperCase(),
          {
            order: indexs[index],
          }
        )
      );
    } else {
      card.input.syllabes.push(
        createElmt(
          "div",
          card.input.container,
          ["syllabe"],
          { index, syllabe, id: pokemon.data.pokedexId },
          syllabe.toUpperCase(),
          {
            order: indexs[index],
          }
        )
      );
    }
  }

  card.information = {};
  card.information.container = createElmt("div", card.card, [
    "information-container",
  ]);

  card.information.bnt = createDiv(
    card.img.container,
    ["information"],
    { pokemon: pokemon.name, pokephonem: pokemon.phonem },
    "i"
  );

  card.information.resistances = {};
  card.information.resistances.container = createDiv(
    card.information.container,
    ["resistances-container"]
  );

  card.information.resistances.forces = createDiv(
    card.information.resistances.container,
    ["forces"]
  );

  card.information.resistances.weakness = createDiv(
    card.information.resistances.container,
    ["weakness"]
  );
  for (const resistance of pokemon.data.resistances) {
    if (resistance.multiplier > 1) {
      await createImg(
        getTypeUrl(resistance.name),
        card.information.resistances.weakness,
        ["type"],
        {
          type: resistance.name,
        }
      );
    } else if (resistance.multiplier < 1) {
      await createImg(
        getTypeUrl(resistance.name),
        card.information.resistances.forces,
        ["type"],
        {
          type: resistance.name,
        }
      );
    }
  }

  if (pokemon.data.sprites?.gmax?.shiny && rdmBool()) {
    createImg(
      pokemon.data.sprites.gmax.shiny,
      card.information.container,
      ["shiny"],
      { shiny: "gmax-shiny" }
    );
  } else if (pokemon.data.sprites?.gmax?.regular && rdmBool()) {
    createImg(
      pokemon.data.sprites.gmax.shiny,
      card.information.container,
      ["shiny"],
      { shiny: "gmax" }
    );
  } else if (pokemon.data.sprites?.shiny) {
    createImg(
      pokemon.data.sprites.shiny,
      card.information.container,
      ["shiny"],
      { shiny: "shiny" }
    );
  }

  return card;
}

async function newCard(pokemonName, evolutionContainer) {
  const pokemon = getPokemon(pokemonName);
  console.log(pokemon);
  if (pokemon) {
    indexPokemons = remove(
      indexPokemons,
      datas.indexOf((d) => d.name === pokemonName)
    );
    pokemon.data = await getPokemonData(pokemon.index);
    await createCard(pokemon, evolutionContainer);
  }
}

async function newEvolution(id) {
  const evolutionContainer = createElmt("div", main, ["evolution-container"]);
  const index = id ?? indexPokemons.shift();
  const pokemon = datas[index];
  console.log(pokemon);
  pokemon.data = await getPokemonData(pokemon.index);
  console.log(pokemon.data);

  if (pokemon.data.evolution?.pre) {
    for (const pre of pokemon.data.evolution.pre) {
      await newCard(pre.name, evolutionContainer);
    }
  }

  const card = await createCard(pokemon, evolutionContainer);

  if (!currentCard) {
    currentCard = card.container;
    currentCard.scrollIntoView({
      block: "end",
      inline: "nearest",
    });
  }

  if (pokemon.data.evolution?.next) {
    for (const next of pokemon.data.evolution.next) {
      await newCard(next.name, evolutionContainer);
    }
  }

  pokemonCount += 1;
}
