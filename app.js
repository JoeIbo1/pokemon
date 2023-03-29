"use strict"

window.addEventListener("load", initApp);

async function initApp() {
  const pokemons = await getPokemon("https://cederdorff.github.io/dat-js/05-data/pokemons.json");
  
  for(const pokemon of pokemons){
    showPokemon(pokemon);
  }
  
 



}

async function getPokemon(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function showPokemon(pokemon) {
  console.log(pokemon);

  document.querySelector("#pokemons").insertAdjacentHTML(
    "beforeend",
    /*html*/ `
            <article class="grid-item">
                <img src="${pokemon.image}">
                <img src="${pokemon.footprint}">
                <h2>${pokemon.name}</h2>
                <p>Generation: ${pokemon.generation}</p>
                <p>Spil Version: ${pokemon.spilversion}</p>
                <p>Type: ${pokemon.type}</p>
            </article>
        `
  );
  document.querySelector("#pokemons article:last-child").addEventListener("click", pokemonClicked);

  function pokemonClicked() {
    showPokemonModal(pokemon);
  }
}

function showPokemonModal(pokemon ) {
  console.log(pokemon);
  //image, name and description
  document.querySelector("#dialog-image").src = pokemon.image;
  document.querySelector("#dialog-name").textContent = pokemon.name;
  document.querySelector("#dialog-description").textContent = pokemon.description;
  

  document.querySelector("#dialog-gender").textContent = pokemon.gender;
  document.querySelector("#dialog-generation").textContent = pokemon.generation;
  document.querySelector("#dialog-height").textContent = pokemon.height;
  document.querySelector("#dialog-weight").textContent = pokemon.weight;
  document.querySelector("#dialog-can-evolve").textContent = pokemon.canEvolve;
  document.querySelector("#dialog-spil-version").textContent = pokemon.spilversion;
  document.querySelector("#dialog-dexindex").textContent = pokemon.dexindex;
  document.querySelector("#dialog-type").textContent = pokemon.type;
  document.querySelector("#dialog-subtype").textContent = pokemon.subtype;
  document.querySelector("#dialog-weaknesses").textContent = pokemon.weaknesses;
  document.querySelector("#dialog-ability").textContent = pokemon.ability;

  document.querySelector("#dialog-statshp").textContent = pokemon.statsHP;
  document.querySelector("#dialog-statsattack").textContent = pokemon.statsAttack;
  document.querySelector("#dialog-statsdefence").textContent = pokemon.statsDefence;
  document.querySelector("#dialog-statsspecialattack").textContent = pokemon.statsSpecialAttack;
  document.querySelector("#dialog-statsspecialdefence").textContent = pokemon.statsSpecialDefence;
  document.querySelector("#dialog-statsspeed").textContent = pokemon.statsSpeed;

  // show dialog
  document.querySelector("#dialog-pokemon").showModal();
}


