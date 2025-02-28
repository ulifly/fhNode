import { characters } from '../../src/js-foundation/02-destructuring';

describe('02-destructuring', () => {

  test('should contain Mario & Luigi', () => {
    expect(characters).toContain('Mario');
    expect(characters).toContain('Luigi');
  });

});