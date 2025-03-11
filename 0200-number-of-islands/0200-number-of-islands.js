/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const ROWS = grid.length,
        COLS = grid[0].length;
    let islandCount = 0;
    
    function dfs (row, col, grid) {
        //범위 벗어나면 return;
        if(row >= ROWS || col >= COLS || row < 0 || col < 0) return;
        //0을 마주쳐도 return
        if(grid[row][col] === '0') return;
        //방문하면 0 처리
        grid[row][col] = '0';
        //사방으로 dfs
        dfs(row + 1, col, grid)
        dfs(row - 1, col, grid)
        dfs(row, col + 1, grid)
        dfs(row, col - 1, grid)
    }

    for(let r = 0; r < ROWS; r++) {
        for(let c = 0; c < COLS; c++) {
            if(grid[r][c] === '1') {
                islandCount+= 1;
                dfs(r, c, grid)
            }   
        }
    }

    return islandCount;
};