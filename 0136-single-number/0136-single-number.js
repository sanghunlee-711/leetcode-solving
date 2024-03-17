/**
 * @param {number[]} nums
 * @return {number}
 */
// O(N) + S(1)
// 합을 해야하나..
// 공간 상수를 어케하징
// 사실 S(N)으로 하면 금방할텐데
var singleNumber = function(nums) {
    const map = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        map.set(curr,(map.get(curr) || 0) + 1);
    }
    
    let answer = null;
    
    Array.from(map.entries()).forEach(([key,value]) => {
        if(value === 1) answer = key; 
    })
    
    return answer;
};