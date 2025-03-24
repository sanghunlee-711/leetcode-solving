/**
 * @param {number[]} nums
 * @return {number}
 //kadane's algorithm
 */
var maxSubArray = function(nums) {
  let currSum = 0,
        maxSum = nums[0];

  for(const num of nums) {
    currSum = Math.max(currSum, 0);
    currSum += num;
    maxSum = Math.max(currSum, maxSum);
  }

  return maxSum
};