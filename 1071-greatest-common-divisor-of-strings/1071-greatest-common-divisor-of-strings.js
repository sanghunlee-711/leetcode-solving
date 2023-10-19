/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const checkGcd = (pos1, pos2) => {
    if(pos2 === 0) return pos1;
    return checkGcd(pos2, pos1 % pos2);
}

var gcdOfStrings = function(str1, str2) {
    if((str1 + str2) !== (str2 + str1)) return "";
    
    
    const gcdLength = checkGcd(str1.length, str2.length);
    
    return str1.slice(0, gcdLength);
};