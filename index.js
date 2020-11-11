const table = document.querySelector('.table')
const tableBody = table.children[1]
let offset = 0
let results

async function getPokemons(){
    const pokemonList = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1050`)
    const promiseList = []
    for(count of pokemonList.data.results){
        promiseList.push(axios.get(count.url))
    }
    const promiseResults = await Promise.all(promiseList)
    displayPokemons(promiseResults,0,20)
    return promiseResults
}

async function displayMorePokemons(promise,offset){
    const promise2 = await promise
    displayPokemons(promise2,offset,20)
}

results = getPokemons()
offset = parseInt(offset) + 20

window.addEventListener('scroll', function (){
    if(((window.innerHeight + window.scrollY) == document.body.offsetHeight) && searchThis == ""){
        displayMorePokemons(results,offset)
        offset = parseInt(offset) + 20
        console.log(offset)
    }
})












