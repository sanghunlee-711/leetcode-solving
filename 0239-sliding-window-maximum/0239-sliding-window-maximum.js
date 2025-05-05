/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 //bf로는 회문 두번 돌면? O(N*K)
 monotonic Queue ,, 덱에서 현재값보다 작은값을 항상 제거
 */
var maxSlidingWindow = function(nums, k) {
    const result = [];
    const queue = [];

    for(let i = 0; i < nums.length; i++) {
        // 항상 큰값을 queue에 유지할거임
        while(queue.length && nums[queue[queue.length - 1]] < nums[i]){
            queue.pop();
        }
        queue.push(i);
        //윈도우 범위에 없는 값은 제거
        if(queue[0] <= i - k) queue.shift();

        //항상 큰값 유지할거니까 i가 k-1 이상이되면 답
        if(i >= k - 1) result.push(nums[queue[0]]);
    }

    return result;
};