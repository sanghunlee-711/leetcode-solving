/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 @description 매번 모든 케이스에 대해 고려 해보기 DFS
 */
var coinChange = function(coins, amount) {
    const memo = new Map();

    //코인 count를 리턴할거임
    function dfs(amount) {
        if(amount == 0) return 0;
        if(memo.has(amount)) return memo.get(amount);

        let res = Infinity;
        for(let coin of coins) {
            if(amount - coin >= 0){
                const next = 1 + dfs(amount - coin);
                res = Math.min(res, next);
            } 
        }

        memo.set(amount, res);

        return res;
    }

    const count = dfs(amount);

    return count === Infinity ? -1 : count;
};