const fs = require('fs');

const content = fs.readFileSync('README.md', 'UTF8');

const words = content.split(' ');

const reactWordCount = content.match(/react/gi ?? []).length;

console.log(reactWordCount);