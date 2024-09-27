/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanToIntMap = {
    I: 1, 
    V: 5, 
    X: 10, 
    L: 50, 
    C: 100, 
    D: 500, 
    M: 1000
  };
  return s.split('').reduce((acc, curr, index, arr) => {
    // Check if is last element
    if (index === arr.length - 1) {
      return acc + romanToIntMap[curr];
    }
    // Check if current element is less than next element
    // If true, subtract current element from accumulator
    // Example: 
    // IV = 5 - 1 = 4 
    // IX = 10 - 1 = 9 
    // XL = 50 - 10 = 40
    if (romanToIntMap[curr] < romanToIntMap[arr[index + 1]]) {
      return acc - romanToIntMap[curr];
    }
    // Else, add current element to accumulator
    return acc + romanToIntMap[curr];
  }, 0);
};

export default romanToInt;