/**
 * @param {string} s
 * @return {string}
 */
const reformat = function(s) {
  const numbers = s.match(/\d/g) || [];
  const letters = s.match(/[a-z]/g) || [];
  if (numbers.length === 0 || letters.length === 0) return "";
  if (Math.abs(numbers.length - letters.length) > 1) return "";
  
  let first, second;
  if (numbers.length > letters.length) {
    first = numbers;
    second = letters;
  } else {
    first = letters;
    second = numbers;
  }
  
  let result = '';
  for (let i = 0; i < s.length; i++) {
    result += i % 2 === 0 ? first.shift() : second.shift();
  }
  
  return result;
};

export default reformat;