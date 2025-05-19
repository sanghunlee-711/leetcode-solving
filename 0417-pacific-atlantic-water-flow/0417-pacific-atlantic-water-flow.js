/**
 * @param {number[][]} heights
 * @return {number[][]}
상하 좌우에서 역 방향(오름차순이 되는 경우)에 해당하는 좌표를 넣고
거기서 겹치는 부분만이 정답이 되는 것임

 */

 const directions = [
    [1,0],
    [0,1],
    [0,-1],
    [-1,0]
 ];

var pacificAtlantic = function(heights) {
    const rows = heights.length, cols = heights[0].length;
    const pacific = Array.from({length: rows}, 
                    ()=> Array.from({length: cols}, () => false));
    const atlantic = Array.from({length: rows}, 
                    ()=> Array.from({length: cols}, () => false));
    const res = [];

    function dfs(r,c, visited, prevHeight){
        visited[r][c] = true;

        for(const [dx, dy] of directions) {
            const nr = dx + r,
                nc = dy + c;

            if(nr >= 0 && nr < rows &&
                nc >= 0 && nc < cols &&
                heights[nr][nc] >= heights[r][c] &&
                !visited[nr][nc]) {
                    dfs(nr, nc, visited, heights[r][c])
                }
        }
    }

    //왼쪽row에서부터 진행
    for(let i = 0; i < rows; i++) dfs(i, 0, pacific, -Infinity)
    //위쪽 row부터 진행
    for(let j = 0; j < cols; j++) dfs(0, j, pacific, -Infinity)

    //우측row에서부터 진행
    for (let i = 0; i < rows; i++) dfs(i, cols - 1, atlantic, -Infinity); // 우측
    //아래쪽 row부터 진행
    for (let j = 0; j < cols; j++) dfs(rows - 1, j, atlantic, -Infinity); // 아래쪽



    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            if(pacific[r][c] && atlantic[r][c]) {
                res.push([r,c])
            }
        }
    }

    return res;
};