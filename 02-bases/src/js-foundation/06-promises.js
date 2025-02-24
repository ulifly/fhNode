const { http } = require('../plugins');



const getPokemon = async(id) => {
    const url = (`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await http.get(url);
    return pokemon;

}



module.exports =  {
    getPokemon
}
