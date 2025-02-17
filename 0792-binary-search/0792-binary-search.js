/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * T.C: request O(lon n) -> Binary search
 */
var search = function(nums, target) {
    let L = 0, R = nums.length - 1;

    while(L <= R) {
        const mid = Math.floor((L+R)/ 2);
        const curr = nums[mid];

        if(target > curr) {
            L = mid + 1;
        }else if(target < curr) {
            R = mid - 1;
        }else {
            return mid;
        }
    }
    return -1;
};