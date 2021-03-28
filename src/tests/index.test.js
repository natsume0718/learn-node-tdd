import { add, multiply, subtract, divide } from '../index';

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
        const arr = Array(30).fill(1);
        const result = multiply(...arr)
        expect(result).toBe(Math.pow(1, 30))
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

describe('subtract', () => {
    test('nagative', () => {
        const result = subtract(10, 2, 3, 10)
        expect(result).not.toBe(-5)
        expect(result).toBe('negative number')
    });

    test('subtract max -1 arg', () => {
        const arr = Array(30).fill(100, 0, 1).fill(1, 1, 30);
        const result = subtract(...arr)
        expect(result).toBe(71)
    });

    test('subtract max arg', () => {
        const arr = Array(31).fill(2);
        expect(() => subtract(...arr)).toThrow("over limit argument")
    });

    test('pass multiple mold', () => {
        expect(() => subtract(1, 5, "aa")).toThrow("error only accept number")
    });

    test('normal subtract', () => {
        const result = subtract(10, 2, 3)
        expect(result).toBe(5);
    })
});
describe('divide', () => {
    test('0 divide', () => {
        expect(() => divide(10, 0)).toThrow('cant divide with 0')
    });

    test('divide max -1 arg', () => {
        const arr = Array(30).fill(100, 0, 1).fill(1, 1, 30);
        const result = divide(...arr)
        expect(result).toBe(100)
    });

    test('divide max arg', () => {
        const arr = Array(31).fill(2);
        expect(() => divide(...arr)).toThrow("over limit argument")
    });

    test('pass multiple mold', () => {
        expect(() => divide(10, 2, "aa")).toThrow("error only accept number")
    });

    test('normal divide', () => {
        const result = divide(10, 2, 4)
        expect(result).toBe(1.25);
    })

    test('Round divide', () => {
        const result = divide(10, 3)
        expect(result).toBe(3.33);
    })
});