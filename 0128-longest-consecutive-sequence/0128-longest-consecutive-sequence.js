/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set();
    
    nums.forEach((num) => set.add(num));
    
    let longestStreak = 0;
    
    for(let i = 0; i < nums.length; i++) { 
        const num = nums[i];
        
        if(!set.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;
            
            while(set.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }
            
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    
    return longestStreak;
};