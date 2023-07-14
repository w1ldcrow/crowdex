const pokemonList = document.getElementById('pokemonlist')
const loadMorebutton = document.getElementById('loadMorebutton')
let offset = 0;
const limit = 10;

loadPokemonItens(offset, limit) 

function loadPokemonItens(offset, limit) {
        pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
         const newHtml = pokemons.map((pokemon)=>  `     
        <li class="pokemon ${pokemon.type}">
          <span class="number">#${pokemon.number}</span>
          <span class="name">${pokemon.name}</span>
            <div class="details">
                <ol class="types">
                  ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                 </ol>
            <img src="${pokemon.photo}" alt="${pokemon.name}">
          </div>
        </li>
      `)
.join('')
                pokemonList.innerHTML += newHtml

            })

        }


loadMorebutton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset, limit)
})