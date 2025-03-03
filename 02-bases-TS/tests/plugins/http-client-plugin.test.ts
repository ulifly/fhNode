import { http } from '../../src/plugins/http-client-plugin';

describe('plugin http', () => {
    
    test('should return an object', async () => {
        const data = await http.get('https://jsonplaceholder.typicode.com/todos/1');
        expect(typeof data).toBe('object');
    });

    test('http client should contain POST, PUT and DELETE methods ', () => {
        expect(typeof http.post).toBe('function');
        expect(typeof http.put).toBe('function');
        expect(typeof http.delete).toBe('function');
    })
});