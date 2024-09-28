/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz1 = function(n) {
  const resultArray = new Array(n);
  for (let i = 0; i < n; i++) {
    if(divBy(i, 3) || divBy(i, 5)) {
      if(divBy(i, 3)) {
        if(divBy(i, 5)) {
          resultArray[i-1] = 'FizzBuzz'
        } else {
          resultArray[i-1] = 'Fizz'
        }
      } else {
        resultArray[i-1] = 'Buzz'
      }
    } else {
      resultArray[i-1] = `${i}`
    }
  };
  return resultArray;
};

const fizzBuzz2 = function(n) {
  const resultArray = new Array(n);
  for (let i = 1; i <= n; i++) {
    let value = '';
    if(i % 3 === 0) value += 'Fizz'
    if(i % 5 === 0) value += 'Buzz'
    resultArray[i-1] = value || `${i}`
  };
  return resultArray;
};

const fizzBuzz = function(n) {
  const resultArray = [];
  for (let i = 1; i <= n; i++) {
    let value = '';
    if(i % 3 === 0) value += 'Fizz'
    if(i % 5 === 0) value += 'Buzz'
    resultArray.push(value || `${i}`)
  };
  return resultArray;
};

export default fizzBuzz;