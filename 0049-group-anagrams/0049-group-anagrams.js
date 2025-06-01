/**
 * @param {string[]} strs
 * @return {string[][]}
 아나그램 체크 하는 펑션을 만들어도 되나
 어차피 정렬하면 다 같아야함
 1. 정렬된 것을 Map의 key로 함
 2. values반환
 */
var groupAnagrams = function(strs) {
   const res = new Map();

    for(const str of strs) {
        const sortedStr = str.split("").sort().join("");
        
        if(!res.has(sortedStr)) res.set(sortedStr, []);
        const currVal = res.get(sortedStr);
        res.set(sortedStr, [str, ...currVal]);
    }
    
   return Array.from(res.values()); 
};