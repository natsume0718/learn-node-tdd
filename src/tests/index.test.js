import { add } from '../index';

describe('add', () => {
    test('over 1000', () => {
        const result = add(999, 1)
        expect(result).not.toBe(1000)
        expect(result).stringMatching('too big')
    });

    test('add max -1 arg', () => {
        const arr = Array(30).fill(1);
        const result = add(...arr)
        expect(result).toBe(30)
    });

    test('add max arg', () => {
        const arr = Array(31).fill(1);
        const result = add(...arr)
        expect(result).toThrow("over limit argument")
    });

    test('pass multiple mold', () => {
        const result = add(1, 5, "aa")
        expect(result).toThrow("error only accept number")
    });

    test('normal add', () => {
        const result = add(1, 5)
        expect(result).toBe(6);
    })
});