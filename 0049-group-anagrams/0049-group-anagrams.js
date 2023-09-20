/**
 * @param {string[]} strs
 * @return {string[][]}
 */

//
// 1. 객체에서 같은 키의 값에 배열을 두고 다 넣어주면 됨
// 해쉬 맵 활용이라 보면 될듯

const doSort = (str) => str.split("").sort().join('');

var groupAnagrams = function(strs) {
    const map = new Map();
    
    strs.forEach((str) => {
        const sortedStr = doSort(str);
        
        if(!map.has(sortedStr)) map.set(sortedStr,[str]);
        else map.set(sortedStr,[...map.get(sortedStr), str]);
    });
    
    return [...map.values()];
};