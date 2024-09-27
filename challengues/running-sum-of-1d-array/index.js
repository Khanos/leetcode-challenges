/**
 * @param {number[]} nums
 * @return {number[]}
 */
export default function runningSum(nums) {
  const result = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    result.push(result[i-1] + nums[i])
  }
  return result;
}