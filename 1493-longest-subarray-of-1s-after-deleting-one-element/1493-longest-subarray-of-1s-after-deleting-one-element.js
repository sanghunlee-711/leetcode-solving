/**
 * @param {number[]} nums
 * @return {number}
 */

var longestSubarray = function(nums) {
    let start = 0, 
        end = 0,
        deleteCount = 0,
        max = 0,
        isZeroExist = false;
    
    while(end < nums.length) {
        if(!isZeroExist && (nums[start] === 0 || nums[end] === 0)) isZeroExist = true;
        if(nums[end] === 0 && deleteCount === 1) {
            if(nums[start] === 0) deleteCount = 0;
            start++;
            continue;
        }
        
        if(nums[end] === 0 && deleteCount === 0) {
            deleteCount = 1;
        }
        
        max = Math.max(max, end - start + 1 - deleteCount);
        end++;

    }
    
    return isZeroExist ? max : nums.length - 1;
};