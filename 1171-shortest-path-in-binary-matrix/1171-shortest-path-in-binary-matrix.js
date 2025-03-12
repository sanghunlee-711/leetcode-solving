/**
 * @param {number[][]} grid
 * @return {number}
 // 기존 4way에서 8way로 변경된것 외에는 차이가 없음
 // shortest path..
 */
var shortestPathBinaryMatrix = function(grid) {
    const ROWS = grid.length,
        COLS = grid[0].length;
    //못본 엣지 케이스
    if (grid[0][0] === 1 || grid[ROWS - 1][COLS - 1] === 1) return -1;
    //시작 지점 방문처리
    const queue = [];
    const visited = Array.from({length: ROWS}, (_,i) => {
        return Array.from({length: COLS}, (_,i) => 0)
    });

    queue.push([0,0,1]);
    visited[0][0] = 1;
    const directions = [
        [1,1],
        [1,0],
        [1,-1],
        [0,1],
        [0,-1],
        [-1,-1],
        [-1,0],
        [-1,1],
    ]

    while(queue.length > 0) {
        const queueLen = queue.length;
        
        for(let i = 0; i < queueLen; i++) {
            const [row, col, len] = queue.shift();

            if(row === ROWS - 1 && col === COLS - 1) {
                //끝에 도달하는경우 반환
                return len;
            }

            for(let j = 0; j < directions.length; j++) {
                const [addRow, addCol] = directions[j];
                const [newRow, newCol] = [addRow + row, addCol + col];

                if(newRow >= ROWS 
                || newRow < 0 
                || newCol >= COLS
                || newCol < 0
                || visited[newRow][newCol] === 1
                || grid[newRow][newCol] === 1) {
                    continue;
                }
                
                queue.push([newRow, newCol, len + 1]);
                visited[newRow][newCol] = 1; //방문처리
            }
        }
    }
  
    return -1;
};