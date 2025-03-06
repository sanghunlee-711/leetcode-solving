/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 // 해쉬로 값을 흠..
 // curr의 마이너스값을 해쉬에서 가지고 있다고 보고 그 idx를 가져온다면
 */
var twoSum = function(nums, target) {
    const map = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        const rest = target - nums[i];
        if(map.has(rest)) return [map.get(rest), i]

        map.set(nums[i], i)
    }
};