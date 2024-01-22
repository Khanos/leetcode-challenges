/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// const strStr = function(haystack, needle) {
//   if( !haystack.includes(needle) ) return -1;
//   return haystack.indexOf(needle);
// };

/**
 * Second Attemopt
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
  for(let i = 0; i < haystack.length; i++) {
    if(haystack.substring(i, i + needle.length) === needle) return i;
  }
  return -1;
};

module.exports = strStr;