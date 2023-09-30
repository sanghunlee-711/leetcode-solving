/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    
    let longestStreak = 0;
    
    for(let i = 0; i < nums.length; i++) { 
        const num = nums[i];
        
        //연속된 값의 최소가 되는 경우부터 카운트 하기 위해서 더 작은 연속수가 있으면 스킵!
        if(set.has(num - 1)) continue;
                
        let currentNum = num;
        let currentStreak = 1;
        //위 if조건문으로 연속되지 않는경우 모두 while문에 들어오기 전에 컷이 되기 때문에 최대 복잡도로 따져도 while문의 n + for문의 n이 된다.
        while(set.has(currentNum + 1)) {
            currentNum += 1;
            currentStreak += 1;
        }

        longestStreak = Math.max(longestStreak, currentStreak);
        
    }
    
    return longestStreak;
};