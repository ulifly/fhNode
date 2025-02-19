const { getAge, getUUID } = require('../plugins');

const obj = {
    name: 'Ulises',
    birthdate: '1983-07-24',
}


const buildPerson = ({name, birthdate}) => {
    return {
        id: getUUID(),
        name: name,
        birthdate: birthdate,
        age: getAge(birthdate)
    }
}

module.exports = {
    buildPerson,
};