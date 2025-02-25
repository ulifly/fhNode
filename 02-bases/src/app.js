const {getPokemon} = require('./js-foundation/06-promises');
const {buildLogger} = require('./plugins');

const logger = buildLogger('app.js');

logger.log('Starting app.js');

getPokemon(1230)
.then((pokemon) => console.log(pokemon.name))
//.catch((error) => console.error('Pokemon no encontrado', error))
.catch((error) => logger.error('Pokemon no encontrado', error))
.finally(() => console.log('Pokemon fetched'));


