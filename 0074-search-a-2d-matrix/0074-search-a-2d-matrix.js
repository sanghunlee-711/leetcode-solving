/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 // flat 시키면서 포지션 만들어놓고 한방에 이진탐색 때리면 ?.. -> 될 것 같긴함

 */
var searchMatrix = function(matrix, target) {
    const matrixFlat = matrix.flatMap((el)=> el);
    
    let L = 0;
    let R = matrixFlat.length - 1;

    while(L <= R) {
        const mid = Math.floor((L+R)/2);
        const curr = matrixFlat[mid];

        if(target > curr) {
            L = mid + 1;
        }else if (target < curr) {
            R = mid -1;
        }else {
            return true;
        }
    }

    return false;
};