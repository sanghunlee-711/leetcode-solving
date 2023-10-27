/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// start, end // end < t.length;
//
var isSubsequence = function(s, t) {
    if(s.length > t.length) return false;
    let start = 0 , end = 0;
    
    while(start < s.length && end < t.length) {
        if(s[start] === t[end]) start++;
        end++
    }
    
    return start === s.length;
};