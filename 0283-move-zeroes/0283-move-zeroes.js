/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 투포인터로 접근해보자
var moveZeroes = function(nums) {
    let start = 0, end = 1;
    
    while(end < nums.length) {
        if(nums[start] !== 0) {
            start++; 
            end ++;
        } else {
            if(nums[end] !== 0) {
                // swap
                [nums[start], nums[end]] = [nums[end], nums[start]]
                start++;
            }
            end++;
        }
    }
    
    return nums;
};