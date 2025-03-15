/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 //bruteforce dfs로 먼저 접근하자.
 // 1: 장애물 이 나오면 해당 케이스는 브레이크 시켜야함. -> 0
 */
var uniquePathsWithObstacles = function(grid) {
    const ROWS = grid.length, COLS = grid[0].length;
    const memo = Array.from({length: ROWS}, ()=> {
        return Array.from({length: COLS} , () => null);
    })

    function dfs (r, c) {
        if(r > ROWS - 1 || c > COLS - 1 || grid[r][c] === 1) return 0
        if(r === ROWS - 1 && c === COLS - 1) return 1;
        
        if(memo[r][c] !== null) return memo[r][c]

        memo[r][c] = dfs(r+1, c) + dfs(r, c + 1);

        return memo[r][c]
    }

    return dfs(0, 0)
};