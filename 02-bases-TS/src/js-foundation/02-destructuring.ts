

const { SHELL, HOMEBREW_PREFIX } = process.env;

console.table({ SHELL, HOMEBREW_PREFIX });

export const characters = ["Mario", "Luigi", "Yoshi", "Toad"];

const [_, __, dinosaur] = characters;

console.log(dinosaur);