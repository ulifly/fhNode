const {getPokemonById, getPokemonByName} = require('./js-foundation/06-promises');

const info = getPokemonById(130)
.then((pokemon) => console.log(pokemon.name))
.catch((error) => console.log(error))
.finally(() => console.log('Pokemon fetched'));

const info2 = getPokemonByName('mewtwo')
.then((pokemon) => console.log(pokemon.id))
.catch((error) => console.log('Pokemon no encontrado'))
.finally(() => console.log('Pokemon fetched'));