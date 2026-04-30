import {
    removeElement,
    removeElement2,
} from "./index.js";

const setup = () => {
    const testCases = [
        { nums: [3, 2, 2, 3], val: 3, expected: 2 },
        { nums: [0, 1, 2, 2, 3, 0, 4, 2], val: 2, expected: 5 },
        { nums: [], val: 1, expected: 0 },
        { nums: [1, 1, 1], val: 1, expected: 0 },
    ];
    return testCases;
};

describe("removeElement functions", () => {
  const functions = [removeElement, removeElement2];

  functions.forEach((func, index) => {
    describe(`removeElement${index + 1}`, () => {
      const testCases = setup();
      testCases.forEach(({ nums, val, expected }, caseIndex) => {
        it(`should handle test case ${caseIndex + 1} correctly`, () => {
          const k = func(nums, val);
          expect(k).toBe(expected);
        });
      });
    });
  });
});
