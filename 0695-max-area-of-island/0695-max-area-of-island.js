/**
 * @param {number[][]} grid
 * @return {number}
 row, col회문 돌면서 1인 경우 dfs로 탐색 시작
 이 때, 방문처리를 진행할 때 1을 0으로 만들 것인데, 각 step이 끝날때마다 0으로 변환한 값을 반환해주고
 그 중 가장 맥스값을 알면 될 것 같음.
 */
var maxAreaOfIsland = function(grid) {
    const ROWS = grid.length, COLS = grid[0].length;
    let result = 0;

    function dfs(row, col, grid) {
        if(row >= ROWS || col >= COLS || row < 0 || col < 0) return 0;
        if(grid[row][col] === 0) return 0;
        let space = 0;

        grid[row][col] = 0;
        space += 1; //1->0으로 바뀐 개수를 여기선 넓이라 함.
        
        space += dfs(row+1, col, grid)
        space += dfs(row-1, col, grid)
        space += dfs(row, col+1, grid)
        space += dfs(row, col-1, grid)

        return space;
    }



    for(let r = 0; r < ROWS; r++) {
        for(let c = 0; c < COLS; c++) {
            if(grid[r][c] === 1) {
                result = Math.max(result, dfs(r, c, grid))
            }
        }
    }
    return result;
};