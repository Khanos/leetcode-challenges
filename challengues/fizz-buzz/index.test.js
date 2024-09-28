import fizzBuzz from "./index.js";

describe('fizzBuzz', () => {
  it('should return an array where answer[i] == "Fizz" if i is divisible by 3', () => {
    const n = 3
    const expectedResult = ["1", "2", "Fizz"]
    const result = fizzBuzz(n);
    expect(result).toEqual(expectedResult);
  });
});