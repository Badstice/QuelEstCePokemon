function onInputSyllabeClick(target) {
  speakSyllabe(target.dataset.syllabe);
  const responsesContainer = document.querySelector(
    `div[data-id="${target.dataset.id}"] .response-container`
  );

  const responseSyllabes = [
    ...responsesContainer.querySelectorAll(".syllabe"),
  ].sort((s) => s.dataset.index);

  let isEnd = false;
  for (let i = 0; i < responseSyllabes.length; i++) {
    const s = responseSyllabes[i];
    if (s.innerText === "") {
      s.innerText = target.innerText;
      target.dataset.end = "true";
      if (s.dataset.index === target.dataset.index) {
        s.classList.add("good");
      } else {
        s.classList.add("bad");
      }
      isEnd = i === responseSyllabes.length - 1;
      break;
    }
  }

  if (isEnd) {
    const response = responseSyllabes.map((r) => r.innerText).join("");
    speak(response);

    if (response === responsesContainer.dataset.response) {
      speak("Bravo !");
      currentCard.classList.add("end");
      responsesContainer.classList.add("end");
      newEvolution();
    } else {
      speak("Dommage, essai encore");
      setTimeout(() => {
        resetResponse(
          [
            ...document.querySelectorAll(
              `div[data-id="${target.dataset.id}"] .input-container .syllabe`
            ),
          ],
          responseSyllabes
        );
      }, 5000);
    }
  }
}

function onInformationClick(target) {
  const pokemon = getPokemon(target.dataset.pokemon);
  presentation(pokemon);
}

function resetResponse(inputSyllabes, responseSyllabes) {
  for (const syllabe of inputSyllabes) {
    syllabe.dataset.end = "";
  }

  for (const syllabe of responseSyllabes) {
    syllabe.innerText = "";
    syllabe.classList.remove("bad");
    syllabe.classList.remove("good");
  }
}

document.addEventListener("click", (evt) => {
  const target = evt.target;
  //console.log(target);

  if (target.dataset.pokemon) {
    speakPokemon(target.dataset.pokemon);
  } else if (target.dataset.syllabe && !target.dataset.end) {
    onInputSyllabeClick(target);
  } else if (target.dataset.type) {
    speak(target.dataset.type);
  } else if (target.dataset.gen) {
    speakGeneration(target.dataset.gen);
  } else if (target.dataset.pokeId) {
    speakPokeId(target.dataset.pokeId);
  } else if (target.dataset.shiny) {
    speakShiny(target.dataset.shiny);
  } else if (target.classList.contains("forces")) {
    speakResistance("résistant", [...target.querySelectorAll("[data-type]")]);
  } else if (target.classList.contains("weakness")) {
    speakResistance("faible", [...target.querySelectorAll("[data-type]")]);
  }

  if (target.classList.contains("information")) {
    onInformationClick(target);
  }
});

function handleTouchStart(event) {
  startX = event.touches[0].clientX;
  startY = event.touches[0].clientY;
  document.addEventListener("touchmove", handleTouchMove);
  document.addEventListener("touchend", handleTouchEnd);
}

function handleTouchMove(event) {
  deltaX = event.touches[0].clientX - startX;
  deltaY = event.touches[0].clientY - startY;
}

function handleTouchEnd(event) {
  if (Math.abs(deltaY) > 100) {
    goToNextPokemon(deltaY > 0 ? -1 : 1);
  } else if (Math.abs(deltaX) > 100) {
    goToNextEvolution(deltaX > 0 ? -1 : 1);
  }

  document.removeEventListener("touchmove", handleTouchMove);
  document.removeEventListener("touchend", handleTouchEnd);
}

function resetChangePage() {
  synth.cancel();
  startX = 0;
  startY = 0;
  deltaX = 0;
  deltaY = 0;
}

document.addEventListener("touchstart", handleTouchStart);
