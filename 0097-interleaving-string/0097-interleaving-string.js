/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    const [N,M,L] = [s1.length, s2.length, s3.length];

    if(N+M !== L) return false;

    const memo = Array.from({length: N+1}, () => Array(M+1).fill(-1));

    function dfs(i1, i2, i3) {
        if(i3 === L) return (i1 === N && i2 === M);
        if(memo[i1][i2] !== -1) return memo[i1][i2];

        if(i1 < N && s1[i1] === s3[i3]) {
            const res = dfs(i1+1, i2, i3+1)
            memo[i1][i2] = res
            if(res) return res;
        }

        if((i2 < M && s2[i2] === s3[i3])) {
            const res = dfs(i1, i2+1, i3+1)
            memo[i1][i2] = res
            if(res) return res;
        }

        return false;
    }

    const result = dfs(0,0,0);
    return result;
};