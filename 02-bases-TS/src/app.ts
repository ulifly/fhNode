import { getPokemon } from './js-foundation/06-promises';

import { buildLogger } from "./plugins/logger.plugin";

const logger = buildLogger('app.js');

logger.log('Starting app.js');

getPokemon(1)
  .then((pokemon) => console.log(pokemon.name))



