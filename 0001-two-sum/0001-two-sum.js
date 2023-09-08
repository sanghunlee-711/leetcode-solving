/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 투포인터해도 되고 -> 정렬이 안되어 있어서 안됨
// 걍 이중 반복문 돌려도 되고..
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i]+nums[j] === target) return [i,j];
        }
    }
    
};