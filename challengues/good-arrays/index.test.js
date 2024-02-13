const goodArray = require('./index');

describe('longestCommonPrefix', () => {
  it('should return an array of good arrays', () => {
    const t = 1;
    const cases =['ab']
    const expected = [
      'ab',
    ]
    expect(goodArray(t, cases)).toEqual(expected);
  });
  it('should return an array of good arrays', () => {
    const t = 4;
    const cases =[
      'ab',
      'ababbaba',
      'aabbaabbaabb',
      'abcaabbccaaabbbccc'
    ]
    const expected = [
      'ab',
      'abababa',
      'ababab',
      'abcabcabc'
    ]
    expect(goodArray(t, cases)).toEqual(expected);
  });
});