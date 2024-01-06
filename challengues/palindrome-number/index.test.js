const isPalindrome = require('./index');

describe('isPalindrome', () => {
  test('isPalindrome function is defined', () => {
    expect(typeof isPalindrome).toEqual('function');
  });

  test('isPalindrome handles 121', () => {
    expect(isPalindrome(121)).toEqual(true);
  });

  test('isPalindrome handles -121', () => {
    expect(isPalindrome(-121)).toEqual(false);
  });

  test('isPalindrome handles 10', () => {
    expect(isPalindrome(10)).toEqual(false);
  });

  test('isPalindrome handles -101', () => {
    expect(isPalindrome(-101)).toEqual(false);
  });
});