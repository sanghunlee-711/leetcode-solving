/**
 * @param {number[]} nums
 * @return {number}
 */
// 윈도우의 크기가 늘어난 뒤에 줄 필요가 있는가? -> X 
// 1개의 0을 삭제했을때 최대길이가 된 경우에서 윈도우의 start, end를 이동시키면 될 것 같다.
// 


var longestSubarray = function(nums) {
    let start = 0, end = 0;
    let deleteCount = 0;
    let max = 0;
    
    while(end < nums.length) {
        if(nums[end] === 0 && deleteCount === 1) {
            if(nums[start] === 0) deleteCount = 0;
            start++;
            continue;
        }
        
        if(nums[end] === 0 && deleteCount === 0) {
            deleteCount = 1;            
        }
        
        max = Math.max(max, end - start + 1 - deleteCount);
        end++;
    }
    
    
    return max === nums.length ? max - 1 : max;
};