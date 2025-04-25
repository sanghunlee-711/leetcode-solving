/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 @description TopDown 매번 모든 케이스에 대해 고려 해보기 DFS -> Bottom Up dp[i] = 금액 i를 만들기 위한 최소 동전 개수
 */
var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0; // 금액 0을 만들기 위한 동전 수는 0개

    //코인 count를 리턴할거임
    for(let i = 1; i <= amount; i++) {
        for(let coin of coins) {
            if(i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i-coin] + 1);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount]
};


// DP Top Down
// var coinChange = function(coins, amount) {
//     const memo = new Map();

//     //코인 count를 리턴할거임
//     function dfs(amount) {
//         if(amount == 0) return 0;
//         if(memo.has(amount)) return memo.get(amount);

//         let res = Infinity;
//         for(let coin of coins) {
//             if(amount - coin >= 0){
//                 const next = 1 + dfs(amount - coin);
//                 res = Math.min(res, next);
//             } 
//         }

//         memo.set(amount, res);

//         return res;
//     }

//     const count = dfs(amount);

//     return count === Infinity ? -1 : count;
// };