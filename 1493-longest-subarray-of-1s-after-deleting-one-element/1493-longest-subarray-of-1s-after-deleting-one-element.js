/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let zeroCount = 0,
        windowVolume = 0,
        start = 0;
    
    for(let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        
        if(curr === 0) zeroCount += 1;
        
        //modify window volume
        while(zeroCount > 1) {
            const startNum = nums[start];
            
            if(startNum === 0) zeroCount -= 1;
            
            start++;
        }
        
        windowVolume = Math.max(windowVolume, i - start);
    }
    
    return windowVolume
};