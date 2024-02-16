/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const queue = [];
    const dir = [[1,0],[0,1],[-1,0],[0,-1]];
    const rowLen = grid.length;
    const colLen = grid[0].length;
    let freshOranges = 0,
        minutes = 0;
    
    //1. 썩은 오렌지 포지션 잡기
    for(let row = 0; row < rowLen; row++) {
        for(let col = 0; col < colLen; col++) {
            if(grid[row][col] === 2) queue.push([row, col]);
            if(grid[row][col] === 1) freshOranges++;
        }
    }
    
    //base case
    if(freshOranges === 0) return 0;

    //3. BFS
    while(queue.length > 0) {
        const currQlen = queue.length;
        let rottenOranges = 0;
        
        for(let i = 0; i < currQlen; i++) {
            const curr = queue.shift();
            const [currRow, currCol] = curr;
            
            if(grid[currRow][currCol] === 1) {
                    grid[currRow][currCol] = 2;
                    rottenOranges++;
            }
        
            // 4.사방으로 진행
            for(const [x,y] of dir) {
                const nextRow = currRow + x;
                const nextCol = currCol + y;

                const isNext = nextRow >= 0 
                            && nextCol >= 0
                            && nextRow < rowLen
                            && nextCol < colLen;
                        

                if(isNext && grid[nextRow][nextCol] === 1) {
                        queue.push([nextRow, nextCol]);
                }

            }
        }
        
        if(rottenOranges > 0) {
            freshOranges -= rottenOranges;
            minutes++;
        }    
      
    }
    
    return freshOranges === 0 ? minutes : -1;
};