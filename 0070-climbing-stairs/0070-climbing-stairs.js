/**
 * @param {number} n
 * @return {number}
 */
 /**
  1- > 1 => 1
  2 -> 1+1, 2 => 2
  3 -> 1+1+1, 1+2, 2+1 => 3
  4 -> 1+1+1+1, 2+1+1, 2+2, 1+2+1, 1+1+2 => 5
  fn(n) = fn(n-1) + fn(n-2)
  base = if(n === 1) return 1
  if(n === 2) return 2
  T.C: O(n)
  S.C: O(2^n)
  */
const memo = new Map();
var climbStairs = function(n) {
    if(n<=2) return n;

    
    const key = `${n}`;

    if(memo.has(key)) return memo.get(key);
    const value = climbStairs(n-2) + climbStairs(n-1)
    memo.set(key, value)
    return value;
};