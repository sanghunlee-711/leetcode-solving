/**
 * @param {string} s
 * @return {string}
 */
// collect word in first rotate;
// do reverse in array 
// and join with single space

var reverseWords = function(s) {
    return s.split(" ").filter((char) => char.length).reverse().join(" ");
    
    
};