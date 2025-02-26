import { getPokemon } from './js-foundation/06-promises';

import { buildLogger } from "./plugins/logger.plugin";

const logger = buildLogger('app.js');

logger.log('Starting app.js');

getPokemon(12)
  .then((pokemon) => console.log(pokemon.name))
  //.catch((error) => console.error('Pokemon no encontrado', error))
  .catch((error) => logger.error('Pokemon no encontrado'))
  .finally(() => console.log('Pokemon fetched'));


