/**
 * Frist attempt
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function(strs) {
//   let prefix = "";
//   let index = 0;
//   for(let chart of strs[0]){
//     for(let i = 1; i < strs.length; i++){
//       if(strs[i][index] !== chart){
//         return prefix;
//       }
//     }
//     prefix += chart;
//     index++;
//   }
//   return prefix;
// };

/**
 * Second attempt
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";
  // Assume the first string is the prefix
  let prefix = strs.sort[0];
  // check if the prefix is in the other strings
  for (let i = 1; i < strs.length; i++) {
      // while the prefix is not in the string
      while (strs[i].indexOf(prefix) !== 0) {
          // remove the last character of the prefix
          prefix = prefix.substring(0, prefix.length - 1);
          // if the prefix is empty, return empty string
          if (prefix === "") return "";
      }
  }
  return prefix;
};

module.exports = longestCommonPrefix;