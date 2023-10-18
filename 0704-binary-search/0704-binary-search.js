/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Assertion way : Find optimized assertion position and check value existing
var search = function(nums, target) {
    let start = 0, end = nums.length;
    
    while(start < end) {
        const mid = Math.floor((start + end) / 2);
        
        if(nums[mid] <= target) start = mid+1;
        if(nums[mid] > target) end = mid;
    }
    
    if(start > 0 && nums[start - 1] === target) return start - 1;

    return -1;
};