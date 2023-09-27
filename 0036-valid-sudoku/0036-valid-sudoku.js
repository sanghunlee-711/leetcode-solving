/**
 * @param {character[][]} board
 * @return {boolean}
 */
/*
각 행에 1~9만 들어가야함 -> 중복있으면 유효 스도쿠 아님!
각 열에도 1~9만 들어가야함 -> 중복있으면 유효 스도쿠 아님!
각 3*3 subBox에도 1~9만 들어가야함 -> 중복있으면 유효 스도쿠 아님!
 인덱스를 /3 했을때 나머지에따라 구획을 나눌 수 있게 됨!
 따라서 subBox의  set 배열의 구분은 이걸 사용하면 될 듯!
 */
var isValidSudoku = function(board) {
    const length = board.length;
    
    const rowSet = Array.from({length}, ()=>new Set());
    const colSet = Array.from({length}, ()=>new Set());
    const subBoxSet = Array.from({length}, ()=>new Set());
    
    for(let r = 0; r < board.length; r++) {
        for(let c = 0; c < board[0].length; c++) {
            const curr = board[r][c];
            const subBoxPos = 3 * Math.floor(r/3) + Math.floor(c/3);
            
            
            if(curr !== "."){
                if(rowSet[r].has(curr)) return false;
                if(colSet[c].has(curr)) return false;
                if(subBoxSet[subBoxPos].has(curr)) return false;

                rowSet[r].add(curr);
                colSet[c].add(curr);
                subBoxSet[subBoxPos].add(curr);    
            }
        }
    }
    return true;
};