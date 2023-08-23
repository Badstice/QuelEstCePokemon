const synth = window.speechSynthesis;

function speak(msg) {
  let speech = new SpeechSynthesisUtterance(msg);
  synth.speak(speech);
}

function speakSyllabe(target) {
  if (target.dataset.phonem) {
    speak(target.dataset.phonem);
  } else {
    speak(target.dataset.syllabe);
  }
}

function speakPokemon(pokemon) {
  if (pokemonName[pokemon]) {
    speak(pokemonName[pokemon]);
  } else {
    speak(pokemon);
  }
}

function presentation(pokemon) {
  if (pokemon.data.types.length === 1)
    speak(`est un pokémon de type ${pokemon.data.types[0].name}`);
  else {
    speak(
      `est un pokémon de type ${pokemon.data.types[0].name} et de type ${pokemon.data.types[1].name} `
    );
  }
  if (pokemon.data.evolution.next) {
    speak(`il évolue en ${pokemon.data.evolution.next[0].name}`);
  } else {
    speak(`il ne possède pas d'évolution connue à ce jour`);
    if (pokemon.data.evolution.mega) {
      speak(
        `il possède en revanche ${
          pokemon.data.evolution.mega.length
        } méga évolution: ${pokemon.data.evolution.mega
          .map((e) => e.orbe)
          .join(" et ")}`
      );
    }
  }
  const resistances = shuffleArray(pokemon.data.resistances);
  speak(
    `il est vulnérable face aux pokémons de type ${
      resistances.find((r) => r.multiplier > 1).name
    } et résistant face aux pokémons de type ${
      resistances.find((r) => r.multiplier < 1).name
    }`
  );
}

function speakGeneration(gen) {
  if (gen === "1") {
    speak("il fait parti de la première génération de Pokémon");
  } else {
    speak(`if fait partie de la ${gen}ième génération de Pokémon`);
  }
}

function speakPokeId(id) {
  speak(`il est le numéro ${id}`);
}

function speakShiny(shiny) {
  if (shiny === "shiny") {
    speak("voici sa forme shiny");
  } else if (shiny === "gmax") {
    speak("voici sa méga évaluation");
  } else if (shiny === "gmax-shiny") {
    speak("voici sa forme shiny de sa méga évolution");
  }
}

function speakResistance(what, resistances) {
  const index = resistances.length - 1;
  speak(
    `il est ${what} face aux attaques de type : ${resistances
      .map((t, i) => `${i === index ? ",et " : ""}${t.dataset.type}`)
      .join(" . ")}`
  );
}
