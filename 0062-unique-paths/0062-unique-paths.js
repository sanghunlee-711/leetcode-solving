/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 T.C: limit to 2 * 10 ^ (9)
 m, n => 1 <= <= 100
 Bruteforce: T.C: O(2^ (100*100))
 Memoization: T.C: O(m + n) => gotit
 BottomUP:
 */
var uniquePaths = function(m, n) {
    const grid = Array.from({length: m}, () => {
        return Array.from({length: n }, () => {
            return 0;
        })
    })

    function memoization(r, c, rows, cols, cache) {
        //base case
        if(r === rows || c === cols) return 0;
        if(cache[r][c] > 0) return cache[r][c]
        if(r === rows - 1 || c === cols - 1) return 1;

        cache[r][c] = (memoization(r+1, c, rows, cols, cache) + memoization(r, c + 1, rows, cols, cache))

        return cache[r][c];
    }

    return (memoization(0, 0, m, n, grid))
};