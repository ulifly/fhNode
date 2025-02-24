const {getPokemon} = require('./js-foundation/06-promises');
//const {getAge, getUUID} = require('./plugins');



getPokemon(1)
.then((pokemon) => console.log(pokemon.name))
.catch((error) => console.log('Pokemon no encontrado'))
.finally(() => console.log('Pokemon fetched'));


