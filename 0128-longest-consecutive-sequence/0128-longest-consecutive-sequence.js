/**
 * @param {number[]} nums
 * @return {number}
 */
//흐으음.. You must write an algorithm that runs in O(n) time.
// 1번 회문으로 set에 다 넣음
    // 2번 회문으로 Min 찾음
    // 3번 회문으로 min +1씩하면.. 안되겠넹 (1 345)면 안됨
// map으로 각 원소별 consecutive를 구한다해도 두번 돌아야하는데..
// 가장 쉬운방법은 정렬때리면 됨.

var longestConsecutive = function(nums) {
    if(!nums.length) return 0;
    nums = [...new Set(nums.sort((a,b) => a-b))];
    let len = 1,
        answer = 1;
    
    for(let i = 0; i < nums.length - 1; i++) {
        const curr = nums[i];
        
        if(curr + 1 === nums[i+1]) len += 1;  
        else len = 1;
        
        answer = Math.max(answer, len);
    }
    
    return answer;
};