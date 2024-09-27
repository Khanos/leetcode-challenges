/**
 * First attempt
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//     return x.toString().split('').reverse().join('') === x.toString();
// };

/**
 * Second attempt
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
    let reversed = 0;
    let original = x;

    while (x !== 0) {
      // Multiply reversed by 10 to move the decimal place to the right
      reversed = reversed * 10 + x % 10;
      // Remove the last digit from x
      x = Math.floor(x / 10);
    }

    return reversed === original;
};

export default isPalindrome;