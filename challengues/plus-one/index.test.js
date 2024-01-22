const plusOne = require('./index');

describe('plusOne', () => {
  it('should be a function', () => {
    expect(plusOne).toBeInstanceOf(Function);
  });

  it('should return [1] when input is [0]', () => {
    expect(plusOne([0])).toEqual([1]);
  });

  it('should return [1, 0] when input is [9]', () => {
    expect(plusOne([9])).toEqual([1, 0]);
  });

  it('should return [1, 0, 0] when input is [9, 9]', () => {
    expect(plusOne([9, 9])).toEqual([1, 0, 0]);
  });

  it('should return [1, 2, 4] when input is [1, 2, 3]', () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
  });

  it('should return [4, 3, 2, 2] when input is [4, 3, 2, 1]', () => {
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
  });

  it('should return [1, 0, 0, 0] when input is [9, 9, 9]', () => {
    expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
  });
});
