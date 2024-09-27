/**
 * First Attempt - 46ms 94.91%
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {
//   const stack = [];
//   const map = {
//     '(': ')',
//     '[': ']',
//     '{': '}'
//   };
  
//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];
    
//     if (map[char]) {
//       stack.push(map[char]);
//     } else if (char !== stack.pop()) {
//       return false;
//     }
//   }
  
//   return stack.length === 0;
// };

/**
 * First Attempt - 57ms 54.5%
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let i = 0; i < s.length; i++) {
    // If it's an opening bracket, push it to the stack
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    // If it's a closing bracket, pop the last element from the stack
    // and compare it with the current closing bracket
    } else if ((!stack.length || (stack.pop() !== map[s[i]]))) {
      return false;
    }
  }
  // If the stack is empty, it means that all the brackets were closed
  return stack.length === 0;
};

export default isValid;