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

    test('getAge should return 0', () => {
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1990);
        const birthdate = '1990-01-01';
        const age = getAge(birthdate);
        console.log({ age });
        expect(age).toBe(0);
        spy.mockRestore();
    });

});