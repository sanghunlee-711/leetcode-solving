/**
 * @param {number} n
 * @return {number}
 */
// f(k) => The number of ways to fully cover a board of width 
// p(k) => The number of ways to partially cover a board of width 
//f(k) = f(k-1) + f(k-2) + 2 * p(k-1)
// p(k) = p(k−1) + f(k−2)

// Super hard to get this even watch solution
// choose bottom up DP way

var numTilings = function(n) {
    const MOD = 10 ** 9 + 7;
    
    //base case
    if(n <= 2) return n;
    
    const f = Array.from({length: n+1}, () => null);
    const p = Array.from({length: n+1}, () => null);
    f[1] = 1, f[2] = 2, p[2] = 1;
    
    for(let k = 3; k < n + 1; k++) {
        f[k] = (f[k-1] + f[k-2] + 2 * p[k-1]) % MOD;
        p[k] = (p[k-1] + f[k-2]) % MOD;
    }
    
    return f[n]
    
};