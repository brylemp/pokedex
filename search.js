const searchBar = document.querySelector("#search")

let searchThis = ""

async function findPokemon(search){
    const pokemons = await results
    let searchList = []
    for(pokemon of pokemons){
        if(pokemon.data.name.search(search) != -1){
            searchList.push(pokemon)
        }
    }
    displaySearchedPokemons(searchList)
}

function displaySearchedPokemons(List){
    const currentList = table.children[1]
    removeChildren(currentList)
    (searchThis != "") ? displayPokemons(List,0,List.length) : displayPokemons(List,0,offset)
}

searchBar.addEventListener('input',()=>{
    searchThis = searchBar.value
    findPokemon(searchThis)
})
