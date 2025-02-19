const { getAge, getUUID } = require('./plugins');
const {buildMakePerson} = require("./js-foundation/05-factory");


const makePerson = buildMakePerson({getUUID, getAge});

const obj = {
    name: 'Ulises',
    birthdate: '1983-07-24',
}


const person = makePerson(obj);

console.log(person);