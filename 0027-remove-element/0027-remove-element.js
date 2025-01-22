/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    const temp = []
    let j = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) {
            temp[j] = nums[i];
            j++;
        }
    }

    for(let i = 0; i < nums.length; i++) {
        nums[i] = temp[i];
    }

    return temp.length;
};