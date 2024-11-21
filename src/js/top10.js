async function fetchTop10Pokemon() {
  const pokemonListElement = document.getElementById("pokemonList");

  for (let i = 1; i <= 9; i++) {
    try {
      const response = await fetch(`http://localhost:3000/pokemon/${i}`);
      if (!response.ok) throw new Error("Erro ao buscar dados do pokémon!");

      const data = await response.json();

      const pokemonCard = document.createElement("div");
      pokemonCard.className = "pokemon-card";

      const pokemonImage = document.createElement("img");
      pokemonImage.src = data.image;
      pokemonImage.alt = `Imagem de ${data.name}`;
      pokemonImage.className = "pokemon-image";

      const pokemonName = document.createElement("h3");
      pokemonName.textContent = data.name;

      const pokemonTypes = document.createElement("p");
      pokemonTypes.textContent = `Tipos: ${data.types}`;

      // Adiciona os elementos ao card
      pokemonCard.appendChild(pokemonImage);
      pokemonCard.appendChild(pokemonName);
      pokemonCard.appendChild(pokemonTypes);

      pokemonListElement.appendChild(pokemonCard);

      // Selecionar pokemons (Marcar)
      pokemonCard.addEventListener("click", () => {
        if (pokemonCard.classList.contains("selecionado")) {
          pokemonCard.classList.remove("selecionado");
        } else {
          pokemonCard.classList.add("selecionado");
        }
      });
    } catch (error) {
      console.log(`Erro ao buscar dados do pokémon: ${error}`);
    }
  }
}

fetchTop10Pokemon();
