/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const len = nums.length;
    const res = new Array(2*len);
    for(let i = 0; i < len; i++) {
        res[i] = nums[i];
        res[i+len] = nums[i];
    }

    return res
};