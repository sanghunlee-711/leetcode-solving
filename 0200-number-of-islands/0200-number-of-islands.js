/**
 * @param {character[][]} grid
 * @return {number}
 방문처리를 꼭 한다
 전체 회문을 돌면서 bfs를 통해 카운트를 한다.
 회문돌때 1인 경우만 bfs를 한다
 bfs는 0을만나거나 Edge에 해당하는경우 멈춘다.
 */
 const directions = [
    [1,0],
    [-1,0],
    [0,-1],
    [0,1],
 ]

var numIslands = function(grid) {
    if(!grid || !grid.length) return 0;

    const rows = grid.length,
        cols = grid[0].length;
    let count = 0;
    const visited = Array.from({length: rows}, 
                () => Array.from({length: cols}, 
                () => false));

    function bfs(r,c) {
        const queue = [[r,c]];
        visited[r][c] = true;

        while(queue.length) {
            const [row, col] = queue.shift();
            for(const [dx,dy] of directions) {
                const [nr, nc] = [row + dx, col + dy]
                if(nr >= 0 && nr < rows &&
                    nc >= 0 && nc < cols &&
                    grid[nr][nc] === '1' && !visited[nr][nc]) {
                        visited[nr][nc] = true;
                        queue.push([nr, nc])
                    }
            }
        }
    }

    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            if(grid[r][c] === '1' && !visited[r][c]) {
                count += 1;
                bfs(r,c)
            }
        }
    }

    return count;
};