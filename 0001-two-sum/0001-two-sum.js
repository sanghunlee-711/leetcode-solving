/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 1. 첫번째 회문에 해쉬 맵에 모두 값을 넣는다
// 2. 두번째 회문에 target - nums[i]의 값이 해쉬맵에 존재하는지 찾는다. //해쉬맵에서 값찾는 것은 O(1)
// 3. 있으면 반환한다.
var twoSum = function(nums, target) {
    const hash = new Map();
    nums.forEach((num, i)=> hash.set(num, i));
    
    for(let i = 0; i < nums.length; i++) {
        const targetInNums = target - nums[i];
        const isTargetIdxArr = hash.has(targetInNums) && hash.get(targetInNums) !== i;
        
        if(isTargetIdxArr) return [i, hash.get(targetInNums)];
    }
};
