/**
 * fastest attempt
 * @param {string} t
 * @param {string[]} cases
 * @return {string}
 */
// First attempt
// var goodArray = function(t, cases) {
//   const goodArrays = [];
//   for (let i = 0; i < t; i++) {
//     const strArray = cases[i].split('');
//     let goodArray = '';
//     for (let j = 0; j < strArray.length; j++) {
//       if (strArray[j] !== strArray[j+1]) {
//         goodArray += strArray[j];
//       }
//     }
//     goodArrays.push(goodArray);
//   }
//   return goodArrays
// };

// Second attempt
var goodArray = function(t, cases) {
  const goodArrays = [];
  for (let i = 0; i < t; i++) {
    const strArray = cases[i]; // accessing the string directly
    let goodArray = []; // using an array to store the good array
    for (let j = 0; j < strArray.length; j++) {
      if (strArray[j] !== strArray[j+1]) {
        goodArray.push(strArray[j]);
      }
    }
    goodArrays.push(goodArray.join('')); // joining the array to return a string
  }
  return goodArrays
};

export default goodArray;