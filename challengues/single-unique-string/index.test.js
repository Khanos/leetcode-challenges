import biggestUniqueString from './index.js';

describe('biggestUniqueString', () => {
  it('should return the biggest unique string', () => {
    expect(biggestUniqueString('ABCDDDDEFGHI')).toBe('DEFGHI');
  });
});
