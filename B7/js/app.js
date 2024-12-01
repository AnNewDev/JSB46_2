//function update data on UI
function updateUI(name, img, bio) {
  //get element from HTML
  const name_element = document.getElementById("pokemon_name");
  const img_element = document.querySelector("#pokemon_img");
  const bio_element = document.getElementById("pokemon_bio");

  //update data on UI
  name_element.textContent = name;
  img_element.src = img;
  bio_element.innerText = bio;
}

updateUI("abc", "", "bio abc");

//functuion search

function search_pokemon(pokemon_name) {
  //set root URL
  const root_url = "https://pokeapi.co/api/v2/pokemon/";
  //call API
  const promise = fetch(root_url + pokemon_name.toLowerCase(), {
    method: "GET",
  });

  promise
    .then(function (json) {
      // chuyen kieu json -> js
      return json.json();
    })
    .then(function (pokemonData) {
      // Lay du lieu theo loai
      const name = pokemonData.name;
      const img = pokemonData.sprites.other["official-artwork"].front_default;
      const bio = `Weight: ${pokemonData.weight} Height: ${pokemonData.height}`;
      // de du lieu vao UI
      updateUI(name, img, bio);
    })
    .catch(function (error) {
      aleart("Khong tim thay pokemon");
    });
}

//add event cho btn
document
  .getElementById("search_btn")
  .addEventListener("click", function (event) {
    // khong cho website load theo mac dinh
    event.preventDefault();
    // Lay du lieu tu input
    const pokemon_name = document.getElementById("search_inp").value.trim();
    // neu khong co du lieu
    if (!pokemon_name) {
      alert("Vui long nhap ten pokemon");
    } else {
      search_pokemon(pokemon_name);
    }
  });
