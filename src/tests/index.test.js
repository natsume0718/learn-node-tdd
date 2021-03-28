import { add, multiply } from '../index';

describe('add', () => {
    test('over 1000', () => {
        const result = add(1000, 1)
        expect(result).not.toBe(1001)
        expect(result).toBe('too big')
    });

    test('add max -1 arg', () => {
        const arr = Array(30).fill(1);
        const result = add(...arr)
        expect(result).toBe(30)
    });

    test('add max arg', () => {
        const arr = Array(31).fill(1);
        expect(() => add(...arr)).toThrow("over limit argument")
    });

    test('pass multiple mold', () => {
        expect(() => add(1, 5, "aa")).toThrow("error only accept number")
    });

    test('normal add', () => {
        const result = add(1, 5)
        expect(result).toBe(6);
    })
});

describe('multiply', () => {
    test('over 1000', () => {
        const result = multiply(1000, 2)
        expect(result).not.toBe(2000)
        expect(result).toBe('big big number')
    });

    test('multiply max -1 arg', () => {
        const arr = Array(30).fill(2);
        const result = multiply(...arr)
        expect(result).toBe(Math.pow(2, 30))
    });

    test('multiply max arg', () => {
        const arr = Array(31).fill(2);
        expect(() => multiply(...arr)).toThrow("over limit argument")
    });

    test('pass multiple mold', () => {
        expect(() => multiply(1, 5, "aa")).toThrow("error only accept number")
    });

    test('normal multiply', () => {
        const result = multiply(2, 5)
        expect(result).toBe(10);
    })
});