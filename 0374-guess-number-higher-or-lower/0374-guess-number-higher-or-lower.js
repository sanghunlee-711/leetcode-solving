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
// base (?) start <= end

var guessNumber = function(n) {
    let start = 0, end = n;
    
    while(start <= end) {
        let mid = Math.floor((start + end) / 2) ;
        const guessing = guess(mid);
        
        if(guessing === 0) return mid;
        else if(guessing === -1) end = mid - 1; // higher number pick
        else if(guessing === 1) start = mid + 1; // lower number pick
    }
    
    return -1;
};