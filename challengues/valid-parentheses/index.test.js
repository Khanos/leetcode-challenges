const isValid = require('./index');

describe('Valid Parentheses', () => {
  test('({{{}}}) is valid', () => {
    expect(isValid('({{{}}})')).toBe(true);
  });

  test('() is valid', () => {
    expect(isValid('()')).toBe(true);
  });

  test('()[]{} is valid', () => {
    expect(isValid('()[]{}')).toBe(true);
  });

  test('(] is not valid', () => {
    expect(isValid('(]')).toBe(false);
  });

  test('([)] is not valid', () => {
    expect(isValid('([)]')).toBe(false);
  });

  test('{[]} is valid', () => {
    expect(isValid('{[]}')).toBe(true);
  });

  test('empty string is valid', () => {
    expect(isValid('')).toBe(true);
  });

  test('single character is not valid', () => {
    expect(isValid('[')).toBe(false);
  });

  test('single character is not valid', () => {
    expect(isValid(']')).toBe(false);
  });
});