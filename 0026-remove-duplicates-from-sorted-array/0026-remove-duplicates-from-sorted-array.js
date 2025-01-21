/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let checkIdx = 1;

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i-1]) {
            nums[checkIdx] = nums[i];
            checkIdx += 1;
        }
    }
    
    //gc
    for(let j = checkIdx; j < nums.length; j++) {
        nums[j] = null;
    }

    return checkIdx
};