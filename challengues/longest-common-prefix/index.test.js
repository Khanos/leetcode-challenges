const longestCommonPrefix = require('./index');

describe('longestCommonPrefix', () => {
  it('should return "fl" when input is ["flower","flow","flight"]', () => {
    expect(longestCommonPrefix(["flower","flow","flight"])).toBe('fl');
  });

  it('should return "" when input is ["dog","racecar","car"]', () => {
    expect(longestCommonPrefix(["dog","racecar","car"])).toBe('');
  });

  it('should return "" when input is [""]', () => {
    expect(longestCommonPrefix([""])).toBe('');
  });

  it('should return "a" when input is ["a"]', () => {
    expect(longestCommonPrefix(["a"])).toBe('a');
  });

  it('should return "" when input is ["","b"]', () => {
    expect(longestCommonPrefix(["","b"])).toBe('');
  });
});