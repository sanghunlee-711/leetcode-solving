/**
 * @param {string} s
 * @return {string}
 */

function helpPalindrome(l, r, s) {
    let maxLen = 0;
    let L = l;
    let R = r;

    while(L >= 0 && R < s.length && s[L] === s[R]) {
        maxLen = Math.max(R-L +1, maxLen);
        L--;
        R++;
    }

    return [maxLen, s.slice(L+1,R)];
}
var longestPalindrome = function(s) {
    let subS = '';
    let length = 0;

    for(let i = 0; i < s.length; i++) {
        //odd
        const [oddMaxLen, oddSubString] = helpPalindrome(i, i, s);
        if(oddMaxLen > length) {
            subS = oddSubString;
            length = oddMaxLen;
        }
        //even
        const [evenMaxLen, evenSubString] = helpPalindrome(i, i+1, s);
        if(evenMaxLen > length) {
            subS = evenSubString;
            length = evenMaxLen;
        }
    }

    return subS;
};