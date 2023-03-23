window.addEventListener("load", initApp);

async function initApp() {
  const machoke = await getCharacter();
  showCharacter(machoke);


}

async function getCharacter(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function showCharacter(character) {
  document.querySelector("body").insertAdjacentHTML(
    "beforeend",
    /*html*/ `
        
        <article>
        <h2>${character.name}</h2>
        <img src= "${character.image}"/>
        </article>
        
        `
  );
}

// "use strict";

// const machoke = {
//   name: "Machoke ",
//   description: "Its muscular body is so powerful, it must wear a power-save belt to be able to regulate its motions",
//   ability: "Its so gutsy that having a status condition boosts the Pokémon’s Attack stat.",
//   image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/067.png",
//   footprint: "https://archives.bulbagarden.net/media/upload/8/87/F0164gen2.png",
//   dexindex: "#0067",
//   type: "Fighting",
//   subtype: "Fighting",
//   weaknesses: "Psychic, Flying, Fairy.",
//   gender: "both",
//   weight: "155.4 lbs",
//   height: "149.86 cm",
//   generation: "Generation 1",
//   spilversion: "All versions",
//   canEvolve: "Machamp",
//   statsHP: "80",
//   statsAttack: "100",
//   statsDefence: "70",
//   statsSpecialAttack: "50",
//   statsSpecialDefence: "60",
//   statsSpeed: "45",
// };

// function showInformation(pokemon) {
//   const myHTML = /*html*/ `
// <li>Name: ${pokemon.name}</li>
// <li>Description: ${pokemon.description}</li>
// <li>Ability: ${pokemon.ability}</li>
// <li>Image: ${pokemon.image}</li>
// <li>Footprint: ${pokemon.footprint}</li>
// <li>Dexindex: ${pokemon.dexindex}</li>
// <li>Type: ${pokemon.type}</li>
// <li>subtype: ${pokemon.subtype}</li>
// <li>Weaknesses: ${pokemon.weaknesses}</li>
// <li>Gender: ${pokemon.gender}</li>
// <li>Weight: ${pokemon.weight}</li>
// <li>Height: ${pokemon.height}</li>
// <li>Generation: ${pokemon.generation}</li>
// <li>Spilversion: ${pokemon.spilversion}</li>
// <li>Can Evolve: ${pokemon.canEvolve}</li>
// <li>HP: ${pokemon.statsHP}</li>
// <li>Attack: ${pokemon.statsAttack}</li>
// <li>Special attack: ${pokemon.statsSpecialAttack}</li>
// <li>Special defence: ${pokemon.statsSpecialDefence}</li>
// <li>Speed: ${pokemon.statsSpeed}</li>
// `;
//   document.querySelector("#pokemons").insertAdjacentHTML("beforeend", myHTML);
// }

// showInformation(machoke);
