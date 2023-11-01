/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let subSum = 0;
    
    for(let i = 0; i < k; i++) {
        subSum += nums[i];
    }
    
    
    let start = 0, end = k;
    let maxSum = Math.max(-Infinity, subSum);
    
    while(end < nums.length) {
          subSum -= nums[start];
          subSum += nums[end];
          end++;
          start++;
          maxSum = Math.max(maxSum, subSum);
    }
    
    return maxSum / k;
};