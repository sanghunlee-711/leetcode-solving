/**
 * @param {number[][]} grid
 * @return {number}
 // 0,0부터 시작을 하는데
  2: 썪은 오렌지
  1: 그냥 오렌지
  0: 빈공간

 */
const directions = [[1,0],[-1,0],[0,1],[0,-1]];

var orangesRotting = function(grid) {
    const ROWS = grid.length, COLS = grid[0].length;
    const queue = [];
    let freshCount = 0,
        minute = 0; //매 queue마다(사방으로 번질때마다) 시간이 흐르므로
    
    for(let r = 0; r < ROWS; r++) {
        for(let c =0; c < COLS; c++) {
            const curr = grid[r][c];
            if(curr === 1) freshCount ++;
            if(curr === 2) queue.push([r,c]);
        }
    }
    
    if(freshCount === 0) return 0;

    while(queue.length > 0 && freshCount > 0) {
        const queueLen = queue.length;

        for(let i = 0; i < queueLen; i++) {
            const [row, col] = queue.shift();

            for(let j = 0; j < directions.length; j++) {
                const [addRow, addCol] = directions[j];
                const [newRow, newCol] = [row + addRow, col + addCol];

                if(newRow < 0 
                || newCol < 0
                || newRow >= ROWS
                || newCol >= COLS
                || grid[newRow][newCol] === 2
                || grid[newRow][newCol] === 0) { //0은 고민좀 해보자
                    continue;
                }

                if(grid[newRow][newCol] === 1) {
                    queue.push([newRow, newCol])
                    grid[newRow][newCol] = 2;
                    freshCount--;
                }
            }
            
        }
        minute += 1;
    }

    return freshCount === 0 ? minute : -1;
};