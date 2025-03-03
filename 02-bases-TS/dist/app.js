"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _06_promises_1 = require("./js-foundation/06-promises");
const logger_plugin_1 = require("./plugins/logger.plugin");
const logger = (0, logger_plugin_1.buildLogger)('app.js');
logger.log('Starting app.js');
(0, _06_promises_1.getPokemon)(1)
    .then((pokemon) => console.log(pokemon.name));
