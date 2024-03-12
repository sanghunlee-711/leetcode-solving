/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
//common subsequences는 순서와 문자가 모두 같아야함(문자가 같고 순서가 다르면 탈락!)
// BF -> TLE
// dp[m][n] = Math.max
var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length,
          n = text2.length;
    
    const dp = Array.from({length: m+1}, () => Array.from({length:n+1}, ()=> 0));
    
    
    for(let col = n-1; col >=0; col--) {
        for(let row = m-1; row >=0 ; row--) {
            if(text1[row] === text2[col]) {
                dp[row][col] = dp[row+1][col+1] + 1;
            } else {
                dp[row][col] = Math.max(dp[row+1][col], dp[row][col+1]);
            }
        }
    }
    
    return dp[0][0];
};