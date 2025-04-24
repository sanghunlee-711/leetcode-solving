/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = nums.reduce((a,b) => a+b, 0);
    if(sum % 2 !== 0) return false;
    const n = nums.length,
        target = sum / 2;
    //row: nums, col: sum, dp[r][c] = status
    const dp = Array.from({length: n + 1}, () => {
        return Array.from({length: target + 1}, () => false)
    })

    for(let i = 0; i <=n; i++) {
        dp[i][0] = true;
    }

    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= target; j++) {
            if(nums[i-1] <= j) {
                dp[i][j] = dp[i-1][j] || dp[i-1][j - nums[i-1]];
            } else {
                dp[i][j] = dp[i-1][j]
            }
        }
    }

    return dp[n][target]
};