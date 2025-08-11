/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 @description
 완전 탐색 형태로 모두 탐색해야하는거 아닌가
 1. dfs 형태로 다음 단어 찾으면 계속 사방으로 업데이트 감
 2. backtracking??
 */
var exist = function(board, word) {
    const ROWS = board.length,
        COLS = board[0].length,
        S = word.length;

    const dfs = (r, c, point) => {
        //문자열 탐색이 다 된 경우
        if(point === S) return true;
        //범위 벗어난 경우
        if(r >= ROWS || c >= COLS || r < 0 || c < 0) return false;
        //현재 문자열이 매치가 안되는 경우
        if(board[r][c] !== word[point]) return false;
        
        //백트래킹을 위한 임시 저장
        const currTemp = board[r][c];
        board[r][c] = "*"
        const result = dfs(r + 1, c, point + 1)
                    || dfs(r, c + 1, point + 1)
                    || dfs(r - 1, c, point + 1)
                    || dfs(r, c - 1, point + 1)
        //백트래킹
        board[r][c] = currTemp;

        return result
    }


    for(let i = 0; i < ROWS; i++) {
        for(let j = 0; j < COLS; j++) {
            if(dfs(i, j, 0)) return true;
        }
    }

    return false;
};  