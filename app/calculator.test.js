const { add, subtract, multiply, divide } = require('./calculator');

describe('Calculator functions', () => {
  test('adds two numbers', () => {
    expect(add(3, 4)).toBe(7);
  });

  test('subtracts two numbers', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('multiplies two numbers', () => {
    expect(multiply(2, 5)).toBe(10);
  });

  test('divides two numbers', () => {
    expect(divide(20, 4)).toBe(5);
  });

  test('throws error on divide by zero', () => {
    expect(() => divide(5, 0)).toThrow('Cannot divide by zero.');
  });
});
