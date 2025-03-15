/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 // bottomup: T.C: O(n*m), S.C:O(2*m)
 */
var uniquePaths = function(m, n) {
    let prevRow = Array.from({length: n}, () => 0);

    //아래에서 위로
    for(let i = m - 1; i >= 0; i--) {
        let currentRow = Array.from({length: n}, () => 0);

        currentRow[n - 1] = 1; //마지막 열은 항상 1일 수 밖에 없다.
        //우측에서 좌측으로
        for(let j = n - 2; j >= 0; j--) {
            currentRow[j] = currentRow[j+1] + prevRow[j];
        }
        prevRow = currentRow;
    }

    return prevRow[0];
};