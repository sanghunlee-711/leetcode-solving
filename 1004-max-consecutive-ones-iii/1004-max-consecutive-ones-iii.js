/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/*
1이 나오면 end를 계속 늘릴 수 있음
0이나오면 k만큼 filp을 할 수 있으니 k를 까고 길이를 계속 늘림 -> 이때 첫번째 flip한 포지션 기억해놓기
현재 값이 0인데 flip할 수 있는 값이 0인 경우 -> 첫번째 flip한 포지션으로 start옮기고 다시 시작..
end가 끝까지 갈때까지 진행!
*/


// [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]
// 3

//최대 윈도우 사이즈에서 줄일 이유가 없으므로 아래와 같이 모든 k가 소모되면 start만 한칸 올리고 k를 채워줌.

var longestOnes = function(nums, k) {    
    // edge case
    if(k >= nums.length) return nums.length;
    
    let start = 0, end = 0;
    
    while(end < nums.length) {
        if(nums[end] === 0) k--;
        if(k < 0) {
            if(nums[start] === 0) k += 1;    
            
            start++;
        }
        
        end++;
    }
    return end - start;
};