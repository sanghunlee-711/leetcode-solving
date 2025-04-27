/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    const [N,M,L] = [s1.length, s2.length, s3.length];

    if(N+M !== L) return false;

    const dp = Array.from({length: N+1}, () => Array(M+1).fill(false));
    //끝에 도달하면 무조건 true로 bruteforce에서 해결했기 때문
    dp[N][M] = true;

    for(let i = N; i>= 0; i--) {
        for(let j = M; j >= 0; j--) {
            if(i < N && s1[i] === s3[i+j] && dp[i+1][j]) {
                dp[i][j] = true
            }

            if(j < M && s2[j] === s3[i+j] && dp[i][j+1]) {
                dp[i][j] = true
            }
        }
    }

    return dp[0][0]
};