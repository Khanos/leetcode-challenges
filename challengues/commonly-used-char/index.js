/**
 * Frist attempt
 * @param {string} str
 * @return {string}
 */
// const commonlyUsedChar = (str) => {
//   let hash = {};
//   let max = 0;
//   let maxChar = '';
//   for (let i = 0; i < str.length; i++) {
//     if (hash[str[i]]) {
//       hash[str[i]]++;
//     } else {
//       hash[str[i]] = 1;
//     }
//   }
//   for (let char in hash) {
//     if (hash[char] > max) {
//       max = hash[char];
//       maxChar = char;
//     }
//   }
//   return maxChar;
// }

/**
 * Second attempt
 * @param {string} str
 * @return {string}
 */
// const commonlyUsedChar = (str) => {
//   let hash = {};
//   let max = 0;
//   let maxChar = '';
//   for (let i = 0; i < str.length; i++) {
//     if (hash[str[i]]) {
//       hash[str[i]]++;
//     } else {
//       hash[str[i]] = 1;
//     }
//   }
//   return Object.entries(hash).reduce((acc, [key, value]) => {
//     if (value > max) {
//       max = value;
//       maxChar = key;
//     }
//     return maxChar;
//   }, '');
// }

/**
 * Third attempt
 * @param {string} str
 * @return {string}
 */
const commonlyUsedChar = (str) => {
  const hash = {};
  const result = str.split('').reduce((acc, char) => {
    hash[char] = hash[char] ? hash[char] + 1 : 1;
    if( hash[char] > acc.max ) {
      acc.max = hash[char];
      acc.maxChar = char;
    } else if (hash[char] === acc.max) {
      acc.maxChar += char;
    }
    return acc;
  }, {
    max: 0,
    maxChar: ''
  });
  return result.maxChar;
}

/**
 * Third attempt
 * @param {string} str
 * @return {string}
 */
const topThreeCommonlyUsedChars = (str) => {
  const hash = str.split('').reduce((acc, char) => {
    acc[char] = acc[char] ? acc[char] + 1 : 1;
    return acc;
  }, {});
  const result = Object.entries(hash).sort((a, b) => b[1] - a[1]).slice(0, 3);
  return {
    first: {
      char: result[0][0],
      reps: result[0][1]
    },
    second: {
      char: result[1][0],
      reps: result[1][1]
    },
    third: {
      char: result[2][0],
      reps: result[2][1]
    }
  };
}

export {
  commonlyUsedChar,
  topThreeCommonlyUsedChars,
};