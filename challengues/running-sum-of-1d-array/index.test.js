import runningSum from './index.js'

describe('runningSum', () => {
  it('should return the running sum of the array', () => {
    const nums = [1, 2, 3, 4];
    const result = runningSum(nums);
    expect(result).toEqual([1, 3, 6, 10]);
  });
});