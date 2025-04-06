/**
 * @param {string} s
 * @return {boolean}
 A man, a plan, a canal: Panama 
 amanaplanacanalpanama 
 use RegEx
 */
const isAlphanum = (curr) => {
    return ((curr >= "a" && curr <= "z") ||
            (curr >= "A" && curr <= "Z") ||
            (curr >= "0" && curr <= "9"));
}

var isPalindrome = function(s) {
    const len = s.length;    
    let L = 0, R = len - 1;

    while(L < R) {
        while(!isAlphanum(s[L]) && L < R) L++;
        while(!isAlphanum(s[R]) && L < R) R--;
        if(s[L].toLowerCase() !== s[R].toLowerCase()) return false;
        
        L++;
        R--;
    }

    return true

};