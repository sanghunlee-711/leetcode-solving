/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const length = nums.length;
    const answer = Array.from({length}, () => null);
    
    answer[0] = 1;
    
    //left part multiple
    for(let i = 1; i < length; i++) {
        answer[i] = answer[i-1] * nums[i-1];
    }
    
    // R array is replaced with variable
    let R = 1;
    
    for(let i = length - 1; i >= 0; i--) {
        answer[i] = answer[i] * R;
        R *= nums[i]
    }
    
    return answer;
};