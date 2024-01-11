const removeDuplicates = require('./index');

describe('removeDuplicates', () => {
  it('should return 2', () => {
    expect(removeDuplicates([1,1,2])).toBe(2);
  });
  it('should return 5', () => {
    expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toBe(5);
  });
  it('should return 1', () => {
    expect(removeDuplicates([1])).toBe(1);
  });
});