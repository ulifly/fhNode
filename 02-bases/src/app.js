const {getPokemonById} = require('./js-foundation/06-promises');

const info = getPokemonById(4)
.then((pokemon) => console.log(pokemon.name))
.catch((error) => console.log(error))
.finally(() => console.log('Pokemon fetched'));
