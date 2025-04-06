/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 1;
    let startIdx = 1;

    while(i < nums.length) {
        if(nums[i] !== nums[i-1]){
            nums[startIdx] = nums[i]
            startIdx++;
        }
        i++;
    }

    return startIdx;
};