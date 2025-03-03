import { buildMakePerson } from '../../src/js-foundation/05-factory';

describe('Factory', () => {

    const getUUID = () => '1234';
    const getAge = () => 30;

    test('should return a function tt', () => {
        
        const makePerson = buildMakePerson({getAge, getUUID});
        expect(typeof makePerson).toBe('function');

    });

    test('makePerson should return a person object', () => {

        const makePerson = buildMakePerson({getAge, getUUID});
        const person = makePerson({name: 'John', birthdate: '1990-01-01'});+
        

        expect(person).toEqual({
            id: '1234',
            name: 'John',
            birthdate: '1990-01-01',
            age: 30
        });
    });
})