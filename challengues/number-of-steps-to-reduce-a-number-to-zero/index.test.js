import {
  numberOfSteps,
  numberOfSteps2,
  numberOfSteps3,
  numberOfSteps4,
} from "./index.js";

describe('#numberOfSteps', () => {
  const testCases = [
    { num: 14, expected: 6 },
    { num: 8, expected: 4 },
    { num: 123, expected: 12 },
    { num: 1, expected: 1 },
    { num: 0, expected: 0 },
  ];

  testCases.forEach(({ num, expected }) => {
    it(`should return ${expected} steps to reduce ${num} to zero`, () => {
      expect(numberOfSteps(num)).toEqual(expected);
      expect(numberOfSteps2(num)).toEqual(expected);
      expect(numberOfSteps3(num)).toEqual(expected);
      expect(numberOfSteps4(num)).toEqual(expected);
    });
  });
});