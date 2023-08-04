function shuffleArray(arr) {
  arr.sort(() => Math.random() - 0.5);
  return arr;
}

function getPokemon(pokemonName) {
  return datas.find((p) => p.name === pokemonName);
}

function checkName(name) {
  const replaces = {
    e: ["é", "è", "ê"]
  }
  for (const key in replaces) {
    if (Object.hasOwnProperty.call(replaces, key)) {
      const values = replaces[key];
      name = name.replace(new RegExp(values.join("|"), "i"), key)
        }
    }
  return name.toLowerCase();
}