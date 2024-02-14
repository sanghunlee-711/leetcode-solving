/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 출구를 찾으면 가장 가까운 곳의 출구로 향하는 스텝을 반환
 찾지 못하면 -1,
 출구 밖으로 나가는것은 카운트 X
 */
var nearestExit = function(maze, entrance) {
    const rows = maze.length,
          cols = maze[0].length; //it's square
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    const startRow = entrance[0],
          startCol = entrance[1];
    // 시작점은 출구로 치지않기에 방문처리
    maze[startRow][startCol] = "visited";
    
    //BFS를 entrance에서 부터 시작
    const queue = [];
    queue.push([startRow, startCol, 0]);
    
    while(queue.length > 0) {
        const currState = queue.shift();
        const currRow = currState[0],
              currCol = currState[1],
              currDistance = currState[2];
        
        //이웃 확인
        for(const dir of dirs) {
            const nextRow = currRow + dir[0],
                  nextCol = currCol + dir[1];
            const isNext = 0 <= nextRow  
                            && nextRow < rows 
                            && 0 <= nextCol 
                            && nextCol < cols
                            && maze[nextRow][nextCol] === ".";
            
            if(isNext) {
                const isExit = nextRow == 0 
                                        || nextRow == rows - 1 
                                        || nextCol == 0 
                                        || nextCol == cols - 1;
                
              if (isExit){
                return currDistance + 1;  
              }
                
            //mark visited
            maze[nextRow][nextCol] = "visited";
            queue.push([nextRow, nextCol, currDistance + 1])
            }
        }
    }
    
    //찾지 못한 경우
    return -1;
};