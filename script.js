const character = document.getElementById("personagens-container");

fetch("https://dragonball-api.com/api/characters")
.then(response => response.json())
.then((data) => {
  data.items.forEach(personagem => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <img src="${personagem.image}" alt="imagem do personagem">
    <h2>${personagem.name}</h2>
    <p>Raça: ${personagem.race}</p>
    <p>Gênero: ${personagem.gender}</p>
    `
    character.appendChild(card);
  });
});