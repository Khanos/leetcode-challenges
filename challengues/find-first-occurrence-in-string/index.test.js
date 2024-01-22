const strStr = require('./index');

describe('challengues/find-first-occurrence-in-string', () => {
  it('should return 2', () => {
    console.time('Execution Time');
    const result = strStr('laSJKHDZX,MNCVBLSKADJFHEOQWUPRYDSKLJFGHCMNZVBADESKJFGHEUIOWRYSDKLJFGCXMZNVBSALDKHJFGHIOWEURSLDKFGHJCXMNVBSDKLAJFGHJIEUGHFRLKSDFJCMNXBVASLDKJFASDKJFGHhello', 'll');
    expect(result).toEqual(151);
    console.timeEnd('Execution Time');
  });

  it('should return -1', () => {
    expect(strStr('aaaaa', 'bba')).toEqual(-1);
  });

  it('should return 0', () => {
    expect(strStr('a', '')).toEqual(0);
  });

  it('should return -1', () => {
    expect(strStr('aaa', 'aaaa')).toEqual(-1);
  });
});