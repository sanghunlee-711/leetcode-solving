/**
 * @param {number[]} nums
 * @return {number}

 f(n) = Math.max(f(n+1) + nums[n], f(n+2));
bottom up ??
 */

var rob = function(nums) {
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];

    const dp = Array.from({length: nums.length}, (_, i) => 0);

    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    
    for(let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1]);
    }

    return dp[nums.length - 1];
 };