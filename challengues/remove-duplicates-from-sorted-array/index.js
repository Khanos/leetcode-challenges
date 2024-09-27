/**
 * First Attempt
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let writePointer = 0;

  for (let readPointer = 1; readPointer < nums.length; readPointer++) {
    if (nums[readPointer] !== nums[writePointer]) {
      writePointer++;
      nums[writePointer] = nums[readPointer];
    }
  }

  return writePointer + 1;
};

/**
 * Second Attempt
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//   const set = new Set(nums);
//   return set.size;
// };

export default removeDuplicates;