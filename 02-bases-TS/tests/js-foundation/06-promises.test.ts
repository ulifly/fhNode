import { getPokemon } from '../../src/js-foundation/06-promises';


describe('Testing promises', () => {
    test('should return a pokemon', async () => {
        const pokemon = await getPokemon(1);
        expect(pokemon.name).toBe('bulbasaur');
    });


    test('if pokemon does not exist, should return an error', async () => {
        const id = 1000000;


        try {
          await getPokemon(id);
           expect (true).toBe(false);
        } catch (error) {
            expect(error).toBe(`pokemon con id ${ id } no encontrado`);
        }
         
    });
});