/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 //2차원 dp구조 생각하면 됨
 동일한 문자인 경우 대각 오른쪽 아래
 그렇지 않은경우 우측하나 아래측 하나 진행하면 됨
 */
var longestCommonSubsequence = function(text1, text2) {
    const ROWS = text1.length,
        COLS = text2.length;
    const dp = Array.from({length: ROWS}, () => {
        return Array.from({length: COLS}, () => -1)
    });


    function dfs(i, j) {
        if(i >= ROWS || j >= COLS) return 0;
        if(dp[i][j] !== -1) return dp[i][j]
        
        if(text1[i] == text2[j]) {
            dp[i][j] = 1+dfs(i+1, j+1);
        }

        if(text1[i] != text2[j]) {
            dp[i][j] = Math.max(dfs(i+1, j), dfs(i, j+1))
        }
        return dp[i][j]
    }
    return dfs(0,0)
};