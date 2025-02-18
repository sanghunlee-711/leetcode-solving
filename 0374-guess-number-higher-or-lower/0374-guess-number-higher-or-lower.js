/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let L = 1, R = n;

    while(L <= R) {
        const mid = Math.floor((L+R)/2);
        const res = guess(mid);

        if(res === -1) {
            R = mid - 1;
        }else if(res === 1) {
            L = mid + 1;
        }else {
            return mid;
        }
    }

    return -1;  
};