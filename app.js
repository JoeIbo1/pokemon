"use strict"

window.addEventListener("load", initApp);

async function initApp() {
  const machoke = await getCharacter("https://cederdorff.github.io/dat-js/05-data/pokemons.json");
  machoke.forEach(showCharacter);
 



}

async function getCharacter(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function showCharacter(character) {
  console.log(character);

  document.querySelector("#characters").insertAdjacentHTML(
    "beforeend",
    /*html*/ `
            <article class="grid-item">
                <img src="${character.image}">
                <h2>${character.name}</h2>
                <p>Generation: ${character.generation}</p>
                <p>Spil Version: ${character.spilVersion}</p>
                <p>Type: ${character.type}</p>
            </article>
        `
  );
  document.querySelector("#characters article:last-child").addEventListener("click", characterClicked);

  function characterClicked() {
    showCharacterModal(character);
  }
}

function showCharacterModal(character) {
  console.log(character);
  //image, name and house
  document.querySelector("#dialog-image").src = character.image;
  document.querySelector("#dialog-name").textContent = character.name;
  document.querySelector("#dialog-description").textContent = character.description;
  // description
  let description = generateDescription(character);

  document.querySelector("#dialog-gender").textContent = character.gender;
  document.querySelector("#dialog-generation").textContent = character.generation;
  document.querySelector("#dialog-height").textContent = character.height;
  document.querySelector("#dialog-weight").textContent = character.weight;
  document.querySelector("#dialog-can-evolve").textContent = character.canEvolve;
  document.querySelector("#dialog-spil-version").textContent = character.spilVersion;
  document.querySelector("#dialog-dexindex").textContent = character.dexindex;
  document.querySelector("#dialog-type").textContent = character.type;
  document.querySelector("#dialog-subtype").textContent = character.subtype;
  document.querySelector("#dialog-weaknesses").textContent = character.weaknesses;
  document.querySelector("#dialog-ability").textContent = character.ability;

  document.querySelector("#dialog-statshp").textContent = character.statsHP;
  document.querySelector("#dialog-statsattack").textContent = character.statsAttack;
  document.querySelector("#dialog-statsdefence").textContent = character.statsDefence;
  document.querySelector("#dialog-statsspecialattack").textContent = character.statsSpecialAttack;
  document.querySelector("#dialog-statsspecialdefence").textContent = character.statsSpecialDefence;
  document.querySelector("#dialog-statsspeed").textContent = character.statsSpeed;

  // show dialog
  document.querySelector("#dialog-character").showModal();
}

function generateDescription(character) {
  let description = "";
 
  return description;
}
