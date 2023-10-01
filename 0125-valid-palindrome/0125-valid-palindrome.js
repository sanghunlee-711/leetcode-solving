/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    const validRegex = /[^a-zA-Z0-9]/g;
    
    s = s.replaceAll(validRegex, '').toLowerCase();
    
    return s === s.split('').reverse().join('');
};