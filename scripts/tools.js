function rdmOne() {
  const array = new Uint32Array(1);
  self.crypto.getRandomValues(array);
  const randomValue = array[0];

  return randomValue % 2 === 0 ? 1 : -1;
}

function shuffleArray(arr) {
  arr.sort(() => rdmOne());
  return arr;
}

function rdmBool() {
  return rdmOne() > 0;
}

function getPokemon(pokemonName) {
  return datas.find((p) => p.name === pokemonName);
}

function checkName(name) {
  const replaces = {
    e: ["é", "è", "ê"],
  };
  for (const key in replaces) {
    if (Object.hasOwnProperty.call(replaces, key)) {
      const values = replaces[key];
      name = name.replace(new RegExp(values.join("|"), "ig"), key);
    }
  }
  console.log(name);
  return name.toLowerCase();
}

function getTypeUrl(type) {
  return `https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/${checkName(
    type
  )}.png`;
}

function remove(array, elmt) {
  const index = array.indexOf(elmt);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
}

function scrollTo(elmt) {
  elmt.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
  currentCard = elmt;
  resetChangePage();
}

function goToNextPokemon(dir) {
  const containers = [...document.querySelectorAll(".evolution-container")];
  const elmt = containers[containers.indexOf(currentCard.parentElement) + dir];
  const indexP = [
    ...currentCard.parentElement.querySelectorAll(".card-container"),
  ].indexOf(currentCard);
  if (elmt) {
    const nextAtSameIndex = elmt
      .querySelectorAll(".card-container")
      .item(indexP);
    if (nextAtSameIndex) {
      scrollTo(nextAtSameIndex);
    } else {
      scrollTo(elmt.querySelector(".card-container"));
    }
  }
}

function goToNextEvolution(dir) {
  console.log(dir);
  const elmt = currentCard.parentElement.querySelector(
    `div.card-container[data-id="${Number(currentCard.dataset.id) + dir}"]`
  );
  if (elmt) {
    scrollTo(elmt);
  }
}
