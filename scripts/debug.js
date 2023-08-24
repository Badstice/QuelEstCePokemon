function checkData() {
  datas.forEach(async (d) => {
    const r = await getPokemonData(checkName(d.name));
    if (r?.status === 404) {
      console.error(`${d.name} is not found`);
    }

    if (d.name.toLocaleLowerCase() !== d.syllabes.join("")) {
      console.error(`${d.name} : ${d.syllabes.join(", ")}`);
    }
  });
}

function getDatasIndex(pokemonName) {
  return datas.findIndex((p) => p.name === pokemonName);
}

async function getPokemonGen(gen) {
  const response = await fetch(
    "https://api-pokemon-fr.vercel.app/api/v1/gen/" + gen
  );
  const json = await response.json();
  return json;
}

function removeWhere(array, pokemonName) {
  const index = array.findIndex((p) => p.name.fr === pokemonName);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
}

let gen,
  addPok = [];

(async () => {
  gen = await getPokemonGen(1);
  for (const pok of datas) {
    gen = removeWhere(gen, pok.name);
  }
  for (const pok of gen) {
    addPok.push({
      name: pok.name.fr,
      syllabes: ["", "", ""],
    });
  }
})();
