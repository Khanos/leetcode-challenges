const mergeArrays = require('./index.js');

describe('mergeArrays', () => {
  it('is a function', () => {
    expect(typeof mergeArrays).toEqual('function');
  });

  it('returns an array', () => {
    let returnedValue = mergeArrays([['a', 'b'], ['1', '2'], ['X', 'Y']]);
    expect(Array.isArray(returnedValue)).toEqual(true);
  });

  it('returns an array of strings', () => {
    let returnedValue = mergeArrays([['a', 'b'], ['1', '2'], ['X', 'Y']]);
    expect(returnedValue.every((element) => typeof element === 'string')).toEqual(true);
  });

  it('returns an array of strings that contains the correct values', () => {
    let returnedValue = mergeArrays([['a', 'b'], ['1', '2'], ['X', 'Y']]);
    expect(returnedValue).toEqual(['a1X', 'a1Y', 'a2X', 'a2Y', 'b1X', 'b1Y', 'b2X', 'b2Y']);
  });

  it('returns an array of strings that contains the correct values', () => {
    let returnedValue = mergeArrays([['A', 'B'], ['C', 'D']]);
    expect(returnedValue).toEqual(['AC', 'AD', 'BC', 'BD']);
  });

  it('returns an array of strings that contains the correct values', () => {
    let returnedValue = mergeArrays([['1', '2'], ['a', 'b', 'c']]);
    expect(returnedValue).toEqual(['1a', '1b', '1c', '2a', '2b', '2c']);
  });
});
