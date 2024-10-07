/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
  if(s.includes('AB')) {
    return minLength(s.replace('AB', ''));
  }
  if(s.includes('CD')) {
    return minLength(s.replace('CD', ''));
  }
  return s.length;
};

var minLength2 = function(s) {
  let result = s;
  while (result.includes('AB') || result.includes('CD')) {
    if(result.includes('AB')) {
      result = result.replace('AB', '');
    } else {
      result = result.replace('CD', '');
    }
  }
  return result.length;
};

export {
  minLength,
  minLength2,
};