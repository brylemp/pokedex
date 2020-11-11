const pokemonRead = window.location.href.slice(46)

async function getPokemon(){
    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonRead}`)
    console.log(pokemon)
    const pokemonHeader = document.querySelector("#pokemonHeader")
    const pokemonImage = document.querySelector("#pokemonImage")
    const pokemonSprite = document.querySelector("#pokemonSprite")
    const imgLink = document.createElement('img')
    const pokemonID = document.querySelector("#pokemonID")
    const pokemonName = document.querySelector("#pokemonName")
    const pokemonType = document.querySelector("#pokemonType")
    const pokemonHeight = document.querySelector("#pokemonHeight")
    const pokemonWeight = document.querySelector("#pokemonWeight")

    if(pokemon.data.sprites.other["official-artwork"].front_default==null){
        pokemonImage.src = "noimage.jpg"
    }
    else{
        pokemonImage.src = pokemon.data.sprites.other["official-artwork"].front_default
    }
    if(pokemon.data.sprites.front_default == null){
        imgLink.src = "noimage.jpg"
        imgLink.style.width = '100px';
    }
    else{
        imgLink.src = pokemon.data.sprites.front_default
    }
    pokemonSprite.appendChild(imgLink)
    
    pokemonID.innerHTML = pokemon.data.id
    pokemonHeader.innerHTML = capitalize(pokemon.data.name)
    pokemonName.innerHTML = capitalize(pokemon.data.name)
    if(pokemon.data.types.length > 1){
        const typeList =[]
        for(type of pokemon.data.types){
            typeList.push(capitalize(type.type.name))
        }
        pokemonType.innerHTML = typeList.join(', ')
    }
    else{
        pokemonType.innerHTML = capitalize(pokemon.data.types[0].type.name)
    }
    pokemonHeight.innerHTML = parseFloat(pokemon.data.height)/10 + " m"
    pokemonWeight.innerHTML = parseFloat(pokemon.data.weight)/10 + " kg"
}

getPokemon()












