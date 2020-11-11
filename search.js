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
    // console.log(searchList)
    displaySearchedPokemons(searchList)
}

function displaySearchedPokemons(List){
    const currentList = table.children[1]
    removeChildren(currentList)
    if(searchThis != ""){
        displayPokemons(List,0,List.length)
    }
    else{
        displayPokemons(List,0,offset)
    }
}

searchBar.addEventListener('input',()=>{
    searchThis = searchBar.value
    findPokemon(searchThis)
    const spinner = document.querySelector('#load')
    if(searchThis == ""){
        spinner.className = "spinner-border"
    }
    else{
        spinner.className = "spinner-border d-none"
    }
})
