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
    
    let maxSum = subSum;
    
    for(let j = k; j < nums.length; j++){
        subSum = subSum - nums[j-k] + nums[j];
        
        maxSum = Math.max(subSum, maxSum);
    }
    
    return maxSum / k
};

