/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0, n = nums.length;

    while(i < n) {
        if(nums[i] === val) {
            n -= 1;
            nums[i] = nums[n];
        }else {
            i++;
        }
    }

    return n;
};