function removeChildren(parent){
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function displayPokemons(DisplayList,offset,toDisplay){
    for(i=offset;i<offset+toDisplay;i++){
        const newRow = document.createElement('tr')
        const newHead = document.createElement('th')
        const newImg = document.createElement('td')
        const imgLink = document.createElement('img')
        const newName = document.createElement('td')
        const newNameLink = document.createElement('a')
        const newType = document.createElement('td')

        newHead.scope = "row"
        newHead.innerHTML = DisplayList[i].data.id
        if(DisplayList[i].data.sprites.front_default == null){
            imgLink.src = "noimage.jpg"
            imgLink.style.width = '100px';
        }
        else{
            imgLink.src = DisplayList[i].data.sprites.front_default
        }
        newNameLink.href = `pokemon.html?pokemon=${DisplayList[i].data.id}`
        newNameLink.innerHTML = capitalize(DisplayList[i].data.name)

        if(DisplayList[i].data.types.length > 1){
            const typeList =[]
            for(type of DisplayList[i].data.types){
                typeList.push(capitalize(type.type.name))
            }
            newType.innerHTML = typeList.join(', ')
        }
        else{
            newType.innerHTML = capitalize(DisplayList[i].data.types[0].type.name)
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