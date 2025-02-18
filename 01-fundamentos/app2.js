const fs = require('fs');

const data = fs.readFileSync('README.md', "UTF8");

const wordCount = data.split(" ");

//const newData = data.replace(/React/ig, "Vaca");

//fs.writeFileSync('READMEVaca.md', newData);

//console.log(wordCount);

// const reactWordCount = wordCount.filter(
//   word => word.toLowerCase().includes("react")
// ).length

//const reactWordCount = data.match(/React/ig).length;

const reactWordCount = data.match(/react/gi ?? []).length;

console.log(reactWordCount);