/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 정렬이 되어있으므로 이진탐색 
 */
var search = function(nums, target) {
    const len = nums.length
    let left = 0, right = len - 1;

    while(left <= right) {
        const mid = Math.floor((left + right) / 2);

        if(nums[mid] === target) return mid;
        else if(nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
};