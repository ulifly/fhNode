import { getAge } from '../../src/plugins/get-age.plugin';

describe('plugin getAge', () => {
    const birthdate = '1990-01-01';

    test('should return a number', () => {
        
        const age = getAge(birthdate);
        expect(typeof age).toBe('number');
    });

    test('should return the age of the person', () => {
        
        const age = getAge(birthdate);
        expect(age).toBe(36);
    });

});