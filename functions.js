function removeChildren(parent){
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function displayPokemons(DisplayList){
    for(pokemon of DisplayList){
        const newRow = document.createElement('tr')
        const newHead = document.createElement('th')
        const newImg = document.createElement('td')
        const imgLink = document.createElement('img')
        const newName = document.createElement('td')
        const newNameLink = document.createElement('a')
        const newType = document.createElement('td')

        newHead.scope = "row"
        newHead.innerHTML = pokemon.data.id
        imgLink.src = pokemon.data.sprites.front_default
        imgLink.className = "pokeSprite"
        // newNameLink.href = `https://pokeapi.co/api/v2/pokemon/${pokemon.data.id}`
        newNameLink.href = `pokemon.html?pokemon=${pokemon.data.id}`
        newNameLink.innerHTML = capitalize(pokemon.data.name)

        if(pokemon.data.types.length > 1){
            const typeList =[]
            for(type of pokemon.data.types){
                typeList.push(capitalize(type.type.name))
            }
            newType.innerHTML = typeList.join(', ')
        }
        else{
            newType.innerHTML = capitalize(pokemon.data.types[0].type.name)
        }
        
        newImg.appendChild(imgLink)
        newName.appendChild(newNameLink)
        newRow.appendChild(newHead)
        newRow.appendChild(newImg)
        newRow.appendChild(newName)
        newRow.appendChild(newType)
        tableBody.appendChild(newRow) 
    }
}