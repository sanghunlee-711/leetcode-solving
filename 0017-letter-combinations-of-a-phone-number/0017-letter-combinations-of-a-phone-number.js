/**
 * @param {string} digits
 * @return {string[]}
 */
// classic backtracking problem
// we don't have specific condition for finding elements \
// so check everything with recursive way of iterative with queue;

//1. make map for digits and charPath
//2. do backtarcking with recursive fucntion thah check every possibility

const backtrack = (idx, map, currCombination, digits, combinations) => {
    //base case
    if(currCombination.length === digits.length) {
        return combinations.push(currCombination);
    }
    
    const currChars = map[digits[idx]];
    
    for(const char of currChars) {
        const newCombination = currCombination + char;
        backtrack(idx+1, map, newCombination, digits, combinations);
    }
}

var letterCombinations = function(digits) {
    const map = {
        "2" : "abc",
        "3" : "def",
        "4" : "ghi",
        "5" : "jkl",
        "6" : "mno",
        "7" : "pqrs",
        "8" : "tuv",
        "9" : "wxyz"
    };
    const combinations = [];
    
    //base case
    if(digits.length === 0) return combinations;
    
    backtrack(0, map, '', digits, combinations);
    
    return combinations;
};