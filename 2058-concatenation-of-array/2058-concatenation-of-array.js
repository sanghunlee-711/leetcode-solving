/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const len = nums.length;
    return Array.from({length: len * 2}, (_,i) => nums[i % len]);
};