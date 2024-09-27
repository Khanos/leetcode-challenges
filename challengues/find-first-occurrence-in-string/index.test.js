import strStr from './index.js';

describe('challengues/find-first-occurrence-in-string', () => {
  it('should return 2', () => {
    const result = strStr('laSJKHDZX,MNCVBLSKADJFHEOQWUPRYDSKLJFGHCMNZVBADESKJFGHEUIOWRYSDKLJFGCXMZNVBSALDKHJFGHIOWEURSLDKFGHJCXMNVBSDKLAJFGHJIEUGHFRLKSDFJCMNXBVASLDKJFASDKJFGHhello', 'll');
    expect(result).toEqual(151);
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