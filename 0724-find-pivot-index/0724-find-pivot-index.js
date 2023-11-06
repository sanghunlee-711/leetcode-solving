/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = nums.reduce((acc,num)=>{
        acc += num
        return acc;
    },0),
        leftSum = 0;
    
    
    for(let i = 0; i < nums.length; i++) {
        if(leftSum === sum - leftSum - nums[i]) return i;
        leftSum += nums[i];
    }
    
    return -1;
};