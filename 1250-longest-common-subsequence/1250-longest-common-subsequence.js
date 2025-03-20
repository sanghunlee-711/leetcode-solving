/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 tabulation-> ✅

 */
// var longestCommonSubsequence = function(text1, text2) {
//     const ROWS = text1.length, COLS = text2.length;

//     const dp = Array.from({length: text1.length}, () => Array.from({length: text2.length}, () => -1))

//     function dfs(i, j) {
//         if(i >= ROWS || j >= COLS) return 0;
//         if(dp[i][j] > -1) return dp[i][j];
        
//         if(text1[i] === text2[j]) {
//             dp[i][j] = dfs(i+1, j+1) + 1
//         } else {
//             dp[i][j] = Math.max(dfs(i+1, j), dfs(i, j+1));
//         }

//         return dp[i][j]
//     }

//     dfs(0, 0);

//     return dp[0][0]
// };

/**
bottomup
 */
 var longestCommonSubsequence = function(text1, text2) {
    const ROWS = text1.length, COLS = text2.length;

    const dp = Array.from({length: ROWS + 1}, () => Array.from({length: COLS+1}, () => 0))

    for(let i = ROWS - 1; i >= 0; i--) {
        for(let j = COLS -1; j >= 0; j--) {
            if(text1[i] === text2[j]) {
                dp[i][j] = 1 + dp[i+1][j+1];
            } else {
                dp[i][j] = Math.max(dp[i][j+1], dp[i+1][j]);
            }
        }
    }

    return dp[0][0]
};