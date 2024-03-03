/**
 * @param {number[]} comb
 * @param {number} k
 * @param {number[]} combinations
 * @return void
 */
const backtrack = (comb, k, combinations, remain, start) => {
    // base case for backtrack
    if(comb.length === k && remain === 0) return combinations.push(comb);
    else if(remain < 0 || comb.length === k) return; //exceed scope;
    
    for(let i = start; i < 9; i++) {
        const nextComb = [...comb, i+1],
              nextRemain = remain - i - 1,
              nextStart = i + 1;
        backtrack(nextComb, k, combinations, nextRemain, nextStart);
    }
}

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const combinations = [];
    
    backtrack([], k, combinations, n, 0);
    
    return combinations;
};