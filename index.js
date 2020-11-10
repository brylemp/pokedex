const table = document.querySelector('.table')
const tableBody = table.children[1]
let offset = 0
let results

async function getPokemons(){
    const pokemonList = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1050`)
    const promiseList = []
    console.log(offset)
    for(count of pokemonList.data.results){
        promiseList.push(axios.get(count.url))
    }
    const promiseResults = await Promise.all(promiseList)
    console.log(promiseResults)
    displayPokemons(promiseResults)
    return promiseResults
}

results = getPokemons()
offset = parseInt(offset) + 20

window.addEventListener('scroll', function (){
    if(((window.innerHeight + window.scrollY) == document.body.offsetHeight) && searchThis == ""){
        results = getPokemons()
        offset = parseInt(offset) + 20
    }
})












