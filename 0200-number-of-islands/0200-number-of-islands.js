/**
 * @param {character[][]} grid
 * @return {number}
 visited처리를 하면서 모든 좌표에 dfs를 진행하면
 bfs가 진행되는 횟수만큼이 섬의 개수가 되겠죠?
 visited처리시 방문했던곳을 다시 방문하지는 않을 것이므로
 */
 const directions = [
    [1,0],
    [0,-1],
    [0,1],
    [-1,0]
 ];

var numIslands = function(grid) {
    if(!grid || !grid.length) return 0;

    const rows = grid.length,
        cols = grid[0].length;
    const visited = Array.from({length: rows}, () => Array.from({length:cols}, ()=> false));
    let count = 0;

    function bfs(r,c) {
        const queue = [[r,c]];
        visited[r][c] = true;

        while(queue.length) {
            const [row, col] = queue.shift();
            for(const [dx, dy] of directions) {
                const nr = dx + row,
                    nc = dy + col;

                if(nr >= 0 && nr < rows &&
                    nc >= 0 && nc < cols &&
                    grid[nr][nc]==='1' &&
                    visited[nr][nc] === false) {
                    visited[nr][nc] = true
                    queue.push([nr,nc]);
                }
            }
        }
    }

    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            if(grid[r][c] === '1' && !visited[r][c]) {
                count+=1;
                bfs(r,c)
            }
            
        }
    }

    return count;
};