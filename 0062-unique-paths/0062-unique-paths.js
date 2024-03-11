/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 이게.. dp 문제면 점화식부터
// dp(m,n) =  dp(m-1,n) + dp(m, n-1);
var uniquePaths = function(m, n) {
    const dp = Array.from({length: m}, () => Array.from({length:n}, () => 1));
    
    for(let col = 1; col < m; col++) {
        for(let row = 1; row < n; row++) {
            dp[col][row] = dp[col - 1][row] + dp[col][row - 1];
        }
    }
    
    return dp[m-1][n-1];
};