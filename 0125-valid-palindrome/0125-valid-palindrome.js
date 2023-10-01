/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    let str = '';
    
    s.split("").forEach((eachS)=> {
        const upperRegex = /[A-Z]/g;
        const lowerAndNumberRegex = /[a-z0-9]/g;
        
        if(upperRegex.test(eachS)) {
            str += eachS.toLowerCase();
        }
        else if(lowerAndNumberRegex.test(eachS)) {
            str += eachS
        }
    })
    
    return str.split("").reverse().join("") === str
};