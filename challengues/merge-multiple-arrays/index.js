const generateCombinations = (arrayList, currentCombination = '', currentIndex = 0) => {
  const combinations = [];
  if (currentIndex === arrayList.length) {
    return [currentCombination];
  }
  for (let i = 0; i < arrayList[currentIndex].length; i++) {
    const currentArray = arrayList[currentIndex];
    const currentElement = currentArray[i];
    const nextCombination = currentCombination + currentElement;
    const nextIndex = currentIndex + 1;
    const nextCombinations = generateCombinations(arrayList, nextCombination, nextIndex);
    combinations.push(...nextCombinations);
  }
  return combinations;
};


/**
 * Merges the input arrays and returns an array of strings.
 * @param {string[][]} arrays - The input array of arrays.
 * @returns {string[]} - The merged array of strings.
 */
function mergeArrays(arrays) {
  const combinations = generateCombinations(arrays);
  const sortedCombinations = combinations.sort();
  return sortedCombinations;
}

module.exports = mergeArrays;