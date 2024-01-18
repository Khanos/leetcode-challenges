function findSumPair(arr, targetSum) {
  // Create a map to store the elements and their indices
  const numMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complement = targetSum - arr[i];

    // Check if the complement exists in the map
    if (numMap.has(complement)) {
      // If yes, add the pair to the result
      return [arr[numMap.get(complement)], arr[i]];
    }

    // Store the current element and its index in the map
    numMap.set(arr[i], i);
  }

  return [0, 0];
}

module.exports = findSumPair;