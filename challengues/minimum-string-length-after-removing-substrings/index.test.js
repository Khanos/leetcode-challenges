import minLength from ".";

describe("Minimum String Length After Removing Substrings", () => {
  it('should return 2 for "ccdaabcdbb"', () => {
    const s = "ccdaabcdbb";
    expect(minLength(s)).toBe(2);
  });

  it('should return 0 for "aabccabba"', () => {
    const s = "aabccabba";
    expect(minLength(s)).toBe(0);
  });

  it('should return 1 for "aabbaaxybbaabb"', () => {
    const s = "aabbaaxybbaabb";
    expect(minLength(s)).toBe(1);
  });
});
