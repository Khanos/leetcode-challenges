/**
 * @param {number[]} digits
 * @return {number[]}
 */
// const plusOne = function(digits) {
//   const result = [];
//   let carry = 1;
//   for (let i = digits.length - 1; i >= 0; i--) {
//     const sum = digits[i] + carry;
//     if(sum > 9) {
//       carry = 1;
//       result.unshift(0);
//     } else {
//       carry = 0;
//       result.unshift(sum);
//     }
//   }
//   return carry ? [carry, ...result] : result;
// };

/**
 * Second Attempt
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
  let number = BigInt(digits.join(''));
  number++;
  let result = [];
  for(let num of String(number)){
      result.push(Number(num));
  }
  return result;
};

export default plusOne;