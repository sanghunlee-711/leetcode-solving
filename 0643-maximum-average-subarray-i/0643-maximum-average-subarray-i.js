/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//길이 k인 부분배열의 최대 평균값을 구하라 
// subSum중 최대 값을 구하면 되겠네
var findMaxAverage = function(nums, k) {
    let start = 0, end = start + k;
    let maxSum = -Infinity;
    
    while(end <= nums.length) {
        let subSum = 0;
        
        for(let i = start; i < end; i++) {
            subSum += nums[i];
        }
        
        maxSum = Math.max(maxSum, subSum);
        
        start++ ;
        end = start + k;
    }
    
    return maxSum / k
};