/**
 * @param {number} n
 * @return {number[]}
 */
const popCount = x => {
    let count = 0;
    
    for(count = 0; x != 0; count++) {
        x &= x - 1;
    }
    return count;
}

var countBits = function(n) {
    const ans = Array.from({length: n + 1}, () => 0) ;
    for(let i = 0; i <= n; ++i) {
        ans[i] = popCount(i);
    }
    return ans;
};