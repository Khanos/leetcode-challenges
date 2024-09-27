import {findSumPair} from './findSumPair.js';

describe('findSumPair', () => {
  it('should return an empty array if no pair is found', () => {
    const arr = [1, 2, 3, 4, 5];
    const targetSum = 10;

    expect(findSumPair(arr, targetSum)).toEqual([0, 0]);
  });

  it('should return an array with the pair if a pair is found', () => {
    const arr = [1, 1, 3, 4, 5];
    const targetSum = 7;

    expect(findSumPair(arr, targetSum)).toEqual([3,4]);
  });
});
