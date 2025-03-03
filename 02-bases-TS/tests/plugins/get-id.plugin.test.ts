import { getUUID } from '../../src/plugins/get-id.plugin';

describe('plugin getUUID', () => {
    test ('should return a string', () => {
        const uuid = getUUID();
        expect(typeof uuid).toBe('string');
    });

    test('UUID should have a length of 36', () => {
        const uuid = getUUID();
        expect(uuid).toHaveLength(36);
    });
});