/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let n = nums.length,
        l = 0, r = 0;

    while(r < n) {
        nums[l] = nums[r];
        //expanding window until finding different char
        while(r < n && nums[r] === nums[l]) r++;
        l++;
    }

    return l;
};