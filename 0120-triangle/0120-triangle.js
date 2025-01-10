/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const len = triangle.length;

    //마지막 열 초기화
    const dp = triangle[len - 1].slice();

    for(let row = len - 2; row >= 0; row--) {
        for(let col = 0; col <= row; col++) {
            dp[col] = triangle[row][col] + Math.min(dp[col], dp[col +1])
        }
    }
    
    return dp[0]
};