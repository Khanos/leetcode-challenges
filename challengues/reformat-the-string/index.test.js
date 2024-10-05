import reformat from ".";

describe('#reformat', () => {
  it('should return the reformat string', () => {
    expect(reformat("a0b1c2")).toBe("a0b1c2");
    expect(reformat("leetcode")).toBe("");
    expect(reformat("1229857369")).toBe("");
    expect(reformat("covid2019")).toBe("c2o0v1i9d");
    expect(reformat("ab123")).toBe("1a2b3");
  });
});