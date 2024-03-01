/// ABCD D D DEFGHIO 

const biggestUniqueString = (str) => {
  let currentString = '';
  let biggestString = '';
  for(let i = 0; i < str.length; i++) {
    if(currentString.includes(str[i])) {
      currentString = '';
    }
    currentString += str[i];
    if(currentString.length >= biggestString.length) {
      biggestString = currentString;
    }
  }
  return biggestString;
};

// const biggestUniqueString = (str) => {
//   let currentStr = '';
//   const uniqueStrArray = [];
//   for(let i=0; i < str.length; i++) {
//     if(currentStr.includes(str[i])) {
//       uniqueStrArray.push(currentStr);
//       currentStr = '';
//     }
//     currentStr += str[i];

//     if(i === str.length - 1) {
//       uniqueStrArray.push(currentStr);
//     }
//   }
//   const uniqueStr = [...new Set(uniqueStrArray)];
//   return uniqueStr.sort((a, b) => b.length - a.length)[0];
// };
module.exports = biggestUniqueString;