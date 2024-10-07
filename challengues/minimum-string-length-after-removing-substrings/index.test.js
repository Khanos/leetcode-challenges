import {
  minLength,
  minLength2,
} from ".";

const testCases = [
  ["ABFCACDB", 2],
  ["ACBBD", 5],
];

const methods = [minLength, minLength2];

describe("Minimum String Length After Removing Substrings", () => {
  methods.forEach((method, index) => {
    test(`Method ${index}`, () => {
      testCases.forEach(([s, expected]) => {
        expect(method(s)).toBe(expected);
      });
    });
  });
});
