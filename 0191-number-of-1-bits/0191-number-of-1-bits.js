/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    
    for(count = 0; n != 0; count++) {
        //0이 아닌 최하위 비트를 0으로 만든다
        n &= n - 1;
    }
    return count;
};