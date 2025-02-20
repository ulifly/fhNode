// Con async await

const getPokemonById = async(id) => {
    const url = (`https://pokeapi.co/api/v2/pokemon/${id}`);

    const response = await fetch(url);
    const pokemon = await response.json();
    return pokemon;
    

}

//con fetch

const getPokemonByName = (name) => {
    const url = (`https://pokeapi.co/api/v2/pokemon/${name}`)
    
    return fetch(url)
    .then((response) => response.json())
    .then((pokemon) => pokemon )
}


module.exports =  {
    getPokemonById,
    getPokemonByName
}
