import { getUserById } from '../../src/js-foundation/03-callbacks';

describe('Testing callbacks', () => {
    
    test('getUserById should return an error if user doesnt exist', () => {
        const id = 10;

        getUserById( id, (err, user) => {
        expect(err).toBe('User not found');
        expect(user).toBeUndefined();

        });

    });

    // test('getUserById should return an object', (done) => {
    //     const id = 1;
    //     getUserById(id, (user) => {
    //     expect(user).toEqual({ id: 1, name: 'Pepe' });
    //     done();
    //     });
    // });
    
});
