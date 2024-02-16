/**
 * @param {number[][]} grid
 * @return {number}
 */
/*
definitely bfs with graph problem
In each time move to adjacent graph and check
and check
after finishing traversal, if there is still 1 orange
return value'd be 'count'
otherwise, return -1

처음에 2인것부터 먼저 찾아야하나 -> 
1. 2인 포지션 찾기 -> queue에 넣기 , 1인거 카운트하기
2. 2인 곳에서 부터 bfs?
그럼 충돌하면 어케되냐
방문처리는 'visit'으로 한다
*/
var orangesRotting = function(grid) {
    const queue = [];
    const direction = [[1,0],[0,1],[-1,0],[0,-1]];
    const rowLen = grid.length;
    const colLen = grid[0].length;
    //1. 2인포지션 먼저 찾기
    let freshOrange = 0;
    
    for(let row = 0; row < rowLen; row++){
        for(let col = 0; col < colLen; col++) {
            if(grid[row][col] === 2) queue.push([row, col]);
            if(grid[row][col] === 1) freshOrange+=1;
        }
    }
    
    queue.push(['visit','visit']);
    
    let count = 0;
    
    //2. bfs (with 방문처리)
    while(queue.length > 0) {
        const curr = queue.shift();
        const [currRow, currCol] = curr;
        
        //이게 표시된거면 전단계에서 이미 방문된 것이므로 절차상 카운트 + 1 및 queue가 비어있지 않다면 방문처리를 위해 visit 주입
        if(currRow === 'visit') {
            count += 1; //프로세스 종료
            
            if(queue.length > 0) {
                queue.push(['visit', 'visit']);
            }
            
            continue;
        }
        
        //go 4direction
        for(const [x, y] of direction) {
            const nextRow = currRow + x;
            const nextCol = currCol + y;
            
            const isNext = nextRow >= 0 && nextCol >=0 && nextRow < rowLen && nextCol < colLen;
            
            if(isNext) {
                if(grid[nextRow][nextCol] === 1) {
                    grid[nextRow][nextCol] = 2;
                    freshOrange-=1;
                    queue.push([nextRow, nextCol]);
                }    
            }
        }
    }
    
    
    return freshOrange === 0 ? count-1 : -1;
};