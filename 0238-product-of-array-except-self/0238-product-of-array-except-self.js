/**
 * @param {number[]} nums
 * @return {number[]}
 */
// L -> L[i] = L[i-1] * nums[i-1]; // i > 0
// R -> R[i] = R[i+1] * nums[i+1]; // i < nums.length - 1;
var productExceptSelf = function(nums) {
    const length = nums.length;
    const L = Array.from({length}, () => null);
    const R = Array.from({length}, () => null);
    const answer = Array.from({length}, () => null);
    
    L[0] = 1;
    R[length - 1] = 1;
    
    for(let i = 1; i < nums.length; i++) {
        L[i] = L[i-1] * nums[i-1];
    }
    
    for(let i = length - 2; i >= 0; i--) {
        R[i] = R[i+1] * nums[i+1];
    }
    
    for(let i = 0; i < nums.length; i++) {
        answer[i] = L[i] * R[i];
    }
    
    return answer;
};