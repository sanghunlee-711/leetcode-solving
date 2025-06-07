/**
 * @param {number} n
 * @return {string[]}
 //backtracking이라 하면 더 이해되어야 하나
// "(" 가 들어오면 ")"가 들어가거나 "(" 가 들어가거나 케이스로 만들면
    // open > close 라면 open, close둘다 추가 가능
 */
var generateParenthesis = function(n) {
    const res = [];

    function dfs(openCount, closeCount, currRes) {
        //모두 채운 케이스이므로
        if(openCount === closeCount && openCount === n) {
            return res.push(currRes);
        }

        if(openCount < n) {
            const open = "(";
            dfs(openCount + 1, closeCount, currRes + open)
        }

        if(closeCount < openCount) {
            const close = ")";
            dfs(openCount, closeCount+1, currRes + close)
        }
    }

    dfs(0,0, "")
    return res;
};  