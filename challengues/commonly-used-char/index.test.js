import {commonlyUsedChar, topThreeCommonlyUsedChars} from './index';

describe('commonlyUsedChar', () => {
  it('should be defined', () => {
    expect(commonlyUsedChar).toBeDefined();
  });
  it('should return "a" for "aaaa"', () => {
    expect(commonlyUsedChar("aaaa")).toBe("a");
  });
  it('should return "ab" for "aabbcc"', () => {
    expect(commonlyUsedChar("aabbcc")).toBe("abc");
  });
  it('should return "f" for "lkascnmlkanflfansfffffkjffifuftyftfifif"', () => {
    expect(commonlyUsedChar("lkascnmlkanflfansfffffkjffifuftyftfifif")).toBe("f");
  });
});

describe('topThreeCommonlyUsedChars', () => {
  it('should be defined', () => {
    expect(topThreeCommonlyUsedChars).toBeDefined();
  });
  it('should return an array with the top 3 commonly used chars', () => {
    const result = topThreeCommonlyUsedChars("aaaabbbccdefghijk");
    expect(result.first.char).toBe("a");
    expect(result.first.reps).toBe(4);
    expect(result.second.char).toBe("b");
    expect(result.second.reps).toBe(3);
    expect(result.third.char).toBe("c");
    expect(result.third.reps).toBe(2);
  });
});
