const biggestUniqueString = require('./index');

describe('biggestUniqueString', () => {
  it('should return the biggest unique string', () => {
    expect(biggestUniqueString('ABCDDDDEFGHI')).toBe('DEFGHI');
  });
});
