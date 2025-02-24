const {getPokemon} = require('./js-foundation/06-promises');
//const {getAge, getUUID} = require('./plugins');



getPokemon(1)
.then((pokemon) => console.log(pokemon.name))
.catch((error) => console.error('Pokemon no encontrado', error))
.finally(() => console.log('Pokemon fetched'));


