"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characters = void 0;
const { SHELL, HOMEBREW_PREFIX } = process.env;
console.table({ SHELL, HOMEBREW_PREFIX });
exports.characters = ["Mario", "Luigi", "Yoshi", "Toad"];
const [_, __, dinosaur] = exports.characters;
console.log(dinosaur);
